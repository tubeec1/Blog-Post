// import React, { useEffect, useState } from "react";

// let inputs = [
//   {
//     label: "Title",
//     name: "title",
//     type: "text",
//     placeholder: "Enter a category title",
//   },
//   {
//     label: "Slug",
//     name: "slug",
//     type: "text",
//     placeholder: "Enter a category slug",
//   },
// ];
// const Categories = () => {
//  const [categories, setCategories] = useState([]);
//  const [showForm, setShowForm] = useState(false);
// const [selectedCategory, setSelectedCategory] = useState(null);
// const [formData, setFormData] = useState({
//   name: "",
//   slug: "",
// });
// const handleEdit = (cat) => {
//   setSelectedCategory(cat);

//   setFormData({
//     name: cat.name,
//     slug: cat.slug,
//   });

//   setShowForm(true);
// };
//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const res = await fetch("http://localhost:5000/api/categories/read");
//         const data = await res.json();

//         setCategories(data.data);
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     fetchCategories();
//   }, []);
//  const handleUpdate = async (e) => {
//   e.preventDefault();

//   const res = await fetch(
//     `http://localhost:5000/api/categories/update/${selectedCategory.id}`,
//     {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(formData),
//     }
//   );

//   const data = await res.json();

//   if (data.status) {
//     alert("Category updated successfully");

//     setShowForm(false);
//     setSelectedCategory(null);

//     // refresh data
//     window.location.reload();
//   } else {
//     alert("Update failed");
//   }
// };
//   return (
//     <div className="p-6">
//       <div className="flex items-center justify-between mb-4">
//         <h1 className="text-2xl font-bold text-pink-500">
//           Categories Dashboard
//         </h1>

//         <button className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-md shadow"
//          onClick={()=>setShowForm(true)}>
       
//           Create Category
//         </button>
//       </div>

//       <div className="overflow-x-auto flex h-screen">
//         <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
//           <thead className="bg-gray-100 text-gray-700">
//             <tr>
//               <th className="py-3 px-4 border">ID</th>
//               <th className="py-3 px-4 border">Name</th>
//               <th className="py-3 px-4 border">Slug</th>
//               <th className="py-3 px-4 border">User ID</th>
//               <th className="py-3 px-4 border">Created At</th>
//               <th className="py-3 px-4 border">Actions</th>
//             </tr>
//           </thead>

//           <tbody>
//             {categories.map((cat) => (
//               <tr
//                 key={cat.id}
//                 className="text-center border-t hover:bg-gray-50"
//               >
//                 <td className="py-2 px-3 border">{cat.id}</td>

//                 <td className="py-2 px-3 border font-semibold">{cat.name}</td>

//                 <td className="py-2 px-3 border">{cat.slug}</td>

//                 <td className="py-2 px-3 border">{cat.user_id}</td>

//                 <td className="py-2 px-3 border">
//                   {new Date(cat.created_at).toLocaleString()}
//                 </td>

//                 <td className="py-2 px-3 border space-x-2">
//                   <button className="bg-gray-500 hover:bg-gray-600 text-white px-3 py-1 rounded text-sm"
//                    onClick={()=>handleEdit(cat)}>
//                     Edit
//                   </button>

//                   <button className="bg-pink-500 hover:bg-pink-600 text-white px-3 py-1 rounded text-sm">
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//       {showForm && (
//         <div className="fixed inset-0 bg-[rgba(0,0,0,0.7)]">
//           <div className="w-[50%] h-fit bg-white text-black mx-auto mt-30 py-10 px-10 rounded">
//             <div className="flex justify-between py-2 mb-5">
//               <h1 className="text-3xl font-bold text-center">
//                 Category Registration
//               </h1>
//               <button className="text-3xl cursor-pointer hover:text-pink-500"
//                 onClick={()=>setShowForm(false)}>
//                 X
//               </button>
//             </div>
//             <form className="space-y-4">
//               {inputs.map((input, index) =>
//                 input.options ? (
//                   <div key={index}>
//                     <label className="text-sm">{input.label}</label>
//                     <select
//                       className="w-full mt-1 p-3 rounded-xl bg-gray-50 border border-gray-300 outline-none"
//                       name={input.name}
//                     >
//                       <option disabled>Choose Gender:</option>
//                       {input.options.map((option, index) => (
//                         <option key={index} value={option}>
//                           {option}
//                         </option>
//                       ))}
//                     </select>
//                   </div>
//                 ) : (
//                   <div>
//                     <label className="text-sm">{input.label}</label>
//                     <input
//                       type={input.type}
//                       name={input.name}
//                       placeholder={input.placeholder}
//                       className="w-full mt-1 p-3 rounded-xl bg-gray-50 border border-gray-300 outline-none"
//                     />
//                   </div>
//                 ),
//               )}

