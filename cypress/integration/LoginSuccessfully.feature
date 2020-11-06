Feature: Navigate and Login Commcare Website Successfully
    Scenario Outline: Verify login successfully with valid Email Address and Password
        Given I open website
        And I type <emailAddress> in the email address field
        And I type <password> in the password field
        And I click the confirmation button
        And I click login button
        Then I verify user login successfully
        Examples:
            | emailAddress           | password  |
            | thuhaphamdlb@gmail.com | @Chutha99 |