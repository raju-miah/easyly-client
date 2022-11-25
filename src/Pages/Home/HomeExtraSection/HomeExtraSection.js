import React from 'react';

const HomeExtraSection = () => {
    return (
        <section className="mb-20 mt-20 text-gray-700 px-4">
            <div className="text-center max-w-3xl mx-auto">
                <h3 className="text-5xl font-bold mb-6 text-gray-800">Our Buyer Say's</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-12 text-center">
                <div className="mb-6 md:mb-0">
                    <div className="flex justify-center mb-6">
                        <img alt=''
                            src="https://mdbootstrap.com/img/Photos/Avatars/img%20(22).jpg"
                            className="rounded-full shadow-lg w-24"
                        />
                    </div>
                    <p className="text-xl my-4 text-gray-500">
                        "I was really happy for this site service, very trusted. if you want to buy a resell used laptop just go for it."
                    </p>
                    <p className="italic">- Anna Morian</p>
                </div>
                <div className="mb-0">
                    <div className="flex justify-center mb-6">
                        <img alt=''
                            src="https://mdbootstrap.com/img/Photos/Avatars/img%20(19).jpg"
                            className="rounded-full shadow-lg w-24"
                        />
                    </div>
                    <p className="text-xl my-4 text-gray-500">
                        "Neque cupiditate assumenda in maiores repudiandae mollitia architecto elit sed
                        adipiscing elit."
                    </p>
                    <p className="italic">- Teresa May</p>
                </div>
            </div>
        </section>
    );
};

export default HomeExtraSection;