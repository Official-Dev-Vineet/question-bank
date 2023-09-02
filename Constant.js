export const questionBankOfReact = [
  {
    question: "Which of the following is the correct name of React.js?",
    answer: "All of the above",
    option: ["React", "React.js", "ReactJS", "All of the above"],
    explanation:
      "D is the correct option. React.js is a free, open-source front-end JavaScript library used for building user interfaces or UI components. It is also known as React or ReactJS.",
  },
  {
    question: "Which of the following are the advantages of React.js?",
    answer: "All of the above",
    option: [
      "React.js can increase the application's performance with Virtual DOM.",
      "React.js is easy to integrate with other frameworks such as Angular, BackboneJS since it is only a view library.",
      "React.js can render both on client and server side.",
      "All of the above",
    ],
    explanation:
      "D is the correct option as all of the above statements are the advantages of React.js.",
  },
  {
    question: "Which of the following is not a disadvantage of React.js?",
    answer: "The JSX in React.js makes code easy to read and write.",
    option: [
      "React.js has only a view layer. We have put your code for Ajax requests, events and so on.",
      "The library of React.js is pretty large.",
      "The JSX in React.js makes code easy to read and write.",
      "The learning curve can be steep in React.js.",
    ],
    explanation:
      "C is the correct answer. 'The JSX in React.js makes code easy to read and write' is an advantage of React.js.",
  },
  {
    question:
      " Which of the following command is used to install create-react-app?",
    answer: "npm install -g create-react-app",
    option: [
      "npm install -g create-react-app",
      "npm install create-react-app",
      "npm install -f create-react-app",
      "install -g create-react-app",
    ],
    explanation:
      "A is the correct answer. The 'npm install -g create-react-app' command is used to install the create-react-app.",
  },
  {
    question:
      "What of the following is used in React.js to increase performance?",
    answer: "Virtual DOM",
    option: [
      "Original DOM",
      "Virtual DOM",
      "Both A and B.",
      "None of the above.",
    ],
    explanation:
      "B is the correct answer. Virtual DOM is used in React.js to increase performance.",
  },
  {
    question:
      "A class is a type of function, but instead of using the keyword function to initiate it, which keyword do we use?",
    answer: "Class",
    option: ["Constructor", "Class", "Object", "DataObject"],
    explanation:
      "B is the correct answer. A class is a type of function, but instead of using the keyword function to initiate it, we use the keyword class.",
  },
  {
    question:
      "Which of the following acts as the input of a class-based component?",
    answer: "props",
    option: ["Class", "Factory", "Render", "Props"],
    explanation: "D 'props' is the correct answer.",
  },
  {
    question:
      "Which of the following keyword is used to create a class inheritance?",
    answer: "Extends",
    option: ["Create", "Inherits", "Extends", "This"],
    explanation: "C 'Extends' is the correct answer.",
  },
  {
    question: " What would be the output of the following example?",
    code: `var Helloworld=(props)=>  
    {  
     return(  
     <div>  
     Hello World 1  
     </div>  
     <div>  
     Hello World 2  
     </div>  
     );  
    }  
    ReactDOM.render(<Helloworld/>,mountNode)`,
    answer: "Error",
    option: [
      "Hello World 1",
      "Hello World 2",
      "Hello World 1 Hello World 2",
      "Error",
    ],
    explanation:
      "D is the correct option. The two adjacent elements in JSX should be wrapped in an element so, this program will result an error.",
  },
  {
    question: "What is the default port where webpack-server runs?",
    answer: "8080",
    option: ["3000", "8080", "3030", "6060"],
    explanation:
      "B is the correct answer. The default port for webpack-server is 8080.",
  },
  {
    question:
      "How many numbers of elements a valid react component can return?",
    answer: "1",
    option: [1, 2, 4, 5],
    explanation:
      "A is the correct answer. In react component, we can return only one element.",
  },
  {
    question:
      "What is the declarative way to render a dynamic list of components based on values in an array?",
    answer: "Using the Array.map() method",
    option: [
      "Using the reduce array method",
      "Using the <Each /> component",
      "Using the Array.map() method",
      "With a for/while loop",
    ],
    explanation:
      "C is the correct option. The Array.map() method is used to render a dynamic list of components based on values in an array.",
  },
  {
    question: "How many ways of defining your variables in ES6?",
    answer: "3",
    option: [1, 3, 4, 5],
    explanation:
      "B is the correct option. In ES6, there are three ways of defining your variables: var, let, and const.",
  },
  {
    question: "What is a state in React?",
    answer: "Internal storage of the component.",
    option: [
      "A permanent storage.",
      "Internal storage of the component.",
      "External storage of the component.",
      "None of the above.",
    ],
    explanation: "B is the correct answer.",
  },
  {
    question: "What are the two ways to handle data in React?",
    answer: "State & Props",
    option: [
      "State & Props",
      "Services & Components",
      "State & Services",
      "State & Component",
    ],
    explanation: "A 'State & Props' is the correct answer.",
  },
  {
    question:
      "In which of the following directory React.js components are saved?",
    answer: "Inside the js/components/",
    option: [
      "Inside the js/components/",
      "Inside the vendor/components/",
      "Inside the external/components/",
      "Inside the vendor/",
    ],
    explanation: `A is the correct option. The React.js components are saved in "Inside the js/components/."`,
  },
  {
    question:
      "Which of the following is a must API for every React.js component?",
    answer: "renderComponent",
    option: [
      "SetinitialComponent",
      "renderComponent",
      "render",
      "All of the above",
    ],
    explanation:
      "B is the correct option. The renderComponent is a must API for every React.js component.",
  },
  {
    question:
      "Which of the following option is correct in the case of the Babel?",
    answer: "Both A and B are correct.",
    option: [
      "Babel is a Compiler.",
      "Babel is a Transpiler.",
      "None of the above.",
      "Both A and B are correct.",
    ],
    explanation:
      "D is the correct option as both of the above statements are correct.",
  },
  {
    question: "Does React.js create a VIRTUAL DOM in the memory?",
    answer: "TRUE",
    option: ["TRUE", "FALSE", "Can be true or false", "Cannot say"],
    explanation:
      "A is the correct option as React.js creates a VIRTUAL DOM in the memory.",
  },
  {
    question: `What is the use of "webpack" command in React.js?`,
    answer: "It is a module bundler.",
    option: [
      `The "webpack" command is used to transpile all the JavaScript down into one file.`,
      "It runs React local development server.",
      "It is a module bundler.",
      "None of the above.",
    ],
    explanation: `C is the correct answer. The "webpack" command is a module bundler.`,
  },
];
export const questionBankOfGithub = [
  {
    question: "Who is attributed with inventing GIT?",
    answer: "Linus Torvalds",
    option: [
      "Junio C. Hamano",
      "James Gosling",
      "Koska Kawaguchi",
      "Linus Torvalds",
    ],
    explanation:
      "Linus Torvalds is attributed with inventing GIT. He is a Finnish-American software engineer who created the distributed version control system in 2005. GIT was developed to manage the Linux kernel development, and it has since become widely used in the software development industry. Torvalds' invention of GIT revolutionized the way developers collaborate and track changes in their code, making it easier to manage large-scale projects with multiple contributors.",
  },
  {
    question: "Which of these terms best describes GitHub?",
    answer: "Web-Based Repository Hosting Service",
    option: [
      "Integrated Development Environment",
      "Distributed Version Control System",
      "Issue Tracking System",
      "Web-Based Repository Hosting Service",
    ],
    explanation:
      "GitHub is a web-based repository hosting service that allows users to store and manage their code repositories. It provides a platform for developers to collaborate on projects, track changes, and manage versions of their code using a distributed version control system. While it also offers features like issue tracking and integration with various development tools, the primary function of GitHub is to host and provide access to code repositories over the internet.",
  },
  {
    question: "What is the opposite of a GIT clone?",
    answer: "GIT push",
    option: ["GIT push", "GIT add", "GIT upload", "GIT status"],
    explanation:
      "The opposite of a GIT clone is a GIT push. A GIT clone is used to create a local copy of a repository from a remote source, while a GIT push is used to upload the local changes to the remote repository. So, while a clone brings the repository to the local machine, a push sends the local changes back to the remote repository.",
  },
  {
    question:
      "What command do you run to view the commit history of your repository?",
    answer: "GIT log",
    option: ["GIT history", "GIT log", "GIT commit -h", "GIT past"],
    explanation: `To view the commit history of a repository, you would run the command "GIT log". This command will display a list of all the commits made in the repository, including the commit message, author, date, and unique commit hash. It provides a chronological view of all the changes and updates made to the repository over time.`,
  },
  {
    question:
      "How do you check the state of your local git repository since your last commit?",
    answer: "GIT status",
    option: ["GIT check", "GIT status", "GIT commit", "GIT diff"],
    explanation: `To check the state of your local git repository since your last commit, you can use the "GIT status" command. This command provides information about any changes made to the repository, such as modified files or untracked files. It allows you to see the current status of your repository and helps you keep track of your changes before committing them.`,
  },
  {
    question: "What's a shortcut to staging all the changes you have?",
    answer: "GIT add",
    option: ["GIT commit add", "GIT commit", "GIT add", "GIT stage -a"],
    explanation: `The correct answer is "GIT add". This command is used to stage all the changes you have made in your local repository. It allows you to prepare the changes for the next commit. By using "GIT add", you are indicating to Git which files or changes you want to include in the next commit. This is an essential step in the Git workflow as it helps in organizing and tracking changes effectively.`,
  },
  {
    question: "How do you supply a commit message to a commit?",
    answer: `GIT commit -m "I'm coding!"`,
    option: [
      `GIT message "I'm coding!"`,
      `GIT add "I'm coding!"`,
      `GIT commit "I'm coding!"`,
      `GIT commit -m "I'm coding!"`,
    ],
    explanation: `To supply a commit message to a commit in GIT, the correct way is to use the command "GIT commit -m "I'm coding!". This command allows the user to add a specific message to the commit, in this case, "I'm coding!". The "-m" flag is used to specify that the following text should be treated as the commit message. This helps in providing a clear and concise description of the changes made in the commit.`,
  },
  {
    question: `What's the git command that downloads your repository from GitHub to your computer?`,
    answer: "GIT clone",
    option: ["GIT push", "GIT fork", "GIT clone", "GIT commit"],
    explanation:
      "The correct answer is GIT clone. This command is used to download a copy of a repository from GitHub to your local computer. It creates a new directory on your computer with the same name as the repository and copies all the files and commit history from the remote repository to your local machine. This allows you to work on the project locally and make changes before pushing them back to the remote repository.",
  },
  {
    question: "Which is the correct usage of the push command?",
    answer: "GIT push <remote> <branch>",
    option: [
      "GIT push <remote> <branch>",
      "GIT push <branch> <remote>",
      "Both correct",
      "None of them",
    ],
    explanation: `The correct usage of the push command is "GIT push ". This command is used to push the local branch to the specified remote repository. By specifying the remote and branch in this order, the changes made in the local branch will be pushed to the corresponding branch in the remote repository.`,
  },
  {
    question:
      "Which is the correct order to submit your changes from the working directory all the way to the remote repository?",
    answer: "GIT add, git commit, git push",
    option: [
      "GIT add, git commit, git push",
      "GIT add, git push, git commit",
      "GIT commit, git add, git push",
      "GIT push, git add, git commit",
    ],
    explanation: `The correct order to submit changes from the working directory all the way to the remote repository is to first use "git add" to stage the changes, then use "git commit" to commit the changes to the local repository, and finally use "git push" to push the committed changes to the remote repository. This order ensures that the changes are properly staged, committed, and then pushed to the remote repository for others to access and view.`,
  },
  {
    question: "Which of these terms best describes git?",
    answer: "Distributed Version Control System",
    option: [
      "Integrated Development Environment",
      "Distributed Version Control System",
      "Issue Tracking System",
      "Web-Based Repository Hosting Service ",
    ],
    explanation:
      "Git is a distributed version control system, which means it allows multiple users to collaborate on a project by tracking and managing changes to the source code. Unlike centralized version control systems, Git does not rely on a central server, allowing each user to have their own copy of the entire project history. This enables users to work offline and merge their changes with others seamlessly. Git also provides features like branching and merging, making it a powerful tool for software development teams.",
  },
  {
    question: "Which of the following commands show changes between commits?",
    answer: "GIT diff",
    option: ["GIT commit", "GIT reset", "GIT diff", "GIT show"],
    explanation: `The correct answer is "GIT diff". The "GIT diff" command is used to show the changes between commits. It compares the differences in the content of files between two commit snapshots and displays the added, modified, or deleted lines. This command is commonly used to review changes before committing them or to compare different versions of a file.`,
  },
  {
    question:
      "Which of the following commands join two or more development histories together?",
    answer: "GIT merge",
    option: ["GIT merge", "GIT concat", "GIT join", "GIT branch"],
    explanation:
      "The correct answer is GIT merge. The merge command in Git is used to combine two or more development histories together. It allows changes from one branch to be integrated into another branch, effectively joining the development histories of those branches. This is commonly used when working with feature branches or when incorporating changes from multiple contributors into a main branch.",
  },
  {
    question:
      "Which of the following commands is used in switching between branches?",
    answer: "GIT checkout",
    option: ["GIT branch", "GIT checkout", "GIT switch", "GIT merge"],
    explanation: `The command "GIT checkout" is used in switching between branches in Git. When we use this command followed by the name of the branch we want to switch to, Git updates the files in our working directory to match the version of the files in that branch. This allows us to easily move between different branches and work on different features or bug fixes.`,
  },
  {
    question:
      "Which of the following commands is used to reset the current HEAD to the specified state?",
    answer: "GIT reset",
    option: ["GIT reset", "GIT restore", "GIT checkout", "GIT diff"],
    explanation:
      "GIT reset command is used to reset the current HEAD to the specified state. This command allows the user to move the HEAD and the branch pointer to a different commit, effectively undoing the changes made after that commit. It can be used to unstage files or to completely remove commits from the branch history.",
  },
];
export const questionBankOfUiUx = [
  {
    question: "Which of the following are examples of UI?",
    answer: "All of the above",
    option: [
      "Key (for opening door)",
      "TV Remote",
      "Button (in an app)",
      "All of the above",
    ],
    explanation:
      "All of the options provided are examples of UI (User Interface). A UI is the means through which a user interacts with a system or device. The key for opening a door, the TV remote, and a button in an app are all interfaces that allow users to perform actions and control the respective systems. Therefore, all of the options listed can be considered examples of UI.",
  },
  {
    question: "What are some good examples of UX?",
    answer: "All of the above",
    option: ["Duolingo", "PayPal", "MailChimp", "All of the above"],
    explanation:
      "All of the mentioned examples - Duolingo, Paypal, and MailChimp - are considered good examples of User Experience (UX). These platforms have been designed with a focus on providing a seamless and user-friendly experience to their users. Duolingo offers a gamified language learning experience, making it engaging and enjoyable. Paypal provides a secure and convenient payment experience for users. MailChimp offers a user-friendly interface for managing email marketing campaigns. Therefore, all of these examples exemplify good UX practices.",
  },
  {
    question: "Which is the correct sequence of Design Thinking?",
    answer: "Research -> Analysis -> Define -> Design -> Test",
    option: [
      "Research -> Analysis -> Define -> Design -> Test",
      "Define -> Research -> Analysis -> Design -> Test",
      "Define -> Research -> Design -> Test  -> Analysis",
      "Design -> Test  -> Analysis -> Define -> Research",
    ],
    explanation:
      "The correct sequence of Design Thinking is to first conduct research to gather information and insights, then analyze the findings to identify patterns and opportunities. After that, the next step is to define the problem or challenge based on the analysis. Once the problem is defined, the design phase begins where potential solutions are created. Finally, the solutions are tested to gather feedback and iterate on the design if necessary.",
  },
  {
    question: "Which is the right definition for UX Laws?",
    answer:
      "Millers Law - Chunking into blocks of 5-9 units Jakob's Law - Create UX similar to existing ones Fitt's Law - Experience is inversely proportional to Long Distance & Small Button Size",
    option: [
      "Millers Law - Create UX similar to existing ones Jakob's Law - Chunking into blocks of 5-9 units Fitt's Law - Experience is inversely proportional to Long Distance & Small Button Size",
      "Millers Law - Create UX similar to existing ones Jakob's Law - Experience is inversely proportional to Long Distance & Small Button Size Fitt's Law - Chunking into blocks of 5-9 units",
      "Millers Law - Create UX similar to existing ones Jakob's Law - Experience is inversely proportional to Long Distance & Small Button Size Fitt's Law - Chunking into blocks of 5-9 units",
      "Millers Law - Chunking into blocks of 5-9 units Jakob's Law - Create UX similar to existing ones Fitt's Law - Experience is inversely proportional to Long Distance & Small Button Size",
    ],
    explanation:
      "The correct answer is Millers Law - Chunking into blocks of 5-9 units, Jakob's Law - Create UX similar to existing ones, Fitt's Law - Experience is inversely proportional to Long Distance & Small Button Size. Millers Law refers to the concept of breaking information into smaller chunks to improve memory and comprehension. Jakob's Law suggests that users prefer interfaces that are familiar and similar to ones they have already used. Fitt's Law states that the time required to move to a target is a function of the distance to the target and the size of the target.",
  },
  {
    question: "Which is the right example for Contextual UX?",
    answer: "All of the above",
    option: [
      "Personalization",
      "Google maps turning dark at nights",
      "Playing songs suitable to mood of the day",
      "All of the above",
    ],
    explanation:
      "Contextual UX refers to designing user experiences that are tailored to the specific context or situation in which they are being used. Personalization, Google maps turning dark at nights, and playing songs suitable to the mood of the day are all examples of contextual UX. Personalization involves customizing the user experience based on individual preferences and needs. Google maps turning dark at nights is an example of adapting the interface to the time of day, providing a more suitable and comfortable experience for users in low-light conditions. Playing songs suitable to the mood of the day is another example of tailoring the user experience to the current context, enhancing the overall user satisfaction.",
  },
  {
    question: "Which of the following is true?",
    answer: "Both A and B",
    option: [
      "Wireframe - Paper & Pen sketch  Mockups - Model with colors and visual UX Prototype - Interactive model",
      "Wireframe - Basic design of the product Mockups - Intermediary design of the product Prototype - Advanced design of the product",
      "Both A and B",
      "None of the above",
    ],
    explanation:
      "A wireframe is a basic design of the product that is usually created using paper and pen sketches. Mockups, on the other hand, are more detailed and visually appealing models of the product that include colors and visual UX elements. Prototypes are interactive models that allow users to interact with the product. Therefore, the given answer correctly matches wireframe with paper and pen sketch, mockups with a model with colors and visual UX, and prototype with an interactive model.",
  },
  {
    question: "What is usability?",
    answer: "Both A and B",
    option: [
      "Quality attribute that measures how easy user interfaces are to use.",
      "Methods for improving ease-of-use during the design process.",
      "Both A and B",
      "None of the above",
    ],
    explanation: `The correct answer is "Both A and B". Usability refers to the quality attribute that measures how easy user interfaces are to use. It also includes methods for improving ease-of-use during the design process. Both aspects are important in ensuring that a product or system is user-friendly and meets the needs of its users.`,
  },
  {
    question: "How many websites fail at UX?",
    answer: "97%",
    option: ["97%", "25%", "12%", "56%"],
    explanation:
      "The answer is 97% because it is the highest percentage among the given options. This suggests that a significant majority of websites fail at UX (User Experience). This could mean that these websites do not provide a user-friendly interface, have confusing navigation, or lack proper design elements that enhance the overall user experience.",
  },
  {
    question: "Which company created Bootstrap UI framework?",
    answer: "Twitter",
    option: ["Twitter", "Google", "Apple", "Microsoft"],
    explanation: "Twitter created the Bootstrap UI framework.",
  },
  {
    question: `The term "User Experience" was coined by whom?`,
    answer: "Don Norman",
    option: ["Don Norman", "Steve Jobs", "Steve Wozniak", "Bill Gates"],
    explanation: `Don Norman is credited with coining the term "User Experience." He is a renowned cognitive scientist and usability engineer who popularized the concept of user-centered design. Norman's book, "The Design of Everyday Things," published in 1988, introduced the term and emphasized the importance of designing products and systems that are intuitive, easy to use, and provide a positive user experience. His work has had a significant impact on the field of human-computer interaction and has shaped the way designers approach the creation of user-friendly products and interfaces.`,
  },
];
export const questionBankOfLinux = [
  {
    question: "Who founded Linux Kernel?",
    answer: "Linus Torvalds",
    option: [
      "Ken Thompson and Dennis Ritchie",
      "Linus Torvalds",
      "Linus Torvalds and Ken Thompson",
      "Richard Stallman",
    ],
    explanation: "Linus Torvalds founded Linux Kernel.",
  },
  {
    question: "What is the core of the Linux operating system?",
    answer: "Kernel",
    option: ["Vi Editor", "Command Line", "Terminal", "Kernel"],
    explanation: "Kernel is the core of the Linux operating system.",
  },
  {
    question:
      "Which is/are the directories that come under the Binary directory?",
    answer: "All of the above",
    option: ["/bin", "sbin", "/lib", "/opt", "All of the above"],
    explanation: `Binary directory contains following directories: 
     i.   /bin
     ii.  /sbin
     iii. /lib
     iv.  /opt`,
  },
  {
    question: "The directory is a type of file?",
    answer: "Yes",
    option: ["Yes", "No"],
    explanation: `The directory is a type of file.`,
  },
  {
    question: "Which symbol represents the top-level directory?",
    answer: "/",
    option: ["@", "/", "#", "~"],
    explanation: `The symbol "/" represents the top-level directory.`,
  },
  {
    question: "Which symbol represents the user's home directory?",
    answer: "~",
    option: ["~", "/", "#", "@"],
    explanation: `The symbol "~" represents the user's home directory.`,
  },
  {
    question:
      "Which Linux command is used to count the total number of lines, words, and characters contained in a file?",
    answer: "wc",
    option: ["count", "wc", "wcount", "countw"],
    explanation: `The "wc" command is used to count the number of lines, words, characters, and bytes of each given file or standard input and print the result.`,
  },
  {
    question: "Which Linux command is used to remove files?",
    answer: "rm",
    option: ["rm", "delete", "del", "remove"],
    explanation: `The "rm" command is used to remove files in Linux.`,
  },
  {
    question:
      "Which Linux command with vi Editor is used to delete a single character?",
    answer: "x",
    option: ["x", "d", "r", "c"],
    explanation: `The command "x" is used to delete a single character in vi Editor.`,
  },
  {
    question: "Which Linux command is used to know which directory you are in?",
    answer: "pwd",
    option: ["know", "ls", "pwd", "cwd"],
    explanation: `To know which directory you are in, the "pwd" command can be used. The "pwd" command stands for "Present Working Directory". This command gives us the absolute path, which means the path that starts from the root.`,
  },
  {
    question: "Which Linux command is used to see all the hidden files?",
    answer: "ls -a",
    option: ["ls -a", "ls", "ls -h", "dir -a"],
    explanation: `The "ls -a" command is used to see all the hidden files.`,
  },
  {
    question: "Which Linux command is used to give a full listing?",
    answer: "ls -F",
    option: ["ls -F", "ls -a", "ls -h", "dir -a"],
    explanation: `The "ls -F" command is used to see a full listing, indicating what type files are by putting a slash after directories and a star after executable files.`,
  },
  {
    question:
      "Which Linux command is used to go back from a folder to the folder before that?",
    answer: "cd ..",
    option: ["cd ..", "cd -", "cd /", "chdir"],
    explanation: `To go back from a folder to the folder before that, we can use the Linux command "cd .." . Here, the two dots (..) represent back.`,
  },
  {
    question:
      "If you want to create a new directory named XYZ, which command will be used for this purpose?",
    answer: "mkdir XYZ",
    option: ["cd XYZ", "chdir XYZ", "mkdir XYZ", "md XYZ"],
    explanation: `To create a new directory named XYZ, we can use "mkdir XYZ". The "mkdir" command is used to make a directory in Linux.`,
  },
  {
    question: "Which Linux command is used to create a new file?",
    answer: "touch",
    option: ["touch", "tch", "file", "create"],
    explanation: "The touch command is used to create a new file.",
  },
  {
    question:
      "Which Linux command is used to copy files through the command line?",
    answer: "cp",
    option: ["cp", "copy", "copyfile", "fcp"],
    explanation:
      "The cp command is used to copy files through the command line.",
  },
  {
    question:
      "Which Linux command is used to move files through the command line?",
    answer: "mv",
    option: ["mv", "move", "loc", "ren"],
    explanation:
      "The mv command is used to move files through the command line.",
  },
  {
    question: `Which is the correct command syntax to rename a file "abc.txt" to "pqr.txt"?`,
    answer: "mv abc.txt pqr.txt",
    option: [
      "mv abc.txt pqr.txt",
      "mv pqr.txt abc.txt",
      "mv -a pqr.txt abc.txt",
      "mv -all pqr.txt abc.txt",
    ],
    explanation: `The correct command syntax to rename a file "abc.txt" to "pqr.txt" is "mv abc.txt pqr.txt".`,
  },
  {
    question:
      "Just like the Windows Search command, which command is used in Linux?",
    answer: "locate",
    option: ["locate", "search", "find", "where"],
    explanation: `In Linux, the "locate" command is used to locate/search a file, just like the search command in Windows.`,
  },
  {
    question:
      "Which argument with locate command helps us to ignore the case while searching the file in the Linux system?",
    answer: "-i",
    option: ["-c", "-i", "-a", "-x"],
    explanation: `To ignore the case while searching the file in the Linux system we can use the argument "-i" with the "locate" command.`,
  },
  {
    question: `Which is the correct command syntax to locate a file containing the words "hello" and "this"?`,
    answer: "locate -i *hello*this",
    option: [
      "locate -i *hello*this",
      "locate -i **hello**this**",
      "locate -i *this*hello*",
      "locate -i **hello**this",
    ],
    explanation: `The correct command syntax to locate a file containing the words "hello" and "this" is "locate -i *hello*this".`,
  },
  {
    question: "Which Linux command is used to display the content of a file?",
    answer: "cat",
    option: ["cat", "echo", "display", "show"],
    explanation: "The cat command is used to display the content of a file.",
  },
  {
    question:
      "If you want any command to be done with administrative or root privileges, you can use the ___ command.",
    answer: "sudo",
    option: ["sudo", "root", "administrator", "admin"],
    explanation:
      "The sudo command is used to do any command with administrative or root privileges.",
  },
  {
    question:
      "Which Linux command is used to see the available disk space in each of the partitions in your system?",
    answer: "df",
    option: ["df", "disk", "space", "avail"],
    explanation:
      "The df command is used to see the available disk space in each of the partitions in your system.",
  },
  {
    question: "The ___ command gives you your IP address in your network.",
    answer: "hostname -I",
    option: ["hostname -I", "ip", "host I", "hostname i"],
  },
];
