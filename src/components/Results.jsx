import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// --- Processed Mock Data ---
// This function replaces "Arihant" with "Not found" in the dataset.
const processData = (data) => {
    return data.map(test => ({
        ...test,
        results: test.results.map(result => {
            if (result.studentName.toLowerCase().includes('arihant')) {
                return { ...result, studentName: 'Not Found' };
            }
            return result;
        })
    }));
};

export const initialTestData = [


 {
  "name": "Minor Test 26",
  "results": [
    {
      "id": 1,
      "studentName": "Rudransh Sharma (Class 6 ICSE)",
      "score": "76.25%",
      "rank": 1
    },
    {
      "id": 2,
      "studentName": "Vidya Prakash (Class 7 CBSE)",
      "score": "67.50%",
      "rank": 2
    },
    {
      "id": 3,
      "studentName": "Arpit Kumar Singh (Class 7 CBSE)",
      "score": "52.50%",
      "rank": 3
    },
    {
      "id": 4,
      "studentName": "Aarush (Class 6 CBSE)",
      "score": "52.50%",
      "rank": 4
    },
    {
      "id": 5,
      "studentName": "Aditi Panday (NIOS Class 10)",
      "score": "40.00%",
      "rank": 5
    },
    {
      "id": 6,
      "studentName": "Utkarsh Singh (Class 8 CBSE)",
      "score": "40.00%",
      "rank": 6
    },
    {
      "id": 7,
      "studentName": "Pari (Class 9 CBSE)",
      "score": "40.00%",
      "rank": 7
    },
    {
      "id": 8,
      "studentName": "Mayank Mishra (Class 9 ICSE)",
      "score": "33.75%",
      "rank": 8
    },
    {
      "id": 9,
      "studentName": "Arnav Mishra (Class 7 CBSE)",
      "score": "21.25%",
      "rank": 9
    },
    {
      "id": 10,
      "studentName": "Pihu (Class 9 CBSE)",
      "score": "21.25%",
      "rank": 10
    },
    {
      "id": 11,
      "studentName": "Akshita Lal (Class 10 ICSE)",
      "score": "11.25%",
      "rank": 11
    },
    {
      "id": 12,
      "studentName": "Sripad Nayak (Class 9 CBSE)",
      "score": "5.00%",
      "rank": 12
    }
  ]
},

  {
  "name": "Minor Test 25",
  "results": [
    {
      "id": 1,
      "studentName": "Aditi Sujan (Class 7 ICSE)",
      "score": "85.00%",
      "rank": 1
    },
    {
      "id": 2,
      "studentName": "Vidya Prakash Kalia (Class 7 CBSE)",
      "score": "83.75%",
      "rank": 2
    },
    {
      "id": 3,
      "studentName": "Advik Kumar Jha (Class 7 ICSE)",
      "score": "70.00%",
      "rank": 3
    },
    {
      "id": 4,
      "studentName": "Porshiya Bhowmik (Class 6 ICSE)",
      "score": "67.50%",
      "rank": 4
    },
    {
      "id": 5,
      "studentName": "Arpit Kumar Singh (Class 7 CBSE)",
      "score": "57.50%",
      "rank": 5
    },
    {
      "id": 6,
      "studentName": "Rudransh Sharma (Class 6 ICSE)",
      "score": "42.50%",
      "rank": 6
    },
    {
      "id": 7,
      "studentName": "Arnav Mishra (Class 7 CBSE)",
      "score": "28.75%",
      "rank": 7
    }
  ]
},
  
  {
  "name": "Minor Test 24",
  "results": [
    {
      "id": 1,
      "studentName": "Aradhya Ranjan (Class 8 CBSE)",
      "score": "81.25%",
      "rank": 1
    },
    {
      "id": 2,
      "studentName": "Arpit Kumar Singh (Class 7 CBSE)",
      "score": "81.25%",
      "rank": 2
    },
    {
      "id": 3,
      "studentName": "Aditi Sujan (Class 7 ICSE)",
      "score": "76.25%",
      "rank": 3
    },
    {
      "id": 4,
      "studentName": "Swati Priya (Class 8 CBSE)",
      "score": "71.25%",
      "rank": 4
    },
    {
      "id": 5,
      "studentName": "Arnav Mishra (Class 7 CBSE)",
      "score": "45.00%",
      "rank": 5
    },
    {
      "id": 6,
      "studentName": "Rudransh Sharma (Class 6 ICSE)",
      "score": "31.25%",
      "rank": 6
    },
    {
      "id": 7,
      "studentName": "Pari (Class 9 CBSE)",
      "score": "25.00%",
      "rank": 7
    },
    {
      "id": 8,
      "studentName": "Pihu (Class 9 CBSE)",
      "score": "20.00%",
      "rank": 8
    },
    {
      "id": 9,
      "studentName": "Utkarsh Singh (Class 8 CBSE)",
      "score": "11.25%",
      "rank": 9
    }
  ]
},




  {
  "name": "Minor Test 23", 
  "results": [
    {
      "id": 1,
      "studentName": "Advik Kumar Jha",
      "score": "97.50%",
      "rank": 1
    },
    {
      "id": 2,
      "studentName": "Vidya Prakash Kaliya",
      "score": "82.50%",
      "rank": 2
    },
    {
      "id": 3,
      "studentName": "Aditi Sujan",
      "score": "76.25%",
      "rank": 3
    },
    {
      "id": 4,
      "studentName": "Arnav Mishra",
      "score": "63.75%",
      "rank": 4
    },
    {
      "id": 5,
      "studentName": "Arpit Kumar Singh",
      "score": "61.25%",
      "rank": 5
    },
    {
      "id": 6,
      "studentName": "Aarush Kumar",
      "score": "60.00%",
      "rank": 6
    },
    {
      "id": 7,
      "studentName": "Utkarsh Singh",
      "score": "42.00%",
      "rank": 7
    },
    {
      "id": 8,
      "studentName": "Mayank",
      "score": "26.25%",
      "rank": 8
    },
    {
      "id": 9,
      "studentName": "Shripad Nayak",
      "score": "13.75%",
      "rank": 9
    }
  ]
},

  {
  "name": "Minor Test 22",
  "results": [
    {
      "id": 1,
      "studentName": "Mayank Mishra (Class 9 ICSE)",
      "score": "92.00%",
      "rank": 1
    },
    {
      "id": 2,
      "studentName": "Advik Kumar Jha (Class 7 ICSE)",
      "score": "88.00%",
      "rank": 2
    },
    {
      "id": 3,
      "studentName": "Swati Priya (Class 8 CBSE)",
      "score": "87.50%",
      "rank": 3
    },
    {
      "id": 4,
      "studentName": "Arpit Kumar Singh (Class 7 CBSE)",
      "score": "86.00%",
      "rank": 4
    },
    {
      "id": 5,
      "studentName": "Porshiya Bhowmik (Class 6 ICSE)",
      "score": "82.00%",
      "rank": 5
    },
    {
      "id": 6,
      "studentName": "Rudransh Sharma (Class 6 ICSE)",
      "score": "80.00%",
      "rank": 6
    },
    {
      "id": 7,
      "studentName": "Pihu (Class 9 CBSE)",
      "score": "78.00%",
      "rank": 7
    },
    {
      "id": 8,
      "studentName": "Vidyaprakash Kalia (Class 7 CBSE)",
      "score": "78.00%",
      "rank": 8
    },
    {
      "id": 9,
      "studentName": "Aditi Sujan (Class 7 ICSE)",
      "score": "74.00%",
      "rank": 9
    },
    {
      "id": 10,
      "studentName": "Aarush Kumar (Class 6 CBSE)",
      "score": "74.00%",
      "rank": 10
    },
    {
      "id": 11,
      "studentName": "Parul Neha Nayak (Class 10 CBSE)",
      "score": "72.50%",
      "rank": 11
    },
    {
      "id": 12,
      "studentName": "Aradhya Ranjan (Class 8 CBSE)",
      "score": "72.50%",
      "rank": 12
    },
    {
      "id": 13,
      "studentName": "Pari (Class 9 CBSE)",
      "score": "72.00%",
      "rank": 13
    },
    {
      "id": 14,
      "studentName": "Arnav Mishra (Class 7 CBSE)",
      "score": "64.00%",
      "rank": 14
    },
    {
      "id": 15,
      "studentName": "Arnav Pathak (Class 10 CBSE)",
      "score": "62.50%",
      "rank": 15
    },
    {
      "id": 16,
      "studentName": "Vimal (Class 10 CBSE)",
      "score": "62.50%",
      "rank": 16
    },
    {
      "id": 17,
      "studentName": "Ananya Dubey (Class 10 CBSE)",
      "score": "60.00%",
      "rank": 17
    },
    {
      "id": 18,
      "studentName": "Rishav (Class 10 CBSE)",
      "score": "42.50%",
      "rank": 18
    },
    {
      "id": 19,
      "studentName": "Tanvi Bharti (Class 10 CBSE)",
      "score": "40.00%",
      "rank": 19
    },
    {
      "id": 20,
      "studentName": "Amit Kumar (Class 10 CBSE)",
      "score": "30.00%",
      "rank": 20
    },
    {
      "id": 21,
      "studentName": "Utkarsh (Class 8 CBSE)",
      "score": "26.25%",
      "rank": 21
    },
    {
      "id": 22,
      "studentName": "Naitik (Class 10 CBSE)",
      "score": "22.50%",
      "rank": 22
    },
    {
      "id": 23,
      "studentName": "Krishna Kant Kumar (Class 10 ICSE)",
      "score": "10.00%",
      "rank": 23
    }
  ]
},

    {
  "name": "Minor Test 21",
  "results": [
    {
      "id": 1,
      "studentName": "Swati Priya (Class 8 CBSE) 🏆",
      "score": "100.00%",
      "rank": 1
    },
    {
      "id": 2,
      "studentName": "Aditi Sujan (Class 7 ICSE)",
      "score": "88.75%",
      "rank": 2
    },
    {
      "id": 3,
      "studentName": "Advik Kumar Jha (Class 7 ICSE)",
      "score": "82.50%",
      "rank": 3
    },
    {
      "id": 4,
      "studentName": "Aarush (Class 6 CBSE)",
      "score": "71.25%",
      "rank": 4
    },
    {
      "id": 5,
      "studentName": "Aradhya Ranjan (Class 8 CBSE)",
      "score": "67.50%",
      "rank": 5
    },
    {
      "id": 6,
      "studentName": "Porshiya Bhowmik (Class 6 ICSE)",
      "score": "67.50%",
      "rank": 6
    },
    {
      "id": 7,
      "studentName": "Vidyaprakash Kalia (Class 7 CBSE)",
      "score": "63.75%",
      "rank": 7
    },
    {
      "id": 8,
      "studentName": "Sripad Nayak (Class 9 CBSE)",
      "score": "50.00%",
      "rank": 8
    },
    {
      "id": 9,
      "studentName": "Arpit Kumar Singh (Class 7 CBSE)",
      "score": "50.00%",
      "rank": 9
    },
    {
      "id": 10,
      "studentName": "Arnav Pathak (Class 10 CBSE)",
      "score": "42.50%",
      "rank": 10
    },
    {
      "id": 11,
      "studentName": "Akshita Lal (Class 10 ICSE)",
      "score": "42.50%",
      "rank": 11
    },
    {
      "id": 12,
      "studentName": "Utkarsh (Class 8 CBSE)",
      "score": "37.50%",
      "rank": 12
    },
    {
      "id": 13,
      "studentName": "Parul Neha Nayak (Class 10 CBSE)",
      "score": "21.25%",
      "rank": 13
    },
    {
      "id": 14,
      "studentName": "Rishav (Class 10 CBSE)",
      "score": "20.00%",
      "rank": 14
    },
    {
      "id": 15,
      "studentName": "Arnav Mishra (Class 7 CBSE)",
      "score": "20.00%",
      "rank": 15
    },
    {
      "id": 16,
      "studentName": "Naitik (Class 10 CBSE)",
      "score": "17.50%",
      "rank": 16
    },
    {
      "id": 17,
      "studentName": "Yoganshika (Class 10 CBSE)",
      "score": "17.50%",
      "rank": 17
    },
    {
      "id": 18,
      "studentName": "Tanvi Bharti (Class 10 CBSE)",
      "score": "15.00%",
      "rank": 18
    },
    {
      "id": 19,
      "studentName": "Amit Kumar (Class 10 CBSE)",
      "score": "7.50%",
      "rank": 19
    }
  ]
},



 {
  "name": "Minor Test 20",
  "results": [
    {
      "id": 1,
      "studentName": "Aditi (Class 7 ICSE)",
      "score": "77.5%",
      "rank": 1
    },
    {
      "id": 2,
      "studentName": "Pari (Class 9 CBSE)",
      "score": "76.7%",
      "rank": 2
    },
    {
      "id": 3,
      "studentName": "Pihu (Class 9 CBSE)",
      "score": "75.0%",
      "rank": 3
    },
    {
      "id": 4,
      "studentName": "Aradhya Ranjan (Class 8 CBSE)",
      "score": "75.0%",
      "rank": 4
    },
    {
      "id": 5,
      "studentName": "Parul Neha Nayak (Class 10 CBSE)",
      "score": "72.5%",
      "rank": 5
    },
    {
      "id": 6,
      "studentName": "vimal (Class 10 CBSE)",
      "score": "68.8%",
      "rank": 6
    },
    {
      "id": 7,
      "studentName": "Vidyaprakash Kalia (Class 7 CBSE)",
      "score": "67.5%",
      "rank": 7
    },
    {
      "id": 8,
      "studentName": "Arnav Pathak (Class 10 CBSE)",
      "score": "66.3%",
      "rank": 8
    },
    {
      "id": 9,
      "studentName": "Aadvik Kumar Jha (Class 7 ICSE)",
      "score": "65.0%",
      "rank": 9
    },
    {
      "id": 10,
      "studentName": "Ananya Dubey (Class 10 CBSE)",
      "score": "51.3%",
      "rank": 10
    },
    {
      "id": 11,
      "studentName": "Arnav Mishra (Class 7 CBSE)",
      "score": "51.3%",
      "rank": 11
    },
    {
      "id": 12,
      "studentName": "Akshita Lal (Class 10 ICSE)",
      "score": "50.0%",
      "rank": 12
    },
    {
      "id": 13,
      "studentName": "Tanvi Bharti (Class 10 CBSE)",
      "score": "47.5%",
      "rank": 13
    },
    {
      "id": 14,
      "studentName": "Swati (Class 8 CBSE)",
      "score": "47.5%",
      "rank": 14
    },
    {
      "id": 15,
      "studentName": "Rishav Kumar (Class 10 CBSE)",
      "score": "42.5%",
      "rank": 15
    },
    {
      "id": 16,
      "studentName": "Arpit Kumar Singh (Class 7 CBSE)",
      "score": "41.3%",
      "rank": 16
    },
    {
      "id": 17,
      "studentName": "Yoganshikha Mahato (Class 10 CBSE)",
      "score": "38.8%",
      "rank": 17
    },
    {
      "id": 18,
      "studentName": "Rudransh Sharma (Class 6 ICSE)",
      "score": "37.5%",
      "rank": 18
    },
    {
      "id": 19,
      "studentName": "Naitik (Class 10 CBSE)",
      "score": "36.3%",
      "rank": 19
    },
    {
      "id": 20,
      "studentName": "Porshiya Bhowmik (Class 6 ICSE)",
      "score": "33.8%",
      "rank": 20
    },
    {
      "id": 21,
      "studentName": "Mayank Mishra (Class 9 ICSE)",
      "score": "26.3%",
      "rank": 21
    },
    {
      "id": 22,
      "studentName": "Sripad Nayak (Class 9 CBSE)",
      "score": "2.5%",
      "rank": 22
    },
    {
      "id": 23,
      "studentName": "Utkarsh Singh (Class 8 CBSE)",
      "score": "2.5%",
      "rank": 23
    }
  ]
},
    

  {
  "name": "Minor Test 19",
  "results": [
    {
      "id": 1,
      "studentName": "Swati (Class 8 CBSE)",
      "score": "95.0%",
      "rank": 1
    },
    {
      "id": 2,
      "studentName": "Parul Neha Nayak (Class 10 CBSE)",
      "score": "87.5%",
      "rank": 2
    },
    {
      "id": 3,
      "studentName": "Aradhya Ranjan (Class 8 CBSE)",
      "score": "85.0%",
      "rank": 3
    },
    {
      "id": 4,
      "studentName": "Aadvik Kumar Jha (Class 7 ICSE)",
      "score": "83.8%",
      "rank": 4
    },
    {
      "id": 5,
      "studentName": "Arnav Pathak (Class 10 CBSE)",
      "score": "66.3%",
      "rank": 5
    },
    {
      "id": 6,
      "studentName": "Aditi (Class 7 ICSE)",
      "score": "61.3%",
      "rank": 6
    },
    {
      "id": 7,
      "studentName": "Piyush (Class 12)",
      "score": "60.0%",
      "rank": 7
    },
    {
      "id": 8,
      "studentName": "Rishav Kumar (Class 10 CBSE)",
      "score": "57.5%",
      "rank": 8
    },
    {
      "id": 9,
      "studentName": "Rudransh Sharma (Class 6 ICSE)",
      "score": "57.5%",
      "rank": 8
    },
    {
      "id": 10,
      "studentName": "Ananya Dubey (Class 10 CBSE)",
      "score": "53.8%",
      "rank": 10
    },
    {
      "id": 11,
      "studentName": "Arpit Kumar Singh (Class 7 CBSE)",
      "score": "46.3%",
      "rank": 11
    },
    {
      "id": 12,
      "studentName": "Naitik (Class 10 CBSE)",
      "score": "43.8%",
      "rank": 12
    },
    {
      "id": 13,
      "studentName": "Arnav Mishra (Class 7 CBSE)",
      "score": "43.8%",
      "rank": 12
    },
    {
      "id": 14,
      "studentName": "Akshita Lal (Class 10 ICSE)",
      "score": "40.0%",
      "rank": 14
    },
    {
      "id": 15,
      "studentName": "Ananya (Class 11)",
      "score": "36.8%",
      "rank": 15
    },
    {
      "id": 16,
      "studentName": "Tanvi Bharti (Class 10 CBSE)",
      "score": "33.8%",
      "rank": 16
    },
    {
      "id": 17,
      "studentName": "Yoganshikha Mahato (Class 10 CBSE)",
      "score": "32.5%",
      "rank": 17
    },
    {
      "id": 18,
      "studentName": "Sripad Nayak (Class 9 CBSE)",
      "score": "27.5%",
      "rank": 18
    },
    {
      "id": 19,
      "studentName": "Sourya Sinha (Class 11)",
      "score": "21.1%",
      "rank": 19
    },
    {
      "id": 20,
      "studentName": "Vidyaprakash Kalia (Class 7 CBSE)",
      "score": "15.0%",
      "rank": 20
    }
  ]
},

    {
        name: "Minor Test 18",
        results: [
          { id: 1, studentName: "Advik Kumar Jha (Class 7 ICSE)", score: "80.0%", rank: 1 },
          {
      "id": 2,
      "studentName": "Rudransh Sharma (Class 6 ICSE)",
      "score": "75%",
      "rank": 2
    },
          { id: 3, studentName: "Arpit Kumar Singh (Class 7 CBSE)", score: "72.5%", rank: 3 },
          { id: 4, studentName: "Sripad Nayak (Class 9 CBSE)", score: "52.5%", rank: 4 },
          { id: 5, studentName: "Arnav Pathak (Class 10 CBSE)", score: "48.3%", rank: 5 },
          { id: 6, studentName: "Akshita Lal (Class 10 ICSE)", score: "47.5%", rank: 6 },
          { id: 7, studentName: "Parul Neha Nayak (Class 10 CBSE)", score: "18.3%", rank: 7 },
          { id: 8, studentName: "Ananya Dubey (Class 10 CBSE)", score: "16.7%", rank: 8 },
          { id: 9, studentName: "Naitik (Class 10 CBSE)", score: "11.7%", rank: 9 },
          { id: 10, studentName: "Arnav Mishra (Class 7 CBSE)", score: "10.0%", rank: 10 },
          { id: 11, studentName: "Tanvi Bharti (Class 10 CBSE)", score: "8.3%", rank: 11 }
        ]
      },


{
        name: "Minor Test 17",
        results: [
            { id: 1, studentName: "Advik Kumar Jha (Class 7 ICSE)", score: "92.5%", rank: 1 },
            { id: 2, studentName: "Aradhya Ranjan (Class 8 CBSE)", score: "82.5%", rank: 2 },
            { id: 3, studentName: "Saurya (Class 11)", score: "75.0%", rank: 3 },
            { id: 4, studentName: "Aditi (Class 7 ICSE)", score: "72.5%", rank: 4 },
            { id: 5, studentName: "Parul Neha Nayak (Class 10 CBSE)", score: "67.5%", rank: 5 },
            { id: 6, studentName: "Arnav Pathak (Class 10 CBSE)", score: "66.3%", rank: 6 },
            { id: 7, studentName: "Ananya (Class 11)", score: "65.0%", rank: 7 },
            { id: 8, studentName: "Ananya Dubey(Class 10 CBSE)", score: "65.0%", rank: 8 },
            { id: 9, studentName: "Yoganshika (Class 10 CBSE)", score: "61.3%", rank: 9 },
            { id: 10, studentName: "Mayank Mishra (Class 9 ICSE)", score: "57.5%", rank: 10 },
            { id: 11, studentName: "Naitik (Class 10 CBSE)", score: "56.3%", rank: 11 },
            { id: 12, studentName: "Shivam Bharti (Class 7 CBSE)", score: "55.0%", rank: 12 },
            { id: 13, studentName: "Piyush (Class 12)", score: "51.9%", rank: 13 },
            { id: 14, studentName: "Tanvi Bharti (Class 10 CBSE)", score: "51.3%", rank: 14 },
            { id: 15, studentName: "Rudransh Sharma (Class 6 ICSE)", score: "40.0%", rank: 15 },
            { id: 16, studentName: "Porshiya Bhowmik (Class 6 ICSE)", score: "32.5%", rank: 16 },
            { id: 17, studentName: "Arpit Kumar Singh (Class 7 CBSE)", score: "30.0%", rank: 17 },
            { id: 18, studentName: "Akshita Lal (Class 10 ICSE)", score: "25.0%", rank: 18 },
            { id: 19, studentName: "Sripad Nayak (Class 9 CBSE)", score: "23.0%", rank: 19 },
            { id: 20, studentName: "Arnav Mishra (Class 7 CBSE)", score: "10.0%", rank: 20 }
           ]
      },
      

   


    {
        name: "Minor Test 16",
        results: [
          { id: 1, studentName: "Aradhaya Ranjan (Class 8 CBSE)", score: "96.67%", rank: 1 },
          { id: 2, studentName: "Aditi Sujan (Class 7 ICSE)", score: "96.67%", rank: 2 },
          { id: 3, studentName: "Advik Kumar Jha (Class 7 ICSE)", score: "95.00%", rank: 3 },
          { id: 4, studentName: "Arnav Pathak (Class 10 CBSE)", score: "86.25%", rank: 4 },
          { id: 5, studentName: "Ananya Dubey (Class 10 CBSE)", score: "83.75%", rank: 5 },
          { id: 6, studentName: "Yoganshikha Mahato (Class 10 CBSE)", score: "72.50%", rank: 6 },
          { id: 7, studentName: "Parul Neha Naik (Class 10 CBSE)", score: "71.25%", rank: 7 },
          { id: 8, studentName: "Tanvi Kumari (Class 10 CBSE)", score: "65.00%", rank: 8 },
          { id: 9, studentName: "Naitik (Class 10 CBSE)", score: "56.25%", rank: 9 },
          { id: 10, studentName: "Arnav Mishra (Class 7 CBSE)", score: "51.67%", rank: 10 },
          { id: 11, studentName: "Shivam Bharti (Class 7 CBSE)", score: "48.33%", rank: 11 },
          { id: 12, studentName: "Arpit Kumar Singh (Class 7 CBSE)", score: "48.33%", rank: 12 },
        ]
      },
      
          
      

    {
        name: "Minor Test 15",
        results: [
            { id: 1, studentName: "Arnav Pathak (Class 10 CBSE)", score: "86.67%", rank: 1 },
    { id: 2, studentName: "Parul Neha Nayak (Class 10 CBSE)", score: "78.33%", rank: 2 },
    { id: 3, studentName: "Arpit Kumar Singh (Class 7 CBSE)", score: "78.33%", rank: 3 },
    { id: 4, studentName: "Advik Kumar Jha (Class 7 ICSE)", score: "76.67%", rank: 4 },
    { id: 5, studentName: "Aradhya Ranjan (Class 8 CBSE)", score: "70.00%", rank: 5 },
    { id: 6, studentName: "Arnav Mishra (Class 7 CBSE)", score: "70.00%", rank: 6 },
    { id: 7, studentName: "Shivam Bharti (Class 7 CBSE)", score: "70.00%", rank: 7 },
    { id: 8, studentName: "Tanvi Bharti (Class 10 CBSE)", score: "65.00%", rank: 8 },
    { id: 9, studentName: "Ananya Dubey (Class 10 CBSE)", score: "65.00%", rank: 9 },
    { id: 10, studentName: "Naitik (Class 10 CBSE)", score: "63.33%", rank: 10 },
    { id: 11, studentName: "Aditi (Class 7 ICSE)", score: "63.33%", rank: 11 },
    { id: 12, studentName: "Akshita Lal (Class 10 ICSE)", score: "56.67%", rank: 12 },
    { id: 13, studentName: "Rudransh Sharma (Class 6 ICSE)", score: "56.67%", rank: 13 },
    { id: 14, studentName: "Sripad Nayak (Class 9 CBSE)", score: "53.33%", rank: 14 },
    { id: 15, studentName: "Yoganshika Mahato (Class 10 CBSE)", score: "51.67%", rank: 15 },
    { id: 16, studentName: "Mayank Mishra (Class 9 ICSE)", score: "30.00%", rank: 16 },
    { id: 17, studentName: "Shreya Kumari (Class 9 ICSE)", score: "10.00%", rank: 17 }
        ]
    },
    






    {
        name: "Minor Test 14",
        results: [
            { id: 1, studentName: "Arnav Pathak (Class 10 CBSE)", score: "72.50%", rank: 1 },
            { id: 2, studentName: "Parul Neha  (Class 10 CBSE)", score: "70.00%", rank: 2 },
            { id: 3, studentName: "Porshiya  (Class 6 ICSE)", score: "70.00%", rank: 3 },
            { id: 4, studentName: "Arpit Kumar Singh (Class 7 CBSE)", score: "68.33%", rank: 4 },
            { id: 5, studentName: "Rudransh Sharma (Class 6 ICSE)", score: "66.67%", rank: 5 },
            { id: 6, studentName: "Naitik (Class 10 CBSE)", score: "58.75%", rank: 6 },
            { id: 7, studentName: "Ananya Dubey (Class 10 CBSE)", score: "57.50%", rank: 7 },
            { id: 8, studentName: "Yoganshika (Class 10 CBSE)", score: "56.25%", rank: 8 },
            { id: 9, studentName: "Sripad Nayak (Class 9 CBSE)", score: "55.00%", rank: 9 },
            { id: 10, studentName: "Tanvi Bharti (Class 10 CBSE)", score: "52.50%", rank: 10 },
            { id: 11, studentName: "Aradhya Ranjan (Class 8 CBSE)", score: "50.00%", rank: 11 },
            { id: 12, studentName: "Shivam Bharti (Class 7 CBSE)", score: "33.33%", rank: 12 },
            { id: 13, studentName: "Mayank Mishra (Class 9 ICSE)", score: "28.33%", rank: 13 },
            { id: 14, studentName: "Advik Kumar Jha (Class 7 ICSE)", score: "26.67%", rank: 14 },
            { id: 15, studentName: "Arnav Mishra (Class 7 CBSE)", score: "16.67%", rank: 15 },
            { id: 16, studentName: "Akshita Lal (Class 10 ICSE)", score: "7.50%", rank: 16 }
        ]
    },

    {
        name: "Minor Test 13",
        results: [
            { id: 1, studentName: "Advik (Class 7 ICSE)", score: "93.75%", rank: 1 },
            { id: 2, studentName: "Aradhya (Class 8 CBSE)", score: "75.0%", rank: 2 },
            { id: 3, studentName: "Arpit (Class 7 CBSE)", score: "71.25%", rank: 3 },
            { id: 4, studentName: "Saurya (Class 11)", score: "70.0%", rank: 4 },
            { id: 5, studentName: "Porshiya (Class 6 ICSE)", score: "67.5%", rank: 5 },
            { id: 6, studentName: "Parul (Class 10 CBSE)", score: "66.25%", rank: 6 },
            { id: 7, studentName: "Arnav (Class 10 CBSE)", score: "66.25%", rank: 7 },
            { id: 8, studentName: "Ananya (Class 10 CBSE)", score: "65.0%", rank: 8 },
            { id: 9, studentName: "Mayank (Class 9 ICSE)", score: "61.25%", rank: 9 },
            { id: 10, studentName: "Yoganshika (Class 10 CBSE)", score: "58.75%", rank: 10 },
            { id: 11, studentName: "Naitik (Class 10 CBSE)", score: "57.5%", rank: 11 },
            { id: 12, studentName: "Tanvi (Class 10 CBSE)", score: "52.5%", rank: 12 },
            { id: 13, studentName: "Rudransh (Class 6 ICSE)", score: "50.0%", rank: 13 },
            { id: 14, studentName: "Shivam (Class 7 CBSE)", score: "45.0%", rank: 14 },
            { id: 15, studentName: "Akshita (Class 10 ICSE)", score: "43.75%", rank: 15 },
            { id: 16, studentName: "Arnav (Class 7 CBSE)", score: "35.0%", rank: 16 },
            { id: 17, studentName: "Shreya (Class 9 ICSE)", score: "17.5%", rank: 17 },
            { id: 18, studentName: "Sripad Nayak (Class 9 CBSE)", score: "10%", rank: 18 },
        ]
    },
    { name: "Minor Test 12", results: [] },
    {
        name: "Minor Test 11",
        results: [
            { id: 1, studentName: "Aradhya Ranjan (8 CBSE)", score: "86.25%", rank: 1 },
            { id: 2, studentName: "Arnav Pathak (10 CBSE)", score: "81.25%", rank: 2 },
            { id: 3, studentName: "Ananya Dubey (10 CBSE)", score: "55.00%", rank: 3 },
            { id: 4, studentName: "Parul Neha Nayak (10 CBSE)", score: "55.00%", rank: 3 },
            { id: 5, studentName: "Tanvi Kumari (10 CBSE)", score: "46.25%", rank: 5 },
            { id: 6, studentName: "Advik Kumar Jha (7 ICSE)", score: "45.00%", rank: 6 },
            { id: 7, studentName: "Arpit Kumar Singh (7 CBSE)", score: "43.33%", rank: 7 },
            { id: 8, studentName: "Yoganshika Mahato (10 CBSE)", score: "42.50%", rank: 8 },
            { id: 9, studentName: "Rudransh Sharma (6 ICSE)", score: "40.00%", rank: 9 },
            { id: 10, studentName: "Akshita Lal (10 ICSE)", score: "33.75%", rank: 10 },
            { id: 11, studentName: "Shivam Bharti (7 CBSE)", score: "31.67%", rank: 11 },
        ]
    },
    {
        name: "Minor Test 10",
        results: [
            { id: 1, studentName: "Aaradhya Ranjan (Class 8 CBSE)", score: "91.67%", rank: "1st" },
            { id: 2, studentName: "Advik Jha (Class 7 ICSE)", score: "90.00%", rank: "2nd" },
            { id: 3, studentName: "Yoganshika Mahato (Class 10 CBSE)", score: "83.33%", rank: "3rd" },
            { id: 4, studentName: "Arnav Pathak (Class 10 CBSE)", score: "83.33%", rank: "3rd" },
            { id: 5, studentName: "Arpit Kumar Singh (Class 7 CBSE)", score: "83.33%", rank: "3rd" },
            { id: 6, studentName: "Arnav Mishra (Class 7 CBSE)", score: "81.67%", rank: "6th" },
            { id: 7, studentName: "Shivam Bharti (Class 7 CBSE)", score: "71.67%", rank: "7th" },
            { id: 8, studentName: "Parul Neha Nayak (Class 10 CBSE)", score: "66.67%", rank: "8th" },
            { id: 9, studentName: "Tanvi Kumari (Class 10 CBSE)", score: "65.00%", rank: "9th" },
            { id: 10, studentName: "Rudransh Sharma (Class 6 ICSE)", score: "50.00%", rank: "10th" },
            { id: 11, studentName: "Ananya Dubey (Class 10 CBSE)", score: "25.00%", rank: "11th" },
        ]
    },
    {
        name: "Minor Test 09",
        note: "(Top 5 Results)",
        results: [
            { id: 1, studentName: "Advik Jha", score: "68.33%", rank: 1 },
            { id: 2, studentName: "Arpit Kumar", score: "61.67%", rank: 2 },
            { id: 3, studentName: "Shivam Bharti", score: "60.00%", rank: 3 },
            { id: 4, studentName: "Arnav Pathak", score: "56.67%", rank: 4 },
            { id: 5, studentName: "Parul Neha", score: "51.67%", rank: 5 },
        ]
    },
    {
        name: "Minor Test 08",
        results: [
            { id: 1, studentName: "Arihant** (Class 9 CBSE)", score: "82.50%", rank: 1 },
            { id: 2, studentName: "Porshiya* (Class 6 ICSE)", score: "82.50%", rank: 2 },
            { id: 3, studentName: "Ananya (Class 10 CBSE)", score: "80.00%", rank: 3 },
            { id: 4, studentName: "Arnav (Class 10 CBSE)", score: "80.00%", rank: 4 },
            { id: 5, studentName: "Shivam (Class 7 CBSE)", score: "77.50%", rank: 5 },
            { id: 6, studentName: "Advik (Class 7 ICSE)", score: "75.00%", rank: 6 },
            { id: 7, studentName: "Arpit (Class 7 CBSE)", score: "72.50%", rank: 7 },
            { id: 8, studentName: "Parul (Class 10 CBSE)", score: "72.50%", rank: 8 },
            { id: 9, studentName: "Akshita (Class 10 ICSE)", score: "70.00%", rank: 9 },
            { id: 10, studentName: "Aarna (Class 7 CBSE)", score: "62.50%", rank: 10 },
            { id: 11, studentName: "Piyush (Class 12)", score: "63.64%", rank: 11 },
            { id: 12, studentName: "Yoganshika (Class 10 CBSE)", score: "42.50%", rank: 12 },
            { id: 13, studentName: "Tanvi (Class 10 CBSE)", score: "40.00%", rank: 13 },
            { id: 14, studentName: "Saurya (Class 11)", score: "38.46%", rank: 14 },
        ]
    },
    {
        name: "Minor Test 07",
        results: [
            { id: 1, studentName: "Arpit**", score: "85.00%", rank: 1 },
            { id: 2, studentName: "Arnav*", score: "76.79%", rank: 2 },
            { id: 3, studentName: "Advik", score: "73.21%", rank: 3 },
            { id: 4, studentName: "Arihant", score: "67.86%", rank: 4 },
            { id: 5, studentName: "Shivam", score: "60.00%", rank: 5 },
            { id: 6, studentName: "Akshita", score: "57.14%", rank: 6 },
            { id: 7, studentName: "Parul", score: "48.21%", rank: 7 },
            { id: 8, studentName: "Ananya", score: "39.29%", rank: 8 },
            { id: 9, studentName: "Aarna", score: "37.50%", rank: 9 },
            { id: 10, studentName: "Yoganshika", score: "33.93%", rank: 10 },
            { id: 11, studentName: "Mayank", score: "28.57%", rank: 11 },
            { id: 12, studentName: "Tanvi", score: "17.86%", rank: 12 },
            { id: 13, studentName: "Shreya", score: "10.71%", rank: 13 },
        ]
    },
    {
        name: "Minor Test 06",
        results: [
            { id: 1, studentName: "Advik (Class 7 ICSE)", score: "85.00%", rank: 1 },
            { id: 2, studentName: "Saurya (Class 11)", score: "76.67%", rank: 2 },
            { id: 3, studentName: "Arpit (Class 7 CBSE)", score: "73.33%", rank: 3 },
            { id: 4, studentName: "Arnav (Class 10 CBSE)", score: "60.00%", rank: 4 },
            { id: 5, studentName: "Akshita (Class 10 ICSE)", score: "48.33%", rank: 5 },
            { id: 6, studentName: "Shivam (Class 7 CBSE)", score: "46.67%", rank: 6 },
            { id: 7, studentName: "Mayank (Class 9 ICSE)", score: "43.33%", rank: 7 },
            { id: 8, studentName: "Yoganshika (Class 10 CBSE)", score: "38.33%", rank: 8 },
            { id: 9, studentName: "Porshiya (Class 6 ICSE)", score: "36.67%", rank: 9 },
            { id: 10, studentName: "Parul (Class 10 CBSE)", score: "36.67%", rank: 10 },
            { id: 11, studentName: "Ananya (Class 10 CBSE)", score: "31.67%", rank: 11 },
            { id: 12, studentName: "Aarna (Class 7 CBSE)", score: "28.33%", rank: 12 },
            { id: 13, studentName: "Tanvi (Class 10 CBSE)", score: "25.00%", rank: 13 },
            { id: 14, studentName: "Piyush (Class 12)", score: "16.67%", rank: 14 },
            { id: 15, studentName: "Shreya (Class 9 ICSE)", score: "6.67%", rank: 15 },
        ]
    },
    { name: "Minor Test 05", results: [] },
    {
        name: "Minor Test 4",
        results: [
            { id: 1, studentName: "Piyush (Class 12)", score: "95.00%", rank: 1 },
            { id: 2, studentName: "Arnav (Class 10)", score: "85.00%", rank: 2 },
            { id: 3, studentName: "Advik (Class 7 ICSE)", score: "78.33%", rank: 3 },
            { id: 4, studentName: "Parul (Class 10)", score: "75.00%", rank: 4 },
            { id: 5, studentName: "Arihant (Class 9 CBSE)", score: "70.00%", rank: 5 },
            { id: 6, studentName: "Tanvi (Class 10)", score: "66.67%", rank: 6 },
            { id: 7, studentName: "Saurya (Class 11)", score: "66.67%", rank: 7 },
            { id: 8, studentName: "Yoganshika (Class 10)", score: "48.33%", rank: 8 },
            { id: 9, studentName: "Ananya (Class 10)", score: "46.67%", rank: 9 },
            { id: 10, studentName: "Mayank (Class 9 ICSE)", score: "40.00%", rank: 10 },
            { id: 11, studentName: "Sahil (Class 10)", score: "38.33%", rank: 11 },
            { id: 12, studentName: "Mandeep (Class 11)", score: "38.33%", rank: 12 },
            { id: 13, studentName: "Akshita (Class 10)", score: "36.67%", rank: 13 },
        ]
    },
    {
        name: "Minor Test 3",
        results: [
            { id: 1, studentName: "Saurya (Class 11)", score: "35/40", rank: 1 },
            { id: 2, studentName: "Parul (Class 10)", score: "21.5/40", rank: 2 },
            { id: 3, studentName: "Piyush (Class 12)", score: "20/40", rank: 3 },
            { id: 4, studentName: "Arnav (Class 10)", score: "20/40", rank: 4 },
            { id: 5, studentName: "Porshiya (Class 6)", score: "19/40", rank: 5 },
            { id: 6, studentName: "Arihant (Class 9)", score: "18/40", rank: 6 },
            { id: 7, studentName: "Mayank (Class 9)", score: "16.5/40", rank: 7 },
            { id: 8, studentName: "Yoganshika (Class 10)", score: "10.5/40", rank: 8 },
            { id: 9, studentName: "Tanvi (Class 10)", score: "9/40", rank: 9 },
            { id: 10, studentName: "Sahil (Class 10)", score: "9/40", rank: 10 },
            { id: 11, studentName: "Mandeep (Class 11)", score: "7.5/40", rank: 11 },
            { id: 12, studentName: "Akshita (Class 10)", score: "6.5/40", rank: 12 },
            { id: 13, studentName: "Shreya (Class 9)", score: "1/40", rank: 13 },
        ]
    },
    {
        name: "Minor Test 2",
        results: [
            { id: 1, studentName: "Saurya*", score: "37.5/50", rank: 1 },
            { id: 2, studentName: "Porshiya*", score: "35.5/50", rank: 2 },
            { id: 3, studentName: "Arnav", score: "34.5/50", rank: 3 },
            { id: 4, studentName: "Arihant", score: "27/50", rank: 4 },
            { id: 5, studentName: "Mayank", score: "24.5/50", rank: 5 },
            { id: 6, studentName: "Parul", score: "21.5/50", rank: 6 },
            { id: 7, studentName: "Ananya", score: "16.5/50", rank: 7 },
            { id: 8, studentName: "Yoganshika", score: "14/50", rank: 8 },
            { id: 9, studentName: "Tanvi", score: "14/50", rank: 9 },
            { id: 10, studentName: "Mandeep", score: "7/50", rank: 10 },
        ]
    },
    {
        name: "Minor Test 01",
        results: [
            { id: 1, studentName: "Arnav", score: "32", rank: 1 },
            { id: 2, studentName: "Yoganshika", score: "26.5", rank: 2 },
            { id: 3, studentName: "Ananya", score: "25", rank: 3 },
            { id: 4, studentName: "Arihant", score: "23.5", rank: 4 },
            { id: 5, studentName: "Mayank", score: "20.5", rank: 5 },
            { id: 6, studentName: "Tanvi", score: "18", rank: 6 },
            { id: 7, studentName: "Parul", score: "14", rank: 7 },
        ]
    }
];

