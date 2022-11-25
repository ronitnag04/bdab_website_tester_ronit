import React from "react"
import { Helmet } from "react-helmet"
import ModuleContent from "../../../components/OnlineCourse/Modules/ModuleContent"
import Navbar from "../../../components/OnlineCourse/OCNavbar/OCNavbar"

const ModuleVideosLinks = {
  1:{'link':'https://www.youtube.com/embed/4EaZQM4_Dhw',
     'title':'Introduction to Python'},
  2:{'link':'https://www.youtube.com/embed/HBdtnuDWkKE',
     'title':'Data Types'},
  3:{'link':'https://www.youtube.com/embed/mlQzjHS8Q7E',
     'title':'Variables'},
  4:{'link':'https://www.youtube.com/embed/n3oTMSQmMN8',
     'title':'Lists & Arrays'},
  5:{'link':'https://www.youtube.com/embed/KI7O5cHr7zc',
     'title':'Functions'},
  6:{'link':'https://www.youtube.com/embed/9SJSYmXRhL0',
    'title':'For & While Loops'},
}

const ModuleCommonQuestions = [
  {'question':"How should you clean a dataset with null values?",
   'answer':"It depends on the situation! Sometimes, it is best to fill it with bound, such as 0 or float(‘inf’). Other times, it makes sense to fill in values with the average of other data. You can use the built-in pd.fillna() function for this!",
   'instructor-name':'Random Instructor'
  },
  {'question':"How should you clean a dataset with null values?",
   'answer':"It depends on the situation! Sometimes, it is best to fill it with bound, such as 0 or float(‘inf’). Other times, it makes sense to fill in values with the average of other data. You can use the built-in pd.fillna() function for this!",
   'instructor-name':'Random Instructor'
  },
  {'question':"How should you clean a dataset with null values?",
   'answer':"It depends on the situation! Sometimes, it is best to fill it with bound, such as 0 or float(‘inf’). Other times, it makes sense to fill in values with the average of other data. You can use the built-in pd.fillna() function for this!",
   'instructor-name':'Random Instructor'
  },
  {'question':"How should you clean a dataset with null values?",
  'answer':"It depends on the situation! Sometimes, it is best to fill it with bound, such as 0 or float(‘inf’). Other times, it makes sense to fill in values with the average of other data. You can use the built-in pd.fillna() function for this!",
  'instructor-name':'Random Instructor'
 },
 {'question':"How should you clean a dataset with null values?",
  'answer':"It depends on the situation! Sometimes, it is best to fill it with bound, such as 0 or float(‘inf’). Other times, it makes sense to fill in values with the average of other data. You can use the built-in pd.fillna() function for this!",
  'instructor-name':'Random Instructor'
 },
 {'question':"How should you clean a dataset with null values?",
 'answer':"It depends on the situation! Sometimes, it is best to fill it with bound, such as 0 or float(‘inf’). Other times, it makes sense to fill in values with the average of other data. You can use the built-in pd.fillna() function for this!",
 'instructor-name':'Random Instructor'
  },
  {'question':"How should you clean a dataset with null values?",
  'answer':"It depends on the situation! Sometimes, it is best to fill it with bound, such as 0 or float(‘inf’). Other times, it makes sense to fill in values with the average of other data. You can use the built-in pd.fillna() function for this!",
  'instructor-name':'Random Instructor'
  },
]

// Images must be in ../../../images/online_course/
const ModuleResources = [
  {'name': 'Deepnote Lesson',
   'icon': 'deepnote_button.png',
   'link': 'https://deepnote.com/workspace/big-data-at-berkeley-447a-f968b37c-a5f2-41e2-bcd6-76e997077bdf/project/Module-2-9e173e50-6ab0-48b5-99a8-70e6bd3491e7/notebook/M2%20Lesson%20Notebook-4bad20ec8db44534b7c25638921fc8ff'
  },
  {'name': 'Deepnote Assignment',
   'icon': 'deepnote_button.png',
   'link': 'https://deepnote.com/workspace/big-data-at-berkeley-447a-f968b37c-a5f2-41e2-bcd6-76e997077bdf/project/Module-2-9e173e50-6ab0-48b5-99a8-70e6bd3491e7/notebook/M2%20Assignment%20Notebook-b4cc8830c1ca473a84b731e12b7d4ee0'
  },
  {'name': 'Q&A Form',
   'icon': 'google_forms_button.png',
   'link': 'https://www.google.com'
  },
  {'name': 'Video Playlist',
   'icon': 'youtube_button.png',
   'link': 'https://www.google.com'
  },
  {'name': 'Presentation Slides',
   'icon': 'google_slides_button.png',
   'link': 'https://docs.google.com/presentation/d/1yW2RcJewoqPzFAsNyDyXKxUY3kiaP4m64z5uPxcLjFI/edit?usp=sharing'
  },
]

const Module2Page = () => (
  <>
    <Helmet>
      <title>Module 2 | Data Science Demystified</title>
      <meta charSet="utf-8" />
      <meta name="description" content="Module 2 of Data Science Demystified online course."/>
      <meta name="keywords" content="Big Data,Data Science,UC Berkeley,Berkeley,Consulting,Big Data at Berkeley,Big Data Bootcamp,Education,Organization,RSO,Berkeley Club,ASUC,Data Science Demystified,Online Course"/>
    </Helmet>
    <>
        <Navbar/>
        <ModuleContent
            label="2"
            title="Python & NumPy"
            module_videos_links={ModuleVideosLinks}
            module_common_questions={ModuleCommonQuestions}
            module_resources={ModuleResources}
            currentPage={2}
        />
    </>
  </>
)

export default Module2Page
