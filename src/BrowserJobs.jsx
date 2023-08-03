import React from "react";
// import { Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import logo from "../src/All Images/pab bottom-logo (1).jpg";
import { Link } from "react-router-dom";
import "./home.css";
import "./BrowserJobs.css";
function BrowserJobs() {
  return (
    <div className="">
      <nav class="navbar navbar-expand-sm">
        <div class="container">
          <img src={logo} alt="logo" width="200px" />
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavbar"
            style={{ backgroundcolor: "black" }}
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="collapsibleNavbar">
            <ul class="navbar-nav logostyle">
              <li class="nav-item">
                <Link to="/Home">
                  <a class="nav-link navstyle " href="">
                    Home
                  </a>
                </Link>
              </li>
              <li class="nav-item">
                <a class="nav-link dropdown-toggle navstyle1" href="">
                  Browse Jobs
                </a>
              </li>
              <li class="nav-item">
                <Link to ="/Jobs"> <a class="nav-link dropdown-toggle navstyle" href="">
                  Jobs
                </a></Link>
              </li>
              <li class="nav-item">
                <a class="nav-link dropdown-toggle navstyle" href="#">
                  services
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link dropdown-toggle navstyle" href="./ ">
                  payments
                </a>
              </li>
              <li class="nav-item logosymbol">
                <i class="fa-solid fa-bell bellicon"></i>
              </li>
              <li class="nav-item logosymbol">
                <a href="profile.html">
                  {" "}
                  <i class=" fa-sharp fa-solid fa-circle-user dropdown-toggle bellicon"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div class="container8">
        <div class="row">
          <div class="col-12">
             
            <h6 class="homepara1 mt-4">Home <i class="fa-solid fa-greater-than"></i>Browser Filter List</h6>
          </div>
          <div class="col-12 homebutton">
            <button class=" subhomebutton shadow w-25">
              <i class="fa-solid fa-magnifying-glass p-3 "></i>job Title or
              company<i class="fa-solid fa-sort-down p-3 "></i>
            </button>
            <button class=" subhomebutton shadow w-25">
              <i class="fa-solid fa-location-dot p-3"></i>city,province or
              Region<i class="fa-solid fa-sort-down p-3 "></i>
            </button>
          </div>
          <div class="homebutton1">
            <button class="subbutton1">Search</button>
          </div>
        </div>
      </div>
      {/* //heading-cards */}
      <section class="container">
        <div class="row">
          <div class="col-lg-1"></div>
            <div class="col-lg-11">
            <div class="d-flex flex-row row">
             
              <li class="col-md-3 col-lg nav-item">
                <div>
                  <button
                    class="dropdown-toggle location21"
                    data-bs-toggle="dropdown"
                    id="browseItem"
                  >
                    Experience
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="#">
                        0 years
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        1 year
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        2 year
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        3 year
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        4 year
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
             
              <li class="col-md-3 col-lg nav-item">
                <div>
                  <button
                    class="dropdown-toggle location21"
                    data-bs-toggle="dropdown"
                    id="browseItem"
                  >
                    Location
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="#">
                        Hyderabad
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Bengaluru
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Chennai
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Tirupati
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Mumbai
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              
              <li class="col-md-3 col-lg nav-item">
                <div>
                  <button
                    class="dropdown-toggle location21"
                    data-bs-toggle="dropdown"
                    id="browseItem"
                  >
                    Salary
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="#">
                        2.5-3 LPA
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        3.5-4 LPA
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        4.5-7 LPA
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        7.5-10 LPA
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        10.5-15 LPA
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              
              <li class="col-md-3 col-lg nav-item">
                <div>
                  <button
                    class="dropdown-toggle indusrty"
                    data-bs-toggle="dropdown"
                    id="browseItem"
                  >
                    Industry
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="#">
                        Manufacturing
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Construction
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        IT
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Transport
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Food industry
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
             
              <li class="col-md-3 col-lg nav-item">
                <div>
                  <button
                    class="dropdown-toggle indusrty"
                    data-bs-toggle="dropdown"
                    id="browseItem"
                  >
                    Destignation
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="#">
                        Chief Customer Officer
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Chief Financial Officer
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Chief Information Officer
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Chief Human Resources Officer
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Chief Product Officer
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            
              <li class="col-md-3 col-lg nav-item">
                <div>
                  <button
                    class="dropdown-toggle indusrty"
                    data-bs-toggle="dropdown"
                    id="browseItem"
                  >
                    Education
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="#">
                        Any Postgraduate
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Any Graduate
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        MBA/PGDM{" "}
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        M.Pharma{" "}
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        MBBS{" "}
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Diploma{" "}
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Medical-MS/MD{" "}
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
             
              <li class="col-md-3 col-lg nav-item">
                <div>
                  <button
                    class="dropdown-toggle indusrty"
                    data-bs-toggle="dropdown"
                    id="browseItem"
                  >
                    Skills
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="#">
                        Core Java
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Dot Net
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Python
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Testing
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        AWS
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Advance Java
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Frames
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </div>
          </div>
          {/* <!-- <div class="col-md"></div> --> */}
        </div>
        {/* <!-- Card Section --> */}
        <div class="row text-start">
            <div class="col-lg-1"></div>
            <div class="col-lg-11">
                <p class="result my-3">Showing 69 results for "Graphics Designing"</p>
                <div class="row">
                    <div class="col-lg-4 col-md-12">
                        <div class="card-container active " id="activeItem">
                            <p class="graphics-item m-0">Graphic Designer <span class="package">4.5-6 LPA</span></p>
                            <p class="angel">Angel Broking</p>
                            <div class="loc-item">
                                <p class="m-0">Full time</p>
                                <p class="m-0">Hyderabad / Secunderabad, Telangana</p>
                                <p class="m-0">Fresher</p>
                                <span class="text-end publish">Published one day ago</span>
                            </div>
                        </div>

                        <div class="card-container-item my-3" id="wiproItem">
                            <p class="graphics-item m-0">Graphic Designer <span class="package">4.5-6 LPA</span></p>
                            <p class="angel">Wipro</p>
                            <div class="loc-item">
                                <p class="m-0">Full time</p>
                                <p class="m-0">Hyderabad / Secunderabad, Telangana</p>
                                <p class="m-0">Fresher</p>
                                <span class="text-end publish">Published one day ago</span>
                            </div>
                        </div>

                        <div class="card-container-item">
                            <p class="graphics-item m-0">Graphic Designer <span class="package">4.5-6 LPA</span></p>
                            <p class="angel">Angel Broking</p>
                            <div class="loc-item">
                                <p class="m-0">Full time</p>
                                <p class="m-0">Hyderabad / Secunderabad, Telangana</p>
                                <p class="m-0">Fresher</p>
                                <span class="text-end publish">Published one day ago</span>
                            </div>
                        </div>
                        <div class="card-container-item my-3" id="activeItem">
                            <p class="graphics-item m-0">Graphic Designer <span class="package">4.5-6 LPA</span></p>
                            <p class="angel">Angel Broking</p>
                            <div class="loc-item">
                                <p class="m-0">Full time</p>
                                <p class="m-0">Hyderabad / Secunderabad, Telangana</p>
                                <p class="m-0">Fresher</p>
                                <span class="text-end publish">Published one day ago</span>
                            </div>
                        </div>
                        <div class="card-container-item" id="activeItem">
                            <p class="graphics-item m-0">Graphic Designer <span class="package">4.5-6 LPA</span></p>
                            <p class="angel">Angel Broking</p>
                            <div class="loc-item">
                                <p class="m-0">Full time</p>
                                <p class="m-0">Hyderabad / Secunderabad, Telangana</p>
                                <p class="m-0">Fresher</p>
                                <span class="text-end publish">Published one day ago</span>
                            </div>
                        </div>
                        <div class="card-container-item my-3" id="activeItem">
                            <p class="graphics-item m-0">Graphic Designer <span class="package">4.5-6 LPA</span></p>
                            <p class="angel">Angel Broking</p>
                            <div class="loc-item">
                                <p class="m-0">Full time</p>
                                <p class="m-0">Hyderabad / Secunderabad, Telangana</p>
                                <p class="m-0">Fresher</p>
                                <span class="text-end publish">Published one day ago</span>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-7 col-md-12" id="Section21">
                        <div class="container">
                            <div class="row">
                                <div class="bg-element">
                                    <div class="d-flex flex-row row">
                                        <div class="wipro-item item-wipro col-md-6 mt-2">
                                            <div class="row">
                                                <div class="col-lg-3">
                                                    <img src="data:image/png;base64,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"
                                                        alt="img" class=" angel-img" id="imgElement" />
                                                </div>
                                                <div class="col-lg-9">
                                                    <p class="graphics-item m-0" style={{fontSize: "20px"}}>Graphic
                                                        Designer
                                                    </p>
                                                    <p class="m-0" id="angelItem">Angel Broking</p>
                                                    <p class="m-0 Show">Show more jobs in the company</p>
                                                </div>
                                            </div>

                                            {/* <!-- <div>
                                                
                                            </div> --> */}
                                        </div>
                                        <div class="wipro-item col-md-6 mt-2">
                                            <div>
                                                <p class="graphics-item m-0" style={{fontSize: "20px"}}>5-10 LPA <span
                                                        class="bookmark"><i class="fa-solid fa-bookmark book"
                                                            id="bookItem"></i></span></p>
                                                <p class="m-0"><i class="fa-solid fa-location-dot"></i> Hyderabad /
                                                    Secunderabad , Telengana</p>
                                                <p class="m-0"><i class="fa-solid fa-briefcase"></i> 1 - 3 years</p>
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                    <div class="d-flex flex-row row">
                                        <div class="col-md-1"></div>
                                        <div class="post col-md-5">
                                            <p class="m-0">Posted: Few Hours Ago</p>
                                            <p class="m-0">Openings:1</p>
                                            <p class="m-0">Job Application:580</p>
                                        </div>
                                        <div class="col-md-6">
                                            <button class="now-item" id="applyItem" onclick="applyBtn()">Apply
                                                Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                             
                                <div class="bg-element scroll-item p-4 my-5">
                                    <h5>Job Description</h5>
                                    <h6>Roles and Responsibilities</h6>
                                    <p>Planning concepts by studying relevant information and materials.</p>
                                    <p>Illustrating concepts by designing examples of art arrangement, size, type size,
                                        and style and submitting them for approval.</p>
                                    <p>Creating a wide range of graphics and layouts for product illustrations, company
                                        logos,
                                        social media Banners, artwork, and websites with software such as Photoshop.</p>
                                    <p>Creating new graphics for social media, Email Marketing, Brochures, Labels &
                                        Stickers for
                                        products, Catalogues, etc., using Adobe tools like Photoshop, illustration, and
                                        InDesign
                                        Coordinating with Artworks, web designer, marketing, printers, and colleagues as
                                        necessary.
                                        Contributing to team efforts by accomplishing tasks as needed</p>
                                    <p>Reviewing final layouts and suggesting improvements when necessary.</p>
                                    <h5>Sills & Responsibilities</h5>
                                    <p>Experience as a graphic designer or in a related field.
                                        Demonstrable graphic design skills with a strong portfolio.
                                        Proficiency with required desktop publishing tools, including Photoshop,
                                        InDesign, and
                                        Illustrator.</p>
                                    <p>A strong eye for visual composition.</p>
                                    <p>Effective time management skills and the ability to meet deadlines.
                                        Able to give and receive constructive criticism.</p>
                                    <p>Understanding of marketing, production, website design, corporate identity,
                                        product
                                        packaging, advertisements, and multimedia design.
                                        Experience with computer-aided design.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
export default BrowserJobs;
