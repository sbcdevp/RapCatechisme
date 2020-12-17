import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch, connect } from 'react-redux';
import { listVideos } from '../store/actions/videosActions';
import { listInfo } from '../store/actions/infoActions';
import { listPictures } from '../store/actions/picturesActions';

const HomePage = () => {
    const picturesList = useSelector((state) => state.picturesList);
    const videosList = useSelector((state) => state.videosList);

    // const { loading, error } = picturesList;
    const { loading, error } = videosList;

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(listVideos());
      return () => {
      };
    }, []);
    return(
        <>
        {loading ? (
            <div>Loading...</div>
          ) : error ? (
            <div>{error}</div>
          ) : 
          <h1></h1>
          }
        </>
    )
}
  

export default (HomePage)