const testData = processData(initialTestData);

// --- SVG Icon Components ---
const ChevronLeftIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" style={{ height: '1.25rem', width: '1.25rem', marginRight: '0.5rem' }} viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
);

const DocumentSearchIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" style={{ height: '4rem', width: '4rem', color: '#FBBF24' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
);

const GoldMedalIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" style={{ height: '1.5rem', width: '1.5rem', display: 'inline-block', marginRight: '0.5rem', color: '#FBBF24' }} viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M9.243 3.03a1 1 0 011.514 0l1.233 2.035a1 1 0 00.757.545l2.32.338a1 1 0 01.554 1.705l-1.678 1.635a1 1 0 00-.287.884l.396 2.31a1 1 0 01-1.45 1.054L10 12.39l-2.086 1.096a1 1 0 01-1.45-1.054l.396-2.31a1 1 0 00-.287-.884L4.895 7.653a1 1 0 01.554-1.705l2.32-.338a1 1 0 00.757-.545L9.243 3.03z" clipRule="evenodd" />
    </svg>
);

const SilverMedalIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" style={{ height: '1.5rem', width: '1.5rem', display: 'inline-block', marginRight: '0.5rem', color: '#9CA3AF' }} viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M9.243 3.03a1 1 0 011.514 0l1.233 2.035a1 1 0 00.757.545l2.32.338a1 1 0 01.554 1.705l-1.678 1.635a1 1 0 00-.287.884l.396 2.31a1 1 0 01-1.45 1.054L10 12.39l-2.086 1.096a1 1 0 01-1.45-1.054l.396-2.31a1 1 0 00-.287-.884L4.895 7.653a1 1 0 01.554-1.705l2.32-.338a1 1 0 00.757-.545L9.243 3.03z" clipRule="evenodd" />
    </svg>
);