//               <button
//                 type="submit"
//                 className="w-full bg-gray-800 text-white py-3 rounded-xl hover:bg-gray-700 transition"
//               >
//                 Create Post
//               </button>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Categories;
import React, { useEffect, useState } from "react";

let inputs = [
  {
    label: "Title",
    name: "name",
    type: "text",
    placeholder: "Enter a category title",
  },
  {
    label: "Slug",
    name: "slug",
    type: "text",
    placeholder: "Enter a category slug",
  },
];

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    slug: "",
  });

  
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/categories/read");
        const data = await res.json();
        setCategories(data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCategories();
  }, []);

  const handleEdit = (cat) => {
    setSelectedCategory(cat);

    setFormData({
      name: cat.name,
      slug: cat.slug,
    });

    setShowForm(true);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

 
  const handleUpdate = async (e) => {
    e.preventDefault();

    const res = await fetch(
      `http://localhost:5000/api/categories/update/${selectedCategory.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    const data = await res.json();

    if (data.status) {
      alert("Category updated successfully");

      setShowForm(false);
      setSelectedCategory(null);

    console.log(formData);
     console.log(selectedCategory);
      setCategories((prev) =>
        prev.map((item) =>
          item.id === selectedCategory.id
            ? { ...item, ...formData }
            : item
        )
      );
    } else {
      alert("Update failed");
    }
  };

  return (
    <div className="p-6">

    
      <div className="flex justify-between mb-4">
        <h1 className="text-2xl font-bold text-pink-500">
          Categories Dashboard
        </h1>

        <button
          onClick={() => setShowForm(true)}
          className="bg-gray-600 text-white px-4 py-2 rounded"
        >
          Create Category
        </button>
      </div>

      
      <table className="min-w-full bg-white border">
        <thead className="bg-gray-100">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Slug</th>
            <th>User ID</th>
            <th>Created At</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {categories.map((cat) => (
            <tr key={cat.id} className="text-center border-t">

              <td>{cat.id}</td>
              <td>{cat.name}</td>
              <td>{cat.slug}</td>
              <td>{cat.user_id}</td>
              <td>{new Date(cat.created_at).toLocaleString()}</td>

              <td className="space-x-2">

                <button
                  onClick={() => handleEdit(cat)}
                  className="bg-gray-500 text-white px-3 py-1 rounded"
                >
                  Edit
                </button>

                <button className="bg-pink-500 text-white px-3 py-1 rounded">
                  Delete
                </button>

              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showForm && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center">

          <div className="bg-white w-[50%] p-6 rounded">

            <div className="flex justify-between mb-4">
              <h1 className="text-xl font-bold">
                Edit Category
              </h1>

              <button onClick={() => setShowForm(false)}>
                X
              </button>
            </div>

            <form onSubmit={handleUpdate} className="space-y-4">

              {inputs.map((input, index) => (
                <div key={index}>

                  <label>{input.label}</label>

                  <input
                    type={input.type}
                    name={input.name}
                    value={formData[input.name] || ""}
                    onChange={handleChange}
                    placeholder={input.placeholder}
                    className="w-full border p-2"
                  />

                </div>
              ))}

              <button
                type="submit"
                className="w-full bg-gray-800 text-white py-2"
              >
                Update Category
              </button>

            </form>

          </div>

        </div>
      )}

    </div>
  );
};

export default Categories;
