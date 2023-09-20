###What is version control?
VA version control system (VCS) tracks changes to a file or set of files over time. The most common type is a centralized VCS, which uses a server to store all the versions of a file.
Developers can check out a file from the server, make changes, and check the file back in. The server then stores the new version of the file.
With version control, every change made to the code base is tracked.
This allows software developers to see the entire history of who changed what at any given time —
and roll back from the current version to an earlier version if they need to. It also creates a single source of truth.
Version control (or source control or revision control) serves as a safety net to protect the source code from irreparable harm, giving the development team the freedom to 
experiment without fear of causing damage or creating code conflicts.
If developers code concurrently and create incompatible changes, version control identifies the problem areas so that team members can quickly revert changes to a previous version,
compare changes, or identify who committed the problem code through the revision history. With a version control system (VCS),
a software team can solve an issue before progressing further into a project. Through code reviews, software teams can analyze earlier versions to understand the changes made to the code
over time.
Depending on a team's specific needs and development process, a VCS can be local, centralized, or distributed. A local VCS stores source files within a local system,
a centralized VCS stores changes in a single server, and a distributed VCS involves cloning a Git repository

###What is Git?
Git is a version control system used for tracking changes in computer files. It is generally used for source code management in software development.
*Git is used to tracking changes in the source code
*The distributed version control tool is used for source code management
*It allows multiple developers to work together
*It supports non-linear development through its thousands of parallel branches
Git is a modern and widely used distributed version control system in the world. It is developed to manage projects with high speed and efficiency.
The version control system allows us to monitor and work together with our team members at the same workspace.


###why GitHub works only with git ?!
GitHub works only with Git because Git is a widely adopted and powerful version control system that provides robust features for managing code repositories.
GitHub was built specifically to cater to Git users and to provide a platform for hosting and collaborating on Git repositories.

There are several reasons why GitHub works exclusively with Git:

Popularity and Adoption: Git has gained significant popularity in the software development community due to its speed, scalability, and flexibility.
It has become the de facto standard for version control in the industry, with a large user base and extensive tooling support. By focusing solely on Git,
GitHub can provide a platform that caters to a vast community of Git users.

Compatibility and Interoperability: Git is a distributed version control system, and it has specific protocols and data structures for managing repositories and tracking changes.
By working exclusively with Git, GitHub can ensure compatibility and interoperability between different Git clients and tools. This allows developers to seamlessly collaborate and
integrate their workflows using the Git ecosystem.

Feature Integration: GitHub has built its platform around Git, incorporating additional features and services on top of Git's core functionality. These features include pull requests,
code reviews, issue tracking, project management, and team collaboration tools.
By tightly integrating these features with Git, GitHub provides a comprehensive and streamlined experience for developers,
making it easier to manage and collaborate on code repositories.

Ecosystem and Integrations: Git has a rich ecosystem of third-party tools, plugins, and services that extend its functionality. By focusing exclusively on Git, GitHub can leverage this
ecosystem to provide integrations with various developer tools and services.
This allows developers to connect their Git repositories with Continuous Integration/Continuous Deployment (CI/CD) systems, code analysis tools, project management platforms, and more.

While GitHub primarily supports Git, it also provides limited support for other version control systems such as Mercurial.
However, Git remains the core and dominant version control system on the GitHub platform due to its wide adoption and strong community support.

###add git to the project:
To add Git to the project we use some git commands in the terminal or command prompt in the project's directory.

###Main vs branches:

**Main Branch (Default Branch):

The main branch is the default branch in a Git repository. It is commonly named "master," "main," or "develop," depending on the naming convention used.
The main branch represents the stable and production-ready state of the project. It typically contains the most up-to-date and tested code.
The main branch is where you would expect to find the latest release versions of your project.

**Branches:

Branches are independent lines of development that stem from a specific commit in the Git history.
They allow you to work on multiple features, bug fixes, or experiments simultaneously without interfering with the main branch.
Each branch has its own copy of the project's files and commit history.
Changes made within a branch do not affect other branches until they are merged back into the main branch or another branch.
Branches are useful for isolating work, promoting collaboration, and enabling parallel development.
They provide a way to work on new features or experimental changes without impacting the stability of the main branch.
When you create a new branch, it starts from a specific commit (often the latest commit on the main branch) and contains all the changes up to that commit.
From there, you can make new commits and further modify the code.
Branches can be merged back into the main branch or other branches once the changes are complete and tested.
This combines the changes and updates the target branch with the new commits.





