import React from 'react';
import Segments from './components/Segments';
import NewsFeeds from './components/NewsFeeds';
import Events from './components/Events';
import Jobs from './components/Jobs';

const BlogWebsite = () => {
    const segments = [
        {
            title: 'Segment 1',
            subSegments: ['Gadgets & Tech Reviews', 'Fashion & Beauty Tips', 'Adventure Destinations']
        },
        {
            title: 'Segment 2',
            subSegments: ['Breaking News & Current Affairs', 'Movie & TV Show Reviews', 'Health & Wellness Insights']
        },
        {
            title: 'Segment 3',
            subSegments: ['Startup & Entrepreneurship Tips', 'Education & Learning Resources', 'Delicious Recipes & Food Trends']
        },
        {
            title: 'Segment 4',
            subSegments: ['Gadgets & Tech Reviews', 'Fashion & Beauty Tips', 'Adventure Destinations']
        },
        {
            title: 'Segment 5',
            subSegments: ['Breaking News & Current Affairs', 'Movie & TV Show Reviews', 'Health & Wellness Insights']
        },
        {
            title: 'Segment 6',
            subSegments: ['Startup & Entrepreneurship Tips', 'Education & Learning Resources', 'Delicious Recipes & Food Trends']
        },
        {
            title: 'Segment 7',
            subSegments: ['Startup & Entrepreneurship Tips', 'Education & Learning Resources', 'Delicious Recipes & Food Trends']
        }
    ];

    const newsFeeds = [
        { title: 'News Feed 1', description: 'Our blog website is the perfect place to stay up-to-date on the latest news and trends in your industry. We have a wide variety of blogs covering everything from business to technology to health and fitness.' },
        { title: 'News Feed 2', description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
        { title: 'News Feed 3', description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.' },
        { title: 'News Feed 4', description: 'Our blog website is the perfect place to stay up-to-date on the latest news and trends in your industry. We have a wide variety of blogs covering everything from business to technology to health and fitness.' },
        { title: 'News Feed 5', description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
        { title: 'News Feed 6', description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.' },
        { title: 'News Feed 7', description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.' }
    ];

    const events = [
        { title: 'Event 1', date: 'June 20, 2023', location: 'City A', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
        { title: 'Event 2', date: 'July 5, 2023', location: 'City B', description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
        { title: 'Event 3', date: 'August 10, 2023', location: 'City C', description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.' },
        { title: 'Event 4', date: 'June 20, 2023', location: 'City A', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
        { title: 'Event 5', date: 'July 5, 2023', location: 'City B', description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
        { title: 'Event 6', date: 'August 10, 2023', location: 'City C', description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.' },
        { title: 'Event 7', date: 'August 10, 2023', location: 'City C', description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.' }
    ];

    const jobs = [
        { title: 'Job 1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
        { title: 'Job 2', description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
        { title: 'Job 3', description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.' },
        { title: 'Job 4', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
        { title: 'Job 5', description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
        { title: 'Job 6', description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.' },
        { title: 'Job 7', description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.' },
    ];

    return (
        <div>
            <section>
                <h1 className='text-center '>Explore Our Offerings</h1>
                <div className=' row justify-content-evenly '>
                    <Segments segments={segments} />
                </div>
            </section>
            <section>
                <h2 className='text-center '>News Feeds</h2>
                <div className=' row justify-content-evenly'>
                    <NewsFeeds newsFeeds={newsFeeds} />
                </div>
            </section>
            <section>
                <h2 className='text-center '>Update on Upcoming Events</h2>
                
                <div className=' row justify-content-evenly  '>
                    <Events events={events} />
                </div>

            </section>
            <section>
                <h2 className='text-center '>Discover New Job Opportunities</h2>
                <div className=' row justify-content-evenly  '>
                    <Jobs jobs={jobs} />
                </div>
            </section>
        </div>
    );
};

export default BlogWebsite;
