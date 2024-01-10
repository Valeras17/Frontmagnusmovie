import movieBackground from '../components/images/movieBackground.jpg'
import regigister from '../components/images/register.jpg'
import movieBackground2 from '../components/images/movieBackground2.jpg'
import login from '../components/images/login.jpg'
import movieBackground3 from '../components/images/movieBackground3.jpg'
import homeUse from '../components/images/homeUse.jpg'
import rateReview from '../components/images/rateReview.jpg'
import ifAdmin from '../components/images/rateReview.jpg'
import addMovie from '../components/images/addMovie.jpg'
import editMovies from '../components/images/editMovies.jpg'
import adminPanel from '../components/images/adminPanel.jpg'
import updateDelete from '../components/images/updateDelete.jpg'
import ifUser from '../components/images/ifUser.jpg'
import userPanel from '../components/images/userPanel.jpg'
import userEditReview from '../components/images/userEditReview.jpg'


const About = () => {
    return (
        <div className="container mx-auto px-4">
            <section className="text-center py-12">
                <h1 className=" text-white text-5xl font-bold mb-4">About the MagnusMovie App</h1>
                <p className=" text-white text-lg">Welcome to Magnus Movie, where you can view information about the movies you're interested in, as well as have the opportunity to rate movies and familiarize yourself with the ratings and reviews of other users!</p>
            </section>

            <section className="relative py-12 bg-fixed bg-center bg-cover" style={{ backgroundImage: `url(${movieBackground})` }}>
                <div className="bg-black bg-opacity-50">
                    <div className="max-w-2xl mx-auto text-white text-center py-12">
                        <h2 className="text-3xl font-semibold mb-4">How to Use</h2>
                        <h2 className="text-3xl font-semibold mb-4">First</h2>
                        <p className="text-2xl mb-4">To start using the app,  first of all you need to register.</p>
                        <img src={regigister} alt="Demonstration register" className="mx-auto mt-4 w-full md:w-3/4" />
                    </div>
                </div>
            </section>

            <section className="relative py-12 bg-fixed bg-center bg-cover" style={{ backgroundImage: `url(${movieBackground2})` }}>
                <div className="bg-black bg-opacity-50">
                    <div className="max-w-2xl mx-auto text-white text-center py-12">
                        <h2 className="text-3xl font-semibold mb-4">Next</h2>
                        <p className="text-2xl mb-4">Now you need to login.</p>
                        <img src={login} alt="Demonstration login" className="mx-auto mt-4 w-full md:w-3/4" />
                    </div>
                </div>
            </section>
            <section className="relative py-12 bg-fixed bg-center bg-cover" style={{ backgroundImage: `url(${movieBackground3})` }}>
                <div className="bg-black bg-opacity-50">
                    <div className="max-w-2xl mx-auto text-white text-center py-12">
                        <h2 className="text-3xl font-semibold mb-4">Next</h2>
                        <p className="text-2xl mb-4">Now you can go to Home page.</p>
                        <img src={homeUse} alt="Demonstration homeUse" className="mx-auto mt-4 w-full md:w-3/4" />
                    </div>
                </div>
            </section>
            <section className="relative py-12 bg-fixed bg-center bg-cover" style={{ backgroundImage: `url(${movieBackground})` }}>
                <div className="bg-black bg-opacity-50">
                    <div className="max-w-2xl mx-auto text-white text-center py-12">
                        <h2 className="text-3xl font-semibold mb-4">Next</h2>
                        <p className="text-2xl mb-4">Here you can rate,review and see others reviews.</p>
                        <img src={rateReview} alt="Demonstration rateReview" className="mx-auto mt-4 w-full md:w-3/4" />
                    </div>
                </div>
            </section>
            <section className="relative py-12 bg-fixed bg-center bg-cover" style={{ backgroundImage: `url(${movieBackground2})` }}>
                <div className="bg-black bg-opacity-50">
                    <div className="max-w-2xl mx-auto text-white text-center py-12">
                        <h2 className="text-3xl font-semibold mb-4">Next</h2>
                        <p className="text-2xl mb-4">If you are Admin, you got access to editing panels.</p>
                        <img src={ifAdmin} alt="Demonstration ifAdmin" className="mx-auto mt-4 w-full md:w-3/4" />
                        <img src={adminPanel} alt="Demonstration adminPanel" className="mx-auto mt-4 w-full md:w-3/4" />
                        <img src={editMovies} alt="Demonstration editMovies" className="mx-auto mt-4 w-full md:w-3/4" />
                        <img src={addMovie} alt="Demonstration addMovie" className="mx-auto mt-4 w-full md:w-3/4" />
                        <img src={updateDelete} alt="Demonstration updateDelete" className="mx-auto mt-4 w-full md:w-3/4" />
                    </div>
                </div>
            </section>
            <section className="relative py-12 bg-fixed bg-center bg-cover" style={{ backgroundImage: `url(${movieBackground3})` }}>
                <div className="bg-black bg-opacity-50">
                    <div className="max-w-2xl mx-auto text-white text-center py-12">
                        <h2 className="text-3xl font-semibold mb-4">Next</h2>
                        <p className="text-2xl mb-4">If you are User, you got access to editing YOUR reviews.</p>
                        <img src={ifUser} alt="Demonstration ifUser" className="mx-auto mt-4 w-full md:w-3/4" />
                        <img src={userPanel} alt="Demonstration userPanel" className="mx-auto mt-4 w-full md:w-3/4" />
                        <img src={userEditReview} alt="Demonstration userEditReview" className="mx-auto mt-4 w-full md:w-3/4" />
                    </div>
                </div>
            </section>
            <section className="relative py-12 bg-fixed bg-center bg-cover" style={{ backgroundImage: `url(${movieBackground3})` }}>
                <div className="bg-black bg-opacity-50">
                    <div className="max-w-2xl mx-auto text-white text-center py-12">
                        <h2 className="text-3xl font-semibold mb-4">Thank you,and have a nice day!</h2>
                        
                        
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