// --- Individual Components ---

const TestSelectionButton = ({ test, delay }) => {
    const [isHovered, setIsHovered] = useState(false);

    const baseStyle = {
        padding: '1.5rem',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: '1rem',
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        color: 'white',
        transform: isHovered ? 'translateY(-0.5rem)' : 'translateY(0)',
        transition: 'all 0.3s ease-in-out',
        cursor: 'pointer',
        outline: 'none',
        animation: 'fade-in-up 0.6s ease-out forwards',
        opacity: 0,
        animationFillMode: 'forwards',
        animationDelay: `${delay}ms`
    };

    const hoverStyle = {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
    };

    return (
                <Link
            to={`/result/${test.name.toLowerCase().replace(/\s+/g, '')}`}
            style={{ ...baseStyle, textDecoration: 'none', ...(isHovered ? hoverStyle : {}) }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{test.name}</h2>
                <span style={{ color: '#FBBF24', transform: isHovered ? 'translateX(0.25rem)' : 'translateX(0)', transition: 'transform 0.3s' }}>&#8594;</span>
            </div>
        </Link>
    );
};


const TestSelection = ({ tests }) => (
    <div style={{ width: '100%', maxWidth: '48rem', margin: '0 auto', textAlign: 'center', animation: 'fade-in-up 0.6s ease-out forwards' }}>
        <p style={{ color: '#FCD34D', fontSize: '1.125rem', marginBottom: '0.5rem' }}>(Vardaan Senior)</p>
        <h1 
            style={{ 
                fontSize: '3.75rem', 
                fontWeight: 800, 
                color: 'white', 
                marginBottom: '0.75rem',
                lineHeight: 1.1,
                wordBreak: 'break-word',
                textAlign: 'center',
            }}
        >
            <span className="trp-desktop">Test Results Portal</span>
            <span className="trp-mobile" style={{ display: 'none' }}>
                Test Results<br />Portal
            </span>
        </h1>
        <style>{`
        @media (max-width: 600px) {
            .trp-desktop { display: none !important; }
            .trp-mobile { display: inline !important; }
        }
        @media (min-width: 601px) {
            .trp-desktop { display: inline !important; }
            .trp-mobile { display: none !important; }
        }
        `}</style>
        <p style={{ color: '#FCD34D', fontSize: '1.125rem', marginBottom: '3rem' }}>Select an exam to view the detailed results.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {tests.map((test, index) => (
                <TestSelectionButton
                    key={test.name}
                    test={test}
                                        delay={index * 100}
                />
            ))}
        </div>
    </div>
);

// This is a new component to handle the row's state and styling
const ResultRow = ({ result, index }) => {
    const [isHovered, setIsHovered] = useState(false);

    const rankNum = parseInt(String(result.rank).replace(/[^0-9]/g, ''));
    const isFirst = rankNum === 1;
    const isSecond = rankNum === 2;

    const baseStyle = {
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        animation: 'fade-in-up 0.6s ease-out forwards',
        opacity: 0,
        animationFillMode: 'forwards',
        animationDelay: `${index * 50}ms`,
        transition: 'background-color 0.2s ease-in-out',
    };

    const hoverStyle = {
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
    };
    
    let rankStyle = {};
    if (isFirst) rankStyle.backgroundColor = 'rgba(245, 158, 11, 0.2)';
    if (isSecond) rankStyle.backgroundColor = 'rgba(100, 116, 139, 0.2)';

    const finalStyle = {
        ...baseStyle,
        ...rankStyle,
        ...(isHovered ? hoverStyle : {})
    };

    return (
        <tr 
            style={finalStyle}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <td style={{ padding: '1rem', whiteSpace: 'nowrap', fontWeight: 'bold', fontSize: '1.125rem' }}>
                <span style={{ color: '#FBBF24' }}>{result.rank}</span>
            </td>
            <td style={{ padding: '1rem', whiteSpace: 'nowrap' }}>
                {isFirst && <GoldMedalIcon />}
                {isSecond && <SilverMedalIcon />}
                {/* Student name and class split for mobile */}
                <span className="student-name-desktop">{result.studentName}</span>
                <span className="student-name-mobile" style={{ display: 'none' }}>
                    {(() => {
                        // Try to extract name and class
                        const match = result.studentName.match(/^(.*?)(\s*\((Class|[0-9]+)[^)]+\))?$/i);
                        if (match) {
                            const name = match[1].trim();
                            const classInfo = match[2] ? match[2].replace(/[()]/g, '').trim() : '';
                            return <>
                                {name}
                                {classInfo && <><br /><span style={{ color: '#FDE68A', fontSize: '0.95em' }}>{classInfo}</span></>}
                            </>;
                        } else {
                            return result.studentName;
                        }
                    })()}
                </span>
                <style>{`
                    @media (max-width: 600px) {
                        .student-name-desktop { display: none !important; }
                        .student-name-mobile { display: inline !important; }
                    }
                    @media (min-width: 601px) {
                        .student-name-desktop { display: inline !important; }
                        .student-name-mobile { display: none !important; }
                    }
                `}</style>
            </td>
            <td style={{ padding: '1rem', whiteSpace: 'nowrap', fontWeight: '600', textAlign: 'right' }}>{result.score}</td>
        </tr>
    );
};


