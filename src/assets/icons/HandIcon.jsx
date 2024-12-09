// src/components/HandIcon.js
import React from 'react';

const HandIcon = ({ className = 'w-6 h-6', color = '#000000' }) => {
  return (
    <svg fill={color} className={className} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g transform="translate(1 1)"> <g> <g> <path d="M506.854,33.133c0-3.399-1.511-6.038-4.02-7.434l-24.14-24.14c-3.413-3.413-8.533-3.413-11.947,0 c-3.413,3.413-3.413,8.533,0,11.947L477.84,24.6h-78.507l11.093-11.093c3.413-3.413,3.413-8.533,0-11.947 c-3.413-3.413-8.533-3.413-11.947,0l-24.14,24.14c-2.507,1.394-4.017,4.03-4.02,7.426c0,0.005,0,0.01,0,0.015 c0.002,3.396,1.512,6.032,4.02,7.426l24.14,24.14c1.707,1.707,3.413,2.56,5.973,2.56s4.267-0.853,5.973-2.56 c3.413-3.413,3.413-8.533,0-11.947l-11.093-11.093h78.507L466.747,52.76c-3.413,3.413-3.413,8.533,0,11.947 c1.707,1.707,3.413,2.56,5.973,2.56c2.56,0,4.267-0.853,5.973-2.56l24.14-24.14C505.343,39.172,506.854,36.532,506.854,33.133z"></path> <path d="M370.321,178.2c-9.387,0-18.773,3.413-25.6,8.533V178.2c0-23.893-18.773-42.667-42.667-42.667 c-9.387,0-18.773,3.413-25.6,8.533c0-23.893-18.773-42.667-42.667-42.667c-9.387,0-18.773,3.413-25.6,8.533V41.667 C208.187,17.773,189.414-1,165.521-1c-23.893,0-42.667,18.773-42.667,42.667v193.707c-18.773-32.427-62.293-48.64-95.573-36.693 c-4.267,0.853-7.68,3.413-11.947,5.973c-12.8,8.533-11.947,19.627-11.947,23.04c-0.853,5.12,0,5.973,11.947,19.627 c14.507,17.067,46.08,52.907,65.707,88.747c1.707,1.707,24.747,39.253,50.347,67.413v22.187c0,46.933,38.4,85.333,85.333,85.333 h85.333c36.693,0,75.093-30.72,83.627-66.56c2.56-10.24,5.12-17.92,8.533-21.333c8.533-10.24,18.773-34.133,18.773-65.707 V220.867C412.987,196.973,394.214,178.2,370.321,178.2z M302.907,493.933h-85.333c-37.547,0-68.267-30.72-68.267-68.267v-7.726 c1.67,1.209,3.366,2.363,5.12,3.459c5.12,4.267,9.387,6.827,14.507,11.093c1.707,0.853,3.413,1.707,5.12,1.707 c2.56,0,5.12-0.853,5.973-3.413c3.413-3.413,2.56-8.533-0.853-11.947c-5.12-5.12-10.24-8.533-15.36-11.947 c-5.914-4.224-11.828-8.451-17.742-13.504c-25.358-26.455-49.672-65.856-49.672-65.856 c-20.48-36.693-52.907-73.387-68.267-91.307c-2.56-3.413-5.973-7.68-7.68-9.387c0-2.56,0-4.267,5.973-7.68 c3.413-1.707,5.973-3.413,8.533-4.267c22.187-7.68,58.88,2.56,75.093,30.72l13.191,19.786c0.109,0.523,0.26,1.041,0.462,1.547 l8.533,17.067c1.707,3.413,4.267,5.12,7.68,5.12c1.707,0,2.56,0,3.413-1.707c3.413-1.707,5.12-6.827,3.413-11.093l-6.02-12.039 c0.028-0.253,0.046-0.507,0.046-0.761V41.667c0-14.507,11.093-25.6,25.6-25.6c14.507,0,25.6,11.093,25.6,25.6v132.499 c-0.55,1.169-0.853,2.525-0.853,4.035v102.4c0,5.12,3.413,8.533,8.533,8.533s8.533-3.413,8.533-8.533v-98.365 c0.55-1.169,0.853-2.525,0.853-4.035v-34.133c0-14.507,11.093-25.6,25.6-25.6c14.507,0,25.6,11.093,25.6,25.6V178.2v93.867 c0,5.12,3.413,8.533,8.533,8.533s8.533-3.413,8.533-8.533V178.2c0-14.507,11.093-25.6,25.6-25.6c14.507,0,25.6,11.093,25.6,25.6 v42.667V280.6c0,5.12,3.413,8.533,8.533,8.533s8.533-3.413,8.533-8.533v-59.733c0-14.507,11.093-25.6,25.6-25.6 c14.507,0,25.6,11.093,25.6,25.6V357.4c0,15.874-3.067,28.674-6.682,37.998c-0.772,0.84-1.403,1.84-1.852,2.962 c-3.413,11.093-13.653,13.653-32.427,18.773l-5.12,0.853c-4.267,0.853-6.827,5.973-5.973,10.24 c1.707,3.413,5.12,5.973,8.533,5.973c0.853,0,1.707,0,2.56,0h4.267c3.922-1.07,7.842-2.104,11.655-3.254 c-0.856,2.893-1.618,5.977-2.268,9.228C363.494,469.187,331.921,493.933,302.907,493.933z"></path> </g> </g> </g> </g></svg>
  );
};

export default HandIcon;