import React, { Component } from 'react';

class Course extends Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: false,
    };
  }

  handleLike = () => {
    this.setState({ liked: !this.state.liked });
  }

  render() {
    const { liked } = this.state;
    const { title, description } = this.props;

    return (
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        <button onClick={this.handleLike}>{liked ? 'Unlike' : 'Like'}</button>
      </div>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: [
        { 
            id: 1, 
            title: "Introduction to Programming", 
            description: "This course typically covers fundamental programming concepts and might use languages like Python or JavaScript as a starting point." 
        },
        { 
            id: 2, 
            title: "Programming with Python", 
            description: "Focuses on the Python programming language, often considered an excellent language for beginners." 
        },
        { 
            id: 3, 
            title: "Java Programming", 
            description: "Covers the Java programming language, widely used for web and mobile app development." 
        },
        { 
            id: 4, 
            title: "C++ Programming", 
            description: "Focuses on C++, a language commonly used in systems programming, game development, and more." 
        },
        { 
            id: 5, 
            title: "Web Development with HTML, CSS, and JavaScript", 
            description: "Teaches web development fundamentals using HTML, CSS, and JavaScript." 
        },
        { 
            id: 6, 
            title: "Data Science with Python", 
            description: "Focuses on using Python for data analysis, machine learning, and data visualization." 
        },
        { 
            id: 7, 
            title: "iOS App Development with Swift", 
            description: "Teaches how to create iOS apps using the Swift programming language." 
        },
        { 
            id: 8, 
            title: "Android App Development with Kotlin", 
            description: "Covers app development for Android using the Kotlin programming language." 
        },
        { 
            id: 9, 
            title: "Full-Stack Web Development", 
            description: "Provides comprehensive training in both front-end (HTML, CSS, JavaScript) and back-end (Node.js, Python, Ruby, etc.) web development." 
        },
        { 
            id: 10, 
            title: "Object-Oriented Programming (OOP)", 
            description: "Focuses on the principles of object-oriented programming, which can be applied to various programming languages." 
        },
        { 
            id: 11, 
            title: "Advanced Java Programming", 
            description: "Covers more advanced topics in Java, such as design patterns and multi-threading." 
        },
        { 
            id: 12, 
            title: "Software Development with C#", 
            description: "Teaches C# programming, often used for Windows application development." 
        },
        { 
            id: 13, 
            title: "Game Development with Unity", 
            description: "Covers game development using the Unity game engine and the C# programming language." 
        },
        { 
            id: 14, 
            title: "Ruby on Rails Web Development", 
            description: "Focuses on web development using the Ruby programming language and the Ruby on Rails framework." 
        },
        { 
            id: 15, 
            title: "Embedded Systems Programming", 
            description: "Focuses on programming microcontrollers and embedded systems using languages like C and C++." 
        },
        { 
            id: 16, 
            title: "Machine Learning and AI with Python", 
            description: "Teaches machine learning and artificial intelligence using Python and libraries like TensorFlow and scikit-learn." 
        },
        { 
            id: 17, 
            title: "Blockchain Development", 
            description: "Focuses on blockchain technology and often includes smart contract development using languages like Solidity." 
        },
        { 
            id: 18, 
            title: "Data Science with R", 
            description: "Explore data analysis, data visualization, and machine learning with the R programming language." 
        },
        { 
            id: 19, 
            title: "Web Development with JavaScript", 
            description: "Focuses on the engine that is used for building interactive aspects in the websites that broadens the functionality" 
        },
        { 
            id: 20, 
            title: "DevOps and Cloud Computing", 
            description: "DevOps is a software engineering practice that is suited to cloud computing. In a DevOps environment, developers collaborate with IT operations and other teams." 
        },





        // Add more courses
      ],
      likedCourses: [],
    };
  }

  render() {
    const { courses, likedCourses } = this.state;

    return (
      <div>
        <div>
          <h2>All Courses</h2>
          {courses.map((course) => (
            <Course key={course.id} {...course} />
          )
          )}
          
        </div>

        <div>
          <h2>Liked Courses</h2>
          {likedCourses.map((course) => (
            <Course key={course.id} {...course} />
          )
          )}
        </div>
      </div>
    );
  }
}

export default App;