import { useState } from "react";
import { useStudent } from "../hooks/useStudent";
import StudentFormModal from "./StudentFormModal";

const StudentTable = () => {
  const { students, loading, error, getAllStudents, getStudent, editStudent, createStudent, deleteStudent } = useStudent();

  const [search, setSearch] = useState("");
  const [course, setCourse] = useState("");
  const [year, setYear] = useState("");
  const [page,setPage] = useState(1);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);

    getAllStudents({
      search: value,
      course,
      year,
      page: 1,
    });
  };

  const handleCourseChange = async(e) => {
    const value = e.target.value;
    setCourse(value);

    await getAllStudents({
      search,
      course: value,
      year,
      page: 1,
    });
  };

  const handleYearChange = async(e) => {
    const value = e.target.value;
    setYear(value);

    await getAllStudents({
      search,
      course,
      year: value,
      page: 1,
    });
  };

  const handleEdit = async (id) => {
    const student = await getStudent(id)
    setSelectedStudent(student)
    setIsModalOpen(true)
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this student?")) {
      await deleteStudent(id);
      await getAllStudents({
        search,
        course,
        year,
        page,
      });
    }
  };

  const handleCreateStudent = async (formData) => {
    try {
      await createStudent(formData);
      setIsModalOpen(false);
      await getAllStudents({
        search,
        course,
        year,
        page,
      });
    } catch (error) {
      console.log(error);
    }
  }

  const handleEditStudent = async (formData) => {
  try {
    await editStudent(selectedStudent._id, formData);

    setSelectedStudent(null);
    setIsModalOpen(false);

    await getAllStudents({
      search,
      course,
      year,
      page,
    });
  } catch (error) {
    console.log(error);
  }
};

  const handleNext = () => {
  const nextPage = page + 1;

  setPage(nextPage);

  getAllStudents({
    search,
    course,
    year,
    page: nextPage,
  });
};

const handlePrevious = () => {
  if (page === 1) return;

  const previousPage = page - 1;

  setPage(previousPage);

  getAllStudents({
    search,
    course,
    year,
    page: previousPage
  });
};

  return (
    <div className="mx-auto max-w-7xl p-6">

      <StudentFormModal
        isOpen={isModalOpen}
        onClose={() => {
          setSelectedStudent(null)
          setIsModalOpen(false)
        }}
        student={selectedStudent}
        onSubmit={selectedStudent ? handleEditStudent : handleCreateStudent}
      />

      {/* Filters */}
      <div className="mb-6 flex flex-col gap-4 md:flex-row">

        {/* Search */}
        <input
          type="text"
          placeholder="Search student by name..."
          value={search}
          onChange={handleSearch}
          className="flex-1 rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
        />

        {/* Course */}
        <select
          value={course}
          onChange={handleCourseChange}
          className="rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-blue-500"
        >
          <option value="">All Courses</option>
          <option value="Bca">BCA</option>
          <option value="Bsc">BSc</option>
          <option value="Btech">BTech</option>
          <option value="Biotech">MCA</option>
        </select>

        {/* Year */}
        <select
          value={year}
          onChange={handleYearChange}
          className="rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-blue-500"
        >
          <option value="">All Years</option>
          <option value="1">1st Year</option>
          <option value="2">2nd Year</option>
          <option value="3">3rd Year</option>
          <option value="4">4th Year</option>
        </select>


        <button
          onClick={() => {
            setSelectedStudent(null);
            setIsModalOpen(true);
          }}
          className="rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-700"
        >
          + Add Student
        </button>



      </div>



      {/* Loading */}
      {loading && (
        <div className="py-10 text-center text-gray-500">
          Loading students...
        </div>
      )}

      {/* Error */}
      {error && (
        <div className="rounded-lg bg-red-100 p-4 text-red-600">
          {error}
        </div>
      )}

      {/* Table */}
      {!loading && !error && (
        <div className="overflow-hidden rounded-lg border border-gray-200 shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left">

              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-3 text-sm font-semibold text-gray-700">
                    Name
                  </th>

                  <th className="px-6 py-3 text-sm font-semibold text-gray-700">
                    Roll No
                  </th>

                  <th className="px-6 py-3 text-sm font-semibold text-gray-700">
                    Course
                  </th>

                  <th className="px-6 py-3 text-sm font-semibold text-gray-700">
                    Year
                  </th>

                  <th className="px-6 py-3 text-sm font-semibold text-gray-700">
                    Age
                  </th>

                  <th className="px-6 py-3 text-sm font-semibold text-gray-700">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody>
                {students.length > 0 ? (
                  students.map((student) => (
                    <tr
                      key={student._id}
                      className="border-t border-gray-200 hover:bg-gray-50"
                    >
                      <td className="px-6 py-4 text-sm text-gray-800">
                        {student.name}
                      </td>

                      <td className="px-6 py-4 text-sm text-gray-600">
                        {student.rollno}
                      </td>

                      <td className="px-6 py-4 text-sm text-gray-600">
                        {student.course}
                      </td>

                      <td className="px-6 py-4 text-sm text-gray-600">
                        {student.year}
                      </td>

                      <td className="px-6 py-4 text-sm text-gray-600">
                        {student.age}
                      </td>

                      <td className="px-6 py-4">
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleEdit(student._id)}
                            className="rounded-md bg-blue-500 px-3 py-1.5 text-sm text-white hover:bg-blue-600"
                          >
                            Edit
                          </button>

                          <button
                            onClick={() => handleDelete(student._id)}
                            className="rounded-md bg-red-500 px-3 py-1.5 text-sm text-white hover:bg-red-600"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="6"
                      className="px-6 py-10 text-center text-gray-500"
                    >
                      No students found
                    </td>
                  </tr>
                )}
              </tbody>

            </table>
            <div className="flex items-center justify-between border-t border-gray-200 px-6 py-4">

              <button
                onClick={handlePrevious}
                disabled={page === 1}
                className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50"
              >
                ← Previous
              </button>

              <span className="text-sm text-gray-600">
                Page {page}
              </span>

              <button
                onClick={handleNext}
                className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
              >
                Next →
              </button>

            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentTable;