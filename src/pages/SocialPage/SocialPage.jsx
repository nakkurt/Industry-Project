import './SocialPage.scss'

function SocialPage() {


    return (
        <>
            <div className='social-page'>
                <section className='social-page__headline'>
                    <h1>Hi User!</h1>
                </section>

                <section className='social-page__searchbar'>
                    <label className='social-page__searchbar-label'></label>
                    <input className='social-page__searchbar-input' placeholder='Find Friends'></input>
                </section>

                <section className='social-page__friends'>
                    <h2 className='social-page__friends-headline'>My Network</h2>
                    <div className="social-page__friends-container">
                        <div className='social-page__friends-bubble'>
                            <img src='https://picsum.photos/500/201' alt='phFriend 1' className='social-page__friends-img' />
                            <p>Zachary Smith</p></div>
                        <div className='social-page__friends-bubble'>
                            <img src='/public/images/win_oscars.jpg' alt='phFriend 2' className='social-page__friends-img' />
                            <p>Zachary Smith</p></div>
                        <div className='social-page__friends-bubble'>
                            <img src='https://picsum.photos/500/202' alt='phFriend 3' className='social-page__friends-img' />
                            <p>Zachary Smith</p></div>
                        <div className='social-page__friends-bubble'>
                            <img src='/public/images/win_oscars.jpg' alt='phFriend 4' className='social-page__friends-img' />
                            <p>Zachary Smith</p></div>
                    </div>
                </section>
                <section className='social-page__trending'>
                    <div className='social-page__trending-friends'>
                        <h3 className='social-page__trending-headline'>Friend Trends</h3>
                        <div className='social-page__trending-friends-scroll'>
                            <article className='social-page__trending-card'>
                                <img src='/public/images/00Quack.jpg' alt='recommendedphoto1' className='social-page__trending-img' />
                                <p>details</p>
                            </article>
                            <article className='social-page__trending-card'>
                                <img src='/public/images/00Quack.jpg' alt='recommendedphoto2' className='social-page__trending-img' />
                                <p>details</p>
                            </article>
                            <article className='social-page__trending-card'>
                                <img src='/public/images/00Quack.jpg' alt='recommendedphoto3' className='social-page__trending-img' />
                                <p>details</p>
                            </article>
                            <article className='social-page__trending-card'>
                                <img src='/public/images/00Quack.jpg' alt='recommendedphoto4' className='social-page__trending-img' />
                                <p>details</p>
                            </article>
                            <article className='social-page__trending-card'>
                                <img src='/public/images/00Quack.jpg' alt='recommendedphoto5' className='social-page__trending-img' />
                                <p>details</p>
                            </article>
                        </div>
                    </div>
                </section>

                <section className='social-page__trending'>
                    <div className='social-page__trending-friends'>
                        <h3 className='social-page__trending-headline'>Keep up Friends</h3>
                        <div className='social-page__trending-friends-scroll'>
                            <article className='social-page__trending-card'>
                                <img src='/public/images/00Quack.jpg' alt='recommendedphoto1' className='social-page__trending-img' />
                                <p>details</p>
                            </article>
                            <article className='social-page__trending-card'>
                                <img src='/public/images/00Quack.jpg' alt='recommendedphoto2' className='social-page__trending-img' />
                                <p>details</p>
                            </article>
                            <article className='social-page__trending-card'>
                                <img src='/public/images/00Quack.jpg' alt='recommendedphoto3' className='social-page__trending-img' />
                                <p>details</p>
                            </article>
                            <article className='social-page__trending-card'>
                                <img src='/public/images/00Quack.jpg' alt='recommendedphoto4' className='social-page__trending-img' />
                                <p>details</p>
                            </article>
                            <article className='social-page__trending-card'>
                                <img src='/public/images/00Quack.jpg' alt='recommendedphoto5' className='social-page__trending-img' />
                                <p>details</p>
                            </article>
                        </div>
                    </div>
                </section>


                <section className="social-page__episode-section">
                    <div className='social-page__episode-headline-container'>
                        <h2 className='social-page__episode-headline'>Your Circles</h2>
                        <p>+</p>
                    </div>
                    <div className="social-page__episode-card">
                        <img className="social-page__episode-img" src='/public/images/00Quack.jpg' alt="Episode 1" />
                        <div className="social-page__episode-text">
                            <h3>Fantasy Family</h3>
                            <p>You, Zachary, Sarah and 3 others</p>
                        </div>
                        <img className='three-dots-image' src='/public/images/three-dots-vertical.svg' alt='more items'/>
                    </div>
                    <div className="social-page__episode-card">
                        <img className="social-page__episode-img" src='/public/images/00Quack.jpg' alt="Episode 2" />
                        <div className="social-page__episode-text">
                            <h3>Thriller Takeover</h3>
                            <p>You, Zachary, Jenna and 3 others</p>
                        </div>
                        <img className='three-dots-image' src='/public/images/three-dots-vertical.svg' alt='more items'/>
                    </div>
                    <div className="social-page__episode-card">
                        <img className="social-page__episode-img" src='/public/images/00Quack.jpg' alt="Episode 2" />
                        <div className="social-page__episode-text">
                            <h3>Animation Addicts</h3>
                            <p>You, Jonathan, Jenna, and 3 others</p>
                        </div>
                        <img className='three-dots-image' src='/public/images/three-dots-vertical.svg' alt='more items'/>
                    </div>
                </section>

                <section className="social-page__episode-section">
                    <h2 className='social-page__episode-headline'>Recommended Circle</h2>
                    <div className="social-page__episode-card">
                        <img className="social-page__episode-img" src='/public/images/00Quack.jpg' alt="Episode 1" />
                        <div className="social-page__episode-text">
                            <h3>Fantasy Family</h3>
                            <p>You, Zachary, Sarah and 3 others</p>
                        </div>
                        <img className='three-dots-image' src='/public/images/three-dots-vertical.svg' alt='more items'/>
                    </div>
                </section>


            </div>
        </>
    );
}

export default SocialPage;