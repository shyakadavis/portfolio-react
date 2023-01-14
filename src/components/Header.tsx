import avatar from '../assets/images/avatar.jpg'

const Header = () => {
  return (
    <div id="topSection" className="flex justify-start my-5">
      <div className="backCard bg-secondary w-28 h-28 flex justify-center items-center rounded-lg -rotate-12">
        <img
          className="avatar w-28 h-28 rounded-full object-cover rotate-12"
          src={avatar}
          alt=""
        />
      </div>

      <div id="title" className="flex flex-col justify-center ml-4">
        <div className="name">
          <p>
            SHYAKA <span className="text-secondary">Davis</span>
          </p>
        </div>
        <div
          id="line"
          className="border-solid border-2 border-tertiary rounded-lg w-full"
        ></div>
        <div className="role">
          <p>Software Developer</p>
        </div>
      </div>
    </div>
  )
}

export default Header
