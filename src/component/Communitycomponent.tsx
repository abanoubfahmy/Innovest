// import PlatformGraphic from '../assets/2img.png'
interface Iprops {
  headerCommunity?: string;
  description?: string;
  joinUS?: string;
  imgsrc?:string
  alt?:string
  header?:string
}

const Communitycomponent = ({ header,headerCommunity, description, joinUS ,imgsrc,alt}: Iprops) => {
  return (
    <> 
      <section className="community">
        <h3>{header}</h3>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 text-start">
              <h1>{headerCommunity}</h1>
              <p>
          {description}
              </p>
              <button className="btn-join">{joinUS}</button>
            </div>
            <div className="col-lg-6">
              <img
                src={imgsrc}
                alt={alt}
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Communitycomponent;
