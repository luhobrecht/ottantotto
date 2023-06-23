import "./photoGrid.css";

export const PhotoGrid = () => {
  return (
    <div className="container text-center mb-5" id="photo-grid">
      <div
        className="row row-cols-2 justify-content-between mb-5"
        id="grid-container"
      >
        <div className="col-4 align-self-center">
          <h2>Nuestra casa</h2>
          <p>
            Contamos con un encantador salón en la planta superior, donde podrás
            disfrutar de una atmósfera relajada y acogedora mientras saboreas
            nuestras pizzas recién salidas del horno. Además, en la planta baja,
            encontrarás un espacio amplio, vibrante y perfectamente aclimatado.
            Allí, podrás reunirte con amigos y familiares para compartir
            momentos especiales.
          </p>
        </div>
        <div className="row row-cols-2 image-container rounded gx-2 gy-2">
          <img
            src="/assets/z-pattern/05-Restaurante/Ottantotto_1-6.jpg"
            className="col image rounded"
            alt="salon inf 7 mesas"
          />
          <img
            src="/assets/z-pattern/05-Restaurante/Ottantotto_1-2.jpg"
            className="col image rounded"
            alt="salon inf 6 mesas"
          />
          <img
            src="/assets/z-pattern/05-Restaurante/Ottantotto_1-3.jpg"
            className="col image rounded"
            alt="salon inf 4 mesas"
          />
          <img
            src="/assets/z-pattern/05-Restaurante/Ottantotto_1-4.jpg"
            className="col image rounded"
            alt="salon inf 6 mesas mas escalera"
          />
        </div>
      </div>
      <div className="row row-cols-2 justify-content-between mb-5">
        <div className="row row-cols-2 image-container rounded gx-2 gy-2">
          <img
            src="/assets/z-pattern/01 La masa/masa1.png"
            className="col image rounded"
            alt="masa1"
          />
          <img
            src="/assets/z-pattern/01 La masa/masa2.png"
            className="col image rounded"
            alt="masa2"
          />
          <img
            src="/assets/z-pattern/01 La masa/masa3.jpg"
            className="col image rounded"
            alt="masa3"
          />
          <img
            src="/assets/z-pattern/01 La masa/masa4.jpg"
            className="col image rounded"
            alt="masa4"
          />
        </div>
        <div className="col-4 align-self-center">
          <h2>La masa</h2>
          <p>
            Nuestra masa, de leudado lento, está hecha con harina de trigo Bio
            italiana. Una masa bien hecha es simplemente hermosa. El resultado
            es una pizza que es leve al cuerpo del comensal, pero profundamente
            gratificante.
          </p>
        </div>
      </div>
      <div className="row row-cols-2 justify-content-between mb-5">
        <div className="col-4 align-self-center">
          <h2>El tomate</h2>
          <p>
            Hacemos la salsa con tomates italianos de primera calidad. Cocida al
            horno, su perfume es incunfundible.
          </p>
        </div>
        <div className="row row-cols-2 image-container rounded gx-2 gy-2">
          <img
            src="/assets/z-pattern/01 La masa/masa1.png"
            className="col image rounded"
            alt="masa1"
          />
          <img
            src="/assets/z-pattern/01 La masa/masa2.png"
            className="col image rounded"
            alt="masa2"
          />
          <img
            src="/assets/z-pattern/01 La masa/masa3.jpg"
            className="col image rounded"
            alt="masa3"
          />
          <img
            src="/assets/z-pattern/01 La masa/masa4.jpg"
            className="col image rounded"
            alt="masa4"
          />
        </div>
      </div>
      <div className="row row-cols-2 justify-content-between mb-5">
        <div className="row row-cols-2 image-container rounded gx-2 gy-2">
          <img
            src="/assets/z-pattern/01 La masa/masa1.png"
            className="col image rounded"
            alt="masa1"
          />
          <img
            src="/assets/z-pattern/01 La masa/masa2.png"
            className="col image rounded"
            alt="masa2"
          />
          <img
            src="/assets/z-pattern/01 La masa/masa3.jpg"
            className="col image rounded"
            alt="masa3"
          />
          <img
            src="/assets/z-pattern/01 La masa/masa4.jpg"
            className="col image rounded"
            alt="masa4"
          />
        </div>
        <div className="col-4 align-self-center">
          <h2>La mozzarella</h2>
          <p>
            Hecha con leche fresca de búfala, tiene un sabor suave y cremoso. Su
            textura elástica y capacidad para fundirse la convierten en el
            complemento perfecto para nuestra pizza deliciosa. Utilizarla
            garantiza una experiencia culinaria auténtica y de alta calidad.
          </p>
        </div>
      </div>
    </div>
  );
};
