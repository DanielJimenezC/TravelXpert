const Destination = ({altImage, image, title}) => {
  return (
    <article className='home_card'>
      <img src={image} alt={altImage} className='home_card_img'/>
      <h3 className='home_card_title'>{title}</h3>
      <div className='home_card_shadow'></div>
    </article>
  )
}

export default Destination