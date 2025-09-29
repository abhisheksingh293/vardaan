import React from 'react';
import { motion } from 'framer-motion';

import { fadeInUp } from '../utils/motionPresets';

export default function NcertPdf() {
  const ncertLinks = [
// Class 1
{
  class: 'Class 1',
  subjects: [
    {
      name: 'Mathematics',
      chapters: [
        { name: 'Chapter 1', url: 'https://ncert.nic.in/textbook/pdf/maem101.pdf' },
        { name: 'Chapter 2', url: 'https://ncert.nic.in/textbook/pdf/maem102.pdf' },
        { name: 'Chapter 3', url: 'https://ncert.nic.in/textbook/pdf/maem103.pdf' },
        { name: 'Chapter 4', url: 'https://ncert.nic.in/textbook/pdf/maem104.pdf' },
        { name: 'Chapter 5', url: 'https://ncert.nic.in/textbook/pdf/maem105.pdf' },
        { name: 'Chapter 6', url: 'https://ncert.nic.in/textbook/pdf/maem106.pdf' },
        { name: 'Chapter 7', url: 'https://ncert.nic.in/textbook/pdf/maem107.pdf' },
        { name: 'Chapter 8', url: 'https://ncert.nic.in/textbook/pdf/maem108.pdf' },
        { name: 'Chapter 9', url: 'https://ncert.nic.in/textbook/pdf/maem109.pdf' },
        { name: 'Chapter 10', url: 'https://ncert.nic.in/textbook/pdf/maem110.pdf' },
        { name: 'Chapter 11', url: 'https://ncert.nic.in/textbook/pdf/maem111.pdf' },
        { name: 'Chapter 12', url: 'https://ncert.nic.in/textbook/pdf/maem112.pdf' },
        { name: 'Chapter 13', url: 'https://ncert.nic.in/textbook/pdf/maem113.pdf' }
      ]
    },
    {
      name: 'English',
      chapters: [
        { name: 'Chapter 1', url: 'https://ncert.nic.in/textbook/pdf/aeen101.pdf' },
        { name: 'Chapter 2', url: 'https://ncert.nic.in/textbook/pdf/aeen102.pdf' },
        { name: 'Chapter 3', url: 'https://ncert.nic.in/textbook/pdf/aeen103.pdf' },
        { name: 'Chapter 4', url: 'https://ncert.nic.in/textbook/pdf/aeen104.pdf' },
        { name: 'Chapter 5', url: 'https://ncert.nic.in/textbook/pdf/aeen105.pdf' },
        { name: 'Chapter 6', url: 'https://ncert.nic.in/textbook/pdf/aeen106.pdf' },
        { name: 'Chapter 7', url: 'https://ncert.nic.in/textbook/pdf/aeen107.pdf' },
        { name: 'Chapter 8', url: 'https://ncert.nic.in/textbook/pdf/aeen108.pdf' },
        { name: 'Chapter 9', url: 'https://ncert.nic.in/textbook/pdf/aeen109.pdf' },
        { name: 'Chapter 10', url: 'https://ncert.nic.in/textbook/pdf/aeen110.pdf' }
      ]
    }
  ]
},
// Class 2
{
  class: 'Class 2',
  subjects: [
    {
      name: 'Mathematics',
      chapters: [
        { name: 'Chapter 1', url: 'https://ncert.nic.in/textbook/pdf/maem201.pdf' },
        { name: 'Chapter 2', url: 'https://ncert.nic.in/textbook/pdf/maem202.pdf' },
        { name: 'Chapter 3', url: 'https://ncert.nic.in/textbook/pdf/maem203.pdf' },
        { name: 'Chapter 4', url: 'https://ncert.nic.in/textbook/pdf/maem204.pdf' },
        { name: 'Chapter 5', url: 'https://ncert.nic.in/textbook/pdf/maem205.pdf' },
        { name: 'Chapter 6', url: 'https://ncert.nic.in/textbook/pdf/maem206.pdf' },
        { name: 'Chapter 7', url: 'https://ncert.nic.in/textbook/pdf/maem207.pdf' },
        { name: 'Chapter 8', url: 'https://ncert.nic.in/textbook/pdf/maem208.pdf' },
        { name: 'Chapter 9', url: 'https://ncert.nic.in/textbook/pdf/maem209.pdf' },
        { name: 'Chapter 10', url: 'https://ncert.nic.in/textbook/pdf/maem210.pdf' },
        { name: 'Chapter 11', url: 'https://ncert.nic.in/textbook/pdf/maem211.pdf' },
        { name: 'Chapter 12', url: 'https://ncert.nic.in/textbook/pdf/maem212.pdf' }
      ]
    },
    {
      name: 'English',
      chapters: [
        { name: 'Chapter 1', url: 'https://ncert.nic.in/textbook/pdf/aeen201.pdf' },
        { name: 'Chapter 2', url: 'https://ncert.nic.in/textbook/pdf/aeen202.pdf' },
        { name: 'Chapter 3', url: 'https://ncert.nic.in/textbook/pdf/aeen203.pdf' },
        { name: 'Chapter 4', url: 'https://ncert.nic.in/textbook/pdf/aeen204.pdf' },
        { name: 'Chapter 5', url: 'https://ncert.nic.in/textbook/pdf/aeen205.pdf' },
        { name: 'Chapter 6', url: 'https://ncert.nic.in/textbook/pdf/aeen206.pdf' },
        { name: 'Chapter 7', url: 'https://ncert.nic.in/textbook/pdf/aeen207.pdf' },
        { name: 'Chapter 8', url: 'https://ncert.nic.in/textbook/pdf/aeen208.pdf' },
        { name: 'Chapter 9', url: 'https://ncert.nic.in/textbook/pdf/aeen209.pdf' },
        { name: 'Chapter 10', url: 'https://ncert.nic.in/textbook/pdf/aeen210.pdf' }
      ]
    }
  ]
},
// Class 3
{
  class: 'Class 3',
  subjects: [
    {
      name: 'Mathematics',
      chapters: [
        { name: 'Chapter 1', url: 'https://ncert.nic.in/textbook/pdf/maem301.pdf' },
        { name: 'Chapter 2', url: 'https://ncert.nic.in/textbook/pdf/maem302.pdf' },
        { name: 'Chapter 3', url: 'https://ncert.nic.in/textbook/pdf/maem303.pdf' },
        { name: 'Chapter 4', url: 'https://ncert.nic.in/textbook/pdf/maem304.pdf' },
        { name: 'Chapter 5', url: 'https://ncert.nic.in/textbook/pdf/maem305.pdf' },
        { name: 'Chapter 6', url: 'https://ncert.nic.in/textbook/pdf/maem306.pdf' },
        { name: 'Chapter 7', url: 'https://ncert.nic.in/textbook/pdf/maem307.pdf' },
        { name: 'Chapter 8', url: 'https://ncert.nic.in/textbook/pdf/maem308.pdf' },
        { name: 'Chapter 9', url: 'https://ncert.nic.in/textbook/pdf/maem309.pdf' },
        { name: 'Chapter 10', url: 'https://ncert.nic.in/textbook/pdf/maem310.pdf' }
      ]
    },
    {
      name: 'English',
      chapters: [
        { name: 'Chapter 1', url: 'https://ncert.nic.in/textbook/pdf/aeen301.pdf' },
        { name: 'Chapter 2', url: 'https://ncert.nic.in/textbook/pdf/aeen302.pdf' },
        { name: 'Chapter 3', url: 'https://ncert.nic.in/textbook/pdf/aeen303.pdf' },
        { name: 'Chapter 4', url: 'https://ncert.nic.in/textbook/pdf/aeen304.pdf' },
        { name: 'Chapter 5', url: 'https://ncert.nic.in/textbook/pdf/aeen305.pdf' },
        { name: 'Chapter 6', url: 'https://ncert.nic.in/textbook/pdf/aeen306.pdf' },
        { name: 'Chapter 7', url: 'https://ncert.nic.in/textbook/pdf/aeen307.pdf' },
        { name: 'Chapter 8', url: 'https://ncert.nic.in/textbook/pdf/aeen308.pdf' },
        { name: 'Chapter 9', url: 'https://ncert.nic.in/textbook/pdf/aeen309.pdf' },
        { name: 'Chapter 10', url: 'https://ncert.nic.in/textbook/pdf/aeen310.pdf' }
      ]
    }
  ]
},
// Class 4
{
  class: 'Class 4',
  subjects: [
    {
      name: 'Mathematics',
      chapters: [
        { name: 'Chapter 1', url: 'https://ncert.nic.in/textbook/pdf/maem401.pdf' },
        { name: 'Chapter 2', url: 'https://ncert.nic.in/textbook/pdf/maem402.pdf' },
        { name: 'Chapter 3', url: 'https://ncert.nic.in/textbook/pdf/maem403.pdf' },
        { name: 'Chapter 4', url: 'https://ncert.nic.in/textbook/pdf/maem404.pdf' },
        { name: 'Chapter 5', url: 'https://ncert.nic.in/textbook/pdf/maem405.pdf' },
        { name: 'Chapter 6', url: 'https://ncert.nic.in/textbook/pdf/maem406.pdf' },
        { name: 'Chapter 7', url: 'https://ncert.nic.in/textbook/pdf/maem407.pdf' },
        { name: 'Chapter 8', url: 'https://ncert.nic.in/textbook/pdf/maem408.pdf' },
        { name: 'Chapter 9', url: 'https://ncert.nic.in/textbook/pdf/maem409.pdf' },
        { name: 'Chapter 10', url: 'https://ncert.nic.in/textbook/pdf/maem410.pdf' },
        { name: 'Chapter 11', url: 'https://ncert.nic.in/textbook/pdf/maem411.pdf' },
        { name: 'Chapter 12', url: 'https://ncert.nic.in/textbook/pdf/maem412.pdf' },
        { name: 'Chapter 13', url: 'https://ncert.nic.in/textbook/pdf/maem413.pdf' }
      ]
    },
    {
      name: 'English',
      chapters: [
        { name: 'Chapter 1', url: 'https://ncert.nic.in/textbook/pdf/aeen401.pdf' },
        { name: 'Chapter 2', url: 'https://ncert.nic.in/textbook/pdf/aeen402.pdf' },
        { name: 'Chapter 3', url: 'https://ncert.nic.in/textbook/pdf/aeen403.pdf' },
        { name: 'Chapter 4', url: 'https://ncert.nic.in/textbook/pdf/aeen404.pdf' },
        { name: 'Chapter 5', url: 'https://ncert.nic.in/textbook/pdf/aeen405.pdf' },
        { name: 'Chapter 6', url: 'https://ncert.nic.in/textbook/pdf/aeen406.pdf' },
        { name: 'Chapter 7', url: 'https://ncert.nic.in/textbook/pdf/aeen407.pdf' },
        { name: 'Chapter 8', url: 'https://ncert.nic.in/textbook/pdf/aeen408.pdf' },
        { name: 'Chapter 9', url: 'https://ncert.nic.in/textbook/pdf/aeen409.pdf' },
        { name: 'Chapter 10', url: 'https://ncert.nic.in/textbook/pdf/aeen410.pdf' }
      ]
    }
  ]
},
// Class 5
{
  class: 'Class 5',
  subjects: [
    {
      name: 'Mathematics',
      chapters: [
        { name: 'Chapter 1', url: 'https://ncert.nic.in/textbook/pdf/maem501.pdf' },
        { name: 'Chapter 2', url: 'https://ncert.nic.in/textbook/pdf/maem502.pdf' },
        { name: 'Chapter 3', url: 'https://ncert.nic.in/textbook/pdf/maem503.pdf' },
        { name: 'Chapter 4', url: 'https://ncert.nic.in/textbook/pdf/maem504.pdf' },
        { name: 'Chapter 5', url: 'https://ncert.nic.in/textbook/pdf/maem505.pdf' },
        { name: 'Chapter 6', url: 'https://ncert.nic.in/textbook/pdf/maem506.pdf' },
        { name: 'Chapter 7', url: 'https://ncert.nic.in/textbook/pdf/maem507.pdf' },
        { name: 'Chapter 8', url: 'https://ncert.nic.in/textbook/pdf/maem508.pdf' },
        { name: 'Chapter 9', url: 'https://ncert.nic.in/textbook/pdf/maem509.pdf' },
        { name: 'Chapter 10', url: 'https://ncert.nic.in/textbook/pdf/maem510.pdf' },
        { name: 'Chapter 11', url: 'https://ncert.nic.in/textbook/pdf/maem511.pdf' },
        { name: 'Chapter 12', url: 'https://ncert.nic.in/textbook/pdf/maem512.pdf' },
        { name: 'Chapter 13', url: 'https://ncert.nic.in/textbook/pdf/maem513.pdf' }
      ]
    },
    {
      name: 'English',
      chapters: [
        { name: 'Chapter 1', url: 'https://ncert.nic.in/textbook/pdf/aeen501.pdf' },
        { name: 'Chapter 2', url: 'https://ncert.nic.in/textbook/pdf/aeen502.pdf' },
        { name: 'Chapter 3', url: 'https://ncert.nic.in/textbook/pdf/aeen503.pdf' },
        { name: 'Chapter 4', url: 'https://ncert.nic.in/textbook/pdf/aeen504.pdf' },
        { name: 'Chapter 5', url: 'https://ncert.nic.in/textbook/pdf/aeen505.pdf' },
        { name: 'Chapter 6', url: 'https://ncert.nic.in/textbook/pdf/aeen506.pdf' },
        { name: 'Chapter 7', url: 'https://ncert.nic.in/textbook/pdf/aeen507.pdf' },
        { name: 'Chapter 8', url: 'https://ncert.nic.in/textbook/pdf/aeen508.pdf' },
        { name: 'Chapter 9', url: 'https://ncert.nic.in/textbook/pdf/aeen509.pdf' },
        { name: 'Chapter 10', url: 'https://ncert.nic.in/textbook/pdf/aeen510.pdf' }
      ]
    }
  ]
},
// Class 6
{
  class: 'Class 6',
  subjects: [
    {
      name: 'Mathematics',
      chapters: [
        { name: 'Chapter 1', url: 'https://ncert.nic.in/textbook/pdf/memh101.pdf' },
        { name: 'Chapter 2', url: 'https://ncert.nic.in/textbook/pdf/memh102.pdf' },
        { name: 'Chapter 3', url: 'https://ncert.nic.in/textbook/pdf/memh103.pdf' },
        { name: 'Chapter 4', url: 'https://ncert.nic.in/textbook/pdf/memh104.pdf' },
        { name: 'Chapter 5', url: 'https://ncert.nic.in/textbook/pdf/memh105.pdf' },
        { name: 'Chapter 6', url: 'https://ncert.nic.in/textbook/pdf/memh106.pdf' },
        { name: 'Chapter 7', url: 'https://ncert.nic.in/textbook/pdf/memh107.pdf' },
        { name: 'Chapter 8', url: 'https://ncert.nic.in/textbook/pdf/memh108.pdf' },
        { name: 'Chapter 9', url: 'https://ncert.nic.in/textbook/pdf/memh109.pdf' },
        { name: 'Chapter 10', url: 'https://ncert.nic.in/textbook/pdf/memh110.pdf' },
        { name: 'Chapter 11', url: 'https://ncert.nic.in/textbook/pdf/memh111.pdf' },
        { name: 'Chapter 12', url: 'https://ncert.nic.in/textbook/pdf/memh112.pdf' },
        { name: 'Chapter 13', url: 'https://ncert.nic.in/textbook/pdf/memh113.pdf' },
        { name: 'Chapter 14', url: 'https://ncert.nic.in/textbook/pdf/memh114.pdf' }
      ]
    },
    {
      name: 'Science',
      chapters: [
        { name: 'Chapter 1', url: 'https://ncert.nic.in/textbook/pdf/hesc101.pdf' },
        { name: 'Chapter 2', url: 'https://ncert.nic.in/textbook/pdf/hesc102.pdf' },
        { name: 'Chapter 3', url: 'https://ncert.nic.in/textbook/pdf/hesc103.pdf' },
        { name: 'Chapter 4', url: 'https://ncert.nic.in/textbook/pdf/hesc104.pdf' },
        { name: 'Chapter 5', url: 'https://ncert.nic.in/textbook/pdf/hesc105.pdf' },
        { name: 'Chapter 6', url: 'https://ncert.nic.in/textbook/pdf/hesc106.pdf' },
        { name: 'Chapter 7', url: 'https://ncert.nic.in/textbook/pdf/hesc107.pdf' },
        { name: 'Chapter 8', url: 'https://ncert.nic.in/textbook/pdf/hesc108.pdf' },
        { name: 'Chapter 9', url: 'https://ncert.nic.in/textbook/pdf/hesc109.pdf' },
        { name: 'Chapter 10', url: 'https://ncert.nic.in/textbook/pdf/hesc110.pdf' },
        { name: 'Chapter 11', url: 'https://ncert.nic.in/textbook/pdf/hesc111.pdf' },
        { name: 'Chapter 12', url: 'https://ncert.nic.in/textbook/pdf/hesc112.pdf' },
        { name: 'Chapter 13', url: 'https://ncert.nic.in/textbook/pdf/hesc113.pdf' },
        { name: 'Chapter 14', url: 'https://ncert.nic.in/textbook/pdf/hesc114.pdf' }
      ]
    },
    {
      name: 'English',
      chapters: [
        { name: 'Chapter 1', url: 'https://ncert.nic.in/textbook/pdf/hien101.pdf' },
        { name: 'Chapter 2', url: 'https://ncert.nic.in/textbook/pdf/hien102.pdf' },
        { name: 'Chapter 3', url: 'https://ncert.nic.in/textbook/pdf/hien103.pdf' },
        { name: 'Chapter 4', url: 'https://ncert.nic.in/textbook/pdf/hien104.pdf' },
        { name: 'Chapter 5', url: 'https://ncert.nic.in/textbook/pdf/hien105.pdf' },
        { name: 'Chapter 6', url: 'https://ncert.nic.in/textbook/pdf/hien106.pdf' },
        { name: 'Chapter 7', url: 'https://ncert.nic.in/textbook/pdf/hien107.pdf' },
        { name: 'Chapter 8', url: 'https://ncert.nic.in/textbook/pdf/hien108.pdf' },
        { name: 'Chapter 9', url: 'https://ncert.nic.in/textbook/pdf/hien109.pdf' },
        { name: 'Chapter 10', url: 'https://ncert.nic.in/textbook/pdf/hien110.pdf' }
      ]
    }
  ]
},
// Class 7
{
  class: 'Class 7',
  subjects: [
    {
      name: 'Mathematics',
      chapters: [
        { name: 'Chapter 1', url: 'https://ncert.nic.in/textbook/pdf/memh701.pdf' },
        { name: 'Chapter 2', url: 'https://ncert.nic.in/textbook/pdf/memh702.pdf' },
        { name: 'Chapter 3', url: 'https://ncert.nic.in/textbook/pdf/memh703.pdf' },
        { name: 'Chapter 4', url: 'https://ncert.nic.in/textbook/pdf/memh704.pdf' },
        { name: 'Chapter 5', url: 'https://ncert.nic.in/textbook/pdf/memh705.pdf' },
        { name: 'Chapter 6', url: 'https://ncert.nic.in/textbook/pdf/memh706.pdf' },
        { name: 'Chapter 7', url: 'https://ncert.nic.in/textbook/pdf/memh707.pdf' },
        { name: 'Chapter 8', url: 'https://ncert.nic.in/textbook/pdf/memh708.pdf' },
        { name: 'Chapter 9', url: 'https://ncert.nic.in/textbook/pdf/memh709.pdf' },
        { name: 'Chapter 10', url: 'https://ncert.nic.in/textbook/pdf/memh710.pdf' },
        { name: 'Chapter 11', url: 'https://ncert.nic.in/textbook/pdf/memh711.pdf' },
        { name: 'Chapter 12', url: 'https://ncert.nic.in/textbook/pdf/memh712.pdf' },
        { name: 'Chapter 13', url: 'https://ncert.nic.in/textbook/pdf/memh713.pdf' }
      ]
    },
    {
      name: 'Science',
      chapters: [
        { name: 'Chapter 1', url: 'https://ncert.nic.in/textbook/pdf/hesc701.pdf' },
        { name: 'Chapter 2', url: 'https://ncert.nic.in/textbook/pdf/hesc702.pdf' },
        { name: 'Chapter 3', url: 'https://ncert.nic.in/textbook/pdf/hesc703.pdf' },
        { name: 'Chapter 4', url: 'https://ncert.nic.in/textbook/pdf/hesc704.pdf' },
        { name: 'Chapter 5', url: 'https://ncert.nic.in/textbook/pdf/hesc705.pdf' },
        { name: 'Chapter 6', url: 'https://ncert.nic.in/textbook/pdf/hesc706.pdf' },
        { name: 'Chapter 7', url: 'https://ncert.nic.in/textbook/pdf/hesc707.pdf' },
        { name: 'Chapter 8', url: 'https://ncert.nic.in/textbook/pdf/hesc708.pdf' },
        { name: 'Chapter 9', url: 'https://ncert.nic.in/textbook/pdf/hesc709.pdf' },
        { name: 'Chapter 10', url: 'https://ncert.nic.in/textbook/pdf/hesc710.pdf' },
        { name: 'Chapter 11', url: 'https://ncert.nic.in/textbook/pdf/hesc711.pdf' },
        { name: 'Chapter 12', url: 'https://ncert.nic.in/textbook/pdf/hesc712.pdf' },
        { name: 'Chapter 13', url: 'https://ncert.nic.in/textbook/pdf/hesc713.pdf' },
        { name: 'Chapter 14', url: 'https://ncert.nic.in/textbook/pdf/hesc714.pdf' },
        { name: 'Chapter 15', url: 'https://ncert.nic.in/textbook/pdf/hesc715.pdf' },
        { name: 'Chapter 16', url: 'https://ncert.nic.in/textbook/pdf/hesc716.pdf' }
      ]
    },
    {
      name: 'English',
      chapters: [
        { name: 'Chapter 1', url: 'https://ncert.nic.in/textbook/pdf/hien701.pdf' },
        { name: 'Chapter 2', url: 'https://ncert.nic.in/textbook/pdf/hien702.pdf' },
        { name: 'Chapter 3', url: 'https://ncert.nic.in/textbook/pdf/hien703.pdf' },
        { name: 'Chapter 4', url: 'https://ncert.nic.in/textbook/pdf/hien704.pdf' },
        { name: 'Chapter 5', url: 'https://ncert.nic.in/textbook/pdf/hien705.pdf' },
        { name: 'Chapter 6', url: 'https://ncert.nic.in/textbook/pdf/hien706.pdf' },
        { name: 'Chapter 7', url: 'https://ncert.nic.in/textbook/pdf/hien707.pdf' },
        { name: 'Chapter 8', url: 'https://ncert.nic.in/textbook/pdf/hien708.pdf' },
        { name: 'Chapter 9', url: 'https://ncert.nic.in/textbook/pdf/hien709.pdf' },
        { name: 'Chapter 10', url: 'https://ncert.nic.in/textbook/pdf/hien710.pdf' }
      ]
    }
  ]
},
// Class 8
{
  class: 'Class 8',
  subjects: [
    {
      name: 'Mathematics',
      chapters: [
        { name: 'Chapter 1', url: 'https://ncert.nic.in/textbook/pdf/memh801.pdf' },
        { name: 'Chapter 2', url: 'https://ncert.nic.in/textbook/pdf/memh802.pdf' },
        { name: 'Chapter 3', url: 'https://ncert.nic.in/textbook/pdf/memh803.pdf' },
        { name: 'Chapter 4', url: 'https://ncert.nic.in/textbook/pdf/memh804.pdf' },
        { name: 'Chapter 5', url: 'https://ncert.nic.in/textbook/pdf/memh805.pdf' },
        { name: 'Chapter 6', url: 'https://ncert.nic.in/textbook/pdf/memh806.pdf' },
        { name: 'Chapter 7', url: 'https://ncert.nic.in/textbook/pdf/memh807.pdf' },
        { name: 'Chapter 8', url: 'https://ncert.nic.in/textbook/pdf/memh808.pdf' },
        { name: 'Chapter 9', url: 'https://ncert.nic.in/textbook/pdf/memh809.pdf' },
        { name: 'Chapter 10', url: 'https://ncert.nic.in/textbook/pdf/memh810.pdf' },
        { name: 'Chapter 11', url: 'https://ncert.nic.in/textbook/pdf/memh811.pdf' },
        { name: 'Chapter 12', url: 'https://ncert.nic.in/textbook/pdf/memh812.pdf' },
        { name: 'Chapter 13', url: 'https://ncert.nic.in/textbook/pdf/memh813.pdf' },
        { name: 'Chapter 14', url: 'https://ncert.nic.in/textbook/pdf/memh814.pdf' },
        { name: 'Chapter 15', url: 'https://ncert.nic.in/textbook/pdf/memh815.pdf' },
        { name: 'Chapter 16', url: 'https://ncert.nic.in/textbook/pdf/memh816.pdf' }
      ]
    },
    {
      name: 'Science',
      chapters: [
        { name: 'Chapter 1', url: 'https://ncert.nic.in/textbook/pdf/hesc801.pdf' },
        { name: 'Chapter 2', url: 'https://ncert.nic.in/textbook/pdf/hesc802.pdf' },
        { name: 'Chapter 3', url: 'https://ncert.nic.in/textbook/pdf/hesc803.pdf' },
        { name: 'Chapter 4', url: 'https://ncert.nic.in/textbook/pdf/hesc804.pdf' },
        { name: 'Chapter 5', url: 'https://ncert.nic.in/textbook/pdf/hesc805.pdf' },
        { name: 'Chapter 6', url: 'https://ncert.nic.in/textbook/pdf/hesc806.pdf' },
        { name: 'Chapter 7', url: 'https://ncert.nic.in/textbook/pdf/hesc807.pdf' },
        { name: 'Chapter 8', url: 'https://ncert.nic.in/textbook/pdf/hesc808.pdf' },
        { name: 'Chapter 9', url: 'https://ncert.nic.in/textbook/pdf/hesc809.pdf' },
        { name: 'Chapter 10', url: 'https://ncert.nic.in/textbook/pdf/hesc810.pdf' },
        { name: 'Chapter 11', url: 'https://ncert.nic.in/textbook/pdf/hesc811.pdf' },
        { name: 'Chapter 12', url: 'https://ncert.nic.in/textbook/pdf/hesc812.pdf' },
        { name: 'Chapter 13', url: 'https://ncert.nic.in/textbook/pdf/hesc813.pdf' },
        { name: 'Chapter 14', url: 'https://ncert.nic.in/textbook/pdf/hesc814.pdf' },
        { name: 'Chapter 15', url: 'https://ncert.nic.in/textbook/pdf/hesc815.pdf' },
        { name: 'Chapter 16', url: 'https://ncert.nic.in/textbook/pdf/hesc816.pdf' }
      ]
    },
    {
      name: 'English',
      chapters: [
        { name: 'Chapter 1', url: 'https://ncert.nic.in/textbook/pdf/hien801.pdf' },
        { name: 'Chapter 2', url: 'https://ncert.nic.in/textbook/pdf/hien802.pdf' },
        { name: 'Chapter 3', url: 'https://ncert.nic.in/textbook/pdf/hien803.pdf' },
        { name: 'Chapter 4', url: 'https://ncert.nic.in/textbook/pdf/hien804.pdf' },
        { name: 'Chapter 5', url: 'https://ncert.nic.in/textbook/pdf/hien805.pdf' },
        { name: 'Chapter 6', url: 'https://ncert.nic.in/textbook/pdf/hien806.pdf' },
        { name: 'Chapter 7', url: 'https://ncert.nic.in/textbook/pdf/hien807.pdf' },
        { name: 'Chapter 8', url: 'https://ncert.nic.in/textbook/pdf/hien808.pdf' },
        { name: 'Chapter 9', url: 'https://ncert.nic.in/textbook/pdf/hien809.pdf' },
        { name: 'Chapter 10', url: 'https://ncert.nic.in/textbook/pdf/hien810.pdf' }
      ]
    },
    // Hindi
    {
      name: 'Hindi',
      chapters: [
        { name: 'Chapter 1', url: 'https://ncert.nic.in/textbook/pdf/hhvh801.pdf' },
        { name: 'Chapter 2', url: 'https://ncert.nic.in/textbook/pdf/hhvh802.pdf' },
        { name: 'Chapter 3', url: 'https://ncert.nic.in/textbook/pdf/hhvh803.pdf' },
        { name: 'Chapter 4', url: 'https://ncert.nic.in/textbook/pdf/hhvh804.pdf' },
        { name: 'Chapter 5', url: 'https://ncert.nic.in/textbook/pdf/hhvh805.pdf' },
        { name: 'Chapter 6', url: 'https://ncert.nic.in/textbook/pdf/hhvh806.pdf' },
        { name: 'Chapter 7', url: 'https://ncert.nic.in/textbook/pdf/hhvh807.pdf' },
        { name: 'Chapter 8', url: 'https://ncert.nic.in/textbook/pdf/hhvh808.pdf' },
        { name: 'Chapter 9', url: 'https://ncert.nic.in/textbook/pdf/hhvh809.pdf' },
        { name: 'Chapter 10', url: 'https://ncert.nic.in/textbook/pdf/hhvh810.pdf' }
      ]
    },
    // Sanskrit
    {
      name: 'Sanskrit',
      chapters: [
        { name: 'Chapter 1', url: 'https://ncert.nic.in/textbook/pdf/hssk801.pdf' },
        { name: 'Chapter 2', url: 'https://ncert.nic.in/textbook/pdf/hssk802.pdf' },
        { name: 'Chapter 3', url: 'https://ncert.nic.in/textbook/pdf/hssk803.pdf' },
        { name: 'Chapter 4', url: 'https://ncert.nic.in/textbook/pdf/hssk804.pdf' },
        { name: 'Chapter 5', url: 'https://ncert.nic.in/textbook/pdf/hssk805.pdf' },
        { name: 'Chapter 6', url: 'https://ncert.nic.in/textbook/pdf/hssk806.pdf' },
        { name: 'Chapter 7', url: 'https://ncert.nic.in/textbook/pdf/hssk807.pdf' },
        { name: 'Chapter 8', url: 'https://ncert.nic.in/textbook/pdf/hssk808.pdf' },
        { name: 'Chapter 9', url: 'https://ncert.nic.in/textbook/pdf/hssk809.pdf' },
        { name: 'Chapter 10', url: 'https://ncert.nic.in/textbook/pdf/hssk810.pdf' }
      ]
    },
    // Social Science
    {
      name: 'Social Science',
      chapters: [
        { name: 'Chapter 1', url: 'https://ncert.nic.in/textbook/pdf/hess801.pdf' },
        { name: 'Chapter 2', url: 'https://ncert.nic.in/textbook/pdf/hess802.pdf' },
        { name: 'Chapter 3', url: 'https://ncert.nic.in/textbook/pdf/hess803.pdf' },
        { name: 'Chapter 4', url: 'https://ncert.nic.in/textbook/pdf/hess804.pdf' },
        { name: 'Chapter 5', url: 'https://ncert.nic.in/textbook/pdf/hess805.pdf' },
        { name: 'Chapter 6', url: 'https://ncert.nic.in/textbook/pdf/hess806.pdf' },
        { name: 'Chapter 7', url: 'https://ncert.nic.in/textbook/pdf/hess807.pdf' },
        { name: 'Chapter 8', url: 'https://ncert.nic.in/textbook/pdf/hess808.pdf' },
        { name: 'Chapter 9', url: 'https://ncert.nic.in/textbook/pdf/hess809.pdf' },
        { name: 'Chapter 10', url: 'https://ncert.nic.in/textbook/pdf/hess810.pdf' }
      ]
    }
  ]
},
// Class 9
{
  class: 'Class 9',
  subjects: [
    {
      name: 'Mathematics',
      chapters: [
        { name: 'Chapter 1', url: 'https://ncert.nic.in/textbook/pdf/jemh901.pdf' },
        { name: 'Chapter 2', url: 'https://ncert.nic.in/textbook/pdf/jemh902.pdf' },
        { name: 'Chapter 3', url: 'https://ncert.nic.in/textbook/pdf/jemh903.pdf' },
        { name: 'Chapter 4', url: 'https://ncert.nic.in/textbook/pdf/jemh904.pdf' },
        { name: 'Chapter 5', url: 'https://ncert.nic.in/textbook/pdf/jemh905.pdf' },
        { name: 'Chapter 6', url: 'https://ncert.nic.in/textbook/pdf/jemh906.pdf' },
        { name: 'Chapter 7', url: 'https://ncert.nic.in/textbook/pdf/jemh907.pdf' },
        { name: 'Chapter 8', url: 'https://ncert.nic.in/textbook/pdf/jemh908.pdf' },
        { name: 'Chapter 9', url: 'https://ncert.nic.in/textbook/pdf/jemh909.pdf' },
        { name: 'Chapter 10', url: 'https://ncert.nic.in/textbook/pdf/jemh910.pdf' },
        { name: 'Chapter 11', url: 'https://ncert.nic.in/textbook/pdf/jemh911.pdf' },
        { name: 'Chapter 12', url: 'https://ncert.nic.in/textbook/pdf/jemh912.pdf' },
        { name: 'Chapter 13', url: 'https://ncert.nic.in/textbook/pdf/jemh913.pdf' },
        { name: 'Chapter 14', url: 'https://ncert.nic.in/textbook/pdf/jemh914.pdf' },
        { name: 'Chapter 15', url: 'https://ncert.nic.in/textbook/pdf/jemh915.pdf' }
      ]
    },
    {
      name: 'Science',
      chapters: [
        { name: 'Chapter 1', url: 'https://ncert.nic.in/textbook/pdf/jesc101.pdf' },
        { name: 'Chapter 2', url: 'https://ncert.nic.in/textbook/pdf/jesc102.pdf' },
        { name: 'Chapter 3', url: 'https://ncert.nic.in/textbook/pdf/jesc103.pdf' },
        { name: 'Chapter 4', url: 'https://ncert.nic.in/textbook/pdf/jesc104.pdf' },
        { name: 'Chapter 5', url: 'https://ncert.nic.in/textbook/pdf/jesc105.pdf' },
        { name: 'Chapter 6', url: 'https://ncert.nic.in/textbook/pdf/jesc106.pdf' },
        { name: 'Chapter 7', url: 'https://ncert.nic.in/textbook/pdf/jesc107.pdf' },
        { name: 'Chapter 8', url: 'https://ncert.nic.in/textbook/pdf/jesc108.pdf' },
        { name: 'Chapter 9', url: 'https://ncert.nic.in/textbook/pdf/jesc109.pdf' },
        { name: 'Chapter 10', url: 'https://ncert.nic.in/textbook/pdf/jesc110.pdf' },
        { name: 'Chapter 11', url: 'https://ncert.nic.in/textbook/pdf/jesc111.pdf' },
        { name: 'Chapter 12', url: 'https://ncert.nic.in/textbook/pdf/jesc112.pdf' },
        { name: 'Chapter 13', url: 'https://ncert.nic.in/textbook/pdf/jesc113.pdf' },
        { name: 'Chapter 14', url: 'https://ncert.nic.in/textbook/pdf/jesc114.pdf' },
        { name: 'Chapter 15', url: 'https://ncert.nic.in/textbook/pdf/jesc115.pdf' }
      ]
    },
    {
      name: 'English',
      chapters: [
        { name: 'Chapter 1', url: 'https://ncert.nic.in/textbook/pdf/jien101.pdf' },
        { name: 'Chapter 2', url: 'https://ncert.nic.in/textbook/pdf/jien102.pdf' },
        { name: 'Chapter 3', url: 'https://ncert.nic.in/textbook/pdf/jien103.pdf' },
        { name: 'Chapter 4', url: 'https://ncert.nic.in/textbook/pdf/jien104.pdf' },
        { name: 'Chapter 5', url: 'https://ncert.nic.in/textbook/pdf/jien105.pdf' },
        { name: 'Chapter 6', url: 'https://ncert.nic.in/textbook/pdf/jien106.pdf' },
        { name: 'Chapter 7', url: 'https://ncert.nic.in/textbook/pdf/jien107.pdf' },
        { name: 'Chapter 8', url: 'https://ncert.nic.in/textbook/pdf/jien108.pdf' },
        { name: 'Chapter 9', url: 'https://ncert.nic.in/textbook/pdf/jien109.pdf' },
        { name: 'Chapter 10', url: 'https://ncert.nic.in/textbook/pdf/jien110.pdf' }
      ]
    }
  ]
},
// Class 12
{
  class: 'Class 12',
  subjects: [
    // Mathematics
    {
      name: 'Mathematics',
      chapters: [
        { name: 'Chapter 1: Relations and Functions', url: 'https://ncert.nic.in/textbook/pdf/lemh101.pdf' },
        { name: 'Chapter 2: Inverse Trigonometric Functions', url: 'https://ncert.nic.in/textbook/pdf/lemh102.pdf' },
        { name: 'Chapter 3: Matrices', url: 'https://ncert.nic.in/textbook/pdf/lemh103.pdf' },
        { name: 'Chapter 4: Determinants', url: 'https://ncert.nic.in/textbook/pdf/lemh104.pdf' },
        { name: 'Chapter 5: Continuity and Differentiability', url: 'https://ncert.nic.in/textbook/pdf/lemh105.pdf' },
        { name: 'Chapter 6: Application of Derivatives', url: 'https://ncert.nic.in/textbook/pdf/lemh106.pdf' },
        { name: 'Chapter 7: Integrals', url: 'https://ncert.nic.in/textbook/pdf/lemh107.pdf' },
        { name: 'Chapter 8: Application of Integrals', url: 'https://ncert.nic.in/textbook/pdf/lemh108.pdf' },
        { name: 'Chapter 9: Differential Equations', url: 'https://ncert.nic.in/textbook/pdf/lemh109.pdf' },
        { name: 'Chapter 10: Vector Algebra', url: 'https://ncert.nic.in/textbook/pdf/lemh110.pdf' },
        { name: 'Chapter 11: Three Dimensional Geometry', url: 'https://ncert.nic.in/textbook/pdf/lemh111.pdf' },
        { name: 'Chapter 12: Linear Programming', url: 'https://ncert.nic.in/textbook/pdf/lemh112.pdf' },
        { name: 'Chapter 13: Probability', url: 'https://ncert.nic.in/textbook/pdf/lemh113.pdf' }
      ]
    },
    // Physics
    {
      name: 'Physics',
      chapters: [
        { name: 'Chapter 1: Electric Charges and Fields', url: 'https://ncert.nic.in/textbook/pdf/leph101.pdf' },
        { name: 'Chapter 2: Electrostatic Potential and Capacitance', url: 'https://ncert.nic.in/textbook/pdf/leph102.pdf' },
        { name: 'Chapter 3: Current Electricity', url: 'https://ncert.nic.in/textbook/pdf/leph103.pdf' },
        { name: 'Chapter 4: Moving Charges and Magnetism', url: 'https://ncert.nic.in/textbook/pdf/leph104.pdf' },
        { name: 'Chapter 5: Magnetism and Matter', url: 'https://ncert.nic.in/textbook/pdf/leph105.pdf' },
        { name: 'Chapter 6: Electromagnetic Induction', url: 'https://ncert.nic.in/textbook/pdf/leph106.pdf' },
        { name: 'Chapter 7: Alternating Current', url: 'https://ncert.nic.in/textbook/pdf/leph107.pdf' },
        { name: 'Chapter 8: Electromagnetic Waves', url: 'https://ncert.nic.in/textbook/pdf/leph108.pdf' },
        { name: 'Chapter 9: Ray Optics and Optical Instruments', url: 'https://ncert.nic.in/textbook/pdf/leph109.pdf' },
        { name: 'Chapter 10: Wave Optics', url: 'https://ncert.nic.in/textbook/pdf/leph110.pdf' },
        { name: 'Chapter 11: Dual Nature of Radiation and Matter', url: 'https://ncert.nic.in/textbook/pdf/leph111.pdf' },
        { name: 'Chapter 12: Atoms', url: 'https://ncert.nic.in/textbook/pdf/leph112.pdf' },
        { name: 'Chapter 13: Nuclei', url: 'https://ncert.nic.in/textbook/pdf/leph113.pdf' },
        { name: 'Chapter 14: Semiconductor Electronics', url: 'https://ncert.nic.in/textbook/pdf/leph114.pdf' }
      ]
    },
    
    
   
    
    // Biology
    {
      name: 'Biology',
      chapters: [
        { name: 'Chapter 1: Reproduction in Organisms', url: 'https://ncert.nic.in/textbook/pdf/lebo101.pdf' },
        { name: 'Chapter 2: Sexual Reproduction in Flowering Plants', url: 'https://ncert.nic.in/textbook/pdf/lebo102.pdf' },
        { name: 'Chapter 3: Human Reproduction', url: 'https://ncert.nic.in/textbook/pdf/lebo103.pdf' },
        { name: 'Chapter 4: Reproductive Health', url: 'https://ncert.nic.in/textbook/pdf/lebo104.pdf' },
        { name: 'Chapter 5: Principles of Inheritance and Variation', url: 'https://ncert.nic.in/textbook/pdf/lebo105.pdf' },
        { name: 'Chapter 6: Molecular Basis of Inheritance', url: 'https://ncert.nic.in/textbook/pdf/lebo106.pdf' },
        { name: 'Chapter 7: Evolution', url: 'https://ncert.nic.in/textbook/pdf/lebo107.pdf' },
        { name: 'Chapter 8: Human Health and Disease', url: 'https://ncert.nic.in/textbook/pdf/lebo108.pdf' },
        { name: 'Chapter 9: Strategies for Enhancement in Food Production', url: 'https://ncert.nic.in/textbook/pdf/lebo109.pdf' },
        { name: 'Chapter 10: Microbes in Human Welfare', url: 'https://ncert.nic.in/textbook/pdf/lebo110.pdf' },
        { name: 'Chapter 11: Biotechnology: Principles and Processes', url: 'https://ncert.nic.in/textbook/pdf/lebo111.pdf' },
        { name: 'Chapter 12: Biotechnology and its Applications', url: 'https://ncert.nic.in/textbook/pdf/lebo112.pdf' },
        { name: 'Chapter 13: Organisms and Populations', url: 'https://ncert.nic.in/textbook/pdf/lebo113.pdf' },
        { name: 'Chapter 14: Ecosystem', url: 'https://ncert.nic.in/textbook/pdf/lebo114.pdf' },
        { name: 'Chapter 15: Biodiversity and Conservation', url: 'https://ncert.nic.in/textbook/pdf/lebo115.pdf' },
        { name: 'Chapter 16: Environmental Issues', url: 'https://ncert.nic.in/textbook/pdf/lebo116.pdf' }
      ]
    },
    
    
    // Chemistry
    {
      name: 'Chemistry',
      chapters: [
        { name: 'Chapter 1: The Solid State', url: 'https://ncert.nic.in/textbook/pdf/lech101.pdf' },
        { name: 'Chapter 2: Solutions', url: 'https://ncert.nic.in/textbook/pdf/lech102.pdf' },
        { name: 'Chapter 3: Electrochemistry', url: 'https://ncert.nic.in/textbook/pdf/lech103.pdf' },
        { name: 'Chapter 4: Chemical Kinetics', url: 'https://ncert.nic.in/textbook/pdf/lech104.pdf' },
        { name: 'Chapter 5: Surface Chemistry', url: 'https://ncert.nic.in/textbook/pdf/lech105.pdf' },
        { name: 'Chapter 6: General Principles and Processes of Isolation of Elements', url: 'https://ncert.nic.in/textbook/pdf/lech106.pdf' },
        { name: 'Chapter 7: The p-Block Elements', url: 'https://ncert.nic.in/textbook/pdf/lech107.pdf' },
        { name: 'Chapter 8: The d- and f- Block Elements', url: 'https://ncert.nic.in/textbook/pdf/lech108.pdf' },
        { name: 'Chapter 9: Coordination Compounds', url: 'https://ncert.nic.in/textbook/pdf/lech109.pdf' },
        { name: 'Chapter 10: Haloalkanes and Haloarenes', url: 'https://ncert.nic.in/textbook/pdf/lech110.pdf' },
        { name: 'Chapter 11: Alcohols, Phenols and Ethers', url: 'https://ncert.nic.in/textbook/pdf/lech111.pdf' },
        { name: 'Chapter 12: Aldehydes, Ketones and Carboxylic Acids', url: 'https://ncert.nic.in/textbook/pdf/lech112.pdf' },
        { name: 'Chapter 13: Amines', url: 'https://ncert.nic.in/textbook/pdf/lech113.pdf' },
        { name: 'Chapter 14: Biomolecules', url: 'https://ncert.nic.in/textbook/pdf/lech114.pdf' },
        { name: 'Chapter 15: Polymers', url: 'https://ncert.nic.in/textbook/pdf/lech115.pdf' },
        { name: 'Chapter 16: Chemistry in Everyday Life', url: 'https://ncert.nic.in/textbook/pdf/lech116.pdf' }
      ]
    },
   
    
    
  ]
},
// Class 11
{
  class: 'Class 11',
  subjects: [
    {
      name: 'Mathematics',
      chapters: [
        { name: 'Chapter 1', url: 'https://ncert.nic.in/textbook/pdf/kemh101.pdf' },
        { name: 'Chapter 2', url: 'https://ncert.nic.in/textbook/pdf/kemh102.pdf' },
        { name: 'Chapter 3', url: 'https://ncert.nic.in/textbook/pdf/kemh103.pdf' },
        { name: 'Chapter 4', url: 'https://ncert.nic.in/textbook/pdf/kemh104.pdf' },
        { name: 'Chapter 5', url: 'https://ncert.nic.in/textbook/pdf/kemh105.pdf' },
        { name: 'Chapter 6', url: 'https://ncert.nic.in/textbook/pdf/kemh106.pdf' },
        { name: 'Chapter 7', url: 'https://ncert.nic.in/textbook/pdf/kemh107.pdf' },
        { name: 'Chapter 8', url: 'https://ncert.nic.in/textbook/pdf/kemh108.pdf' },
        { name: 'Chapter 9', url: 'https://ncert.nic.in/textbook/pdf/kemh109.pdf' },
        { name: 'Chapter 10', url: 'https://ncert.nic.in/textbook/pdf/kemh110.pdf' },
        { name: 'Chapter 11', url: 'https://ncert.nic.in/textbook/pdf/kemh111.pdf' },
        { name: 'Chapter 12', url: 'https://ncert.nic.in/textbook/pdf/kemh112.pdf' },
        { name: 'Chapter 13', url: 'https://ncert.nic.in/textbook/pdf/kemh113.pdf' },
        { name: 'Chapter 14', url: 'https://ncert.nic.in/textbook/pdf/kemh114.pdf' },
        { name: 'Chapter 15', url: 'https://ncert.nic.in/textbook/pdf/kemh115.pdf' },
        { name: 'Chapter 16', url: 'https://ncert.nic.in/textbook/pdf/kemh116.pdf' }
      ]
    },
    {
      name: 'English',
      chapters: [
        { name: 'Chapter 1', url: 'https://ncert.nic.in/textbook/pdf/kien101.pdf' },
        { name: 'Chapter 2', url: 'https://ncert.nic.in/textbook/pdf/kien102.pdf' },
        { name: 'Chapter 3', url: 'https://ncert.nic.in/textbook/pdf/kien103.pdf' },
        { name: 'Chapter 4', url: 'https://ncert.nic.in/textbook/pdf/kien104.pdf' },
        { name: 'Chapter 5', url: 'https://ncert.nic.in/textbook/pdf/kien105.pdf' },
        { name: 'Chapter 6', url: 'https://ncert.nic.in/textbook/pdf/kien106.pdf' },
        { name: 'Chapter 7', url: 'https://ncert.nic.in/textbook/pdf/kien107.pdf' },
        { name: 'Chapter 8', url: 'https://ncert.nic.in/textbook/pdf/kien108.pdf' },
        { name: 'Chapter 9', url: 'https://ncert.nic.in/textbook/pdf/kien109.pdf' },
        { name: 'Chapter 10', url: 'https://ncert.nic.in/textbook/pdf/kien110.pdf' }
      ]
    }
  ]
},
// Class 10 and 12 are already fully detailed above.
];

  // Emoji icons for subjects
  const subjectIcons = {
    Mathematics: '🧮',
    Science: '🔬',
    English: '📘',
    Hindi: '📗',
    Sanskrit: '📜',
    'Social Science': '🌏',
    default: '📚',
  };

  return (
    <motion.div
      className="ncert-pdf-page"
      style={{
        width: '100vw',
        minHeight: '100vh',
        padding: 24,
        background: 'linear-gradient(135deg, #f8fafc 0%, #fbeee6 100%)',
        boxSizing: 'border-box',
      }}
      initial="initial"
      animate="animate"
      variants={fadeInUp}
    >
      <h1 style={{ marginTop:60, color: '#EA1900', fontWeight: 900, fontSize: '2.4rem', marginBottom: 18, textAlign: 'center', letterSpacing: 1 }}>
      📚 NCERT PDF  <span style={{fontSize:'1.3rem'}}></span>
      </h1>
      <p style={{ fontSize: '1.15rem', color: '#444', textAlign: 'center', marginBottom: 36 }}>
        View all NCERT textbooks in PDF format, organized by class and subject.
      </p>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: 32,
        maxWidth: 1200,
        margin: '0 auto',
      }}>
        {ncertLinks.map(({ class: className, subjects }) => (
          <div key={className} style={{
            background: '#fff',
            borderRadius: 18,
            boxShadow: '0 2px 18px 0 rgba(234, 25, 0, 0.08)',
            padding: 24,
            marginBottom: 0,
            border: '1px solid #f3f4f6',
            display: 'flex',
            flexDirection: 'column',
            minHeight: 180,
          }}>
            <div style={{
              background: 'linear-gradient(90deg,#ffedd5 70%,#fbeee6 100%)',
              borderRadius: 12,
              padding: '8px 0',
              marginBottom: 10,
              textAlign: 'center',
            }}>
              <span style={{ fontWeight: 700, fontSize: '1.18rem', color: '#EA1900', letterSpacing: 0.5 }}>{className}</span>
            </div>
            <div style={{display:'flex',flexDirection:'column',gap:16}}>
              {subjects.map((subject) => (
                <div key={subject.name} style={{
                  background: '#f8fafc',
                  borderRadius: 10,
                  boxShadow: '0 1px 3px rgba(234,25,0,0.03)',
                  padding: '12px 14px 10px 14px',
                  marginBottom: 0,
                  borderLeft: '4px solid #fbbf24',
                  borderRight: '4px solid #fbbf24',
                  position: 'relative',
                }}>
                  <h3 style={{
                    fontWeight: 600,
                    fontSize: '1.08rem',
                    color: '#b45309',
                    marginBottom: 7,
                    display: 'flex',
                    alignItems: 'center',
                  }}>
                    <span style={{fontSize:'1.22rem',marginRight:7}}>{subjectIcons[subject.name] || subjectIcons.default}</span>
                    {subject.name}
                  </h3>
                  {subject.chapters ? (
                    <ul style={{
                      listStyle: 'none',
                      paddingLeft: 0,
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: 10,
                      margin: 0,
                    }}>
                      {subject.chapters.map(({ name, url }) => (
                        <li key={name}>
                          <a
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              background: '#fff7ed',
                              color: '#d97706',
                              borderRadius: 7,
                              padding: '6px 12px',
                              fontWeight: 500,
                              fontSize: '0.97rem',
                              textDecoration: 'none',
                              boxShadow: '0 1px 3px rgba(234,25,0,0.04)',
                              border: '1px solid #fde68a',
                              transition: 'background 0.18s, color 0.18s',
                            }}
                            onMouseOver={e => {
                              e.currentTarget.style.background = '#fbbf24';
                              e.currentTarget.style.color = '#fff';
                            }}
                            onMouseOut={e => {
                              e.currentTarget.style.background = '#fff7ed';
                              e.currentTarget.style.color = '#d97706';
                            }}
                          >
                            {name}
                            <svg style={{ marginLeft: 6 }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 7l-10 10M17 7v6M17 7H7" /></svg>
                          </a>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    subject.url && (
                      <a
                        href={subject.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          background: '#fff7ed',
                          color: '#d97706',
                          borderRadius: 7,
                          padding: '7px 16px',
                          fontWeight: 500,
                          fontSize: '1rem',
                          textDecoration: 'none',
                          boxShadow: '0 1px 3px rgba(234,25,0,0.04)',
                          border: '1px solid #fde68a',
                          transition: 'background 0.18s, color 0.18s',
                        }}
                        onMouseOver={e => {
                          e.currentTarget.style.background = '#fbbf24';
                          e.currentTarget.style.color = '#fff';
                        }}
                        onMouseOut={e => {
                          e.currentTarget.style.background = '#fff7ed';
                          e.currentTarget.style.color = '#d97706';
                        }}
                      >
                        {subject.name}
                        <svg style={{ marginLeft: 6 }} xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 7l-10 10M17 7v6M17 7H7" /></svg>
                      </a>
                    )
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
