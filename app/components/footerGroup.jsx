const FooterGroup = ({links, linksName, title}) => {
  return (
    <div>
      <h3 className='footer_title'>{title}</h3>
      <ul className='footer_links'>
        <li>
          <a href={links[0]} className='footer_link'>{linksName[0]}</a>
        </li>
        <li>
          <a href={links[1]} className='footer_link'>{linksName[1]}</a>
        </li>
        <li>
          <a href={links[2]} className='footer_link'>{linksName[2]}</a>
        </li>
      </ul>
    </div>
  )
}

export default FooterGroup