    import { useEffect, useState } from "react";
    import { useStudent } from "../hooks/useStudent";

    const StudentFormModal = ({ isOpen, onClose, onSubmit, student }) => {
        const [formData, setFormData] = useState({
            name: "",
            age: "",
            rollno: "",
            course: "",
            year: "",
        });

        // When editing, populate the form with existing student data
        useEffect(() => {
            if (student) {
                setFormData({
                    name: student.name || "",
                    age: student.age || "",
                    rollno: student.rollno || "",
                    course: student.course || "",
                    year: student.year || "",
                });
            } else {
                setFormData({
                    name: "",
                    age: "",
                    rollno: "",
                    course: "",
                    year: "",
                });
            }
        }, [student, isOpen]);

        const handleChange = (e) => {
            const { name, value } = e.target;

            setFormData((prev) => ({
                ...prev,
                [name]: value,
            }));
        };

        const handleSubmit = (e) => {
            e.preventDefault();

            onSubmit(formData);
        };

        if (!isOpen) return null;

        return (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">

                <div className="w-full max-w-lg rounded-xl bg-white p-6 shadow-xl">

                    {/* Header */}
                    <div className="mb-6 flex items-center justify-between">
                        <h2 className="text-2xl font-bold text-gray-800">
                            {student ? "Edit Student" : "Add Student"}
                        </h2>

                        <button
                            type="button"
                            onClick={onClose}
                            className="text-2xl text-gray-400 hover:text-gray-600"
                        >
                            &times;
                        </button>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-4">

                        {/* Name */}
                        <div>
                            <label className="mb-1 block text-sm font-medium text-gray-700">
                                Name
                            </label>

                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Enter student name"
                                required
                                className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                            />
                        </div>

                        {/* Age */}
                        <div>
                            <label className="mb-1 block text-sm font-medium text-gray-700">
                                Age
                            </label>

                            <input
                                type="number"
                                name="age"
                                value={formData.age}
                                onChange={handleChange}
                                placeholder="Enter age"
                                min="1"
                                required
                                className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                            />
                        </div>

                        {/* Roll Number */}
                        <div>
                            <label className="mb-1 block text-sm font-medium text-gray-700">
                                Roll No
                            </label>

                            <input
                                type="text"
                                name="rollno"
                                value={formData.rollno}
                                onChange={handleChange}
                                placeholder="Enter roll number"
                                required
                                className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                            />
                        </div>

                        {/* Course */}
                        <div>
                            <label className="mb-1 block text-sm font-medium text-gray-700">
                                Course
                            </label>

                            <select
                                name="course"
                                value={formData.course}
                                onChange={handleChange}
                                required
                                className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                            >
                                <option value="">Select course</option>
                                <option value="Bca">Bca</option>
                                <option value="Bsc">Bsc</option>
                                <option value="Btech">Btech</option>
                                <option value="Bcom">Bcom</option>
                            </select>
                        </div>

                        {/* Year */}
                        <div>
                            <label className="mb-1 block text-sm font-medium text-gray-700">
                                Year
                            </label>

                            <select
                                name="year"
                                value={formData.year}
                                onChange={handleChange}
                                required
                                className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                            >
                                <option value="">Select year</option>
                                <option value="1">1st Year</option>
                                <option value="2">2nd Year</option>
                                <option value="3">3rd Year</option>
                                <option value="4">4th Year</option>
                            </select>
                        </div>

                        {/* Buttons */}
                        <div className="flex justify-end gap-3 pt-4">

                            <button
                                type="button"
                                onClick={onClose}
                                className="rounded-lg border border-gray-300 px-5 py-2 text-gray-700 hover:bg-gray-100"
                            >
                                Cancel
                            </button>

                            <button
                                type="submit"
                                className="rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-700"
                            >
                                {student ? "Update Student" : "Add Student"}
                            </button>

                        </div>
                    </form>
                </div>
            </div>
        );
    };

    export default StudentFormModal;