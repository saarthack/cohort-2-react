import React, { createContext } from 'react'

export const PostDataContext = createContext()

const PostContext = (props) => {

    const data = [
        {
            id: 1,
            user: {
                name: "Peter Parker",
                username: "spidey",
                profileImage: "https://randomuser.me/api/portraits/men/32.jpg"
            },
            postImage: "https://images.unsplash.com/photo-1520975916090-3105956dac38",
            caption: "With great power comes great responsibility 🕷️",
            likes: 1240,
            comments: 98,
            isLiked: true,
            createdAt: "2 hours ago"
        },
        {
            id: 2,
            user: {
                name: "Tony Stark",
                username: "ironman",
                profileImage: "https://randomuser.me/api/portraits/men/45.jpg"
            },
            postImage: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
            caption: "Built something cool today. Again.",
            likes: 3421,
            comments: 210,
            isLiked: false,
            createdAt: "5 hours ago"
        },
        {
            id: 3,
            user: {
                name: "Bruce Wayne",
                username: "batman",
                profileImage: "https://randomuser.me/api/portraits/men/65.jpg"
            },
            postImage: "https://images.unsplash.com/photo-1495567720989-cebdbdd97913",
            caption: "Night work hits different 🦇",
            likes: 2890,
            comments: 154,
            isLiked: true,
            createdAt: "1 day ago"
        },
        {
            id: 4,
            user: {
                name: "Diana Prince",
                username: "wonderwoman",
                profileImage: "https://randomuser.me/api/portraits/women/44.jpg"
            },
            postImage: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
            caption: "Strength with compassion.",
            likes: 4120,
            comments: 320,
            isLiked: false,
            createdAt: "2 days ago"
        },
        {
            id: 5,
            user: {
                name: "Steve Rogers",
                username: "captain",
                profileImage: "https://randomuser.me/api/portraits/men/12.jpg"
            },
            postImage: "https://images.unsplash.com/photo-1500534623283-312aade485b7",
            caption: "Doing the right thing never gets old 🇺🇸",
            likes: 1980,
            comments: 140,
            isLiked: true,
            createdAt: "3 days ago"
        }
    ];
    
    return (
        <div>
            <PostDataContext.Provider value={data}>
                {props.children}
            </PostDataContext.Provider>
        </div>
    )
}

export default PostContext