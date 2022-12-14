import React from "react";
import { View } from "react-native";
import Stories from "react-native-stories-instagram";

const data = [
  {
    username: "Bopo Romo",
    title: "Bopo Romo",
    profile:
      "https://avatars2.githubusercontent.com/u/26286830?s=460&u=5d586a3783a6edeb226c557240c0ba47294a4229&v=4",
    stories: [
      {
        id: 1,
        url:
          "https://images.unsplash.com/photo-1532579853048-ec5f8f15f88d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        type: "image",
        duration: 2,
        isReadMore: true,
        url_readmore: "https://github.com/iguilhermeluis",
        created: "2021-01-07T03:24:00",
      },
    ],
  },
  {
    username: "Bruno",
    profile: "https://avatars2.githubusercontent.com/u/45196619?s=460&v=4",
    title: "Travel",
    stories: [
      {
        id: 0,
        url:
          "https://images.unsplash.com/photo-1500099817043-86d46000d58f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        type: "image",
        duration: 2,
        isReadMore: true,
        url_readmore: "https://github.com/iguilhermeluis",
        created: "2021-01-07T03:24:00",
      },
      {
        id: 1,
        url: "https://www.w3schools.com/html/mov_bbb.mp4",
        type: "video",
        duration: 2,
        isReadMore: true,
        url_readmore: "https://github.com/iguilhermeluis",
        created: "2021-01-07T03:24:00",
      },
      {
        id: 2,
        url:
          "https://images.unsplash.com/photo-1476292026003-1df8db2694b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        type: "image",
        duration: 2,
        isReadMore: false,
        url_readmore: "",
        created: "2021-01-07T03:24:00",
      },
      {
        id: 3,
        url:
          "https://images.unsplash.com/photo-1498982261566-1c28c9cf4c02?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        type: "image",
        duration: 2,
        isReadMore: true,
      },
    ],
  },
  {
    username: "Steve Jobs",
    profile:
      "https://s3.amazonaws.com/media.eremedia.com/uploads/2012/05/15181015/stevejobs.jpg",
    title: "Tech",
    stories: [
      {
        id: 1,
        url:
          "https://images.unsplash.com/photo-1515578706925-0dc1a7bfc8cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        type: "image",
        duration: 2,
        isReadMore: true,
        url_readmore: "https://github.com/iguilhermeluis",
        created: "2021-01-07T03:24:00",
      },
      {
        id: 3,
        url:
          "https://images.unsplash.com/photo-1496287437689-3c24997cca99?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        type: "image",
        duration: 2,

        isReadMore: true,
        url_readmore: "https://github.com/iguilhermeluis",
        created: "2021-01-07T03:24:00",
      },
      {
        id: 4,
        url:
          "https://images.unsplash.com/photo-1514870262631-55de0332faf6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        type: "image",
        duration: 2,

        isReadMore: true,
        url_readmore: "https://github.com/iguilhermeluis",
        created: "2021-01-07T03:24:00",
      },
    ],
  },
  {
    username: "Jacob",
    profile:
      "https://images.unsplash.com/profile-1531581190171-0cf831d86212?dpr=2&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff",
    title: "News",
    stories: [
      {
        id: 4,
        url:
          "https://images.unsplash.com/photo-1512101176959-c557f3516787?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        type: "image",
        duration: 2,
        isReadMore: true,
        url_readmore: "https://github.com/iguilhermeluis",
        created: "2021-01-07T03:24:00",
      },
      {
        id: 5,
        url:
          "https://images.unsplash.com/photo-1478397453044-17bb5f994100?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        type: "image",
        duration: 2,

        isReadMore: true,
        url_readmore: "https://github.com/iguilhermeluis",
        created: "2021-01-07T03:24:00",
      },
      {
        id: 4,
        url:
          "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=581&q=80",
        type: "image",
        duration: 2,
        isReadMore: true,
        url_readmore: "https://github.com/iguilhermeluis",
        created: "2021-01-07T03:24:00",
      },
    ],
  },
];

export default function Demo() {
  return (
    <View style={{     flexDirection: 'row',
    marginHorizontal: 10,
    marginVertical: 5,
    height: 70,
    alignItems: 'center', }}>
      <Stories data={data} />
    </View>
  );
}