import './Main.css'
import img from './bora-bora-by-pearl-resorts-dinner-on-the-beach.webp'
import img2 from './skynews-peru-machu-picchu_6031983.jpg'
import img3 from './north-queensland-australia-great-barrier-reef.jpg.webp'
import img4 from './cappadocia.webp'
import img5 from './guanajuato_ss_09-1280w.webp'
import img6 from './636689405830408718-GettyImages-475967884.webp'
import img7 from './angkor-wat-cambodia.png.webp'
import img8 from './taj-mahal-74.webp'
import img9 from './bali-island-indon.webp'
import { HiOutlineLocationMarker, HiOutlineClipboardCheck } from "react-icons/hi";
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const Data = [
  {
    id: 1,
    imgsrc: img,
    destitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'The epitome of romance , Bora Bora is one of the best travel destinations in the world. This place is known for its luxurious stays and adventurous activities. '
  },
  {
    id: 2,
    imgsrc: img2,
    destitle: 'Machu Picchu',
    location: 'Peru',
    grade: 'CULTURAL RELAX',
    fees: '$600',
    description: 'Huayna picchu is a mountain in peru , rising over Machu Picchu the so-called Lost of Incas. This place is popular among tourists as the sunrise from the sun gate is simply spectacular'
  },
  {
    id: 3,
    imgsrc: img3,
    destitle: 'Great Barrier Reef',
    location: 'Australia',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'One of the most remarkable Australian natural gifts is the Great Barrier Reef. The hallmark of this place is lavish and beauty Always interesting to be in this place '
  },
  {
    id: 4,
    imgsrc: img4,
    destitle: 'Cappadocia',
    location: 'Turkey',
    grade: 'CULTURAL RELAX',
    fees: '$800',
    description: 'According to the world Tourism Ranking , 45 Million people visit Turkey each year, and from that about 2 Million come to visit Cappadocia.This place is known for its luxurious stays and adventurous activitis'
  },
  {
    id: 5,
    imgsrc: img5,
    destitle: 'Guanajuato',
    location: 'Mexico',
    grade: 'CULTURAL RELAX',
    fees: '$1100',
    description: 'A city in central Mexico, Guanajuato is known for its history of silver mining and colonial architecture. The houses in the city are very attractively painted with the most bright colors available. Always welcome. '
  },
  {
    id: 6,
    imgsrc: img6,
    destitle: 'Cinque Terre',
    location: 'Italy',
    grade: 'CULTURAL RELAX',
    fees: '$840',
    description: 'The vibrant hues of the houses are its benchmark and explain the beauty of this place. Also, if you are a foodie and love seafood, you will be exhilarated with the choice you are about to get here.Happy exploring great food!'
  },
  {
    id: 7,
    imgsrc: img7,
    destitle: 'Angkor wat',
    location: 'Cambodia',
    grade: 'CULTURAL RELAX',
    fees: '$790',
    description: 'Angkot wat representts the entire range of khmar art from the 9th to the 15th century. The temple is considered the heart and soul of Cambodia. This place is known for its luxurious stays and adventurous activities'
  },
  {
    id: 8,
    imgsrc: img8,
    destitle: 'Taj Mahal',
    location: 'India',
    grade: 'CULTURAL RELAX',
    fees: '$900',
    description: 'An immense mausoleum of white marble,built-in Agra by Muhal emperor shah jahan in memory of his wife Mumtaz, The monument is breathtakingly beautiful. This place is known for its luxurious stays and adventurous activities'
  },
  {
    id: 9,
    imgsrc: img9,
    destitle: 'Bali Island',
    location: 'Indonesia',
    grade: 'CULTURAL RELAX',
    fees: '$500',
    description: 'Bali is an Indonesian Island and one of the best holiday destinations in the Indonesian archipelago. Bali is known for its volcanic mountained, history, art & culture, food, temples and beautiful sandy beaches'
  }
]


export default function Main() {

  useEffect(()=>{
    Aos.init({duration:2000})
  },[])

    return (
    <div>
      <section className='main container section'>
        <div className="section-tittle">
          <h3 data-aos='fade-right' className="tittle">
            Most Visited destinations
          </h3>
        </div>

        <div data-aos='fade-up' className="section-content grid">

          {
            Data.map(({ id, imgsrc, destitle, location, grade, fees, description }) => {
              return (
                <div data-aos='fade-up' key={id} className="single-destination">

                  <div className="img-div">
                    <img src={imgsrc} alt={destitle} />
                  </div>

                  <div className="card-info">
                    <h4 className="des-tittle">
                      {destitle}
                    </h4>
                    <span className="continent flex">
                      <HiOutlineLocationMarker className='icon' />
                      <span className="name">{location}</span>
                    </span>

                    <div className="fees flex">
                      <div className="grade">
                        <span>{grade}<small>+1</small></span>
                      </div>
                      <div className="price">
                        <h5>{fees}</h5>
                      </div>
                    </div>

                    <div className="desc">
                      <p>{description}</p>
                    </div>

                    <button className='btn flex'>
                      DETAILS <HiOutlineClipboardCheck className='icon' />
                    </button>

                  </div>

                </div>
              )

            })
          }

        </div>

      </section>
    </div>
  )
}
