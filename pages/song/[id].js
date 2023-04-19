import React from 'react';

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Layout from '../../components/Layout';
import Song from '../../components/Song';

import songs from '../../public/assets/js/songs';

const SongPage = (props) => {
    return (
        <Layout pageTitle={''}>
            <Header />
            <Song song={props.song.songForPage} />
            <Footer />
        </Layout>
    )
}

export async function getStaticPaths() {
    return {
        paths: [
            { params: { id: 'if_eye' } },
            { params: { id: 'dangerous' } },
            { params: { id: 'cog' } },
            { params: { id: 'cerebral_choir' } },
            { params: { id: 'war' } }
        ],
        fallback: false // false or 'blocking'
    };
}

export const getStaticProps = async (context) => {
    try {
        const pid = context.params.id;
        const songForPage = songs.filter(song => song.slug === pid);
        
        console.log(songForPage)

        return {
            props: {
                song: {
                    songForPage
                }
            }, // will be passed to the page component as props
        }
    } catch (e) {
        console.error(e)

        return {
            props: {
                song: {
                    title: songs[0].title,
                    description: songs[0].description,
                    lyrics: songs[0].lyrics,
                    videoLinks: songs[0].videoLinks,
                    audioFile: songs[0].audioFile
                }
            }
        }
    }
}

export default SongPage;