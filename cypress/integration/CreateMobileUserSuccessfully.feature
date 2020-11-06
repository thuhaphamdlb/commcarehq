Feature: Feature name
    Scenario: Verify that user can create a mobile user
        Given User is at <url>
        And User is logged in successfully with <emailAddress> and <password>
        When User goes to Users or Mobile Users page
        And User clicks Create Mobile Worker button
        And User fills all the needed information in the appeared pop-up
        And User clicks Create button
        Then User sees the created mobile user in the list

        Examples:
            | url                         | emailAddress           | password  |
            | https://www.commcarehq.org/ | thuhaphamdlb@gmail.com | @Chutha99 |

