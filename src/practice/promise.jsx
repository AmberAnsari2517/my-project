export const MyPromise = new Promise((resolve, reject) => {
    // Asynchronous operation
    if (MyPromise) {
      resolve("Success data");
    } else {
      reject("Error message");
    }
  });
  
  MyPromise
    .then((data) => {
      // Handle successful case
      console.log(data);
    })
    .catch((error) => {
      // Handle error case
      console.error(error);
    });
  
    //
    const [data, setData] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [editedData, setEditedData] = useState({ title: '', body: '', userId: '', id: '' });
  
    const { id } = useParams();
  
    useEffect(() => {
      axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response) => {
          setData(response.data);
          setEditedData({ title: response.data.title, body: response.data.body, userId: response.data.userId, id: response.data.id });
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }, [id]);
  
    const handleEditToggle = () => {
      setIsEditing(!isEditing);
    };
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setEditedData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };
  
    const handleSave = () => {
      // Perform save logic, update the post on the server
      // For simplicity, this example only updates the local state
      // You should make an API request to update the post on the server
      setData(editedData);
      setIsEditing(false);
    };
  
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="card my-3">
              <div className="card-body">
                {isEditing ? (
                  <>
                    <h2>Edit Post</h2>
                    <div className="mb-3">
                      <label htmlFor="editedTitle" className="form-label">Title:</label>
                      <input
                        type="text"
                        className="form-control"
                        id="editedTitle"
                        name="title"
                        value={editedData.title}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="editedBody" className="form-label">Body:</label>
                      <textarea
                        className="form-control"
                        id="editedBody"
                        name="body"
                        value={editedData.body}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="editedUserId" className="form-label">ID:</label>
                      <input
                        type="number"
                        className="form-control"
                        id="editedid"
                        name="id"
                        value={editedData.id}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="editedUserId" className="form-label">User ID:</label>
                      <input
                        type="number"
                        className="form-control"
                        id="editedUserId"
                        name="userId"
                        value={editedData.userId}
                        onChange={handleInputChange}
                      />
                    </div>
                    <button className="btn btn-primary" onClick={handleSave}>Save</button>
                  </>
                ) : (
                  <>
                    <h2 className="card-title">{data?.title}</h2>
                    <p className="card-text">{data?.body}</p>
                    <p className="card-text">Post ID: {data?.id}</p>
                    <p className="card-text">User ID: {data?.userId}</p>
                    <button className="btn btn-warning" onClick={handleEditToggle}>Edit Post</button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  