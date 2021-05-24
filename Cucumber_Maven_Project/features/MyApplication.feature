Feature: Test Process Automation smoke scenario

  Scenario Outline: Test login with valid credentials
    Given Open Chrome and start application
    When I enter valid "<username>" and valid "password"
    Then user should be able to login successfully
    Then application should be closed

    Examples: 
      | username             | password    |
      | sakthi.b@tauedu.org  | Welcome@123 |
      | sakthi.b1@tauedu.org | Welcome@456 |
      | sakthi.b2@tauedu.org | Welcome@789 |
