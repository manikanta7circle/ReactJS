// Write your JS code here
import './index.css'
import BlogItem from '../BlogItem'

const BlogList = props => {
  const {blogsData} = props
  return (
    <div className="blogs-container">
      <ul className="blog-list-container">
        {blogsData.map(eachBlog => (
          <BlogItem key={eachBlog.id} blogData={eachBlog} />
        ))}
      </ul>
    </div>
  )
}
export default BlogList
