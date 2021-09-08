// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {blogData} = props
  const {title, description, publishedDate} = blogData
  return (
    <li className="blog-container">
      <div className="top-container">
        <h1 className="blog-name">{title}</h1>
        <p className="date">{publishedDate}</p>
      </div>
      <p className="description">{description}</p>
    </li>
  )
}

export default BlogItem
