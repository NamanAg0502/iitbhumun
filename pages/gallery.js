import ImageCard from "../components/ImageCard";
import ActiveNavBar from "../components/ActiveNavbar";
import data from "../data/data.json"

export default function NavBar() {
  
  return (
    <>
      <ActiveNavBar />
      <div className="h-70 w-full">
        <img src="/images/Rectangle 468.png" alt="image h" />
      </div>

      <div className="flex flex-wrap overflow-y-auto">
        {data.gallery.map((item)=>{
          return(
              <ImageCard
                key={item.id}
                id={item.id}
                src={item.src}
                title={item.title}
              />
          )
        })}

      </div>
    </>
  );
}
