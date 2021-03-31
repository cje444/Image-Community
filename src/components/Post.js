import React from "react";
import { Grid, Image, Text, Button } from "../elements";
import {history } from "../redux/configureStore"
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';

const Post = (props) => {
  return (
    <React.Fragment>
      <Grid>
        <Grid is_flex padding="16px">
          <Grid is_flex width="auto">
            <Image shape="circle" src={props.src} />
            <Text bold>{props.user_info.user_name}</Text>
          </Grid>
          <Grid is_flex width="auto">
            <Text>{props.insert_dt}</Text>
            {props.is_me && (<Button width="auto" padding="4px" margin="4px" _onClick={() => {history.push(`/write/${props.id}`)}}>수정/삭제</Button>)}
          </Grid>
        </Grid>
        <Grid padding="16px">
          <Text>{props.contents}</Text>
        </Grid>
        <Grid>
          <Image shape="rectangle" src={props.image_url} />
        </Grid>
        <Grid padding="16px" is_flex>
          <Grid>
          <Text margin="0px" bold>
            댓글 {props.comment_cnt}개
          </Text>
          </Grid>          
          <Grid is_flex>
          <FavoriteBorderIcon color ="disabled"/>
          <FavoriteIcon color ="secondary"/>
          <Text marging="0px" bold>좋아요10개</Text>
          </Grid> 
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

Post.defaultProps = {
  user_info: {
    user_name: "joy",
    user_profile:
      "ttps://www.vmcdn.ca/f/files/piquenewsmagazine/import/2015-33_news_mtnnews2-1-cd1c0a5e13e77f75.jpg;w=640",
  },
  image_url:
    "ttps://www.vmcdn.ca/f/files/piquenewsmagazine/import/2015-33_news_mtnnews2-1-cd1c0a5e13e77f75.jpg;w=640",
  contents: "Love Lake Luise",
  comment_cnt: 22,
  insert_dt: "2021-03-28 10:00:00",
  is_me: false,
};

export default Post;
