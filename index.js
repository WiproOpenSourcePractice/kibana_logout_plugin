/*
# Copyright 2018 - Wipro Limited
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#    http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
*/

import { resolve } from 'path';
import logoutRoute from './server/routes/logout';

export default function (kibana) {
  return new kibana.Plugin({
    require: ['elasticsearch'],
    name: 'logout',
    uiExports: {
      
      app: {
        title: 'Logout',
        description: 'logout',
        main: 'plugins/logout/app'
      },
      
      
      translations: [
        resolve(__dirname, './translations/es.json')
      ],
      
      
      hacks: [
        'plugins/logout/hack'
      ]
      
    },

    config(Joi) {
      return Joi.object({
        enabled: Joi.boolean().default(true),
      }).default();
    },

    
    init(server, options) {
      // Add server routes and initalize the plugin here
      logoutRoute(server);
    }
    

  });
};