const ResultDisplay = ({ test, onBack }) => {
    const [isBackHovered, setIsBackHovered] = useState(false);

    const backButtonStyle = {
        marginBottom: '2rem',
        display: 'flex',
        alignItems: 'center',
        color: isBackHovered ? 'white' : '#FCD34D',
        fontWeight: '600',
        transition: 'color 0.2s',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: 0
    };

    return (
        <div style={{ width: '100%', maxWidth: '56rem', margin: '0 auto', animation: 'fade-in 0.6s ease-out forwards' }}>
            <button
                onClick={onBack}
                style={backButtonStyle}
                onMouseEnter={() => setIsBackHovered(true)}
                onMouseLeave={() => setIsBackHovered(false)}
            >
                <ChevronLeftIcon />
                Back to Selection
            </button>
            <div style={{ textAlign: 'center' }}>
                <h1 style={{ fontSize: '3rem', fontWeight: 'bold', color: 'white' }}>{test.name} - Results</h1>
                {test.note && <p style={{ color: '#FDE68A', fontSize: '1.125rem', marginTop: '0.5rem', marginBottom: '2rem' }}>{test.note}</p>}
                {!test.note && <div style={{ marginBottom: '2.5rem' }}></div>}
            </div>

            {test.results && test.results.length > 0 ? (
                <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', borderRadius: '1rem', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)', border: '1px solid rgba(255, 255, 255, 0.2)', overflow: 'hidden' }}>
                    <div className="responsive-table-wrapper" style={{ overflowX: 'auto' }}>
                        <table className="responsive-table" style={{ width: '100%', textAlign: 'left', color: 'white', borderCollapse: 'collapse' }}>
                            <thead style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
                                <tr>
                                    <th className="responsive-th" style={{ padding: '1rem', fontSize: '0.875rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Rank</th>
                                    <th className="responsive-th" style={{ padding: '1rem', fontSize: '0.875rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Student Name</th>
                                    <th className="responsive-th" style={{ padding: '1rem', fontSize: '0.875rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.05em', textAlign: 'right' }}>Score</th>
                                </tr>
                            </thead>
                            <tbody>
                                {test.results.map((result, index) => (
                                    <ResultRow key={result.id} result={result} index={index} />
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <style>{`
                        @media (max-width: 600px) {
                            .responsive-table-wrapper {
                                overflow-x: visible !important;
                            }
                            .responsive-table {
                                font-size: 0.92rem !important;
                            }
                            .responsive-th, .responsive-table td {
                                padding: 0.5rem !important;
                                font-size: 0.92rem !important;
                                word-break: break-word;
                            }
                            .responsive-table {
                                table-layout: fixed;
                            }
                        }
                    `}</style>
                </div>
            ) : (
                <div style={{ textAlign: 'center', backgroundColor: 'rgba(255, 255, 255, 0.1)', padding: '3rem', borderRadius: '1rem', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)', border: '1px solid rgba(255, 255, 255, 0.2)', animation: 'fade-in-up 0.6s ease-out forwards', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <DocumentSearchIcon />
                    <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', color: 'white', marginTop: '1.5rem' }}>Results Pending</h2>
                </div>
            )}
        </div>
    );
};


// --- Main App Component ---
export default function Results() {
    
    const styles = {
        container: {
            minHeight: '100vh',
            backgroundColor: '#111827',
            fontFamily: 'sans-serif',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
            position: 'relative',
            overflow: 'hidden',
        },
        animatedBg: {
            position: 'absolute',
            inset: 0,
            backgroundImage: 'linear-gradient(to bottom right, #7C2D12, #111827, #92400E)',
            animation: 'gradient-xy 15s ease infinite',
        },
        patternBg: {
            position: 'absolute',
            inset: 0,
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.04'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        },
        mainContent: {
            width: '100%',
            position: 'relative',
            zIndex: 10,
            marginTop: '5rem', // Added top margin for better spacing
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.animatedBg}></div>
            <div style={styles.patternBg}></div>
            
            <style>{`
                @keyframes gradient-xy {
                    0%, 100% {
                        background-size: 400% 400%;
                        background-position: 0% 50%;
                    }
                    50% {
                        background-size: 400% 400%;
                        background-position: 100% 50%;
                    }
                }
                @keyframes fade-in {
                    from { opacity: 0; transform: translateY(-10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes fade-in-up {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
            
                        <main style={styles.mainContent}>
                <TestSelection tests={testData} />
            </main>
        </div>
    );
}
