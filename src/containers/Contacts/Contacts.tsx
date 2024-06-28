const Contacts = () => {
  return (
    <div className="mt-5">
      <div className="mt-5 bg-light p-5 rounded text-dark d-flex flex-column gap-5">
        <h2>
          <strong>Contacts</strong>;
        </h2>
        <div className="input-group flex-nowrap align-items-center">
          <img
            src="https://cdn-icons-png.freepik.com/512/535/535239.png"
            style={{ width: '50px' }}
            className="input-group-text d-block"
            id="addon-wrapping"
          />
          <span
            className="form-control"
            aria-label="Username"
            aria-describedby="addon-wrapping"
          >
            Ленина, 324Б/1 Bishkek, 72354340, Kyrgyzstan
          </span>
        </div>
        <div className="input-group flex-nowrap align-items-center">
          <img
            src="https://cdn-icons-png.freepik.com/256/15/15874.png?ga=GA1.1.5236191.1719216742&semt=ais_hybrid"
            style={{ width: '50px' }}
            className="input-group-text d-block"
            id="addon-wrapping"
          />
          <span
            className="form-control"
            aria-label="Username"
            aria-describedby="addon-wrapping"
          >
            +996 556 969 696
          </span>
        </div>
        <div className="input-group flex-nowrap align-items-center">
          <img
            src="https://t3.ftcdn.net/jpg/01/81/00/34/240_F_181003490_CxW4fQ0H3VypIIsPkFGpMDviO8ysWjOZ.jpg"
            style={{ width: '50px' }}
            className="input-group-text d-block"
            id="addon-wrapping"
          />
          <span
            className="form-control"
            aria-label="Username"
            aria-describedby="addon-wrapping"
          >
            Sky_bar@gmail.com
          </span>
        </div>
        <div className="input-group flex-nowrap align-items-center">
          <img
            src="https://cdn-icons-png.freepik.com/256/13689/13689399.png?ga=GA1.1.5236191.1719216742&semt=ais_hybrid"
            style={{ width: '50px' }}
            className="input-group-text d-block"
            id="addon-wrapping"
          />
          <span
            className="form-control"
            aria-label="Username"
            aria-describedby="addon-wrapping"
          >
            www.Sky_bar.com
          </span>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
