/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { IMenubarService } from 'vs/platform/menubar/node/menubar';
import { IMainProcessService } from 'vs/platform/ipc/electron-browser/mainProcessService';
import { createChannelSender } from 'vs/platform/ipc/node/ipcChannelCreator';

export class MenubarService {

	_serviceBrand: undefined;

	constructor(@IMainProcessService mainProcessService: IMainProcessService) {
		return createChannelSender<IMenubarService>(mainProcessService.getChannel('menubar'));
	}
}
