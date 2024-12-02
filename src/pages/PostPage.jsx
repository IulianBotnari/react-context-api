import { useParams, useNavigate } from "react-router"
import { useEffect, useState } from "react"


export default function PostPage() {

    const [posts, setPosts] = useState([])
    const [nextPost, setNextPost] = useState({})
    const { id } = useParams();


    "127.0.0.1:3000/posts/$:" + id


    const [indexOfSelectedPost, setIndexOfSelectedPost] = useState(id)

    async function fetchPost() {
        try {

            const response = await fetch(`http://127.0.0.1:3000/posts/`)

            const data = await response.json()

            const index = data.findIndex(elemnt => elemnt.id === id)
            console.log(index);

            setIndexOfSelectedPost(index)



            setPosts(data)
            console.log(data);
        }





        catch (error) {
            console.error('Error:', error)
        }
    }

    function handleNextButton() {

        setNextPost(posts[indexOfSelectedPost + 1])

    }


    useEffect(() => {
        fetchPost()
    }, [])






    return (


        <>



            <div key={posts[indexOfSelectedPost].id} id-post={posts[indexOfSelectedPost].id} className="bg-light-subtle my-4 p-4 rounded-5">
                <div className="d-flex justify-content-between" >
                    <h3>{posts[indexOfSelectedPost].title}</h3>


                </div>

                <div className='d-flex'>
                    <div>

                        <img className="my-4 border border-2 border-warning" src="https://picsum.photos/id/1/200/300" width="" />
                    </div>

                    <div className='m-4'>
                        <p key={posts[indexOfSelectedPost].id}><strong>Contenuto: </strong>{posts[indexOfSelectedPost].content}</p>

                        <p><strong>Tags: </strong>{posts[indexOfSelectedPost].tags}</p>

                        {posts[indexOfSelectedPost].published && <p>Pubblicato ✅</p>}

                    </div>

                </div>

                <button onClick={handleNextButton}>next</button>


            </div >






        </>
    )
}