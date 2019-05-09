import React from 'react';
import { Card, Container, Row, Col, Image} from 'react-bootstrap'

function EventSingle({ match, events }) {
  const id = match.params.id;

  const singleEvent = events.filter(e => e.id == id)[0];

  return (
    <React.Fragment>
      <div className="bg_color_1 mm">
        <div className="container event-content" >
            <div className="row" >
                <div className="col-lg-7">
                    <section id="description">
                        <h2>{singleEvent.title}</h2>
                        <p>{singleEvent.longDesc}</p>
                        <div>
                            <h1>Google map here</h1>
                        </div>
                            
                    </section>
                </div>

                <aside className="col-lg-5" id="aside">
                    <div className="purchase-box">
                        <div className="box_detail booking">
                            <div className="price">
                                <img src={singleEvent.defaultImg} className="img-fluid" alt={singleEvent.title} width="800" height="533" />
                            </div>
                            <div className="price">
                                <span>{singleEvent.price}
                                    <small>kr ,- DKK</small>
                                </span>
                                <div className="score">
                                    <span>Start: {singleEvent.startDate}
                                        <em>Slut: {singleEvent.endDate}</em>
                                    </span>
                                </div>
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
													<div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
												</div>
											</div>
											<div className="col-lg-3 col-3"><small><strong>5 stars</strong></small></div>
										</div>
										<div className="row">
											<div className="col-lg-9 col-9 px-lg-0">
												<div className="progress">
													<div className="progress-bar" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
												</div>
											</div>
											<div className="col-lg-3 col-3"><small><strong>4 stars</strong></small></div>
										</div>
										<div className="row">
											<div className="col-lg-9 col-9 px-lg-0">
												<div className="progress">
													<div className="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
												</div>
											</div>
											<div className="col-lg-3 col-3"><small><strong>3 stars</strong></small></div>
										</div>
                    <div className="row">
											<div className="col-lg-9 col-9 px-lg-0">
												<div className="progress">
													<div className="progress-bar" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
												</div>
											</div>
											<div className="col-lg-3 col-3"><small><strong>2 stars</strong></small></div>
										</div>
										
										<div className="row">
											<div className="col-lg-9 col-9 px-lg-0">
												<div className="progress">
													<div className="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
												</div>
											</div>
											<div className="col-lg-3 col-3"><small><strong>1 stars</strong></small></div>
										</div>
										
									</div>
								</div>
							</div>
                    </section>
                    
                </aside>
            </div>
        </div>
    </div>
    </React.Fragment>
  );
}

export default EventSingle;