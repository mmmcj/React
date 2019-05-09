import React from 'react';
import { Card, Container, Row, Col, Image} from 'react-bootstrap'

function EventSingle({ match, events }) {
  const id = match.params.id;

  const singleEvent = events.filter(e => e.id == id)[0];

  return (
    <React.Fragment>
      <div classNameName="bg_color_1" >
        <nav classNameName="secondary_nav sticky_horizontal" style="">
            <div classNameName="container">
                <ul classNameName="clearfix">
                    <li>
                        <a href="#description" classNameName="active">Description</a>
                    </li>
                    <li>
                        <a href="#reviews">Reviews</a>
                    </li>
                    <li>
                        <a href="#aside">Booking</a>
                    </li>
                </ul>
            </div>
        </nav>
        <div classNameName="container event-content" >
            <div classNameName="row" >
                <div classNameName="col-lg-7">
                    <section id="description">
                        <h2>Description</h2>
                        <p>Per consequat adolescens ex, cu nibh commune
                            <strong>temporibus vim</strong>, ad sumo viris eloquentiam sed. Mea appareat omittantur eloquentiam ad,
                            nam ei quas oportere democritum. Prima causae admodum id est, ei timeam inimicus sed. Sit an
                            meis aliquam, cetero inermis vel ut. An sit illum euismod facilisis, tamquam vulputate pertinacia
                            eum at.</p>
                        <p>Cum et probo menandri. Officiis consulatu pro et, ne sea sale invidunt, sed ut sint
                            <strong>blandit</strong> efficiendi. Atomorum explicari eu qui, est enim quaerendum te. Quo harum viris
                            id. Per ne quando dolore evertitur, pro ad cibo commune.</p>
                        <h3>Instagram photos feed</h3>
                        <div id="instagram-feed" classNameName="clearfix">
                            <div classNameName="instagram_gallery">
                                <a href="#" target="_blank">
                                    <img src="img/img-1.jpg" alt="thelouvremuseum instagram image 0" style="margin:1% 1%;width:14.666666666666666%;float:left;"/>
                                </a>
                                <a href="#" target="_blank">
                                    <img src="img/img-2.jpg"
                                        alt="thelouvremuseum instagram image 1" style="margin:1% 1%;width:14.666666666666666%;float:left;"/>
                                </a>
                            </div>
                        </div>
                        <ul classNameName="cbp_tmtimeline">
                            <li>
                                <time classNameName="cbp_tmtime" datetime="09:30">
                                    <span>30 min.</span>
                                    <span>09:30</span>
                                </time>
                                <div classNameName="cbp_tmicon">
                                    1
                                </div>
                                <div classNameName="cbp_tmlabel">
                                    <div classNameName="hidden-xs">
                                        <img src="img/tour_plan_1.jpg" alt="" className="rounded-circle thumb_visit"/>
                                    </div>
                                    <h4>Interior of the cathedral</h4>
                                    <p>
                                        Vero consequat cotidieque ad eam. Ea duis errem qui, impedit blandit sed eu. Ius diam vivendo ne.
                                    </p>
                                </div>
                            </li>
                            <li>
                                <time className="cbp_tmtime" datetime="11:30">
                                    <span>2 hours</span>
                                    <span>11:30</span>
                                </time>
                                <div className="cbp_tmicon">
                                    2
                                </div>
                                <div className="cbp_tmlabel">
                                    <div className="hidden-xs">
                                        <img src="img/tour_plan_2.jpg" alt="" className="rounded-circle thumb_visit"/>
                                    </div>
                                    <h4>Statue of Saint Reparata</h4>
                                    <p>
                                        Vero consequat cotidieque ad eam. Ea duis errem qui, impedit blandit sed eu. Ius diam vivendo ne.
                                    </p>
                                </div>
                            </li>
                            <li>
                                <time className="cbp_tmtime" datetime="13:30">
                                    <span>1 hour</span>
                                    <span>13:30</span>
                                </time>
                                <div className="cbp_tmicon">
                                    3
                                </div>
                                <div className="cbp_tmlabel">
                                    <div className="hidden-xs">
                                        <img src="img/tour_plan_3.jpg" alt="" className="rounded-circle thumb_visit"/>
                                    </div>
                                    <h4>Huge clock decorated</h4>
                                    <p>
                                        Vero consequat cotidieque ad eam. Ea duis errem qui, impedit blandit sed eu. Ius diam vivendo ne.
                                    </p>
                                </div>
                            </li>
                            <li>
                                <time className="cbp_tmtime" datetime="14:30">
                                    <span>2 hours</span>
                                    <span>14:30</span>
                                </time>
                                <div className="cbp_tmicon">
                                    4
                                </div>
                                <div className="cbp_tmlabel">
                                    <div className="hidden-xs">
                                        <img src="img/tour_plan_4.jpg" alt="" className="rounded-circle thumb_visit"/>
                                    </div>
                                    <h4>Vasari's fresco</h4>
                                    <p>
                                        Vero consequat cotidieque ad eam. Ea duis errem qui, impedit blandit sed eu. Ius diam vivendo ne.
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </section>
                </div>
              

                <aside className="col-lg-5" id="aside">
                    <div className="purchase-box">
                        <div className="box_detail booking">
                            <div className="price">
                                <span>45$
                                    <small>person</small>
                                </span>
                                <div className="score">
                                    <span>Good
                                        <em>350 Reviews</em>
                                    </span>
                                    <strong>7.0</strong>
                                </div>
                            </div>

                            <div className="form-group">
                                <input className="form-control" type="text" name="dates" placeholder="When.."/>
                                <i className="icon_calendar"></i>
                            </div>
                            <div className="panel-dropdown">
                                <a href="#">Guests
                                    <span className="qtyTotal">1</span>
                                </a>
                                <div className="panel-dropdown-content right">
                                    <div className="qtyButtons">
                                        <label>Adults</label>
                                        <div className="qtyDec"></div>
                                        <input type="text" name="qtyInput" value="1"/>
                                        <div className="qtyInc"></div>
                                    </div>
                                    <div className="qtyButtons">
                                        <label>Childrens</label>
                                        <div className="qtyDec"></div>
                                        <input type="text" name="qtyInput" value="0"/>
                                        <div className="qtyInc"></div>
                                    </div>
                                </div>
                            </div>
                            <a href="cart-1.html" className="btn_1 full-width purchase">Purchase</a>
                            <a href="wishlist.html" className="btn_1 full-width outline wishlist">
                                <i className="icon_heart"></i> Add to wishlist</a>
                            <div className="text-center">
                                <small>No money charged in this step</small>
                            </div>
                        </div>
                    </div>
                    <section id="reviews">
							<h2>Reviews</h2>
							<div className="reviews-container">
								<div className="row">
									<div className="col-lg-4">
										<div id="review_summary">
											<strong>8.5</strong>
											<em>Superb</em>
											<small>Based on 4 reviews</small>
										</div>
									</div>
									<div className="col-lg-8">
										<div className="row">
											<div className="col-lg-9 col-9 px-lg-0">
												<div className="progress">
													<div className="progress-bar" role="progressbar" style="width: 90%" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
												</div>
											</div>
											<div className="col-lg-3 col-3"><small><strong>5 stars</strong></small></div>
										</div>
										<div className="row">
											<div className="col-lg-9 col-9 px-lg-0">
												<div className="progress">
													<div className="progress-bar" role="progressbar" style="width: 95%" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
												</div>
											</div>
											<div className="col-lg-3 col-3"><small><strong>4 stars</strong></small></div>
										</div>
										<div className="row">
											<div className="col-lg-9 col-9 px-lg-0">
												<div className="progress">
													<div className="progress-bar" role="progressbar" style="width: 60%" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
												</div>
											</div>
											<div className="col-lg-3 col-3"><small><strong>3 stars</strong></small></div>
										</div>
                    <div className="row">
											<div className="col-lg-9 col-9 px-lg-0">
												<div className="progress">
													<div className="progress-bar" role="progressbar" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
												</div>
											</div>
											<div className="col-lg-3 col-3"><small><strong>2 stars</strong></small></div>
										</div>
										
										<div className="row">
											<div className="col-lg-9 col-9 px-lg-0">
												<div className="progress">
													<div className="progress-bar" role="progressbar" style="width: 0" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
												</div>
											</div>
											<div className="col-lg-3 col-3"><small><strong>1 stars</strong></small></div>
										</div>
										
									</div>
								</div>
							</div>
              </section>
                <div id="map" className="map map_single add_bottom_30">
                
                </div>
                </aside>
            </div>
        </div>
    </div>
    </React.Fragment>
  );
}

export default EventSingle;