import React from 'react';
//import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
export const SidebarData2=
[
    {
      "key": "mammal",
      "path": '/mammal',
      "label": "Mammal",
      "icon": <AiIcons.AiFillHome />,
      "iconClosed": <RiIcons.RiArrowDownSFill />,
      "iconOpened": <RiIcons.RiArrowUpSFill />,
      "nodes": [
        {
          "key": "canidae",
          "label": "Canidae",
          "path": '/mammal/canidae',
          "icon": <AiIcons.AiFillHome />,
          "iconClosed": <RiIcons.RiArrowDownSFill />,
          "iconOpened": <RiIcons.RiArrowUpSFill />,
          "nodes": [
            {
              "key": "dog",
              "label": "Dog",
              "path": '/mammal/canidae/dog',
              "icon": <IoIcons.IoIosPaper />,
              "nodes": [],
              "url": "https://www.google.com/search?q=dog"
            },
            {
              "key": "fox",
              "label": "Fox",
              "path": '/mammal/canidae/fox',
              "icon": <IoIcons.IoIosPaper />,
              "nodes": [],
              "url": "https://www.google.com/search?q=fox"
            },
            {
              "key": "wolf",
              "label": "Wolf",
              "path": '/mammal/canidae/wolf',
              "icon": <IoIcons.IoIosPaper />,
              "nodes": [],
              "url": "https://www.google.com/search?q=wolf"
            }
          ],
          "url": "https://www.google.com/search?q=canidae"
        }
      ],
      "url": "https://www.google.com/search?q=mammal"
    },
    {
      "key": "reptile",
      "label": "Reptile",
      "path": '/reptile',
      "icon": <AiIcons.AiFillHome />,
      "iconClosed": <RiIcons.RiArrowDownSFill />,
      "iconOpened": <RiIcons.RiArrowUpSFill />,
      "nodes": [
        {
          "key": "squamata",
          "label": "Squamata",
          "path": '/reptile/squamata',
          "icon": <AiIcons.AiFillHome />,
          "iconClosed": <RiIcons.RiArrowDownSFill />,
          "iconOpened": <RiIcons.RiArrowUpSFill />,
          "nodes": [
            {
              "key": "lizard",
              "label": "Lizard",
              "path": '/reptile/squamata/lizard',
              "icon": <IoIcons.IoIosPaper />,
              "url": "https://www.google.com/search?q=lizard"
            },
            {
              "key": "snake",
              "label": "Snake",
              "path": '/reptile/squamata/snake',
              "icon": <IoIcons.IoIosPaper />,
              "url": "https://www.google.com/search?q=snake"
            },
            {
              "key": "gekko",
              "label": "Gekko",
              "path": '/reptile/squamata/gekko',
              "icon": <IoIcons.IoIosPaper />,
              "url": "https://www.google.com/search?q=gekko"
            }
          ],
          "url": "https://www.google.com/search?q=squamata"
        }
      ],
      "url": "https://www.google.com/search?q=reptile"
    }
  ];