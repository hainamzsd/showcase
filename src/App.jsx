import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './style/style.css';
import EditHeader from './components/EditHeader';
import { text } from '@fortawesome/fontawesome-svg-core';
import EditDescription from './components/EditDescription';
import EditFeature from './components/EditFeature';


function App() {





  const [popupMain, setPopupMain] = useState(false);
  const [popupDescriptions, setPopupDescriptions] = useState(false);
  const [popupFeatures, setPopupFeatures] = useState(false);

  const [textIntro, setTextIntro] = useState({
    Name: 'Gembucket',
    Hashtags: ['#solar_breeze', '#red_hold', '#card_guard', '#lotstring', '#tough_joy_fax', '#cardify'],
    Website: 'https://gembucket.com',
    IntroParagraph: 'Tellus in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet at nequeaenean auctorgravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio feugiatnonpretium quis lectus suspendisse.'
  });

  const updateDes = (value) => {
    console.log(value)
    setTextDescription(value)
  }

  const updateFeature = (value) => {
    setFeature(value)
  }

  const updateHeader = (value) => {
    if(value.Name != ''){
      setTextIntro({ ...textIntro, Name: value.Name });
    }
    if (value.Hashtags!='') {
      textIntro.Hashtags.push(value.Hashtags);
    }
    if(value.Website!=''){
      setTextIntro({ ...textIntro, Website: value.Website });
    }
    if(value.IntroParagraph!=''){
      setTextIntro({ ...textIntro, IntroParagraph: value.IntroParagraph });
    }
  }
  const [textDescription, setTextDescription] = useState(

    [
      'Dugue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante velnasand praesent blandit lacinia erat vestibulum sed.',
      'Augue vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere.',
      'Liam neque vestibulum eget vulputate ut ultrices vel'
    ]
  )

  const [features, setFeature] = useState(
    [
      {
        Id: 0,
        Name: 'User research',
        Image: 'feature1.png',
        Description: 'Metus vitae durea nullam ipsum aliquam non mauris morbi non lectus aliquam sit amet aliquam dieam earn magna bibendum imperdiet nullam orci pede.'
      },
      {
        Id: 1,
        Name: 'Getting stakeholde',
        Image: 'feature2.png',
        Description: 'Ipsum ac tellus semper interdum mauris libero ullamcorper purus sit amet nulla quisque arcu libero rustrum sempereed ac lobortis vel dapibus at.'
      },
      {
        Id: 2,
        Name: 'User interaction',
        Image: 'feature3.png',
        Description: 'Sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt anteca veal ipsum praesent blandit lacinia erat vestibulum sed at magna.'
      }
    ]
  )


  useEffect(() => {
  });

  const handleClick = (e) => {
    if (!popupMain) {
      document.body.style.overflow = 'hidden'
    }

    else {
      document.body.style.overflow = 'auto'
    }
    setPopupMain(!popupMain);

  }

  const handleClick2 = (e) => {
    if (!popupDescriptions) {
      document.body.style.overflow = 'hidden'
    }
    else {
      document.body.style.overflow = 'auto'
    }
    setPopupDescriptions(!popupDescriptions);
  }

  const handleClick3 = (e) => {
    if (!popupFeatures) {
      document.body.style.overflow = 'hidden'
    }
    else {
      document.body.style.overflow = 'auto'
    }
    setPopupFeatures(!popupFeatures);
  }

  return (
    <>
      <header>
        <div className="row">
          <div className="col-lg-1 d-flex align-items-center">
            <div className="d-flex flex-column back ">
              <span>Back</span>
              <FontAwesomeIcon icon="fa-thin fa-arrow-left-long" />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="d-flex">
              <img src={require('./assets/Ellipse.png')} alt="" style={{ objectFit: "contain" }} />
              <div className="d-flex flex-column px-2">
                <span className="header-name">Pattie Trusdale</span>
                <span className="header-job">Full-stack Developer</span>
              </div>
            </div>

          </div>
          <div className="col-lg-1 d-flex align-items-center">
            <button>HIRE</button>
          </div>
        </div>
      </header>
      <main className="container-lg">
        <div className="main-content container-lg">
          <div className="top">
            <div className="d-flex justify-content-between">
              <h1>{textIntro.Name}</h1>

              <div className="icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"
                  onClick={(e) => handleClick(e)} style={{ cursor: "pointer" }}>
                  <g clip-path="url(#clip0_2_36)" >
                    <path
                      d="M12.4366 3.3703L16.5051 7.43872L6.20669 17.7371L2.14055 13.6687L12.4366 3.3703ZM19.5922 2.3891L17.7779 0.574722C17.0767 -0.12647 15.9381 -0.12647 15.2345 0.574722L13.4965 2.31271L17.565 6.38116L19.5922 4.35389C20.1361 3.81001 20.1361 2.93294 19.5922 2.3891ZM0.0114436 19.3872C-0.062597 19.7204 0.238254 20.019 0.571513 19.9379L5.10512 18.8387L1.03897 14.7703L0.0114436 19.3872Z"
                      fill="#737373" />
                  </g>
                  <defs>
                    <clipPath id="clip0_2_36">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                {popupMain && <EditHeader handleClose={handleClick}
                  name={textIntro.Name}
                  hashtags={textIntro.Hashtags}
                  website={textIntro.Website}
                  textParagraph={textIntro.IntroParagraph}
                  update={updateHeader}
                />}

                <div className="rounded-icon"></div>
              </div>


            </div>
            <ul className="hashtag">
              {textIntro.Hashtags?.map((hashtag, index) => <li key={index}>{hashtag}</li>)}
            </ul>

            <div className="intro">{textIntro.IntroParagraph}</div>

            <div className="link">
              <span>Official site:</span>
              <a href={textIntro.Website}>{textIntro.Website}</a>
            </div>

            <img id="main-image" alt="" src={require('./assets/Rectangle.png')} />
          </div>

          <section className="description">
            <div className="d-flex justify-content-between">
              <h2>Description</h2>
              <div className="icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"
                  onClick={(e) => handleClick2(e)} style={{ cursor: "pointer" }}>
                  <g clip-path="url(#clip0_2_36)">
                    <path
                      d="M12.4366 3.3703L16.5051 7.43872L6.20669 17.7371L2.14055 13.6687L12.4366 3.3703ZM19.5922 2.3891L17.7779 0.574722C17.0767 -0.12647 15.9381 -0.12647 15.2345 0.574722L13.4965 2.31271L17.565 6.38116L19.5922 4.35389C20.1361 3.81001 20.1361 2.93294 19.5922 2.3891ZM0.0114436 19.3872C-0.062597 19.7204 0.238254 20.019 0.571513 19.9379L5.10512 18.8387L1.03897 14.7703L0.0114436 19.3872Z"
                      fill="#737373" />
                  </g>
                  <defs>
                    <clipPath id="clip0_2_36">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                {popupDescriptions && <EditDescription handleClose={handleClick2}
                  descriptions={textDescription}
                  updateDescription={updateDes}
                />}
                <div className="rounded-icon"></div>
              </div>

            </div>
            <ul>
              {textDescription?.map((text, index) =>
                <li key={index}>
                  {text}
                </li>)}
            </ul>
          </section>

          <section className="features">
            <div className="d-flex justify-content-between">
              <h2>Features</h2>
              <div className="icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"
                  onClick={(e) => handleClick3(e)} style={{ cursor: "pointer" }}>
                  <g clip-path="url(#clip0_2_36)">
                    <path
                      d="M12.4366 3.3703L16.5051 7.43872L6.20669 17.7371L2.14055 13.6687L12.4366 3.3703ZM19.5922 2.3891L17.7779 0.574722C17.0767 -0.12647 15.9381 -0.12647 15.2345 0.574722L13.4965 2.31271L17.565 6.38116L19.5922 4.35389C20.1361 3.81001 20.1361 2.93294 19.5922 2.3891ZM0.0114436 19.3872C-0.062597 19.7204 0.238254 20.019 0.571513 19.9379L5.10512 18.8387L1.03897 14.7703L0.0114436 19.3872Z"
                      fill="#737373" />
                  </g>
                  <defs>
                    <clipPath id="clip0_2_36">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                {popupFeatures && <EditFeature handleClose={handleClick3}
                  featureArray={features}
                  updateFeatures={updateFeature}
                />}
                <div className="rounded-icon"></div>
              </div>

            </div>


            {
              features?.map((feature, index) => {
                if (index % 2 == 0)
                  return <div className="feature-item">
                    <div className="row" key={index}>
                      <div className="col-lg-1">
                        <img className="feature-img" src={require(`./assets/` + feature.Image)} alt="" />
                      </div>
                      <div className="col-lg-4" style={{ margin: "auto" }}>
                        <h3>{feature.Name}</h3>
                        <p>{feature.Description}</p>
                        <hr />
                      </div>
                    </div>
                  </div>
                return <div className="feature-item-right">
                  <div className="row" key={index}>
                    <div className="col-lg-1">
                      <img className="feature-img" src={require(`./assets/` + feature.Image)} alt="" />
                    </div>
                    <div className="col-lg-4" style={{ margin: "auto" }}>
                      <h3>{feature.Name}</h3>
                      <p>{feature.Description}</p>
                      <hr />
                    </div>
                  </div>
                </div>
              })
            }

          </section>
          <section className="member">
            <h2>Team-members</h2>
            <div className="row">
              <div className="col-lg-6 col-md-6 member-item">
                <div className="vl"></div>

                <img src={require('./assets/mem1.png')} alt="" />
                <span className="name">Antons Playden</span>
                <span className="job">Dental Hygienist</span>
              </div>
              <div className="col-lg-6 col-md-6 member-item">
                <div className="vl"></div>
                <img src={require('./assets/mem2.png')} alt="" />
                <span className="name">Lowe Coronas</span>
                <span className="job">Financial Analyst</span>
              </div>
              <div className="col-lg-6 col-md-6 member-item">
                <div className="vl"></div>
                <img src={require('./assets/mem3.png')} alt="" />
                <span className="name">Galvan Bonifas</span>
                <span className="job">Media Manager</span>
              </div>
              <div className="col-lg-6 col-md-6 member-item">
                <div className="vl"></div>
                <img src={require('./assets/mem4.png')} alt="" />
                <span className="name">Galvan Bonifas</span>
                <span className="job">Media Manager</span>
              </div>
            </div>
          </section>
          <section className="contact">
            <h2>Want to know more, contact me!</h2>
            <div className="row" style={{ marginTop: "34px" }}>
              <div className="col-lg-6 col-md-6 col-12 left">
                <div className="py-2">
                  <svg width="24" height="20" viewBox="0 0 24 20" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M21.6 0.400024H2.4C1.08 0.400024 0 1.48002 0 2.80002V17.2C0 18.52 1.08 19.6 2.4 19.6H21.6C22.92 19.6 24 18.52 24 17.2V2.80002C24 1.48002 22.92 0.400024 21.6 0.400024ZM21.6 17.2H19.2V6.64002L12 11.2L4.8 6.64002V17.2H2.4V2.80002H3.84L12 7.84002L20.16 2.80002H21.6V17.2Z"
                      fill="#808080" />
                  </svg>
                  pattietrusdale@gmail.com
                </div>
                <div className="py-2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M23.4619 18.967L19.7555 15.2602C19.0173 14.5249 17.7947 14.5472 17.0307 15.3115L15.1634 17.1784C15.0455 17.1133 14.9233 17.0454 14.795 16.9734C13.6158 16.32 12.0019 15.4245 10.3035 13.7249C8.60019 12.0218 7.70384 10.4054 7.04846 9.22544C6.97931 9.10043 6.91305 8.97991 6.84761 8.86545L8.10085 7.61407L8.71699 6.99717C9.48213 6.23182 9.50323 5.00961 8.76671 4.27219L5.06028 0.56494C4.32376 -0.171449 3.10065 -0.149109 2.33551 0.616239L1.29091 1.66683L1.31946 1.69517C0.969189 2.14211 0.676495 2.65758 0.458681 3.21346C0.257898 3.74258 0.132891 4.2475 0.0757314 4.75346C-0.413678 8.81077 1.4404 12.5188 6.47211 17.5506C13.4275 24.5055 19.0326 23.9801 19.2744 23.9545C19.801 23.8915 20.3057 23.7657 20.8187 23.5665C21.3697 23.3512 21.8848 23.0589 22.3315 22.7094L22.3543 22.7297L23.4126 21.6934C24.1761 20.9282 24.1981 19.7056 23.4619 18.967Z"
                      fill="#808080" />
                  </svg>
                  +8421 223 2234
                </div>
                <div className="py-2">
                  <svg width="21" height="24" viewBox="0 0 21 24" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10.5 0C4.71027 0 0 3.89916 0 8.69185C0 14.6397 9.39647 23.3716 9.79653 23.7404C10.1723 24.0868 10.8284 24.0862 11.2035 23.7404C11.6035 23.3716 21 14.6397 21 8.69185C20.9999 3.89916 16.2897 0 10.5 0ZM10.5 13.065C7.58704 13.065 5.21724 11.1032 5.21724 8.69185C5.21724 6.28051 7.5871 4.31879 10.5 4.31879C13.4129 4.31879 15.7827 6.28055 15.7827 8.6919C15.7827 11.1032 13.4129 13.065 10.5 13.065Z"
                      fill="#808080" />
                  </svg>
                  34 Milwaukee Avenue
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-12 right">
                <div className="social">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M21.8326 6.27045C20.7862 4.43188 19.3669 2.97628 17.5743 1.90333C15.7814 0.830314 13.8241 0.293945 11.701 0.293945C9.57815 0.293945 7.6202 0.830478 5.82768 1.90333C4.03489 2.97623 2.61565 4.43188 1.5693 6.27045C0.523119 8.10897 0 10.1166 0 12.2934C0 14.9082 0.743882 17.2595 2.23202 19.3479C3.72 21.4365 5.64225 22.8817 7.9986 23.6837C8.27289 23.7359 8.47594 23.6992 8.60796 23.5745C8.74003 23.4496 8.80599 23.2932 8.80599 23.1059C8.80599 23.0746 8.80337 22.7935 8.7983 22.2622C8.79307 21.7309 8.79062 21.2673 8.79062 20.8718L8.44018 20.934C8.21675 20.976 7.93489 20.9938 7.59459 20.9887C7.25445 20.9838 6.90135 20.9473 6.53576 20.8793C6.17001 20.812 5.82982 20.6557 5.51492 20.4109C5.20019 20.1661 4.97675 19.8457 4.84468 19.4502L4.69233 19.0906C4.59078 18.8512 4.4309 18.5853 4.21249 18.2938C3.99407 18.0021 3.7732 17.8043 3.54977 17.7002L3.4431 17.6219C3.37202 17.5698 3.30606 17.5071 3.24507 17.4342C3.18413 17.3614 3.1385 17.2885 3.10803 17.2155C3.07751 17.1424 3.1028 17.0825 3.18418 17.0355C3.26556 16.9885 3.41263 16.9657 3.62603 16.9657L3.93062 17.0123C4.13378 17.0541 4.38506 17.1788 4.6848 17.3873C4.98439 17.5955 5.23066 17.8663 5.42367 18.1995C5.6574 18.6267 5.939 18.9522 6.26926 19.1762C6.59926 19.4002 6.93198 19.512 7.2671 19.512C7.60222 19.512 7.89166 19.4859 8.13553 19.4341C8.37914 19.382 8.60769 19.3037 8.82109 19.1996C8.9125 18.5014 9.16139 17.9651 9.56753 17.5901C8.98865 17.5277 8.4682 17.4338 8.00591 17.3088C7.5439 17.1837 7.06646 16.9807 6.57391 16.6992C6.0811 16.4181 5.67229 16.069 5.34736 15.6525C5.02238 15.2358 4.75567 14.6888 4.54761 14.0119C4.33944 13.3347 4.23533 12.5535 4.23533 11.6682C4.23533 10.4076 4.63662 9.33483 5.43904 8.44937C5.06315 7.50162 5.09864 6.43917 5.54561 5.26213C5.84017 5.16827 6.277 5.23871 6.85588 5.47299C7.43487 5.70738 7.85879 5.90817 8.12806 6.07464C8.39733 6.24107 8.61308 6.38209 8.77562 6.49647C9.72042 6.22574 10.6954 6.09035 11.7009 6.09035C12.7064 6.09035 13.6816 6.22574 14.6264 6.49647L15.2053 6.12165C15.6013 5.87156 16.0688 5.64236 16.6068 5.43402C17.1451 5.22579 17.5567 5.16844 17.8413 5.26229C18.2982 6.43939 18.3389 7.50179 17.9629 8.44953C18.7653 9.335 19.1667 10.408 19.1667 11.6683C19.1667 12.5537 19.0622 13.3373 18.8544 14.0197C18.6463 14.7022 18.3773 15.2487 18.0473 15.6603C17.7169 16.0719 17.3055 16.4183 16.8129 16.6994C16.3203 16.9806 15.8427 17.1837 15.3806 17.3088C14.9184 17.4339 14.398 17.5279 13.8191 17.5904C14.3471 18.059 14.6111 18.7986 14.6111 19.8089V23.1055C14.6111 23.2927 14.6746 23.4491 14.8017 23.574C14.9287 23.6987 15.1291 23.7355 15.4034 23.6832C17.7601 22.8813 19.6824 21.436 21.1703 19.3475C22.658 17.2591 23.4022 14.9078 23.4022 12.293C23.4017 10.1165 22.8783 8.10897 21.8326 6.27045Z"
                      fill="#808080" />
                  </svg>
                  <span className="mx-2">github.com/pattietrusdale</span>
                </div>
                <div className="social">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M21.829 0H2.17099C0.972 0 0 0.972 0 2.17099V21.8289C0 23.028 0.972 24 2.17099 24H21.8289C23.028 24 24 23.028 24 21.8289V2.17099C24 0.972 23.028 0 21.829 0ZM7.42662 20.7232C7.42662 21.0721 7.14377 21.355 6.79483 21.355H4.10544C3.7565 21.355 3.47365 21.0721 3.47365 20.7232V9.4494C3.47365 9.10046 3.7565 8.81761 4.10544 8.81761H6.79483C7.14377 8.81761 7.42662 9.10046 7.42662 9.4494V20.7232ZM5.45014 7.75489C4.0391 7.75489 2.8952 6.61099 2.8952 5.19996C2.8952 3.78892 4.0391 2.64503 5.45014 2.64503C6.86117 2.64503 8.00507 3.78892 8.00507 5.19996C8.00507 6.61099 6.86124 7.75489 5.45014 7.75489ZM21.4813 20.7741C21.4813 21.0949 21.2212 21.355 20.9004 21.355H18.0145C17.6937 21.355 17.4335 21.0949 17.4335 20.7741V15.486C17.4335 14.6972 17.6649 12.0292 15.372 12.0292C13.5934 12.0292 13.2327 13.8553 13.1602 14.6749V20.7741C13.1602 21.0949 12.9002 21.355 12.5793 21.355H9.78817C9.46737 21.355 9.20727 21.0949 9.20727 20.7741V9.39851C9.20727 9.07772 9.46737 8.81761 9.78817 8.81761H12.5793C12.9001 8.81761 13.1602 9.07772 13.1602 9.39851V10.3821C13.8197 9.39236 14.7998 8.62844 16.8866 8.62844C21.5077 8.62844 21.4813 12.9457 21.4813 15.3178V20.7741Z"
                      fill="#808080" />
                  </svg>
                  <span className="mx-2">linkedin.com/in/pattie-trusdale-34...</span>
                </div>
                <div className="social">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M20.766 0H3.23429C1.44821 0 0.000244141 1.44791 0.000244141 3.23405V20.7658C0.000244141 22.552 1.44815 23.9999 3.23429 23.9999H11.8808L11.8956 15.4236H9.66746C9.3779 15.4236 9.14288 15.1895 9.14176 14.8999L9.13108 12.1354C9.12996 11.8443 9.36569 11.6077 9.65683 11.6077H11.8809V8.93651C11.8809 5.83661 13.7741 4.14869 16.5394 4.14869H18.8086C19.0989 4.14869 19.3343 4.38406 19.3343 4.67444V7.00547C19.3343 7.29573 19.0991 7.53104 18.8089 7.53122L17.4163 7.53187C15.9125 7.53187 15.6212 8.24648 15.6212 9.29522V11.6078H18.9257C19.2406 11.6078 19.4849 11.8827 19.4478 12.1954L19.1201 14.9599C19.0888 15.2244 18.8645 15.4237 18.5981 15.4237H15.636L15.6212 24H20.7661C22.5522 24 24.0001 22.5521 24.0001 20.766V3.23405C24 1.44791 22.5521 0 20.766 0Z"
                      fill="#808080" />
                  </svg>
                  <span className="mx-2">facebook.com/pattie.trusdale</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <footer className="d-flex justify-content-lg-around justify-content-md-around flex-sm-row flex-column">
        <div>Copyright 2019 © Academic System</div>
        <div>Designed & Developed by Quang Dat Pham</div>
      </footer>
    </>
  );
}

export default App;
