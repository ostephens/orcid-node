This is a Simple nodejs app for searching for ORCiDs by Ringgold ID for US and UK HE institutions. 

This application is part of a suite of [experimental tools](https://github.com/adammoore/corda/wiki) to investigate ORCID iD engagement and usage within institutions.
In its current form **_it has a number of issues and limitations_** – please consider them carefully and use it responsibly:

* The researchers shown as affiliated is unlikely to be a true and accurate reflection of all researchers at your institution. Please see the [Jisc UK ORCID Consortium blog post](https://ukorcidsupport.jisc.ac.uk/2019/06/identifying-your-researchers-challenges-and-opportunities/) for more details.
* The ORCID public API only supports retrieval of the first 11000 results, so if you have more than 11000 users affiliated to your institution the application will not retrieve them all
* To serve some requests, the application can make a very large number of queries on the ORCID registry public API – please do not refresh results frequently (although there is some caching).
* Although the application only accesses and displays information made public by users of the ORCID registry, it may expose personal information that they had not expected to be used in such a manner.

This application was developed under activities funded by [Jisc](https://www.jisc.ac.uk/).

The app works as follows:

* Given one or more of:
  * A pipe separated list of Ringgold IDs (URL parameter = ringgold)
  * A pipe separated list of GRID IDs (URL parameter = grid)
  * A pipe separated list of email domains (URL parameter = emaildomain)
  * A pipe separated list of organisation names (URL parameter = orgname)
* Search ORCID via the public API with the appropriate query parameters joined with "OR", such as:
  * "ringgold-org-id:\<ringgold id\>"
  * "grid-org-id:\<grid id\>"
  * "email:\*@\<email domain\>"
  * "affiliation-org-name:%22\<organisation name\>%22"
* Retrieve all the ORCID IDs found (paging through the results 200 at a time)
* Display the list of the retrieved ORCIDs in the browser
* Within the browser, progressively enhance the data by retrieving the full ORCID profile for each ORCID ID in the page
* When all profiles have been retrieved and the relevant information displayed, reformat as a searchable, sortable and exportable data table

The information currently displayed by the application is:
* ORCID ID
* Last modified date
* Name
* List of Education entries
* List of Employment entries
* List of additional identifiers for the person
* List of email addresses for the person
* Count of the number of works on their ORCID record

Because of the way the application works, the user experience is very S L O W, but a patient user will eventually get a full report on ORCIDS that are linked to the selected institution by either employment or education.

Requires:
* npm
* nodejs
* request
* express
* node-fetch

To install:
* Clone or download this repository
* execute `npm install`

To run:
* node server.js

View demo version:
* https://powerful-chamber-19570.herokuapp.com