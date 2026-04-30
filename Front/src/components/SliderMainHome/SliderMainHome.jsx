
// Importa los componentes Swiper de React
import { Swiper, SwiperSlide } from 'swiper/react';

// Importa los estilos para el slider Swiper
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Importa módulos requeridos
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';


export default function App() {

  return (
    
    <div className="w-full h-[65vh] min-h-[400px] max-h-[700px] overflow-hidden clip-slider-home">

        <Swiper
          centeredSlides={true}
          effect={'fade'}
          autoplay={{
            delay: 7000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: false,
          }}
          navigation
          modules={[EffectFade, Navigation, Pagination, Autoplay]}
          className="h-full w-full"
        >
        {/* Se pueden agregar más diapositivas de video según sea necesario */}
          <SwiperSlide>
            <video autoPlay muted loop className="w-full h-full object-cover">
              <source
                src="https://res.cloudinary.com/dc3pogjef/video/upload/v1693791075/Anuncio_para_Redes_Asia%CC%81tico_Restaurante_Entrega_a_Domicilio_8_igxllh.mp4"
                type="video/mp4"
              />
            </video>
          </SwiperSlide>
          <SwiperSlide>
            <video autoPlay muted loop className="w-full h-full object-cover">
              <source
                src="https://res.cloudinary.com/dc3pogjef/video/upload/v1693791075/Anuncio_para_Redes_Asia%CC%81tico_Restaurante_Entrega_a_Domicilio_7_clwjri.mp4"
                type="video/mp4"
              />
            </video>
          </SwiperSlide>
          <SwiperSlide>
            <video autoPlay muted loop className="w-full h-full object-cover">
              <source
                src="https://res.cloudinary.com/dc3pogjef/video/upload/v1693791074/Anuncio_para_Redes_Asia%CC%81tico_Restaurante_Entrega_a_Domicilio_6_fbzmhp.mp4"
                type="video/mp4"
              />
            </video>
          </SwiperSlide>
        </Swiper>

    </div>

  );
}








