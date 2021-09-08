// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {data, updateActiveId, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = data
  const onThumbnail = () => {
    updateActiveId(id)
  }
  const activeThumbnailclass = isActive ? 'thumbnail-active' : ''

  return (
    <li className="list-item">
      <button
        type="button"
        className="button"
        className={`thumbnail ${activeThumbnailclass}`}
        onClick={onThumbnail}
      >
        <img src={thumbnailUrl} alt={thumbnailAltText} key={id} />
      </button>
    </li>
  )
}
export default ThumbnailItem
