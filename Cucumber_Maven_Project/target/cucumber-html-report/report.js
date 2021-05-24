$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("MyApplication.feature");
formatter.feature({
  "line": 1,
  "name": "Test Process Automation smoke scenario",
  "description": "",
  "id": "test-process-automation-smoke-scenario",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Test login with valid credentials",
  "description": "",
  "id": "test-process-automation-smoke-scenario;test-login-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Open Chrome and start application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter valid \"\u003cusername\u003e\" and valid \"password\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user should be able to login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "application should be closed",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "test-process-automation-smoke-scenario;test-login-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 10,
      "id": "test-process-automation-smoke-scenario;test-login-with-valid-credentials;;1"
    },
    {
      "cells": [
        "sakthi.b@tauedu.org",
        "Welcome@123"
      ],
      "line": 11,
      "id": "test-process-automation-smoke-scenario;test-login-with-valid-credentials;;2"
    },
    {
      "cells": [
        "sakthi.b1@tauedu.org",
        "Welcome@456"
      ],
      "line": 12,
      "id": "test-process-automation-smoke-scenario;test-login-with-valid-credentials;;3"
    },
    {
      "cells": [
        "sakthi.b2@tauedu.org",
        "Welcome@789"
      ],
      "line": 13,
      "id": "test-process-automation-smoke-scenario;test-login-with-valid-credentials;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 11,
  "name": "Test login with valid credentials",
  "description": "",
  "id": "test-process-automation-smoke-scenario;test-login-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Open Chrome and start application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter valid \"sakthi.b@tauedu.org\" and valid \"password\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user should be able to login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "application should be closed",
  "keyword": "Then "
});
formatter.match({
  "location": "SmokeTest.Open_Firefox_and_start_application()"
});
formatter.result({
  "duration": 3975392300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sakthi.b@tauedu.org",
      "offset": 15
    },
    {
      "val": "password",
      "offset": 47
    }
  ],
  "location": "SmokeTest.I_enter_valid_username_and_valid_password(String,String)"
});
formatter.result({
  "duration": 145332500,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTest.user_should_be_able_to_login_successfully()"
});
formatter.result({
  "duration": 1048241000,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTest.application_should_be_closed()"
});
formatter.result({
  "duration": 657927600,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Test login with valid credentials",
  "description": "",
  "id": "test-process-automation-smoke-scenario;test-login-with-valid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Open Chrome and start application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter valid \"sakthi.b1@tauedu.org\" and valid \"password\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user should be able to login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "application should be closed",
  "keyword": "Then "
});
formatter.match({
  "location": "SmokeTest.Open_Firefox_and_start_application()"
});
formatter.result({
  "duration": 2781902700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sakthi.b1@tauedu.org",
      "offset": 15
    },
    {
      "val": "password",
      "offset": 48
    }
  ],
  "location": "SmokeTest.I_enter_valid_username_and_valid_password(String,String)"
});
formatter.result({
  "duration": 149021200,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTest.user_should_be_able_to_login_successfully()"
});
formatter.result({
  "duration": 1065351600,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTest.application_should_be_closed()"
});
formatter.result({
  "duration": 1112902900,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Test login with valid credentials",
  "description": "",
  "id": "test-process-automation-smoke-scenario;test-login-with-valid-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Open Chrome and start application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter valid \"sakthi.b2@tauedu.org\" and valid \"password\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user should be able to login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "application should be closed",
  "keyword": "Then "
});
formatter.match({
  "location": "SmokeTest.Open_Firefox_and_start_application()"
});
formatter.result({
  "duration": 2756365900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sakthi.b2@tauedu.org",
      "offset": 15
    },
    {
      "val": "password",
      "offset": 48
    }
  ],
  "location": "SmokeTest.I_enter_valid_username_and_valid_password(String,String)"
});
formatter.result({
  "duration": 134956200,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTest.user_should_be_able_to_login_successfully()"
});
formatter.result({
  "duration": 954095800,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTest.application_should_be_closed()"
});
formatter.result({
  "duration": 593944100,
  "status": "passed"
});
});