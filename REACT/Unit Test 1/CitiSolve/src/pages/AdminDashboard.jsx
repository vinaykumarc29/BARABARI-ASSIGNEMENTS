import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import Loader from '../components/Loader';
import './AdminDashboard.css';

function AdminDashboard() {

    const [complaints, setComplaints] = useState(null);
    const [filter, setFilter] = useState('all');
    const [search, setSearch] = useState(``);
    const [category, setCategory] = useState("");
    const [loading, setLoading] = useState(true);
    const [errorMsg, setErrorMsg] = useState(null);
    const [selectedStatus, setSelectedStatus] = useState({});
    const [resolutionNotes, setResolutionNotes] = useState({});

    const { logout, isAuth, setIsAuth, role } = useFetch();


    const navigate = useNavigate();




    const URL = `https://citisolve-smarter-complaint-resolution.onrender.com/api`;
    const token = localStorage.getItem('token');

    if (role != 'admin') {
        navigate('/');
    }

    const fetchAllComplaints = async () => {
        try {
            // setLoading(true);
            const response = await fetch(`${URL}/complaints`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            const data = await response.json();
            console.log(data);

            if (!response.ok) {
                throw new Error(data.message || `Something Went wrong !!`);
            }

            setComplaints(data);



        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    const updateComplaintStatus = async (status, id, note) => {

        try {

            const response = await fetch(`${URL}/complaints/${id}/status`, {
                method: "PATCH",
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "content-type": "application/json"
                },
                body: JSON.stringify({
                    status: status,
                    resolutionNote: note
                })
            });

            const data = await response.json();
            console.log(data)

            if (!response.ok) {
                throw new Error(data.message);
            }

            await fetchAllComplaints();
        } catch (error) {
            console.log(error);
        }

    }

    useEffect(() => {
        fetchAllComplaints();
    }, []);

    const filteredComplaints = !complaints
        ? []

        : complaints.filter((comp) => {

            const statusMatch = filter === 'all' || comp.status === filter;

            const categoryMatch = category === '' || comp.category === category;

            const searchMatch = (search.trim() === "") || comp.name.toLowerCase().includes(search.toLowerCase()) ||
                comp.location.toLowerCase().includes(search.toLowerCase()) ||
                comp.ward.toLowerCase().includes(search.toLowerCase()) ||
                comp._id.toLowerCase().includes(search.toLowerCase()) ||
                comp.description.toLowerCase().includes(search.toLowerCase());


            return statusMatch && categoryMatch && searchMatch;
        });

    const getComplaintsCount = useMemo(() => {
        if (complaints) {
            return {
                Open: complaints.filter((comp) => comp.status == `Open`).length,
                InProgress: complaints.filter((comp) => comp.status == `In Progress`).length,
                Resolved: complaints.filter((comp) => comp.status == `Resolved`).length
            }
        }
        return {
            Open: 0,
            InProgress: 0,
            Resolved: 0
        }

    }, [complaints]);



    return (
        <div>

            {loading ? <Loader /> :

                <div className="adminDashboardContainer">
                    <div className="heading">

                        <h1>Admin Dashboard </h1>
                        <br />
                        <p>Manage and monitor all citizen complaints</p>
                    </div>

                    <div className="complaint-stats">
                        <div className="stats-card">
                            <h2 className="complaints-count">{complaints?.length || 0}</h2>
                            <p className='stat'>TOTAL COMPLAINTS</p>
                        </div>

                        <div className="stats-card">
                            <h2 className="complaints-count">{getComplaintsCount.Open}</h2>
                            <p className='stat'>Open</p>
                        </div>
                        <div className="stats-card">
                            <h2 className="complaints-count">{getComplaintsCount.InProgress}</h2>
                            <p className='stat'>In Progress</p>
                        </div>

                        <div className="stats-card">
                            <h2 className="complaints-count">{getComplaintsCount.Resolved}</h2>
                            <p className='stat'>Resolved</p>
                        </div>

                    </div>
                    <div className="searchContainer">
                        <input type="text" name="searchBar" value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Search complaint by id,name,complaint,location or ward' id="searchBar" />

                        <select name="complaint-status" value={filter} onChange={(e) => setFilter(e.target.value)} id="complaint-status">
                            <option value="all">All status</option>
                            <option value="Open">Open</option>
                            <option value="In Progress">In progress</option>
                            <option value="Resolved">Resolved</option>
                        </select>


                        <select
                            name="complaint-category"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            id="complaint-category"
                        >
                            <option value="">All Categories</option>

                            <option value="Roads">Roads</option>
                            <option value="Water Supply">Water Supply</option>
                            <option value="Sanitation & Waste">Sanitation & Waste</option>
                            <option value="Street Lighting">Street Lighting</option>
                            <option value="Public Safety">Public Safety</option>
                            <option value="Environmental Issues">Environmental Issues</option>
                            <option value="Noise Pollution">Noise Pollution</option>
                            <option value="Garbage Issue">Garbage Issue</option>
                        </select>
                    </div>

                    <div className="complaints-table">

                        <table>
                            <thead>


                                <tr>
                                    <th>id</th>
                                    <th>citizen</th>
                                    <th>ward</th>
                                    <th>category</th>
                                    <th>location</th>
                                    {(filter == `In Progress` || filter == `Resolved`) &&
                                        <>
                                            <th>issue</th>
                                            <th>submitted</th>
                                            <th>last updated</th>
                                            <th>Action</th>
                                        </>

                                    }

                                </tr>
                            </thead>

                            <tbody>



                                {filteredComplaints.map((comp) => {
                                    return <tr key={comp._id}>
                                        <td>{(comp._id).slice(0, 5)}</td>
                                        <td>{comp.name} </td>
                                        <td> {comp.ward} </td>
                                        <td>{comp.category} </td>
                                        <td> {comp.location}  </td>

                                        {(filter == `In Progress` || filter == `Resolved`) && <>

                                            <td>{comp.description} </td>
                                            <td>{comp.createdAt} </td>
                                            <td>{comp.updatedAt}</td>
                                            <td>
                                                <div className="status-updater-container">
                                                    <select
                                                        name="status-updater"
                                                        id="status-updater"
                                                        value={selectedStatus[comp._id] || comp.status}
                                                        onChange={(e) =>
                                                            setSelectedStatus(prev => ({
                                                                ...prev,
                                                                [comp._id]: e.target.value
                                                            }))
                                                        }
                                                    >
                                                        <option value="Open">Open</option>
                                                        <option value="In Progress">In Progress</option>
                                                        <option value="Resolved">Resolved</option>
                                                    </select>

                                                    {selectedStatus[comp._id] &&
                                                        selectedStatus[comp._id] !== comp.status && (
                                                            <textarea className='resolutionTextarea'
                                                                placeholder="Enter resolution note..."
                                                                value={resolutionNotes[comp._id] || ""}
                                                                onChange={(e) =>
                                                                    setResolutionNotes(prev => ({
                                                                        ...prev,
                                                                        [comp._id]: e.target.value
                                                                    }))
                                                                }
                                                            />
                                                        )}
                                                    <button type='submit' name='updateBtn' className="updateBtn"
                                                        onClick={(e) => {

                                                            console.log(e);

                                                            const newStatus =
                                                                selectedStatus[comp._id] || comp.status;

                                                            const note =
                                                                resolutionNotes[comp._id] || "";

                                                            if (newStatus !== comp.status && note.trim() === "") {
                                                                alert("Resolution note is required");
                                                                return;
                                                            }

                                                            updateComplaintStatus(newStatus, comp._id, note);
                                                        }}
                                                    >Submit</button>
                                                </div>
                                            </td>


                                        </>}


                                    </tr>

                                })}
                            </tbody>



                        </table>

                    </div>

                </div>
            }
        </div>
    )
}

export default AdminDashboard
