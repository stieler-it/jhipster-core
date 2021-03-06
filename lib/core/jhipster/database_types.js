/**
 * Copyright 2013-2018 the original author or authors from the JHipster project.
 *
 * This file is part of the JHipster project, see http://www.jhipster.tech/
 * for more information.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const Types = {
  SQL: 'sql',
  MYSQL: 'mysql',
  MARIADB: 'mariadb',
  POSTGRESQL: 'postgresql',
  MSSQL: 'mssql',
  ORACLE: 'oracle',
  MONGODB: 'mongodb',
  CASSANDRA: 'cassandra',
  COUCHBASE: 'couchbase'
};

Types.isSql = type => Types.SQL === type
  || Types.MYSQL === type
  || Types.POSTGRESQL === type
  || Types.ORACLE === type
  || Types.MARIADB === type
  || Types.MSSQL === type;

module.exports = Types;
