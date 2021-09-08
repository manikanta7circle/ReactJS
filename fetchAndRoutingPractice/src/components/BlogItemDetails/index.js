// Write your JS code here
import Loader from 'react-loader-spinner'
import {Component} from 'react'
import './index.css'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class BlogItemDetails extends Component {
  state = {blogData: {}, isLoading: true}

  componentDidMount() {
    this.getBlogData()
  }

  getBlogData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    const updatedData = {
      imageUrl: data.image_url,
      title: data.title,
      author: data.author,
      avatarUrl: data.avatar_url,
      content: data.content,
      id: data.id,
      topic: data.topic,
    }
    this.setState({blogData: updatedData, isLoading: false})
  }

  renderBlogData = () => {
    const {blogData} = this.state
    const {imageUrl, title, author, avatarUrl, content} = blogData
    return (
      <div className="blog-info">
        <h1 className="blog-title">{title}</h1>
        <div className="avatar-container">
          <img src={avatarUrl} alt={author} className="avatar-blog-image" />
          <p className="author-name">{author}</p>
        </div>
        <img src={imageUrl} className="blog-image" alt={title} />
        <p className="content">{content}</p>
      </div>
    )
  }

  renderLoading = () => (
    <div testid="loader">
      <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
    </div>
  )

  render() {
    const {isLoading} = this.state

    return (
      <div className="blog-list-container">
        {isLoading ? this.renderLoading() : this.renderBlogData()}
      </div>
    )
  }
}
export default BlogItemDetails
