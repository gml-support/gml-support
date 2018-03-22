"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//const nls = require("vscode-nls");  //Not available
//const localize = nls.loadMessageBundle(__filename);  //Not available

exports.globalfunctions = {
    abs: {
        description: '[Function]',
        parameters: [
            { label: 'x', documentation: '' }
        ],
		signature: '(x)'
	},
	achievement_available: {
		description: '[Function]'
	},
	achievement_event: {
        description: '[Function]',
        parameters: [
            { label: 'stringid', documentation: '' }
        ],
		signature: '(stringid)'
	},
	achievement_get_challenges: {
		description: '[Function]'
	},
	achievement_get_info: {
        description: '[Function]',
        parameters: [
            { label: 'userid', documentation: '' }
        ],
		signature: '(userid)'
	},
	achievement_get_pic: {
        description: '[Function]',
        parameters: [
            { label: 'char', documentation: '' }
        ],
		signature: '(char)'
	},
	achievement_increment: {
        description: '[Function]',
        parameters: [
            { label: 'achievement_name', documentation: '' },
            { label: 'value', documentation: '' }
        ],
		signature: '(achievement_name, value)'
	},
	achievement_load_friends: {
		description: '[Function]'
	},
	achievement_load_leaderboard: {
        description: '[Function]',
        parameters: [
            { label: 'ident', documentation: '' },
            { label: 'minindex', documentation: '' },
            { label: 'maxindex', documentation: '' },
            { label: 'filter', documentation: '' }
        ],
		signature: '(ident, minindex, maxindex, filter)'
	},
	achievement_load_progress: {
		description: '[Function]'
	},
	achievement_login: {
		description: '[Function]'
	},
	achievement_login_status: {
		description: '[Function]'
	},
	achievement_logout: {
		description: '[Function]'
	},
	achievement_post: {
        description: '[Function]',
        parameters: [
            { label: 'achievement_name', documentation: '' },
            { label: 'value', documentation: '' }
        ],
		signature: '(achievement_name, value)'
	},
	achievement_post_score: {
        description: '[Function]',
        parameters: [
            { label: 'score_name', documentation: '' },
            { label: 'value', documentation: '' }
        ],
		signature: '(score_name, value)'
	},
	achievement_reset: {
		description: '[Function]'
	},
	achievement_send_challenge: {
        description: '[Function]',
        parameters: [
            { label: 'to', documentation: '' },
            { label: 'challengeid', documentation: '' },
            { label: 'score', documentation: '' },
            { label: 'type', documentation: '' },
            { label: 'msg', documentation: '' }
        ],
		signature: '(to, challengeid, score, type, msg)'
	},
	achievement_show: {
        description: '[Function]',
        parameters: [
            { label: 'type', documentation: '' },
            { label: 'val', documentation: '' }
        ],
		signature: '(type, val)'
	},
	achievement_show_achievements: {
		description: '[Function]'
	},
	achievement_show_challenge_notifications: {
        description: '[Function]',
        parameters: [
            { label: 'receive_challenge', documentation: '' },
            { label: 'local_complete', documentation: '' },
            { label: 'remote_complete', documentation: '' }
        ],
		signature: '(receive_challenge, local_complete, remote_complete)'
	},
	achievement_show_leaderboards: {
		description: '[Function]'
	},
	alarm_get: {
        description: '[Function]',
        parameters: [
            { label: 'index', documentation: '' }
        ],
		signature: '(index)'
	},
	alarm_set: {
        description: '[Function]',
        parameters: [
            { label: 'index', documentation: '' },
            { label: 'count', documentation: '' }
        ],
		signature: '(index, count)'
	},
	analytics_event: {
        description: '[Function]',
        parameters: [
            { label: 'string', documentation: '' }
        ],
		signature: '(string)'
	},
	analytics_event_ext: {
        description: '[Function]',
        parameters: [
            { label: 'string', documentation: '' },
            { label: 'string_param_name1', documentation: '' },
            { label: 'number_value1', documentation: '' },
            { label: '...', documentation: '' }
        ],
		signature: '(string, string_param_name1, number_value1, ...)'
	},
	angle_difference: {
        description: '[Function]',
        parameters: [
            { label: 'src', documentation: '' },
            { label: 'dest', documentation: '' }
        ],
		signature: '(src, dest)'
	},
	ansi_char: {
        description: '[Function]',
        parameters: [
            { label: 'val', documentation: '' }
        ],
		signature: '(val)'
	},
	application_get_position: {
		description: '[Function]'
	},
	application_surface_draw_enable: {
        description: '[Function]',
        parameters: [
            { label: 'on_off', documentation: '' }
        ],
		signature: '(on_off)'
	},
	application_surface_enable: {
        description: '[Function]',
        parameters: [
            { label: 'enable', documentation: '' }
        ],
		signature: '(enable)'
	},
	application_surface_is_enabled: {
		description: '[Function]'
	},
	arccos: {
        description: '[Function]',
        parameters: [
            { label: 'x', documentation: '' }
        ],
		signature: '(x)'
	},
	arcsin: {
        description: '[Function]',
        parameters: [
            { label: 'x', documentation: '' }
        ],
		signature: '(x)'
	},
	arctan: {
        description: '[Function]',
        parameters: [
            { label: 'x', documentation: '' }
        ],
		signature: '(x)'
	},
	arctan2: {
        description: '[Function]',
        parameters: [
            { label: 'y', documentation: '' },
            { label: 'x', documentation: '' }
        ],
		signature: '(y, x)'
	},
	array_copy: {
        description: '[Function]',
        parameters: [
            { label: 'dest', documentation: '' },
            { label: 'dest_index', documentation: '' },
            { label: 'src', documentation: '' },
            { label: 'src_index', documentation: '' },
            { label: 'length', documentation: '' }
        ],
		signature: '(dest, dest_index, src, src_index, length)'
	},
	array_create: {
        description: '[Function]',
        parameters: [
            { label: 'size', documentation: '' }
        ],
		signature: '(size)'
	},
	array_equals: {
        description: '[Function]',
        parameters: [
            { label: 'var1', documentation: '' },
            { label: 'var2', documentation: '' }
        ],
		signature: '(var1, var2)'
	},
	array_height_2d: {
        description: '[Function]',
        parameters: [
            { label: 'variable', documentation: '' }
        ],
		signature: '(variable)'
	},
	array_length_1d: {
        description: '[Function]',
        parameters: [
            { label: 'variable', documentation: '' }
        ],
		signature: '(variable)'
	},
	array_length_2d: {
        description: '[Function]',
        parameters: [
            { label: 'variable', documentation: '' },
            { label: 'index', documentation: '' }
        ],
		signature: '(variable, index)'
	},
	asset_get_index: {
        description: '[Function]',
        parameters: [
            { label: 'name', documentation: '' }
        ],
		signature: '(name)'
	},
	asset_get_type: {
        description: '[Function]',
        parameters: [
            { label: 'name', documentation: '' }
        ],
		signature: '(name)'
	},
	audio_channel_num: {
        description: '[Function]',
        parameters: [
            { label: 'numchannels', documentation: '' }
        ],
		signature: '(numchannels)'
	},
	audio_create_buffer_sound: {
        description: '[Function]',
        parameters: [
            { label: 'bufferId', documentation: '' },
            { label: 'format', documentation: '' },
            { label: 'offset', documentation: '' },
            { label: 'src_index', documentation: '' },
            { label: 'length', documentation: '' },
            { label: 'channels', documentation: '' }
        ],
		signature: '(bufferId, format, rate, offset, length, channels)'
	},
	audio_create_play_queue: {
        description: '[Function]',
        parameters: [
            { label: 'bufferFormat', documentation: '' },
            { label: 'sampleRate', documentation: '' },
            { label: 'channels', documentation: '' }
        ],
		signature: '(bufferFormat, sampleRate, channels)'
	},
	audio_create_stream: {
        description: '[Function]',
        parameters: [
            { label: 'filename', documentation: '' }
        ],
		signature: '(filename)'
	},
	audio_create_sync_group: {
        description: '[Function]',
        parameters: [
            { label: 'looping', documentation: '' }
        ],
		signature: '(looping)'
	},
	audio_debug: {
        description: '[Function]',
        parameters: [
            { label: 'enable', documentation: '' }
        ],
		signature: '(enable)'
	},
	audio_destroy_stream: {
        description: '[Function]',
        parameters: [
            { label: 'stream_sound_id', documentation: '' }
        ],
		signature: '(stream_sound_id)'
	},
	audio_destroy_sync_group: {
        description: '[Function]',
        parameters: [
            { label: 'sync_group_id', documentation: '' }
        ],
		signature: '(sync_group_id)'
	},
	audio_emitter_create: {
		description: '[Function]'
	},
	audio_emitter_exists: {
        description: '[Function]',
        parameters: [
            { label: 'emitterid', documentation: '' }
        ],
		signature: '(emitterid)'
	},
	audio_emitter_falloff: {
        description: '[Function]',
        parameters: [
            { label: 'emitterid', documentation: '' },
            { label: 'falloff_ref_dist', documentation: '' },
            { label: 'falloff_max_dist', documentation: '' },
            { label: 'falloff_factor', documentation: '' }
        ],
		signature: '(emitterid, falloff_ref_dist, falloff_max_dist, falloff_factor)'
	},
	audio_emitter_free: {
        description: '[Function]',
        parameters: [
            { label: 'emitterid', documentation: '' }
        ],
		signature: '(emitterid)'
	},
	audio_emitter_gain: {
        description: '[Function]',
        parameters: [
            { label: 'emitterid', documentation: '' },
            { label: 'gain', documentation: '' }
        ],
		signature: '(emitterid, gain)'
	},
	audio_emitter_get_gain: {
        description: '[Function]',
        parameters: [
            { label: 'emitterid', documentation: '' }
        ],
		signature: '(emitterid)'
	},
	audio_emitter_get_listener_mask: {
        description: '[Function]',
        parameters: [
            { label: 'emitterid', documentation: '' }
        ],
		signature: '(emitterid)'
	},
	audio_emitter_get_pitch: {
        description: '[Function]',
        parameters: [
            { label: 'emitterid', documentation: '' }
        ],
		signature: '(emitterid)'
	},
	audio_emitter_get_vx: {
        description: '[Function]',
        parameters: [
            { label: 'emitterid', documentation: '' }
        ],
		signature: '(emitterid)'
	},
	audio_emitter_get_vy: {
        description: '[Function]',
        parameters: [
            { label: 'emitterid', documentation: '' }
        ],
		signature: '(emitterid)'
	},
	audio_emitter_get_vz: {
        description: '[Function]',
        parameters: [
            { label: 'emitterid', documentation: '' }
        ],
		signature: '(emitterid)'
	},
	audio_emitter_get_x: {
        description: '[Function]',
        parameters: [
            { label: 'emitterid', documentation: '' }
        ],
		signature: '(emitterid)'
	},
	audio_emitter_get_y: {
        description: '[Function]',
        parameters: [
            { label: 'emitterid', documentation: '' }
        ],
		signature: '(emitterid)'
	},
	audio_emitter_get_z: {
        description: '[Function]',
        parameters: [
            { label: 'emitterid', documentation: '' }
        ],
		signature: '(emitterid)'
	},
	audio_emitter_pitch: {
        description: '[Function]',
        parameters: [
            { label: 'emitterid', documentation: '' },
            { label: 'pitch', documentation: '' }
        ],
		signature: '(emitterid, pitch)'
	},
	audio_emitter_position: {
        description: '[Function]',
        parameters: [
            { label: 'emitterid', documentation: '' },
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' },
            { label: 'z', documentation: '' }
        ],
		signature: '(emitterid, x, y, z)'
	},
	audio_emitter_set_listener_mask: {
        description: '[Function]',
        parameters: [
            { label: 'emitterid', documentation: '' },
            { label: 'mask', documentation: '' }
        ],
		signature: '(emitterid, mask)'
	},
	audio_emitter_velocity: {
        description: '[Function]',
        parameters: [
            { label: 'emitterid', documentation: '' },
            { label: 'vx', documentation: '' },
            { label: 'vy', documentation: '' },
            { label: 'vz', documentation: '' }
        ],
		signature: '(emitterid, vx, vy, vz)'
	},
	audio_exists: {
        description: '[Function]',
        parameters: [
            { label: 'soundid', documentation: '' }
        ],
		signature: '(soundid)'
	},
	audio_falloff_set_model: {
        description: '[Function]',
        parameters: [
            { label: 'falloffmode', documentation: '' }
        ],
		signature: '(falloffmode)'
	},
	audio_free_buffer_sound: {
        description: '[Function]',
        parameters: [
            { label: 'soundid', documentation: '' }
        ],
		signature: '(soundId)'
	},
	audio_free_play_queue: {
        description: '[Function]',
        parameters: [
            { label: 'queueid', documentation: '' }
        ],
		signature: '(queueId)'
	},
	audio_get_listener_count: {
		description: '[Function]'
	},
	audio_get_listener_info: {
        description: '[Function]',
        parameters: [
            { label: 'index', documentation: '' }
        ],
		signature: '(index)'
	},
	audio_get_listener_mask: {
        description: '[Function]',
        parameters: [
            { label: 'mask', documentation: '' }
        ],
		signature: '(mask)'
	},
	audio_get_master_gain: {
        description: '[Function]',
        parameters: [
            { label: 'listenerIndex', documentation: '' }
        ],
		signature: '(listenerIndex)'
	},
	audio_get_name: {
        description: '[Function]',
        parameters: [
            { label: 'index', documentation: '' }
        ],
		signature: '(index)'
	},
	audio_get_recorder_count: {
		description: '[Function]'
	},
	audio_get_recorder_info: {
        description: '[Function]',
        parameters: [
            { label: 'recorder_num', documentation: '' }
        ],
		signature: '(recorder_num)'
	},
	audio_get_type: {
        description: '[Function]',
        parameters: [
            { label: 'soundid', documentation: '' }
        ],
		signature: '(soundid)'
	},
	audio_group_is_loaded: {
        description: '[Function]',
        parameters: [
            { label: 'groupId', documentation: '' }
        ],
		signature: '(groupId)'
	},
	audio_group_load: {
        description: '[Function]',
        parameters: [
            { label: 'groupId', documentation: '' }
        ],
		signature: '(groupId)'
	},
	audio_group_load_progress: {
        description: '[Function]',
        parameters: [
            { label: 'groupId', documentation: '' }
        ],
		signature: '(groupId)'
	},
	audio_group_name: {
        description: '[Function]',
        parameters: [
            { label: 'groupId', documentation: '' }
        ],
		signature: '(groupId)'
	},
	audio_group_set_gain: {
        description: '[Function]',
        parameters: [
            { label: 'groupId', documentation: '' },
            { label: 'volume', documentation: '' },
            { label: 'time', documentation: '' }
        ],
		signature: '(groupId, volume, time)'
	},
	audio_group_stop_all: {
        description: '[Function]',
        parameters: [
            { label: 'groupId', documentation: '' }
        ],
		signature: '(groupId)'
	},
	audio_group_unload: {
        description: '[Function]',
        parameters: [
            { label: 'groupId', documentation: '' }
        ],
		signature: '(groupId)'
	},
	audio_is_paused: {
        description: '[Function]',
        parameters: [
            { label: 'soundid', documentation: '' }
        ],
        signature: '(soundid)'
    },
	audio_is_playing: {
        description: '[Function]',
        parameters: [
            { label: 'soundid', documentation: '' }
        ],
        signature: '(soundid)'
    },
	audio_listener_get_data: {
        description: '[Function]',
        parameters: [
            { label: 'index', documentation: '' }
        ],
        signature: '(index)'
    },
	audio_listener_orientation: {
        description: '[Function]',
        parameters: [
            { label: 'lookat_x', documentation: '' },
            { label: 'lookat_y', documentation: '' },
            { label: 'lookat_z', documentation: '' },
            { label: 'up_x', documentation: '' },
            { label: 'up_y', documentation: '' },
            { label: 'up_z', documentation: '' }
        ],
        signature: '(lookat_x, lookat_y, lookat_z, up_x, up_y, up_z)'
    },
	audio_listener_position: {
        description: '[Function]',
        parameters: [
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' },
            { label: 'z', documentation: '' }
        ],
        signature: '(x, y, z)'
    },
	audio_listener_set_orientation: {
        description: '[Function]',
        parameters: [
            { label: 'index', documentation: '' },
            { label: 'lookat_x', documentation: '' },
            { label: 'lookat_y', documentation: '' },
            { label: 'lookat_z', documentation: '' },
            { label: 'up_x', documentation: '' },
            { label: 'up_y', documentation: '' },
            { label: 'up_z', documentation: '' }
        ],
        signature: '(index, lookat_x, lookat_y, lookat_z, up_x, up_y, up_z)'
    },
	audio_listener_set_position: {
        description: '[Function]',
        parameters: [
            { label: 'index', documentation: '' },
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' },
            { label: 'z', documentation: '' }
        ],
        signature: '(index, x, y, z)'
    },
	audio_listener_set_velocity: {
        description: '[Function]',
        parameters: [
            { label: 'index', documentation: '' },
            { label: 'vx', documentation: '' },
            { label: 'vy', documentation: '' },
            { label: 'vz', documentation: '' }
        ],
        signature: '(index, vx, vy, vz)'
    },
	audio_listener_velocity: {
        description: '[Function]',
        parameters: [
            { label: 'vx', documentation: '' },
            { label: 'vy', documentation: '' },
            { label: 'vz', documentation: '' }
        ],
        signature: '(vx, vy, vz)'
    },
	audio_master_gain: {
        description: '[Function]',
        parameters: [
            { label: 'gain', documentation: '' }
        ],
        signature: '(gain)'
    },
	audio_pause_all: {
        description: '[Function]'
    },
	audio_pause_sound: {
        description: '[Function]',
        parameters: [
            { label: 'soundid', documentation: '' }
        ],
        signature: '(soundid)'
    },
	audio_pause_sync_group: {
        description: '[Function]',
        parameters: [
            { label: 'sync_group_id', documentation: '' }
        ],
        signature: '(sync_group_id)'
    },
	audio_play_in_sync_group: {
        description: '[Function]',
        parameters: [
            { label: 'sync_group_id', documentation: '' },
            { label: 'soundid', documentation: '' }
        ],
        signature: '(sync_group_id, soundid)'
    },
	audio_play_sound: {
        description: '[Function]',
        parameters: [
            { label: 'soundid', documentation: '' },
            { label: 'priority', documentation: '' },
            { label: 'loops', documentation: '' }
        ],
        signature: '(soundid, priority, loops)'
    },
	audio_play_sound_at: {
        description: '[Function]',
        parameters: [
            { label: 'soundid', documentation: '' },
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' },
            { label: 'z', documentation: '' },
            { label: 'falloff_ref_dist', documentation: '' },
            { label: 'falloff_max_dist', documentation: '' },
            { label: 'falloff_factor', documentation: '' },
            { label: 'loops', documentation: '' },
            { label: 'priority', documentation: '' }
        ],
        signature: '(soundid, x, y, z, falloff_ref_dist, falloff_max_dist, falloff_factor, loops, priority)'
    },
	audio_play_sound_on: {
        description: '[Function]',
        parameters: [
            { label: 'emitterid', documentation: '' },
            { label: 'soundid', documentation: '' },
            { label: 'priority', documentation: '' },
            { label: 'loops', documentation: '' }
        ],
        signature: '(emitterid, soundid, loops, priority)'
    },
	audio_queue_sound: {
        description: '[Function]',
        parameters: [
            { label: 'queueid', documentation: '' },
            { label: 'buffer_id', documentation: '' },
            { label: 'offset', documentation: '' },
            { label: 'length', documentation: '' }
        ],
        signature: '(queueId, buffer_id, offset, length)'
    },
	audio_resume_all: {
        description: '[Function]'
    },
	audio_resume_sound: {
        description: '[Function]',
        parameters: [
            { label: 'soundid', documentation: '' }
        ],
        signature: '(soundid)'
    },
	audio_resume_sync_group: {
        description: '[Function]',
        parameters: [
            { label: 'sync_group_id', documentation: '' }
        ],
        signature: '(sync_group_id)'
    },
	audio_set_listener_mask: {
        description: '[Function]',
        parameters: [
            { label: 'mask', documentation: '' }
        ],
        signature: '(mask)'
    },
	audio_set_master_gain: {
        description: '[Function]',
        parameters: [
            { label: 'listenerIndex', documentation: '' },
            { label: 'gain', documentation: '' }
        ],
        signature: '(listenerIndex, gain)'
    },
	audio_sound_gain: {
        description: '[Function]',
        parameters: [
            { label: 'index', documentation: '' },
            { label: 'volume', documentation: '' },
            { label: 'time', documentation: '' }
        ],
        signature: '(index, volume, time)'
    },
	audio_sound_get_gain: {
        description: '[Function]',
        parameters: [
            { label: 'index', documentation: '' }
        ],
        signature: '(index)'
    },
	audio_sound_get_listener_mask: {
        description: '[Function]',
        parameters: [
            { label: 'soundid', documentation: '' }
        ],
        signature: '(soundid)'
    },
	audio_sound_get_pitch: {
        description: '[Function]',
        parameters: [
            { label: 'index', documentation: '' }
        ],
        signature: '(index)'
    },
	audio_sound_get_track_position: {
        description: '[Function]',
        parameters: [
            { label: 'soundid', documentation: '' }
        ],
        signature: '(soundid)'
    },
	audio_sound_length: {
        description: '[Function]',
        parameters: [
            { label: 'soundid', documentation: '' }
        ],
        signature: '(soundid)'
    },
	audio_sound_pitch: {
        description: '[Function]',
        parameters: [
            { label: 'index', documentation: '' },
            { label: 'pitch', documentation: '' }
        ],
        signature: '(index, pitch)'
    },
	audio_sound_set_listener_mask: {
        description: '[Function]',
        parameters: [
            { label: 'soundid', documentation: '' },
            { label: 'mask', documentation: '' }
        ],
        signature: '(soundid, mask)'
    },
	audio_sound_set_track_position: {
        description: '[Function]',
        parameters: [
            { label: 'soundid', documentation: '' },
            { label: 'time', documentation: '' }
        ],
        signature: '(soundid, time)'
    },
	audio_start_recording: {
        description: '[Function]',
        parameters: [
            { label: 'recorder_num', documentation: '' }
        ],
        signature: '(recorder_num)'
    },
	audio_start_sync_group: {
        description: '[Function]',
        parameters: [
            { label: 'sync_group_id', documentation: '' }
        ],
        signature: '(sync_group_id)'
    },
	audio_stop_all: {
        description: '[Function]'
    },
	audio_stop_recording: {
        description: '[Function]',
        parameters: [
            { label: 'channel_index', documentation: '' }
        ],
        signature: '(channel_index)'
    },
	audio_stop_sound: {
        description: '[Function]',
        parameters: [
            { label: 'soundid', documentation: '' }
        ],
        signature: '(soundid)'
    },
	audio_stop_sync_group: {
        description: '[Function]',
        parameters: [
            { label: 'sync_group_id', documentation: '' }
        ],
        signature: '(sync_group_id)'
    },
	audio_sync_group_debug: {
        description: '[Function]',
        parameters: [
            { label: 'sync_group_id', documentation: '' }
        ],
        signature: '(sync_group_id)'
    },
	audio_sync_group_get_track_pos: {
        description: '[Function]',
        parameters: [
            { label: 'sync_group_id', documentation: '' }
        ],
        signature: '(sync_group_id)'
    },
	audio_sync_group_is_playing: {
        description: '[Function]',
        parameters: [
            { label: 'sync_group_id', documentation: '' }
        ],
        signature: '(sync_group_id)'
    },
	audio_system: {
        description: '[Function]'
    },
	background_add: {
        description: '[Function]',
        parameters: [
            { label: 'fname', documentation: '' },
            { label: 'removeback', documentation: '' },
            { label: 'smooth', documentation: '' }
        ],
        signature: '(fname, removeback, smooth)'
    },
	background_assign: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' },
            { label: 'source', documentation: '' }
        ],
        signature: '(ind, source)'
    },
	background_create_color: {
        description: '[Function]',
        parameters: [
            { label: 'w', documentation: '' },
            { label: 'h', documentation: '' },
            { label: 'col', documentation: '' }
        ],
        signature: '(w, h, col)'
    },
	background_create_colour: {
        description: '[Function]',
        parameters: [
            { label: 'w', documentation: '' },
            { label: 'h', documentation: '' },
            { label: 'col', documentation: '' }
        ],
        signature: '(w, h, col)'
    },
	background_create_from_surface: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' },
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' },
            { label: 'w', documentation: '' },
            { label: 'h', documentation: '' },
            { label: 'removeback', documentation: '' },
            { label: 'smooth', documentation: '' }
        ],
        signature: '(id, x, y, w, h, removeback, smooth)'
    },
	background_create_gradient: {
        description: '[Function]',
        parameters: [
            { label: 'w', documentation: '' },
            { label: 'h', documentation: '' },
            { label: 'col1', documentation: '' },
            { label: 'col2', documentation: '' },
            { label: 'kind', documentation: '' }
        ],
        signature: '(w, h, col1, col2, kind)'
    },
	background_delete: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' }
        ],
        signature: '(ind)'
    },
	background_duplicate: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' }
        ],
        signature: '(ind)'
    },
	background_exists: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' }
        ],
        signature: '(ind)'
    },
	background_flush: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' }
        ],
        signature: '(ind)'
    },
	background_flush_multi: {
        description: '[Function]',
        parameters: [
            { label: 'indarray', documentation: '' }
        ],
        signature: '(indarray)'
    },
	background_get_height: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' }
        ],
        signature: '(ind)'
    },
	background_get_name: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' }
        ],
        signature: '(ind)'
    },
	background_get_texture: {
        description: '[Function]',
        parameters: [
            { label: 'back', documentation: '' }
        ],
        signature: '(back)'
    },
	background_get_uvs: {
        description: '[Function]',
        parameters: [
            { label: 'back', documentation: '' }
        ],
        signature: '(back)'
    },
	background_get_width: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' }
        ],
        signature: '(ind)'
    },
	background_prefetch: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' }
        ],
        signature: '(ind)'
    },
	background_prefetch_multi: {
        description: '[Function]',
        parameters: [
            { label: 'indarray', documentation: '' }
        ],
        signature: '(indarray)'
    },
	background_replace: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' },
            { label: 'fname', documentation: '' },
            { label: 'removeback', documentation: '' },
            { label: 'smooth', documentation: '' }
        ],
        signature: '(ind, fname, removeback, smooth)'
    },
	background_replace_background: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' },
            { label: 'fname', documentation: '' }
        ],
        signature: '(ind, fname)'
    },
	background_save: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' },
            { label: 'fname', documentation: '' }
        ],
        signature: '(ind, fname)'
    },
	background_set_alpha_from_background: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' },
            { label: 'back', documentation: '' }
        ],
        signature: '(ind, back)'
    },
	base64_decode: {
        description: '[Function]',
        parameters: [
            { label: 'string', documentation: '' }
        ],
        signature: '(string)'
    },
	base64_encode: {
        description: '[Function]',
        parameters: [
            { label: 'string', documentation: '' }
        ],
        signature: '(string)'
    },
	browser_input_capture: {
        description: '[Function]',
        parameters: [
            { label: 'enable', documentation: '' }
        ],
        signature: '(enable)'
    },
	buffer_async_group_begin: {
        description: '[Function]',
        parameters: [
            { label: 'groupname', documentation: '' }
        ],
        signature: '(groupname)'
    },
	buffer_async_group_end: {
        description: '[Function]'
    },
	buffer_async_group_option: {
        description: '[Function]',
        parameters: [
            { label: 'optionname', documentation: '' },
            { label: 'optionvalue', documentation: '' }
        ],
        signature: '(optionname, optionvalue)'
    },
	buffer_base64_decode: {
        description: '[Function]',
        parameters: [
            { label: 'string', documentation: '' }
        ],
        signature: '(string)'
    },
	buffer_base64_decode_ext: {
        description: '[Function]',
        parameters: [
            { label: 'buffer', documentation: '' },
            { label: 'string', documentation: '' },
            { label: 'offset', documentation: '' }
        ],
        signature: '(buffer, string, offset)'
    },
	buffer_base64_encode: {
        description: '[Function]',
        parameters: [
            { label: 'buffer', documentation: '' },
            { label: 'offset', documentation: '' },
            { label: 'size', documentation: '' }
        ],
        signature: '(buffer, offset, size)'
    },
	buffer_copy: {
        description: '[Function]',
        parameters: [
            { label: 'src_buffer', documentation: '' },
            { label: 'src_offset', documentation: '' },
            { label: 'size', documentation: '' },
            { label: 'dest_buffer', documentation: '' },
            { label: 'dest_offset', documentation: '' }
        ],
        signature: '(src_buffer, src_offset, size, dest_buffer, dest_offset)'
    },
	buffer_copy_from_vertex_buffer: {
        description: '[Function]',
        parameters: [
            { label: 'vertex_buffer', documentation: '' },
            { label: 'start_vertex', documentation: '' },
            { label: 'num_vertices', documentation: '' },
            { label: 'dest_buffer', documentation: '' },
            { label: 'dest_offset', documentation: '' }
        ],
        signature: '(vertex_buffer, start_vertex, num_vertices, dest_buffer, dest_offset)'
    },
	buffer_create: {
        description: '[Function]',
        parameters: [
            { label: 'size', documentation: '' },
            { label: 'buffer_type', documentation: '' },
            { label: 'alignment', documentation: '' }
        ],
        signature: '(size, buffer_type, alignment)'
    },
	buffer_create_from_vertex_buffer: {
        description: '[Function]',
        parameters: [
            { label: 'vertex_buffer', documentation: '' },
            { label: 'type', documentation: '' },
            { label: 'alignment', documentation: '' }
        ],
        signature: '(vertex_buffer, type, alignment)'
    },
	buffer_create_from_vertex_buffer_ext: {
        description: '[Function]',
        parameters: [
            { label: 'vertex_buffer', documentation: '' },
            { label: 'type', documentation: '' },
            { label: 'alignment', documentation: '' },
            { label: 'start_vertex', documentation: '' },
            { label: 'num_vertices', documentation: '' }
        ],
        signature: '(vertex_buffer, type, alignment, start_vertex, num_vertices)'
    },
	buffer_delete: {
        description: '[Function]',
        parameters: [
            { label: 'buffer', documentation: '' }
        ],
        signature: '(buffer)'
    },
	buffer_exists: {
        description: '[Function]',
        parameters: [
            { label: 'buffer', documentation: '' }
        ],
        signature: '(buffer)'
    },
	buffer_fill: {
        description: '[Function]',
        parameters: [
            { label: 'buffer', documentation: '' },
            { label: 'offset', documentation: '' },
            { label: 'type', documentation: '' },
            { label: 'value', documentation: '' },
            { label: 'size', documentation: '' }
        ],
        signature: '(buffer, offset, type, value, size)'
    },
	buffer_get_address: {
        description: '[Function]',
        parameters: [
            { label: 'buffer', documentation: '' }
        ],
        signature: '(buffer)'
    },
	buffer_get_alignment: {
        description: '[Function]',
        parameters: [
            { label: 'buffer', documentation: '' }
        ],
        signature: '(buffer)'
    },
	buffer_get_size: {
        description: '[Function]',
        parameters: [
            { label: 'buffer', documentation: '' }
        ],
        signature: '(buffer)'
    },
	buffer_get_surface: {
        description: '[Function]',
        parameters: [
            { label: 'buffer', documentation: '' },
            { label: 'surface', documentation: '' },
            { label: 'mode', documentation: '' },
            { label: 'offset', documentation: '' },
            { label: 'modulo', documentation: '' }
        ],
        signature: '(buffer, surface, mode, offset, modulo)'
    },
	buffer_get_type: {
        description: '[Function]',
        parameters: [
            { label: 'buffer', documentation: '' }
        ],
        signature: '(buffer)'
    },
	buffer_load: {
        description: '[Function]',
        parameters: [
            { label: 'filename', documentation: '' }
        ],
        signature: '(filename)'
    },
	buffer_load_async: {
        description: '[Function]',
        parameters: [
            { label: 'bufferid', documentation: '' },
            { label: 'filename', documentation: '' },
            { label: 'offset', documentation: '' },
            { label: 'size', documentation: '' }
        ],
        signature: '(bufferid, filename, offset, size)'
    },
	buffer_load_ext: {
        description: '[Function]',
        parameters: [
            { label: 'bufferid', documentation: '' },
            { label: 'filename', documentation: '' },
            { label: 'offset', documentation: '' }
        ],
        signature: '(buffer, filename, offset)'
    },
	buffer_load_partial: {
        description: '[Function]',
        parameters: [
            { label: 'bufferid', documentation: '' },
            { label: 'filename', documentation: '' },
            { label: 'src_offset', documentation: '' },
            { label: 'src_len', documentation: '' },
            { label: 'dest_offset', documentation: '' }
        ],
        signature: '(buffer, filename, src_offset, src_len, dest_offset)'
    },
	buffer_md5: {
        description: '[Function]',
        parameters: [
            { label: 'buffer', documentation: '' },
            { label: 'offset', documentation: '' },
            { label: 'size', documentation: '' }
        ],
        signature: '(buffer, offset, size)'
    },
	buffer_peek: {
        description: '[Function]',
        parameters: [
            { label: 'buffer', documentation: '' },
            { label: 'offset', documentation: '' },
            { label: 'type', documentation: '' }
        ],
        signature: '(buffer, offset, type)'
    },
	buffer_poke: {
        description: '[Function]',
        parameters: [
            { label: 'buffer', documentation: '' },
            { label: 'offset', documentation: '' },
            { label: 'type', documentation: '' },
            { label: 'value', documentation: '' }
        ],
        signature: '(buffer, offset, type, value)'
    },
	buffer_read: {
        description: '[Function]',
        parameters: [
            { label: 'buffer', documentation: '' },
            { label: 'type', documentation: '' }
        ],
        signature: '(buffer, type)'
    },
	buffer_resize: {
        description: '[Function]',
        parameters: [
            { label: 'buffer', documentation: '' },
            { label: 'newsize', documentation: '' }
        ],
        signature: '(buffer, newsize)'
    },
	buffer_save: {
        description: '[Function]',
        parameters: [
            { label: 'buffer', documentation: '' },
            { label: 'filename', documentation: '' }
        ],
        signature: '(buffer, filename)'
    },
	buffer_save_async: {
        description: '[Function]',
        parameters: [
            { label: 'buffer', documentation: '' },
            { label: 'type', documentation: '' },
            { label: 'offset', documentation: '' },
            { label: 'size', documentation: '' }
        ],
        signature: '(bufferid, filename, offset, size)'
    },
	buffer_save_ext: {
        description: '[Function]',
        parameters: [
            { label: 'bufferid', documentation: '' },
            { label: 'filename', documentation: '' },
            { label: 'offset', documentation: '' },
            { label: 'size', documentation: '' }
        ],
        signature: '(buffer, filename, offset, size)'
    },
	buffer_seek: {
        description: '[Function]',
        parameters: [
            { label: 'bufferid', documentation: '' },
            { label: 'base', documentation: '' },
            { label: 'offset', documentation: '' }
        ],
        signature: '(buffer, base, offset)'
    },
	buffer_set_surface: {
        description: '[Function]',
        parameters: [
            { label: 'buffer', documentation: '' },
            { label: 'surface', documentation: '' },
            { label: 'mode', documentation: '' },
            { label: 'offset', documentation: '' },
            { label: 'modulo', documentation: '' }
        ],
        signature: '(buffer, surface, mode, offset, modulo)'
    },
	buffer_sha1: {
        description: '[Function]',
        parameters: [
            { label: 'bufferid', documentation: '' },
            { label: 'offset', documentation: '' },
            { label: 'size', documentation: '' }
        ],
        signature: '(buffer, offset, size)'
    },
	buffer_sizeof: {
        description: '[Function]',
        parameters: [
            { label: 'type', documentation: '' }
        ],
        signature: '(type)'
    },
	buffer_tell: {
        description: '[Function]',
        parameters: [
            { label: 'buffer', documentation: '' }
        ],
        signature: '(buffer)'
    },
	buffer_write: {
        description: '[Function]',
        parameters: [
            { label: 'buffer', documentation: '' },
            { label: 'type', documentation: '' },
            { label: 'value', documentation: '' }
        ],
        signature: '(buffer, type, value)'
    },
	ceil: {
        description: '[Function]',
        parameters: [
            { label: 'x', documentation: '' }
        ],
        signature: '(x)'
    },
	choose: {
        description: '[Function]',
        parameters: [
            { label: 'x1', documentation: '' },
            { label: 'x2', documentation: '' },
            { label: 'x3', documentation: '' },
            { label: '...', documentation: '' }
        ],
        signature: '(x1, x2, x3, ...)'
    },
	chr: {
        description: '[Function]',
        parameters: [
            { label: 'val', documentation: '' }
        ],
        signature: '(val)'
    },
	clamp: {
        description: '[Function]',
        parameters: [
            { label: 'val', documentation: '' },
            { label: 'min', documentation: '' },
            { label: 'max', documentation: '' }
        ],
        signature: '(val, min, max)'
    },
	clickable_add: {
        description: '[Function]',
        parameters: [
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' },
            { label: 'spritetpe', documentation: '' },
            { label: 'URL', documentation: '' },
            { label: 'target', documentation: '' },
            { label: 'params', documentation: '' }
        ],
        signature: '(x, y, spritetpe, URL, target, params)'
    },
	clickable_add_ext: {
        description: '[Function]',
        parameters: [
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' },
            { label: 'spritetpe', documentation: '' },
            { label: 'URL', documentation: '' },
            { label: 'target', documentation: '' },
            { label: 'params', documentation: '' },
            { label: 'scale', documentation: '' },
            { label: 'alpha', documentation: '' }
        ],
        signature: '(x, y, spritetpe, URL, target, params, scale, alpha)'
    },
	clickable_change: {
        description: '[Function]',
        parameters: [
            { label: 'buttonid', documentation: '' },
            { label: 'spritetpe', documentation: '' },
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' }
        ],
        signature: '(buttonid, spritetpe, x, y)'
    },
	clickable_change_ext: {
        description: '[Function]',
        parameters: [
            { label: 'buttonid', documentation: '' },
            { label: 'spritetpe', documentation: '' },
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' },
            { label: 'scale', documentation: '' },
            { label: 'alpha', documentation: '' }
        ],
        signature: '(buttonid, spritetpe, x, y, scale, alpha)'
    },
	clickable_delete: {
        description: '[Function]',
        parameters: [
            { label: 'buttonid', documentation: '' }
        ],
        signature: '(buttonid)'
    },
	clickable_exists: {
        description: '[Function]',
        parameters: [
            { label: 'index', documentation: '' }
        ],
        signature: '(index)'
    },
	clickable_set_style: {
        description: '[Function]',
        parameters: [
            { label: 'buttonid', documentation: '' },
            { label: 'map', documentation: '' }
        ],
        signature: '(buttonid, map)'
    },
	clipboard_get_text: {
        description: '[Function]'
    },
	clipboard_has_text: {
        description: '[Function]'
    },
	clipboard_set_text: {
        description: '[Function]',
        parameters: [
            { label: 'str', documentation: '' }
        ],
        signature: '(str)'
    },
	cloud_file_save: {
        description: '[Function]',
        parameters: [
            { label: 'filename', documentation: '' },
            { label: 'description', documentation: '' }
        ],
        signature: '(filename, description)'
    },
	cloud_string_save: {
        description: '[Function]',
        parameters: [
            { label: 'data', documentation: '' },
            { label: 'description', documentation: '' }
        ],
        signature: '(data, description)'
    },
	cloud_synchronise: {
        description: '[Function]'
    },
	code_is_compiled: {
        description: '[Function]'
    },
	collision_circle: {
        description: '[Function]',
        parameters: [
            { label: 'x1', documentation: '' },
            { label: 'y1', documentation: '' },
            { label: 'radius', documentation: '' },
            { label: 'obj', documentation: '' },
            { label: 'prec', documentation: '' },
            { label: 'notme', documentation: '' }
        ],
        signature: '(x1, y1, radius, obj, prec, notme)'
    },
	collision_ellipse: {
        description: '[Function]',
        parameters: [
            { label: 'x1', documentation: '' },
            { label: 'y1', documentation: '' },
            { label: 'x2', documentation: '' },
            { label: 'y2', documentation: '' },
            { label: 'obj', documentation: '' },
            { label: 'prec', documentation: '' },
            { label: 'notme', documentation: '' }
        ],
        signature: '(x1, y1, x2, y2, obj, prec, notme)'
    },
	collision_line: {
        description: '[Function]',
        parameters: [
            { label: 'x1', documentation: '' },
            { label: 'y1', documentation: '' },
            { label: 'x2', documentation: '' },
            { label: 'y2', documentation: '' },
            { label: 'obj', documentation: '' },
            { label: 'prec', documentation: '' },
            { label: 'notme', documentation: '' }
        ],
        signature: '(x1, y1, x2, y2, obj, prec, notme)'
    },
	collision_point: {
        description: '[Function]',
        parameters: [
            { label: 'x1', documentation: '' },
            { label: 'y1', documentation: '' },
            { label: 'x2', documentation: '' },
            { label: 'y2', documentation: '' },
            { label: 'obj', documentation: '' },
            { label: 'prec', documentation: '' },
            { label: 'notme', documentation: '' }
        ],
        signature: '(x1, y1, x2, y2, obj, prec, notme)'
    },
	collision_rectangle: {
        description: '[Function]',
        parameters: [
            { label: 'x1', documentation: '' },
            { label: 'y1', documentation: '' },
            { label: 'x2', documentation: '' },
            { label: 'y2', documentation: '' },
            { label: 'obj', documentation: '' },
            { label: 'prec', documentation: '' },
            { label: 'notme', documentation: '' }
        ],
        signature: '(x1, y1, x2, y2, obj, prec, notme)'
    },
    color_get_blue: {
        description: '[Function]',
        parameters: [
            { label: 'col', documentation: '' }
        ],
        signature: '(col)'
    },
	color_get_green: {
        description: '[Function]',
        parameters: [
            { label: 'col', documentation: '' }
        ],
        signature: '(col)'
    },
	color_get_hue: {
        description: '[Function]',
        parameters: [
            { label: 'col', documentation: '' }
        ],
        signature: '(col)'
    },
	color_get_red: {
        description: '[Function]',
        parameters: [
            { label: 'col', documentation: '' }
        ],
        signature: '(col)'
    },
	color_get_saturation: {
        description: '[Function]',
        parameters: [
            { label: 'col', documentation: '' }
        ],
        signature: '(col)'
    },
	color_get_value: {
        description: '[Function]',
        parameters: [
            { label: 'col', documentation: '' }
        ],
        signature: '(col)'
    },
	colour_get_blue: {
        description: '[Function]',
        parameters: [
            { label: 'col', documentation: '' }
        ],
        signature: '(col)'
    },
	colour_get_green: {
        description: '[Function]',
        parameters: [
            { label: 'col', documentation: '' }
        ],
        signature: '(col)'
    },
	colour_get_hue: {
        description: '[Function]',
        parameters: [
            { label: 'col', documentation: '' }
        ],
        signature: '(col)'
    },
	colour_get_red: {
        description: '[Function]',
        parameters: [
            { label: 'col', documentation: '' }
        ],
        signature: '(col)'
    },
	colour_get_saturation: {
        description: '[Function]',
        parameters: [
            { label: 'col', documentation: '' }
        ],
        signature: '(col)'
    },
	colour_get_value: {
        description: '[Function]',
        parameters: [
            { label: 'col', documentation: '' }
        ],
        signature: '(col)'
    },
	cos: {
        description: '[Function]',
        parameters: [
            { label: 'radian_angle', documentation: '' }
        ],
        signature: '(radian_angle)'
    },
	d3d_draw_block: {
        description: '[Function]',
        parameters: [
            { label: 'x1', documentation: '' },
            { label: 'y1', documentation: '' },
            { label: 'z1', documentation: '' },
            { label: 'x2', documentation: '' },
            { label: 'y2', documentation: '' },
            { label: 'z2', documentation: '' },
            { label: 'texid', documentation: '' },
            { label: 'hrepeat', documentation: '' },
            { label: 'vrepeat', documentation: '' }
        ],
        signature: '(x1, y1, z1, x2, y2, z2, texid, hrepeat, vrepeat)'
    },
	d3d_draw_cone: {
        description: '[Function]',
        parameters: [
            { label: 'x1', documentation: '' },
            { label: 'y1', documentation: '' },
            { label: 'z1', documentation: '' },
            { label: 'x2', documentation: '' },
            { label: 'y2', documentation: '' },
            { label: 'z2', documentation: '' },
            { label: 'texid', documentation: '' },
            { label: 'hrepeat', documentation: '' },
            { label: 'vrepeat', documentation: '' },
            { label: 'closed', documentation: '' },
            { label: 'steps', documentation: '' }
        ],
        signature: '(x1, y1, z1, x2, y2, z2, texid, hrepeat, vrepeat, closed, steps)'
    },
	d3d_draw_cylinder: {
        description: '[Function]',
        parameters: [
            { label: 'x1', documentation: '' },
            { label: 'y1', documentation: '' },
            { label: 'z1', documentation: '' },
            { label: 'x2', documentation: '' },
            { label: 'y2', documentation: '' },
            { label: 'z2', documentation: '' },
            { label: 'texid', documentation: '' },
            { label: 'hrepeat', documentation: '' },
            { label: 'vrepeat', documentation: '' },
            { label: 'closed', documentation: '' },
            { label: 'steps', documentation: '' }
        ],
        signature: '(x1, y1, z1, x2, y2, z2, texid, hrepeat, vrepeat, closed, steps)'
    },
	d3d_draw_ellipsoid: {
        description: '[Function]',
        parameters: [
            { label: 'x1', documentation: '' },
            { label: 'y1', documentation: '' },
            { label: 'z1', documentation: '' },
            { label: 'x2', documentation: '' },
            { label: 'y2', documentation: '' },
            { label: 'z2', documentation: '' },
            { label: 'texid', documentation: '' },
            { label: 'hrepeat', documentation: '' },
            { label: 'vrepeat', documentation: '' },
            { label: 'closed', documentation: '' },
            { label: 'steps', documentation: '' }
        ],
        signature: '(x1, y1, z1, x2, y2, z2, texid, hrepeat, vrepeat, closed, steps)'
    },
	d3d_draw_floor: {
        description: '[Function]',
        parameters: [
            { label: 'x1', documentation: '' },
            { label: 'y1', documentation: '' },
            { label: 'z1', documentation: '' },
            { label: 'x2', documentation: '' },
            { label: 'y2', documentation: '' },
            { label: 'z2', documentation: '' },
            { label: 'texid', documentation: '' },
            { label: 'hrepeat', documentation: '' },
            { label: 'vrepeat', documentation: '' }
        ],
        signature: '(x1, y1, z1, x2, y2, z2, texid, hrepeat, vrepeat)'
    },
	d3d_draw_wall: {
        description: '[Function]',
        parameters: [
            { label: 'x1', documentation: '' },
            { label: 'y1', documentation: '' },
            { label: 'z1', documentation: '' },
            { label: 'x2', documentation: '' },
            { label: 'y2', documentation: '' },
            { label: 'z2', documentation: '' },
            { label: 'texid', documentation: '' },
            { label: 'hrepeat', documentation: '' },
            { label: 'vrepeat', documentation: '' }
        ],
        signature: '(x1, y1, z1, x2, y2, z2, texid, hrepeat, vrepeat)'
    },
	d3d_end: {
        description: '[Function]'
    },
	d3d_light_define_ambient: {
        description: '[Function]',
        parameters: [
            { label: 'col', documentation: '' }
        ],
        signature: '(col)'
    },
	d3d_light_define_direction: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' },
            { label: 'dx', documentation: '' },
            { label: 'dy', documentation: '' },
            { label: 'dz', documentation: '' },
            { label: 'col', documentation: '' }
        ],
        signature: '(ind, dx, dy, dz, col)'
    },
	d3d_light_define_point: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' },
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' },
            { label: 'z', documentation: '' },
            { label: 'range', documentation: '' },
            { label: 'col', documentation: '' }
        ],
        signature: '(ind, x, y, z, range, col)'
    },
	d3d_light_enable: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' },
            { label: 'enable', documentation: '' }
        ],
        signature: '(ind, enable)'
    },
	d3d_model_block: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' },
            { label: 'x1', documentation: '' },
            { label: 'y1', documentation: '' },
            { label: 'z1', documentation: '' },
            { label: 'x2', documentation: '' },
            { label: 'y2', documentation: '' },
            { label: 'z2', documentation: '' },
            { label: 'hrepeat', documentation: '' },
            { label: 'vrepeat', documentation: '' }
        ],
        signature: '(ind, x1, y1, z1, x2, y2, z2, hrepeat, vrepeat)'
    },
	d3d_model_clear: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' }
        ],
        signature: '(ind)'
    },
	d3d_model_cone: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' },
            { label: 'x1', documentation: '' },
            { label: 'y1', documentation: '' },
            { label: 'z1', documentation: '' },
            { label: 'x2', documentation: '' },
            { label: 'y2', documentation: '' },
            { label: 'z2', documentation: '' },
            { label: 'hrepeat', documentation: '' },
            { label: 'vrepeat', documentation: '' },
            { label: 'closed', documentation: '' },
            { label: 'steps', documentation: '' }
        ],
        signature: '(ind, x1, y1, z1, x2, y2, z2, hrepeat, vrepeat, closed, steps)'
    },
	d3d_model_create: {
        description: '[Function]'
    },
	d3d_model_cylinder: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' },
            { label: 'x1', documentation: '' },
            { label: 'y1', documentation: '' },
            { label: 'z1', documentation: '' },
            { label: 'x2', documentation: '' },
            { label: 'y2', documentation: '' },
            { label: 'z2', documentation: '' },
            { label: 'hrepeat', documentation: '' },
            { label: 'vrepeat', documentation: '' },
            { label: 'closed', documentation: '' },
            { label: 'steps', documentation: '' }
        ],
        signature: '(ind, x1, y1, z1, x2, y2, z2, hrepeat, vrepeat, closed, steps)'
    },
	d3d_model_destroy: {
        description: '[Function]'
    },
	d3d_model_draw: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' },
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' },
            { label: 'z', documentation: '' },
            { label: 'texid', documentation: '' }
        ],
        signature: '(ind, x, y, z, texid)'
    },
	d3d_model_ellipsoid: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' },
            { label: 'x1', documentation: '' },
            { label: 'y1', documentation: '' },
            { label: 'z1', documentation: '' },
            { label: 'x2', documentation: '' },
            { label: 'y2', documentation: '' },
            { label: 'z2', documentation: '' },
            { label: 'hrepeat', documentation: '' },
            { label: 'vrepeat', documentation: '' },
            { label: 'closed', documentation: '' }
        ],
        signature: '(ind, x1, y1, z1, x2, y2, z2, hrepeat, vrepeat, steps)'
    },
	d3d_model_floor: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' },
            { label: 'x1', documentation: '' },
            { label: 'y1', documentation: '' },
            { label: 'z1', documentation: '' },
            { label: 'x2', documentation: '' },
            { label: 'y2', documentation: '' },
            { label: 'z2', documentation: '' },
            { label: 'hrepeat', documentation: '' },
            { label: 'vrepeat', documentation: '' }
        ],
        signature: '(ind, x1, y1, z1, x2, y2, z2, hrepeat, vrepeat)'
    },
	d3d_model_load: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' },
            { label: 'fname', documentation: '' }
        ],
        signature: '(ind, fname)'
    },
	d3d_model_primitive_begin: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' },
            { label: 'kind', documentation: '' }
        ],
        signature: '(ind, kind)'
    },
	d3d_model_primitive_end: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' }
        ],
        signature: '(ind)'
    },
	d3d_model_save: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' },
            { label: 'fname', documentation: '' }
        ], 
        signature: '(ind, fname)'
    },
	d3d_model_vertex: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' },
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' },
            { label: 'z', documentation: '' }
        ],
        signature: '(ind, x, y, z)'
    },
	d3d_model_vertex_color: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' },
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' },
            { label: 'z', documentation: '' },
            { label: 'col', documentation: '' },
            { label: 'alpha', documentation: '' }
        ],
        signature: '(ind, x, y, z, col, alpha)'
    },
	d3d_model_vertex_colour: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' },
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' },
            { label: 'z', documentation: '' },
            { label: 'col', documentation: '' },
            { label: 'alpha', documentation: '' }
        ],
        signature: '(ind, x, y, z, col, alpha)'
    },
	d3d_model_vertex_normal: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' },
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' },
            { label: 'z', documentation: '' },
            { label: 'nx', documentation: '' },
            { label: 'ny', documentation: '' },
            { label: 'nz', documentation: '' }
        ],
        signature: '(ind, x, y, z, nx, ny, nz)'
    },
	d3d_model_vertex_normal_color: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' },
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' },
            { label: 'z', documentation: '' },
            { label: 'nx', documentation: '' },
            { label: 'ny', documentation: '' },
            { label: 'nz', documentation: '' },
            { label: 'col', documentation: '' },
            { label: 'alpha', documentation: '' }
        ],
        signature: '(ind, x, y, z, nx, ny, nz, col, alpha)'
    },
	d3d_model_vertex_normal_colour: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' },
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' },
            { label: 'z', documentation: '' },
            { label: 'nx', documentation: '' },
            { label: 'ny', documentation: '' },
            { label: 'nz', documentation: '' },
            { label: 'col', documentation: '' },
            { label: 'alpha', documentation: '' }
        ],
        signature: '(ind, x, y, z, nx, ny, nz, col, alpha)'
    },
	d3d_model_vertex_normal_texture: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' },
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' },
            { label: 'z', documentation: '' },
            { label: 'nx', documentation: '' },
            { label: 'ny', documentation: '' },
            { label: 'nz', documentation: '' },
            { label: 'xtex', documentation: '' },
            { label: 'ytex', documentation: '' }
        ],
        signature: '(ind, x, y, z, nx, ny, nz, xtex, ytex)'
    },
	d3d_model_vertex_normal_texture_color: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' },
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' },
            { label: 'z', documentation: '' },
            { label: 'nx', documentation: '' },
            { label: 'ny', documentation: '' },
            { label: 'nz', documentation: '' },
            { label: 'xtex', documentation: '' },
            { label: 'ytex', documentation: '' },
            { label: 'col', documentation: '' },
            { label: 'alpha', documentation: '' }
        ],
        signature: '(ind, x, y, z, nx, ny, nz, xtex, ytex, col, alpha)'
    },
	d3d_model_vertex_normal_texture_colour: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' },
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' },
            { label: 'z', documentation: '' },
            { label: 'nx', documentation: '' },
            { label: 'ny', documentation: '' },
            { label: 'nz', documentation: '' },
            { label: 'xtex', documentation: '' },
            { label: 'ytex', documentation: '' },
            { label: 'col', documentation: '' },
            { label: 'alpha', documentation: '' }
        ],
        signature: '(ind, x, y, z, nx, ny, nz, xtex, ytex, col, alpha)'
    },
	d3d_model_vertex_texture: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' },
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' },
            { label: 'z', documentation: '' },
            { label: 'xtex', documentation: '' },
            { label: 'ytex', documentation: '' }
        ],
        signature: '(ind, x, y, z, xtex, ytex)'
    },
	d3d_model_vertex_texture_color: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' },
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' },
            { label: 'z', documentation: '' },
            { label: 'xtex', documentation: '' },
            { label: 'ytex', documentation: '' },
            { label: 'col', documentation: '' },
            { label: 'alpha', documentation: '' }
        ],
        signature: '(ind, x, y, z, xtex, ytex, col, alpha)'
    },
	d3d_model_vertex_texture_colour: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' },
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' },
            { label: 'z', documentation: '' },
            { label: 'xtex', documentation: '' },
            { label: 'ytex', documentation: '' },
            { label: 'col', documentation: '' },
            { label: 'alpha', documentation: '' }
        ],
        signature: '(ind, x, y, z, xtex, ytex, col, alpha)'
    },
	d3d_model_wall: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' },
            { label: 'x1', documentation: '' },
            { label: 'y1', documentation: '' },
            { label: 'z1', documentation: '' },
            { label: 'x2', documentation: '' },
            { label: 'y2', documentation: '' },
            { label: 'z2', documentation: '' },
            { label: 'hrepeat', documentation: '' },
            { label: 'vrepeat', documentation: '' }
        ],
        signature: '(ind, x1, y1, z1, x2, y2, z2, hrepeat, vrepeat)'
    },
	d3d_primitive_begin: {
        description: '[Function]',
        parameters: [
            { label: 'kind', documentation: '' }
        ],
        signature: '(kind)'
    },
	d3d_primitive_begin_texture: {
        description: '[Function]',
        parameters: [
            { label: 'kind', documentation: '' },
            { label: 'texid', documentation: '' }
        ],
        signature: '(kind, texid)'
    },
	d3d_primitive_end: {
        description: '[Function]'
    },
	d3d_set_culling: {
        description: '[Function]',
        parameters: [
            { label: 'cull', documentation: '' }
        ],
        signature: '(cull)'
    },
	d3d_set_depth: {
        description: '[Function]',
        parameters: [
            { label: 'depth', documentation: '' }
        ],
        signature: '(depth)'
    },
	d3d_set_fog: {
        description: '[Function]',
        parameters: [
            { label: 'enable', documentation: '' },
            { label: 'colour', documentation: '' },
            { label: 'start', documentation: '' },
            { label: 'end', documentation: '' }
        ],
        signature: '(enable, colour, start, end)'
    },
	d3d_set_hidden: {
        description: '[Function]',
        parameters: [
            { label: 'hidden', documentation: '' }
        ],
        signature: '(hidden)'
    },
	d3d_set_lighting: {
        description: '[Function]',
        parameters: [
            { label: 'enable', documentation: '' }
        ],
        signature: '(enable)'
    },
	d3d_set_perspective: {
        description: '[Function]',
        parameters: [
            { label: 'enable', documentation: '' }
        ],
        signature: '(enable)'
    },
	d3d_set_projection: {
        description: '[Function]',
        parameters: [
            { label: 'xform', documentation: '' },
            { label: 'yform', documentation: '' },
            { label: 'zform', documentation: '' },
            { label: 'xto', documentation: '' },
            { label: 'yto', documentation: '' },
            { label: 'zto', documentation: '' },
            { label: 'xup', documentation: '' },
            { label: 'yup', documentation: '' },
            { label: 'zup', documentation: '' }
        ],
        signature: '(xfrom, yfrom, zfrom, xto, yto, zto, xup, yup, zup)'
    },
	d3d_set_projection_ext: {
        description: '[Function]',
        parameters: [
            { label: 'xform', documentation: '' },
            { label: 'yform', documentation: '' },
            { label: 'zform', documentation: '' },
            { label: 'xto', documentation: '' },
            { label: 'yto', documentation: '' },
            { label: 'zto', documentation: '' },
            { label: 'xup', documentation: '' },
            { label: 'yup', documentation: '' },
            { label: 'zup', documentation: '' },
            { label: 'angle', documentation: '' },
            { label: 'aspect', documentation: '' },
            { label: 'znear', documentation: '' },
            { label: 'zfar', documentation: '' }
        ],
        signature: '(xfrom, yfrom, zfrom, xto, yto, zto, xup, yup, zup, angle, aspect, znear, zfar)'
    },
	d3d_set_projection_ortho: {
        description: '[Function]',
        parameters: [
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' },
            { label: 'w', documentation: '' },
            { label: 'h', documentation: '' },
            { label: 'angle', documentation: '' }
        ],
        signature: '(x, y, w, h, angle)'
    },
	d3d_set_projection_perspective: {
        description: '[Function]',
        parameters: [
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' },
            { label: 'w', documentation: '' },
            { label: 'h', documentation: '' },
            { label: 'angle', documentation: '' }
        ],
        signature: '(x, y, w, h, angle)'
    },
	d3d_set_shading: {
        description: '[Function]',
        parameters: [
            { label: 'smooth', documentation: '' }
        ],
        signature: '(smooth)'
    },
	d3d_set_zwriteenable: {
        description: '[Function]',
        parameters: [
            { label: 'on_off', documentation: '' }
        ],
        signature: '(on_off)'
    },
	d3d_start: {
        description: '[Function]'
    },
	d3d_transform_add_rotation_axis: {
        description: '[Function]',
        parameters: [
            { label: 'xa', documentation: '' },
            { label: 'ya', documentation: '' },
            { label: 'za', documentation: '' },
            { label: 'angle', documentation: '' }
        ],
        signature: '(xa, ya, za, angle)'
    },
	d3d_transform_add_rotation_x: {
        description: '[Function]',
        parameters: [
            { label: 'angle', documentation: '' }
        ],
        signature: '(angle)'
    },
	d3d_transform_add_rotation_y: {
        description: '[Function]',
        parameters: [
            { label: 'angle', documentation: '' }
        ],
        signature: '(angle)'
    },
	d3d_transform_add_rotation_z: {
        description: '[Function]',
        parameters: [
            { label: 'angle', documentation: '' }
        ],
        signature: '(angle)'
    },
	d3d_transform_add_scaling: {
        description: '[Function]',
        parameters: [
            { label: 'xs', documentation: '' },
            { label: 'ys', documentation: '' },
            { label: 'zs', documentation: '' }
        ],
        signature: '(xs, ys, zs)'
    },
	d3d_transform_add_translation: {
        description: '[Function]',
        parameters: [
            { label: 'xt', documentation: '' },
            { label: 'yt', documentation: '' },
            { label: 'zt', documentation: '' }
        ],
        signature: '(xt, yt, zt)'
    },
	d3d_transform_set_identity: {
        description: '[Function]'
    },
	d3d_transform_set_rotation_axis: {
        description: '[Function]',
        parameters: [
            { label: 'xa', documentation: '' },
            { label: 'ya', documentation: '' },
            { label: 'za', documentation: '' },
            { label: 'angle', documentation: '' }
        ],
        signature: '(xa, ya, za, angle)'
    },
	d3d_transform_set_rotation_x: {
        description: '[Function]',
        parameters: [
            { label: 'angle', documentation: '' }
        ],
        signature: '(angle)'
    },
	d3d_transform_set_rotation_y: {
        description: '[Function]',
        parameters: [
            { label: 'angle', documentation: '' }
        ],
        signature: '(angle)'
    },
	d3d_transform_set_rotation_z: {
        description: '[Function]',
        parameters: [
            { label: 'angle', documentation: '' }
        ],
        signature: '(angle)'
    },
	d3d_transform_set_scaling: {
        description: '[Function]',
        parameters: [
            { label: 'xs', documentation: '' },
            { label: 'ys', documentation: '' },
            { label: 'zs', documentation: '' }
        ],
        signature: '(xs, ys, zs)'
    },
	d3d_transform_set_translation: {
        description: '[Function]',
        parameters: [
            { label: 'xt', documentation: '' },
            { label: 'yt', documentation: '' },
            { label: 'zt', documentation: '' }
        ],
        signature: '(xt, yt, zt)'
    },
	d3d_transform_stack_clear: {
        description: '[Function]'
    },
	d3d_transform_stack_discard: {
        description: '[Function]'
    },
	d3d_transform_stack_empty: {
        description: '[Function]'
    },
	d3d_transform_stack_pop: {
        description: '[Function]'
    },
	d3d_transform_stack_push: {
        description: '[Function]'
    },
	d3d_transform_stack_top: {
        description: '[Function]'
    },
	d3d_transform_vertex: {
        description: '[Function]',
        parameters: [
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' },
            { label: 'z', documentation: '' }
        ],
        signature: '(x, y, z)'
    },
	d3d_vertex: {
        description: '[Function]',
        parameters: [
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' },
            { label: 'z', documentation: '' }
        ],
        signature: '(x, y, z)'
    },
	d3d_vertex_color: {
        description: '[Function]',
        parameters: [
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' },
            { label: 'z', documentation: '' },
            { label: 'col', documentation: '' },
            { label: 'alpha', documentation: '' }
        ],
        signature: '(x, y, z, col, alpha)'
    },
	d3d_vertex_colour: {
        description: '[Function]',
        parameters: [
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' },
            { label: 'z', documentation: '' },
            { label: 'col', documentation: '' },
            { label: 'alpha', documentation: '' }
        ],
        signature: '(x, y, z, col, alpha)'
    },
	d3d_vertex_normal: {
        description: '[Function]',
        parameters: [
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' },
            { label: 'z', documentation: '' },
            { label: 'nx', documentation: '' },
            { label: 'ny', documentation: '' },
            { label: 'nz', documentation: '' }
        ],
        signature: '(x, y, z, nx, ny, nz)'
    },
	d3d_vertex_normal_color: {
        description: '[Function]',
        parameters: [
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' },
            { label: 'z', documentation: '' },
            { label: 'nx', documentation: '' },
            { label: 'ny', documentation: '' },
            { label: 'nz', documentation: '' },
            { label: 'col', documentation: '' },
            { label: 'alpha', documentation: '' }
        ],
        signature: '(x, y, z, nx, ny, nz, col, alpha)'
    },
	d3d_vertex_normal_colour: {
        description: '[Function]',
        parameters: [
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' },
            { label: 'z', documentation: '' },
            { label: 'nx', documentation: '' },
            { label: 'ny', documentation: '' },
            { label: 'nz', documentation: '' },
            { label: 'col', documentation: '' },
            { label: 'alpha', documentation: '' }
        ],
        signature: '(x, y, z, nx, ny, nz, col, alpha)'
    },
	d3d_vertex_normal_texture: {
        description: '[Function]',
        parameters: [
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' },
            { label: 'z', documentation: '' },
            { label: 'nx', documentation: '' },
            { label: 'ny', documentation: '' },
            { label: 'nz', documentation: '' },
            { label: 'xtex', documentation: '' },
            { label: 'ytex', documentation: '' }
        ],
        signature: '(x, y, z, nx, ny, nz, xtex, ytex)'
    },
	d3d_vertex_normal_texture_color: {
        description: '[Function]',
        parameters: [
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' },
            { label: 'z', documentation: '' },
            { label: 'nx', documentation: '' },
            { label: 'ny', documentation: '' },
            { label: 'nz', documentation: '' },
            { label: 'xtex', documentation: '' },
            { label: 'ytex', documentation: '' },
            { label: 'col', documentation: '' },
            { label: 'alpha', documentation: '' }
        ],
        signature: '(x, y, z, nx, ny, nz, xtex, ytex, col, alpha)'
    },
	d3d_vertex_normal_texture_colour: {
        description: '[Function]',
        parameters: [
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' },
            { label: 'z', documentation: '' },
            { label: 'nx', documentation: '' },
            { label: 'ny', documentation: '' },
            { label: 'nz', documentation: '' },
            { label: 'xtex', documentation: '' },
            { label: 'ytex', documentation: '' },
            { label: 'col', documentation: '' },
            { label: 'alpha', documentation: '' }
        ],
        signature: '(x, y, z, nx, ny, nz, xtex, ytex, col, alpha)'
    },
	d3d_vertex_texture: {
        description: '[Function]',
        parameters: [
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' },
            { label: 'z', documentation: '' },
            { label: 'xtex', documentation: '' },
            { label: 'ytex', documentation: '' }
        ],
        signature: '(x, y, z, xtex, ytex)'
    },
	d3d_vertex_texture_color: {
        description: '[Function]',
        parameters: [
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' },
            { label: 'z', documentation: '' },
            { label: 'xtex', documentation: '' },
            { label: 'ytex', documentation: '' },
            { label: 'col', documentation: '' },
            { label: 'alpha', documentation: '' }
        ],
        signature: '(x, y, z, xtex, ytex, col, alpha)'
    },
	d3d_vertex_texture_colour: {
        description: '[Function]',
        parameters: [
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' },
            { label: 'z', documentation: '' },
            { label: 'xtex', documentation: '' },
            { label: 'ytex', documentation: '' },
            { label: 'col', documentation: '' },
            { label: 'alpha', documentation: '' }
        ],
        signature: '(x, y, z, xtex, ytex, col, alpha)'
    },
	darccos: {
        description: '[Function]',
        parameters: [
            { label: 'x', documentation: '' }
        ],
        signature: '(x)'
    },
	darcsin: {
        description: '[Function]',
        parameters: [
            { label: 'x', documentation: '' }
        ],
        signature: '(x)'
    },
	darctan: {
        description: '[Function]',
        parameters: [
            { label: 'x', documentation: '' }
        ],
        signature: '(x)'
    },
	darctan2: {
        description: '[Function]',
        parameters: [
            { label: 'y', documentation: '' },
            { label: 'x', documentation: '' }
        ],
        signature: '(y, x)'
    },
	date_compare_date: {
        description: '[Function]',
        parameters: [
            { label: 'date1', documentation: '' },
            { label: 'date2', documentation: '' }
        ],
        signature: '(date1, date2)'
    },
	date_compare_datetime: {
        description: '[Function]',
        parameters: [
            { label: 'date1', documentation: '' },
            { label: 'date2', documentation: '' }
        ],
        signature: '(date1, date2)'
    },
	date_compare_time: {
        description: '[Function]',
        parameters: [
            { label: 'date1', documentation: '' },
            { label: 'date2', documentation: '' }
        ],
        signature: '(date1, date2)'
    },
	date_create_datetime: {
        description: '[Function]',
        parameters: [
            { label: 'year', documentation: '' },
            { label: 'month', documentation: '' },
            { label: 'day', documentation: '' },
            { label: 'hour', documentation: '' },
            { label: 'minute', documentation: '' },
            { label: 'second', documentation: '' }
        ],
        signature: '(year, month, day, hour, minute, second)'
    },
	date_current_datetime: {
        description: '[Function]'
    },
	date_datetime_string: {
        description: '[Function]',
        parameters: [
            { label: 'date', documentation: '' }
        ],
        signature: '(date)'
    },
	date_date_of: {
        description: '[Function]',
        parameters: [
            { label: 'date', documentation: '' }
        ],
        signature: '(date)'
    },
	date_date_string: {
        description: '[Function]',
        parameters: [
            { label: 'date', documentation: '' }
        ],
        signature: '(date)'
    },
	date_days_in_month: {
        description: '[Function]',
        parameters: [
            { label: 'date', documentation: '' }
        ],
        signature: '(date)'
    },
	date_days_in_year: {
        description: '[Function]',
        parameters: [
            { label: 'date', documentation: '' }
        ],
        signature: '(date)'
    },
	date_day_span: {
        description: '[Function]',
        parameters: [
            { label: 'date1', documentation: '' },
            { label: 'date2', documentation: '' }
        ],
        signature: '(date1, date2)'
    },
	date_get_day: {
        description: '[Function]',
        parameters: [
            { label: 'date', documentation: '' }
        ],
        signature: '(date)'
    },
	date_get_day_of_year: {
        description: '[Function]',
        parameters: [
            { label: 'date', documentation: '' }
        ],
        signature: '(date)'
    },
	date_get_hour: {
        description: '[Function]',
        parameters: [
            { label: 'date', documentation: '' }
        ],
        signature: '(date)'
    },
	date_get_hour_of_year: {
        description: '[Function]',
        parameters: [
            { label: 'date', documentation: '' }
        ],
        signature: '(date)'
    },
	date_get_minute: {
        description: '[Function]',
        parameters: [
            { label: 'date', documentation: '' }
        ],
        signature: '(date)'
    },
	date_get_minute_of_year: {
        description: '[Function]',
        parameters: [
            { label: 'date', documentation: '' }
        ],
        signature: '(date)'
    },
	date_get_month: {
        description: '[Function]',
        parameters: [
            { label: 'date', documentation: '' }
        ],
        signature: '(date)'
    },
	date_get_second: {
        description: '[Function]',
        parameters: [
            { label: 'date', documentation: '' }
        ],
        signature: '(date)'
    },
	date_get_second_of_year: {
        description: '[Function]',
        parameters: [
            { label: 'date', documentation: '' }
        ],
        signature: '(date)'
    },
	date_get_timezone: {
        description: '[Function]'
    },
	date_get_week: {
        description: '[Function]',
        parameters: [
            { label: 'date', documentation: '' }
        ],
        signature: '(date)'
    },
	date_get_weekday: {
        description: '[Function]',
        parameters: [
            { label: 'date', documentation: '' }
        ],
        signature: '(date)'
    },
	date_get_year: {
        description: '[Function]',
        parameters: [
            { label: 'date', documentation: '' }
        ],
        signature: '(date)'
    },
	date_hour_span: {
        description: '[Function]',
        parameters: [
            { label: 'date1', documentation: '' },
            { label: 'date2', documentation: '' }
        ],
        signature: '(date1, date2)'
    },
	date_inc_day: {
        description: '[Function]',
        parameters: [
            { label: 'date', documentation: '' },
            { label: 'amount', documentation: '' }
        ],
        signature: '(date, amount)'
    },
	date_inc_hour: {
        description: '[Function]',
        parameters: [
            { label: 'date', documentation: '' },
            { label: 'amount', documentation: '' }
        ],
        signature: '(date, amount)'
    },
	date_inc_minute: {
        description: '[Function]',
        parameters: [
            { label: 'date', documentation: '' },
            { label: 'amount', documentation: '' }
        ],
        signature: '(date, amount)'
    },
	date_inc_month: {
        description: '[Function]',
        parameters: [
            { label: 'date', documentation: '' },
            { label: 'amount', documentation: '' }
        ],
        signature: '(date, amount)'
    },
	date_inc_second: {
        description: '[Function]',
        parameters: [
            { label: 'date', documentation: '' },
            { label: 'amount', documentation: '' }
        ],
        signature: '(date, amount)'
    },
	date_inc_week: {
        description: '[Function]',
        parameters: [
            { label: 'date', documentation: '' },
            { label: 'amount', documentation: '' }
        ],
        signature: '(date, amount)'
    },
	date_inc_year: {
        description: '[Function]',
        parameters: [
            { label: 'date', documentation: '' },
            { label: 'amount', documentation: '' }
        ],
        signature: '(date, amount)'
    },
	date_is_today: {
        description: '[Function]',
        parameters: [
            { label: 'date', documentation: '' }
        ],
        signature: '(date)'
    },
	date_leap_year: {
        description: '[Function]',
        parameters: [
            { label: 'date', documentation: '' }
        ],
        signature: '(date)'
    },
	date_minute_span: {
        description: '[Function]',
        parameters: [
            { label: 'date1', documentation: '' },
            { label: 'date2', documentation: '' }
        ],
        signature: '(date1, date2)'
    },
	date_month_span: {
        description: '[Function]',
        parameters: [
            { label: 'date1', documentation: '' },
            { label: 'date2', documentation: '' }
        ],
        signature: '(date1, date2)'
    },
	date_second_span: {
        description: '[Function]',
        parameters: [
            { label: 'date1', documentation: '' },
            { label: 'date2', documentation: '' }
        ],
        signature: '(date1, date2)'
    },
	date_set_timezone: {
        description: '[Function]',
        parameters: [
            { label: 'timezone', documentation: '' }
        ],
        signature: '(timezone)'
    },
	date_time_of: {
        description: '[Function]',
        parameters: [
            { label: 'date', documentation: '' }
        ],
        signature: '(date)'
    },
	date_time_string: {
        description: '[Function]',
        parameters: [
            { label: 'date', documentation: '' }
        ],
        signature: '(date)'
    },
	date_valid_datetime: {
        description: '[Function]',
        parameters: [
            { label: 'year', documentation: '' },
            { label: 'month', documentation: '' },
            { label: 'day', documentation: '' },
            { label: 'hour', documentation: '' },
            { label: 'minute', documentation: '' },
            { label: 'second', documentation: '' }
        ],
        signature: '(year, month, day, hour, minute, second)'
    },
	date_week_span: {
        description: '[Function]',
        parameters: [
            { label: 'date1', documentation: '' },
            { label: 'date2', documentation: '' }
        ],
        signature: '(date1, date2)'
    },
	date_year_span: {
        description: '[Function]',
        parameters: [
            { label: 'date1', documentation: '' },
            { label: 'date2', documentation: '' }
        ],
        signature: '(date1, date2)'
    },
	dcos: {
        description: '[Function]',
        parameters: [
            { label: 'degree_angle', documentation: '' }
        ],
        signature: '(degree_angle)'
    },
	debug_event: {
        description: '[Function]',
        parameters: [
            { label: 'str', documentation: '' }
        ],
        signature: '(str)'
    },
	degtorad: {
        description: '[Function]',
        parameters: [
            { label: 'x', documentation: '' }
        ],
        signature: '(x)'
    },
	device_get_tilt_x: {
        description: '[Function]'
    },
	device_get_tilt_y: {
        description: '[Function]'
    },
	device_get_tilt_z: {
        description: '[Function]'
    },
	device_is_keypad_open: {
        description: '[Function]'
    },
	device_mouse_check_button: {
        description: '[Function]',
        parameters: [
            { label: 'device', documentation: '' },
            { label: 'button', documentation: '' }
        ],
        signature: '(device, button)'
    },
	device_mouse_check_button_pressed: {
        description: '[Function]',
        parameters: [
            { label: 'device', documentation: '' },
            { label: 'button', documentation: '' }
        ],
        signature: '(device, button)'
    },
	device_mouse_check_button_released: {
        description: '[Function]',
        parameters: [
            { label: 'device', documentation: '' },
            { label: 'button', documentation: '' }
        ],
        signature: '(device, button)'
    },
	device_mouse_dbclick_enable: {
        description: '[Function]',
        parameters: [
            { label: 'enable', documentation: '' }
        ],
        signature: '(enable)'
    },
	device_mouse_raw_x: {
        description: '[Function]',
        parameters: [
            { label: 'device', documentation: '' }
        ],
        signature: '(device)'
    },
	device_mouse_raw_y: {
        description: '[Function]',
        parameters: [
            { label: 'device', documentation: '' }
        ],
        signature: '(device)'
    },
	device_mouse_x: {
        description: '[Function]',
        parameters: [
            { label: 'device', documentation: '' }
        ],
        signature: '(device)'
    },
	device_mouse_x_to_gui: {
        description: '[Function]',
        parameters: [
            { label: 'device', documentation: '' }
        ],
        signature: '(device)'
    },
	device_mouse_y: {
        description: '[Function]',
        parameters: [
            { label: 'device', documentation: '' }
        ],
        signature: '(device)'
    },
	device_mouse_y_to_gui: {
        description: '[Function]',
        parameters: [
            { label: 'device', documentation: '' }
        ],
        signature: '(device)'
    },
	directory_create: {
        description: '[Function]',
        parameters: [
            { label: 'dname', documentation: '' }
        ],
        signature: '(dname)'
    },
	directory_destroy: {
        description: '[Function]',
        parameters: [
            { label: 'dname', documentation: '' }
        ],
        signature: '(dname)'
    },
	directory_exists: {
        description: '[Function]',
        parameters: [
            { label: 'dname', documentation: '' }
        ],
        signature: '(dname)'
    },
	display_get_dpi_x: {
        description: '[Function]'
    },
	display_get_dpi_y: {
        description: '[Function]'
    },
	display_get_gui_height: {
        description: '[Function]'
    },
	display_get_gui_width: {
        description: '[Function]'
    },
	display_get_windows_alternate_sync: {
        description: '[Function]'
    },
	display_get_windows_vertex_buffer_method: {
        description: '[Function]'
    },
    display_get_colordepth: {
        description: '[Function]'
    },
	display_get_height: {
        description: '[Function]'
    },
	display_get_orientation: {
        description: '[Function]'
    },
	display_get_width: {
        description: '[Function]'
    },
	display_mouse_get_x: {
        description: '[Function]'
    },
	display_mouse_get_y: {
        description: '[Function]'
    },
	display_set_gui_maximise: {
        description: '[Function]',
        parameters: [
            { label: 'xscale', documentation: '' },
            { label: 'yscale', documentation: '' },
            { label: 'xoffset', documentation: '' },
            { label: 'yoffset', documentation: '' }
        ],
        signature: '(xscale, yscale, xoffset, yoffset)'
    },
	display_set_gui_size: {
        description: '[Function]',
        parameters: [
            { label: 'width', documentation: '' },
            { label: 'height', documentation: '' }
        ],
        signature: '(width, height)'
    },
	display_set_ui_visibility: {
        description: '[Function]',
        parameters: [
            { label: 'flags', documentation: '' }
        ],
        signature: '(flags)'
    },
	display_set_windows_alternate_sync: {
        description: '[Function]',
        parameters: [
            { label: 'enable', documentation: '' }
        ],
        signature: '(enable)'
    },
	display_set_windows_vertex_buffer_method: {
        description: '[Function]',
        parameters: [
            { label: 'method', documentation: '' }
        ],
        signature: '(method)'
    },
	display_mouse_set: {
        description: '[Function]',
        parameters: [
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' }
        ],
        signature: '(x, y)'
    },
	display_reset: {
        description: '[Function]',
        parameters: [
            { label: 'aa_level', documentation: '' },
            { label: 'vsync', documentation: '' }
        ],
        signature: '(aa_level, vsync)'
    },
	distance_to_object: {
        description: '[Function]',
        parameters: [
            { label: 'obj', documentation: '' }
        ],
        signature: '(obj)'
    },
	distance_to_point: {
        description: '[Function]',
        parameters: [
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' }
        ],
        signature: '(x, y)'
    },
	dot_product: {
        description: '[Function]',
        parameters: [
            { label: 'x1', documentation: '' },
            { label: 'y1', documentation: '' },
            { label: 'x2', documentation: '' },
            { label: 'y2', documentation: '' }
        ],
        signature: '(x1, y1, x2, y2)'
    },
	dot_product_3d: {
        description: '[Function]',
        parameters: [
            { label: 'x1', documentation: '' },
            { label: 'y1', documentation: '' },
            { label: 'z1', documentation: '' },
            { label: 'x2', documentation: '' },
            { label: 'y2', documentation: '' },
            { label: 'z2', documentation: '' }
        ],
        signature: '(x1, y1, z1, x2, y2, z2)'
    },
	dot_product_3d_normalised: {
        description: '[Function]',
        parameters: [
            { label: 'x1', documentation: '' },
            { label: 'y1', documentation: '' },
            { label: 'z1', documentation: '' },
            { label: 'x2', documentation: '' },
            { label: 'y2', documentation: '' },
            { label: 'z2', documentation: '' }
        ],
        signature: '(x1, y1, z1, x2, y2, z2)'
    },
	dot_product_normalised: {
        description: '[Function]',
        parameters: [
            { label: 'x1', documentation: '' },
            { label: 'y1', documentation: '' },
            { label: 'x2', documentation: '' },
            { label: 'y2', documentation: '' }
        ],
        signature: '(x1, y1, x2, y2)'
    },
	draw_arrow: {
        description: '[Function]',
        parameters: [
            { label: 'x1', documentation: '' },
            { label: 'y1', documentation: '' },
            { label: 'x2', documentation: '' },
            { label: 'y2', documentation: '' },
            { label: 'size', documentation: '' }
        ],
        signature: '(x1, y1, x2, y2, size)'
    },
	draw_background: {
        description: '[Function]',
        parameters: [
            { label: 'back', documentation: '' },
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' }
        ],
        signature: '(back, x, y)'
    },
	draw_background_ext: {
        description: '[Function]',
        parameters: [
            { label: 'back', documentation: '' },
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' },
            { label: 'xscale', documentation: '' },
            { label: 'yscale', documentation: '' },
            { label: 'rot', documentation: '' },
            { label: 'colour', documentation: '' },
            { label: 'alpha', documentation: '' }
        ],
        signature: '(back, x, y, xscale, yscale, rot, colour, alpha)'
    },
	draw_background_general: {
        description: '[Function]',
        parameters: [
            { label: 'back', documentation: '' },
            { label: 'left', documentation: '' },
            { label: 'top', documentation: '' },
            { label: 'width', documentation: '' },
            { label: 'height', documentation: '' },
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' },
            { label: 'xscale', documentation: '' },
            { label: 'yscale', documentation: '' },
            { label: 'rot', documentation: '' },
            { label: 'c1', documentation: '' },
            { label: 'c2', documentation: '' },
            { label: 'c3', documentation: '' },
            { label: 'c4', documentation: '' },
            { label: 'alpha', documentation: '' }
        ],
        signature: '(back, left, top, width, height, x, y, xscale, yscale, rot, c1, c2, c3, c4, alpha)'
    },
	draw_background_part: {
        description: '[Function]',
        parameters: [
            { label: 'back', documentation: '' },
            { label: 'left', documentation: '' },
            { label: 'top', documentation: '' },
            { label: 'width', documentation: '' },
            { label: 'height', documentation: '' },
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' }
        ],
        signature: '(back, left, top, width, height, x, y)'
    },
	draw_background_part_ext: {
        description: '[Function]',
        parameters: [
            { label: 'back', documentation: '' },
            { label: 'left', documentation: '' },
            { label: 'top', documentation: '' },
            { label: 'width', documentation: '' },
            { label: 'height', documentation: '' },
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' },
            { label: 'xscale', documentation: '' },
            { label: 'yscale', documentation: '' },
            { label: 'colour', documentation: '' },
            { label: 'alpha', documentation: '' }
        ],
        signature: '(back, left, top, width, height, x, y, xscale, yscale, colour, alpha)'
    },
	draw_background_stretched: {
        description: '[Function]',
        parameters: [
            { label: 'back', documentation: '' },
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' },
            { label: 'w', documentation: '' },
            { label: 'h', documentation: '' }
        ],
        signature: '(back, x, y, w, h)'
    },
	draw_background_stretched_ext: {
        description: '[Function]',
        parameters: [
            { label: 'back', documentation: '' },
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' },
            { label: 'w', documentation: '' },
            { label: 'h', documentation: '' },
            { label: 'colour', documentation: '' },
            { label: 'alpha', documentation: '' }
        ],
        signature: '(back, x, y, w, h, colour, alpha)'
    },
	draw_background_tiled: {
        description: '[Function]',
        parameters: [
            { label: 'back', documentation: '' },
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' }
        ],
        signature: '(back, x, y)'
    },
	draw_background_tiled_ext: {
        description: '[Function]',
        parameters: [
            { label: 'back', documentation: '' },
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' },
            { label: 'xscale', documentation: '' },
            { label: 'yscale', documentation: '' },
            { label: 'colour', documentation: '' },
            { label: 'alpha', documentation: '' }
        ],
        signature: '(back, x, y, xscale, yscale, colour, alpha)'
    },
	draw_button: {
        description: '[Function]',
        parameters: [
            { label: 'x1', documentation: '' },
            { label: 'y1', documentation: '' },
            { label: 'x2', documentation: '' },
            { label: 'y2', documentation: '' },
            { label: 'up', documentation: '' }
        ],
        signature: '(x1, y1, x2, y2, up)'
    },
	draw_circle: {
        description: '[Function]',
        parameters: [
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' },
            { label: 'r', documentation: '' },
            { label: 'outline', documentation: '' }
        ],
        signature: '(x, y, r, outline)'
    },
	draw_circle_color: {
        description: '[Function]',
        parameters: [
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' },
            { label: 'r', documentation: '' },
            { label: 'col1', documentation: '' },
            { label: 'col2', documentation: '' },
            { label: 'outline', documentation: '' }
        ],
        signature: '(x, y, r, col1, col2, outline)'
    },
	draw_circle_colour: {
        description: '[Function]',
        parameters: [
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' },
            { label: 'r', documentation: '' },
            { label: 'col1', documentation: '' },
            { label: 'col2', documentation: '' },
            { label: 'outline', documentation: '' }
        ],
        signature: '(x, y, r, col1, col2, outline)'
    },
	draw_clear: {
        description: '[Function]',
        parameters: [
            { label: 'col', documentation: '' }
        ],
        signature: '(col)'
    },
	draw_clear_alpha: {
        description: '[Function]',
        parameters: [
            { label: 'col', documentation: '' },
            { label: 'alpha', documentation: '' }
        ],
        signature: '(col, alpha)'
    },
	draw_ellipse: {
        description: '[Function]',
        parameters: [
            { label: 'x1', documentation: '' },
            { label: 'y1', documentation: '' },
            { label: 'x2', documentation: '' },
            { label: 'y2', documentation: '' },
            { label: 'outline', documentation: '' }
        ],
        signature: '(x1, y1, x2, y2, outline)'
    },
	draw_ellipse_color: {
        description: '[Function]',
        parameters: [
            { label: 'x1', documentation: '' },
            { label: 'y1', documentation: '' },
            { label: 'x2', documentation: '' },
            { label: 'y2', documentation: '' },
            { label: 'col1', documentation: '' },
            { label: 'col2', documentation: '' },
            { label: 'outline', documentation: '' }
        ],
        signature: '(x1, y1, x2, y2, col1, col2, outline)'
    },
	draw_ellipse_colour: {
        description: '[Function]',
        parameters: [
            { label: 'x1', documentation: '' },
            { label: 'y1', documentation: '' },
            { label: 'x2', documentation: '' },
            { label: 'y2', documentation: '' },
            { label: 'col1', documentation: '' },
            { label: 'col2', documentation: '' },
            { label: 'outline', documentation: '' }
        ],
        signature: '(x1, y1, x2, y2, col1, col2, outline)'
    },
	draw_enable_alphablend: {
        description: '[Function]',
        parameters: [
            { label: 'enable', documentation: '' }
        ],
        signature: '(enable)'
    },
	draw_enable_drawevent: {
        description: '[Function]',
        parameters: [
            { label: 'enable', documentation: '' }
        ],
        signature: '(enable)'
    },
	draw_enable_swf_aa: {
        description: '[Function]',
        parameters: [
            { label: 'enable', documentation: '' }
        ],
        signature: '(enable)'
    },
	draw_flush: {
        description: '[Function]'
    },
	draw_getpixel: {
        description: '[Function]',
        parameters: [
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' }
        ],
        signature: '(x, y)'
    },
	draw_getpixel_ext: {
        description: '[Function]',
        parameters: [
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' }
        ],
        signature: '(x, y)'
    },
	draw_get_alpha: {
        description: '[Function]'
    },
	draw_get_alpha_test: {
        description: '[Function]'
    },
	draw_get_alpha_test_ref_value: {
        description: '[Function]'
    },
	draw_get_color: {
        description: '[Function]'
    },
	draw_get_colour: {
        description: '[Function]'
    },
	draw_get_swf_aa_level: {
        description: '[Function]'
    },
	draw_healthbar: {
        description: '[Function]',
        parameters: [
            { label: 'x1', documentation: '' },
            { label: 'y1', documentation: '' },
            { label: 'x2', documentation: '' },
            { label: 'y2', documentation: '' },
            { label: 'amount', documentation: '' },
            { label: 'backcol', documentation: '' },
            { label: 'mincol', documentation: '' },
            { label: 'maxcol', documentation: '' },
            { label: 'direction', documentation: '' },
            { label: 'showback', documentation: '' },
            { label: 'showborder', documentation: '' }
        ],
        signature: '(x1, y1, x2, y2, amount, backcol, mincol, maxcol, direction, showback, showborder)'
    },
	draw_highscore: {
        description: '[Function]',
        parameters: [
            { label: 'x1', documentation: '' },
            { label: 'y1', documentation: '' },
            { label: 'x2', documentation: '' },
            { label: 'y2', documentation: '' }
        ],
        signature: '(x1, y1, x2, y2)'
    },
	draw_line: {
        description: '[Function]',
        parameters: [
            { label: 'x1', documentation: '' },
            { label: 'y1', documentation: '' },
            { label: 'x2', documentation: '' },
            { label: 'y2', documentation: '' }
        ],
        signature: '(x1, y1, x2, y2)'
    },
	draw_line_color: {
        description: '[Function]',
        parameters: [
            { label: 'x1', documentation: '' },
            { label: 'y1', documentation: '' },
            { label: 'x2', documentation: '' },
            { label: 'y2', documentation: '' },
            { label: 'col1', documentation: '' },
            { label: 'col2', documentation: '' }
        ],
        signature: '(x1, y1, x2, y2, col1, col2)'
    },
	draw_line_colour: {
        description: '[Function]',
        parameters: [
            { label: 'x1', documentation: '' },
            { label: 'y1', documentation: '' },
            { label: 'x2', documentation: '' },
            { label: 'y2', documentation: '' },
            { label: 'col1', documentation: '' },
            { label: 'col2', documentation: '' }
        ],
        signature: '(x1, y1, x2, y2, col1, col2)'
    },
	draw_line_width: {
        description: '[Function]',
        parameters: [
            { label: 'x1', documentation: '' },
            { label: 'y1', documentation: '' },
            { label: 'x2', documentation: '' },
            { label: 'y2', documentation: '' },
            { label: 'w', documentation: '' }
        ],
        signature: '(x1, y1, x2, y2, w)'
    },
	draw_line_width_color: {
        description: '[Function]',
        parameters: [
            { label: 'x1', documentation: '' },
            { label: 'y1', documentation: '' },
            { label: 'x2', documentation: '' },
            { label: 'y2', documentation: '' },
            { label: 'w', documentation: '' },
            { label: 'col1', documentation: '' },
            { label: 'col2', documentation: '' }
        ],
        signature: '(x1, y1, x2, y2, w, col1, col2)'
    },
	draw_line_width_colour: {
        description: '[Function]',
        parameters: [
            { label: 'x1', documentation: '' },
            { label: 'y1', documentation: '' },
            { label: 'x2', documentation: '' },
            { label: 'y2', documentation: '' },
            { label: 'w', documentation: '' },
            { label: 'col1', documentation: '' },
            { label: 'col2', documentation: '' }
        ],
        signature: '(x1, y1, x2, y2, w, col1, col2)'
    },
	draw_path: {
        description: '[Function]',
        parameters: [
            { label: 'path', documentation: '' },
            { label: 'x1', documentation: '' },
            { label: 'y1', documentation: '' },
            { label: 'absolute', documentation: '' }
        ],
        signature: '(path, x, y, absolute)'
    },
	draw_point: {
        description: '[Function]',
        parameters: [
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' }
        ],
        signature: '(x, y)'
    },
	draw_point_color: {
        description: '[Function]',
        parameters: [
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' },
            { label: 'col', documentation: '' }
        ],
        signature: '(x, y, col1)'
    },
	draw_point_colour: {
        description: '[Function]',
        parameters: [
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' },
            { label: 'col', documentation: '' }
        ],
        signature: '(x, y, col1)'
    },
	draw_primitive_begin: {
        description: '[Function]',
        parameters: [
            { label: 'kind', documentation: '' }
        ],
        signature: '(kind)'
    },
	draw_primitive_begin_texture: {
        description: '[Function]',
        parameters: [
            { label: 'kind', documentation: '' },
            { label: 'texid', documentation: '' }
        ],
        signature: '(kind, texid)'
    },
	draw_primitive_end: {
        description: '[Function]'
    },
	draw_rectangle: {
        description: '[Function]',
        parameters: [
            { label: 'x1', documentation: '' },
            { label: 'y1', documentation: '' },
            { label: 'x2', documentation: '' },
            { label: 'y2', documentation: '' },
            { label: 'outline', documentation: '' }
        ],
        signature: '(x1, y1, x2, y2, outline)'
    },
	draw_rectangle_color: {
        description: '[Function]',
        parameters: [
            { label: 'x1', documentation: '' },
            { label: 'y1', documentation: '' },
            { label: 'x2', documentation: '' },
            { label: 'y2', documentation: '' },
            { label: 'col1', documentation: '' },
            { label: 'col2', documentation: '' },
            { label: 'col3', documentation: '' },
            { label: 'col4', documentation: '' },
            { label: 'outline', documentation: '' }
        ],
        signature: '(x1, y1, x2, y2, col1, col2, col3, col4, outline)'
    },
	draw_rectangle_colour: {
        description: '[Function]',
        parameters: [
            { label: 'x1', documentation: '' },
            { label: 'y1', documentation: '' },
            { label: 'x2', documentation: '' },
            { label: 'y2', documentation: '' },
            { label: 'col1', documentation: '' },
            { label: 'col2', documentation: '' },
            { label: 'col3', documentation: '' },
            { label: 'col4', documentation: '' },
            { label: 'outline', documentation: '' }
        ],
        signature: '(x1, y1, x2, y2, col1, col2, col3, col4, outline)'
    },
	draw_roundrect: {
        description: '[Function]',
        parameters: [
            { label: 'x1', documentation: '' },
            { label: 'y1', documentation: '' },
            { label: 'x2', documentation: '' },
            { label: 'y2', documentation: '' },
            { label: 'outline', documentation: '' }
        ],
        signature: '(x1, y1, x2, y2, outline)'
    },
	draw_roundrect_color: {
        description: '[Function]',
        parameters: [
            { label: 'x1', documentation: '' },
            { label: 'y1', documentation: '' },
            { label: 'x2', documentation: '' },
            { label: 'y2', documentation: '' },
            { label: 'col1', documentation: '' },
            { label: 'col2', documentation: '' },
            { label: 'outline', documentation: '' }
        ],
        signature: '(x1, y1, x2, y2, col1, col2, outline)'
    },
	draw_roundrect_color_ext: {
        description: '[Function]',
        parameters: [
            { label: 'x1', documentation: '' },
            { label: 'y1', documentation: '' },
            { label: 'x2', documentation: '' },
            { label: 'y2', documentation: '' },
            { label: 'radiusx', documentation: '' },
            { label: 'radiusy', documentation: '' },
            { label: 'col1', documentation: '' },
            { label: 'col2', documentation: '' },
            { label: 'outline', documentation: '' }
        ],
        signature: '(x1, y1, x2, y2, radiusx, radiusy, col1, col2, outline)'
    },
	draw_roundrect_colour: {
        description: '[Function]',
        parameters: [
            { label: 'x1', documentation: '' },
            { label: 'y1', documentation: '' },
            { label: 'x2', documentation: '' },
            { label: 'y2', documentation: '' },
            { label: 'col1', documentation: '' },
            { label: 'col2', documentation: '' },
            { label: 'outline', documentation: '' }
        ],
        signature: '(x1, y1, x2, y2, col1, col2, outline)'
    },
	draw_roundrect_colour_ext: {
        description: '[Function]',
        parameters: [
            { label: 'x1', documentation: '' },
            { label: 'y1', documentation: '' },
            { label: 'x2', documentation: '' },
            { label: 'y2', documentation: '' },
            { label: 'radiusx', documentation: '' },
            { label: 'radiusy', documentation: '' },
            { label: 'col1', documentation: '' },
            { label: 'col2', documentation: '' },
            { label: 'outline', documentation: '' }
        ],
        signature: '(x1, y1, x2, y2, radiusx, radiusy, col1, col2, outline)'
    },
	draw_roundrect_ext: {
        description: '[Function]',
        parameters: [
            { label: 'x1', documentation: '' },
            { label: 'y1', documentation: '' },
            { label: 'x2', documentation: '' },
            { label: 'y2', documentation: '' },
            { label: 'radiusx', documentation: '' },
            { label: 'radiusy', documentation: '' },
            { label: 'outline', documentation: '' }
        ],
        signature: '(x1, y1, x2, y2, radiusx, radiusy, outline)'
    },
	draw_self: {
        description: '[Function]'
    },
	draw_set_alpha: {
        description: '[Function]',
        parameters: [
            { label: 'alpha', documentation: '' }
        ],
        signature: '(alpha)'
    },
	draw_set_alpha_test: {
        description: '[Function]',
        parameters: [
            { label: 'enable', documentation: '' }
        ],
        signature: '(enable)'
    },
	draw_set_alpha_test_ref_value: {
        description: '[Function]',
        parameters: [
            { label: 'value', documentation: '' }
        ],
        signature: '(value)'
    },
	draw_set_blend_mode: {
        description: '[Function]',
        parameters: [
            { label: 'mode', documentation: '' }
        ],
        signature: '(mode)'
    },
	draw_set_blend_mode_ext: {
        description: '[Function]',
        parameters: [
            { label: 'src', documentation: '' },
            { label: 'dest', documentation: '' }
        ],
        signature: '(src, dest)'
    },
	draw_set_circle_precision: {
        description: '[Function]',
        parameters: [
            { label: 'precision', documentation: '' }
        ],
        signature: '(precision)'
    },
	draw_set_color: {
        description: '[Function]',
        parameters: [
            { label: 'col', documentation: '' }
        ],
        signature: '(col)'
    },
	draw_set_color_write_enable: {
        description: '[Function]',
        parameters: [
            { label: 'red', documentation: '' },
            { label: 'green', documentation: '' },
            { label: 'blue', documentation: '' },
            { label: 'alpha', documentation: '' }
        ],
        signature: '(red, green, blue, alpha)'
    },
	draw_set_colour: {
        description: '[Function]',
        parameters: [
            { label: 'col', documentation: '' }
        ],
        signature: '(col)'
    },
	draw_set_colour_write_enable: {
        description: '[Function]',
        parameters: [
            { label: 'red', documentation: '' },
            { label: 'green', documentation: '' },
            { label: 'blue', documentation: '' },
            { label: 'alpha', documentation: '' }
        ],
        signature: '(red, green, blue, alpha)'
    },
	draw_set_font: {
        description: '[Function]',
        parameters: [
            { label: 'font', documentation: '' }
        ],
        signature: '(font)'
    },
	draw_set_halign: {
        description: '[Function]',
        parameters: [
            { label: 'halign', documentation: '' }
        ],
        signature: '(halign)'
    },
	draw_set_swf_aa_level: {
        description: '[Function]',
        parameters: [
            { label: 'aa_level', documentation: '' }
        ],
        signature: '(aa_level)'
    },
	draw_set_valign: {
        description: '[Function]',
        parameters: [
            { label: 'valign', documentation: '' }
        ],
        signature: '(valign)'
    },
	draw_skeleton: {
        description: '[Function]',
        parameters: [
            { label: 'sprite', documentation: '' },
            { label: 'animname', documentation: '' },
            { label: 'skinname', documentation: '' },
            { label: 'frame', documentation: '' },
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' },
            { label: 'xscale', documentation: '' },
            { label: 'yscale', documentation: '' },
            { label: 'rot', documentation: '' },
            { label: 'colour', documentation: '' },
            { label: 'alpha', documentation: '' }
        ],
        signature: '(sprite, animname, skinname, frame, x, y, xscale, yscale, rot, colour, alpha)'
    },
	draw_skeleton_collision: {
        description: '[Function]',
        parameters: [
            { label: 'sprite', documentation: '' },
            { label: 'animname', documentation: '' },
            { label: 'frame', documentation: '' },
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' },
            { label: 'xscale', documentation: '' },
            { label: 'yscale', documentation: '' },
            { label: 'rot', documentation: '' },
            { label: 'colour', documentation: '' }
        ],
        signature: '(sprite, animname, frame, x, y, xscale, yscale, rot, colour)'
    },
	draw_skeleton_instance: {
        description: '[Function]',
        parameters: [
            { label: 'instance', documentation: '' },
            { label: 'animname', documentation: '' },
            { label: 'skinname', documentation: '' },
            { label: 'frame', documentation: '' },
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' },
            { label: 'xscale', documentation: '' },
            { label: 'yscale', documentation: '' },
            { label: 'rot', documentation: '' },
            { label: 'colour', documentation: '' },
            { label: 'alpha', documentation: '' }
        ],
        signature: '(instance, animname, skinname, frame, x, y, xscale, yscale, rot, colour, alpha)'
    },
	draw_skeleton_time: {
        description: '[Function]',
        parameters: [
            { label: 'sprite', documentation: '' },
            { label: 'animname', documentation: '' },
            { label: 'skinname', documentation: '' },
            { label: 'time', documentation: '' },
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' },
            { label: 'xscale', documentation: '' },
            { label: 'yscale', documentation: '' },
            { label: 'rot', documentation: '' },
            { label: 'colour', documentation: '' },
            { label: 'alpha', documentation: '' }
        ],
        signature: '(sprite, animname, skinname, time, x, y, xscale, yscale, rot, colour, alpha)'
    },
	draw_sprite: {
        description: '[Function]',
        parameters: [
            { label: 'sprite', documentation: '' },
            { label: 'subimg', documentation: '' },
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' }
        ],
        signature: '(sprite, subimg, x, y)'
    },
	draw_sprite_ext: {
        description: '[Function]',
        parameters: [
            { label: 'sprite', documentation: '' },
            { label: 'subimg', documentation: '' },
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' },
            { label: 'xscale', documentation: '' },
            { label: 'yscale', documentation: '' },
            { label: 'rot', documentation: '' },
            { label: 'colour', documentation: '' },
            { label: 'alpha', documentation: '' }
        ],
        signature: '(sprite, subimg, x, y, xscale, yscale, rot, colour, alpha)'
    },
	draw_sprite_general: {
        description: '[Function]',
        parameters: [
            { label: 'sprite', documentation: '' },
            { label: 'subimg', documentation: '' },
            { label: 'left', documentation: '' },
            { label: 'top', documentation: '' },
            { label: 'width', documentation: '' },
            { label: 'height', documentation: '' },
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' },
            { label: 'xscale', documentation: '' },
            { label: 'yscale', documentation: '' },
            { label: 'rot', documentation: '' },
            { label: 'c1', documentation: '' },
            { label: 'c2', documentation: '' },
            { label: 'c3', documentation: '' },
            { label: 'c4', documentation: '' },
            { label: 'alpha', documentation: '' }
        ],
        signature: '(sprite, subimg, left, top, width, height, x, y, xscale, yscale, rot, c1, c2, c3, c4, alpha)'
    },
	draw_sprite_part: {
        description: '[Function]',
        parameters: [
            { label: 'sprite', documentation: '' },
            { label: 'subimg', documentation: '' },
            { label: 'left', documentation: '' },
            { label: 'top', documentation: '' },
            { label: 'width', documentation: '' },
            { label: 'height', documentation: '' },
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' }
        ],
        signature: '(sprite, subimg, left, top, width, height, x, y)'
    },
	draw_sprite_part_ext: {
        description: '[Function]',
        parameters: [
            { label: 'sprite', documentation: '' },
            { label: 'subimg', documentation: '' },
            { label: 'left', documentation: '' },
            { label: 'top', documentation: '' },
            { label: 'width', documentation: '' },
            { label: 'height', documentation: '' },
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' },
            { label: 'xscale', documentation: '' },
            { label: 'yscale', documentation: '' },
            { label: 'colour', documentation: '' },
            { label: 'alpha', documentation: '' }
        ],
        signature: '(sprite, subimg, left, top, width, height, x, y, xscale, yscale, colour, alpha)'
    },
	draw_sprite_pos: {
        description: '[Function]',
        parameters: [
            { label: 'sprite', documentation: '' },
            { label: 'subimg', documentation: '' },
            { label: 'x1', documentation: '' },
            { label: 'y1', documentation: '' },
            { label: 'x2', documentation: '' },
            { label: 'y2', documentation: '' },
            { label: 'x3', documentation: '' },
            { label: 'y3', documentation: '' },
            { label: 'x4', documentation: '' },
            { label: 'y4', documentation: '' },
            { label: 'alpha', documentation: '' }
        ],
        signature: '(sprite, subimg, x1, y1, x2, y2, x3, y3, x4, y4, alpha)'
    },
	draw_sprite_stretched: {
        description: '[Function]',
        parameters: [
            { label: 'sprite', documentation: '' },
            { label: 'subimg', documentation: '' },
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' },
            { label: 'w', documentation: '' },
            { label: 'h', documentation: '' }
        ],
        signature: '(sprite, subimg, x, y, w, h)'
    },
	draw_sprite_stretched_ext: {
        description: '[Function]',
        parameters: [
            { label: 'sprite', documentation: '' },
            { label: 'subimg', documentation: '' },
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' },
            { label: 'w', documentation: '' },
            { label: 'h', documentation: '' },
            { label: 'colour', documentation: '' },
            { label: 'alpha', documentation: '' }
        ],
        signature: '(sprite, subimg, x, y, w, h, colour, alpha)'
    },
	draw_sprite_tiled: {
        description: '[Function]',
        parameters: [
            { label: 'sprite', documentation: '' },
            { label: 'subimg', documentation: '' },
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' }
        ],
        signature: '(sprite, subimg, x, y)'
    },
	draw_sprite_tiled_ext: {
        description: '[Function]',
        parameters: [
            { label: 'sprite', documentation: '' },
            { label: 'subimg', documentation: '' },
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' },
            { label: 'xscale', documentation: '' },
            { label: 'yscale', documentation: '' },
            { label: 'colour', documentation: '' },
            { label: 'alpha', documentation: '' }
        ],
        signature: '(sprite, subimg, x, y, xscale, yscale, colour, alpha)'
    },
	draw_surface: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' },
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' }
        ],
        signature: '(id, x, y)'
    },
	draw_surface_ext: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' },
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' },
            { label: 'xscale', documentation: '' },
            { label: 'yscale', documentation: '' },
            { label: 'rot', documentation: '' },
            { label: 'colour', documentation: '' },
            { label: 'alpha', documentation: '' }
        ],
        signature: '(id, x, y, xscale, yscale, rot, colour, alpha)'
    },
	draw_surface_general: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' },
            { label: 'left', documentation: '' },
            { label: 'top', documentation: '' },
            { label: 'width', documentation: '' },
            { label: 'height', documentation: '' },
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' },
            { label: 'xscale', documentation: '' },
            { label: 'yscale', documentation: '' },
            { label: 'rot', documentation: '' },
            { label: 'c1', documentation: '' },
            { label: 'c2', documentation: '' },
            { label: 'c3', documentation: '' },
            { label: 'c4', documentation: '' },
            { label: 'alpha', documentation: '' }
        ],
        signature: '(id, left, top, width, height, x, y, xscale, yscale, rot, c1, c2, c3, c4, alpha)'
    },
	draw_surface_part: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' },
            { label: 'left', documentation: '' },
            { label: 'top', documentation: '' },
            { label: 'width', documentation: '' },
            { label: 'height', documentation: '' },
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' }
        ],
        signature: '(id, left, top, width, height, x, y)'
    },
	draw_surface_part_ext: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' },
            { label: 'left', documentation: '' },
            { label: 'top', documentation: '' },
            { label: 'width', documentation: '' },
            { label: 'height', documentation: '' },
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' },
            { label: 'xscale', documentation: '' },
            { label: 'yscale', documentation: '' },
            { label: 'colour', documentation: '' },
            { label: 'alpha', documentation: '' }
        ],
        signature: '(id, left, top, width, height, x, y, xscale, yscale, colour, alpha)'
    },
	draw_surface_stretched: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' },
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' },
            { label: 'w', documentation: '' },
            { label: 'h', documentation: '' }
        ],
        signature: '(id, x, y, w, h)'
    },
	draw_surface_stretched_ext: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' },
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' },
            { label: 'w', documentation: '' },
            { label: 'h', documentation: '' },
            { label: 'colour', documentation: '' },
            { label: 'alpha', documentation: '' }
        ],
        signature: '(id, x, y, w, h, colour, alpha)'
    },
	draw_surface_tiled: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' },
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' }
        ],
        signature: '(id, x, y)'
    },
	draw_surface_tiled_ext: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' },
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' },
            { label: 'xscale', documentation: '' },
            { label: 'yscale', documentation: '' },
            { label: 'colour', documentation: '' },
            { label: 'alpha', documentation: '' }
        ],
        signature: '(id, x, y, xscale, yscale, colour, alpha)'
    },
	draw_text: {
        description: '[Function]',
        parameters: [
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' },
            { label: 'string', documentation: '' }
        ],
        signature: '(x, y, string)'
    },
	draw_texture_flush: {
        description: '[Function]'
    },
	draw_text_color: {
        description: '[Function]',
        parameters: [
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' },
            { label: 'string', documentation: '' },
            { label: 'c1', documentation: '' },
            { label: 'c2', documentation: '' },
            { label: 'c3', documentation: '' },
            { label: 'c4', documentation: '' },
            { label: 'alpha', documentation: '' }
        ],
        signature: '(x, y, string, c1, c2, c3, c4, alpha)'
    },
	draw_text_colour: {
        description: '[Function]',
        parameters: [
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' },
            { label: 'string', documentation: '' },
            { label: 'c1', documentation: '' },
            { label: 'c2', documentation: '' },
            { label: 'c3', documentation: '' },
            { label: 'c4', documentation: '' },
            { label: 'alpha', documentation: '' }
        ],
        signature: '(x, y, string, c1, c2, c3, c4, alpha)'
    },
	draw_text_ext: {
        description: '[Function]',
        parameters: [
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' },
            { label: 'string', documentation: '' },
            { label: 'sep', documentation: '' },
            { label: 'w', documentation: '' }
        ],
        signature: '(x, y, string, sep, w)'
    },
	draw_text_ext_color: {
        description: '[Function]',
        parameters: [
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' },
            { label: 'string', documentation: '' },
            { label: 'sep', documentation: '' },
            { label: 'w', documentation: '' },
            { label: 'c1', documentation: '' },
            { label: 'c2', documentation: '' },
            { label: 'c3', documentation: '' },
            { label: 'c4', documentation: '' },
            { label: 'alpha', documentation: '' }
        ],
        signature: '(x, y, string, sep, w, c1, c2, c3, c4, alpha)'
    },
	draw_text_ext_colour: {
        description: '[Function]',
        parameters: [
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' },
            { label: 'string', documentation: '' },
            { label: 'sep', documentation: '' },
            { label: 'w', documentation: '' },
            { label: 'c1', documentation: '' },
            { label: 'c2', documentation: '' },
            { label: 'c3', documentation: '' },
            { label: 'c4', documentation: '' },
            { label: 'alpha', documentation: '' }
        ],
        signature: '(x, y, string, sep, w, c1, c2, c3, c4, alpha)'
    },
	draw_text_ext_transformed: {
        description: '[Function]',
        parameters: [
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' },
            { label: 'string', documentation: '' },
            { label: 'sep', documentation: '' },
            { label: 'w', documentation: '' },
            { label: 'xscale', documentation: '' },
            { label: 'yscale', documentation: '' },
            { label: 'angle', documentation: '' }
        ],
        signature: '(x, y, string, sep, w, xscale, yscale, angle)'
    },
	draw_text_ext_transformed_color: {
        description: '[Function]',
        parameters: [
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' },
            { label: 'string', documentation: '' },
            { label: 'sep', documentation: '' },
            { label: 'w', documentation: '' },
            { label: 'xscale', documentation: '' },
            { label: 'yscale', documentation: '' },
            { label: 'angle', documentation: '' },
            { label: 'c1', documentation: '' },
            { label: 'c2', documentation: '' },
            { label: 'c3', documentation: '' },
            { label: 'c4', documentation: '' },
            { label: 'alpha', documentation: '' }
        ],
        signature: '(x, y, string, sep, w, xscale, yscale, angle, c1, c2, c3, c4, alpha)'
    },
	draw_text_ext_transformed_colour: {
        description: '[Function]',
        parameters: [
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' },
            { label: 'string', documentation: '' },
            { label: 'sep', documentation: '' },
            { label: 'w', documentation: '' },
            { label: 'xscale', documentation: '' },
            { label: 'yscale', documentation: '' },
            { label: 'angle', documentation: '' },
            { label: 'c1', documentation: '' },
            { label: 'c2', documentation: '' },
            { label: 'c3', documentation: '' },
            { label: 'c4', documentation: '' },
            { label: 'alpha', documentation: '' }
        ],
        signature: '(x, y, string, sep, w, xscale, yscale, angle, c1, c2, c3, c4, alpha)'
    },
	draw_text_transformed: {
        description: '[Function]',
        parameters: [
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' },
            { label: 'string', documentation: '' },
            { label: 'xscale', documentation: '' },
            { label: 'yscale', documentation: '' },
            { label: 'angle', documentation: '' }
        ],
        signature: '(x, y, string, xscale, yscale, angle)'
    },
	draw_text_transformed_color: {
        description: '[Function]',
        parameters: [
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' },
            { label: 'string', documentation: '' },
            { label: 'xscale', documentation: '' },
            { label: 'yscale', documentation: '' },
            { label: 'angle', documentation: '' },
            { label: 'c1', documentation: '' },
            { label: 'c2', documentation: '' },
            { label: 'c3', documentation: '' },
            { label: 'c4', documentation: '' },
            { label: 'alpha', documentation: '' }
        ],
        signature: '(x, y, string, xscale, yscale, angle, c1, c2, c3, c4, alpha)'
    },
	draw_text_transformed_colour: {
        description: '[Function]',
        parameters: [
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' },
            { label: 'string', documentation: '' },
            { label: 'xscale', documentation: '' },
            { label: 'yscale', documentation: '' },
            { label: 'angle', documentation: '' },
            { label: 'c1', documentation: '' },
            { label: 'c2', documentation: '' },
            { label: 'c3', documentation: '' },
            { label: 'c4', documentation: '' },
            { label: 'alpha', documentation: '' }
        ],
        signature: '(x, y, string, xscale, yscale, angle, c1, c2, c3, c4, alpha)'
    },
	draw_triangle: {
        description: '[Function]',
        parameters: [
            { label: 'x1', documentation: '' },
            { label: 'y1', documentation: '' },
            { label: 'x2', documentation: '' },
            { label: 'y2', documentation: '' },
            { label: 'x3', documentation: '' },
            { label: 'y3', documentation: '' },
            { label: 'outline', documentation: '' }
        ],
        signature: '(x1, y1, x2, y2, x3, y3, outline)'
    },
	draw_triangle_color: {
        description: '[Function]',
        parameters: [
            { label: 'x1', documentation: '' },
            { label: 'y1', documentation: '' },
            { label: 'x2', documentation: '' },
            { label: 'y2', documentation: '' },
            { label: 'x3', documentation: '' },
            { label: 'y3', documentation: '' },
            { label: 'col1', documentation: '' },
            { label: 'col2', documentation: '' },
            { label: 'col3', documentation: '' },
            { label: 'outline', documentation: '' }
        ],
        signature: '(x1, y1, x2, y2, x3, y3, col1, col2, col3, outline)'
    },
	draw_triangle_colour: {
        description: '[Function]',
        parameters: [
            { label: 'x1', documentation: '' },
            { label: 'y1', documentation: '' },
            { label: 'x2', documentation: '' },
            { label: 'y2', documentation: '' },
            { label: 'x3', documentation: '' },
            { label: 'y3', documentation: '' },
            { label: 'col1', documentation: '' },
            { label: 'col2', documentation: '' },
            { label: 'col3', documentation: '' },
            { label: 'outline', documentation: '' }
        ],
        signature: '(x1, y1, x2, y2, x3, y3, col1, col2, col3, outline)'
    },
	draw_vertex: {
        description: '[Function]',
        parameters: [
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' }
        ],
        signature: '(x, y)'
    },
	draw_vertex_color: {
        description: '[Function]',
        parameters: [
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' },
            { label: 'col', documentation: '' },
            { label: 'alpha', documentation: '' }
        ],
        signature: '(x, y, col, alpha)'
    },
	draw_vertex_colour: {
        description: '[Function]',
        parameters: [
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' },
            { label: 'col', documentation: '' },
            { label: 'alpha', documentation: '' }
        ],
        signature: '(x, y, col, alpha)'
    },
	draw_vertex_texture: {
        description: '[Function]',
        parameters: [
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' },
            { label: 'xtex', documentation: '' },
            { label: 'ytex', documentation: '' }
        ],
        signature: '(x, y, xtex, ytex)'
    },
	draw_vertex_texture_color: {
        description: '[Function]',
        parameters: [
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' },
            { label: 'xtex', documentation: '' },
            { label: 'ytex', documentation: '' },
            { label: 'col', documentation: '' },
            { label: 'alpha', documentation: '' }
        ],
        signature: '(x, y, xtex, ytex, col, alpha)'
    },
	draw_vertex_texture_colour: {
        description: '[Function]',
        parameters: [
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' },
            { label: 'xtex', documentation: '' },
            { label: 'ytex', documentation: '' },
            { label: 'col', documentation: '' },
            { label: 'alpha', documentation: '' }
        ],
        signature: '(x, y, xtex, ytex, col, alpha)'
    },
	dsin: {
        description: '[Function]',
        parameters: [
            { label: 'degree_angle', documentation: '' }
        ],
        signature: '(degree_angle)'
    },
	ds_exists: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' },
            { label: 'type', documentation: '' }
        ],
        signature: '(id, type)'
    },
	ds_grid_add: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' },
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' },
            { label: 'val', documentation: '' }
        ],
        signature: '(id, x, y, val)'
    },
	ds_grid_add_disk: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' },
            { label: 'xm', documentation: '' },
            { label: 'ym', documentation: '' },
            { label: 'r', documentation: '' },
            { label: 'val', documentation: '' }
        ],
        signature: '(id, xm, ym, r, val)'
    },
	ds_grid_add_grid_region: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' },
            { label: 'source', documentation: '' },
            { label: 'x1', documentation: '' },
            { label: 'y1', documentation: '' },
            { label: 'x2', documentation: '' },
            { label: 'y2', documentation: '' },
            { label: 'xpos', documentation: '' },
            { label: 'ypos', documentation: '' }
        ],
        signature: '(id, source, x1, y1, x2, y2, xpos, ypos)'
    },
	ds_grid_add_region: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' },
            { label: 'x1', documentation: '' },
            { label: 'y1', documentation: '' },
            { label: 'x2', documentation: '' },
            { label: 'y2', documentation: '' },
            { label: 'val', documentation: '' }
        ],
        signature: '(id, x1, y1, x2, y2, val)'
    },
	ds_grid_clear: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' },
            { label: 'val', documentation: '' }
        ],
        signature: '(id, val)'
    },
	ds_grid_copy: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' },
            { label: 'source', documentation: '' }
        ],
        signature: '(id, source)'
    },
	ds_grid_create: {
        description: '[Function]',
        parameters: [
            { label: 'w', documentation: '' },
            { label: 'h', documentation: '' }
        ],
        signature: '(w, h)'
    },
	ds_grid_destroy: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' }
        ],
        signature: '(id)'
    },
	ds_grid_get: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' },
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' }
        ],
        signature: '(id, x, y)'
    },
	ds_grid_get_disk_max: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' },
            { label: 'xm', documentation: '' },
            { label: 'ym', documentation: '' },
            { label: 'r', documentation: '' }
        ],
        signature: '(id, xm, ym, r)'
    },
	ds_grid_get_disk_mean: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' },
            { label: 'xm', documentation: '' },
            { label: 'ym', documentation: '' },
            { label: 'r', documentation: '' }
        ],
        signature: '(id, xm, ym, r)'
    },
	ds_grid_get_disk_min: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' },
            { label: 'xm', documentation: '' },
            { label: 'ym', documentation: '' },
            { label: 'r', documentation: '' }
        ],
        signature: '(id, xm, ym, r)'
    },
	ds_grid_get_disk_sum: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' },
            { label: 'xm', documentation: '' },
            { label: 'ym', documentation: '' },
            { label: 'r', documentation: '' }
        ],
        signature: '(id, xm, ym, r)'
    },
	ds_grid_get_max: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' },
            { label: 'x1', documentation: '' },
            { label: 'y1', documentation: '' },
            { label: 'x2', documentation: '' },
            { label: 'y2', documentation: '' }
        ],
        signature: '(id, x1, y1, x2, y2)'
    },
	ds_grid_get_mean: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' },
            { label: 'x1', documentation: '' },
            { label: 'y1', documentation: '' },
            { label: 'x2', documentation: '' },
            { label: 'y2', documentation: '' }
        ],
        signature: '(id, x1, y1, x2, y2)'
    },
	ds_grid_get_min: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' },
            { label: 'x1', documentation: '' },
            { label: 'y1', documentation: '' },
            { label: 'x2', documentation: '' },
            { label: 'y2', documentation: '' }
        ],
        signature: '(id, x1, y1, x2, y2)'
    },
	ds_grid_get_sum: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' },
            { label: 'x1', documentation: '' },
            { label: 'y1', documentation: '' },
            { label: 'x2', documentation: '' },
            { label: 'y2', documentation: '' }
        ],
        signature: '(id, x1, y1, x2, y2)'
    },
	ds_grid_height: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' }
        ],
        signature: '(id)'
    },
	ds_grid_multiply: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' },
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' },
            { label: 'val', documentation: '' }
        ],
        signature: '(id, x, y, val)'
    },
	ds_grid_multiply_disk: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' },
            { label: 'xm', documentation: '' },
            { label: 'ym', documentation: '' },
            { label: 'r', documentation: '' },
            { label: 'val', documentation: '' }
        ],
        signature: '(id, xm, ym, r, val)'
    },
	ds_grid_multiply_grid_region: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' },
            { label: 'source', documentation: '' },
            { label: 'x1', documentation: '' },
            { label: 'y1', documentation: '' },
            { label: 'x2', documentation: '' },
            { label: 'y2', documentation: '' },
            { label: 'xpos', documentation: '' },
            { label: 'ypos', documentation: '' }
        ],
        signature: '(id, source, x1, y1, x2, y2, xpos, ypos)'
    },
	ds_grid_multiply_region: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' },
            { label: 'x1', documentation: '' },
            { label: 'y1', documentation: '' },
            { label: 'x2', documentation: '' },
            { label: 'y2', documentation: '' },
            { label: 'val', documentation: '' }
        ],
        signature: '(id, x1, y1, x2, y2, val)'
    },
	ds_grid_read: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' },
            { label: 'str', documentation: '' },
            { label: '...', documentation: '' }
        ],
        signature: '(id, str, ...)'
    },
	ds_grid_resize: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' },
            { label: 'w', documentation: '' },
            { label: 'h', documentation: '' }
        ],
        signature: '(id, w, h)'
    },
	ds_grid_set: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' },
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' },
            { label: 'val', documentation: '' }
        ],
        signature: '(id, x, y, val)'
    },
	ds_grid_set_disk: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' },
            { label: 'xm', documentation: '' },
            { label: 'ym', documentation: '' },
            { label: 'r', documentation: '' },
            { label: 'val', documentation: '' }
        ],
        signature: '(id, xm, ym, r, val)'
    },
	ds_grid_set_grid_region: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' },
            { label: 'source', documentation: '' },
            { label: 'x1', documentation: '' },
            { label: 'y1', documentation: '' },
            { label: 'x2', documentation: '' },
            { label: 'y2', documentation: '' },
            { label: 'xpos', documentation: '' },
            { label: 'ypos', documentation: '' }
        ],
        signature: '(id, source, x1, y1, x2, y2, xpos, ypos)'
    },
	ds_grid_set_region: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' },
            { label: 'x1', documentation: '' },
            { label: 'y1', documentation: '' },
            { label: 'x2', documentation: '' },
            { label: 'y2', documentation: '' },
            { label: 'val', documentation: '' }
        ],
        signature: '(id, x1, y1, x2, y2, val)'
    },
	ds_grid_shuffle: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' }
        ],
        signature: '(id)'
    },
	ds_grid_sort: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' },
            { label: 'column', documentation: '' },
            { label: 'ascending', documentation: '' }
        ],
        signature: '(id, column, ascending)'
    },
	ds_grid_value_disk_exists: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' },
            { label: 'xm', documentation: '' },
            { label: 'ym', documentation: '' },
            { label: 'r', documentation: '' },
            { label: 'val', documentation: '' }
        ],
        signature: '(id, xm, ym, r, val)'
    },
	ds_grid_value_disk_x: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' },
            { label: 'xm', documentation: '' },
            { label: 'ym', documentation: '' },
            { label: 'r', documentation: '' },
            { label: 'val', documentation: '' }
        ],
        signature: '(id, xm, ym, r, val)'
    },
	ds_grid_value_disk_y: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' },
            { label: 'xm', documentation: '' },
            { label: 'ym', documentation: '' },
            { label: 'r', documentation: '' },
            { label: 'val', documentation: '' }
        ],
        signature: '(id, xm, ym, r, val)'
    },
	ds_grid_value_exists: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' },
            { label: 'x1', documentation: '' },
            { label: 'y1', documentation: '' },
            { label: 'x2', documentation: '' },
            { label: 'y2', documentation: '' },
            { label: 'val', documentation: '' }
        ],
        signature: '(id, x1, y1, x2, y2, val)'
    },
	ds_grid_value_x: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' },
            { label: 'x1', documentation: '' },
            { label: 'y1', documentation: '' },
            { label: 'x2', documentation: '' },
            { label: 'y2', documentation: '' },
            { label: 'val', documentation: '' }
        ],
        signature: '(id, x1, y1, x2, y2, val)'
    },
	ds_grid_value_y: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' },
            { label: 'x1', documentation: '' },
            { label: 'y1', documentation: '' },
            { label: 'x2', documentation: '' },
            { label: 'y2', documentation: '' },
            { label: 'val', documentation: '' }
        ],
        signature: '(id, x1, y1, x2, y2, val)'
    },
	ds_grid_width: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' }
        ],
        signature: '(id)'
    },
	ds_grid_write: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' }
        ],
        signature: '(id)'
    },
	ds_list_add: {
        description: '[Function]',
        signature: '(id, value, ...)'
    },
	ds_list_clear: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' }
        ],
        signature: '(id)'
    },
	ds_list_copy: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' },
            { label: 'source', documentation: '' }
        ],
        signature: '(id, source)'
    },
	ds_list_create: {
        description: '[Function]'
    },
	ds_list_delete: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' },
            { label: 'pos', documentation: '' }
        ],
        signature: '(id, pos)'
    },
	ds_list_destroy: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' }
        ],
        signature: '(id)'
    },
	ds_list_empty: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' }
        ],
        signature: '(id)'
    },
	ds_list_find_index: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' },
            { label: 'value', documentation: '' }
        ],
        signature: '(id, value)'
    },
	ds_list_find_value: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' },
            { label: 'pos', documentation: '' }
        ],
        signature: '(id, pos)'
    },
	ds_list_insert: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' },
            { label: 'pos', documentation: '' },
            { label: 'value', documentation: '' }
        ],
        signature: '(id, pos, value)'
    },
	ds_list_mark_as_list: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' },
            { label: 'pos', documentation: '' }
        ],
        signature: '(id, pos)'
    },
	ds_list_mark_as_map: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' },
            { label: 'pos', documentation: '' }
        ],
        signature: '(id, pos)'
    },
	ds_list_read: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' },
            { label: 'str', documentation: '' },
            { label: '...', documentation: '' }
        ],
        signature: '(id, str, ...)'
    },
	ds_list_replace: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' },
            { label: 'pos', documentation: '' },
            { label: 'value', documentation: '' }
        ],
        signature: '(id, pos, value)'
    },
	ds_list_shuffle: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' }
        ],
        signature: '(id)'
    },
	ds_list_size: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' }
        ],
        signature: '(id)'
    },
	ds_list_sort: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' },
            { label: 'ascending', documentation: '' }
        ],
        signature: '(id, ascending)'
    },
	ds_list_write: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' }
        ],
        signature: '(id)'
    },
	ds_map_add: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' },
            { label: 'key', documentation: '' },
            { label: 'value', documentation: '' }
        ],
        signature: '(id, key, value)'
    },
	ds_map_add_list: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' },
            { label: 'key', documentation: '' },
            { label: 'value', documentation: '' }
        ],
        signature: '(id, key, value)'
    },
	ds_map_add_map: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' },
            { label: 'key', documentation: '' },
            { label: 'value', documentation: '' }
        ],
        signature: '(id, key, value)'
    },
	ds_map_clear: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' }
        ],
        signature: '(id)'
    },
	ds_map_copy: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' },
            { label: 'source', documentation: '' }
        ],
        signature: '(id, source)'
    },
	ds_map_create: {
        description: '[Function]'
    },
	ds_map_delete: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' },
            { label: 'key', documentation: '' }
        ],
        signature: '(id, key)'
    },
	ds_map_destroy: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' }
        ],
        signature: '(id)'
    },
	ds_map_empty: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' }
        ],
        signature: '(id)'
    },
	ds_map_exists: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' },
            { label: 'key', documentation: '' }
        ],
        signature: '(id, key)'
    },
	ds_map_find_first: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' }
        ],
        signature: '(id)'
    },
	ds_map_find_last: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' }
        ],
        signature: '(id)'
    },
	ds_map_find_next: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' },
            { label: 'key', documentation: '' }
        ],
        signature: '(id, key)'
    },
	ds_map_find_previous: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' },
            { label: 'key', documentation: '' }
        ],
        signature: '(id, key)'
    },
	ds_map_find_value: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' },
            { label: 'key', documentation: '' }
        ],
        signature: '(id, key)'
    },
	ds_map_read: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' },
            { label: 'str', documentation: '' },
            { label: '...', documentation: '' }
        ],
        signature: '(id, str, ...)'
    },
	ds_map_replace: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' },
            { label: 'key', documentation: '' },
            { label: 'value', documentation: '' }
        ],
        signature: '(id, key, value)'
    },
	ds_map_replace_list: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' },
            { label: 'key', documentation: '' },
            { label: 'value', documentation: '' }
        ],
        signature: '(id, key, value)'
    },
	ds_map_replace_map: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' },
            { label: 'key', documentation: '' },
            { label: 'value', documentation: '' }
        ],
        signature: '(id, key, value)'
    },
	ds_map_secure_load: {
        description: '[Function]',
        parameters: [
            { label: 'filename', documentation: '' }
        ],
        signature: '(filename)'
    },
	ds_map_secure_load_buffer: {
        description: '[Function]',
        parameters: [
            { label: 'buffer', documentation: '' }
        ],
        signature: '(buffer)'
    },
	ds_map_secure_save: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' },
            { label: 'filename', documentation: '' }
        ],
        signature: '(id, filename)'
    },
	ds_map_secure_save_buffer: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' },
            { label: 'buffer', documentation: '' }
        ],
        signature: '(id, buffer)'
    },
	ds_map_size: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' }
        ],
        signature: '(id)'
    },
	ds_map_write: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' }
        ],
        signature: '(id)'
    },
	ds_priority_add: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' },
            { label: 'value', documentation: '' },
            { label: 'priority', documentation: '' }
        ],
        signature: '(id, value, priority)'
    },
	ds_priority_change_priority: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' },
            { label: 'value', documentation: '' },
            { label: 'priority', documentation: '' }
        ],
        signature: '(id, value, priority)'
    },
	ds_priority_clear: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' }
        ],
        signature: '(id)'
    },
	ds_priority_copy: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' },
            { label: 'source', documentation: '' }
        ],
        signature: '(id, source)'
    },
	ds_priority_create: {
        description: '[Function]'
    },
	ds_priority_delete_max: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' }
        ],
        signature: '(id)'
    },
	ds_priority_delete_min: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' }
        ],
        signature: '(id)'
    },
	ds_priority_delete_value: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' },
            { label: 'value', documentation: '' }
        ],
        signature: '(id, value)'
    },
	ds_priority_destroy: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' }
        ],
        signature: '(id)'
    },
	ds_priority_empty: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' }
        ],
        signature: '(id)'
    },
	ds_priority_find_max: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' }
        ],
        signature: '(id)'
    },
	ds_priority_find_min: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' }
        ],
        signature: '(id)'
    },
	ds_priority_find_priority: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' },
            { label: 'value', documentation: '' }
        ],
        signature: '(id, value)'
    },
	ds_priority_read: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' },
            { label: 'str', documentation: '' },
            { label: '...', documentation: '' }
        ],
        signature: '(id, str, ...)'
    },
	ds_priority_size: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' }
        ],
        signature: '(id)'
    },
	ds_priority_write: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' }
        ],
        signature: '(id)'
    },
	ds_queue_clear: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' }
        ],
        signature: '(id)'
    },
	ds_queue_copy: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' },
            { label: 'source', documentation: '' }
        ],
        signature: '(id, source)'
    },
	ds_queue_create: {
        description: '[Function]'
    },
	ds_queue_dequeue: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' }
        ],
        signature: '(id)'
    },
	ds_queue_destroy: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' }
        ],
        signature: '(id)'
    },
	ds_queue_empty: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' }
        ],
        signature: '(id)'
    },
	ds_queue_enqueue: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' },
            { label: 'value', documentation: '' },
            { label: '...', documentation: '' }
        ],
        signature: '(id, value, ...)'
    },
	ds_queue_head: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' }
        ],
        signature: '(id)'
    },
	ds_queue_read: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' },
            { label: 'str', documentation: '' },
            { label: '...', documentation: '' }
        ],
        signature: '(id, str, ...)'
    },
	ds_queue_size: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' }
        ],
        signature: '(id)'
    },
	ds_queue_tail: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' }
        ],
        signature: '(id)'
    },
	ds_queue_write: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' }
        ],
        signature: '(id)'
    },
	ds_set_precision: {
        description: '[Function]',
        parameters: [
            { label: 'prec', documentation: '' }
        ],
        signature: '(prec)'
    },
	ds_stack_clear: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' }
        ],
        signature: '(id)'
    },
	ds_stack_copy: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' },
            { label: 'source', documentation: '' }
        ],
        signature: '(id, source)'
    },
	ds_stack_create: {
        description: '[Function]'
    },
	ds_stack_destroy: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' }
        ],
        signature: '(id)'
    },
	ds_stack_empty: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' }
        ],
        signature: '(id)'
    },
	ds_stack_pop: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' }
        ],
        signature: '(id)'
    },
	ds_stack_push: {
        description: '[Function]',
        signature: '(id, value, ...)'
    },
	ds_stack_read: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' },
            { label: 'str', documentation: '' },
            { label: '...', documentation: '' }
        ],
        signature: '(id, str, ...)'
    },
	ds_stack_size: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' }
        ],
        signature: '(id)'
    },
	ds_stack_top: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' }
        ],
        signature: '(id)'
    },
	ds_stack_write: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' }
        ],
        signature: '(id)'
    },
	dtan: {
        description: '[Function]',
        parameters: [
            { label: 'degree_angle', documentation: '' }
        ],
        signature: '(degree_angle)'
    },
	effect_clear: {
        description: '[Function]'
    },
	effect_create_above: {
        description: '[Function]',
        parameters: [
            { label: 'kind', documentation: '' },
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' },
            { label: 'size', documentation: '' },
            { label: 'colour', documentation: '' }
        ],
        signature: '(kind, x, y, size, colour)'
    },
	effect_create_below: {
        description: '[Function]',
        parameters: [
            { label: 'kind', documentation: '' },
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' },
            { label: 'size', documentation: '' },
            { label: 'colour', documentation: '' }
        ],
        signature: '(kind, x, y, size, colour)'
    },
	environment_get_variable: {
        description: '[Function]',
        parameters: [
            { label: 'name', documentation: '' }
        ],
        signature: '(name)'
    },
	event_inherited: {
        description: '[Function]'
    },
	event_perform: {
        description: '[Function]',
        parameters: [
            { label: 'type', documentation: '' },
            { label: 'numb', documentation: '' }
        ],
        signature: '(type, numb)'
    },
	event_perform_object: {
        description: '[Function]',
        parameters: [
            { label: 'obj', documentation: '' },
            { label: 'type', documentation: '' },
            { label: 'numb', documentation: '' }
        ],
        signature: '(obj, type, numb)'
    },
	event_user: {
        description: '[Function]',
        parameters: [
            { label: 'numb', documentation: '' }
        ],
        signature: '(numb)'
    },
	exp: {
        description: '[Function]',
        parameters: [
            { label: 'x', documentation: '' }
        ],
        signature: '(x)'
    },
	external_call: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' },
            { label: 'arg1', documentation: '' },
            { label: 'arg2', documentation: '' },
            { label: '...', documentation: '' }
        ],
        signature: '(id, arg1, arg2, ...)'
    },
	external_define: {
        description: '[Function]',
        parameters: [
            { label: 'dll', documentation: '' },
            { label: 'name', documentation: '' },
            { label: 'calltype', documentation: '' },
            { label: 'restype', documentation: '' },
            { label: 'argnumb', documentation: '' },
            { label: 'arg1type', documentation: '' },
            { label: 'arg2type', documentation: '' },
            { label: '...', documentation: '' }
        ],
        signature: '(dll, name, calltype, restype, argnumb, arg1type, arg2type, ...)'
    },
	external_free: {
        description: '[Function]',
        parameters: [
            { label: 'dllname', documentation: '' }
        ],
        signature: '(dllname)'
    },
	facebook_accesstoken: {
        description: '[Function]'
    },
	facebook_check_permission: {
        description: '[Function]',
        parameters: [
            { label: 'permission', documentation: '' }
        ],
        signature: '(permission)'
    },
	facebook_dialog: {
        description: '[Function]',
        parameters: [
            { label: 'graph_path', documentation: '' },
            { label: 'ds_map_params', documentation: '' },
            { label: 'ds_map_response', documentation: '' }
        ],
        signature: '(graph_path, ds_map_params, ds_map_response)'
    },
	facebook_graph_request: {
        description: '[Function]',
        parameters: [
            { label: 'graph_path', documentation: '' },
            { label: 'httpMethod', documentation: '' },
            { label: 'ds_map_params', documentation: '' },
            { label: 'ds_map_response', documentation: '' }
        ],
        signature: '(graph_path, httpMethod, ds_map_params, ds_map_response)'
    },
	facebook_init: {
        description: '[Function]'
    },
	facebook_launch_offerwall: {
        description: '[Function]',
        parameters: [
            { label: 'product_url', documentation: '' }
        ],
        signature: '(product_url)'
    },
	facebook_login: {
        description: '[Function]',
        parameters: [
            { label: 'ds_list_of_permissions', documentation: '' },
            { label: 'ios_login_type', documentation: '' }
        ],
        signature: '(ds_list_of_permissions, ios_login_type)'
    },
	facebook_logout: {
        description: '[Function]'
    },
	facebook_post_message: {
        description: '[Function]',
        parameters: [
            { label: 'title', documentation: '' },
            { label: 'caption', documentation: '' },
            { label: 'message', documentation: '' },
            { label: 'picture_url', documentation: '' },
            { label: 'redirect_url', documentation: '' },
            { label: 'actionname', documentation: '' },
            { label: 'action_url', documentation: '' }
        ],
        signature: '(title, caption, message, picture_url, redirect_url, actionname, action_url)'
    },
	facebook_request_publish_permissions: {
        description: '[Function]',
        parameters: [
            { label: 'ds_list_permissions', documentation: '' }
        ],
        signature: '(ds_list_permissions)'
    },
	facebook_request_read_permissions: {
        description: '[Function]',
        parameters: [
            { label: 'ds_list_permissions', documentation: '' }
        ],
        signature: '(ds_list_permissions)'
    },
	facebook_send_invite: {
        description: '[Function]',
        parameters: [
            { label: 'title', documentation: '' },
            { label: 'message', documentation: '' },
            { label: 'picture_url', documentation: '' },
            { label: 'redirect_url', documentation: '' },
            { label: 'ds_map_response', documentation: '' }
        ],
        signature: '(title, message, picture_url, redirect_url, ds_map_response)'
    },
	facebook_status: {
        description: '[Function]'
    },
	facebook_user_id: {
        description: '[Function]'
    },
	filename_change_ext: {
        description: '[Function]',
        parameters: [
            { label: 'fname', documentation: '' },
            { label: 'newext', documentation: '' }
        ],
        signature: '(fname, newext)'
    },
	filename_dir: {
        description: '[Function]',
        parameters: [
            { label: 'fname', documentation: '' }
        ],
        signature: '(fname)'
    },
	filename_drive: {
        description: '[Function]',
        parameters: [
            { label: 'fname', documentation: '' }
        ],
        signature: '(fname)'
    },
	filename_ext: {
        description: '[Function]',
        parameters: [
            { label: 'fname', documentation: '' }
        ],
        signature: '(fname)'
    },
	filename_name: {
        description: '[Function]',
        parameters: [
            { label: 'fname', documentation: '' }
        ],
        signature: '(fname)'
    },
	filename_path: {
        description: '[Function]',
        parameters: [
            { label: 'fname', documentation: '' }
        ],
        signature: '(fname)'
    },
	file_attributes: {
        description: '[Function]',
        parameters: [
            { label: 'fname', documentation: '' },
            { label: 'attr', documentation: '' }
        ],
        signature: '(fname, attr)'
    },
	file_bin_close: {
        description: '[Function]',
        parameters: [
            { label: 'binfile', documentation: '' }
        ],
        signature: '(binfile)'
    },
	file_bin_open: {
        description: '[Function]',
        parameters: [
            { label: 'fname', documentation: '' },
            { label: 'mode', documentation: '' }
        ],
        signature: '(fname, mode)'
    },
	file_bin_position: {
        description: '[Function]',
        parameters: [
            { label: 'binfile', documentation: '' }
        ],
        signature: '(binfile)'
    },
	file_bin_read_byte: {
        description: '[Function]',
        parameters: [
            { label: 'binfile', documentation: '' }
        ],
        signature: '(binfile)'
    },
	file_bin_rewrite: {
        description: '[Function]',
        parameters: [
            { label: 'binfile', documentation: '' }
        ],
        signature: '(binfile)'
    },
	file_bin_seek: {
        description: '[Function]',
        parameters: [
            { label: 'binfile', documentation: '' },
            { label: 'pos', documentation: '' }
        ],
        signature: '(binfile, pos)'
    },
	file_bin_size: {
        description: '[Function]',
        parameters: [
            { label: 'binfile', documentation: '' }
        ],
        signature: '(binfile)'
    },
	file_bin_write_byte: {
        description: '[Function]',
        parameters: [
            { label: 'binfile', documentation: '' },
            { label: 'byte', documentation: '' }
        ],
        signature: '(binfile, byte)'
    },
	file_copy: {
        description: '[Function]',
        parameters: [
            { label: 'fname', documentation: '' },
            { label: 'newname', documentation: '' }
        ],
        signature: '(fname, newname)'
    },
	file_delete: {
        description: '[Function]',
        parameters: [
            { label: 'fname', documentation: '' }
        ],
        signature: '(fname)'
    },
	file_exists: {
        description: '[Function]',
        parameters: [
            { label: 'fname', documentation: '' }
        ],
        signature: '(fname)'
    },
	file_find_close: {
        description: '[Function]'
    },
	file_find_first: {
        description: '[Function]',
        parameters: [
            { label: 'mask', documentation: '' },
            { label: 'attr', documentation: '' }
        ],
        signature: '(mask, attr)'
    },
	file_find_next: {
        description: '[Function]'
    },
	file_rename: {
        description: '[Function]',
        parameters: [
            { label: 'oldname', documentation: '' },
            { label: 'newname', documentation: '' }
        ],
        signature: '(oldname, newname)'
    },
	file_text_close: {
        description: '[Function]',
        parameters: [
            { label: 'file', documentation: '' }
        ],
        signature: '(file)'
    },
	file_text_eof: {
        description: '[Function]',
        parameters: [
            { label: 'file', documentation: '' }
        ],
        signature: '(file)'
    },
	file_text_eoln: {
        description: '[Function]',
        parameters: [
            { label: 'file', documentation: '' }
        ],
        signature: '(file)'
    },
	file_text_open_append: {
        description: '[Function]',
        parameters: [
            { label: 'fname', documentation: '' }
        ],
        signature: '(fname)'
    },
	file_text_open_from_string: {
        description: '[Function]',
        parameters: [
            { label: 'content', documentation: '' }
        ],
        signature: '(content)'
    },
	file_text_open_read: {
        description: '[Function]',
        parameters: [
            { label: 'fname', documentation: '' }
        ],
        signature: '(fname)'
    },
	file_text_open_write: {
        description: '[Function]',
        parameters: [
            { label: 'fname', documentation: '' }
        ],
        signature: '(fname)'
    },
	file_text_readln: {
        description: '[Function]',
        parameters: [
            { label: 'file', documentation: '' }
        ],
        signature: '(file)'
    },
	file_text_read_real: {
        description: '[Function]',
        parameters: [
            { label: 'file', documentation: '' }
        ],
        signature: '(file)'
    },
	file_text_read_string: {
        description: '[Function]',
        parameters: [
            { label: 'file', documentation: '' }
        ],
        signature: '(file)'
    },
	file_text_writeln: {
        description: '[Function]',
        parameters: [
            { label: 'file', documentation: '' }
        ],
        signature: '(file)'
    },
	file_text_write_real: {
        description: '[Function]',
        parameters: [
            { label: 'file', documentation: '' },
            { label: 'val', documentation: '' }
        ],
        signature: '(file, val)'
    },
	file_text_write_string: {
        description: '[Function]',
        parameters: [
            { label: 'file', documentation: '' },
            { label: 'str', documentation: '' }
        ],
        signature: '(file, str)'
    },
	floor: {
        description: '[Function]',
        parameters: [
            { label: 'x', documentation: '' }
        ],
        signature: '(x)'
    },
	font_add: {
        description: '[Function]',
        parameters: [
            { label: 'name', documentation: '' },
            { label: 'size', documentation: '' },
            { label: 'bold', documentation: '' },
            { label: 'italic', documentation: '' },
            { label: 'first', documentation: '' },
            { label: 'last', documentation: '' }
        ],
        signature: '(name, size, bold, italic, first, last)'
    },
	font_add_sprite: {
        description: '[Function]',
        parameters: [
            { label: 'spr', documentation: '' },
            { label: 'first', documentation: '' },
            { label: 'prop', documentation: '' },
            { label: 'sep', documentation: '' }
        ],
        signature: '(spr, first, prop, sep)'
    },
	font_add_sprite_ext: {
        description: '[Function]',
        parameters: [
            { label: 'spr', documentation: '' },
            { label: 'mapstring', documentation: '' },
            { label: 'prop', documentation: '' },
            { label: 'sep', documentation: '' }
        ],
        signature: '(spr, mapstring, prop, sep)'
    },
	font_delete: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' }
        ],
        signature: '(ind)'
    },
	font_exists: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' }
        ],
        signature: '(ind)'
    },
	font_get_bold: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' }
        ],
        signature: '(ind)'
    },
	font_get_first: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' }
        ],
        signature: '(ind)'
    },
	font_get_fontname: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' }
        ],
        signature: '(ind)'
    },
	font_get_italic: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' }
        ],
        signature: '(ind)'
    },
	font_get_last: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' }
        ],
        signature: '(ind)'
    },
	font_get_name: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' }
        ],
        signature: '(ind)'
    },
	font_get_size: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' }
        ],
        signature: '(ind)'
    },
	font_get_texture: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' }
        ],
        signature: '(ind)'
    },
	font_get_uvs: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' }
        ],
        signature: '(ind)'
    },
	font_replace: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' },
            { label: 'name', documentation: '' },
            { label: 'size', documentation: '' },
            { label: 'bold', documentation: '' },
            { label: 'italic', documentation: '' },
            { label: 'first', documentation: '' },
            { label: 'last', documentation: '' }
        ],
        signature: '(ind, name, size, bold, italic, first, last)'
    },
	font_replace_sprite: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' },
            { label: 'spr', documentation: '' },
            { label: 'first', documentation: '' },
            { label: 'prop', documentation: '' },
            { label: 'sep', documentation: '' }
        ],
        signature: '(ind, spr, first, prop, sep)'
    },
	font_replace_sprite_ext: {
        description: '[Function]',
        parameters: [
            { label: 'font', documentation: '' },
            { label: 'spr', documentation: '' },
            { label: 'string_map', documentation: '' },
            { label: 'prop', documentation: '' },
            { label: 'sep', documentation: '' }
        ],
        signature: '(font, spr, string_map, prop, sep)'
    },
	font_set_cache_size: {
        description: '[Function]',
        parameters: [
            { label: 'font', documentation: '' },
            { label: 'max', documentation: '' }
        ],
        signature: '(font, max)'
    },
	frac: {
        description: '[Function]',
        parameters: [
            { label: 'x', documentation: '' }
        ],
        signature: '(x)'
    },
	gamepad_axis_count: {
        description: '[Function]',
        parameters: [
            { label: 'axis', documentation: '' }
        ],
        signature: '(axis)'
    },
	gamepad_axis_value: {
        description: '[Function]',
        parameters: [
            { label: 'device', documentation: '' },
            { label: 'axisIndex', documentation: '' }
        ],
        signature: '(device, axisIndex)'
    },
	gamepad_button_check: {
        description: '[Function]',
        parameters: [
            { label: 'device', documentation: '' },
            { label: 'buttonIndex', documentation: '' }
        ],
        signature: '(device, buttonIndex)'
    },
	gamepad_button_check_pressed: {
        description: '[Function]',
        parameters: [
            { label: 'device', documentation: '' },
            { label: 'buttonIndex', documentation: '' }
        ],
        signature: '(device, buttonIndex)'
    },
	gamepad_button_check_released: {
        description: '[Function]',
        parameters: [
            { label: 'device', documentation: '' },
            { label: 'buttonIndex', documentation: '' }
        ],
        signature: '(device, buttonIndex)'
    },
	gamepad_button_count: {
        description: '[Function]',
        parameters: [
            { label: 'device', documentation: '' }
        ],
        signature: '(device)'
    },
	gamepad_button_value: {
        description: '[Function]',
        parameters: [
            { label: 'device', documentation: '' },
            { label: 'buttonIndex', documentation: '' }
        ],
        signature: '(device, buttonIndex)'
    },
	gamepad_get_axis_deadzone: {
        description: '[Function]',
        parameters: [
            { label: 'device', documentation: '' }
        ],
        signature: '(device)'
    },
	gamepad_get_button_threshold: {
        description: '[Function]',
        parameters: [
            { label: 'device', documentation: '' }
        ],
        signature: '(device)'
    },
	gamepad_get_description: {
        description: '[Function]',
        parameters: [
            { label: 'device', documentation: '' }
        ],
        signature: '(device)'
    },
	gamepad_get_device_count: {
        description: '[Function]'
    },
	gamepad_is_connected: {
        description: '[Function]',
        parameters: [
            { label: 'device', documentation: '' }
        ],
        signature: '(device)'
    },
	gamepad_is_supported: {
        description: '[Function]'
    },
	gamepad_set_axis_deadzone: {
        description: '[Function]',
        parameters: [
            { label: 'device', documentation: '' },
            { label: 'deadzone', documentation: '' }
        ],
        signature: '(device, deadzone)'
    },
	gamepad_set_button_threshold: {
        description: '[Function]',
        parameters: [
            { label: 'device', documentation: '' },
            { label: 'threshold', documentation: '' }
        ],
        signature: '(device, threshold)'
    },
	gamepad_set_color: {
        description: '[Function]',
        parameters: [
            { label: 'index', documentation: '' },
            { label: 'color', documentation: '' }
        ],
        signature: '(index, color)'
    },
	gamepad_set_colour: {
        description: '[Function]',
        parameters: [
            { label: 'index', documentation: '' },
            { label: 'colour', documentation: '' }
        ],
        signature: '(index, colour)'
    },
	gamepad_set_vibration: {
        description: '[Function]',
        parameters: [
            { label: 'device', documentation: '' },
            { label: 'leftMotorSpeed', documentation: '' },
            { label: 'rightMotorSpeed', documentation: '' }
        ],
        signature: '(device, leftMotorSpeed, rightMotorSpeed)'
    },
	game_end: {
        description: '[Function]'
    },
	game_load: {
        description: '[Function]',
        parameters: [
            { label: 'filename', documentation: '' }
        ],
        signature: '(filename)'
    },
	game_load_buffer: {
        description: '[Function]',
        parameters: [
            { label: 'buffer', documentation: '' }
        ],
        signature: '(buffer)'
    },
	game_restart: {
        description: '[Function]'
    },
	game_save: {
        description: '[Function]',
        parameters: [
            { label: 'filename', documentation: '' }
        ],
        signature: '(filename)'
    },
	game_save_buffer: {
        description: '[Function]',
        parameters: [
            { label: 'buffer', documentation: '' }
        ],
        signature: '(buffer)'
    },
	get_integer: {
        description: '[Function]',
        parameters: [
            { label: 'str', documentation: '' },
            { label: 'def', documentation: '' }
        ],
        signature: '(str, def)'
    },
	get_integer_async: {
        description: '[Function]',
        parameters: [
            { label: 'str', documentation: '' },
            { label: 'def', documentation: '' }
        ],
        signature: '(str, def)'
    },
	get_login_async: {
        description: '[Function]',
        parameters: [
            { label: 'username', documentation: '' },
            { label: 'password', documentation: '' }
        ],
        signature: '(username, password)'
    },
	get_open_filename: {
        description: '[Function]',
        parameters: [
            { label: 'filter', documentation: '' },
            { label: 'fname', documentation: '' }
        ],
        signature: '(filter, fname)'
    },
	get_open_filename_ext: {
        description: '[Function]',
        parameters: [
            { label: 'filter', documentation: '' },
            { label: 'fname', documentation: '' },
            { label: 'dir', documentation: '' },
            { label: 'title', documentation: '' }
        ],
        signature: '(filter, fname, dir, title)'
    },
	get_save_filename: {
        description: '[Function]',
        parameters: [
            { label: 'filter', documentation: '' },
            { label: 'fname', documentation: '' }
        ],
        signature: '(filter, fname)'
    },
	get_save_filename_ext: {
        description: '[Function]',
        parameters: [
            { label: 'filter', documentation: '' },
            { label: 'fname', documentation: '' },
            { label: 'dir', documentation: '' },
            { label: 'title', documentation: '' }
        ],
        signature: '(filter, fname, dir, title)'
    },
	get_string: {
        description: '[Function]',
        parameters: [
            { label: 'str', documentation: '' },
            { label: 'def', documentation: '' }
        ],
        signature: '(str, def)'
    },
	get_string_async: {
        description: '[Function]',
        parameters: [
            { label: 'str', documentation: '' },
            { label: 'def', documentation: '' }
        ],
        signature: '(str, def)'
    },
	get_timer: {
        description: '[Function]'
    },
	gml_pragma: {
        description: '[Function]',
        parameters: [
            { label: 'setting', documentation: '' },
            { label: '....', documentation: '' }
        ],
        signature: '(setting, ....)'
    },
	gml_release_mode: {
        description: '[Function]',
        parameters: [
            { label: 'enable', documentation: '' }
        ],
        signature: '(enable)'
    },
	highscore_add: {
        description: '[Function]',
        parameters: [
            { label: 'str', documentation: '' },
            { label: 'numb', documentation: '' }
        ],
        signature: '(str, numb)'
    },
	highscore_clear: {
        description: '[Function]'
    },
	highscore_name: {
        description: '[Function]',
        parameters: [
            { label: 'place', documentation: '' }
        ],
        signature: '(place)'
    },
	highscore_value: {
        description: '[Function]',
        parameters: [
            { label: 'place', documentation: '' }
        ],
        signature: '(place)'
    },
	http_get: {
        description: '[Function]',
        parameters: [
            { label: 'url', documentation: '' }
        ],
        signature: '(url)'
    },
	http_get_file: {
        description: '[Function]',
        parameters: [
            { label: 'url', documentation: '' },
            { label: 'dest', documentation: '' }
        ],
        signature: '(url, dest)'
    },
	http_post_string: {
        description: '[Function]',
        parameters: [
            { label: 'url', documentation: '' },
            { label: 'string', documentation: '' }
        ],
        signature: '(url, string)'
    },
	http_request: {
        description: '[Function]',
        parameters: [
            { label: 'url', documentation: '' },
            { label: 'method', documentation: '' },
            { label: 'header_map', documentation: '' },
            { label: 'body', documentation: '' }
        ],
        signature: '(url, method, header_map, body)'
    },
	iap_acquire: {
        description: '[Function]',
        parameters: [
            { label: 'product_id', documentation: '' },
            { label: 'payload', documentation: '' }
        ],
        signature: '(product_id, payload)'
    },
	iap_activate: {
        description: '[Function]',
        parameters: [
            { label: 'ds_list', documentation: '' }
        ],
        signature: '(ds_list)'
    },
	iap_consume: {
        description: '[Function]',
        parameters: [
            { label: 'product_id', documentation: '' }
        ],
        signature: '(product_id)'
    },
	iap_enumerate_products: {
        description: '[Function]',
        parameters: [
            { label: 'ds_list', documentation: '' }
        ],
        signature: '(ds_list)'
    },
	iap_is_purchased: {
        description: '[Function]',
        parameters: [
            { label: 'product_id', documentation: '' }
        ],
        signature: '(product_id)'
    },
	iap_product_details: {
        description: '[Function]',
        parameters: [
            { label: 'product_id', documentation: '' },
            { label: 'ds_map', documentation: '' }
        ],
        signature: '(product_id, ds_map)'
    },
	iap_purchase_details: {
        description: '[Function]',
        parameters: [
            { label: 'product_id', documentation: '' },
            { label: 'ds_map', documentation: '' }
        ],
        signature: '(product_id, ds_map)'
    },
	iap_restore_all: {
        description: '[Function]'
    },
	iap_status: {
        description: '[Function]'
    },
	immersion_play_effect: {
        description: '[Function]',
        parameters: [
            { label: 'effect', documentation: '' }
        ],
        signature: '(effect)'
    },
	immersion_stop: {
        description: '[Function]'
    },
	ini_close: {
        description: '[Function]'
    },
	ini_key_delete: {
        description: '[Function]',
        parameters: [
            { label: 'section', documentation: '' },
            { label: 'key', documentation: '' }
        ],
        signature: '(section, key)'
    },
	ini_key_exists: {
        description: '[Function]',
        parameters: [
            { label: 'section', documentation: '' },
            { label: 'key', documentation: '' }
        ],
        signature: '(section, key)'
    },
	ini_open: {
        description: '[Function]',
        parameters: [
            { label: 'fname', documentation: '' }
        ],
        signature: '(fname)'
    },
	ini_open_from_string: {
        description: '[Function]',
        parameters: [
            { label: 'content', documentation: '' }
        ],
        signature: '(content)'
    },
	ini_read_real: {
        description: '[Function]',
        parameters: [
            { label: 'section', documentation: '' },
            { label: 'key', documentation: '' },
            { label: 'default', documentation: '' }
        ],
        signature: '(section, key, default)'
    },
	ini_read_string: {
        description: '[Function]',
        parameters: [
            { label: 'section', documentation: '' },
            { label: 'key', documentation: '' },
            { label: 'default', documentation: '' }
        ],
        signature: '(section, key, default)'
    },
	ini_section_delete: {
        description: '[Function]',
        parameters: [
            { label: 'section', documentation: '' }
        ],
        signature: '(section)'
    },
	ini_section_exists: {
        description: '[Function]',
        parameters: [
            { label: 'section', documentation: '' }
        ],
        signature: '(section)'
    },
	ini_write_real: {
        description: '[Function]',
        parameters: [
            { label: 'section', documentation: '' },
            { label: 'key', documentation: '' },
            { label: 'value', documentation: '' }
        ],
        signature: '(section, key, value)'
    },
	ini_write_string: {
        description: '[Function]',
        parameters: [
            { label: 'section', documentation: '' },
            { label: 'key', documentation: '' },
            { label: 'str', documentation: '' }
        ],
        signature: '(section, key, str)'
    },
	instance_activate_all: {
        description: '[Function]'
    },
	instance_activate_object: {
        description: '[Function]',
        parameters: [
            { label: 'obj', documentation: '' }
        ],
        signature: '(obj)'
    },
	instance_activate_region: {
        description: '[Function]',
        parameters: [
            { label: 'left', documentation: '' },
            { label: 'top', documentation: '' },
            { label: 'width', documentation: '' },
            { label: 'height', documentation: '' },
            { label: 'inside', documentation: '' }
        ],
        signature: '(left, top, width, height, inside)'
    },
	instance_change: {
        description: '[Function]',
        parameters: [
            { label: 'obj', documentation: '' },
            { label: 'performevents', documentation: '' }
        ],
        signature: '(obj, performevents)'
    },
	instance_copy: {
        description: '[Function]',
        parameters: [
            { label: 'performevents', documentation: '' }
        ],
        signature: '(performevent)'
    },
	instance_create: {
        description: '[Function]',
        parameters: [
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' },
            { label: 'obj', documentation: '' }
        ],
        signature: '(x, y, obj)'
    },
	instance_deactivate_all: {
        description: '[Function]',
        parameters: [
            { label: 'notme', documentation: '' }
        ],
        signature: '(notme)'
    },
	instance_deactivate_object: {
        description: '[Function]',
        parameters: [
            { label: 'obj', documentation: '' }
        ],
        signature: '(obj)'
    },
	instance_deactivate_region: {
        description: '[Function]',
        parameters: [
            { label: 'left', documentation: '' },
            { label: 'top', documentation: '' },
            { label: 'width', documentation: '' },
            { label: 'height', documentation: '' },
            { label: 'inside', documentation: '' },
            { label: 'notme', documentation: '' }
        ],
        signature: '(left, top, width, height, inside, notme)'
    },
	instance_destroy: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' },
            { label: 'execute_event_flag', documentation: '' }
        ],
        signature: '(id, execute_event_flag)'
    },
	instance_exists: {
        description: '[Function]',
        parameters: [
            { label: 'obj', documentation: '' }
        ],
        signature: '(obj)'
    },
	instance_find: {
        description: '[Function]',
        parameters: [
            { label: 'obj', documentation: '' },
            { label: 'n', documentation: '' }
        ],
        signature: '(obj, n)'
    },
	instance_furthest: {
        description: '[Function]',
        parameters: [
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' },
            { label: 'obj', documentation: '' }
        ],
        signature: '(x, y, obj)'
    },
	instance_nearest: {
        description: '[Function]',
        parameters: [
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' },
            { label: 'obj', documentation: '' }
        ],
        signature: '(x, y, obj)'
    },
	instance_number: {
        description: '[Function]',
        parameters: [
            { label: 'obj', documentation: '' }
        ],
        signature: '(obj)'
    },
	instance_place: {
        description: '[Function]',
        parameters: [
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' },
            { label: 'obj', documentation: '' }
        ],
        signature: '(x, y, obj)'
    },
	instance_position: {
        description: '[Function]',
        parameters: [
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' },
            { label: 'obj', documentation: '' }
        ],
        signature: '(x, y, obj)'
    },
	int64: {
        description: '[Function]',
        parameters: [
            { label: 'val', documentation: '' }
        ],
        signature: '(val)'
    },
	io_clear: {
        description: '[Function]'
    },
	irandom: {
        description: '[Function]',
        parameters: [
            { label: 'x', documentation: '' }
        ],
        signature: '(x)'
    },
	irandom_old: {
        description: '[Function]',
        parameters: [
            { label: 'x', documentation: '' }
        ],
        signature: '(x)'
    },
	irandom_range: {
        description: '[Function]',
        parameters: [
            { label: 'x1', documentation: '' },
            { label: 'x2', documentation: '' }
        ],
        signature: '(x1, x2)'
    },
	irandom_range_old: {
        description: '[Function]',
        parameters: [
            { label: 'x1', documentation: '' },
            { label: 'x2', documentation: '' }
        ],
        signature: '(x1, x2)'
    },
	is_array: {
        description: '[Function]',
        parameters: [
            { label: 'val', documentation: '' }
        ],
        signature: '(val)'
    },
	is_bool: {
        description: '[Function]',
        parameters: [
            { label: 'val', documentation: '' }
        ],
        signature: '(val)'
    },
	is_int32: {
        description: '[Function]',
        parameters: [
            { label: 'val', documentation: '' }
        ],
        signature: '(val)'
    },
	is_int64: {
        description: '[Function]',
        parameters: [
            { label: 'val', documentation: '' }
        ],
        signature: '(val)'
    },
	is_matrix: {
        description: '[Function]',
        parameters: [
            { label: 'val', documentation: '' }
        ],
        signature: '(val)'
    },
	is_ptr: {
        description: '[Function]',
        parameters: [
            { label: 'val', documentation: '' }
        ],
        signature: '(val)'
    },
	is_real: {
        description: '[Function]',
        parameters: [
            { label: 'val', documentation: '' }
        ],
        signature: '(val)'
    },
	is_string: {
        description: '[Function]',
        parameters: [
            { label: 'val', documentation: '' }
        ],
        signature: '(val)'
    },
	is_undefined: {
        description: '[Function]',
        parameters: [
            { label: 'val', documentation: '' }
        ],
        signature: '(val)'
    },
	is_vec3: {
        description: '[Function]',
        parameters: [
            { label: 'val', documentation: '' }
        ],
        signature: '(val)'
    },
	is_vec4: {
        description: '[Function]',
        parameters: [
            { label: 'val', documentation: '' }
        ],
        signature: '(val)'
    },
	joystick_axes: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' }
        ],
        signature: '(id)'
    },
	joystick_buttons: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' }
        ],
        signature: '(id)'
    },
	joystick_check_button: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' },
            { label: 'button', documentation: '' }
        ],
        signature: '(id, button)'
    },
	joystick_direction: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' }
        ],
        signature: '(id)'
    },
	joystick_exists: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' }
        ],
        signature: '(id)'
    },
	joystick_has_pov: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' }
        ],
        signature: '(id)'
    },
	joystick_name: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' }
        ],
        signature: '(id)'
    },
	joystick_pov: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' }
        ],
        signature: '(id)'
    },
	joystick_rpos: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' }
        ],
        signature: '(id)'
    },
	joystick_upos: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' }
        ],
        signature: '(id)'
    },
	joystick_vpos: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' }
        ],
        signature: '(id)'
    },
	joystick_xpos: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' }
        ],
        signature: '(id)'
    },
	joystick_ypos: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' }
        ],
        signature: '(id)'
    },
	joystick_zpos: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' }
        ],
        signature: '(id)'
    },
	json_decode: {
        description: '[Function]',
        parameters: [
            { label: 'string', documentation: '' }
        ],
        signature: '(string)'
    },
	json_encode: {
        description: '[Function]',
        parameters: [
            { label: 'ds_map', documentation: '' }
        ],
        signature: '(ds_map)'
    },
	keyboard_check: {
        description: '[Function]',
        parameters: [
            { label: 'key', documentation: '' }
        ],
        signature: '(key)'
    },
	keyboard_check_direct: {
        description: '[Function]',
        parameters: [
            { label: 'key', documentation: '' }
        ],
        signature: '(key)'
    },
	keyboard_check_pressed: {
        description: '[Function]',
        parameters: [
            { label: 'key', documentation: '' }
        ],
        signature: '(key)'
    },
	keyboard_check_released: {
        description: '[Function]',
        parameters: [
            { label: 'key', documentation: '' }
        ],
        signature: '(key)'
    },
	keyboard_clear: {
        description: '[Function]',
        parameters: [
            { label: 'key', documentation: '' }
        ],
        signature: '(key)'
    },
	keyboard_get_map: {
        description: '[Function]',
        parameters: [
            { label: 'key', documentation: '' }
        ],
        signature: '(key)'
    },
	keyboard_get_numlock: {
        description: '[Function]'
    },
	keyboard_key_press: {
        description: '[Function]',
        parameters: [
            { label: 'key', documentation: '' }
        ],
        signature: '(key)'
    },
	keyboard_key_release: {
        description: '[Function]',
        parameters: [
            { label: 'key', documentation: '' }
        ],
        signature: '(key)'
    },
	keyboard_set_map: {
        description: '[Function]',
        parameters: [
            { label: 'key1', documentation: '' },
            { label: 'key2', documentation: '' }
        ],
        signature: '(key1, key2)'
    },
	keyboard_set_numlock: {
        description: '[Function]',
        parameters: [
            { label: 'bool', documentation: '' }
        ],
        signature: '(bool)'
    },
	keyboard_unset_map: {
        description: '[Function]'
    },
	lengthdir_x: {
        description: '[Function]',
        parameters: [
            { label: 'len', documentation: '' },
            { label: 'dir', documentation: '' }
        ],
        signature: '(len, dir)'
    },
	lengthdir_y: {
        description: '[Function]',
        parameters: [
            { label: 'len', documentation: '' },
            { label: 'dir', documentation: '' }
        ],
        signature: '(len, dir)'
    },
	lerp: {
        description: '[Function]',
        parameters: [
            { label: 'val1', documentation: '' },
            { label: 'val2', documentation: '' },
            { label: 'amount', documentation: '' }
        ],
        signature: '(val1, val2, amount)'
    },
	ln: {
        description: '[Function]',
        parameters: [
            { label: 'x', documentation: '' }
        ],
        signature: '(x)'
    },
	log10: {
        description: '[Function]',
        parameters: [
            { label: 'x', documentation: '' }
        ],
        signature: '(x)'
    },
	log2: {
        description: '[Function]',
        parameters: [
            { label: 'x', documentation: '' }
        ],
        signature: '(x)'
    },
	logn: {
        description: '[Function]',
        parameters: [
            { label: 'n', documentation: '' },
            { label: 'x', documentation: '' }
        ],
        signature: '(n, x)'
    },
	make_color_hsv: {
        description: '[Function]',
        parameters: [
            { label: 'hue', documentation: '' },
            { label: 'saturation', documentation: '' },
            { label: 'value', documentation: '' }
        ],
        signature: '(hue, saturation, value)'
    },
	make_color_rgb: {
        description: '[Function]',
        parameters: [
            { label: 'red', documentation: '' },
            { label: 'green', documentation: '' },
            { label: 'blue', documentation: '' }
        ],
        signature: '(red, green, blue)'
    },
	make_colour_hsv: {
        description: '[Function]',
        parameters: [
            { label: 'hue', documentation: '' },
            { label: 'saturation', documentation: '' },
            { label: 'value', documentation: '' }
        ],
        signature: '(hue, saturation, value)'
    },
	make_colour_rgb: {
        description: '[Function]',
        parameters: [
            { label: 'red', documentation: '' },
            { label: 'green', documentation: '' },
            { label: 'blue', documentation: '' }
        ],
        signature: '(red, green, blue)'
    },
	math_get_epsilon: {
        description: '[Function]'
    },
	math_set_epsilon: {
        description: '[Function]',
        parameters: [
            { label: 'new_epsilon', documentation: '' }
        ],
        signature: '(new_epsilon)'
    },
	matrix_build: {
        description: '[Function]',
        parameters: [
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' },
            { label: 'z', documentation: '' },
            { label: 'xrotation', documentation: '' },
            { label: 'yrotation', documentation: '' },
            { label: 'zrotation', documentation: '' },
            { label: 'xscale', documentation: '' },
            { label: 'yscale', documentation: '' },
            { label: 'zscale', documentation: '' }
        ],
        signature: '(x, y, z, xrotation, yrotation, zrotation, xscale, yscale, zscale)'
    },
	matrix_get: {
        description: '[Function]',
        parameters: [
            { label: 'type', documentation: '' }
        ],
        signature: '(type)'
    },
	matrix_multiply: {
        description: '[Function]',
        parameters: [
            { label: 'matrix', documentation: '' },
            { label: 'matrix', documentation: '' }
        ],
        signature: '(matrix, matrix)'
    },
	matrix_set: {
        description: '[Function]',
        parameters: [
            { label: 'type', documentation: '' },
            { label: 'matrix', documentation: '' }
        ],
        signature: '(type, matrix)'
    },
	max: {
        description: '[Function]',
        parameters: [
            { label: 'x1', documentation: '' },
            { label: 'x2', documentation: '' },
            { label: 'x3', documentation: '' },
            { label: '...', documentation: '' }
        ],
        signature: '(x1, x2, x3, ...)'
    },
	md5_file: {
        description: '[Function]',
        parameters: [
            { label: 'fname', documentation: '' }
        ],
        signature: '(fname)'
    },
	md5_string_unicode: {
        description: '[Function]',
        parameters: [
            { label: 'string', documentation: '' }
        ],
        signature: '(string)'
    },
	md5_string_utf8: {
        description: '[Function]',
        parameters: [
            { label: 'string', documentation: '' }
        ],
        signature: '(string)'
    },
	mean: {
        description: '[Function]',
        parameters: [
            { label: 'x1', documentation: '' },
            { label: 'x2', documentation: '' },
            { label: 'x3', documentation: '' },
            { label: '...', documentation: '' }
        ],
        signature: '(x1, x2, x3, ...)'
    },
	median: {
        description: '[Function]',
        parameters: [
            { label: 'x1', documentation: '' },
            { label: 'x2', documentation: '' },
            { label: 'x3', documentation: '' },
            { label: '...', documentation: '' }
        ],
        signature: '(x1, x2, x3, ...)'
    },
	merge_color: {
        description: '[Function]',
        parameters: [
            { label: 'col1', documentation: '' },
            { label: 'col2', documentation: '' },
            { label: 'amount', documentation: '' }
        ],
        signature: '(col1, col2, amount)'
    },
	min: {
        description: '[Function]',
        parameters: [
            { label: 'x1', documentation: '' },
            { label: 'x2', documentation: '' },
            { label: 'x3', documentation: '' },
            { label: '...', documentation: '' }
        ],
        signature: '(x1, x2, x3, ...)'
    },
	motion_add: {
        description: '[Function]',
        parameters: [
            { label: 'dir', documentation: '' },
            { label: 'speed', documentation: '' }
        ],
        signature: '(dir, speed)'
    },
	motion_set: {
        description: '[Function]',
        parameters: [
            { label: 'dir', documentation: '' },
            { label: 'speed', documentation: '' }
        ],
        signature: '(dir, speed)'
    },
	mouse_check_button: {
        description: '[Function]',
        parameters: [
            { label: 'button', documentation: '' }
        ],
        signature: '(button)'
    },
	mouse_check_button_pressed: {
        description: '[Function]',
        parameters: [
            { label: 'button', documentation: '' }
        ],
        signature: '(button)'
    },
	mouse_check_button_released: {
        description: '[Function]',
        parameters: [
            { label: 'button', documentation: '' }
        ],
        signature: '(button)'
    },
	mouse_clear: {
        description: '[Function]',
        parameters: [
            { label: 'button', documentation: '' }
        ],
        signature: '(button)'
    },
	mouse_wheel_down: {
        description: '[Function]'
    },
	mouse_wheel_up: {
        description: '[Function]'
    },
	move_bounce_all: {
        description: '[Function]',
        parameters: [
            { label: 'advanced', documentation: '' }
        ],
        signature: '(advanced)'
    },
	move_bounce_solid: {
        description: '[Function]',
        parameters: [
            { label: 'advanced', documentation: '' }
        ],
        signature: '(advanced)'
    },
	move_contact_all: {
        description: '[Function]',
        parameters: [
            { label: 'dir', documentation: '' },
            { label: 'maxdist', documentation: '' }
        ],
        signature: '(dir, maxdist)'
    },
	move_contact_solid: {
        description: '[Function]',
        parameters: [
            { label: 'dir', documentation: '' },
            { label: 'maxdist', documentation: '' }
        ],
        signature: '(dir, maxdist)'
    },
	move_outside_all: {
        description: '[Function]',
        parameters: [
            { label: 'dir', documentation: '' },
            { label: 'maxdist', documentation: '' }
        ],
        signature: '(dir, maxdist)'
    },
	move_outside_solid: {
        description: '[Function]',
        parameters: [
            { label: 'dir', documentation: '' },
            { label: 'maxdist', documentation: '' }
        ],
        signature: '(dir, maxdist)'
    },
	move_random: {
        description: '[Function]',
        parameters: [
            { label: 'hsnap', documentation: '' },
            { label: 'vsnap', documentation: '' }
        ],
        signature: '(hsnap, vsnap)'
    },
	move_snap: {
        description: '[Function]',
        parameters: [
            { label: 'hsnap', documentation: '' },
            { label: 'vsnap', documentation: '' }
        ],
        signature: '(hsnap, vsnap)'
    },
	move_towards_point: {
        description: '[Function]',
        parameters: [
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' },
            { label: 'sp', documentation: '' }
        ],
        signature: '(x, y, sp)'
    },
	move_wrap: {
        description: '[Function]',
        parameters: [
            { label: 'hor', documentation: '' },
            { label: 'vert', documentation: '' },
            { label: 'margin', documentation: '' }
        ],
        signature: '(hor, vert, margin)'
    },
	mp_grid_add_cell: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' },
            { label: 'h', documentation: '' },
            { label: 'v', documentation: '' }
        ],
        signature: '(id, h, v)'
    },
	mp_grid_add_instances: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' },
            { label: 'obj', documentation: '' },
            { label: 'prec', documentation: '' }
        ],
        signature: '(id, obj, prec)'
    },
	mp_grid_add_rectangle: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' },
            { label: 'left', documentation: '' },
            { label: 'top', documentation: '' },
            { label: 'right', documentation: '' },
            { label: 'bottom', documentation: '' }
        ],
        signature: '(id, left, top, right, bottom)'
    },
	mp_grid_clear_all: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' }
        ],
        signature: '(id)'
    },
	mp_grid_clear_cell: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' },
            { label: 'h', documentation: '' },
            { label: 'v', documentation: '' }
        ],
        signature: '(id, h, v)'
    },
	mp_grid_clear_rectangle: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' },
            { label: 'left', documentation: '' },
            { label: 'top', documentation: '' },
            { label: 'right', documentation: '' },
            { label: 'bottom', documentation: '' }
        ],
        signature: '(id, left, top, right, bottom)'
    },
	mp_grid_create: {
        description: '[Function]',
        parameters: [
            { label: 'left', documentation: '' },
            { label: 'top', documentation: '' },
            { label: 'hcells', documentation: '' },
            { label: 'vcells', documentation: '' },
            { label: 'cellwidth', documentation: '' },
            { label: 'cellheight', documentation: '' }
        ],
        signature: '(left, top, hcells, vcells, cellwidth, cellheight)'
    },
	mp_grid_destroy: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' }
        ],
        signature: '(id)'
    },
	mp_grid_draw: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' }
        ],
        signature: '(id)'
    },
	mp_grid_get_cell: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' },
            { label: 'h', documentation: '' },
            { label: 'v', documentation: '' }
        ],
        signature: '(id, h, v)'
    },
	mp_grid_path: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' },
            { label: 'path', documentation: '' },
            { label: 'xstart', documentation: '' },
            { label: 'ystart', documentation: '' },
            { label: 'xgoal', documentation: '' },
            { label: 'ygoal', documentation: '' },
            { label: 'allowdiag', documentation: '' }
        ],
        signature: '(id, path, xstart, ystart, xgoal, ygoal, allowdiag)'
    },
	mp_grid_to_ds_grid: {
        description: '[Function]',
        parameters: [
            { label: 'src', documentation: '' },
            { label: 'dest', documentation: '' }
        ],
        signature: '(src, dest)'
    },
	mp_linear_path: {
        description: '[Function]',
        parameters: [
            { label: 'path', documentation: '' },
            { label: 'xg', documentation: '' },
            { label: 'yg', documentation: '' },
            { label: 'stepsize', documentation: '' },
            { label: 'checkall', documentation: '' }
        ],
        signature: '(path, xg, yg, stepsize, checkall)'
    },
	mp_linear_path_object: {
        description: '[Function]',
        parameters: [
            { label: 'path', documentation: '' },
            { label: 'xg', documentation: '' },
            { label: 'yg', documentation: '' },
            { label: 'stepsize', documentation: '' },
            { label: 'obj', documentation: '' }
        ],
        signature: '(path, xg, yg, stepsize, obj)'
    },
	mp_linear_step: {
        description: '[Function]',
        parameters: [
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' },
            { label: 'speed', documentation: '' },
            { label: 'checkall', documentation: '' }
        ],
        signature: '(x, y, speed, checkall)'
    },
	mp_linear_step_object: {
        description: '[Function]',
        parameters: [
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' },
            { label: 'speed', documentation: '' },
            { label: 'obj', documentation: '' }
        ],
        signature: '(x, y, speed, obj)'
    },
	mp_potential_path: {
        description: '[Function]',
        parameters: [
            { label: 'path', documentation: '' },
            { label: 'xg', documentation: '' },
            { label: 'yg', documentation: '' },
            { label: 'stepsize', documentation: '' },
            { label: 'factor', documentation: '' },
            { label: 'checkall', documentation: '' }
        ],
        signature: '(path, xg, yg, stepsize, factor, checkall)'
    },
	mp_potential_path_object: {
        description: '[Function]',
        parameters: [
            { label: 'path', documentation: '' },
            { label: 'xg', documentation: '' },
            { label: 'yg', documentation: '' },
            { label: 'stepsize', documentation: '' },
            { label: 'factor', documentation: '' },
            { label: 'obj', documentation: '' }
        ],
        signature: '(path, xg, yg, stepsize, factor, obj)'
    },
	mp_potential_settings: {
        description: '[Function]',
        parameters: [
            { label: 'maxrot', documentation: '' },
            { label: 'rotstep', documentation: '' },
            { label: 'ahead', documentation: '' },
            { label: 'onspot', documentation: '' }
        ],
        signature: '(maxrot, rotstep, ahead, onspot)'
    },
	mp_potential_step: {
        description: '[Function]',
        parameters: [
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' },
            { label: 'speed', documentation: '' },
            { label: 'checkall', documentation: '' }
        ],
        signature: '(x, y, speed, checkall)'
    },
	mp_potential_step_object: {
        description: '[Function]',
        parameters: [
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' },
            { label: 'speed', documentation: '' },
            { label: 'obj', documentation: '' }
        ],
        signature: '(x, y, speed, obj)'
    },
	network_connect: {
        description: '[Function]',
        parameters: [
            { label: 'socket', documentation: '' },
            { label: 'url', documentation: '' },
            { label: 'port', documentation: '' }
        ],
        signature: '(socket, url, port)'
    },
	network_connect_raw: {
        description: '[Function]',
        parameters: [
            { label: 'socket', documentation: '' },
            { label: 'url', documentation: '' },
            { label: 'port', documentation: '' }
        ],
        signature: '(socket, url, port)'
    },
	network_create_server: {
        description: '[Function]',
        parameters: [
            { label: 'type', documentation: '' },
            { label: 'port', documentation: '' },
            { label: 'maxclients', documentation: '' }
        ],
        signature: '(type, port, maxclients)'
    },
	network_create_server_raw: {
        description: '[Function]',
        parameters: [
            { label: 'type', documentation: '' },
            { label: 'port', documentation: '' },
            { label: 'maxclients', documentation: '' }
        ],
        signature: '(type, port, maxclients)'
    },
	network_create_socket: {
        description: '[Function]',
        parameters: [
            { label: 'type', documentation: '' }
        ],
        signature: '(type)'
    },
	network_create_socket_ext: {
        description: '[Function]',
        parameters: [
            { label: 'type', documentation: '' },
            { label: 'port', documentation: '' }
        ],
        signature: '(type, port)'
    },
	network_destroy: {
        description: '[Function]',
        parameters: [
            { label: 'socket', documentation: '' }
        ],
        signature: '(socket)'
    },
	network_resolve: {
        description: '[Function]',
        parameters: [
            { label: 'url', documentation: '' }
        ],
        signature: '(url)'
    },
	network_send_broadcast: {
        description: '[Function]',
        parameters: [
            { label: 'socket', documentation: '' },
            { label: 'port', documentation: '' },
            { label: 'bufferid', documentation: '' },
            { label: 'size', documentation: '' }
        ],
        signature: '(socket, port, bufferid, size)'
    },
	network_send_packet: {
        description: '[Function]',
        parameters: [
            { label: 'socket', documentation: '' },
            { label: 'bufferid', documentation: '' },
            { label: 'size', documentation: '' }
        ],
        signature: '(socket, bufferid, size)'
    },
	network_send_raw: {
        description: '[Function]',
        parameters: [
            { label: 'socket', documentation: '' },
            { label: 'bufferid', documentation: '' },
            { label: 'size', documentation: '' }
        ],
        signature: '(socket, buffer_id, size)'
    },
	network_send_udp: {
        description: '[Function]',
        parameters: [
            { label: 'socket', documentation: '' },
            { label: 'URL', documentation: '' },
            { label: 'port', documentation: '' },
            { label: 'data', documentation: '' },
            { label: 'size', documentation: '' }
        ],
        signature: '(socket, URL, port, data, size)'
    },
	network_send_udp_raw: {
        description: '[Function]',
        parameters: [
            { label: 'socket', documentation: '' },
            { label: 'URL', documentation: '' },
            { label: 'port', documentation: '' },
            { label: 'data', documentation: '' },
            { label: 'size', documentation: '' }
        ],
        signature: '(socket, URL, port, data, size)'
    },
	network_set_config: {
        description: '[Function]',
        parameters: [
            { label: 'parameter', documentation: '' },
            { label: 'value', documentation: '' }
        ],
        signature: '(parameter, value)'
    },
	network_set_timeout: {
        description: '[Function]',
        parameters: [
            { label: 'socket', documentation: '' },
            { label: 'read', documentation: '' },
            { label: 'write', documentation: '' }
        ],
        signature: '(socket, read, write)'
    },
	object_exists: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' }
        ],
        signature: '(ind)'
    },
	object_get_depth: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' }
        ],
        signature: '(ind)'
    },
	object_get_mask: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' }
        ],
        signature: '(ind)'
    },
	object_get_name: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' }
        ],
        signature: '(ind)'
    },
	object_get_parent: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' }
        ],
        signature: '(ind)'
    },
	object_get_persistent: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' }
        ],
        signature: '(ind)'
    },
	object_get_physics: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' }
        ],
        signature: '(ind)'
    },
	object_get_solid: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' }
        ],
        signature: '(ind)'
    },
	object_get_sprite: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' }
        ],
        signature: '(ind)'
    },
	object_get_visible: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' }
        ],
        signature: '(ind)'
    },
	object_is_ancestor: {
        description: '[Function]',
        parameters: [
            { label: 'ind_child', documentation: '' },
            { label: 'ind_parent', documentation: '' }
        ],
        signature: '(ind_child, ind_parent)'
    },
	object_set_depth: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' },
            { label: 'depth', documentation: '' }
        ],
        signature: '(ind, depth)'
    },
	object_set_mask: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' },
            { label: 'spr', documentation: '' }
        ],
        signature: '(ind, spr)'
    },
	object_set_parent: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' },
            { label: 'obj', documentation: '' }
        ],
        signature: '(ind, obj)'
    },
	object_set_persistent: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' },
            { label: 'pers', documentation: '' }
        ],
        signature: '(ind, pers)'
    },
	object_set_solid: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' },
            { label: 'soild', documentation: '' }
        ],
        signature: '(ind, soild)'
    },
	object_set_sprite: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' },
            { label: 'spr', documentation: '' }
        ],
        signature: '(ind, spr)'
    },
	object_set_visible: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' },
            { label: 'vis', documentation: '' }
        ],
        signature: '(ind, vis)'
    },
	ord: {
        description: '[Function]',
        parameters: [
            { label: 'char', documentation: '' }
        ],
        signature: '(char)'
    },
	os_get_config: {
        description: '[Function]'
    },
	os_get_info: {
        description: '[Function]'
    },
	os_get_language: {
        description: '[Function]'
    },
	os_get_region: {
        description: '[Function]'
    },
	os_is_network_connected: {
        description: '[Function]'
    },
	os_is_paused: {
        description: '[Function]'
    },
	os_lock_orientation: {
        description: '[Function]',
        parameters: [
            { label: 'flag', documentation: '' }
        ],
        signature: '(flag)'
    },
	os_powersave_enable: {
        description: '[Function]',
        parameters: [
            { label: 'enable', documentation: '' }
        ],
        signature: '(enable)'
    },
	parameter_count: {
        description: '[Function]'
    },
	parameter_string: {
        description: '[Function]',
        parameters: [
            { label: 'n', documentation: '' }
        ],
        signature: '(n)'
    },
	part_emitter_burst: {
        description: '[Function]',
        parameters: [
            { label: 'ps', documentation: '' },
            { label: 'ind', documentation: '' },
            { label: 'parttype', documentation: '' },
            { label: 'number', documentation: '' }
        ],
        signature: '(ps, ind, parttype, number)'
    },
	part_emitter_clear: {
        description: '[Function]',
        parameters: [
            { label: 'ps', documentation: '' },
            { label: 'ind', documentation: '' }
        ],
        signature: '(ps, ind)'
    },
	part_emitter_create: {
        description: '[Function]',
        parameters: [
            { label: 'ps', documentation: '' }
        ],
        signature: '(ps)'
    },
	part_emitter_destroy: {
        description: '[Function]',
        parameters: [
            { label: 'ps', documentation: '' },
            { label: 'ind', documentation: '' }
        ],
        signature: '(ps, ind)'
    },
	part_emitter_destroy_all: {
        description: '[Function]',
        parameters: [
            { label: 'ps', documentation: '' }
        ],
        signature: '(ps)'
    },
	part_emitter_exists: {
        description: '[Function]',
        parameters: [
            { label: 'ps', documentation: '' },
            { label: 'ind', documentation: '' }
        ],
        signature: '(ps, ind)'
    },
	part_emitter_region: {
        description: '[Function]',
        parameters: [
            { label: 'ps', documentation: '' },
            { label: 'ind', documentation: '' },
            { label: 'xmin', documentation: '' },
            { label: 'xmax', documentation: '' },
            { label: 'ymin', documentation: '' },
            { label: 'ymax', documentation: '' },
            { label: 'shape', documentation: '' },
            { label: 'distribution', documentation: '' }
        ],
        signature: '(ps, ind, xmin, xmax, ymin, ymax, shape, distribution)'
    },
	part_emitter_stream: {
        description: '[Function]',
        parameters: [
            { label: 'ps', documentation: '' },
            { label: 'ind', documentation: '' },
            { label: 'parttype', documentation: '' },
            { label: 'number', documentation: '' }
        ],
        signature: '(ps, ind, parttype, number)'
    },
	part_particles_clear: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' }
        ],
        signature: '(ind)'
    },
	part_particles_count: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' }
        ],
        signature: '(ind)'
    },
	part_particles_create: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' },
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' },
            { label: 'parttype', documentation: '' },
            { label: 'number', documentation: '' }
        ],
        signature: '(ind, x, y, parttype, number)'
    },
	part_particles_create_color: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' },
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' },
            { label: 'parttype', documentation: '' },
            { label: 'colour', documentation: '' },
            { label: 'number', documentation: '' }
        ],
        signature: '(ind, x, y, parttype, colour, number)'
    },
	part_particles_create_colour: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' },
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' },
            { label: 'parttype', documentation: '' },
            { label: 'colour', documentation: '' },
            { label: 'number', documentation: '' }
        ],
        signature: '(ind, x, y, parttype, colour, number)'
    },
	part_system_automatic_draw: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' },
            { label: 'draw', documentation: '' }
        ],
        signature: '(ind, draw)'
    },
	part_system_automatic_update: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' },
            { label: 'automatic', documentation: '' }
        ],
        signature: '(ind, automatic)'
    },
	part_system_clear: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' }
        ],
        signature: '(ind)'
    },
	part_system_create: {
        description: '[Function]'
    },
	part_system_depth: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' },
            { label: 'depth', documentation: '' }
        ],
        signature: '(ind, depth)'
    },
	part_system_destroy: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' }
        ],
        signature: '(ind)'
    },
	part_system_drawit: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' }
        ],
        signature: '(ind)'
    },
	part_system_draw_order: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' },
            { label: 'oldtonew', documentation: '' }
        ],
        signature: '(ind, oldtonew)'
    },
	part_system_exists: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' }
        ],
        signature: '(ind)'
    },
	part_system_position: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' },
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' }
        ],
        signature: '(ind, x, y)'
    },
	part_system_update: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' }
        ],
        signature: '(ind)'
    },
	part_type_alpha1: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' },
            { label: 'alpha1', documentation: '' }
        ],
        signature: '(ind, alpha1)'
    },
	part_type_alpha2: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' },
            { label: 'alpha1', documentation: '' },
            { label: 'alpha2', documentation: '' }
        ],
        signature: '(ind, alpha1, alpha2)'
    },
	part_type_alpha3: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' },
            { label: 'alpha1', documentation: '' },
            { label: 'alpha2', documentation: '' },
            { label: 'alpha3', documentation: '' }
        ],
        signature: '(ind, alpha1, alpha2, alpha3)'
    },
	part_type_blend: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' },
            { label: 'additive', documentation: '' }
        ],
        signature: '(ind, additive)'
    },
	part_type_clear: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' }
        ],
        signature: '(ind)'
    },
	part_type_color1: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' },
            { label: 'color1', documentation: '' }
        ],
        signature: '(ind, color1)'
    },
	part_type_color2: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' },
            { label: 'color1', documentation: '' },
            { label: 'color2', documentation: '' }
        ],
        signature: '(ind, color1， color2)'
    },
	part_type_color3: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' },
            { label: 'color1', documentation: '' },
            { label: 'color2', documentation: '' },
            { label: 'color3', documentation: '' }
        ],
        signature: '(ind, color1, color2, color3)'
    },
	part_type_color_hsv: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' },
            { label: 'hmin', documentation: '' },
            { label: 'hmax', documentation: '' },
            { label: 'smin', documentation: '' },
            { label: 'smax', documentation: '' },
            { label: 'vmin', documentation: '' },
            { label: 'vmax', documentation: '' }
        ],
        signature: '(ind, hmin, hmax, smin, smax, vmin, vmax)'
    },
	part_type_color_mix: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' },
            { label: 'color1', documentation: '' },
            { label: 'color2', documentation: '' }
        ],
        signature: '(ind, color1, color2)'
    },
	part_type_color_rgb: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' },
            { label: 'rmin', documentation: '' },
            { label: 'rmax', documentation: '' },
            { label: 'gmin', documentation: '' },
            { label: 'gmax', documentation: '' },
            { label: 'bmin', documentation: '' },
            { label: 'bmax', documentation: '' }
        ],
        signature: '(ind, rmin, rmax, gmin, gmax, bmin, bmax)'
    },
	part_type_colour1: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' },
            { label: 'colour1', documentation: '' }
        ],
        signature: '(ind, colour1)'
    },
	part_type_colour2: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' },
            { label: 'colour1', documentation: '' },
            { label: 'colour2', documentation: '' }
        ],
        signature: '(ind, colour1, colour2)'
    },
	part_type_colour3: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' },
            { label: 'colour1', documentation: '' },
            { label: 'colour2', documentation: '' },
            { label: 'colour3', documentation: '' }
        ],
        signature: '(ind, colour1, colour2, colour3)'
    },
	part_type_colour_hsv: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' },
            { label: 'hmin', documentation: '' },
            { label: 'hmax', documentation: '' },
            { label: 'smin', documentation: '' },
            { label: 'smax', documentation: '' },
            { label: 'vmin', documentation: '' },
            { label: 'vmax', documentation: '' }
        ],
        signature: '(ind, hmin, hmax, smin, smax, vmin, vmax)'
    },
	part_type_colour_mix: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' },
            { label: 'colour1', documentation: '' },
            { label: 'colour2', documentation: '' }
        ],
        signature: '(ind, colour1, colour2)'
    },
	part_type_colour_rgb: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' },
            { label: 'rmin', documentation: '' },
            { label: 'rmax', documentation: '' },
            { label: 'gmin', documentation: '' },
            { label: 'gmax', documentation: '' },
            { label: 'bmin', documentation: '' },
            { label: 'bmax', documentation: '' }
        ],
        signature: '(ind, rmin, rmax, gmin, gmax, bmin, bmax)'
    },
	part_type_create: {
        description: '[Function]'
    },
	part_type_death: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' },
            { label: 'death_number', documentation: '' },
            { label: 'death_type', documentation: '' }
        ],
        signature: '(ind, death_number, death_type)'
    },
	part_type_destroy: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' }
        ],
        signature: '(ind)'
    },
	part_type_direction: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' },
            { label: 'dir_min', documentation: '' },
            { label: 'dir_max', documentation: '' },
            { label: 'dir_incr', documentation: '' },
            { label: 'dir_wiggle', documentation: '' }
        ],
        signature: '(ind, dir_min, dir_max, dir_incr, dir_wiggle)'
    },
	part_type_exists: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' }
        ],
        signature: '(ind)'
    },
	part_type_gravity: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' },
            { label: 'grav_amount', documentation: '' },
            { label: 'grav_dir', documentation: '' }
        ],
        signature: '(ind, grav_amount, grav_dir)'
    },
	part_type_life: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' },
            { label: 'life_min', documentation: '' },
            { label: 'life_max', documentation: '' }
        ],
        signature: '(ind, life_min, life_max)'
    },
	part_type_orientation: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' },
            { label: 'ang_min', documentation: '' },
            { label: 'ang_max', documentation: '' },
            { label: 'ang_incr', documentation: '' },
            { label: 'ang_wiggle', documentation: '' },
            { label: 'ang_relative', documentation: '' }
        ],
        signature: '(ind, ang_min, ang_max, ang_incr, ang_wiggle, ang_relative)'
    },
	part_type_scale: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' },
            { label: 'xscale', documentation: '' },
            { label: 'yscale', documentation: '' }
        ],
        signature: '(ind, xscale, yscale)'
    },
	part_type_shape: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' },
            { label: 'shape', documentation: '' }
        ],
        signature: '(ind, shape)'
    },
	part_type_size: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' },
            { label: 'size_min', documentation: '' },
            { label: 'size_max', documentation: '' },
            { label: 'size_incr', documentation: '' },
            { label: 'size_wiggle', documentation: '' }
        ],
        signature: '(ind, size_min, size_max, size_incr, size_wiggle)'
    },
	part_type_speed: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' },
            { label: 'speed_min', documentation: '' },
            { label: 'speed_max', documentation: '' },
            { label: 'speed_incr', documentation: '' },
            { label: 'speed_wiggle', documentation: '' }
        ],
        signature: '(ind, speed_min, speed_max, speed_incr, speed_wiggle)'
    },
	part_type_sprite: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' },
            { label: 'sprite', documentation: '' },
            { label: 'animat', documentation: '' },
            { label: 'stretch', documentation: '' },
            { label: 'random', documentation: '' }
        ],
        signature: '(ind, sprite, animat, stretch, random)'
    },
	part_type_step: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' },
            { label: 'step_number', documentation: '' },
            { label: 'step_type', documentation: '' }
        ],
        signature: '(ind, step_number, step_type)'
    },
	path_add: {
        description: '[Function]'
    },
	path_add_point: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' },
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' },
            { label: 'speed', documentation: '' }
        ],
        signature: '(ind, x, y, speed)'
    },
	path_append: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' },
            { label: 'path', documentation: '' }
        ],
        signature: '(ind, path)'
    },
	path_assign: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' },
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' },
            { label: 'speed', documentation: '' }
        ],
        signature: '(ind, x, y, speed)'
    },
	path_change_point: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' },
            { label: 'n', documentation: '' },
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' },
            { label: 'speed', documentation: '' }
        ],
        signature: '(ind, n, x, y, speed)'
    },
	path_clear_points: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' }
        ],
        signature: '(ind)'
    },
	path_delete: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' }
        ],
        signature: '(ind)'
    },
	path_delete_point: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' },
            { label: 'n', documentation: '' }
        ],
        signature: '(ind, n)'
    },
	path_duplicate: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' }
        ],
        signature: '(ind)'
    },
	path_end: {
        description: '[Function]'
    },
	path_exists: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' }
        ],
        signature: '(ind)'
    },
	path_flip: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' }
        ],
        signature: '(ind)'
    },
	path_get_closed: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' }
        ],
        signature: '(ind)'
    },
	path_get_kind: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' }
        ],
        signature: '(ind)'
    },
	path_get_length: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' }
        ],
        signature: '(ind)'
    },
	path_get_name: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' }
        ],
        signature: '(ind)'
    },
	path_get_number: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' }
        ],
        signature: '(ind)'
    },
	path_get_point_speed: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' },
            { label: 'n', documentation: '' }
        ],
        signature: '(ind, n)'
    },
	path_get_point_x: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' },
            { label: 'n', documentation: '' }
        ],
        signature: '(ind, n)'
    },
	path_get_point_y: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' },
            { label: 'n', documentation: '' }
        ],
        signature: '(ind, n)'
    },
	path_get_precision: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' }
        ],
        signature: '(ind)'
    },
	path_get_speed: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' },
            { label: 'pos', documentation: '' }
        ],
        signature: '(ind, pos)'
    },
	path_get_time: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' },
            { label: 'speed', documentation: '' }
        ],
        signature: '(ind, speed)'
    },
	path_get_x: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' },
            { label: 'pos', documentation: '' }
        ],
        signature: '(ind, pos)'
    },
	path_get_y: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' },
            { label: 'pos', documentation: '' }
        ],
        signature: '(ind, pos)'
    },
	path_insert_point: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' },
            { label: 'n', documentation: '' },
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' },
            { label: 'speed', documentation: '' }
        ],
        signature: '(ind, n, x, y, speed)'
    },
	path_mirror: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' }
        ],
        signature: '(ind)'
    },
	path_rescale: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' },
            { label: 'xscale', documentation: '' },
            { label: 'yscale', documentation: '' }
        ],
        signature: '(ind, xscale, yscale)'
    },
	path_reverse: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' }
        ],
        signature: '(ind)'
    },
	path_rotate: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' },
            { label: 'angle', documentation: '' }
        ],
        signature: '(ind, angle)'
    },
	path_set_closed: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' },
            { label: 'closed', documentation: '' }
        ],
        signature: '(ind, closed)'
    },
	path_set_kind: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' },
            { label: 'kind', documentation: '' }
        ],
        signature: '(ind, kind)'
    },
	path_set_precision: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' },
            { label: 'prec', documentation: '' }
        ],
        signature: '(ind, prec)'
    },
	path_shift: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' },
            { label: 'xshift', documentation: '' },
            { label: 'yshift', documentation: '' }
        ],
        signature: '(ind, xshift, yshift)'
    },
	path_start: {
        description: '[Function]',
        parameters: [
            { label: 'path', documentation: '' },
            { label: 'speed', documentation: '' },
            { label: 'endaction', documentation: '' },
            { label: 'absolute', documentation: '' }
        ],
        signature: '(path, speed, endaction, absolute)'
    },
	physics_apply_angular_impulse: {
        description: '[Function]',
        parameters: [
            { label: 'impulse', documentation: '' }
        ],
        signature: '(impulse)'
    },
	physics_apply_force: {
        description: '[Function]',
        parameters: [
            { label: 'xpos', documentation: '' },
            { label: 'ypos', documentation: '' },
            { label: 'xforce', documentation: '' },
            { label: 'yforce', documentation: '' }
        ],
        signature: '(xpos, ypos, xforce, yforce)'
    },
	physics_apply_impulse: {
        description: '[Function]',
        parameters: [
            { label: 'xpos', documentation: '' },
            { label: 'ypos', documentation: '' },
            { label: 'ximpulse', documentation: '' },
            { label: 'yimpulse', documentation: '' }
        ],
        signature: '(xpos, ypos, ximpulse, yimpulse)'
    },
	physics_apply_local_force: {
        description: '[Function]',
        parameters: [
            { label: 'xlocal', documentation: '' },
            { label: 'ylocal', documentation: '' },
            { label: 'xforce_local', documentation: '' },
            { label: 'yforce_local', documentation: '' }
        ],
        signature: '(xlocal, ylocal, xforce_local, yforce_local)'
    },
	physics_apply_local_impulse: {
        description: '[Function]',
        parameters: [
            { label: 'xlocal', documentation: '' },
            { label: 'ylocal', documentation: '' },
            { label: 'ximpulse_local', documentation: '' },
            { label: 'yimpulse_local', documentation: '' }
        ],
        signature: '(xlocal, ylocal, ximpulse_local, yimpulse_local)'
    },
	physics_apply_torque: {
        description: '[Function]',
        parameters: [
            { label: 'torque', documentation: '' }
        ],
        signature: '(torque)'
    },
	physics_draw_debug: {
        description: '[Function]'
    },
	physics_fixture_add_point: {
        description: '[Function]',
        parameters: [
            { label: 'fixture', documentation: '' },
            { label: 'local_x', documentation: '' },
            { label: 'local_y', documentation: '' }
        ],
        signature: '(fixture, local_x, local_y)'
    },
	physics_fixture_bind: {
        description: '[Function]',
        parameters: [
            { label: 'fixture', documentation: '' },
            { label: 'obj', documentation: '' }
        ],
        signature: '(fixture, obj)'
    },
	physics_fixture_bind_ext: {
        description: '[Function]',
        parameters: [
            { label: 'fixture', documentation: '' },
            { label: 'obj', documentation: '' },
            { label: 'xo', documentation: '' },
            { label: 'yo', documentation: '' }
        ],
        signature: '(fixture, obj, xo, yo)'
    },
	physics_fixture_create: {
        description: '[Function]'
    },
	physics_fixture_delete: {
        description: '[Function]',
        parameters: [
            { label: 'fixture', documentation: '' }
        ],
        signature: '(fixture)'
    },
	physics_fixture_set_angular_damping: {
        description: '[Function]',
        parameters: [
            { label: 'fixture', documentation: '' },
            { label: 'damping', documentation: '' }
        ],
        signature: '(fixture, damping)'
    },
	physics_fixture_set_awake: {
        description: '[Function]',
        parameters: [
            { label: 'fixture', documentation: '' },
            { label: 'flag', documentation: '' }
        ],
        signature: '(fixture, flag)'
    },
	physics_fixture_set_box_shape: {
        description: '[Function]',
        parameters: [
            { label: 'fixture', documentation: '' },
            { label: 'halfWidth', documentation: '' },
            { label: 'halfHeight', documentation: '' }
        ],
        signature: '(fixture, halfWidth, halfHeight)'
    },
	physics_fixture_set_chain_shape: {
        description: '[Function]',
        parameters: [
            { label: 'fixture', documentation: '' },
            { label: 'loop', documentation: '' }
        ],
        signature: '(fixture, loop)'
    },
	physics_fixture_set_circle_shape: {
        description: '[Function]',
        parameters: [
            { label: 'fixture', documentation: '' },
            { label: 'circleRadius', documentation: '' }
        ],
        signature: '(fixture, circleRadius)'
    },
	physics_fixture_set_collision_group: {
        description: '[Function]',
        parameters: [
            { label: 'fixture', documentation: '' },
            { label: 'group', documentation: '' }
        ],
        signature: '(fixture, group)'
    },
	physics_fixture_set_density: {
        description: '[Function]',
        parameters: [
            { label: 'fixture', documentation: '' },
            { label: 'density', documentation: '' }
        ],
        signature: '(fixture, density)'
    },
	physics_fixture_set_edge_shape: {
        description: '[Function]',
        parameters: [
            { label: 'fixture', documentation: '' },
            { label: 'local_x1', documentation: '' },
            { label: 'local_y1', documentation: '' },
            { label: 'local_x2', documentation: '' },
            { label: 'local_y2', documentation: '' }
        ],
        signature: '(fixture, local_x1, local_y1, local_x2, local_y2)'
    },
	physics_fixture_set_friction: {
        description: '[Function]',
        parameters: [
            { label: 'fixture', documentation: '' },
            { label: 'friction', documentation: '' }
        ],
        signature: '(fixture, friction)'
    },
	physics_fixture_set_kinematic: {
        description: '[Function]',
        parameters: [
            { label: 'fixture', documentation: '' }
        ],
        signature: '(fixture)'
    },
	physics_fixture_set_linear_damping: {
        description: '[Function]',
        parameters: [
            { label: 'fixture', documentation: '' },
            { label: 'damping', documentation: '' }
        ],
        signature: '(fixture, damping)'
    },
	physics_fixture_set_polygon_shape: {
        description: '[Function]',
        parameters: [
            { label: 'fixture', documentation: '' }
        ],
        signature: '(fixture)'
    },
	physics_fixture_set_restitution: {
        description: '[Function]',
        parameters: [
            { label: 'fixture', documentation: '' },
            { label: 'restitution', documentation: '' }
        ],
        signature: '(fixture, restitution)'
    },
	physics_fixture_set_sensor: {
        description: '[Function]',
        parameters: [
            { label: 'fixture', documentation: '' },
            { label: 'sensorState', documentation: '' }
        ],
        signature: '(fixture, sensorState)'
    },
	physics_get_density: {
        description: '[Function]',
        parameters: [
            { label: 'fixture', documentation: '' }
        ],
        signature: '(fixture)'
    },
	physics_get_friction: {
        description: '[Function]',
        parameters: [
            { label: 'fixture', documentation: '' }
        ],
        signature: '(fixture)'
    },
	physics_get_restitution: {
        description: '[Function]',
        parameters: [
            { label: 'fixture', documentation: '' }
        ],
        signature: '(fixture)'
    },
	physics_joint_delete: {
        description: '[Function]',
        parameters: [
            { label: 'joint', documentation: '' }
        ],
        signature: '(joint)'
    },
	physics_joint_distance_create: {
        description: '[Function]',
        parameters: [
            { label: 'inst1', documentation: '' },
            { label: 'inst2', documentation: '' },
            { label: 'anchor_1_x', documentation: '' },
            { label: 'anchor_1_y', documentation: '' },
            { label: 'anchor_2_x', documentation: '' },
            { label: 'anchor_2_y', documentation: '' },
            { label: 'collideInstances', documentation: '' }
        ],
        signature: '(inst1, inst2, anchor_1_x, anchor_1_y, anchor_2_x, anchor_2_y, collideInstances)'
    },
	physics_joint_enable_motor: {
        description: '[Function]',
        parameters: [
            { label: 'joint', documentation: '' },
            { label: 'motorState', documentation: '' }
        ],
        signature: '(joint, motorState)'
    },
	physics_joint_friction_create: {
        description: '[Function]',
        parameters: [
            { label: 'inst1', documentation: '' },
            { label: 'inst2', documentation: '' },
            { label: 'anchor_x', documentation: '' },
            { label: 'anchor_y', documentation: '' },
            { label: 'max_force', documentation: '' },
            { label: 'max_torque', documentation: '' },
            { label: 'collideInstances', documentation: '' }
        ],
        signature: '(inst1, inst2, anchor_x, anchor_y, max_force, max_torque, collideInstances)'
    },
	physics_joint_gear_create: {
        description: '[Function]',
        parameters: [
            { label: 'inst1', documentation: '' },
            { label: 'inst2', documentation: '' },
            { label: 'revoluteJoint', documentation: '' },
            { label: 'prismaticJoint', documentation: '' },
            { label: 'ratio', documentation: '' }
        ],
        signature: '(inst1, inst2, revoluteJoint, prismaticJoint, ratio)'
    },
	physics_joint_get_value: {
        description: '[Function]',
        parameters: [
            { label: 'joint', documentation: '' },
            { label: 'field', documentation: '' }
        ],
        signature: '(joint, field)'
    },
	physics_joint_prismatic_create: {
        description: '[Function]',
        parameters: [
            { label: 'inst1', documentation: '' },
            { label: 'inst2', documentation: '' },
            { label: 'anchor_x', documentation: '' },
            { label: 'anchor_y', documentation: '' },
            { label: 'axis_x', documentation: '' },
            { label: 'axis_y', documentation: '' },
            { label: 'lower_translation_limit', documentation: '' },
            { label: 'upper_translation_limit', documentation: '' },
            { label: 'enable_limit', documentation: '' },
            { label: 'max_motor_force', documentation: '' },
            { label: 'motor_speed', documentation: '' },
            { label: 'enable_motor', documentation: '' },
            { label: 'collideInstances', documentation: '' }
        ],
        signature: '(inst1, inst2, anchor_x, anchor_y, axis_x, axis_y, lower_translation_limit, upper_translation_limit, enable_limit, max_motor_force, motor_speed, enable_motor, collideInstances)'
    },
	physics_joint_pulley_create: {
        description: '[Function]',
        parameters: [
            { label: 'inst1', documentation: '' },
            { label: 'inst2', documentation: '' },
            { label: 'anchor_1_x', documentation: '' },
            { label: 'anchor_1_y', documentation: '' },
            { label: 'anchor_2_x', documentation: '' },
            { label: 'anchor_2_y', documentation: '' },
            { label: 'local_anchor_1_x', documentation: '' },
            { label: 'local_anchor_1_y', documentation: '' },
            { label: 'local_anchor_2_x', documentation: '' },
            { label: 'local_anchor_2_y', documentation: '' },
            { label: 'ratio', documentation: '' },
            { label: 'collideInstances', documentation: '' }
        ],
        signature: '(inst1, inst2, anchor_1_x, anchor_1_y, anchor_2_x, anchor_2_y, local_anchor_1_x, local_anchor_1_y, local_anchor_2_x, local_anchor_2_y, ratio, collideInstances)'
    },
	physics_joint_revolute_create: {
        description: '[Function]',
        parameters: [
            { label: 'inst1', documentation: '' },
            { label: 'inst2', documentation: '' },
            { label: 'anchor_x', documentation: '' },
            { label: 'anchor_y', documentation: '' },
            { label: 'lower_translation_limit', documentation: '' },
            { label: 'upper_translation_limit', documentation: '' },
            { label: 'enable_limit', documentation: '' },
            { label: 'max_motor_force', documentation: '' },
            { label: 'motor_speed', documentation: '' },
            { label: 'enable_motor', documentation: '' },
            { label: 'collideInstances', documentation: '' }
        ],
        signature: '(inst1, inst2, anchor_x, anchor_y, lower_angle_limit, upper_angle_limit, enable_limit, max_motor_torque, motor_speed, enable_motor, collideInstances)'
    },
	physics_joint_rope_create: {
        description: '[Function]',
        parameters: [
            { label: 'inst1', documentation: '' },
            { label: 'inst2', documentation: '' },
            { label: 'anchor_1_x', documentation: '' },
            { label: 'anchor_1_y', documentation: '' },
            { label: 'anchor_2_x', documentation: '' },
            { label: 'anchor_2_y', documentation: '' },
            { label: 'maxLength', documentation: '' },
            { label: 'collideInstances', documentation: '' }
        ],
        signature: '(inst1, inst2, anchor_1_x, anchor_1_y, anchor_2_x, anchor_2_y, maxLength, collideInstances)'
    },
	physics_joint_set_value: {
        description: '[Function]',
        parameters: [
            { label: 'joint', documentation: '' },
            { label: 'field', documentation: '' },
            { label: 'value', documentation: '' }
        ],
        signature: '(joint, field, value)'
    },
	physics_joint_weld_create: {
        description: '[Function]',
        parameters: [
            { label: 'inst1', documentation: '' },
            { label: 'inst2', documentation: '' },
            { label: 'anchor_x', documentation: '' },
            { label: 'anchor_y', documentation: '' },
            { label: 'ref_angle', documentation: '' },
            { label: 'freq_hz', documentation: '' },
            { label: 'damping_ratio', documentation: '' },
            { label: 'collideInstances', documentation: '' }
        ],
        signature: '(inst1, inst2, anchor_x, anchor_y, ref_angle, freq_hz, damping_ratio, collideInstances)'
    },
	physics_joint_wheel_create: {
        description: '[Function]',
        parameters: [
            { label: 'inst1', documentation: '' },
            { label: 'inst2', documentation: '' },
            { label: 'anchor_x', documentation: '' },
            { label: 'anchor_y', documentation: '' },
            { label: 'axis_x', documentation: '' },
            { label: 'axis_y', documentation: '' },
            { label: 'enableMotor', documentation: '' },
            { label: 'max_motor_torque', documentation: '' },
            { label: 'motor_speed', documentation: '' },
            { label: 'freq_hz', documentation: '' },
            { label: 'damping_ratio', documentation: '' },
            { label: 'collideInstances', documentation: '' }
        ],
        signature: '(inst1, inst2, anchor_x, anchor_y, axis_x, axis_y, enableMotor, max_motor_torque, motor_speed, freq_hz, damping_ratio, collideInstances)'
    },
	physics_mass_properties: {
        description: '[Function]',
        parameters: [
            { label: 'mass', documentation: '' },
            { label: 'local_centre_of_mass_x', documentation: '' },
            { label: 'local_centre_of_mass_y', documentation: '' },
            { label: 'inertia', documentation: '' }
        ],
        signature: '(mass, local_centre_of_mass_x, local_centre_of_mass_y, inertia)'
    },
	physics_particle_count: {
        description: '[Function]'
    },
	physics_particle_create: {
        description: '[Function]',
        parameters: [
            { label: 'typeflags', documentation: '' },
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' },
            { label: 'xv', documentation: '' },
            { label: 'yv', documentation: '' },
            { label: 'col', documentation: '' },
            { label: 'alpha', documentation: '' },
            { label: 'category', documentation: '' }
        ],
        signature: '(typeflags, x, y, xv, yv, col, alpha, category)'
    },
	physics_particle_delete: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' }
        ],
        signature: '(ind)'
    },
	physics_particle_delete_region_box: {
        description: '[Function]',
        parameters: [
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' },
            { label: 'halfWidth', documentation: '' },
            { label: 'halfHeight', documentation: '' }
        ],
        signature: '(x, y, halfWidth, halfHeight)'
    },
	physics_particle_delete_region_circle: {
        description: '[Function]',
        parameters: [
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' },
            { label: 'radius', documentation: '' }
        ],
        signature: '(x, y, radius)'
    },
	physics_particle_delete_region_poly: {
        description: '[Function]',
        parameters: [
            { label: 'pointList', documentation: '' }
        ],
        signature: '(pointList)'
    },
	physics_particle_draw: {
        description: '[Function]',
        parameters: [
            { label: 'typemask', documentation: '' },
            { label: 'category', documentation: '' },
            { label: 'sprite', documentation: '' },
            { label: 'subimg', documentation: '' }
        ],
        signature: '(typemask, category, sprite, subimg)'
    },
	physics_particle_draw_ext: {
        description: '[Function]',
        parameters: [
            { label: 'typemask', documentation: '' },
            { label: 'category', documentation: '' },
            { label: 'sprite', documentation: '' },
            { label: 'subimg', documentation: '' },
            { label: 'xscale', documentation: '' },
            { label: 'yscale', documentation: '' },
            { label: 'angle', documentation: '' },
            { label: 'col', documentation: '' },
            { label: 'alpha', documentation: '' }
        ],
        signature: '(typemask, category, sprite, subimg, xscale, yscale, angle, col, alpha)'
    },
	physics_particle_get_damping: {
        description: '[Function]'
    },
	physics_particle_get_data: {
        description: '[Function]',
        parameters: [
            { label: 'buffer', documentation: '' },
            { label: 'dataFlags', documentation: '' }
        ],
        signature: '(buffer, dataFlags)'
    },
	physics_particle_get_data_particle: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' },
            { label: 'buffer', documentation: '' },
            { label: 'dataFlags', documentation: '' }
        ],
        signature: '(ind, buffer, dataFlags)'
    },
	physics_particle_get_density: {
        description: '[Function]'
    },
	physics_particle_get_gravity_scale: {
        description: '[Function]'
    },
	physics_particle_get_group_flags: {
        description: '[Function]',
        parameters: [
            { label: 'group', documentation: '' }
        ],
        signature: '(group)'
    },
	physics_particle_get_max_count: {
        description: '[Function]'
    },
	physics_particle_get_radius: {
        description: '[Function]'
    },
	physics_particle_group_add_point: {
        description: '[Function]',
        parameters: [
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' }
        ],
        signature: '(x, y)'
    },
	physics_particle_group_begin: {
        description: '[Function]',
        parameters: [
            { label: 'typeflags', documentation: '' },
            { label: 'groupflag', documentation: '' },
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' },
            { label: 'ang', documentation: '' },
            { label: 'xv', documentation: '' },
            { label: 'yv', documentation: '' },
            { label: 'angVelocity', documentation: '' },
            { label: 'col', documentation: '' },
            { label: 'alpha', documentation: '' },
            { label: 'strength', documentation: '' },
            { label: 'category', documentation: '' }
        ],
        signature: '(typeflags, groupflags, x, y, ang, xv, yv, angVelocity, col, alpha, strength, category)'
    },
	physics_particle_group_box: {
        description: '[Function]',
        parameters: [
            { label: 'halfWidth', documentation: '' },
            { label: 'halfHeight', documentation: '' }
        ],
        signature: '(halfWidth, halfHeight)'
    },
	physics_particle_group_circle: {
        description: '[Function]',
        parameters: [
            { label: 'radius', documentation: '' }
        ],
        signature: '(radius)'
    },
	physics_particle_group_count: {
        description: '[Function]',
        parameters: [
            { label: 'group', documentation: '' }
        ],
        signature: '(group)'
    },
	physics_particle_group_delete: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' }
        ],
        signature: '(ind)'
    },
	physics_particle_group_end: {
        description: '[Function]'
    },
	physics_particle_group_get_angle: {
        description: '[Function]',
        parameters: [
            { label: 'group', documentation: '' }
        ],
        signature: '(group)'
    },
	physics_particle_group_get_ang_vel: {
        description: '[Function]',
        parameters: [
            { label: 'group', documentation: '' }
        ],
        signature: '(group)'
    },
	physics_particle_group_get_centre_x: {
        description: '[Function]',
        parameters: [
            { label: 'group', documentation: '' }
        ],
        signature: '(group)'
    },
	physics_particle_group_get_centre_y: {
        description: '[Function]',
        parameters: [
            { label: 'group', documentation: '' }
        ],
        signature: '(group)'
    },
	physics_particle_group_get_data: {
        description: '[Function]',
        parameters: [
            { label: 'group', documentation: '' },
            { label: 'buffer', documentation: '' },
            { label: 'dataFlags', documentation: '' }
        ],
        signature: '(group, buffer, dataFlags)'
    },
	physics_particle_group_get_inertia: {
        description: '[Function]',
        parameters: [
            { label: 'group', documentation: '' }
        ],
        signature: '(group)'
    },
	physics_particle_group_get_mass: {
        description: '[Function]',
        parameters: [
            { label: 'group', documentation: '' }
        ],
        signature: '(group)'
    },
	physics_particle_group_get_vel_x: {
        description: '[Function]',
        parameters: [
            { label: 'group', documentation: '' }
        ],
        signature: '(group)'
    },
	physics_particle_group_get_vel_y: {
        description: '[Function]',
        parameters: [
            { label: 'group', documentation: '' }
        ],
        signature: '(group)'
    },
	physics_particle_group_get_x: {
        description: '[Function]',
        parameters: [
            { label: 'group', documentation: '' }
        ],
        signature: '(group)'
    },
	physics_particle_group_get_y: {
        description: '[Function]',
        parameters: [
            { label: 'group', documentation: '' }
        ],
        signature: '(group)'
    },
	physics_particle_group_join: {
        description: '[Function]',
        parameters: [
            { label: 'to', documentation: '' },
            { label: 'from', documentation: '' }
        ],
        signature: '(to, from)'
    },
	physics_particle_group_polygon: {
        description: '[Function]'
    },
	physics_particle_set_category_flags: {
        description: '[Function]',
        parameters: [
            { label: 'catagory', documentation: '' },
            { label: 'typeflags', documentation: '' }
        ],
        signature: '(category, typeflags)'
    },
	physics_particle_set_damping: {
        description: '[Function]',
        parameters: [
            { label: 'damping', documentation: '' }
        ],
        signature: '(damping)'
    },
	physics_particle_set_density: {
        description: '[Function]',
        parameters: [
            { label: 'density', documentation: '' }
        ],
        signature: '(density)'
    },
	physics_particle_set_flags: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' },
            { label: 'typeflags', documentation: '' }
        ],
        signature: '(ind, typeflags)'
    },
	physics_particle_set_gravity_scale: {
        description: '[Function]',
        parameters: [
            { label: 'scale', documentation: '' }
        ],
        signature: '(scale)'
    },
	physics_particle_set_group_flags: {
        description: '[Function]',
        parameters: [
            { label: 'group', documentation: '' },
            { label: 'groupflags', documentation: '' }
        ],
        signature: '(group, groupflags)'
    },
	physics_particle_set_max_count: {
        description: '[Function]',
        parameters: [
            { label: 'count', documentation: '' }
        ],
        signature: '(count)'
    },
	physics_particle_set_radius: {
        description: '[Function]',
        parameters: [
            { label: 'radius', documentation: '' }
        ],
        signature: '(radius)'
    },
	physics_pause_enable: {
        description: '[Function]',
        parameters: [
            { label: 'pause', documentation: '' }
        ],
        signature: '(pause)'
    },
	physics_remove_fixture: {
        description: '[Function]',
        parameters: [
            { label: 'inst', documentation: '' },
            { label: 'id', documentation: '' }
        ],
        signature: '(inst, id)'
    },
	physics_set_density: {
        description: '[Function]',
        parameters: [
            { label: 'fixture', documentation: '' },
            { label: 'density', documentation: '' }
        ],
        signature: '(fixture, density)'
    },
	physics_set_friction: {
        description: '[Function]',
        parameters: [
            { label: 'fixture', documentation: '' },
            { label: 'friction', documentation: '' }
        ],
        signature: '(fixture, friction)'
    },
	physics_set_restitution: {
        description: '[Function]',
        parameters: [
            { label: 'fixture', documentation: '' },
            { label: 'restitution', documentation: '' }
        ],
        signature: '(fixture, restitution)'
    },
	physics_test_overlap: {
        description: '[Function]',
        parameters: [
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' },
            { label: 'angle', documentation: '' },
            { label: 'obj', documentation: '' }
        ],
        signature: '(x, y, angle, obj)'
    },
	physics_world_create: {
        description: '[Function]',
        parameters: [
            { label: 'PixelToMetreScale', documentation: '' }
        ],
        signature: '(PixelToMetreScale)'
    },
	physics_world_draw_debug: {
        description: '[Function]',
        parameters: [
            { label: 'draw_flags', documentation: '' }
        ],
        signature: '(draw_flags)'
    },
	physics_world_gravity: {
        description: '[Function]',
        parameters: [
            { label: 'gx', documentation: '' },
            { label: 'gy', documentation: '' }
        ],
        signature: '(gx, gy)'
    },
	physics_world_update_iterations: {
        description: '[Function]',
        parameters: [
            { label: 'iterations', documentation: '' }
        ],
        signature: '(iterations)'
    },
	physics_world_update_speed: {
        description: '[Function]',
        parameters: [
            { label: 'speed', documentation: '' }
        ],
        signature: '(speed)'
    },
	place_empty: {
        description: '[Function]',
        parameters: [
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' }
        ],
        signature: '(x, y)'
    },
	place_free: {
        description: '[Function]',
        parameters: [
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' }
        ],
        signature: '(x, y)'
    },
	place_meeting: {
        description: '[Function]',
        parameters: [
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' },
            { label: 'obj', documentation: '' }
        ],
        signature: '(x, y, obj)'
    },
	place_snapped: {
        description: '[Function]',
        parameters: [
            { label: 'hsnap', documentation: '' },
            { label: 'vsnap', documentation: '' }
        ],
        signature: '(hsnap, vsnap)'
    },
	point_direction: {
        description: '[Function]',
        parameters: [
            { label: 'x1', documentation: '' },
            { label: 'y1', documentation: '' },
            { label: 'x2', documentation: '' },
            { label: 'y2', documentation: '' }
        ],
        signature: '(x1, y1, x2, y2)'
    },
	point_distance: {
        description: '[Function]',
        parameters: [
            { label: 'x1', documentation: '' },
            { label: 'y1', documentation: '' },
            { label: 'x2', documentation: '' },
            { label: 'y2', documentation: '' }
        ],
        signature: '(x1, y1, x2, y2)'
    },
	point_distance_3d: {
        description: '[Function]',
        parameters: [
            { label: 'x1', documentation: '' },
            { label: 'y1', documentation: '' },
            { label: 'z1', documentation: '' },
            { label: 'x2', documentation: '' },
            { label: 'y2', documentation: '' },
            { label: 'z2', documentation: '' }
        ],
        signature: '(x1, y1, z1, x2, y2, z2)'
    },
	point_in_circle: {
        description: '[Function]',
        parameters: [
            { label: 'px', documentation: '' },
            { label: 'py', documentation: '' },
            { label: 'cx', documentation: '' },
            { label: 'cy', documentation: '' },
            { label: 'rad', documentation: '' }
        ],
        signature: '(px, py, cx, cy, rad)'
    },
	point_in_rectangle: {
        description: '[Function]',
        parameters: [
            { label: 'px', documentation: '' },
            { label: 'py', documentation: '' },
            { label: 'x1', documentation: '' },
            { label: 'y1', documentation: '' },
            { label: 'x2', documentation: '' },
            { label: 'y2', documentation: '' }
        ],
        signature: '(px, py, x1, y1, x2, y2)'
    },
	point_in_triangle: {
        description: '[Function]',
        parameters: [
            { label: 'px', documentation: '' },
            { label: 'py', documentation: '' },
            { label: 'x1', documentation: '' },
            { label: 'y1', documentation: '' },
            { label: 'z1', documentation: '' },
            { label: 'x2', documentation: '' },
            { label: 'y2', documentation: '' },
            { label: 'z2', documentation: '' }
        ],
        signature: '(px, py, x1, y1, x2, y2, x3, y3)'
    },
	position_change: {
        description: '[Function]',
        parameters: [
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' },
            { label: 'obj', documentation: '' },
            { label: 'performevents', documentation: '' }
        ],
        signature: '(x, y, obj, performevents)'
    },
	position_destroy: {
        description: '[Function]',
        parameters: [
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' }
        ],
        signature: '(x, y)'
    },
	position_empty: {
        description: '[Function]',
        parameters: [
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' }
        ],
        signature: '(x, y)'
    },
	position_meeting: {
        description: '[Function]',
        parameters: [
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' },
            { label: 'obj', documentation: '' }
        ],
        signature: '(x, y, obj)'
    },
	power: {
        description: '[Function]',
        parameters: [
            { label: 'x', documentation: '' },
            { label: 'n', documentation: '' }
        ],
        signature: '(x, n)'
    },
	ptr: {
        description: '[Function]',
        parameters: [
            { label: 'val', documentation: '' }
        ],
        signature: '(val)'
    },
	push_cancel_local_notification: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' }
        ],
        signature: '(id)'
    },
	push_get_first_local_notification: {
        description: '[Function]',
        parameters: [
            { label: 'ds_map', documentation: '' }
        ],
        signature: '(ds_map)'
    },
	push_get_next_local_notification: {
        description: '[Function]',
        parameters: [
            { label: 'ds_map', documentation: '' }
        ],
        signature: '(ds_map)'
    },
	push_local_notification: {
        description: '[Function]',
        parameters: [
            { label: 'fire_time', documentation: '' },
            { label: 'title', documentation: '' },
            { label: 'message', documentation: '' },
            { label: 'data', documentation: '' }
        ],
        signature: '(fire_time, title, message, data)'
    },
	radtodeg: {
        description: '[Function]',
        parameters: [
            { label: 'x', documentation: '' }
        ],
        signature: '(x)'
    },
	random: {
        description: '[Function]',
        parameters: [
            { label: 'x', documentation: '' }
        ],
        signature: '(x)'
    },
	randomize: {
        description: '[Function]'
    },
	random_get_seed: {
        description: '[Function]'
    },
	random_old: {
        description: '[Function]',
        parameters: [
            { label: 'x', documentation: '' }
        ],
        signature: '(x)'
    },
	random_range: {
        description: '[Function]',
        parameters: [
            { label: 'x1', documentation: '' },
            { label: 'x2', documentation: '' }
        ],
        signature: '(x1, x2)'
    },
	random_range_old: {
        description: '[Function]',
        parameters: [
            { label: 'x1', documentation: '' },
            { label: 'x2', documentation: '' }
        ],
        signature: '(x1, x2)'
    },
	random_set_seed: {
        description: '[Function]',
        parameters: [
            { label: 'seed', documentation: '' }
        ],
        signature: '(seed)'
    },
	random_use_old_version: {
        description: '[Function]',
        parameters: [
            { label: 'trueFalse', documentation: '' }
        ],
        signature: '(trueFalse)'
    },
	real: {
        description: '[Function]',
        parameters: [
            { label: 'val', documentation: '' }
        ],
        signature: '(val)'
    },
	rectangle_in_circle: {
        description: '[Function]',
        parameters: [
            { label: 'sx1', documentation: '' },
            { label: 'sy1', documentation: '' },
            { label: 'sx2', documentation: '' },
            { label: 'sy2', documentation: '' },
            { label: 'cx', documentation: '' },
            { label: 'cy', documentation: '' },
            { label: 'rad', documentation: '' }
        ],
        signature: '(sx1, sy1, sx2, sy2, cx, cy, rad)'
    },
	rectangle_in_rectangle: {
        description: '[Function]',
        parameters: [
            { label: 'sx1', documentation: '' },
            { label: 'sy1', documentation: '' },
            { label: 'sx2', documentation: '' },
            { label: 'sy2', documentation: '' },
            { label: 'dx1', documentation: '' },
            { label: 'dy1', documentation: '' },
            { label: 'dx2', documentation: '' },
            { label: 'dy2', documentation: '' }
        ],
        signature: '(sx1, sy1, sx2, sy2, dx1, dy1, dx2, dy2)'
    },
	rectangle_in_triangle: {
        description: '[Function]',
        parameters: [
            { label: 'sx1', documentation: '' },
            { label: 'sy1', documentation: '' },
            { label: 'sx2', documentation: '' },
            { label: 'sy2', documentation: '' },
            { label: 'x1', documentation: '' },
            { label: 'y1', documentation: '' },
            { label: 'x2', documentation: '' },
            { label: 'y2', documentation: '' },
            { label: 'x3', documentation: '' },
            { label: 'y3', documentation: '' }
        ],
        signature: '(sx1, sy1, sx2, sy2, x1, y1, x2, y2, x3, y3)'
    },
	room_add: {
        description: '[Function]'
    },
	room_assign: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' },
            { label: 'source', documentation: '' }
        ],
        signature: '(ind, source)'
    },
	room_duplicate: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' }
        ],
        signature: '(ind)'
    },
	room_exists: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' }
        ],
        signature: '(ind)'
    },
	room_get_name: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' }
        ],
        signature: '(ind)'
    },
	room_goto: {
        description: '[Function]',
        parameters: [
            { label: 'numb', documentation: '' }
        ],
        signature: '(numb)'
    },
	room_goto_next: {
        description: '[Function]'
    },
	room_goto_previous: {
        description: '[Function]'
    },
	room_instance_add: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' },
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' },
            { label: 'obj', documentation: '' }
        ],
        signature: '(ind, x, y, obj)'
    },
	room_instance_clear: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' }
        ],
        signature: '(ind)'
    },
	room_next: {
        description: '[Function]',
        parameters: [
            { label: 'numb', documentation: '' }
        ],
        signature: '(numb)'
    },
	room_previous: {
        description: '[Function]',
        parameters: [
            { label: 'numb', documentation: '' }
        ],
        signature: '(numb)'
    },
	room_restart: {
        description: '[Function]'
    },
	room_set_background: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' },
            { label: 'bind', documentation: '' },
            { label: 'vis', documentation: '' },
            { label: 'fore', documentation: '' },
            { label: 'back', documentation: '' },
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' },
            { label: 'htiled', documentation: '' },
            { label: 'vtiled', documentation: '' },
            { label: 'hspeed', documentation: '' },
            { label: 'vspeed', documentation: '' },
            { label: 'alpha', documentation: '' }
        ],
        signature: '(ind, bind, vis, fore, back, x, y, htiled, vtiled, hspeed, vspeed, alpha)'
    },
	room_set_background_color: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' },
            { label: 'col', documentation: '' },
            { label: 'show', documentation: '' }
        ],
        signature: '(ind, col, show)'
    },
	room_set_background_colour: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' },
            { label: 'col', documentation: '' },
            { label: 'show', documentation: '' }
        ],
        signature: '(ind, col, show)'
    },
	room_set_height: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' },
            { label: 'h', documentation: '' }
        ],
        signature: '(ind, h)'
    },
	room_set_persistent: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' },
            { label: 'pers', documentation: '' }
        ],
        signature: '(ind, pers)'
    },
	room_set_view: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' },
            { label: 'vind', documentation: '' },
            { label: 'vis', documentation: '' },
            { label: 'xview', documentation: '' },
            { label: 'yview', documentation: '' },
            { label: 'wview', documentation: '' },
            { label: 'hview', documentation: '' },
            { label: 'xport', documentation: '' },
            { label: 'yport', documentation: '' },
            { label: 'wport', documentation: '' },
            { label: 'hport', documentation: '' },
            { label: 'hborder', documentation: '' },
            { label: 'vborder', documentation: '' },
            { label: 'hspeed', documentation: '' },
            { label: 'vspeed', documentation: '' },
            { label: 'obj', documentation: '' }
        ],
        signature: '(ind, vind, vis, xview, yview, wview, hview, xport, yport, wport, hport, hborder, vborder, hspeed, vspeed, obj)'
    },
	room_set_view_enabled: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' },
            { label: 'val', documentation: '' }
        ],
        signature: '(ind, val)'
    },
	room_set_width: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' },
            { label: 'w', documentation: '' }
        ],
        signature: '(ind, w)'
    },
	room_tile_add: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' },
            { label: 'back', documentation: '' },
            { label: 'left', documentation: '' },
            { label: 'top', documentation: '' },
            { label: 'width', documentation: '' },
            { label: 'hieght', documentation: '' },
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' },
            { label: 'depth', documentation: '' }
        ],
        signature: '(ind, back, left, top, width, height, x, y, depth)'
    },
	room_tile_add_ext: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' },
            { label: 'back', documentation: '' },
            { label: 'left', documentation: '' },
            { label: 'top', documentation: '' },
            { label: 'width', documentation: '' },
            { label: 'hieght', documentation: '' },
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' },
            { label: 'depth', documentation: '' },
            { label: 'xscale', documentation: '' },
            { label: 'yscale', documentation: '' },
            { label: 'alpha', documentation: '' }
        ],
        signature: '(ind, back, left, top, width, height, x, y, depth, xscale, yscale, alpha)'
    },
	room_tile_clear: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' }
        ],
        signature: '(ind)'
    },
	round: {
        description: '[Function]',
        parameters: [
            { label: 'x', documentation: '' }
        ],
        signature: '(x)'
    },
	screen_save: {
        description: '[Function]',
        parameters: [
            { label: 'fname', documentation: '' }
        ],
        signature: '(fname)'
    },
	screen_save_part: {
        description: '[Function]',
        parameters: [
            { label: 'fname', documentation: '' },
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' },
            { label: 'w', documentation: '' },
            { label: 'h', documentation: '' }
        ],
        signature: '(fname, x, y, w, h)'
    },
	script_execute: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' },
            { label: 'arg0', documentation: '' },
            { label: 'arg1', documentation: '' },
            { label: '...', documentation: '' }
        ],
        signature: '(ind, arg0, arg1, ...)'
    },
	script_exists: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' }
        ],
        signature: '(ind)'
    },
	script_get_name: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' }
        ],
        signature: '(ind)'
    },
	sha1_file: {
        description: '[Function]',
        parameters: [
            { label: 'fname', documentation: '' }
        ],
        signature: '(fname)'
    },
	sha1_string_unicode: {
        description: '[Function]',
        parameters: [
            { label: 'string', documentation: '' }
        ],
        signature: '(string)'
    },
	sha1_string_utf8: {
        description: '[Function]',
        parameters: [
            { label: 'string', documentation: '' }
        ],
        signature: '(string)'
    },
	shaders_are_supported: {
        description: '[Function]'
    },
	shader_enable_corner_id: {
        description: '[Function]',
        parameters: [
            { label: 'enable', documentation: '' }
        ],
        signature: '(enable)'
    },
	shader_get_sampler_index: {
        description: '[Function]',
        parameters: [
            { label: 'shader', documentation: '' },
            { label: 'uniform_name', documentation: '' }
        ],
        signature: '(shader, uniform_name)'
    },
	shader_get_uniform: {
        description: '[Function]',
        parameters: [
            { label: 'shader', documentation: '' },
            { label: 'uniform_name', documentation: '' }
        ],
        signature: '(shader, uniform_name)'
    },
	shader_is_compiled: {
        description: '[Function]',
        parameters: [
            { label: 'shader', documentation: '' }
        ],
        signature: '(shader)'
    },
	shader_reset: {
        description: '[Function]'
    },
	shader_set: {
        description: '[Function]',
        parameters: [
            { label: 'shader', documentation: '' }
        ],
        signature: '(shader)'
    },
	shader_set_uniform_f: {
        description: '[Function]',
        parameters: [
            { label: 'uniform_id', documentation: '' },
            { label: 'val', documentation: '' },
            { label: '....', documentation: '' }
        ],
        signature: '(uniform_id, val, ....)'
    },
	shader_set_uniform_f_array: {
        description: '[Function]',
        parameters: [
            { label: 'uniform_id', documentation: '' },
            { label: 'array', documentation: '' }
        ],
        signature: '(uniform_id, array)'
    },
	shader_set_uniform_i: {
        description: '[Function]',
        parameters: [
            { label: 'uniform_id', documentation: '' },
            { label: 'val', documentation: '' },
            { label: '....', documentation: '' }
        ],
        signature: '(uniform_id, val, ....)'
    },
	shader_set_uniform_i_array: {
        description: '[Function]',
        parameters: [
            { label: 'uniform_id', documentation: '' },
            { label: 'array', documentation: '' }
        ],
        signature: '(uniform_id, array)'
    },
	shader_set_uniform_matrix: {
        description: '[Function]',
        parameters: [
            { label: 'uniform_id', documentation: '' }
        ],
        signature: '(uniform_id)'
    },
	shader_set_uniform_matrix_array: {
        description: '[Function]',
        parameters: [
            { label: 'uniform_id', documentation: '' },
            { label: 'array', documentation: '' }
        ],
        signature: '(uniform_id, array)'
    },
	shop_leave_rating: {
        description: '[Function]',
        parameters: [
            { label: 'text_string', documentation: '' },
            { label: 'yes_string', documentation: '' },
            { label: 'no_string', documentation: '' },
            { label: 'url', documentation: '' }
        ],
        signature: '(text_string, yes_string, no_string, url)'
    },
	show_debug_message: {
        description: '[Function]',
        parameters: [
            { label: 'str', documentation: '' }
        ],
        signature: '(str)'
    },
	show_debug_overlay: {
        description: '[Function]',
        parameters: [
            { label: 'bool', documentation: '' }
        ],
        signature: '(bool)'
    },
	show_error: {
        description: '[Function]',
        parameters: [
            { label: 'str', documentation: '' },
            { label: 'abort', documentation: '' }
        ],
        signature: '(str, abort)'
    },
	show_message: {
        description: '[Function]',
        parameters: [
            { label: 'str', documentation: '' }
        ],
        signature: '(str)'
    },
	show_message_async: {
        description: '[Function]',
        parameters: [
            { label: 'str', documentation: '' }
        ],
        signature: '(str)'
    },
	show_question: {
        description: '[Function]',
        parameters: [
            { label: 'str', documentation: '' }
        ],
        signature: '(str)'
    },
	show_question_async: {
        description: '[Function]',
        parameters: [
            { label: 'str', documentation: '' }
        ],
        signature: '(str)'
    },
	sign: {
        description: '[Function]',
        parameters: [
            { label: 'x', documentation: '' }
        ],
        signature: '(x)'
    },
	sin: {
        description: '[Function]',
        parameters: [
            { label: 'radian_angle', documentation: '' }
        ],
        signature: '(radian_angle)'
    },
	skeleton_animation_clear: {
        description: '[Function]',
        parameters: [
            { label: 'track', documentation: '' }
        ],
        signature: '(track)'
    },
	skeleton_animation_get: {
        description: '[Function]'
    },
	skeleton_animation_get_duration: {
        description: '[Function]',
        parameters: [
            { label: 'anim_name', documentation: '' }
        ],
        signature: '(anim_name)'
    },
	skeleton_animation_get_ext: {
        description: '[Function]',
        parameters: [
            { label: 'track', documentation: '' }
        ],
        signature: '(track)'
    },
	skeleton_animation_get_frames: {
        description: '[Function]',
        parameters: [
            { label: 'anim_name', documentation: '' }
        ],
        signature: '(anim_name)'
    },
	skeleton_animation_list: {
        description: '[Function]',
        parameters: [
            { label: 'sprite', documentation: '' },
            { label: 'list', documentation: '' }
        ],
        signature: '(sprite, list)'
    },
	skeleton_animation_mix: {
        description: '[Function]',
        parameters: [
            { label: 'anim_from', documentation: '' },
            { label: 'anim_to', documentation: '' },
            { label: 'duration', documentation: '' }
        ],
        signature: '(anim_from, anim_to, duration)'
    },
	skeleton_animation_set: {
        description: '[Function]',
        parameters: [
            { label: 'anim_name', documentation: '' }
        ],
        signature: '(anim_name)'
    },
	skeleton_animation_set_ext: {
        description: '[Function]',
        parameters: [
            { label: 'anim_name', documentation: '' },
            { label: 'track', documentation: '' }
        ],
        signature: '(anim_name, track)'
    },
	skeleton_attachment_create: {
        description: '[Function]',
        parameters: [
            { label: 'name', documentation: '' },
            { label: 'sprite', documentation: '' },
            { label: 'ind', documentation: '' },
            { label: 'xo', documentation: '' },
            { label: 'yo', documentation: '' },
            { label: 'xs', documentation: '' },
            { label: 'ys', documentation: '' },
            { label: 'ro', documentation: '' }
        ],
        signature: '(name, sprite, ind, xo, yo, xs, ys, ro)'
    },
	skeleton_attachment_get: {
        description: '[Function]',
        parameters: [
            { label: 'slot', documentation: '' }
        ],
        signature: '(slot)'
    },
	skeleton_attachment_set: {
        description: '[Function]',
        parameters: [
            { label: 'slot', documentation: '' },
            { label: 'attachment', documentation: '' }
        ],
        signature: '(slot, attachment)'
    },
	skeleton_bone_data_get: {
        description: '[Function]',
        parameters: [
            { label: 'bone', documentation: '' },
            { label: 'map', documentation: '' }
        ],
        signature: '(bone, map)'
    },
	skeleton_bone_data_set: {
        description: '[Function]',
        parameters: [
            { label: 'bone', documentation: '' },
            { label: 'map', documentation: '' }
        ],
        signature: '(bone, map)'
    },
	skeleton_bone_state_get: {
        description: '[Function]',
        parameters: [
            { label: 'bone', documentation: '' },
            { label: 'map', documentation: '' }
        ],
        signature: '(bone, map)'
    },
	skeleton_bone_state_set: {
        description: '[Function]',
        parameters: [
            { label: 'bone', documentation: '' },
            { label: 'map', documentation: '' }
        ],
        signature: '(bone, map)'
    },
	skeleton_collision_draw_set: {
        description: '[Function]',
        parameters: [
            { label: 'val', documentation: '' }
        ],
        signature: '(val)'
    },
	skeleton_get_bounds: {
        description: '[Function]',
        parameters: [
            { label: 'index', documentation: '' }
        ],
        signature: '(index)'
    },
	skeleton_get_minmax: {
        description: '[Function]'
    },
	skeleton_get_num_bounds: {
        description: '[Function]'
    },
	skeleton_skin_get: {
        description: '[Function]'
    },
	skeleton_skin_list: {
        description: '[Function]',
        parameters: [
            { label: 'sprite', documentation: '' },
            { label: 'list', documentation: '' }
        ],
        signature: '(sprite, list)'
    },
	skeleton_skin_set: {
        description: '[Function]',
        parameters: [
            { label: 'skin_name', documentation: '' }
        ],
        signature: '(skin_name)'
    },
	skeleton_slot_data: {
        description: '[Function]',
        parameters: [
            { label: 'sprite', documentation: '' },
            { label: 'list', documentation: '' }
        ],
        signature: '(sprite, list)'
    },
	sprite_add: {
        description: '[Function]',
        parameters: [
            { label: 'fname', documentation: '' },
            { label: 'imgnumb', documentation: '' },
            { label: 'removeback', documentation: '' },
            { label: 'smooth', documentation: '' },
            { label: 'xorig', documentation: '' },
            { label: 'yorig', documentation: '' }
        ],
        signature: '(fname, imgnumb, removeback, smooth, xorig, yorig)'
    },
	sprite_add_from_surface: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' },
            { label: 'id', documentation: '' },
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' },
            { label: 'w', documentation: '' },
            { label: 'h', documentation: '' },
            { label: 'removeback', documentation: '' },
            { label: 'smooth', documentation: '' }
        ],
        signature: '(ind, id, x, y, w, h, removeback, smooth)'
    },
	sprite_assign: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' },
            { label: 'source', documentation: '' }
        ],
        signature: '(ind, source)'
    },
	sprite_collision_mask: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' },
            { label: 'sepmasks', documentation: '' },
            { label: 'bboxmode', documentation: '' },
            { label: 'bbleft', documentation: '' },
            { label: 'bbtop', documentation: '' },
            { label: 'bbright', documentation: '' },
            { label: 'bbbottom', documentation: '' },
            { label: 'kind', documentation: '' },
            { label: 'tolerance', documentation: '' }
        ],
        signature: '(ind, sepmasks, bboxmode, bbleft, bbtop, bbright, bbbottom, kind, tolerance)'
    },
	sprite_create_from_surface: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' },
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' },
            { label: 'w', documentation: '' },
            { label: 'h', documentation: '' },
            { label: 'removeback', documentation: '' },
            { label: 'smooth', documentation: '' },
            { label: 'xorig', documentation: '' },
            { label: 'yorig', documentation: '' }
        ],
        signature: '(id, x, y, w, h, removeback, smooth, xorig, yorig)'
    },
	sprite_delete: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' }
        ],
        signature: '(ind)'
    },
	sprite_duplicate: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' }
        ],
        signature: '(ind)'
    },
	sprite_exists: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' }
        ],
        signature: '(ind)'
    },
	sprite_flush: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' }
        ],
        signature: '(ind)'
    },
	sprite_flush_multi: {
        description: '[Function]',
        parameters: [
            { label: 'indarray', documentation: '' }
        ],
        signature: '(indarray)'
    },
	sprite_get_bbox_bottom: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' }
        ],
        signature: '(ind)'
    },
	sprite_get_bbox_left: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' }
        ],
        signature: '(ind)'
    },
	sprite_get_bbox_right: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' }
        ],
        signature: '(ind)'
    },
	sprite_get_bbox_top: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' }
        ],
        signature: '(ind)'
    },
	sprite_get_height: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' }
        ],
        signature: '(ind)'
    },
	sprite_get_name: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' }
        ],
        signature: '(ind)'
    },
	sprite_get_number: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' }
        ],
        signature: '(ind)'
    },
	sprite_get_texture: {
        description: '[Function]',
        parameters: [
            { label: 'spr', documentation: '' },
            { label: 'subimg', documentation: '' }
        ],
        signature: '(spr, subimg)'
    },
	sprite_get_tpe: {
        description: '[Function]',
        parameters: [
            { label: 'index', documentation: '' },
            { label: 'subindex', documentation: '' }
        ],
        signature: '(index, subindex)'
    },
	sprite_get_uvs: {
        description: '[Function]',
        parameters: [
            { label: 'spr', documentation: '' },
            { label: 'subimg', documentation: '' }
        ],
        signature: '(spr, subimg)'
    },
	sprite_get_width: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' }
        ],
        signature: '(ind)'
    },
	sprite_get_xoffset: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' }
        ],
        signature: '(ind)'
    },
	sprite_get_yoffset: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' }
        ],
        signature: '(ind)'
    },
	sprite_merge: {
        description: '[Function]',
        parameters: [
            { label: 'ind1', documentation: '' },
            { label: 'ind2', documentation: '' }
        ],
        signature: '(ind1, ind2)'
    },
	sprite_prefetch: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' }
        ],
        signature: '(ind)'
    },
	sprite_prefetch_multi: {
        description: '[Function]',
        parameters: [
            { label: 'indarray', documentation: '' }
        ],
        signature: '(indarray)'
    },
	sprite_replace: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' },
            { label: 'fname', documentation: '' },
            { label: 'imgnumb', documentation: '' },
            { label: 'removeback', documentation: '' },
            { label: 'smooth', documentation: '' },
            { label: 'xorig', documentation: '' },
            { label: 'yorig', documentation: '' }
        ],
        signature: '(ind, fname, imgnumb, removeback, smooth, xorig, yorig)'
    },
	sprite_save: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' },
            { label: 'subimg', documentation: '' },
            { label: 'fname', documentation: '' }
        ],
        signature: '(ind, subimg, fname)'
    },
	sprite_save_strip: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' },
            { label: 'fname', documentation: '' }
        ],
        signature: '(ind, fname)'
    },
	sprite_set_alpha_from_sprite: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' },
            { label: 'spr', documentation: '' }
        ],
        signature: '(ind, spr)'
    },
	sprite_set_cache_size: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' },
            { label: 'max', documentation: '' }
        ],
        signature: '(ind, max)'
    },
	sprite_set_cache_size_ext: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' },
            { label: 'image', documentation: '' },
            { label: 'max', documentation: '' }
        ],
        signature: '(ind, image, max)'
    },
	sprite_set_offset: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' },
            { label: 'xoff', documentation: '' },
            { label: 'yoff', documentation: '' }
        ],
        signature: '(ind, xoff, yoff)'
    },
	sqr: {
        description: '[Function]',
        parameters: [
            { label: 'x', documentation: '' }
        ],
        signature: '(x)'
    },
	sqrt: {
        description: '[Function]',
        parameters: [
            { label: 'x', documentation: '' }
        ],
        signature: '(x)'
    },
	steam_activate_overlay: {
        description: '[Function]',
        parameters: [
            { label: 'overlayIndex', documentation: '' }
        ],
        signature: '(overlayIndex)'
    },
	steam_activate_overlay_browser: {
        description: '[Function]',
        parameters: [
            { label: 'url', documentation: '' }
        ],
        signature: '(url)'
    },
	steam_activate_overlay_store: {
        description: '[Function]',
        parameters: [
            { label: 'app_id', documentation: '' }
        ],
        signature: '(app_id)'
    },
	steam_activate_overlay_user: {
        description: '[Function]',
        parameters: [
            { label: 'dialog_name', documentation: '' },
            { label: 'steamid', documentation: '' }
        ],
        signature: '(dialog_name, steamid)'
    },
	steam_available_languages: {
        description: '[Function]'
    },
	steam_clear_achievement: {
        description: '[Function]',
        parameters: [
            { label: 'ach_name', documentation: '' }
        ],
        signature: '(ach_name)'
    },
	steam_create_leaderboard: {
        description: '[Function]',
        parameters: [
            { label: 'lb_name', documentation: '' },
            { label: 'sort_method', documentation: '' },
            { label: 'display_type', documentation: '' }
        ],
        signature: '(lb_name, sort_method, display_type)'
    },
	steam_current_game_language: {
        description: '[Function]'
    },
	steam_download_friends_scores: {
        description: '[Function]',
        parameters: [
            { label: 'lb_name', documentation: '' }
        ],
        signature: '(lb_name)'
    },
	steam_download_scores: {
        description: '[Function]',
        parameters: [
            { label: 'lb_name', documentation: '' },
            { label: 'start_idx', documentation: '' },
            { label: 'end_idx', documentation: '' }
        ],
        signature: '(lb_name, start_idx, end_idx)'
    },
	steam_download_scores_around_user: {
        description: '[Function]',
        parameters: [
            { label: 'lb_name', documentation: '' },
            { label: 'range_start', documentation: '' },
            { label: 'range_end', documentation: '' }
        ],
        signature: '(lb_name, range_start, range_end)'
    },
	steam_file_delete: {
        description: '[Function]',
        parameters: [
            { label: 'filename', documentation: '' }
        ],
        signature: '(filename)'
    },
	steam_file_exists: {
        description: '[Function]',
        parameters: [
            { label: 'filename', documentation: '' }
        ],
        signature: '(filename)'
    },
	steam_file_persisted: {
        description: '[Function]',
        parameters: [
            { label: 'filename', documentation: '' }
        ],
        signature: '(filename)'
    },
	steam_file_read: {
        description: '[Function]',
        parameters: [
            { label: 'filename', documentation: '' }
        ],
        signature: '(filename)'
    },
	steam_file_share: {
        description: '[Function]',
        parameters: [
            { label: 'filename', documentation: '' }
        ],
        signature: '(filename)'
    },
	steam_file_size: {
        description: '[Function]',
        parameters: [
            { label: 'filename', documentation: '' }
        ],
        signature: '(filename)'
    },
	steam_file_write: {
        description: '[Function]',
        parameters: [
            { label: 'steam_filename', documentation: '' },
            { label: 'data', documentation: '' },
            { label: 'size', documentation: '' }
        ],
        signature: '(steam_filename, data, size)'
    },
	steam_file_write_file: {
        description: '[Function]',
        parameters: [
            { label: 'steam_filename', documentation: '' },
            { label: 'local_filename', documentation: '' }
        ],
        signature: '(steam_filename, local_filename)'
    },
	steam_get_achievement: {
        description: '[Function]',
        parameters: [
            { label: 'ach_name', documentation: '' }
        ],
        signature: '(ach_name)'
    },
	steam_get_app_id: {
        description: '[Function]'
    },
	steam_get_persona_name: {
        description: '[Function]'
    },
	steam_get_quota_free: {
        description: '[Function]'
    },
	steam_get_quota_total: {
        description: '[Function]'
    },
	steam_get_stat_avg_rate: {
        description: '[Function]',
        parameters: [
            { label: 'stat_name', documentation: '' }
        ],
        signature: '(stat_name)'
    },
	steam_get_stat_float: {
        description: '[Function]',
        parameters: [
            { label: 'stat_name', documentation: '' }
        ],
        signature: '(stat_name)'
    },
	steam_get_stat_int: {
        description: '[Function]',
        parameters: [
            { label: 'stat_name', documentation: '' }
        ],
        signature: '(stat_name)'
    },
	steam_get_user_account_id: {
        description: '[Function]'
    },
	steam_get_user_persona_name: {
        description: '[Function]',
        parameters: [
            { label: 'steam_id', documentation: '' }
        ],
        signature: '(steam_id)'
    },
	steam_get_user_steam_id: {
        description: '[Function]'
    },
	steam_initialised: {
        description: '[Function]'
    },
	steam_is_cloud_enabled_for_account: {
        description: '[Function]'
    },
	steam_is_cloud_enabled_for_app: {
        description: '[Function]'
    },
	steam_is_overlay_activated: {
        description: '[Function]'
    },
	steam_is_overlay_enabled: {
        description: '[Function]'
    },
	steam_is_screenshot_requested: {
        description: '[Function]'
    },
	steam_is_user_logged_on: {
        description: '[Function]'
    },
	steam_publish_workshop_file: {
        description: '[Function]',
        parameters: [
            { label: 'filename', documentation: '' },
            { label: 'previewImage', documentation: '' },
            { label: 'title', documentation: '' },
            { label: 'description', documentation: '' }
        ],
        signature: '(filename, previewImage, title, description)'
    },
	steam_reset_all_stats: {
        description: '[Function]'
    },
	steam_reset_all_stats_achievements: {
        description: '[Function]'
    },
	steam_send_screenshot: {
        description: '[Function]',
        parameters: [
            { label: 'filename', documentation: '' },
            { label: 'width', documentation: '' },
            { label: 'height', documentation: '' }
        ],
        signature: '(filename, width, height)'
    },
	steam_set_achievement: {
        description: '[Function]',
        parameters: [
            { label: 'ach_name', documentation: '' }
        ],
        signature: '(ach_name)'
    },
	steam_set_stat_avg_rate: {
        description: '[Function]',
        parameters: [
            { label: 'stat_name', documentation: '' },
            { label: 'session_count', documentation: '' },
            { label: 'session_length', documentation: '' }
        ],
        signature: '(stat_name, session_count, session_length)'
    },
	steam_set_stat_float: {
        description: '[Function]',
        parameters: [
            { label: 'stat_name', documentation: '' },
            { label: 'value', documentation: '' }
        ],
        signature: '(stat_name, value)'
    },
	steam_set_stat_int: {
        description: '[Function]',
        parameters: [
            { label: 'stat_name', documentation: '' },
            { label: 'value', documentation: '' }
        ],
        signature: '(stat_name, value)'
    },
	steam_stats_ready: {
        description: '[Function]'
    },
	steam_ugc_create_item: {
        description: '[Function]',
        parameters: [
            { label: 'consumer_app_id', documentation: '' },
            { label: 'file_type', documentation: '' }
        ],
        signature: '(consumer_app_id, file_type)'
    },
	steam_ugc_create_query_all: {
        description: '[Function]',
        parameters: [
            { label: 'query_type', documentation: '' },
            { label: 'match_type', documentation: '' },
            { label: 'page', documentation: '' }
        ],
        signature: '(query_type, match_type, page)'
    },
	steam_ugc_create_query_all_ex: {
        description: '[Function]',
        parameters: [
            { label: 'query_type', documentation: '' },
            { label: 'match_type', documentation: '' },
            { label: 'page', documentation: '' },
            { label: 'creator_app_id', documentation: '' },
            { label: 'consumer_app_id', documentation: '' }
        ],
        signature: '(query_type, match_type, page, creator_app_id, consumer_app_id)'
    },
	steam_ugc_create_query_user: {
        description: '[Function]',
        parameters: [
            { label: 'list_type', documentation: '' },
            { label: 'match_type', documentation: '' },
            { label: 'sort_order', documentation: '' },
            { label: 'page', documentation: '' }
        ],
        signature: '(list_type, match_type, sort_order, page)'
    },
	steam_ugc_create_query_user_ex: {
        description: '[Function]',
        parameters: [
            { label: 'list_type', documentation: '' },
            { label: 'match_type', documentation: '' },
            { label: 'sort_order', documentation: '' },
            { label: 'page', documentation: '' },
            { label: 'account_id', documentation: '' },
            { label: 'creator_app_id', documentation: '' },
            { label: 'consumer_app_id', documentation: '' }
        ],
        signature: '(list_type, match_type, sort_order, page, account_id, creator_app_id, consumer_app_id)'
    },
	steam_ugc_download: {
        description: '[Function]',
        parameters: [
            { label: 'ugc_handle', documentation: '' },
            { label: 'dest_filename', documentation: '' }
        ],
        signature: '(ugc_handle, dest_filename)'
    },
	steam_ugc_get_item_install_info: {
        description: '[Function]',
        parameters: [
            { label: 'published_file_id', documentation: '' },
            { label: 'info_map', documentation: '' }
        ],
        signature: '(published_file_id, info_map)'
    },
	steam_ugc_get_item_update_info: {
        description: '[Function]',
        parameters: [
            { label: 'published_file_id', documentation: '' },
            { label: 'info_map', documentation: '' }
        ],
        signature: '(published_file_id, info_map)'
    },
	steam_ugc_get_item_update_progress: {
        description: '[Function]',
        parameters: [
            { label: 'ugc_update_handle', documentation: '' },
            { label: 'info_map', documentation: '' }
        ],
        signature: '(ugc_update_handle, info_map)'
    },
	steam_ugc_get_subscribed_items: {
        description: '[Function]',
        parameters: [
            { label: 'info_map', documentation: '' }
        ],
        signature: '(item_list)'
    },
	steam_ugc_num_subscribed_items: {
        description: '[Function]'
    },
	steam_ugc_query_add_excluded_tag: {
        description: '[Function]',
        parameters: [
            { label: 'ugc_query_handle', documentation: '' },
            { label: 'tag_name', documentation: '' }
        ],
        signature: '(ugc_query_handle, tag_name)'
    },
	steam_ugc_query_add_required_tag: {
        description: '[Function]',
        parameters: [
            { label: 'ugc_query_handle', documentation: '' },
            { label: 'tag_name', documentation: '' }
        ],
        signature: '(ugc_query_handle, tag_name)'
    },
	steam_ugc_query_set_allow_cached_response: {
        description: '[Function]',
        parameters: [
            { label: 'ugc_query_handle', documentation: '' },
            { label: 'max_age_seconds', documentation: '' }
        ],
        signature: '(ugc_query_handle, max_age_seconds)'
    },
	steam_ugc_query_set_cloud_filename_filter: {
        description: '[Function]',
        parameters: [
            { label: 'ugc_query_handle', documentation: '' },
            { label: 'match_cloud_filename', documentation: '' }
        ],
        signature: '(ugc_query_handle, match_cloud_filename)'
    },
	steam_ugc_query_set_match_any_tag: {
        description: '[Function]',
        parameters: [
            { label: 'ugc_query_handle', documentation: '' },
            { label: 'match_any_tag', documentation: '' }
        ],
        signature: '(ugc_query_handle, match_any_tag)'
    },
	steam_ugc_query_set_ranked_by_trend_days: {
        description: '[Function]',
        parameters: [
            { label: 'ugc_query_handle', documentation: '' },
            { label: 'days', documentation: '' }
        ],
        signature: '(ugc_query_handle, days)'
    },
	steam_ugc_query_set_return_long_description: {
        description: '[Function]',
        parameters: [
            { label: 'ugc_query_handle', documentation: '' },
            { label: 'return_long_desc', documentation: '' }
        ],
        signature: '(ugc_query_handle, return_long_desc)'
    },
	steam_ugc_query_set_return_total_only: {
        description: '[Function]',
        parameters: [
            { label: 'ugc_query_handle', documentation: '' },
            { label: 'return_total_only', documentation: '' }
        ],
        signature: '(ugc_query_handle, return_total_only)'
    },
	steam_ugc_query_set_search_text: {
        description: '[Function]',
        parameters: [
            { label: 'ugc_query_handle', documentation: '' },
            { label: 'search_text', documentation: '' }
        ],
        signature: '(ugc_query_handle, search_text)'
    },
	steam_ugc_request_item_details: {
        description: '[Function]',
        parameters: [
            { label: 'published_file_id', documentation: '' },
            { label: 'max_age_seconds', documentation: '' }
        ],
        signature: '(published_file_id, max_age_seconds)'
    },
	steam_ugc_send_query: {
        description: '[Function]',
        parameters: [
            { label: 'ugc_query_handle', documentation: '' }
        ],
        signature: '(ugc_query_handle)'
    },
	steam_ugc_set_item_content: {
        description: '[Function]',
        parameters: [
            { label: 'ugc_update_handle', documentation: '' },
            { label: 'directory', documentation: '' }
        ],
        signature: '(ugc_update_handle, directory)'
    },
	steam_ugc_set_item_description: {
        description: '[Function]',
        parameters: [
            { label: 'ugc_update_handle', documentation: '' },
            { label: 'description', documentation: '' }
        ],
        signature: '(ugc_update_handle, description)'
    },
	steam_ugc_set_item_preview: {
        description: '[Function]',
        parameters: [
            { label: 'ugc_update_handle', documentation: '' },
            { label: 'image_path', documentation: '' }
        ],
        signature: '(ugc_update_handle, image_path)'
    },
	steam_ugc_set_item_tags: {
        description: '[Function]',
        parameters: [
            { label: 'ugc_update_handle', documentation: '' },
            { label: 'tag_array', documentation: '' }
        ],
        signature: '(ugc_update_handle, tag_array)'
    },
	steam_ugc_set_item_title: {
        description: '[Function]',
        parameters: [
            { label: 'ugc_update_handle', documentation: '' },
            { label: 'title', documentation: '' }
        ],
        signature: '(ugc_update_handle, title)'
    },
	steam_ugc_set_item_visibility: {
        description: '[Function]',
        parameters: [
            { label: 'ugc_update_handle', documentation: '' },
            { label: 'visibility', documentation: '' }
        ],
        signature: '(ugc_update_handle, visibility)'
    },
	steam_ugc_start_item_update: {
        description: '[Function]',
        parameters: [
            { label: 'consumer_app_id', documentation: '' },
            { label: 'published_file_id', documentation: '' }
        ],
        signature: '(consumer_app_id, published_file_id)'
    },
	steam_ugc_submit_item_update: {
        description: '[Function]',
        parameters: [
            { label: 'ugc_update_handle', documentation: '' },
            { label: 'change_note', documentation: '' }
        ],
        signature: '(ugc_update_handle, change_note)'
    },
	steam_ugc_subscribe_item: {
        description: '[Function]',
        parameters: [
            { label: 'published_file_id', documentation: '' }
        ],
        signature: '(published_file_id)'
    },
	steam_ugc_unsubscribe_item: {
        description: '[Function]',
        parameters: [
            { label: 'published_file_id', documentation: '' }
        ],
        signature: '(published_file_id)'
    },
	steam_upload_score: {
        description: '[Function]',
        parameters: [
            { label: 'lb_name', documentation: '' },
            { label: 'score', documentation: '' }
        ],
        signature: '(lb_name, score)'
    },
	steam_upload_score_buffer: {
        description: '[Function]',
        parameters: [
            { label: 'lb_name', documentation: '' },
            { label: 'score', documentation: '' },
            { label: 'buffer_id', documentation: '' }
        ],
        signature: '(lb_name, score, buffer_id)'
    },
	steam_upload_score_buffer_ext: {
        description: '[Function]',
        parameters: [
            { label: 'lb_name', documentation: '' },
            { label: 'score', documentation: '' },
            { label: 'buffer_id', documentation: '' },
            { label: 'forceupdate', documentation: '' }
        ],
        signature: '(lb_name, score, buffer_id, forceupdate)'
    },
	steam_upload_score_ext: {
        description: '[Function]',
        parameters: [
            { label: 'lb_name', documentation: '' },
            { label: 'score', documentation: '' },
            { label: 'forceupdate', documentation: '' }
        ],
        signature: '(lb_name, score, forceupdate)'
    },
	steam_user_installed_dlc: {
        description: '[Function]',
        parameters: [
            { label: 'dlc_id', documentation: '' }
        ],
        signature: '(dlc_id)'
    },
	steam_user_owns_dlc: {
        description: '[Function]',
        parameters: [
            { label: 'dlc_id', documentation: '' }
        ],
        signature: '(dlc_id)'
    },
	string: {
        description: '[Function]',
        parameters: [
            { label: 'val', documentation: '' }
        ],
        signature: '(val)'
    },
	string_byte_at: {
        description: '[Function]',
        parameters: [
            { label: 'str', documentation: '' },
            { label: 'index', documentation: '' }
        ],
        signature: '(str, index)'
    },
	string_byte_length: {
        description: '[Function]',
        parameters: [
            { label: 'str', documentation: '' }
        ],
        signature: '(str)'
    },
	string_char_at: {
        description: '[Function]',
        parameters: [
            { label: 'str', documentation: '' },
            { label: 'index', documentation: '' }
        ],
        signature: '(str, index)'
    },
	string_copy: {
        description: '[Function]',
        parameters: [
            { label: 'str', documentation: '' },
            { label: 'index', documentation: '' },
            { label: 'count', documentation: '' }
        ],
        signature: '(str, index, count)'
    },
	string_count: {
        description: '[Function]',
        parameters: [
            { label: 'substr', documentation: '' },
            { label: 'str', documentation: '' }
        ],
        signature: '(substr, str)'
    },
	string_delete: {
        description: '[Function]',
        parameters: [
            { label: 'str', documentation: '' },
            { label: 'index', documentation: '' },
            { label: 'count', documentation: '' }
        ],
        signature: '(str, index, count)'
    },
	string_digits: {
        description: '[Function]',
        parameters: [
            { label: 'str', documentation: '' }
        ],
        signature: '(str)'
    },
	string_format: {
        description: '[Function]',
        parameters: [
            { label: 'val', documentation: '' },
            { label: 'total', documentation: '' },
            { label: 'dec', documentation: '' }
        ],
        signature: '(val, total, dec)'
    },
	string_height: {
        description: '[Function]',
        parameters: [
            { label: 'string', documentation: '' }
        ],
        signature: '(string)'
    },
	string_height_ext: {
        description: '[Function]',
        parameters: [
            { label: 'string', documentation: '' },
            { label: 'sep', documentation: '' },
            { label: 'w', documentation: '' }
        ],
        signature: '(string, sep, w)'
    },
	string_insert: {
        description: '[Function]',
        parameters: [
            { label: 'substr', documentation: '' },
            { label: 'str', documentation: '' },
            { label: 'index', documentation: '' }
        ],
        signature: '(substr, str, index)'
    },
	string_length: {
        description: '[Function]',
        parameters: [
            { label: 'str', documentation: '' }
        ],
        signature: '(str)'
    },
	string_letters: {
        description: '[Function]',
        parameters: [
            { label: 'str', documentation: '' }
        ],
        signature: '(str)'
    },
	string_lettersdigits: {
        description: '[Function]',
        parameters: [
            { label: 'str', documentation: '' }
        ],
        signature: '(str)'
    },
	string_lower: {
        description: '[Function]',
        parameters: [
            { label: 'str', documentation: '' }
        ],
        signature: '(str)'
    },
	string_ord_at: {
        description: '[Function]',
        parameters: [
            { label: 'str', documentation: '' },
            { label: 'index', documentation: '' }
        ],
        signature: '(str, index)'
    },
	string_pos: {
        description: '[Function]',
        parameters: [
            { label: 'substr', documentation: '' },
            { label: 'str', documentation: '' }
        ],
        signature: '(substr, str)'
    },
	string_repeat: {
        description: '[Function]',
        parameters: [
            { label: 'str', documentation: '' },
            { label: 'count', documentation: '' }
        ],
        signature: '(str, count)'
    },
	string_replace: {
        description: '[Function]',
        parameters: [
            { label: 'str', documentation: '' },
            { label: 'substr', documentation: '' },
            { label: 'newstr', documentation: '' }
        ],
        signature: '(str, substr, newstr)'
    },
	string_replace_all: {
        description: '[Function]',
        parameters: [
            { label: 'str', documentation: '' },
            { label: 'substr', documentation: '' },
            { label: 'newstr', documentation: '' }
        ],
        signature: '(str, substr, newstr)'
    },
	string_set_byte_at: {
        description: '[Function]',
        parameters: [
            { label: 'str', documentation: '' },
            { label: 'index', documentation: '' },
            { label: 'val', documentation: '' }
        ],
        signature: '(str, index, val)'
    },
	string_upper: {
        description: '[Function]',
        parameters: [
            { label: 'str', documentation: '' }
        ],
        signature: '(str)'
    },
	string_width: {
        description: '[Function]',
        parameters: [
            { label: 'string', documentation: '' }
        ],
        signature: '(string)'
    },
	string_width_ext: {
        description: '[Function]',
        parameters: [
            { label: 'string', documentation: '' },
            { label: 'sep', documentation: '' },
            { label: 'w', documentation: '' }
        ],
        signature: '(string, sep, w)'
    },
	surface_copy: {
        description: '[Function]',
        parameters: [
            { label: 'destination', documentation: '' },
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' },
            { label: 'source', documentation: '' }
        ],
        signature: '(destination, x, y, source)'
    },
	surface_copy_part: {
        description: '[Function]',
        parameters: [
            { label: 'destination', documentation: '' },
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' },
            { label: 'source', documentation: '' },
            { label: 'xs', documentation: '' },
            { label: 'ys', documentation: '' },
            { label: 'ws', documentation: '' },
            { label: 'hs', documentation: '' }
        ],
        signature: '(destination, x, y, source, xs, ys, ws, hs)'
    },
	surface_create: {
        description: '[Function]',
        parameters: [
            { label: 'w', documentation: '' },
            { label: 'h', documentation: '' }
        ],
        signature: '(w, h)'
    },
	surface_create_ext: {
        description: '[Function]',
        parameters: [
            { label: 'name', documentation: '' },
            { label: 'w', documentation: '' },
            { label: 'h', documentation: '' }
        ],
        signature: '(name, w, h)'
    },
	surface_exists: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' }
        ],
        signature: '(id)'
    },
	surface_free: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' }
        ],
        signature: '(id)'
    },
	surface_getpixel: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' },
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' }
        ],
        signature: '(id, x, y)'
    },
	surface_getpixel_ext: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' },
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' }
        ],
        signature: '(id, x, y)'
    },
	surface_get_height: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' }
        ],
        signature: '(id)'
    },
	surface_get_texture: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' }
        ],
        signature: '(id)'
    },
	surface_get_width: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' }
        ],
        signature: '(id)'
    },
	surface_reset_target: {
        description: '[Function]'
    },
	surface_resize: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' },
            { label: 'width', documentation: '' },
            { label: 'height', documentation: '' }
        ],
        signature: '(id, width, height)'
    },
	surface_save: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' },
            { label: 'fname', documentation: '' }
        ],
        signature: '(id, fname)'
    },
	surface_save_part: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' },
            { label: 'fname', documentation: '' },
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' },
            { label: 'w', documentation: '' },
            { label: 'h', documentation: '' }
        ],
        signature: '(id, fname, x, y, w, h)'
    },
	surface_set_target: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' }
        ],
        signature: '(id)'
    },
	surface_set_target_ext: {
        description: '[Function]',
        parameters: [
            { label: 'index', documentation: '' },
            { label: 'id', documentation: '' }
        ],
        signature: '(index, id)'
    },
	tan: {
        description: '[Function]',
        parameters: [
            { label: 'radian_angle', documentation: '' }
        ],
        signature: '(radian_angle)'
    },
	texture_get_height: {
        description: '[Function]',
        parameters: [
            { label: 'texid', documentation: '' }
        ],
        signature: '(texid)'
    },
	texture_get_texel_height: {
        description: '[Function]',
        parameters: [
            { label: 'texture_id', documentation: '' }
        ],
        signature: '(texture_id)'
    },
	texture_get_texel_width: {
        description: '[Function]',
        parameters: [
            { label: 'texture_id', documentation: '' }
        ],
        signature: '(texture_id)'
    },
	texture_get_width: {
        description: '[Function]',
        parameters: [
            { label: 'texid', documentation: '' }
        ],
        signature: '(texid)'
    },
	texture_global_scale: {
        description: '[Function]',
        parameters: [
            { label: 'pow2integer', documentation: '' }
        ],
        signature: '(pow2integer)'
    },
	texture_set_blending: {
        description: '[Function]',
        parameters: [
            { label: 'blend', documentation: '' }
        ],
        signature: '(blend)'
    },
	texture_set_interpolation: {
        description: '[Function]',
        parameters: [
            { label: 'linear', documentation: '' }
        ],
        signature: '(linear)'
    },
	texture_set_interpolation_ext: {
        description: '[Function]',
        parameters: [
            { label: 'sampler_id', documentation: '' },
            { label: 'linear', documentation: '' }
        ],
        signature: '(sampler_id, linear)'
    },
	texture_set_repeat: {
        description: '[Function]',
        parameters: [
            { label: 'repeat', documentation: '' }
        ],
        signature: '(repeat)'
    },
	texture_set_repeat_ext: {
        description: '[Function]',
        parameters: [
            { label: 'sampler_id', documentation: '' },
            { label: 'repeat', documentation: '' }
        ],
        signature: '(sampler_id, repeat)'
    },
	texture_set_stage: {
        description: '[Function]',
        parameters: [
            { label: 'sampler_id', documentation: '' },
            { label: 'texture_id', documentation: '' }
        ],
        signature: '(sampled_id, texture_id)'
    },
	tile_add: {
        description: '[Function]',
        parameters: [
            { label: 'background', documentation: '' },
            { label: 'left', documentation: '' },
            { label: 'top', documentation: '' },
            { label: 'width', documentation: '' },
            { label: 'height', documentation: '' },
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' },
            { label: 'depth', documentation: '' }
        ],
        signature: '(background, left, top, width, height, x, y, depth)'
    },
	tile_delete: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' }
        ],
        signature: '(id)'
    },
	tile_exists: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' }
        ],
        signature: '(id)'
    },
	tile_get_alpha: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' }
        ],
        signature: '(id)'
    },
	tile_get_background: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' }
        ],
        signature: '(id)'
    },
	tile_get_blend: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' }
        ],
        signature: '(id)'
    },
	tile_get_count: {
        description: '[Function]'
    },
	tile_get_depth: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' }
        ],
        signature: '(id)'
    },
	tile_get_height: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' }
        ],
        signature: '(id)'
    },
	tile_get_id: {
        description: '[Function]',
        parameters: [
            { label: 'index', documentation: '' }
        ],
        signature: '(index)'
    },
	tile_get_ids: {
        description: '[Function]'
    },
	tile_get_ids_at_depth: {
        description: '[Function]',
        parameters: [
            { label: 'depth', documentation: '' }
        ],
        signature: '(depth)'
    },
	tile_get_left: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' }
        ],
        signature: '(id)'
    },
	tile_get_top: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' }
        ],
        signature: '(id)'
    },
	tile_get_visible: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' }
        ],
        signature: '(id)'
    },
	tile_get_width: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' }
        ],
        signature: '(id)'
    },
	tile_get_x: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' }
        ],
        signature: '(id)'
    },
	tile_get_xscale: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' }
        ],
        signature: '(id)'
    },
	tile_get_y: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' }
        ],
        signature: '(id)'
    },
	tile_get_yscale: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' }
        ],
        signature: '(id)'
    },
	tile_layer_delete: {
        description: '[Function]',
        parameters: [
            { label: 'depth', documentation: '' }
        ],
        signature: '(depth)'
    },
	tile_layer_delete_at: {
        description: '[Function]',
        parameters: [
            { label: 'depth', documentation: '' },
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' }
        ],
        signature: '(depth, x, y)'
    },
	tile_layer_depth: {
        description: '[Function]',
        parameters: [
            { label: 'depth', documentation: '' },
            { label: 'newdepth', documentation: '' }
        ],
        signature: '(depth, newdepth)'
    },
	tile_layer_find: {
        description: '[Function]',
        parameters: [
            { label: 'depth', documentation: '' },
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' }
        ],
        signature: '(depth, x, y)'
    },
	tile_layer_hide: {
        description: '[Function]',
        parameters: [
            { label: 'depth', documentation: '' }
        ],
        signature: '(depth)'
    },
	tile_layer_shift: {
        description: '[Function]',
        parameters: [
            { label: 'depth', documentation: '' },
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' }
        ],
        signature: '(depth, x, y)'
    },
	tile_layer_show: {
        description: '[Function]',
        parameters: [
            { label: 'depth', documentation: '' }
        ],
        signature: '(depth)'
    },
	tile_set_alpha: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' },
            { label: 'alpha', documentation: '' }
        ],
        signature: '(id, alpha)'
    },
	tile_set_background: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' },
            { label: 'background', documentation: '' }
        ],
        signature: '(id, background)'
    },
	tile_set_blend: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' },
            { label: 'colour', documentation: '' }
        ],
        signature: '(id, colour)'
    },
	tile_set_depth: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' },
            { label: 'depth', documentation: '' }
        ],
        signature: '(id, depth)'
    },
	tile_set_position: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' },
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' }
        ],
        signature: '(id, x, y)'
    },
	tile_set_region: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' },
            { label: 'left', documentation: '' },
            { label: 'top', documentation: '' },
            { label: 'width', documentation: '' },
            { label: 'height', documentation: '' }
        ],
        signature: '(id, left, top, width, height)'
    },
	tile_set_scale: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' },
            { label: 'xscale', documentation: '' },
            { label: 'yscale', documentation: '' }
        ],
        signature: '(id, xscale, yscale)'
    },
	tile_set_visible: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' },
            { label: 'visible', documentation: '' }
        ],
        signature: '(id, visible)'
    },
	timeline_add: {
        description: '[Function]'
    },
	timeline_clear: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' }
        ],
        signature: '(ind)'
    },
	timeline_delete: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' }
        ],
        signature: '(ind)'
    },
	timeline_exists: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' }
        ],
        signature: '(ind)'
    },
	timeline_get_name: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' }
        ],
        signature: '(ind)'
    },
	timeline_max_moment: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' }
        ],
        signature: '(ind)'
    },
	timeline_moment_add_script: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' },
            { label: 'step', documentation: '' },
            { label: 'script', documentation: '' }
        ],
        signature: '(ind, step, script)'
    },
	timeline_moment_clear: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' },
            { label: 'step', documentation: '' }
        ],
        signature: '(ind, step)'
    },
	timeline_size: {
        description: '[Function]',
        parameters: [
            { label: 'ind', documentation: '' }
        ],
        signature: '(ind)'
    },
	typeof: {
        description: '[Function]',
        parameters: [
            { label: 'val', documentation: '' }
        ],
        signature: '(val)'
    },
	url_get_domain: {
        description: '[Function]'
    },
	url_open: {
        description: '[Function]',
        parameters: [
            { label: 'url', documentation: '' }
        ],
        signature: '(url)'
    },
	url_open_ext: {
        description: '[Function]',
        parameters: [
            { label: 'url', documentation: '' },
            { label: 'target', documentation: '' }
        ],
        signature: '(url, target)'
    },
	url_open_full: {
        description: '[Function]',
        parameters: [
            { label: 'url', documentation: '' },
            { label: 'target', documentation: '' },
            { label: 'options', documentation: '' }
        ],
        signature: '(url, target, options)'
    },
	vertex_argb: {
        description: '[Function]',
        parameters: [
            { label: 'vbuff', documentation: '' },
            { label: 'argb', documentation: '' }
        ],
        signature: '(vbuff, argb)'
    },
	vertex_begin: {
        description: '[Function]',
        parameters: [
            { label: 'vbuff', documentation: '' },
            { label: 'format', documentation: '' }
        ],
        signature: '(vbuff, format)'
    },
	vertex_color: {
        description: '[Function]',
        parameters: [
            { label: 'vbuff', documentation: '' },
            { label: 'color', documentation: '' },
            { label: 'alpha', documentation: '' }
        ],
        signature: '(vbuff, color, alpha)'
    },
	vertex_colour: {
        description: '[Function]',
        parameters: [
            { label: 'vbuff', documentation: '' },
            { label: 'colour', documentation: '' },
            { label: 'alpha', documentation: '' }
        ],
        signature: '(vbuff, colour, alpha)'
    },
	vertex_create_buffer: {
        description: '[Function]'
    },
	vertex_create_buffer_ext: {
        description: '[Function]',
        parameters: [
            { label: 'size', documentation: '' }
        ],
        signature: '(size)'
    },
	vertex_create_buffer_from_buffer: {
        description: '[Function]',
        parameters: [
            { label: 'src_buffer', documentation: '' },
            { label: 'format', documentation: '' }
        ],
        signature: '(src_buffer, format)'
    },
	vertex_create_buffer_from_buffer_ext: {
        description: '[Function]',
        parameters: [
            { label: 'src_buffer', documentation: '' },
            { label: 'format', documentation: '' },
            { label: 'src_offset', documentation: '' },
            { label: 'num_vertices', documentation: '' }
        ],
        signature: '(src_buffer, format, src_offset, num_vertices)'
    },
	vertex_delete_buffer: {
        description: '[Function]',
        parameters: [
            { label: 'vbuff', documentation: '' }
        ],
        signature: '(vbuff)'
    },
	vertex_end: {
        description: '[Function]',
        parameters: [
            { label: 'vbuff', documentation: '' }
        ],
        signature: '(vbuff)'
    },
	vertex_float1: {
        description: '[Function]',
        parameters: [
            { label: 'vbuff', documentation: '' },
            { label: 'f1', documentation: '' }
        ],
        signature: '(vbuff, f1)'
    },
	vertex_float2: {
        description: '[Function]',
        parameters: [
            { label: 'vbuff', documentation: '' },
            { label: 'f1', documentation: '' },
            { label: 'f2', documentation: '' }
        ],
        signature: '(vbuff, f1, f2)'
    },
	vertex_float3: {
        description: '[Function]',
        parameters: [
            { label: 'vbuff', documentation: '' },
            { label: 'f1', documentation: '' },
            { label: 'f2', documentation: '' },
            { label: 'f3', documentation: '' }
        ],
        signature: '(vbuff, f1, f2, f3)'
    },
	vertex_float4: {
        description: '[Function]',
        parameters: [
            { label: 'vbuff', documentation: '' },
            { label: 'f1', documentation: '' },
            { label: 'f2', documentation: '' },
            { label: 'f3', documentation: '' },
            { label: 'f4', documentation: '' }
        ],
        signature: '(vbuff, f1, f2, f3, f4)'
    },
	vertex_format_add_color: {
        description: '[Function]'
    },
	vertex_format_add_colour: {
        description: '[Function]'
    },
	vertex_format_add_custom: {
        description: '[Function]',
        parameters: [
            { label: 'type', documentation: '' },
            { label: 'usage', documentation: '' }
        ],
        signature: '(type, usage)'
    },
	vertex_format_add_normal: {
        description: '[Function]'
    },
	vertex_format_add_position: {
        description: '[Function]'
    },
	vertex_format_add_position_3d: {
        description: '[Function]'
    },
	vertex_format_add_textcoord: {
        description: '[Function]'
    },
	vertex_format_begin: {
        description: '[Function]'
    },
	vertex_format_delete: {
        description: '[Function]',
        parameters: [
            { label: 'format_id', documentation: '' }
        ],
        signature: '(format_id)'
    },
	vertex_format_end: {
        description: '[Function]'
    },
	vertex_freeze: {
        description: '[Function]',
        parameters: [
            { label: 'vbuff', documentation: '' }
        ],
        signature: '(vbuff)'
    },
	vertex_get_buffer_size: {
        description: '[Function]',
        parameters: [
            { label: 'vbuff', documentation: '' }
        ],
        signature: '(vbuff)'
    },
	vertex_get_number: {
        description: '[Function]',
        parameters: [
            { label: 'vbuff', documentation: '' }
        ],
        signature: '(vbuff)'
    },
	vertex_normal: {
        description: '[Function]',
        parameters: [
            { label: 'vbuff', documentation: '' },
            { label: 'nx', documentation: '' },
            { label: 'ny', documentation: '' },
            { label: 'nz', documentation: '' }
        ],
        signature: '(vbuff, nx, ny, nz)'
    },
	vertex_position: {
        description: '[Function]',
        parameters: [
            { label: 'vbuff', documentation: '' },
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' }
        ],
        signature: '(vbuff, x, y)'
    },
	vertex_position_3d: {
        description: '[Function]',
        parameters: [
            { label: 'vbuff', documentation: '' },
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' },
            { label: 'z', documentation: '' }
        ],
        signature: '(vbuff, x, y, z)'
    },
	vertex_submit: {
        description: '[Function]',
        parameters: [
            { label: 'vbuff', documentation: '' },
            { label: 'prim', documentation: '' },
            { label: 'texture', documentation: '' }
        ],
        signature: '(vbuff, prim, texture)'
    },
	vertex_texcoord: {
        description: '[Function]',
        parameters: [
            { label: 'vbuff', documentation: '' },
            { label: 'u', documentation: '' },
            { label: 'v', documentation: '' }
        ],
        signature: '(vbuff, u, v)'
    },
	vertex_ubyte4: {
        description: '[Function]',
        parameters: [
            { label: 'vbuff', documentation: '' },
            { label: 'b1', documentation: '' },
            { label: 'b2', documentation: '' },
            { label: 'b3', documentation: '' },
            { label: 'b4', documentation: '' }
        ],
        signature: '(vbuff, b1, b2, b3, b4)'
    },
	virtual_key_add: {
        description: '[Function]',
        parameters: [
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' },
            { label: 'w', documentation: '' },
            { label: 'h', documentation: '' },
            { label: 'keycode', documentation: '' }
        ],
        signature: '(x, y, w, h, keycode)'
    },
	virtual_key_delete: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' }
        ],
        signature: '(id)'
    },
	virtual_key_hide: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' }
        ],
        signature: '(id)'
    },
	virtual_key_show: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' }
        ],
        signature: '(id)'
    },
	window_center: {
        description: '[Function]'
    },
	window_device: {
        description: '[Function]'
    },
	window_get_caption: {
        description: '[Function]'
    },
	window_get_color: {
        description: '[Function]'
    },
	window_get_colour: {
        description: '[Function]'
    },
	window_get_cursor: {
        description: '[Function]'
    },
	window_get_fullscreen: {
        description: '[Function]'
    },
	window_get_height: {
        description: '[Function]'
    },
	window_get_visible_rects: {
        description: '[Function]',
        parameters: [
            { label: 'x1', documentation: '' },
            { label: 'y1', documentation: '' },
            { label: 'x2', documentation: '' },
            { label: 'y2', documentation: '' }
        ],
        signature: '(x1, y1, x2, y2)'
    },
	window_get_width: {
        description: '[Function]'
    },
	window_get_x: {
        description: '[Function]'
    },
	window_get_y: {
        description: '[Function]'
    },
	window_handle: {
        description: '[Function]'
    },
	window_has_focus: {
        description: '[Function]'
    },
	window_mouse_get_x: {
        description: '[Function]'
    },
	window_mouse_get_y: {
        description: '[Function]'
    },
	window_mouse_set: {
        description: '[Function]',
        parameters: [
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' }
        ],
        signature: '(x, y)'
    },
	window_set_caption: {
        description: '[Function]',
        arameters: [
            { label: 'caption', documentation: '' }
        ],
        signature: '(caption)'
    },
	window_set_color: {
        description: '[Function]',
        arameters: [
            { label: 'color', documentation: '' }
        ],
        signature: '(color)'
    },
	window_set_colour: {
        description: '[Function]',
        arameters: [
            { label: 'colour', documentation: '' }
        ],
        signature: '(colour)'
    },
	window_set_cursor: {
        description: '[Function]',
        arameters: [
            { label: 'curs', documentation: '' }
        ],
        signature: '(curs)'
    },
	window_set_fullscreen: {
        description: '[Function]',
        arameters: [
            { label: 'full', documentation: '' }
        ],
        signature: '(full)'
    },
	window_set_max_height: {
        description: '[Function]',
        arameters: [
            { label: 'maxheight', documentation: '' }
        ],
        signature: '(maxheight)'
    },
	window_set_max_width: {
        description: '[Function]',
        arameters: [
            { label: 'maxwidth', documentation: '' }
        ],
        signature: '(maxwidth)'
    },
	window_set_min_height: {
        description: '[Function]',
        arameters: [
            { label: 'minheight', documentation: '' }
        ],
        signature: '(minheight)'
    },
	window_set_min_width: {
        description: '[Function]',
        arameters: [
            { label: 'minwidth', documentation: '' }
        ],
        signature: '(minwidth)'
    },
	window_set_position: {
        description: '[Function]',
        parameters: [
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' }
        ],
        signature: '(x, y)'
    },
	window_set_rectangle: {
        description: '[Function]',
        parameters: [
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' },
            { label: 'w', documentation: '' },
            { label: 'h', documentation: '' }
        ],
        signature: '(x, y, w, h)'
    },
	window_set_size: {
        description: '[Function]',
        parameters: [
            { label: 'w', documentation: '' },
            { label: 'h', documentation: '' }
        ],
        signature: '(w, h)'
    },
	window_views_mouse_get_x: {
        description: '[Function]'
    },
	window_views_mouse_get_y: {
        description: '[Function]'
    },
	window_view_mouse_get_x: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' }
        ],
        signature: '(id)'
    },
	window_view_mouse_get_y: {
        description: '[Function]',
        parameters: [
            { label: 'id', documentation: '' }
        ],
        signature: '(id)'
    },
	zip_unzip: {
        description: '[Function]',
        parameters: [
            { label: 'file', documentation: '' },
            { label: 'destPath', documentation: '' }
        ],
        signature: '(file, destPath)'
    },

    //These are the functions that were obsoleted in the old version but restored in the new version
    date_datetime_string: {
        description: '[Function]',
        parameters: [
            { label: 'data', documentation: '' }
        ],
        signature: '(date)'
    },
    variable_global_exists: {
        description: '[Function]',
        parameters: [
            { label: 'name', documentation: '' }
        ],
        signature: '(name)'
    },
	variable_global_get: {
        description: '[Function]',
        parameters: [
            { label: 'name', documentation: '' }
        ],
        signature: '(name)'
    },
	variable_global_set: {
        description: '[Function]',
        parameters: [
            { label: 'name', documentation: '' },
            { label: 'value', documentation: '' }
        ],
        signature: '(name, value)'
    },
	variable_instance_exists: {
        description: '[Function]',
        parameters: [
            { label: 'instance_id', documentation: '' },
            { label: 'name', documentation: '' }
        ],
        signature: '(instance_id, name)'
    },
	variable_instance_get: {
        description: '[Function]',
        parameters: [
            { label: 'instance_id', documentation: '' },
            { label: 'name', documentation: '' }
        ],
        signature: '(instance_id, name)'
    },
	variable_instance_set: {
        description: '[Function]',
        parameters: [
            { label: 'instance_id', documentation: '' },
            { label: 'name', documentation: '' },
            { label: 'val', documentation: '' }
        ],
        signature: '(instance_id, name, val)'
    },
	variable_instance_get_names: {
        description: '[Function]',
        parameters: [
            { label: 'instance_id', documentation: '' }
        ],
        signature: '(instance_id)'
    },

    //These functions are deprecated.
    pocketchange_display_reward: {
        description: '[Function] (This function is deprecated)'
    },
	pocketchange_display_shop: {
        description: '[Function] (This function is deprecated)'
    },
	iap_store_status: {
        description: '[Function] (This function is deprecated)'
    },
	iap_product_status: {
        description: '[Function] (This function is deprecated)',
        parameters: [
            { label: 'product_id', documentation: '' }
        ],
        signature: '(product_id)'
    },
	iap_is_downloaded: {
        description: '[Function] (This function is deprecated)',
        parameters: [
            { label: 'product_id_string', documentation: '' }
        ],
        signature: '(purchase_id_string)'
    },
	iap_files_purchased: {
        description: '[Function] (This function is deprecated)'
    },
	iap_product_files: {
        description: '[Function] (This function is deprecated)',
        parameters: [
            { label: 'product_id', documentation: '' },
            { label: 'ds_list', documentation: '' }
        ],
        signature: '(purchase_id, ds_list)'
    },
	iap_event_queue: {
        description: '[Function] (This function is deprecated)'
    },
    win8_appbar_add_element: {
        description: '[Function] (This function is deprecated)',
        parameters: [
            { label: 'type', documentation: '' },
            { label: 'icon', documentation: '' },
            { label: 'label', documentation: '' },
            { label: 'section', documentation: '' },
            { label: 'toolTip', documentation: '' },
            { label: 'callback', documentation: '' }
        ],
        signature: '(type, icon, label, section, toolTip, callback)'
    },
	win8_appbar_enable: {
        description: '[Function] (This function is deprecated)',
        parameters: [
            { label: 'flag', documentation: '' }
        ],
        signature: '(flag)'
    },
	win8_appbar_remove_element: {
        description: '[Function] (This function is deprecated)',
        parameters: [
            { label: 'id', documentation: '' }
        ],
        signature: '(id)'
    },
	win8_device_touchscreen_available: {
        description: '[Function] (This function is deprecated)'
    },
	win8_license_initialize_sandbox: {
        description: '[Function] (This function is deprecated)',
        parameters: [
            { label: '_licenseString', documentation: '' }
        ],
        signature: '(_licenseString)'
    },
	win8_license_trial_version: {
        description: '[Function] (This function is deprecated)'
    },
	win8_livetile_badge_clear: {
        description: '[Function] (This function is deprecated)'
    },
	win8_livetile_badge_notification: {
        description: '[Function] (This function is deprecated)',
        parameters: [
            { label: 'id', documentation: '' }
        ],
        signature: '(id)'
    },
	win8_livetile_notification_begin: {
        description: '[Function] (This function is deprecated)',
        parameters: [
            { label: 'template', documentation: '' }
        ],
        signature: '(template)'
    },
	win8_livetile_notification_end: {
        description: '[Function] (This function is deprecated)'
    },
	win8_livetile_notification_expiry: {
        description: '[Function] (This function is deprecated)',
        parameters: [
            { label: 'expiryTime', documentation: '' }
        ],
        signature: '(expiryTime)'
    },
	win8_livetile_notification_image_add: {
        description: '[Function] (This function is deprecated)',
        parameters: [
            { label: 'image', documentation: '' }
        ],
        signature: '(image)'
    },
	win8_livetile_notification_secondary_begin: {
        description: '[Function] (This function is deprecated)',
        parameters: [
            { label: 'template', documentation: '' },
            { label: 'tileId', documentation: '' }
        ],
        signature: '(template, tileId)'
    },
	win8_livetile_notification_tag: {
        description: '[Function] (This function is deprecated)',
        parameters: [
            { label: 'tag', documentation: '' }
        ],
        signature: '(tag)'
    },
	win8_livetile_notification_text_add: {
        description: '[Function] (This function is deprecated)',
        parameters: [
            { label: 'text', documentation: '' }
        ],
        signature: '(text)'
    },
	win8_livetile_queue_enable: {
        description: '[Function] (This function is deprecated)',
        parameters: [
            { label: 'flag', documentation: '' }
        ],
        signature: '(flag)'
    },
	win8_livetile_tile_clear: {
        description: '[Function] (This function is deprecated)'
    },
	win8_livetile_tile_notification: {
        description: '[Function] (This function is deprecated)',
        parameters: [
            { label: 'template', documentation: '' },
            { label: 'ds_map', documentation: '' },
            { label: 'expiry', documentation: '' },
            { label: 'tag', documentation: '' }
        ],
        signature: '(template, ds_map, expiry, tag)'
    },
	win8_search_add_suggestions: {
        description: '[Function] (This function is deprecated)',
        parameters: [
            { label: '_dslist', documentation: '' }
        ],
        signature: '(_dslist)'
    },
	win8_search_disable: {
        description: '[Function] (This function is deprecated)'
    },
	win8_search_enable: {
        description: '[Function] (This function is deprecated)',
        parameters: [
            { label: '_selectionCallback', documentation: '' }
        ],
        signature: '(_selectionCallback)'
    },
	win8_secondarytile_badge_notification: {
        description: '[Function] (This function is deprecated)',
        parameters: [
            { label: 'id', documentation: '' },
            { label: 'tileId', documentation: '' }
        ],
        signature: '(id, tileId)'
    },
	win8_secondarytile_delete: {
        description: '[Function] (This function is deprecated)',
        parameters: [
            { label: 'id', documentation: '' }
        ],
        signature: '(id)'
    },
	win8_secondarytile_pin: {
        description: '[Function] (This function is deprecated)',
        signature: '(id, shortName, displayName, cmdLineArgs, dsListOptions, tileImg, wideTileImg, textCol)'
    },
	win8_settingscharm_add_entry: {
        description: '[Function] (This function is deprecated)',
        signature: '(name, callback)'
    },
	win8_settingscharm_add_html_entry: {
        description: '[Function] (This function is deprecated)',
        signature: '(id, name, htmlPath)'
    },
	win8_settingscharm_add_xaml_entry: {
        description: '[Function] (This function is deprecated)',
        signature: '(name, xamlPath, headerRGB, callback, wideFlyout)'
    },
	win8_settingscharm_get_xaml_property: {
        description: '[Function] (This function is deprecated)',
        signature: '(entryName, elementName, propertyName)'
    },
	win8_settingscharm_remove_entry: {
        description: '[Function] (This function is deprecated)',
        parameters: [
            { label: 'name', documentation: '' }
        ],
        signature: '(name)'
    },
	win8_settingscharm_set_xaml_property: {
        description: '[Function] (This function is deprecated)',
        signature: '(entryName, elementName, propertyName, newValue)'
    },
	win8_share_file: {
        description: '[Function] (This function is deprecated)',
        signature: '(filename, title, description, immediate)'
    },
	win8_share_image: {
        description: '[Function] (This function is deprecated)',
        signature: '(image_filename, title, description, immediate)'
    },
	win8_share_screenshot: {
        description: '[Function] (This function is deprecated)',
        signature: '(title, description, immediate)'
    },
	win8_share_text: {
        description: '[Function] (This function is deprecated)',
        signature: '(text, title, description, immediate)'
    },
	win8_share_url: {
        description: '[Function] (This function is deprecated)',
        signature: '(url, title, description, immediate)'
    },
    winphone_license_trial_version: {
        description: '[Function] (This function is deprecated)'
    },
	winphone_tile_background_color: {
        description: '[Function] (This function is deprecated)',
        signature: '(color)'
    },
	winphone_tile_background_colour: {
        description: '[Function] (This function is deprecated)',
        signature: '(colour)'
    },
	winphone_tile_back_content: {
        description: '[Function] (This function is deprecated)',
        signature: '(content)'
    },
	winphone_tile_back_content_wide: {
        description: '[Function] (This function is deprecated)',
        signature: '(content)'
    },
	winphone_tile_back_image: {
        description: '[Function] (This function is deprecated)',
        signature: '(included_filename)'
    },
	winphone_tile_back_image_wide: {
        description: '[Function] (This function is deprecated)',
        signature: '(included_filename)'
    },
	winphone_tile_back_title: {
        description: '[Function] (This function is deprecated)',
        signature: '(title)'
    },
	winphone_tile_count: {
        description: '[Function] (This function is deprecated)',
        signature: '(count)'
    },
	winphone_tile_cycle_images: {
        description: '[Function] (This function is deprecated)',
        signature: '(included_filename_1, included_filename_2, ...)'
    },
	winphone_tile_front_image: {
        description: '[Function] (This function is deprecated)',
        signature: '(included_filename)'
    },
	winphone_tile_front_image_small: {
        description: '[Function] (This function is deprecated)',
        signature: '(included_filename)'
    },
	winphone_tile_front_image_wide: {
        description: '[Function] (This function is deprecated)',
        signature: '(included_filename)'
    },
	winphone_tile_icon_image: {
        description: '[Function] (This function is deprecated)',
        signature: '(included_filename'
    },
	winphone_tile_small_background_image: {
        description: '[Function] (This function is deprecated)',
        signature: '(included_filename)'
    },
	winphone_tile_small_icon_image: {
        description: '[Function] (This function is deprecated)',
        signature: '(included_filename)'
    },
	winphone_tile_title: {
        description: '[Function] (This function is deprecated)',
        signature: '(title)'
    },
	winphone_tile_wide_content: {
        description: '[Function] (This function is deprecated)',
        signature: '(content, index)'
    },

    //Obsolete functions in new GameMaker Studio
    device_ios_get_image: {
        description: '[Function] (Obsolete function in new GameMaker Studio)'
    },
	device_ios_get_imagename: {
        description: '[Function] (Obsolete function in new GameMaker Studio)'
    },
    sound_delete: {
        description: '[Function] (Obsolete function in new GameMaker Studio)',
        parameters: [
            { label: 'ind', documentation: '' }
        ],
        signature: '(ind)'
    },
    sound_discard: {
        description: '[Function] (Obsolete function in new GameMaker Studio)',
        parameters: [
            { label: 'ind', documentation: '' }
        ],
        signature: '(ind)'
    },
    sound_exists: {
        description: '[Function] (Obsolete function in new GameMaker Studio)',
        parameters: [
            { label: 'ind', documentation: '' }
        ],
        signature: '(ind)'
    },
    sound_get_kind: {
        description: '[Function] (Obsolete function in new GameMaker Studio)',
        parameters: [
            { label: 'ind', documentation: '' }
        ],
        signature: '(ind)'
    },
	sound_get_name: {
        description: '[Function] (Obsolete function in new GameMaker Studio)',
        parameters: [
            { label: 'ind', documentation: '' }
        ],
        signature: '(ind)'
    },
	sound_get_preload: {
        description: '[Function] (Obsolete function in new GameMaker Studio)',
        parameters: [
            { label: 'ind', documentation: '' }
        ],
        signature: '(ind)'
    },
    sound_restore: {
        description: '[Function] (Obsolete function in new GameMaker Studio)',
        parameters: [
            { label: 'ind', documentation: '' }
        ],
        signature: '(ind)'
    },
    sound_loop: {
        description: '[Function] (Obsolete function in new GameMaker Studio)',
        parameters: [
            { label: 'index', documentation: '' }
        ],
        signature: '(index)'
    },
    sound_play: {
        description: '[Function] (Obsolete function in new GameMaker Studio)',
        parameters: [
            { label: 'index', documentation: '' }
        ],
        signature: '(index)'
    },
    sound_stop: {
        description: '[Function] (Obsolete function in new GameMaker Studio)',
        parameters: [
            { label: 'index', documentation: '' }
        ],
        signature: '(index)'
    },
	sound_stop_all: {
        description: '[Function] (Obsolete function in new GameMaker Studio)'
    },
	sound_volume: {
        description: '[Function] (Obsolete function in new GameMaker Studio)',
        parameters: [
            { label: 'index', documentation: '' },
            { label: 'value', documentation: '' }
        ],
        signature: '(index, value)'
    },
	sound_global_volume: {
        description: '[Function] (Obsolete function in new GameMaker Studio)',
        parameters: [
            { label: 'value', documentation: '' }
        ],
        signature: '(value)'
    },
	sound_fade: {
        description: '[Function] (Obsolete function in new GameMaker Studio)',
        parameters: [
            { label: 'index', documentation: '' },
            { label: 'value', documentation: '' },
            { label: 'time', documentation: '' }
        ],
        signature: '(index, value, time)'
    },
	sound_isplaying: {
        description: '[Function] (Obsolete function in new GameMaker Studio)',
        parameters: [
            { label: 'index', documentation: '' }
        ],
        signature: '(index)'
    },
    audio_music_is_playing: {
        description: '[Function] (Obsolete function in new GameMaker Studio)'
    },
    audio_resume_music: {
        description: '[Function] (Obsolete function in new GameMaker Studio)'
    },
    audio_pause_music: {
        description: '[Function] (Obsolete function in new GameMaker Studio)'
    },
	audio_play_music: {
        description: '[Function] (Obsolete function in new GameMaker Studio)',
        parameters: [
            { label: 'soundid', documentation: '' },
            { label: 'loops', documentation: '' }
        ],
        signature: '(soundid, loops)'
    },
	audio_stop_music: {
        description: '[Function] (Obsolete function in new GameMaker Studio)'
    },
	audio_music_gain: {
        description: '[Function] (Obsolete function in new GameMaker Studio)',
        parameters: [
            { label: 'value', documentation: '' },
            { label: 'time', documentation: '' }
        ],
        signature: '(value, time)'
    },
	ads_disable: {
        description: '[Function] (Obsolete function in new GameMaker Studio)',
        parameters: [
            { label: 'num', documentation: '' }
        ],
		signature: '(num)'
	},
	ads_enable: {
        description: '[Function] (Obsolete function in new GameMaker Studio)',
        parameters: [
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' },
            { label: 'num', documentation: '' }
        ],
		signature: '(x, y, num)'
	},
	ads_engagement_active: {
		description: '[Function] (Obsolete function in new GameMaker Studio)'
	},
	ads_engagement_available: {
		description: '[Function] (Obsolete function in new GameMaker Studio)'
	},
	ads_engagement_launch: {
		description: '[Function] (Obsolete function in new GameMaker Studio)'
	},
	ads_event: {
        description: '[Function] (Obsolete function in new GameMaker Studio)',
        parameters: [
            { label: 'stringid', documentation: '' }
        ],
		signature: '(stringid)'
	},
	ads_event_preload: {
        description: '[Function] (Obsolete function in new GameMaker Studio)',
        parameters: [
            { label: 'stringid', documentation: '' }
        ],
		signature: '(stringid)'
	},
	ads_get_display_height: {
        description: '[Function] (Obsolete function in new GameMaker Studio)',
        parameters: [
            { label: 'slotnum', documentation: '' }
        ],
		signature: '(slotnum)'
	},
	ads_get_display_width: {
        description: '[Function] (Obsolete function in new GameMaker Studio)',
        parameters: [
            { label: 'slotnum', documentation: '' }
        ],
		signature: '(slotnum)'
	},
	ads_interstitial_available: {
		description: '[Function] (Obsolete function in new GameMaker Studio)'
	},
	ads_interstitial_display: {
		description: '[Function] (Obsolete function in new GameMaker Studio)'
	},
	ads_move: {
        description: '[Function] (Obsolete function in new GameMaker Studio)',
        parameters: [
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' },
            { label: 'slotnum', documentation: '' }
        ],
		signature: '(x, y, slotnum)'},
	ads_setup: {
        description: '[Function] (Obsolete function in new GameMaker Studio)',
        parameters: [
            { label: 'user_uuid', documentation: '' },
            { label: 'ad_app_key', documentation: '' }
        ],
		signature: '(user_uuid, ad_app_key)'
	},
	ads_set_reward_callback: {
        description: '[Function] (Obsolete function in new GameMaker Studio)',
        parameters: [
            { label: 'callback', documentation: '' }
        ],
		signature: '(callback)'
	},
    playhaven_add_notification_badge: {
        description: '[Function] (Obsolete function in new GameMaker Studio)',
        parameters: [
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' },
            { label: 'w', documentation: '' },
            { label: 'h', documentation: '' },
            { label: 'ident', documentation: '' }
        ],
        signature: '(x, y, w, h, ident)'
    },
	playhaven_hide_notification_badge: {
        description: '[Function] (Obsolete function in new GameMaker Studio)',
        parameters: [
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' },
            { label: 'w', documentation: '' },
            { label: 'h', documentation: '' },
            { label: 'ident', documentation: '' }
        ],
        signature: '(x, y, w, h, ident)'
    },
	playhaven_position_notification_badge: {
        description: '[Function] (Obsolete function in new GameMaker Studio)',
        parameters: [
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' },
            { label: 'w', documentation: '' },
            { label: 'h', documentation: '' }
        ],
        signature: '(x, y, w, h)'
    },
	playhaven_update_notification_badge: {
        description: '[Function] (Obsolete function in new GameMaker Studio)',
        parameters: [
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' },
            { label: 'w', documentation: '' },
            { label: 'h', documentation: '' }
        ],
        signature: '(x, y, w, h)'
    },
    openfeint_accept_challenge: {
        description: '[Function] (Obsolete function in new GameMaker Studio)'
    },
	openfeint_send_challenge: {
        description: '[Function] (Obsolete function in new GameMaker Studio)',
        parameters: [
            { label: 'definition_string', documentation: '' },
            { label: 'text_string', documentation: '' },
            { label: 'data_string', documentation: '' }
        ],
        signature: '(definition_string, text_string, data_string)'
    },
	openfeint_send_invite: {
        description: '[Function] (Obsolete function in new GameMaker Studio)',
        parameters: [
            { label: 'definition_string', documentation: '' }
        ],
        signature: '(definition_string)'
    },
	openfeint_send_result: {
        description: '[Function] (Obsolete function in new GameMaker Studio)',
        parameters: [
            { label: 'challenge_result', documentation: '' },
            { label: 'definition_string', documentation: '' }
        ],
        signature: '(challenge_result, description_string)'
    },
	openfeint_send_social: {
        description: '[Function] (Obsolete function in new GameMaker Studio)',
        parameters: [
            { label: 'text_string', documentation: '' },
            { label: 'suggested_message', documentation: '' },
            { label: 'image_name', documentation: '' }
        ],
        signature: '(text_string, suggested_message, image_name)'
    },
	openfeint_set_url: {
        description: '[Function] (Obsolete function in new GameMaker Studio)',
        parameters: [
            { label: 'url', documentation: '' }
        ],
        signature: '(url)'
    },
	openfeint_start: {
        description: '[Function] (Obsolete function in new GameMaker Studio)'
    },
	achievement_map_achievement: {
        description: '[Function] (Obsolete function in new GameMaker Studio)',
        parameters: [
            { label: 'gamecenter_string', documentation: '' },
            { label: 'openfeint_string', documentation: '' }
        ],
		signature: '(gamecenter_string, openfeint_string)'
	},
	achievement_map_leaderboard: {
        description: '[Function] (Obsolete function in new GameMaker Studio)',
        parameters: [
            { label: 'gamecenter_string', documentation: '' },
            { label: 'openfeint_string', documentation: '' },
            { label: 'leaderboard_type', documentation: '' }
        ],
		signature: '(gamecenter_string, openfeint_string, leaderboard_type)'
	},
	achievement_is_online: {
		description: '[Function] (Obsolete function in new GameMaker Studio)'
	},

	//GameMaker 8.1 Only
	background_add_background: {
        description: '[Function] (GameMaker 8.1 Only)',
        parameters: [
            { label: 'fname', documentation: '' }
        ],
        signature: '(fname)'
    },
    background_create_from_screen: {
        description: '[Function] (GameMaker 8.1 Only)',
        parameters: [
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' },
            { label: 'w', documentation: '' },
            { label: 'h', documentation: '' },
            { label: 'removeback', documentation: '' },
            { label: 'smooth', documentation: '' }
        ],
        signature: '(x, y, w, h, removeback, smooth)'
    },
    cd_close_door: {
        description: '[Function] (GameMaker 8.1 Only)'
    },
	cd_init: {
        description: '[Function] (GameMaker 8.1 Only)'
    },
    cd_length: {
        description: '[Function] (GameMaker 8.1 Only)'
    },
	cd_number: {
        description: '[Function] (GameMaker 8.1 Only)'
    },
	cd_open_door: {
        description: '[Function] (GameMaker 8.1 Only)'
    },
	cd_pause: {
        description: '[Function] (GameMaker 8.1 Only)'
    },
	cd_paused: {
        description: '[Function] (GameMaker 8.1 Only)'
    },
	cd_play: {
        description: '[Function] (GameMaker 8.1 Only)',
        parameters: [
            { label: 'first', documentation: '' },
            { label: 'last', documentation: '' }
        ],
        signature: '(first, last)'
    },
	cd_playing: {
        description: '[Function] (GameMaker 8.1 Only)'
    },
	cd_position: {
        description: '[Function] (GameMaker 8.1 Only)'
    },
	cd_present: {
        description: '[Function] (GameMaker 8.1 Only)'
    },
	cd_resume: {
        description: '[Function] (GameMaker 8.1 Only)'
    },
	cd_set_position: {
        description: '[Function] (GameMaker 8.1 Only)',
        parameters: [
            { label: 'pos', documentation: '' }
        ],
        signature: '(pos)'
    },
	cd_set_track_position: {
        description: '[Function] (GameMaker 8.1 Only)',
        parameters: [
            { label: 'pos', documentation: '' }
        ],
        signature: '(pos)'
    },
	cd_stop: {
        description: '[Function] (GameMaker 8.1 Only)'
    },
	cd_track: {
        description: '[Function] (GameMaker 8.1 Only)'
    },
	cd_track_length: {
        description: '[Function] (GameMaker 8.1 Only)',
        parameters: [
            { label: 'n', documentation: '' }
        ],
        signature: '(n)'
    },
	cd_track_position: {
        description: '[Function] (GameMaker 8.1 Only)'
    },
    date_create_date: {
        description: '[Function] (GameMaker 8.1 Only)',
        parameters: [
            { label: 'year', documentation: '' },
            { label: 'month', documentation: '' },
            { label: 'day', documentation: '' }
        ],
        signature: '(year, month, day)'
    },
    date_create_time: {
        description: '[Function] (GameMaker 8.1 Only)',
        parameters: [
            { label: 'hour', documentation: '' },
            { label: 'minute', documentation: '' },
            { label: 'second', documentation: '' }
        ],
        signature: '(hour, minute, second)'
    },
	date_current_date: {
        description: '[Function] (GameMaker 8.1 Only)'
    },
    date_current_time: {
        description: '[Function] (GameMaker 8.1 Only)'
    },
    date_valid_date: {
        description: '[Function] (GameMaker 8.1 Only)',
        parameters: [
            { label: 'year', documentation: '' },
            { label: 'month', documentation: '' },
            { label: 'day', documentation: '' }
        ],
        signature: '(year, month, day)'
    },
    date_valid_time: {
        description: '[Function] (GameMaker 8.1 Only)',
        parameters: [
            { label: 'hour', documentation: '' },
            { label: 'minute', documentation: '' },
            { label: 'second', documentation: '' }
        ],
        signature: '(hour, minute, second)'
    },
    discard_include_file: {
        description: '[Function] (GameMaker 8.1 Only)',
        parameters: [
            { label: 'fname', documentation: '' }
        ],
        signature: '(fname)'
    },
	disk_free: {
        description: '[Function] (GameMaker 8.1 Only)',
        parameters: [
            { label: 'drive', documentation: '' }
        ],
        signature: '(drive)'
    },
	disk_size: {
        description: '[Function] (GameMaker 8.1 Only)',
        parameters: [
            { label: 'drive', documentation: '' }
        ],
        signature: '(drive)'
    },
	display_set_all: {
        description: '[Function] (GameMaker 8.1 Only)',
        parameters: [
            { label: 'w', documentation: '' },
            { label: 'h', documentation: '' },
            { label: 'frequency', documentation: '' },
            { label: 'coldepth', documentation: '' }
        ],
        signature: '(w, h, frequency, coldepth)'
    },
	display_set_colordepth: {
        description: '[Function] (GameMaker 8.1 Only)',
        parameters: [
            { label: 'coldepth', documentation: '' }
        ],
        signature: '(coldepth)'
    },
	display_set_frequency: {
        description: '[Function] (GameMaker 8.1 Only)',
        parameters: [
            { label: 'frequency', documentation: '' }
        ],
        signature: '(frequency)'
    },
	display_set_size: {
        description: '[Function] (GameMaker 8.1 Only)',
        parameters: [
            { label: 'w', documentation: '' },
            { label: 'h', documentation: '' }
        ],
        signature: '(w, h)'
    },
	display_test_all: {
        description: '[Function] (GameMaker 8.1 Only)',
        parameters: [
            { label: 'w', documentation: '' },
            { label: 'h', documentation: '' },
            { label: 'frequency', documentation: '' },
            { label: 'coldepth', documentation: '' }
        ],
        signature: '(w, h, frequency, coldepth)'
    },
    execute_file: {
        description: '[Function] (GameMaker 8.1 Only)',
        parameters: [
            { label: 'fname', documentation: '' },
            { label: 'arg0', documentation: '' },
            { label: 'arg1', documentation: '' },
            { label: '...', documentation: '' }
        ],
        signature: '(fname, arg0, arg1, ...)'
    },
    execute_program: {
        description: '[Function] (GameMaker 8.1 Only)',
        parameters: [
            { label: 'fname', documentation: '' },
            { label: 'arg', documentation: '' },
            { label: 'wait', documentation: '' }
        ],
        signature: '(prog, arg, wait)'
    },
	execute_shell: {
        description: '[Function] (GameMaker 8.1 Only)',
        parameters: [
            { label: 'fname', documentation: '' },
            { label: 'arg', documentation: '' }
        ],
        signature: '(prog, arg)'
    },
    execute_string: {
        description: '[Function] (GameMaker 8.1 Only)',
        parameters: [
            { label: 'str', documentation: '' },
            { label: 'arg0', documentation: '' },
            { label: 'arg1', documentation: '' },
            { label: '...', documentation: '' }
        ],
        signature: '(str, arg0, arg1, ...)'
    },
	export_include_file: {
        description: '[Function] (GameMaker 8.1 Only)',
        parameters: [
            { label: 'fname', documentation: '' }
        ],
        signature: '(fname)'
    },
	export_include_file_location: {
        description: '[Function] (GameMaker 8.1 Only)',
        parameters: [
            { label: 'fname', documentation: '' },
            { label: 'location', documentation: '' }
        ],
        signature: '(fname, location)'
    },
    get_color: {
        description: '[Function] (GameMaker 8.1 Only)',
        parameters: [
            { label: 'defcol', documentation: '' }
        ],
        signature: '(defcol)'
    },
	get_directory: {
        description: '[Function] (GameMaker 8.1 Only)',
        parameters: [
            { label: 'dname', documentation: '' }
        ],
        signature: '(dname)'
    },
	get_directory_alt: {
        description: '[Function] (GameMaker 8.1 Only)',
        parameters: [
            { label: 'capt', documentation: '' },
            { label: 'root', documentation: '' }
        ],
        signature: '(capt, root)'
    },
    highscore_add_current: {
        description: '[Function] (GameMaker 8.1 Only)'
    },
    highscore_set_background: {
        description: '[Function] (GameMaker 8.1 Only)',
        parameters: [
            { label: 'back', documentation: '' }
        ],
        signature: '(back)'
    },
	highscore_set_border: {
        description: '[Function] (GameMaker 8.1 Only)',
        parameters: [
            { label: 'show', documentation: '' }
        ],
        signature: '(show)'
    },
	highscore_set_colors: {
        description: '[Function] (GameMaker 8.1 Only)',
        parameters: [
            { label: 'back', documentation: '' },
            { label: 'new', documentation: '' },
            { label: 'other', documentation: '' }
        ],
        signature: '(back, new, other)'
    },
	highscore_set_font: {
        description: '[Function] (GameMaker 8.1 Only)',
        parameters: [
            { label: 'name', documentation: '' },
            { label: 'size', documentation: '' },
            { label: 'style', documentation: '' }
        ],
        signature: '(name, size, style)'
    },
	highscore_set_strings: {
        description: '[Function] (GameMaker 8.1 Only)',
        parameters: [
            { label: 'caption', documentation: '' },
            { label: 'nobody', documentation: '' },
            { label: 'escape', documentation: '' }
        ],
        signature: '(caption, nobody, escape)'
    },
	highscore_show: {
        description: '[Function] (GameMaker 8.1 Only)',
        parameters: [
            { label: 'numb', documentation: '' }
        ],
        signature: '(numb)'
    },
	highscore_show_ext: {
        description: '[Function] (GameMaker 8.1 Only)',
        parameters: [
            { label: 'numb', documentation: '' },
            { label: 'back', documentation: '' },
            { label: 'border', documentation: '' },
            { label: 'col1', documentation: '' },
            { label: 'col2', documentation: '' },
            { label: 'name', documentation: '' },
            { label: 'size', documentation: '' }
        ],
        signature: '(numb, back, border, col1, col2, name, size)'
    },
    io_handle: {
        description: '[Function] (GameMaker 8.1 Only)'
    },
    keyboard_wait: {
        description: '[Function] (GameMaker 8.1 Only)'
    },
	MCI_command: {
        description: '[Function] (GameMaker 8.1 Only)',
        parameters: [
            { label: 'str', documentation: '' }
        ],
        signature: '(str)'
    },
	message_alpha: {
        description: '[Function] (GameMaker 8.1 Only)',
        parameters: [
            { label: 'alpha', documentation: '' }
        ],
        signature: '(alpha)'
    },
	message_background: {
        description: '[Function] (GameMaker 8.1 Only)',
        parameters: [
            { label: 'back', documentation: '' }
        ],
        signature: '(back)'
    },
	message_button: {
        description: '[Function] (GameMaker 8.1 Only)',
        parameters: [
            { label: 'sprite', documentation: '' }
        ],
        signature: '(sprite)'
    },
	message_button_font: {
        description: '[Function] (GameMaker 8.1 Only)',
        parameters: [
            { label: 'name', documentation: '' },
            { label: 'size', documentation: '' },
            { label: 'colour', documentation: '' },
            { label: 'style', documentation: '' }
        ],
        signature: '(name, size, colour, style)'
    },
	message_caption: {
        description: '[Function] (GameMaker 8.1 Only)',
        parameters: [
            { label: 'show', documentation: '' },
            { label: 'str', documentation: '' }
        ],
        signature: '(show, str)'
    },
	message_input_color: {
        description: '[Function] (GameMaker 8.1 Only)',
        parameters: [
            { label: 'col', documentation: '' }
        ],
        signature: '(col)'
    },
	message_input_font: {
        description: '[Function] (GameMaker 8.1 Only)',
        parameters: [
            { label: 'name', documentation: '' },
            { label: 'size', documentation: '' },
            { label: 'colour', documentation: '' },
            { label: 'style', documentation: '' }
        ],
        signature: '(name, size, colour, style)'
    },
	message_mouse_color: {
        description: '[Function] (GameMaker 8.1 Only)',
        parameters: [
            { label: 'col', documentation: '' }
        ],
        signature: '(col)'
    },
	message_position: {
        description: '[Function] (GameMaker 8.1 Only)',
        parameters: [
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' }
        ],
        signature: '(x, y)'
    },
	message_size: {
        description: '[Function] (GameMaker 8.1 Only)',
        parameters: [
            { label: 'w', documentation: '' },
            { label: 'h', documentation: '' }
        ],
        signature: '(w, h)'
    },
	message_text_charset: {
        description: '[Function] (GameMaker 8.1 Only)',
        parameters: [
            { label: 'type', documentation: '' },
            { label: 'charset_id', documentation: '' }
        ],
        signature: '(type, charset_id)'
    },
	message_text_font: {
        description: '[Function] (GameMaker 8.1 Only)',
        parameters: [
            { label: 'name', documentation: '' },
            { label: 'size', documentation: '' },
            { label: 'colour', documentation: '' },
            { label: 'style', documentation: '' }
        ],
        signature: '(name, size, colour, style)'
    },
    mouse_wait: {
        description: '[Function] (GameMaker 8.1 Only)'
    },
    object_add: {
        description: '[Function] (GameMaker 8.1 Only)'
    },
	object_delete: {
        description: '[Function] (GameMaker 8.1 Only)',
        parameters: [
            { label: 'ind', documentation: '' }
        ],
        signature: '(ind)'
    },
	object_event_add: {
        description: '[Function] (GameMaker 8.1 Only)',
        parameters: [
            { label: 'ind', documentation: '' },
            { label: 'evtype', documentation: '' },
            { label: 'evnumb', documentation: '' },
            { label: 'codestr', documentation: '' }
        ],
        signature: '(ind, evtype, evnumb, codestr)'
    },
	object_event_clear: {
        description: '[Function] (GameMaker 8.1 Only)',
        parameters: [
            { label: 'ind', documentation: '' },
            { label: 'evtype', documentation: '' },
            { label: 'evnumb', documentation: '' }
        ],
        signature: '(ind, evtype, evnumb)'
    },
	part_attractor_clear: {
        description: '[Function] (GameMaker 8.1 Only)',
        parameters: [
            { label: 'ps', documentation: '' },
            { label: 'ind', documentation: '' }
        ],
        signature: '(ps, ind)'
    },
	part_attractor_create: {
        description: '[Function] (GameMaker 8.1 Only)',
        parameters: [
            { label: 'ps', documentation: '' }
        ],
        signature: '(ps)'
    },
	part_attractor_destroy: {
        description: '[Function] (GameMaker 8.1 Only)',
        parameters: [
            { label: 'ps', documentation: '' },
            { label: 'ind', documentation: '' }
        ],
        signature: '(ps, ind)'
    },
	part_attractor_destroy_all: {
        description: '[Function] (GameMaker 8.1 Only)',
        parameters: [
            { label: 'ps', documentation: '' }
        ],
        signature: '(ps)'
    },
	part_attractor_exists: {
        description: '[Function] (GameMaker 8.1 Only)',
        parameters: [
            { label: 'ps', documentation: '' },
            { label: 'ind', documentation: '' }
        ],
        signature: '(ps, ind)'
    },
	part_attractor_force: {
        description: '[Function] (GameMaker 8.1 Only)',
        parameters: [
            { label: 'ps', documentation: '' },
            { label: 'ind', documentation: '' },
            { label: 'force', documentation: '' },
            { label: 'dist', documentation: '' },
            { label: 'kind', documentation: '' },
            { label: 'additive', documentation: '' }
        ],
        signature: '(ps, ind, force, dist, kind, additive)'
    },
	part_attractor_position: {
        description: '[Function] (GameMaker 8.1 Only)',
        parameters: [
            { label: 'ps', documentation: '' },
            { label: 'ind', documentation: '' },
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' }
        ],
        signature: '(ps, ind, x, y)'
    },
	part_changer_clear: {
        description: '[Function] (GameMaker 8.1 Only)',
        parameters: [
            { label: 'ps', documentation: '' },
            { label: 'ind', documentation: '' }
        ],
        signature: '(ps, ind)'
    },
	part_changer_create: {
        description: '[Function] (GameMaker 8.1 Only)',
        parameters: [
            { label: 'ps', documentation: '' }
        ],
        signature: '(ps)'
    },
	part_changer_destroy: {
        description: '[Function] (GameMaker 8.1 Only)',
        parameters: [
            { label: 'ps', documentation: '' },
            { label: 'ind', documentation: '' }
        ],
        signature: '(ps, ind)'
    },
	part_changer_destroy_all: {
        description: '[Function] (GameMaker 8.1 Only)',
        parameters: [
            { label: 'ps', documentation: '' }
        ],
        signature: '(ps)'
    },
	part_changer_exists: {
        description: '[Function] (GameMaker 8.1 Only)',
        parameters: [
            { label: 'ps', documentation: '' },
            { label: 'ind', documentation: '' }
        ],
        signature: '(ps, ind)'
    },
	part_changer_kind: {
        description: '[Function] (GameMaker 8.1 Only)',
        parameters: [
            { label: 'ps', documentation: '' },
            { label: 'ind', documentation: '' },
            { label: 'kind', documentation: '' }
        ],
        signature: '(ps, ind, kind)'
    },
	part_changer_region: {
        description: '[Function] (GameMaker 8.1 Only)',
        parameters: [
            { label: 'ps', documentation: '' },
            { label: 'ind', documentation: '' },
            { label: 'xmin', documentation: '' },
            { label: 'xmax', documentation: '' },
            { label: 'ymin', documentation: '' },
            { label: 'ymax', documentation: '' },
            { label: 'shape', documentation: '' }
        ],
        signature: '(ps, ind, xmin, xmax, ymin, ymax, shape)'
    },
	part_changer_types: {
        description: '[Function] (GameMaker 8.1 Only)',
        parameters: [
            { label: 'ps', documentation: '' },
            { label: 'ind', documentation: '' },
            { label: 'parttype1', documentation: '' },
            { label: 'parttype2', documentation: '' }
        ],
        signature: '(ps, ind, parttype1, parttype2)'
    },
	part_deflector_clear: {
        description: '[Function] (GameMaker 8.1 Only)',
        parameters: [
            { label: 'ps', documentation: '' },
            { label: 'ind', documentation: '' }
        ],
        signature: '(ps, ind)'
    },
	part_deflector_create: {
        description: '[Function] (GameMaker 8.1 Only)',
        parameters: [
            { label: 'ps', documentation: '' }
        ],
        signature: '(ps)'
    },
	part_deflector_destroy: {
        description: '[Function] (GameMaker 8.1 Only)',
        parameters: [
            { label: 'ps', documentation: '' },
            { label: 'ind', documentation: '' }
        ],
        signature: '(ps, ind)'
    },
	part_deflector_destroy_all: {
        description: '[Function] (GameMaker 8.1 Only)',
        parameters: [
            { label: 'ps', documentation: '' }
        ],
        signature: '(ps)'
    },
	part_deflector_exists: {
        description: '[Function] (GameMaker 8.1 Only)',
        parameters: [
            { label: 'ps', documentation: '' },
            { label: 'ind', documentation: '' }
        ],
        signature: '(ps, ind)'
    },
	part_deflector_friction: {
        description: '[Function] (GameMaker 8.1 Only)',
        parameters: [
            { label: 'ps', documentation: '' },
            { label: 'ind', documentation: '' },
            { label: 'amount', documentation: '' }
        ],
        signature: '(ps, ind, amount)'
    },
	part_deflector_kind: {
        description: '[Function] (GameMaker 8.1 Only)',
        parameters: [
            { label: 'ps', documentation: '' },
            { label: 'ind', documentation: '' },
            { label: 'kind', documentation: '' }
        ],
        signature: '(ps, ind, kind)'
    },
	part_deflector_region: {
        description: '[Function] (GameMaker 8.1 Only)',
        parameters: [
            { label: 'ps', documentation: '' },
            { label: 'ind', documentation: '' },
            { label: 'xmin', documentation: '' },
            { label: 'xmax', documentation: '' },
            { label: 'ymin', documentation: '' },
            { label: 'ymax', documentation: '' }
        ],
        signature: '(ps, ind, xmin, xmax, ymin, ymax)'
    },
	part_destroyer_clear: {
        description: '[Function] (GameMaker 8.1 Only)',
        parameters: [
            { label: 'ps', documentation: '' },
            { label: 'ind', documentation: '' }
        ],
        signature: '(ps, ind)'
    },
	part_destroyer_create: {
        description: '[Function] (GameMaker 8.1 Only)',
        parameters: [
            { label: 'ps', documentation: '' }
        ],
        signature: '(ps)'
    },
	part_destroyer_destroy: {
        description: '[Function] (GameMaker 8.1 Only)',
        parameters: [
            { label: 'ps', documentation: '' },
            { label: 'ind', documentation: '' }
        ],
        signature: '(ps, ind)'
    },
	part_destroyer_destroy_all: {
        description: '[Function] (GameMaker 8.1 Only)',
        parameters: [
            { label: 'ps', documentation: '' }
        ],
        signature: '(ps)'
    },
	part_destroyer_exists: {
        description: '[Function] (GameMaker 8.1 Only)',
        parameters: [
            { label: 'ps', documentation: '' },
            { label: 'ind', documentation: '' }
        ],
        signature: '(ps, ind)'
    },
	part_destroyer_region: {
        description: '[Function] (GameMaker 8.1 Only)',
        parameters: [
            { label: 'ps', documentation: '' },
            { label: 'ind', documentation: '' },
            { label: 'xmin', documentation: '' },
            { label: 'xmax', documentation: '' },
            { label: 'ymin', documentation: '' },
            { label: 'ymax', documentation: '' },
            { label: 'shape', documentation: '' }
        ],
        signature: '(ps, ind, xmin, xmax, ymin, ymax, shape)'
    },
    registry_exists: {
        description: '[Function] (GameMaker 8.1 Only)',
        parameters: [
            { label: 'name', documentation: '' }
        ],
        signature: '(name)'
    },
	registry_exists_ext: {
        description: '[Function] (GameMaker 8.1 Only)',
        parameters: [
            { label: 'key', documentation: '' },
            { label: 'name', documentation: '' }
        ],
        signature: '(key, name)'
    },
	registry_read_real: {
        description: '[Function] (GameMaker 8.1 Only)',
        parameters: [
            { label: 'name', documentation: '' }
        ],
        signature: '(name)'
    },
	registry_read_real_ext: {
        description: '[Function] (GameMaker 8.1 Only)',
        parameters: [
            { label: 'key', documentation: '' },
            { label: 'name', documentation: '' }
        ],
        signature: '(key, name)'
    },
	registry_read_string: {
        description: '[Function] (GameMaker 8.1 Only)',
        parameters: [
            { label: 'name', documentation: '' }
        ],
        signature: '(name)'
    },
	registry_read_string_ext: {
        description: '[Function] (GameMaker 8.1 Only)',
        parameters: [
            { label: 'key', documentation: '' },
            { label: 'name', documentation: '' }
        ],
        signature: '(key, name)'
    },
	registry_set_root: {
        description: '[Function] (GameMaker 8.1 Only)',
        parameters: [
            { label: 'root', documentation: '' }
        ],
        signature: '(root)'
    },
	registry_write_real: {
        description: '[Function] (GameMaker 8.1 Only)',
        parameters: [
            { label: 'name', documentation: '' },
            { label: 'value', documentation: '' }
        ],
        signature: '(name, value)'
    },
	registry_write_real_ext: {
        description: '[Function] (GameMaker 8.1 Only)',
        parameters: [
            { label: 'key', documentation: '' },
            { label: 'name', documentation: '' },
            { label: 'value', documentation: '' }
        ],
        signature: '(key, name, value)'
    },
	registry_write_string: {
        description: '[Function] (GameMaker 8.1 Only)',
        parameters: [
            { label: 'name', documentation: '' },
            { label: 'str', documentation: '' }
        ],
        signature: '(name, str)'
    },
	registry_write_string_ext: {
        description: '[Function] (GameMaker 8.1 Only)',
        parameters: [
            { label: 'key', documentation: '' },
            { label: 'name', documentation: '' },
            { label: 'str', documentation: '' }
        ],
        signature: '(key, name, str)'
    },
    room_set_caption: {
        description: '[Function] (GameMaker 8.1 Only)',
        parameters: [
            { label: 'ind', documentation: '' },
            { label: 'str', documentation: '' }
        ],
        signature: '(ind, str)'
    },
	room_set_code: {
        description: '[Function] (GameMaker 8.1 Only)',
        parameters: [
            { label: 'ind', documentation: '' },
            { label: 'codestr', documentation: '' }
        ],
        signature: '(ind, codestr)'
    },
    screen_redraw: {
        description: '[Function] (GameMaker 8.1 Only)'
    },
    screen_refresh: {
        description: '[Function] (GameMaker 8.1 Only)'
    },
    screen_wait_vsync: {
        description: '[Function] (GameMaker 8.1 Only)'
    },
    script_get_text: {
        description: '[Function] (GameMaker 8.1 Only)',
        parameters: [
            { label: 'ind', documentation: '' }
        ],
        signature: '(ind)'
    },
	set_application_title: {
        description: '[Function] (GameMaker 8.1 Only)',
        parameters: [
            { label: 'title', documentation: '' }
        ],
        signature: '(title)'
    },
	set_automatic_draw: {
        description: '[Function] (GameMaker 8.1 Only)',
        parameters: [
            { label: 'value', documentation: '' }
        ],
        signature: '(value)'
    },
	set_program_priority: {
        description: '[Function] (GameMaker 8.1 Only)',
        parameters: [
            { label: 'priority', documentation: '' }
        ],
        signature: '(priority)'
    },
	set_synchronization: {
        description: '[Function] (GameMaker 8.1 Only)',
        parameters: [
            { label: 'value', documentation: '' }
        ],
        signature: '(value)'
    },
    show_menu: {
        description: '[Function] (GameMaker 8.1 Only)',
        parameters: [
            { label: 'str', documentation: '' },
            { label: 'def', documentation: '' }
        ],
        signature: '(str, def)'
    },
	show_menu_pos: {
        description: '[Function] (GameMaker 8.1 Only)',
        parameters: [
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' },
            { label: 'str', documentation: '' },
            { label: 'def', documentation: '' }
        ],
        signature: '(x, y, str, def)'
    },
    show_message_ext: {
        description: '[Function] (GameMaker 8.1 Only)',
        parameters: [
            { label: 'str', documentation: '' },
            { label: 'but1', documentation: '' },
            { label: 'but2', documentation: '' },
            { label: 'but3', documentation: '' }
        ],
        signature: '(str, but1, but2, but3)'
    },
    sleep: {
        description: '[Function] (GameMaker 8.1 Only)',
        parameters: [
            { label: 'millisec', documentation: '' }
        ],
        signature: '(millisec)'
    },
	sound_3d_set_sound_cone: {
        description: '[Function] (GameMaker 8.1 Only)',
        signature: '(snd, x, y, z, anglein, angleout, voloutside)'
    },
	sound_3d_set_sound_distance: {
        description: '[Function] (GameMaker 8.1 Only)',
        signature: '(snd, mindist, maxdist)'
    },
	sound_3d_set_sound_position: {
        description: '[Function] (GameMaker 8.1 Only)',
        signature: '(snd, x, y, z)'
    },
	sound_3d_set_sound_velocity: {
        description: '[Function] (GameMaker 8.1 Only)',
        signature: '(snd, x, y, z)'
    },
	sound_add: {
        description: '[Function] (GameMaker 8.1 Only)',
        signature: '(fname, kind, preload)'
    },
	sound_background_tempo: {
        description: '[Function] (GameMaker 8.1 Only)',
        signature: '(factor)'
    },
	sound_effect_chorus: {
        description: '[Function] (GameMaker 8.1 Only)',
        signature: '(snd, wetdry, depth, feedback, frequency, wave, delay, phase)'
    },
	sound_effect_compressor: {
        description: '[Function] (GameMaker 8.1 Only)',
        signature: '(snd, gain, attack, release, threshold, ratio, delay)'
    },
	sound_effect_echo: {
        description: '[Function] (GameMaker 8.1 Only)',
        signature: '(snd, wetdry, feedback, leftdelay, rightdelay, pandelay)'
    },
	sound_effect_equalizer: {
        description: '[Function] (GameMaker 8.1 Only)',
        signature: '(snd, center, bandwidth, gain)'
    },
	sound_effect_flanger: {
        description: '[Function] (GameMaker 8.1 Only)',
        signature: '(snd, wetdry, depth, feedback, frequency, wave, delay, phase)'
    },
	sound_effect_gargle: {
        description: '[Function] (GameMaker 8.1 Only)',
        signature: '(snd, rate, wave)'
    },
	sound_effect_reverb: {
        description: '[Function] (GameMaker 8.1 Only)',
        signature: '(snd, gain, mix, time, ratio)'
    },
	sound_effect_set: {
        description: '[Function] (GameMaker 8.1 Only)',
        signature: '(snd, effect)'
    },
	sound_pan: {
        description: '[Function] (GameMaker 8.1 Only)',
        signature: '(index, value)'
    },
	sound_replace: {
        description: '[Function] (GameMaker 8.1 Only)',
        signature: '(ind, fname, kind, preload)'
    },
	sound_set_search_directory: {
        description: '[Function] (GameMaker 8.1 Only)',
        signature: '(dir)'
    },
	splash_set_adapt: {
        description: '[Function] (GameMaker 8.1 Only)',
        signature: '(adapt)'
    },
	splash_set_border: {
        description: '[Function] (GameMaker 8.1 Only)',
        signature: '(border)'
    },
	splash_set_caption: {
        description: '[Function] (GameMaker 8.1 Only)',
        signature: '(cap)'
    },
	splash_set_close_button: {
        description: '[Function] (GameMaker 8.1 Only)',
        parameters: [
            { label: 'show', documentation: '' }
        ],
        signature: '(show)'
    },
	splash_set_color: {
        description: '[Function] (GameMaker 8.1 Only)',
        parameters: [
            { label: 'col', documentation: '' }
        ],
        signature: '(col)'
    },
	splash_set_cursor: {
        description: '[Function] (GameMaker 8.1 Only)',
        arameters: [
            { label: 'vis', documentation: '' }
        ],
        signature: '(vis)'
    },
	splash_set_fullscreen: {
        description: '[Function] (GameMaker 8.1 Only)',
        arameters: [
            { label: 'full', documentation: '' }
        ],
        signature: '(full)'
    },
	splash_set_interrupt: {
        description: '[Function] (GameMaker 8.1 Only)',
        arameters: [
            { label: 'interrupt', documentation: '' }
        ],
        signature: '(interrupt)'
    },
	splash_set_main: {
        description: '[Function] (GameMaker 8.1 Only)',
        arameters: [
            { label: 'main', documentation: '' }
        ],
        signature: '(main)'
    },
	splash_set_position: {
        description: '[Function] (GameMaker 8.1 Only)',
        parameters: [
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' }
        ],
        signature: '(x, y)'
    },
	splash_set_scale: {
        description: '[Function] (GameMaker 8.1 Only)',
        arameters: [
            { label: 'scale', documentation: '' }
        ],
        signature: '(scale)'
    },
	splash_set_size: {
        description: '[Function] (GameMaker 8.1 Only)',
        parameters: [
            { label: 'w', documentation: '' },
            { label: 'h', documentation: '' }
        ],
        signature: '(w, h)'
    },
	splash_set_stop_key: {
        description: '[Function] (GameMaker 8.1 Only)',
        arameters: [
            { label: 'stop', documentation: '' }
        ],
        signature: '(stop)'
    },
	splash_set_stop_mouse: {
        description: '[Function] (GameMaker 8.1 Only)',
        arameters: [
            { label: 'stop', documentation: '' }
        ],
        signature: '(stop)'
    },
	splash_set_top: {
        description: '[Function] (GameMaker 8.1 Only)',
        arameters: [
            { label: 'top', documentation: '' }
        ],
        signature: '(top)'
    },
	splash_show_image: {
        description: '[Function] (GameMaker 8.1 Only)',
        signature: '(fname, delay)'
    },
	splash_show_text: {
        description: '[Function] (GameMaker 8.1 Only)',
        signature: '(fname, delay)'
    },
	splash_show_video: {
        description: '[Function] (GameMaker 8.1 Only)',
        signature: '(fname, loop)'
    },
	splash_show_web: {
        description: '[Function] (GameMaker 8.1 Only)',
        signature: '(url, delay)'
    },
    sprite_add_from_screen: {
        description: '[Function] (GameMaker 8.1 Only)',
        signature: '(ind, x, y, w, h, removeback, smooth)'
    },
    sprite_add_sprite: {
        description: '[Function] (GameMaker 8.1 Only)',
        parameters: [
            { label: 'fname', documentation: '' }
        ],
        signature: '(fname)'
    },
    sprite_create_from_screen: {
        description: '[Function] (GameMaker 8.1 Only)',
        signature: '(x, y, w, h, removeback, smooth, xorig, yorig)'
    },
    sprite_replace_sprite: {
        description: '[Function] (GameMaker 8.1 Only)',
        parameters: [
            { label: 'ind', documentation: '' },
            { label: 'fname', documentation: '' }
        ],
        signature: '(ind, fname)'
    },
    timeline_moment_add: {
        description: '[Function] (GameMaker 8.1 Only)',
        signature: '(ind, step, codestr)'
    },
    transition_define: {
        description: '[Function] (GameMaker 8.1 Only)',
        signature: '(kind, name)'
    },
	transition_exists: {
        description: '[Function] (GameMaker 8.1 Only)',
        parameters: [
            { label: 'kind', documentation: '' }
        ],
        signature: '(kind)'
    },
	variable_global_array2_get: {
        description: '[Function] (GameMaker 8.1 Only)',
        signature: '(name, ind1, ind2)'
    },
	variable_global_array2_set: {
        description: '[Function] (GameMaker 8.1 Only)',
        signature: '(name, ind1, ind2, value)'
    },
	variable_global_array_get: {
        description: '[Function] (GameMaker 8.1 Only)',
        signature: '(name, ind)'
    },
	variable_global_array_set: {
        description: '[Function] (GameMaker 8.1 Only)',
        signature: '(name, ind, value)'
    },
    variable_local_array2_get: {
        description: '[Function] (GameMaker 8.1 Only)',
        signature: '(name, ind1, ind2)'
    },
	variable_local_array2_set: {
        description: '[Function] (GameMaker 8.1 Only)',
        signature: '(name, ind1, ind2, value)'
    },
	variable_local_array_get: {
        description: '[Function] (GameMaker 8.1 Only)',
        signature: '(name, ind)'
    },
	variable_local_array_set: {
        description: '[Function] (GameMaker 8.1 Only)',
        signature: '(name, ind, value)'
    },
	variable_local_exists: {
        description: '[Function] (GameMaker 8.1 Only)',
        parameters: [
            { label: 'name', documentation: '' }
        ],
        signature: '(name)'
    },
	variable_local_get: {
        description: '[Function] (GameMaker 8.1 Only)',
        parameters: [
            { label: 'name', documentation: '' }
        ],
        signature: '(name)'
    },
	variable_local_set: {
        description: '[Function] (GameMaker 8.1 Only)',
        parameters: [
            { label: 'name', documentation: '' },
            { label: 'value', documentation: '' }
        ],
        signature: '(name, value)'
    },
    window_default: {
        description: '[Function] (GameMaker 8.1 Only)'
    },
    window_get_region_height: {
        description: '[Function] (GameMaker 8.1 Only)'
    },
	window_get_region_scale: {
        description: '[Function] (GameMaker 8.1 Only)'
    },
	window_get_region_width: {
        description: '[Function] (GameMaker 8.1 Only)'
    },
	window_get_showborder: {
        description: '[Function] (GameMaker 8.1 Only)'
    },
	window_get_showicons: {
        description: '[Function] (GameMaker 8.1 Only)'
    },
	window_get_sizeable: {
        description: '[Function] (GameMaker 8.1 Only)'
    },
	window_get_stayontop: {
        description: '[Function] (GameMaker 8.1 Only)'
    },
    window_get_visible: {
        description: '[Function] (GameMaker 8.1 Only)'
    },
    window_set_region_scale: {
        description: '[Function] (GameMaker 8.1 Only)',
        signature: '(scale, adaptwindow)'
    },
	window_set_region_size: {
        description: '[Function] (GameMaker 8.1 Only)',
        signature: '(w, h, adaptwindow)'
    },
	window_set_showborder: {
        description: '[Function] (GameMaker 8.1 Only)',
        parameters: [
            { label: 'show', documentation: '' }
        ],
        signature: '(show)'
    },
	window_set_showicons: {
        description: '[Function] (GameMaker 8.1 Only)',
        parameters: [
            { label: 'show', documentation: '' }
        ],
        signature: '(show)'
    },
	window_set_sizeable: {
        description: '[Function] (GameMaker 8.1 Only)',
        signature: '(sizeable)'
    },
	window_set_stayontop: {
        description: '[Function] (GameMaker 8.1 Only)',
        signature: '(stay)'
    },
	window_set_visible: {
        description: '[Function] (GameMaker 8.1 Only)',
        signature: '(visible)'
    },
	window_views_mouse_set: {
        description: '[Function] (GameMaker 8.1 Only)',
        parameters: [
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' }
        ],
        signature: '(x, y)'
    },
	window_view_mouse_set: {
        description: '[Function] (GameMaker 8.1 Only)',
        parameters: [
            { label: 'id', documentation: '' },
            { label: 'x', documentation: '' },
            { label: 'y', documentation: '' }
        ],
        signature: '(id, x, y)'
    },
    
    texture_preload: {
        description: '[Function] (GameMaker 8.1 Only)',
        parameters: [
            { label: 'texid', documentation: '' }
        ],
        signature: '(texid)'
    },
    texture_set_priority: {
        description: '[Function] (GameMaker 8.1 Only)',
        signature: '(texid, prio)'
    },
    display_get_colourdepth: {
        description: '[Function] (GameMaker 8.1 Only)'
    },
    display_get_frequency: {
        description: '[Function] (GameMaker 8.1 Only)'
    },
    show_info: {
        description: '[Function] (GameMaker 8.1 Only)'
    },
    load_info: {
        description: '[Function] (GameMaker 8.1 Only)',
        parameters: [
            { label: 'fname', documentation: '' }
        ],
        signature: '(fname)'
    },

	//New in GameMaker Studio 2
	string_hash_to_newline: {
        description: '[Function] (New in GameMaker Studio 2)',
        parameters: [
            { label: 'str', documentation: '' }
        ],
        signature: '(str)'
    },
	game_set_speed: {
        description: '[Function] (New in GameMaker Studio 2)',
        parameters: [
            { label: 'value', documentation: '' },
            { label: 'type', documentation: '' }
        ],
        signature: '(value, type)'
    },
	game_get_speed: {
        description: '[Function] (New in GameMaker Studio 2)',
        parameters: [
            { label: 'type', documentation: '' }
        ],
        signature: '(type)'
    },
	sprite_set_speed: {
        description: '[Function] (New in GameMaker Studio 2)',
        parameters: [
            { label: 'ind', documentation: '' },
            { label: 'speed', documentation: '' },
            { label: 'type', documentation: '' }
        ],
        signature: '(ind, speed, type)'
    },
	sprite_get_speed_type: {
        description: '[Function] (New in GameMaker Studio 2)',
        parameters: [
            { label: 'ind', documentation: '' }
        ],
        signature: '(ind)'
    },
	sprite_get_speed: {
        description: '[Function] (New in GameMaker Studio 2)',
        parameters: [
            { label: 'ind', documentation: '' }
        ],
        signature: '(ind)'
    },
	texture_get_uvs: {
        description: '[Function] (New in GameMaker Studio 2)',
        parameters: [
            { label: 'texid', documentation: '' }
        ],
        signature: '(texid)'
    },
	room_get_camera: {
        description: '[Function] (New in GameMaker Studio 2)',
        parameters: [
            { label: 'ind', documentation: '' },
            { label: 'vind', documentation: '' }
        ],
        signature: '(ind, vind)'
    },
	room_set_camera: {
        description: '[Function] (New in GameMaker Studio 2)',
        parameters: [
            { label: 'ind', documentation: '' },
            { label: 'vind', documentation: '' },
            { label: 'camera', documentation: '' }
        ],
        signature: '(ind, vind, camera)'
    },
	room_set_viewport: {
        description: '[Function] (New in GameMaker Studio 2)',
        parameters: [
            { label: 'ind', documentation: '' },
            { label: 'vind', documentation: '' }
        ],
        signature: '(ind, vind)'
    },
	room_get_viewport: {
        description: '[Function] (New in GameMaker Studio 2)',
        parameters: [
            { label: 'ind', documentation: '' },
            { label: 'vind', documentation: '' },
            { label: 'vis', documentation: '' },
            { label: 'xport', documentation: '' },
            { label: 'yport', documentation: '' },
            { label: 'wport', documentation: '' },
            { label: 'hport', documentation: '' }
        ],
        signature: '(ind, vind, vis, xport, yport, wport, hport)'
    },
	ds_list_set: {
        description: '[Function] (New in GameMaker Studio 2)',
        parameters: [
            { label: 'id', documentation: '' },
            { label: 'pos', documentation: '' },
            { label: 'value', documentation: '' }
        ],
        signature: '(id, pos, value)'
    },
	ds_map_set: {
        description: '[Function] (New in GameMaker Studio 2)',
        parameters: [
            { label: 'id', documentation: '' },
            { label: 'key', documentation: '' },
            { label: 'value', documentation: '' }
        ],
        signature: '(id, key, value)'
    },
	part_system_create_layer: {
        description: '[Function] (New in GameMaker Studio 2)',
        signature: '(layer, persistent)'
    },
	part_system_get_layer: {
        description: '[Function] (New in GameMaker Studio 2)',
        parameters: [
            { label: 'ind', documentation: '' }
        ],
        signature: '(ind)'
    },
	part_system_layer: {
        description: '[Function] (New in GameMaker Studio 2)',
        signature: '(ind, layer)'
    },
	matrix_build_identity: {
        description: '[Function] (New in GameMaker Studio 2)'
    },
	matrix_build_lookat: {
        description: '[Function] (New in GameMaker Studio 2)',
        signature: '(xfrom, yfrom, zfrom, xto, yto, zto, xup, yup, zup)'
    },
	matrix_build_projection_ortho: {
        description: '[Function] (New in GameMaker Studio 2)',
        signature: '(width, height, znear, zfar)'
    },
	matrix_build_projection_perspective: {
        description: '[Function] (New in GameMaker Studio 2)',
        signature: '(width, height, znear, zfar)'
    },
	matrix_build_projection_perspective_fov: {
        description: '[Function] (New in GameMaker Studio 2)',
        signature: '(fov_y, aspect, znear, zfar)'
    },
	matrix_transform_vertex: {
        description: '[Function] (New in GameMaker Studio 2)',
        signature: '(matrix, x, y, z)'
    },
	matrix_stack_push: {
        description: '[Function] (New in GameMaker Studio 2)',
        signature: '(...)'
    },
	matrix_stack_pop: {
        description: '[Function] (New in GameMaker Studio 2)'
    },
	matrix_stack_set: {
        description: '[Function] (New in GameMaker Studio 2)',
        signature: '(matrix)'
    },
	matrix_stack_clear: {
        description: '[Function] (New in GameMaker Studio 2)'
    },
	matrix_stack_top: {
        description: '[Function] (New in GameMaker Studio 2)'
    },
	matrix_stack_is_empty: {
        description: '[Function] (New in GameMaker Studio 2)'
    },
	gpu_set_blendenable: {
        description: '[Function] (New in GameMaker Studio 2)',
        parameters: [
            { label: 'enable', documentation: '' }
        ],
        signature: '(enable)'
    },
	gpu_set_ztestenable: {
        description: '[Function] (New in GameMaker Studio 2)',
        parameters: [
            { label: 'enable', documentation: '' }
        ],
        signature: '(enable)'
    },
	gpu_set_zfunc: {
        description: '[Function] (New in GameMaker Studio 2)',
        parameters: [
            { label: 'enable', documentation: '' }
        ],
        signature: '(enable)'
    },
	gpu_set_zwriteenable: {
        description: '[Function] (New in GameMaker Studio 2)',
        parameters: [
            { label: 'enable', documentation: '' }
        ],
        signature: '(enable)'
    },
	gpu_set_fog: {
        description: '[Function] (New in GameMaker Studio 2)',
        signature: '(enable, col, start, end)'
    },
	gpu_set_cullmode: {
        description: '[Function] (New in GameMaker Studio 2)',
        signature: '(cullmode)'
    },
	gpu_set_blendmode: {
        description: '[Function] (New in GameMaker Studio 2)',
        signature: '(mode)'
    },
	gpu_set_blendmode_ext: {
        description: '[Function] (New in GameMaker Studio 2)',
        parameters: [
            { label: 'src', documentation: '' },
            { label: 'dest', documentation: '' }
        ],
        signature: '(src, dest)'
    },
	gpu_set_blendmode_ext_sepalpha: {
        description: '[Function] (New in GameMaker Studio 2)',
        signature: '(src, dest, srcalpha, destalpha)'
    },
	gpu_set_colorwriteenable: {
        description: '[Function] (New in GameMaker Studio 2)',
        signature: '(red, green, blue, alpha)'
    },
	gpu_set_colourwriteenable: {
        description: '[Function] (New in GameMaker Studio 2)',
        signature: '(red, green, blue, alpha)'
    },
	gpu_set_alphatestenable: {
        description: '[Function] (New in GameMaker Studio 2)',
        parameters: [
            { label: 'enable', documentation: '' }
        ],
        signature: '(enable)'
    },
	gpu_set_alphatestref: {
        description: '[Function] (New in GameMaker Studio 2)',
        signature: '(value)'
    },
	gpu_set_alphatestfunc: {
        description: '[Function] (New in GameMaker Studio 2)',
        signature: '(cmp_func)'
    },
	gpu_set_texfilter: {
        description: '[Function] (New in GameMaker Studio 2)',
        signature: '(linear)'
    },
	gpu_set_texfilter_ext: {
        description: '[Function] (New in GameMaker Studio 2)',
        signature: '(sampler_id, linear)'
    },
	gpu_set_texrepeat: {
        description: '[Function] (New in GameMaker Studio 2)',
        signature: '(repeat)'
    },
	gpu_set_texrepeat_ext: {
        description: '[Function] (New in GameMaker Studio 2)',
        signature: '(sampler_id, repeat)'
    },
	gpu_set_tex_filter: {
        description: '[Function] (New in GameMaker Studio 2)',
        signature: '(linear)'
    },
	gpu_set_tex_filter_ext: {
        description: '[Function] (New in GameMaker Studio 2)',
        signature: '(sampler_id, linear)'
    },
	gpu_set_tex_repeat: {
        description: '[Function] (New in GameMaker Studio 2)',
        signature: '(repeat)'
    },
	gpu_set_tex_repeat_ext: {
        description: '[Function] (New in GameMaker Studio 2)',
        signature: '(sampler_id, repeat)'
    },
	gpu_set_tex_mip_filter: {
        description: '[Function] (New in GameMaker Studio 2)',
        signature: '(filter)'
    },
	gpu_set_tex_mip_filter_ext: {
        description: '[Function] (New in GameMaker Studio 2)',
        signature: '(sampler_id, filter)'
    },
	gpu_set_tex_mip_bias: {
        description: '[Function] (New in GameMaker Studio 2)',
        signature: '(bias)'
    },
	gpu_set_tex_mip_bias_ext: {
        description: '[Function] (New in GameMaker Studio 2)',
        signature: '(sampler_id, bias)'
    },
	gpu_set_tex_min_mip: {
        description: '[Function] (New in GameMaker Studio 2)',
        signature: '(minmip)'
    },
	gpu_set_tex_min_mip_ext: {
        description: '[Function] (New in GameMaker Studio 2)',
        signature: '(sampler_id, minmip)'
    },
	gpu_set_tex_max_mip: {
        description: '[Function] (New in GameMaker Studio 2)',
        signature: '(maxmip)'
    },
	gpu_set_tex_max_mip_ext: {
        description: '[Function] (New in GameMaker Studio 2)',
        signature: '(sampler_id, maxmip)'
    },
	gpu_set_tex_max_aniso: {
        description: '[Function] (New in GameMaker Studio 2)',
        signature: '(maxaniso)'
    },
	gpu_set_tex_max_aniso_ext: {
        description: '[Function] (New in GameMaker Studio 2)',
        signature: '(sampler_id, maxaniso)'
    },
	gpu_set_tex_mip_enable: {
        description: '[Function] (New in GameMaker Studio 2)',
        signature: '(setting)'
    },
	gpu_set_tex_mip_enable_ext: {
        description: '[Function] (New in GameMaker Studio 2)',
        signature: '(sampler_id, setting)'
    },
	gpu_get_blendenable: {
        description: '[Function] (New in GameMaker Studio 2)'
    },
	gpu_get_ztestenable: {
        description: '[Function] (New in GameMaker Studio 2)'
    },
	gpu_get_zfunc: {
        description: '[Function] (New in GameMaker Studio 2)'
    },
	gpu_get_zwriteenable: {
        description: '[Function] (New in GameMaker Studio 2)'
    },
	gpu_get_fog: {
        description: '[Function] (New in GameMaker Studio 2)'
    },
	gpu_get_cullmode: {
        description: '[Function] (New in GameMaker Studio 2)'
    },
	gpu_get_blendmode: {
        description: '[Function] (New in GameMaker Studio 2)'
    },
	gpu_get_blendmode_ext: {
        description: '[Function] (New in GameMaker Studio 2)'
    },
	gpu_get_blendmode_ext_sepalpha: {
        description: '[Function] (New in GameMaker Studio 2)'
    },
	gpu_get_blendmode_src: {
        description: '[Function] (New in GameMaker Studio 2)'
    },
	gpu_get_blendmode_dest: {
        description: '[Function] (New in GameMaker Studio 2)'
    },
	gpu_get_blendmode_srcalpha: {
        description: '[Function] (New in GameMaker Studio 2)'
    },
	gpu_get_blendmode_destalpha: {
        description: '[Function] (New in GameMaker Studio 2)'
    },
	gpu_get_colorwriteenable: {
        description: '[Function] (New in GameMaker Studio 2)'
    },
	gpu_get_colourwriteenable: {
        description: '[Function] (New in GameMaker Studio 2)'
    },
	gpu_get_alphatestenable: {
        description: '[Function] (New in GameMaker Studio 2)'
    },
	gpu_get_alphatestref: {
        description: '[Function] (New in GameMaker Studio 2)'
    },
	gpu_get_alphatestfunc: {
        description: '[Function] (New in GameMaker Studio 2)'
    },
	gpu_get_texfilter: {
        description: '[Function] (New in GameMaker Studio 2)'
    },
	gpu_get_texfilter_ext: {
        description: '[Function] (New in GameMaker Studio 2)',
        parameters: [
            { label: 'sampler_id', documentation: '' }
        ],
        signature: '(sampler_id)'
    },
	gpu_get_texrepeat: {
        description: '[Function] (New in GameMaker Studio 2)'
    },
	gpu_get_texrepeat_ext: {
        description: '[Function] (New in GameMaker Studio 2)',
        parameters: [
            { label: 'sampler_id', documentation: '' }
        ],
        signature: '(sampler_id)'
    },
	gpu_get_tex_filter: {
        description: '[Function] (New in GameMaker Studio 2)'
    },
	gpu_get_tex_filter_ext: {
        description: '[Function] (New in GameMaker Studio 2)',
        parameters: [
            { label: 'sampler_id', documentation: '' }
        ],
        signature: '(sampler_id)'
    },
	gpu_get_tex_repeat: {
        description: '[Function] (New in GameMaker Studio 2)'
    },
	gpu_get_tex_repeat_ext: {
        description: '[Function] (New in GameMaker Studio 2)',
        parameters: [
            { label: 'sampler_id', documentation: '' }
        ],
        signature: '(sampler_id)'
    },
	gpu_get_tex_mip_filter: {
        description: '[Function] (New in GameMaker Studio 2)'
    },
	gpu_get_tex_mip_filter_ext: {
        description: '[Function] (New in GameMaker Studio 2)',
        parameters: [
            { label: 'sampler_id', documentation: '' }
        ],
        signature: '(sampler_id)'
    },
	gpu_get_tex_mip_bias: {
        description: '[Function] (New in GameMaker Studio 2)'
    },
	gpu_get_tex_mip_bias_ext: {
        description: '[Function] (New in GameMaker Studio 2)',
        parameters: [
            { label: 'sampler_id', documentation: '' }
        ],
        signature: '(sampler_id)'
    },
	gpu_get_tex_min_mip: {
        description: '[Function] (New in GameMaker Studio 2)'
    },
	gpu_get_tex_min_mip_ext: {
        description: '[Function] (New in GameMaker Studio 2)',
        parameters: [
            { label: 'sampler_id', documentation: '' }
        ],
        signature: '(sampler_id)'
    },
	gpu_get_tex_max_mip: {
        description: '[Function] (New in GameMaker Studio 2)'
    },
	gpu_get_tex_max_mip_ext: {
        description: '[Function] (New in GameMaker Studio 2)',
        parameters: [
            { label: 'sampler_id', documentation: '' }
        ],
        signature: '(sampler_id)'
    },
	gpu_get_tex_max_aniso: {
        description: '[Function] (New in GameMaker Studio 2)'
    },
	gpu_get_tex_max_aniso_ext: {
        description: '[Function] (New in GameMaker Studio 2)',
        parameters: [
            { label: 'sampler_id', documentation: '' }
        ],
        signature: '(sampler_id)'
    },
	gpu_get_tex_mip_enable: {
        description: '[Function] (New in GameMaker Studio 2)'
    },
	gpu_get_tex_mip_enable_ext: {
        description: '[Function] (New in GameMaker Studio 2)',
        parameters: [
            { label: 'sampler_id', documentation: '' }
        ],
        signature: '(sampler_id)'
    },
	gpu_push_state: {
        description: '[Function] (New in GameMaker Studio 2)'
    },
	gpu_pop_state: {
        description: '[Function] (New in GameMaker Studio 2)'
    },
	gpu_get_state: {
        description: '[Function] (New in GameMaker Studio 2)'
    },
	gpu_set_state: {
        description: '[Function] (New in GameMaker Studio 2)',
        parameters: [
            { label: 'map', documentation: '' }
        ],
        signature: '(map)'
    },
	draw_light_define_ambient: {
        description: '[Function] (New in GameMaker Studio 2)',
        parameters: [
            { label: 'col', documentation: '' }
        ],
        signature: '(col)'
    },
	draw_light_define_direction: {
        description: '[Function] (New in GameMaker Studio 2)',
        signature: '(ind, dx, dy, dz, col)'
    },
	draw_light_define_point: {
        description: '[Function] (New in GameMaker Studio 2)',
        signature: '(ind, x, y, z, range, col)'
    },
	draw_light_enable: {
        description: '[Function] (New in GameMaker Studio 2)',
        signature: '(ind, enable)'
    },
	draw_set_lighting: {
        description: '[Function] (New in GameMaker Studio 2)',
        parameters: [
            { label: 'enable', documentation: '' }
        ],
        signature: '(enable)'
    },
	draw_light_get_ambient: {
        description: '[Function] (New in GameMaker Studio 2)'
    },
	draw_light_get: {
        description: '[Function] (New in GameMaker Studio 2)',
        parameters: [
            { label: 'ind', documentation: '' }
        ],
        signature: '(ind)'
    },
	draw_get_lighting: {
        description: '[Function] (New in GameMaker Studio 2)'
    },
	load_csv: {
        description: '[Function] (New in GameMaker Studio 2)',
        parameters: [
            { label: 'filename', documentation: '' }
        ],
        signature: '(filename)'
    },
    skeleton_animation_get_frame: {
        description: '[Function] (New in GameMaker Studio 2)',
        parameters: [
            { label: 'track', documentation: '' }
        ],
        signature: '(track)'
    },
	skeleton_animation_set_frame: {
        description: '[Function] (New in GameMaker Studio 2)',
        parameters: [
            { label: 'track', documentation: '' },
            { label: 'index', documentation: '' }
        ],
        signature: '(track, index)'
    },
	layer_get_id: {
        description: '[Function] (New in GameMaker Studio 2)',
        parameters: [
            { label: 'layer_name', documentation: '' }
        ],
        signature: '(layer_name)'
    },
	layer_get_id_at_depth: {
        description: '[Function] (New in GameMaker Studio 2)',
        parameters: [
            { label: 'depth', documentation: '' }
        ],
        signature: '(depth)'
    },
	layer_get_depth: {
        description: '[Function] (New in GameMaker Studio 2)',
        parameters: [
            { label: 'layer_id', documentation: '' }
        ],
        signature: '(layer_id)'
    },
	layer_create: {
        description: '[Function] (New in GameMaker Studio 2)',
        signature: '(depth, name*, ...)'
    },
	layer_destroy: {
        description: '[Function] (New in GameMaker Studio 2)',
        parameters: [
            { label: 'layer_id', documentation: '' }
        ],
        signature: '(layer_id)'
    },
	layer_destroy_instances: {
        description: '[Function] (New in GameMaker Studio 2)',
        parameters: [
            { label: 'layer_id', documentation: '' }
        ],
        signature: '(layer_id)'
    },
	layer_add_instance: {
        description: '[Function] (New in GameMaker Studio 2)',
        signature: '(layer_id, instance)'
    },
	layer_has_instance: {
        description: '[Function] (New in GameMaker Studio 2)',
        signature: '(layer_id, instance)'
    },
	layer_set_visible: {
        description: '[Function] (New in GameMaker Studio 2)',
        signature: '(layer_id, visible)'
    },
	layer_get_visible: {
        description: '[Function] (New in GameMaker Studio 2)',
        parameters: [
            { label: 'layer_id', documentation: '' }
        ],
        signature: '(layer_id)'
    },
	layer_exists: {
        description: '[Function] (New in GameMaker Studio 2)',
        parameters: [
            { label: 'layer_id', documentation: '' }
        ],
        signature: '(layer_id)'
    },
	layer_x: {
        description: '[Function] (New in GameMaker Studio 2)',
        signature: '(layer_id, x)'
    },
	layer_y: {
        description: '[Function] (New in GameMaker Studio 2)',
        signature: '(layer_id, y)'
    },
	layer_get_x: {
        description: '[Function] (New in GameMaker Studio 2)',
        parameters: [
            { label: 'layer_id', documentation: '' }
        ],
        signature: '(layer_id)'
    },
	layer_get_y: {
        description: '[Function] (New in GameMaker Studio 2)',
        parameters: [
            { label: 'layer_id', documentation: '' }
        ],
        signature: '(layer_id)'
    },
	layer_hspeed: {
        description: '[Function] (New in GameMaker Studio 2)',
        signature: '(layer_id, speed)'
    },
	layer_vspeed: {
        description: '[Function] (New in GameMaker Studio 2)',
        signature: '(layer_id, speed)'
    },
	layer_get_hspeed: {
        description: '[Function] (New in GameMaker Studio 2)',
        parameters: [
            { label: 'layer_id', documentation: '' }
        ],
        signature: '(layer_id)'
    },
	layer_get_vspeed: {
        description: '[Function] (New in GameMaker Studio 2)',
        parameters: [
            { label: 'layer_id', documentation: '' }
        ],
        signature: '(layer_id)'
    },
	layer_script_begin: {
        description: '[Function] (New in GameMaker Studio 2)',
        signature: '(layer_id, script)'
    },
	layer_script_end: {
        description: '[Function] (New in GameMaker Studio 2)',
        signature: '(layer_id, script)'
    },
	layer_shader: {
        description: '[Function] (New in GameMaker Studio 2)',
        signature: '(layer_id, shader)'
    },
	layer_get_script_begin: {
        description: '[Function] (New in GameMaker Studio 2)',
        parameters: [
            { label: 'layer_id', documentation: '' }
        ],
        signature: '(layer_id)'
    },
	layer_get_script_end: {
        description: '[Function] (New in GameMaker Studio 2)',
        parameters: [
            { label: 'layer_id', documentation: '' }
        ],
        signature: '(layer_id)'
    },
	layer_get_shader: {
        description: '[Function] (New in GameMaker Studio 2)',
        parameters: [
            { label: 'layer_id', documentation: '' }
        ],
        signature: '(layer_id)'
    },
	layer_set_target_room: {
        description: '[Function] (New in GameMaker Studio 2)',
        signature: '(room)'
    },
	layer_get_target_room: {
        description: '[Function] (New in GameMaker Studio 2)'
    },
	layer_reset_target_room: {
        description: '[Function] (New in GameMaker Studio 2)'
    },
	layer_get_all: {
        description: '[Function] (New in GameMaker Studio 2)'
    },
	layer_get_all_elements: {
        description: '[Function] (New in GameMaker Studio 2)',
        parameters: [
            { label: 'layer_id', documentation: '' }
        ],
        signature: '(layer_id)'
    },
	layer_get_name: {
        description: '[Function] (New in GameMaker Studio 2)',
        parameters: [
            { label: 'layer_id', documentation: '' }
        ],
        signature: '(layer_id)'
    },
	layer_depth: {
        description: '[Function] (New in GameMaker Studio 2)',
        signature: '(layer_id, depth)'
    },
	layer_get_element_layer: {
        description: '[Function] (New in GameMaker Studio 2)',
        parameters: [
            { label: 'element_id', documentation: '' }
        ],
        signature: '(element_id)'
    },
	layer_get_element_type: {
        description: '[Function] (New in GameMaker Studio 2)',
        parameters: [
            { label: 'element_id', documentation: '' }
        ],
        signature: '(element_id)'
    },
	layer_element_move: {
        description: '[Function] (New in GameMaker Studio 2)',
        signature: '(element_id, layer_id)'
    },
	layer_force_draw_depth: {
        description: '[Function] (New in GameMaker Studio 2)',
        signature: '(force, depth)'
    },
	layer_is_draw_depth_forced: {
        description: '[Function] (New in GameMaker Studio 2)'
    },
	layer_get_forced_depth: {
        description: '[Function] (New in GameMaker Studio 2)'
    },
	layer_background_get_id: {
        description: '[Function] (New in GameMaker Studio 2)',
        parameters: [
            { label: 'layer_id', documentation: '' }
        ],
        signature: '(layer_id)'
    },
	layer_background_exists: {
        description: '[Function] (New in GameMaker Studio 2)',
        signature: '(layer_id, background_element_id)'
    },
	layer_background_create: {
        description: '[Function] (New in GameMaker Studio 2)',
        signature: '(layer_id, sprite)'
    },
	layer_background_destroy: {
        description: '[Function] (New in GameMaker Studio 2)',
        parameters: [
            { label: 'background_element_id', documentation: '' }
        ],
        signature: '(background_element_id)'
    },
	layer_background_visible: {
        description: '[Function] (New in GameMaker Studio 2)',
        signature: '(background_element_id, visible)'
    },
	layer_background_change: {
        description: '[Function] (New in GameMaker Studio 2)',
        signature: '(background_element_id, sprite)'
    },
	layer_background_sprite: {
        description: '[Function] (New in GameMaker Studio 2)',
        signature: '(background_element_id, sprite)'
    },
	layer_background_htiled: {
        description: '[Function] (New in GameMaker Studio 2)',
        signature: '(background_element_id, tiled)'
    },
	layer_background_vtiled: {
        description: '[Function] (New in GameMaker Studio 2)',
        signature: '(background_element_id, tiled)'
    },
	layer_background_stretch: {
        description: '[Function] (New in GameMaker Studio 2)',
        signature: '(background_element_id, stretch)'
    },
	layer_background_yscale: {
        description: '[Function] (New in GameMaker Studio 2)',
        signature: '(background_element_id, yscale)'
    },
	layer_background_xscale: {
        description: '[Function] (New in GameMaker Studio 2)',
        signature: '(background_element_id, xscale)'
    },
	layer_background_blend: {
        description: '[Function] (New in GameMaker Studio 2)',
        signature: '(background_element_id, col)'
    },
	layer_background_alpha: {
        description: '[Function] (New in GameMaker Studio 2)',
        signature: '(background_element_id, alpha)'
    },
	layer_background_index: {
        description: '[Function] (New in GameMaker Studio 2)',
        signature: '(background_element_id, image_index)'
    },
	layer_background_speed: {
        description: '[Function] (New in GameMaker Studio 2)',
        signature: '(background_element_id, image_speed)'
    },
	layer_background_get_visible: {
        description: '[Function] (New in GameMaker Studio 2)',
        parameters: [
            { label: 'background_element_id', documentation: '' }
        ],
        signature: '(background_element_id)'
    },
	layer_background_get_sprite: {
        description: '[Function] (New in GameMaker Studio 2)',
        parameters: [
            { label: 'background_element_id', documentation: '' }
        ],
        signature: '(background_element_id)'
    },
	layer_background_get_htiled: {
        description: '[Function] (New in GameMaker Studio 2)',
        parameters: [
            { label: 'background_element_id', documentation: '' }
        ],
        signature: '(background_element_id)'
    },
	layer_background_get_vtiled: {
        description: '[Function] (New in GameMaker Studio 2)',
        parameters: [
            { label: 'background_element_id', documentation: '' }
        ],
        signature: '(background_element_id)'
    },
	layer_background_get_stretch: {
        description: '[Function] (New in GameMaker Studio 2)',
        parameters: [
            { label: 'background_element_id', documentation: '' }
        ],
        signature: '(background_element_id)'
    },
	layer_background_get_yscale: {
        description: '[Function] (New in GameMaker Studio 2)',
        parameters: [
            { label: 'background_element_id', documentation: '' }
        ],
        signature: '(background_element_id)'
    },
	layer_background_get_xscale: {
        description: '[Function] (New in GameMaker Studio 2)',
        parameters: [
            { label: 'background_element_id', documentation: '' }
        ],
        signature: '(background_element_id)'
    },
	layer_background_get_blend: {
        description: '[Function] (New in GameMaker Studio 2)',
        parameters: [
            { label: 'background_element_id', documentation: '' }
        ],
        signature: '(background_element_id)'
    },
	layer_background_get_alpha: {
        description: '[Function] (New in GameMaker Studio 2)',
        parameters: [
            { label: 'background_element_id', documentation: '' }
        ],
        signature: '(background_element_id)'
    },
	layer_background_get_index: {
        description: '[Function] (New in GameMaker Studio 2)',
        parameters: [
            { label: 'background_element_id', documentation: '' }
        ],
        signature: '(background_element_id)'
    },
	layer_background_get_speed: {
        description: '[Function] (New in GameMaker Studio 2)',
        parameters: [
            { label: 'background_element_id', documentation: '' }
        ],
        signature: '(background_element_id)'
    },
	layer_sprite_get_id: {
        description: '[Function] (New in GameMaker Studio 2)',
        signature: '(layer_id, sprite_element_name)'
    },
	layer_sprite_exists: {
        description: '[Function] (New in GameMaker Studio 2)',
        signature: '(layer_id, sprite_element_id)'
    },
	layer_sprite_create: {
        description: '[Function] (New in GameMaker Studio 2)',
        signature: '(layer_id, x, y, sprite)'
    },
	layer_sprite_destroy: {
        description: '[Function] (New in GameMaker Studio 2)',
        parameters: [
            { label: 'sprite_element_id', documentation: '' }
        ],
        signature: '(sprite_element_id)'
    },
	layer_sprite_change: {
        description: '[Function] (New in GameMaker Studio 2)',
        signature: '(sprite_element_id, sprite)'
    },
	layer_sprite_index: {
        description: '[Function] (New in GameMaker Studio 2)',
        signature: '(sprite_element_id, image_index)'
    },
	layer_sprite_speed: {
        description: '[Function] (New in GameMaker Studio 2)',
        signature: '(sprite_element_id, image_speed)'
    },
	layer_sprite_xscale: {
        description: '[Function] (New in GameMaker Studio 2)',
        signature: '(sprite_element_id, scale)'
    },
	layer_sprite_yscale: {
        description: '[Function] (New in GameMaker Studio 2)',
        signature: '(sprite_element_id, scale)'
    },
	layer_sprite_angle: {
        description: '[Function] (New in GameMaker Studio 2)',
        signature: '(sprite_element_id, angle)'
    },
	layer_sprite_blend: {
        description: '[Function] (New in GameMaker Studio 2)',
        signature: '(sprite_element_id, col)'
    },
	layer_sprite_alpha: {
        description: '[Function] (New in GameMaker Studio 2)',
        signature: '(sprite_element_id, alpha)'
    },
	layer_sprite_x: {
        description: '[Function] (New in GameMaker Studio 2)',
        signature: '(sprite_element_id, x)'
    },
	layer_sprite_y: {
        description: '[Function] (New in GameMaker Studio 2)',
        signature: '(sprite_element_id, y)'
    },
	layer_sprite_get_sprite: {
        description: '[Function] (New in GameMaker Studio 2)',
        parameters: [
            { label: 'sprite_element_id', documentation: '' }
        ],
        signature: '(sprite_element_id)'
    },
	layer_sprite_get_index: {
        description: '[Function] (New in GameMaker Studio 2)',
        parameters: [
            { label: 'sprite_element_id', documentation: '' }
        ],
        signature: '(sprite_element_id)'
    },
	layer_sprite_get_speed: {
        description: '[Function] (New in GameMaker Studio 2)',
        parameters: [
            { label: 'sprite_element_id', documentation: '' }
        ],
        signature: '(sprite_element_id)'
    },
	layer_sprite_get_xscale: {
        description: '[Function] (New in GameMaker Studio 2)',
        parameters: [
            { label: 'sprite_element_id', documentation: '' }
        ],
        signature: '(sprite_element_id)'
    },
	layer_sprite_get_yscale: {
        description: '[Function] (New in GameMaker Studio 2)',
        parameters: [
            { label: 'sprite_element_id', documentation: '' }
        ],
        signature: '(sprite_element_id)'
    },
	layer_sprite_get_angle: {
        description: '[Function] (New in GameMaker Studio 2)',
        parameters: [
            { label: 'sprite_element_id', documentation: '' }
        ],
        signature: '(sprite_element_id)'
    },
	layer_sprite_get_blend: {
        description: '[Function] (New in GameMaker Studio 2)',
        parameters: [
            { label: 'sprite_element_id', documentation: '' }
        ],
        signature: '(sprite_element_id)'
    },
	layer_sprite_get_alpha: {
        description: '[Function] (New in GameMaker Studio 2)',
        parameters: [
            { label: 'sprite_element_id', documentation: '' }
        ],
        signature: '(sprite_element_id)'
    },
	layer_sprite_get_x: {
        description: '[Function] (New in GameMaker Studio 2)',
        parameters: [
            { label: 'sprite_element_id', documentation: '' }
        ],
        signature: '(sprite_element_id)'
    },
	layer_sprite_get_y: {
        description: '[Function] (New in GameMaker Studio 2)',
        parameters: [
            { label: 'sprite_element_id', documentation: '' }
        ],
        signature: '(sprite_element_id)'
    },
	layer_tilemap_get_id: {
        description: '[Function] (New in GameMaker Studio 2)',
        parameters: [
            { label: 'layer_id', documentation: '' }
        ],
        signature: '(layer_id)'
    },
	layer_tilemap_exists: {
        description: '[Function] (New in GameMaker Studio 2)',
        signature: '(layer_id, tilemap_element_id)'
    },
	layer_tilemap_create: {
        description: '[Function] (New in GameMaker Studio 2)',
        signature: '(layer_id, x, y, tileset, width, height)'
    },
	layer_tilemap_destroy: {
        description: '[Function] (New in GameMaker Studio 2)',
        parameters: [
            { label: 'tilemap_element_id', documentation: '' }
        ],
        signature: '(tilemap_element_id)'
    },
	tilemap_tileset: {
        description: '[Function] (New in GameMaker Studio 2)',
        signature: '(tilemap_element_id, tileset)'
    },
	tilemap_x: {
        description: '[Function] (New in GameMaker Studio 2)',
        signature: '(tilemap_element_id, x)'
    },
	tilemap_y: {
        description: '[Function] (New in GameMaker Studio 2)',
        signature: '(tilemap_element_id, y)'
    },
	tilemap_set: {
        description: '[Function] (New in GameMaker Studio 2)',
        signature: '(tilemap_element_id, tiledata, cell_x, cell_y)'
    },
	tilemap_set_at_pixel: {
        description: '[Function] (New in GameMaker Studio 2)',
        signature: '(tilemap_element_id, tiledata, x, y)'
    },
	tilemap_get_tileset: {
        description: '[Function] (New in GameMaker Studio 2)',
        parameters: [
            { label: 'tilemap_element_id', documentation: '' }
        ],
        signature: '(tilemap_element_id)'
    },
	tilemap_get_tile_width: {
        description: '[Function] (New in GameMaker Studio 2)',
        parameters: [
            { label: 'tilemap_element_id', documentation: '' }
        ],
        signature: '(tilemap_element_id)'
    },
	tilemap_get_tile_height: {
        description: '[Function] (New in GameMaker Studio 2)',
        parameters: [
            { label: 'tilemap_element_id', documentation: '' }
        ],
        signature: '(tilemap_element_id)'
    },
	tilemap_get_width: {
        description: '[Function] (New in GameMaker Studio 2)',
        parameters: [
            { label: 'tilemap_element_id', documentation: '' }
        ],
        signature: '(tilemap_element_id)'
    },
	tilemap_get_height: {
        description: '[Function] (New in GameMaker Studio 2)',
        parameters: [
            { label: 'tilemap_element_id', documentation: '' }
        ],
        signature: '(tilemap_element_id)'
    },
	tilemap_get_x: {
        description: '[Function] (New in GameMaker Studio 2)',
        parameters: [
            { label: 'tilemap_element_id', documentation: '' }
        ],
        signature: '(tilemap_element_id)'
    },
	tilemap_get_y: {
        description: '[Function] (New in GameMaker Studio 2)',
        parameters: [
            { label: 'tilemap_element_id', documentation: '' }
        ],
        signature: '(tilemap_element_id)'
    },
	tilemap_get: {
        description: '[Function] (New in GameMaker Studio 2)',
        signature: '(tilemap_element_id, cell_x, cell_y)'
    },
	tilemap_get_at_pixel: {
        description: '[Function] (New in GameMaker Studio 2)',
        signature: '(tilemap_element_id, x, y)'
    },
	tilemap_get_cell_x_at_pixel: {
        description: '[Function] (New in GameMaker Studio 2)',
        signature: '(tilemap_element_id, x, y)'
    },
	tilemap_get_cell_y_at_pixel: {
        description: '[Function] (New in GameMaker Studio 2)',
        signature: '(tilemap_element_id, x, y)'
    },
	tilemap_clear: {
        description: '[Function] (New in GameMaker Studio 2)',
        signature: '(tilemap_element_id, tiledata)'
    },
	draw_tilemap: {
        description: '[Function] (New in GameMaker Studio 2)',
        signature: '(tilemap_element_id, x, y)'
    },
	draw_tile: {
        description: '[Function] (New in GameMaker Studio 2)',
        signature: '(tileset, tiledata, frame, x, y)'
    },
	tilemap_set_global_mask: {
        description: '[Function] (New in GameMaker Studio 2)'
    },
	tilemap_get_global_mask: {
        description: '[Function] (New in GameMaker Studio 2)'
    },
	tilemap_set_mask: {
        description: '[Function] (New in GameMaker Studio 2)',
        signature: '(tilemap_element_id, mask)'
    },
	tilemap_get_mask: {
        description: '[Function] (New in GameMaker Studio 2)',
        parameters: [
            { label: 'tilemap_element_id', documentation: '' }
        ],
        signature: '(tilemap_element_id)'
    },
	tilemap_get_frame: {
        description: '[Function] (New in GameMaker Studio 2)',
        parameters: [
            { label: 'tilemap_element_id', documentation: '' }
        ],
        signature: '(tilemap_element_id)'
    },
	tile_set_empty: {
        description: '[Function] (New in GameMaker Studio 2)',
        parameters: [
            { label: 'tiledata', documentation: '' }
        ],
        signature: '(tiledata)'
    },
	tile_set_index: {
        description: '[Function] (New in GameMaker Studio 2)',
        signature: '(tiledata, tileindex)'
    },
	tile_set_flip: {
        description: '[Function] (New in GameMaker Studio 2)',
        signature: '(tiledata, flip)'
    },
	tile_set_mirror: {
        description: '[Function] (New in GameMaker Studio 2)',
        signature: '(tiledata, mirror)'
    },
	tile_set_rotate: {
        description: '[Function] (New in GameMaker Studio 2)',
        signature: '(tiledata, rotate)'
    },
	tile_get_empty: {
        description: '[Function] (New in GameMaker Studio 2)',
        parameters: [
            { label: 'tiledata', documentation: '' }
        ],
        signature: '(tiledata)'
    },
	tile_get_index: {
        description: '[Function] (New in GameMaker Studio 2)',
        parameters: [
            { label: 'tiledata', documentation: '' }
        ],
        signature: '(tiledata)'
    },
	tile_get_flip: {
        description: '[Function] (New in GameMaker Studio 2)',
        parameters: [
            { label: 'tiledata', documentation: '' }
        ],
        signature: '(tiledata)'
    },
	tile_get_mirror: {
        description: '[Function] (New in GameMaker Studio 2)',
        parameters: [
            { label: 'tiledata', documentation: '' }
        ],
        signature: '(tiledata)'
    },
	tile_get_rotate: {
        description: '[Function] (New in GameMaker Studio 2)',
        parameters: [
            { label: 'tiledata', documentation: '' }
        ],
        signature: '(tiledata)'
    },
	layer_tile_exists: {
        description: '[Function] (New in GameMaker Studio 2)',
        signature: '(layer_id, tile_element_id, ...)'
    },
	layer_tile_create: {
        description: '[Function] (New in GameMaker Studio 2)',
        signature: '(layer_id, x, y, tileset, left, top, width, height)'
    },
	layer_tile_destroy: {
        description: '[Function] (New in GameMaker Studio 2)',
        parameters: [
            { label: 'tile_element_id', documentation: '' }
        ],
        signature: '(tile_element_id)'
    },
	layer_tile_change: {
        description: '[Function] (New in GameMaker Studio 2)',
        signature: '(tile_element_id, sprite)'
    },
	layer_tile_xscale: {
        description: '[Function] (New in GameMaker Studio 2)',
        signature: '(tile_element_id, scale)'
    },
	layer_tile_yscale: {
        description: '[Function] (New in GameMaker Studio 2)',
        signature: '(tile_element_id, scale)'
    },
	layer_tile_blend: {
        description: '[Function] (New in GameMaker Studio 2)',
        signature: '(tile_element_id, col)'
    },
	layer_tile_alpha: {
        description: '[Function] (New in GameMaker Studio 2)',
        signature: '(tile_element_id, alpha)'
    },
	layer_tile_x: {
        description: '[Function] (New in GameMaker Studio 2)',
        signature: '(tile_element_id, x)'
    },
	layer_tile_y: {
        description: '[Function] (New in GameMaker Studio 2)',
        signature: '(tile_element_id, y)'
    },
	layer_tile_region: {
        description: '[Function] (New in GameMaker Studio 2)',
        signature: '(tile_element_id, left, top, width, height)'
    },
	layer_tile_visible: {
        description: '[Function] (New in GameMaker Studio 2)',
        signature: '(tile_element_id, visible)'
    },
	layer_tile_get_sprite: {
        description: '[Function] (New in GameMaker Studio 2)',
        parameters: [
            { label: 'tile_element_id', documentation: '' }
        ],
        signature: '(tile_element_id)'
    },
	layer_tile_get_xscale: {
        description: '[Function] (New in GameMaker Studio 2)',
        parameters: [
            { label: 'tile_element_id', documentation: '' }
        ],
        signature: '(tile_element_id)'
    },
	layer_tile_get_yscale: {
        description: '[Function] (New in GameMaker Studio 2)',
        parameters: [
            { label: 'tile_element_id', documentation: '' }
        ],
        signature: '(tile_element_id)'
    },
	layer_tile_get_blend: {
        description: '[Function] (New in GameMaker Studio 2)',
        parameters: [
            { label: 'tile_element_id', documentation: '' }
        ],
        signature: '(tile_element_id)'
    },
	layer_tile_get_alpha: {
        description: '[Function] (New in GameMaker Studio 2)',
        parameters: [
            { label: 'tile_element_id', documentation: '' }
        ],
        signature: '(tile_element_id)'
    },
	layer_tile_get_x: {
        description: '[Function] (New in GameMaker Studio 2)',
        parameters: [
            { label: 'tile_element_id', documentation: '' }
        ],
        signature: '(tile_element_id)'
    },
	layer_tile_get_y: {
        description: '[Function] (New in GameMaker Studio 2)',
        parameters: [
            { label: 'tile_element_id', documentation: '' }
        ],
        signature: '(tile_element_id)'
    },
	layer_tile_get_region: {
        description: '[Function] (New in GameMaker Studio 2)',
        parameters: [
            { label: 'tile_element_id', documentation: '' }
        ],
        signature: '(tile_element_id)'
    },
	layer_tile_get_visible: {
        description: '[Function] (New in GameMaker Studio 2)',
        parameters: [
            { label: 'tile_element_id', documentation: '' }
        ],
        signature: '(tile_element_id)'
    },
	layer_instance_get_instance: {
        description: '[Function] (New in GameMaker Studio 2)',
        parameters: [
            { label: 'instance_element_id', documentation: '' }
        ],
        signature: '(instance_element_id)'
    },
	instance_activate_layer: {
        description: '[Function] (New in GameMaker Studio 2)',
        parameters: [
            { label: 'layer_id', documentation: '' }
        ],
        signature: '(layer_id)'
    },
	instance_deactivate_layer: {
        description: '[Function] (New in GameMaker Studio 2)',
        parameters: [
            { label: 'layer_id', documentation: '' }
        ],
        signature: '(layer_id)'
    },
	camera_create: {
        description: '[Function] (New in GameMaker Studio 2)'
    },
	camera_create_view: {
        description: '[Function] (New in GameMaker Studio 2)',
        signature: '(room_x, room_y, width, height, angle, object, x_speed, y_speed, x_border, y_border)'
    },
	camera_destroy: {
        description: '[Function] (New in GameMaker Studio 2)',
        parameters: [
            { label: 'camera', documentation: '' }
        ],
        signature: '(camera)'
    },
	camera_apply: {
        description: '[Function] (New in GameMaker Studio 2)',
        parameters: [
            { label: 'camera', documentation: '' }
        ],
        signature: '(camera)'
    },
	camera_get_active: {
        description: '[Function] (New in GameMaker Studio 2)'
    },
	camera_get_default: {
        description: '[Function] (New in GameMaker Studio 2)'
    },
	camera_set_default: {
        description: '[Function] (New in GameMaker Studio 2)',
        parameters: [
            { label: 'camera', documentation: '' }
        ],
        signature: '(camera)'
    },
	camera_set_view_mat: {
        description: '[Function] (New in GameMaker Studio 2)',
        signature: '(camera, matrix)'
    },
	camera_set_proj_mat: {
        description: '[Function] (New in GameMaker Studio 2)',
        signature: '(camera, matrix)'
    },
	camera_set_update_script: {
        description: '[Function] (New in GameMaker Studio 2)',
        signature: '(camera, script)'
    },
	camera_set_begin_script: {
        description: '[Function] (New in GameMaker Studio 2)',
        signature: '(camera, script)'
    },
	camera_set_end_script: {
        description: '[Function] (New in GameMaker Studio 2)',
        signature: '(camera, script)'
    },
	camera_set_view_pos: {
        description: '[Function] (New in GameMaker Studio 2)',
        signature: '(camera, x, y)'
    },
	camera_set_view_size: {
        description: '[Function] (New in GameMaker Studio 2)',
        signature: '(camera, width, height)'
    },
	camera_set_view_speed: {
        description: '[Function] (New in GameMaker Studio 2)',
        signature: '(camera, x_speed, y_speed)'
    },
	camera_set_view_border: {
        description: '[Function] (New in GameMaker Studio 2)',
        signature: '(camera, x_border, y_border)'
    },
	camera_set_view_angle: {
        description: '[Function] (New in GameMaker Studio 2)',
        signature: '(camera, angle)'
    },
	camera_set_view_target: {
        description: '[Function] (New in GameMaker Studio 2)',
        signature: '(camera, object)'
    },
	camera_get_view_mat: {
        description: '[Function] (New in GameMaker Studio 2)',
        parameters: [
            { label: 'camera', documentation: '' }
        ],
        signature: '(camera)'
    },
	camera_get_proj_mat: {
        description: '[Function] (New in GameMaker Studio 2)',
        parameters: [
            { label: 'camera', documentation: '' }
        ],
        signature: '(camera)'
    },
	camera_get_update_script: {
        description: '[Function] (New in GameMaker Studio 2)',
        parameters: [
            { label: 'camera', documentation: '' }
        ],
        signature: '(camera)'
    },
	camera_get_begin_script: {
        description: '[Function] (New in GameMaker Studio 2)',
        parameters: [
            { label: 'camera', documentation: '' }
        ],
        signature: '(camera)'
    },
	camera_get_end_script: {
        description: '[Function] (New in GameMaker Studio 2)',
        parameters: [
            { label: 'camera', documentation: '' }
        ],
        signature: '(camera)'
    },
	camera_get_view_x: {
        description: '[Function] (New in GameMaker Studio 2)',
        parameters: [
            { label: 'camera', documentation: '' }
        ],
        signature: '(camera)'
    },
	camera_get_view_y: {
        description: '[Function] (New in GameMaker Studio 2)',
        parameters: [
            { label: 'camera', documentation: '' }
        ],
        signature: '(camera)'
    },
	camera_get_view_width: {
        description: '[Function] (New in GameMaker Studio 2)',
        parameters: [
            { label: 'camera', documentation: '' }
        ],
        signature: '(camera)'
    },
	camera_get_view_height: {
        description: '[Function] (New in GameMaker Studio 2)',
        parameters: [
            { label: 'camera', documentation: '' }
        ],
        signature: '(camera)'
    },
	camera_get_view_speed_x: {
        description: '[Function] (New in GameMaker Studio 2)',
        parameters: [
            { label: 'camera', documentation: '' }
        ],
        signature: '(camera)'
    },
	camera_get_view_speed_y: {
        description: '[Function] (New in GameMaker Studio 2)',
        parameters: [
            { label: 'camera', documentation: '' }
        ],
        signature: '(camera)'
    },
	camera_get_view_border_x: {
        description: '[Function] (New in GameMaker Studio 2)',
        parameters: [
            { label: 'camera', documentation: '' }
        ],
        signature: '(camera)'
    },
	camera_get_view_border_y: {
        description: '[Function] (New in GameMaker Studio 2)',
        parameters: [
            { label: 'camera', documentation: '' }
        ],
        signature: '(camera)'
    },
	camera_get_view_angle: {
        description: '[Function] (New in GameMaker Studio 2)',
        parameters: [
            { label: 'camera', documentation: '' }
        ],
        signature: '(camera)'
    },
	camera_get_view_target: {
        description: '[Function] (New in GameMaker Studio 2)',
        parameters: [
            { label: 'camera', documentation: '' }
        ],
        signature: '(camera)'
    },
	view_get_camera: {
        description: '[Function] (New in GameMaker Studio 2)',
        parameters: [
            { label: 'view', documentation: '' }
        ],
        signature: '(view)'
    },
	view_get_visible: {
        description: '[Function] (New in GameMaker Studio 2)',
        parameters: [
            { label: 'view', documentation: '' }
        ],
        signature: '(view)'
    },
	view_get_xport: {
        description: '[Function] (New in GameMaker Studio 2)',
        parameters: [
            { label: 'view', documentation: '' }
        ],
        signature: '(view)'
    },
	view_get_yport: {
        description: '[Function] (New in GameMaker Studio 2)',
        parameters: [
            { label: 'view', documentation: '' }
        ],
        signature: '(view)'
    },
	view_get_wport: {
        description: '[Function] (New in GameMaker Studio 2)',
        parameters: [
            { label: 'view', documentation: '' }
        ],
        signature: '(view)'
    },
	view_get_hport: {
        description: '[Function] (New in GameMaker Studio 2)',
        parameters: [
            { label: 'view', documentation: '' }
        ],
        signature: '(view)'
    },
	view_get_surface_id: {
        description: '[Function] (New in GameMaker Studio 2)',
        parameters: [
            { label: 'view', documentation: '' }
        ],
        signature: '(view)'
    },
	view_set_camera: {
        description: '[Function] (New in GameMaker Studio 2)',
        signature: '(view, camera)'
    },
	view_set_visible: {
        description: '[Function] (New in GameMaker Studio 2)',
        signature: '(view, visible)'
    },
	view_set_xport: {
        description: '[Function] (New in GameMaker Studio 2)',
        signature: '(view, xport)'
    },
	view_set_yport: {
        description: '[Function] (New in GameMaker Studio 2)',
        signature: '(view, yport)'
    },
	view_set_wport: {
        description: '[Function] (New in GameMaker Studio 2)',
        signature: '(view, wport)'
    },
	view_set_hport: {
        description: '[Function] (New in GameMaker Studio 2)',
        signature: '(view, hport)'
    },
	view_set_surface_id: {
        description: '[Function] (New in GameMaker Studio 2)',
        signature: '(view, surface_id)'
    },
	gesture_drag_time: {
        description: '[Function] (New in GameMaker Studio 2)',
        parameters: [
            { label: 'time', documentation: '' }
        ],
        signature: '(time)'
    },
	gesture_drag_distance: {
        description: '[Function] (New in GameMaker Studio 2)',
        parameters: [
            { label: 'distance', documentation: '' }
        ],
        signature: '(distance)'
    },
	gesture_flick_speed: {
        description: '[Function] (New in GameMaker Studio 2)',
        parameters: [
            { label: 'speed', documentation: '' }
        ],
        signature: '(speed)'
    },
	gesture_double_tap_time: {
        description: '[Function] (New in GameMaker Studio 2)',
        parameters: [
            { label: 'time', documentation: '' }
        ],
        signature: '(time)'
    },
	gesture_double_tap_distance: {
        description: '[Function] (New in GameMaker Studio 2)',
        parameters: [
            { label: 'distance', documentation: '' }
        ],
        signature: '(distance)'
    },
	gesture_pinch_distance: {
        description: '[Function] (New in GameMaker Studio 2)',
        parameters: [
            { label: 'distance', documentation: '' }
        ],
        signature: '(distance)'
    },
	gesture_pinch_angle_towards: {
        description: '[Function] (New in GameMaker Studio 2)',
        parameters: [
            { label: 'angle', documentation: '' }
        ],
        signature: '(angle)'
    },
	gesture_pinch_angle_away: {
        description: '[Function] (New in GameMaker Studio 2)',
        parameters: [
            { label: 'angle', documentation: '' }
        ],
        signature: '(angle)'
    },
	gesture_rotate_time: {
        description: '[Function] (New in GameMaker Studio 2)',
        parameters: [
            { label: 'time', documentation: '' }
        ],
        signature: '(time)'
    },
	gesture_rotate_angle: {
        description: '[Function] (New in GameMaker Studio 2)',
        parameters: [
            { label: 'angle', documentation: '' }
        ],
        signature: '(angle)'
    },
	gesture_tap_count: {
        description: '[Function] (New in GameMaker Studio 2)',
        parameters: [
            { label: 'enable', documentation: '' }
        ],
        signature: '(enable)'
    },
	gesture_get_drag_time: {
        description: '[Function] (New in GameMaker Studio 2)'
    },
	gesture_get_drag_distance: {
        description: '[Function] (New in GameMaker Studio 2)'
    },
	gesture_get_flick_speed: {
        description: '[Function] (New in GameMaker Studio 2)'
    },
	gesture_get_double_tap_time: {
        description: '[Function] (New in GameMaker Studio 2)'
    },
	gesture_get_double_tap_distance: {
        description: '[Function] (New in GameMaker Studio 2)'
    },
	gesture_get_pinch_distance: {
        description: '[Function] (New in GameMaker Studio 2)'
    },
	gesture_get_pinch_angle_towards: {
        description: '[Function] (New in GameMaker Studio 2)'
    },
	gesture_get_pinch_angle_away: {
        description: '[Function] (New in GameMaker Studio 2)'
    },
	gesture_get_rotate_time: {
        description: '[Function] (New in GameMaker Studio 2)'
    },
	gesture_get_rotate_angle: {
        description: '[Function] (New in GameMaker Studio 2)'
    },
	gesture_get_tap_count: {
		description: '[Function] (New in GameMaker Studio 2)'
	}
};

exports.globalvariables = {
    argument: {description: '[Variable]'},
	argument0: {description: '[Variable]'},
	argument1: {description: '[Variable]'},
	argument10: {description: '[Variable]'},
	argument11: {description: '[Variable]'},
	argument12: {description: '[Variable]'},
	argument13: {description: '[Variable]'},
	argument14: {description: '[Variable]'},
	argument15: {description: '[Variable]'},
	argument2: {description: '[Variable]'},
	argument3: {description: '[Variable]'},
	argument4: {description: '[Variable]'},
	argument5: {description: '[Variable]'},
	argument6: {description: '[Variable]'},
	argument7: {description: '[Variable]'},
	argument8: {description: '[Variable]'},
	argument9: {description: '[Variable]'},
	argument_count: {description: '[Variable]'},
	argument_relative: {description: '[Variable]'},
	async_load: {description: '[Variable]'},
	browser_height: {description: '[Variable]'},
	browser_width: {description: '[Variable]'},
	caption_health: {description: '[Variable]'},
	caption_lives: {description: '[Variable]'},
	caption_score: {description: '[Variable]'},
	current_day: {description: '[Variable]'},
	current_hour: {description: '[Variable]'},
	current_minute: {description: '[Variable]'},
	current_month: {description: '[Variable]'},
	current_second: {description: '[Variable]'},
	current_time: {description: '[Variable]'},
	current_weekday: {description: '[Variable]'},
	current_year: {description: '[Variable]'},
	cursor_sprite: {description: '[Variable]'},
	debug_mode: {description: '[Variable]'},
	delta_time: {description: '[Variable]'},
	display_aa: {description: '[Variable]'},
	error_last: {description: '[Variable]'},
	error_occurred: {description: '[Variable]'},
	event_action: {description: '[Variable]'},
	event_number: {description: '[Variable]'},
	event_object: {description: '[Variable]'},
	event_type: {description: '[Variable]'},
	fps: {description: '[Variable]'},
	fps_real: {description: '[Variable]'},
	gamemaker_pro: {description: '[Variable]'},
	gamemaker_registered: {description: '[Variable]'},
	gamemaker_version: {description: '[Variable]'},
	game_id: {description: '[Variable]'},
	health: {description: '[Variable]'},
	instance_count: {description: '[Variable]'},
	instance_id: {description: '[Variable]'},
	keyboard_key: {description: '[Variable]'},
	keyboard_lastchar: {description: '[Variable]'},
	keyboard_lastkey: {description: '[Variable]'},
	keyboard_string: {description: '[Variable]'},
	lives: {description: '[Variable]'},
	mouse_button: {description: '[Variable]'},
	mouse_lastbutton: {description: '[Variable]'},
	mouse_x: {description: '[Variable]'},
	mouse_y: {description: '[Variable]'},
	os_browser: {description: '[Variable]'},
	os_device: {description: '[Variable]'},
	os_type: {description: '[Variable]'},
	os_version: {description: '[Variable]'},
	program_directory: {description: '[Variable]'},
	room: {description: '[Variable]'},
	room_caption: {description: '[Variable]'},
	room_first: {description: '[Variable]'},
	room_height: {description: '[Variable]'},
	room_last: {description: '[Variable]'},
	room_persistent: {description: '[Variable]'},
	room_speed: {description: '[Variable]'},
	room_width: {description: '[Variable]'},
	score: {description: '[Variable]'},
	show_health: {description: '[Variable]'},
	show_lives: {description: '[Variable]'},
	show_score: {description: '[Variable]'},
	temp_directory: {description: '[Variable]'},
	transition_color: {description: '[Variable]'},
	transition_kind: {description: '[Variable]'},
	transition_steps: {description: '[Variable]'},
	webgl_enabled: {description: '[Variable]'},
	working_directory: {description: '[Variable]'},
	alarm: {description: '[Variable]'},
	bbox_bottom: {description: '[Variable]'},
	bbox_left: {description: '[Variable]'},
	bbox_right: {description: '[Variable]'},
	bbox_top: {description: '[Variable]'},
	depth: {description: '[Variable]'},
	direction: {description: '[Variable]'},
	friction: {description: '[Variable]'},
	gravity: {description: '[Variable]'},
	gravity_direction: {description: '[Variable]'},
	hspeed: {description: '[Variable]'},
	id: {description: '[Variable]'},
	image_alpha: {description: '[Variable]'},
	image_angle: {description: '[Variable]'},
	image_blend: {description: '[Variable]'},
	image_index: {description: '[Variable]'},
	image_number: {description: '[Variable]'},
	image_single: {description: '[Variable]'},
	image_speed: {description: '[Variable]'},
	image_xscale: {description: '[Variable]'},
	image_yscale: {description: '[Variable]'},
	mask_index: {description: '[Variable]'},
	object_index: {description: '[Variable]'},
	path_endaction: {description: '[Variable]'},
	path_index: {description: '[Variable]'},
	path_orientation: {description: '[Variable]'},
	path_position: {description: '[Variable]'},
	path_positionprevious: {description: '[Variable]'},
	path_scale: {description: '[Variable]'},
	path_speed: {description: '[Variable]'},
	persistent: {description: '[Variable]'},
	phy_active: {description: '[Variable]'},
	phy_angular_damping: {description: '[Variable]'},
	phy_angular_velocity: {description: '[Variable]'},
	phy_bullet: {description: '[Variable]'},
	phy_collision_points: {description: '[Variable]'},
	phy_collision_x: {description: '[Variable]'},
	phy_collision_y: {description: '[Variable]'},
	phy_col_normal_x: {description: '[Variable]'},
	phy_col_normal_y: {description: '[Variable]'},
	phy_com_x: {description: '[Variable]'},
	phy_com_y: {description: '[Variable]'},
	phy_dynamic: {description: '[Variable]'},
	phy_fixed_rotation: {description: '[Variable]'},
	phy_inertia: {description: '[Variable]'},
	phy_kinematic: {description: '[Variable]'},
	phy_linear_damping: {description: '[Variable]'},
	phy_linear_velocity_x: {description: '[Variable]'},
	phy_linear_velocity_y: {description: '[Variable]'},
	phy_mass: {description: '[Variable]'},
	phy_position_x: {description: '[Variable]'},
	phy_position_xprevious: {description: '[Variable]'},
	phy_position_y: {description: '[Variable]'},
	phy_position_yprevious: {description: '[Variable]'},
	phy_rotation: {description: '[Variable]'},
	phy_sleeping: {description: '[Variable]'},
	phy_speed: {description: '[Variable]'},
	phy_speed_x: {description: '[Variable]'},
	phy_speed_y: {description: '[Variable]'},
	solid: {description: '[Variable]'},
	speed: {description: '[Variable]'},
	sprite_height: {description: '[Variable]'},
	sprite_index: {description: '[Variable]'},
	sprite_width: {description: '[Variable]'},
	sprite_xoffset: {description: '[Variable]'},
	sprite_yoffset: {description: '[Variable]'},
	timeline_index: {description: '[Variable]'},
	timeline_loop: {description: '[Variable]'},
	timeline_position: {description: '[Variable]'},
	timeline_running: {description: '[Variable]'},
	timeline_speed: {description: '[Variable]'},
	visible: {description: '[Variable]'},
	vspeed: {description: '[Variable]'},
	x: {description: '[Variable]'},
	xprevious: {description: '[Variable]'},
	xstart: {description: '[Variable]'},
	y: {description: '[Variable]'},
	yprevious: {description: '[Variable]'},
	ystart: {description: '[Variable]'},
	view_enabled: {description: '[Variable]'},
	view_current: {description: '[Variable]'},
	background_alpha: {description: '[Variable]'},
	background_blend: {description: '[Variable]'},
	background_color: {description: '[Variable]'},
	background_foreground: {description: '[Variable]'},
	background_height: {description: '[Variable]'},
	background_hspeed: {description: '[Variable]'},
	background_htiled: {description: '[Variable]'},
	background_index: {description: '[Variable]'},
	background_showcolor: {description: '[Variable]'},
	background_visible: {description: '[Variable]'},
	background_vspeed: {description: '[Variable]'},
	background_vtiled: {description: '[Variable]'},
	background_width: {description: '[Variable]'},
	background_x: {description: '[Variable]'},
	background_xscale: {description: '[Variable]'},
	background_y: {description: '[Variable]'},
	background_yscale: {description: '[Variable]'},
    secure_mode: {description: '[Variable]'},
    view_angle: {description: '[Variable]'},
	view_hborder: {description: '[Variable]'},
	view_hport: {description: '[Variable]'},
	view_hspeed: {description: '[Variable]'},
	view_hview: {description: '[Variable]'},
	view_object: {description: '[Variable]'},
	view_vborder: {description: '[Variable]'},
	view_visible: {description: '[Variable]'},
	view_vspeed: {description: '[Variable]'},
	view_wport: {description: '[Variable]'},
	view_wview: {description: '[Variable]'},
	view_xport: {description: '[Variable]'},
	view_xview: {description: '[Variable]'},
	view_yport: {description: '[Variable]'},
	view_yview: {description: '[Variable]'},
	background_visible: {description: '[Variable] [0..7]'},
	background_foreground: {description: '[Variable] [0..7]'},
	background_index: {description: '[Variable] [0..7]'},
	background_x: {description: '[Variable] [0..7]'},
	background_y: {description: '[Variable] [0..7]'},
	background_width: {description: '[Variable] [0..7]'},
	background_height: {description: '[Variable] [0..7]'},
	background_htiled: {description: '[Variable] [0..7]'},
	background_vtiled: {description: '[Variable] [0..7]'},
	background_xscale: {description: '[Variable] [0..7]'},
	background_yscale: {description: '[Variable] [0..7]'},
	background_hspeed: {description: '[Variable] [0..7]'},
	background_vspeed: {description: '[Variable] [0..7]'},
	background_blend: {description: '[Variable] [0..7]'},
	background_alpha: {description: '[Variable] [0..7]'},
    view_visible: {description: '[Variable] [0..7]'},
	view_xview: {description: '[Variable] [0..7]'},
	view_yview: {description: '[Variable] [0..7]'},
	view_wview: {description: '[Variable] [0..7]'},
	view_hview: {description: '[Variable] [0..7]'},
	view_xport: {description: '[Variable] [0..7]'},
	view_yport: {description: '[Variable] [0..7]'},
	view_wport: {description: '[Variable] [0..7]'},
	view_hport: {description: '[Variable] [0..7]'},
	view_angle: {description: '[Variable] [0..7]'},
	view_hborder: {description: '[Variable] [0..7]'},
	view_vborder: {description: '[Variable] [0..7]'},
	view_hspeed: {description: '[Variable] [0..7]'},
	view_vspeed: {description: '[Variable] [0..7]'},
	view_object: {description: '[Variable] [0..7]'},

	//New in GameMaker Studio 2
	layer: {description: '[Variable] (New in GameMaker Studio 2)'},
	view_camera: {description: '[Variable] [0..7] (New in GameMaker Studio 2)'},
	event_data: {description: '[Variable] (New in GameMaker Studio 2)'}
};

exports.constants = {
    dll_cdel: {description: '[Constant]'},
	achievement_achievement_info: {description: '[Constant]'},
	achievement_challenge_completed: {description: '[Constant]'},
	achievement_challenge_completed_by_remote: {description: '[Constant]'},
	achievement_challenge_launched: {description: '[Constant]'},
	achievement_challenge_list_received: {description: '[Constant]'},
	achievement_challenge_received: {description: '[Constant]'},
	achievement_filter_all_players: {description: '[Constant]'},
	achievement_filter_friends_only: {description: '[Constant]'},
	achievement_friends_info: {description: '[Constant]'},
	achievement_leaderboard_info: {description: '[Constant]'},
	achievement_our_info: {description: '[Constant]'},
	achievement_pic_loaded: {description: '[Constant]'},
	achievement_player_info: {description: '[Constant]'},
	achievement_purchase_info: {description: '[Constant]'},
	achievement_show_achievement: {description: '[Constant]'},
	achievement_show_bank: {description: '[Constant]'},
	achievement_show_friend_picker: {description: '[Constant]'},
	achievement_show_leaderboard: {description: '[Constant]'},
	achievement_show_profile: {description: '[Constant]'},
	achievement_show_purchase_prompt: {description: '[Constant]'},
	achievement_show_ui: {description: '[Constant]'},
	achievement_type_achievement_challenge: {description: '[Constant]'},
	achievement_type_score_challenge: {description: '[Constant]'},
	all: {description: '[Constant]'},
	ANSI_CHARSET: {description: '[Constant]'},
	ARABIC_CHARSET: {description: '[Constant]'},
	asset_background: {description: '[Constant]'},
	asset_font: {description: '[Constant]'},
	asset_object: {description: '[Constant]'},
	asset_path: {description: '[Constant]'},
	asset_room: {description: '[Constant]'},
	asset_script: {description: '[Constant]'},
	asset_sound: {description: '[Constant]'},
	asset_sprite: {description: '[Constant]'},
	asset_timeline: {description: '[Constant]'},
	asset_unknown: {description: '[Constant]'},
	audio_falloff_exponent_distance: {description: '[Constant]'},
	audio_falloff_exponent_distance_clamped: {description: '[Constant]'},
	audio_falloff_inverse_distance: {description: '[Constant]'},
	audio_falloff_inverse_distance_clamped: {description: '[Constant]'},
	audio_falloff_linear_distance: {description: '[Constant]'},
	audio_falloff_linear_distance_clamped: {description: '[Constant]'},
	audio_falloff_none: {description: '[Constant]'},
	audio_new_system: {description: '[Constant]'},
	audio_old_system: {description: '[Constant]'},
	BALTIC_CHARSET: {description: '[Constant]'},
	bm_add: {description: '[Constant]'},
	bm_dest_alpha: {description: '[Constant]'},
	bm_dest_color: {description: '[Constant]'},
	bm_inv_dest_alpha: {description: '[Constant]'},
	bm_inv_dest_color: {description: '[Constant]'},
	bm_inv_src_alpha: {description: '[Constant]'},
	bm_inv_src_color: {description: '[Constant]'},
	bm_max: {description: '[Constant]'},
	bm_normal: {description: '[Constant]'},
	bm_one: {description: '[Constant]'},
	bm_src_alpha: {description: '[Constant]'},
	bm_src_alpha_sat: {description: '[Constant]'},
	bm_src_color: {description: '[Constant]'},
	bm_subtract: {description: '[Constant]'},
	bm_zero: {description: '[Constant]'},
	browser_chrome: {description: '[Constant]'},
	browser_firefox: {description: '[Constant]'},
	browser_ie: {description: '[Constant]'},
	browser_ie_mobile: {description: '[Constant]'},
	browser_not_a_browser: {description: '[Constant]'},
	browser_opera: {description: '[Constant]'},
	browser_safari: {description: '[Constant]'},
	browser_safari_mobile: {description: '[Constant]'},
	browser_tizen: {description: '[Constant]'},
	browser_unknown: {description: '[Constant]'},
	browser_windows_store: {description: '[Constant]'},
	buffer_bool: {description: '[Constant]'},
	buffer_f16: {description: '[Constant]'},
	buffer_f32: {description: '[Constant]'},
	buffer_f64: {description: '[Constant]'},
	buffer_fast: {description: '[Constant]'},
	buffer_fixed: {description: '[Constant]'},
	buffer_generalerror: {description: '[Constant]'},
	buffer_grow: {description: '[Constant]'},
	buffer_invalidtype: {description: '[Constant]'},
	buffer_outofbounds: {description: '[Constant]'},
	buffer_outofspace: {description: '[Constant]'},
	buffer_s16: {description: '[Constant]'},
	buffer_s32: {description: '[Constant]'},
	buffer_s8: {description: '[Constant]'},
	buffer_seek_end: {description: '[Constant]'},
	buffer_seek_relative: {description: '[Constant]'},
	buffer_seek_start: {description: '[Constant]'},
	buffer_string: {description: '[Constant]'},
	buffer_u16: {description: '[Constant]'},
	buffer_u32: {description: '[Constant]'},
	buffer_u8: {description: '[Constant]'},
	buffer_vbuffer: {description: '[Constant]'},
	buffer_wrap: {description: '[Constant]'},
	CHINESEBIG5_CHARSET: {description: '[Constant]'},
	cr_appstart: {description: '[Constant]'},
	cr_arrow: {description: '[Constant]'},
	cr_beam: {description: '[Constant]'},
	cr_cross: {description: '[Constant]'},
	cr_default: {description: '[Constant]'},
	cr_drag: {description: '[Constant]'},
	cr_handpoint: {description: '[Constant]'},
	cr_help: {description: '[Constant]'},
	cr_hourglass: {description: '[Constant]'},
	cr_hsplit: {description: '[Constant]'},
	cr_multidrag: {description: '[Constant]'},
	cr_no: {description: '[Constant]'},
	cr_nodrop: {description: '[Constant]'},
	cr_none: {description: '[Constant]'},
	cr_size_all: {description: '[Constant]'},
	cr_size_nesw: {description: '[Constant]'},
	cr_size_ns: {description: '[Constant]'},
	cr_size_nwse: {description: '[Constant]'},
	cr_size_we: {description: '[Constant]'},
	cr_sqlwait: {description: '[Constant]'},
	cr_uparrow: {description: '[Constant]'},
	cr_vsplit: {description: '[Constant]'},
	c_aqua: {description: '[Constant]'},
	c_black: {description: '[Constant]'},
	c_blue: {description: '[Constant]'},
	c_dkgray: {description: '[Constant]'},
	c_fuchsia: {description: '[Constant]'},
	c_gray: {description: '[Constant]'},
	c_green: {description: '[Constant]'},
	c_lime: {description: '[Constant]'},
	c_ltgray: {description: '[Constant]'},
	c_maroon: {description: '[Constant]'},
	c_navy: {description: '[Constant]'},
	c_olive: {description: '[Constant]'},
	c_orange: {description: '[Constant]'},
	c_purple: {description: '[Constant]'},
	c_red: {description: '[Constant]'},
	c_silver: {description: '[Constant]'},
	c_teal: {description: '[Constant]'},
	c_white: {description: '[Constant]'},
	c_yellow: {description: '[Constant]'},
	DEFAULT_CHARSET: {description: '[Constant]'},
	device_emulator: {description: '[Constant]'},
	device_ios_ipad: {description: '[Constant]'},
	device_ios_ipad_retina: {description: '[Constant]'},
	device_ios_iphone: {description: '[Constant]'},
	device_ios_iphone5: {description: '[Constant]'},
	device_ios_iphone_retina: {description: '[Constant]'},
	device_ios_unknown: {description: '[Constant]'},
	device_tablet: {description: '[Constant]'},
	display_landscape: {description: '[Constant]'},
	display_landscape_flipped: {description: '[Constant]'},
	display_portrait: {description: '[Constant]'},
	display_portrait_flipped: {description: '[Constant]'},
	dll_cdecl: {description: '[Constant]'},
	dll_stdcall: {description: '[Constant]'},
	ds_type_grid: {description: '[Constant]'},
	ds_type_list: {description: '[Constant]'},
	ds_type_map: {description: '[Constant]'},
	ds_type_priority: {description: '[Constant]'},
	ds_type_queue: {description: '[Constant]'},
	ds_type_stack: {description: '[Constant]'},
	EASTEUROPE_CHARSET: {description: '[Constant]'},
	ef_cloud: {description: '[Constant]'},
	ef_ellipse: {description: '[Constant]'},
	ef_explosion: {description: '[Constant]'},
	ef_firework: {description: '[Constant]'},
	ef_flare: {description: '[Constant]'},
	ef_rain: {description: '[Constant]'},
	ef_ring: {description: '[Constant]'},
	ef_smoke: {description: '[Constant]'},
	ef_smokeup: {description: '[Constant]'},
	ef_snow: {description: '[Constant]'},
	ef_spark: {description: '[Constant]'},
	ef_star: {description: '[Constant]'},
	ev_alarm: {description: '[Constant]'},
	ev_animation_end: {description: '[Constant]'},
	ev_boundary: {description: '[Constant]'},
	ev_close_button: {description: '[Constant]'},
	ev_collision: {description: '[Constant]'},
	ev_create: {description: '[Constant]'},
	ev_destroy: {description: '[Constant]'},
	ev_draw: {description: '[Constant]'},
	ev_end_of_path: {description: '[Constant]'},
	ev_game_end: {description: '[Constant]'},
	ev_game_start: {description: '[Constant]'},
	ev_global_left_button: {description: '[Constant]'},
	ev_global_left_press: {description: '[Constant]'},
	ev_global_left_release: {description: '[Constant]'},
	ev_global_middle_button: {description: '[Constant]'},
	ev_global_middle_press: {description: '[Constant]'},
	ev_global_middle_release: {description: '[Constant]'},
	ev_global_press: {description: '[Constant]'},
	ev_global_release: {description: '[Constant]'},
	ev_global_right_button: {description: '[Constant]'},
	ev_global_right_press: {description: '[Constant]'},
	ev_global_right_release: {description: '[Constant]'},
	ev_gui: {description: '[Constant]'},
	ev_joystick1_button1: {description: '[Constant]'},
	ev_joystick1_button2: {description: '[Constant]'},
	ev_joystick1_button3: {description: '[Constant]'},
	ev_joystick1_button4: {description: '[Constant]'},
	ev_joystick1_button5: {description: '[Constant]'},
	ev_joystick1_button6: {description: '[Constant]'},
	ev_joystick1_button7: {description: '[Constant]'},
	ev_joystick1_button8: {description: '[Constant]'},
	ev_joystick1_down: {description: '[Constant]'},
	ev_joystick1_left: {description: '[Constant]'},
	ev_joystick1_right: {description: '[Constant]'},
	ev_joystick1_up: {description: '[Constant]'},
	ev_joystick2_button1: {description: '[Constant]'},
	ev_joystick2_button2: {description: '[Constant]'},
	ev_joystick2_button3: {description: '[Constant]'},
	ev_joystick2_button4: {description: '[Constant]'},
	ev_joystick2_button5: {description: '[Constant]'},
	ev_joystick2_button6: {description: '[Constant]'},
	ev_joystick2_button7: {description: '[Constant]'},
	ev_joystick2_button8: {description: '[Constant]'},
	ev_joystick2_down: {description: '[Constant]'},
	ev_joystick2_left: {description: '[Constant]'},
	ev_joystick2_right: {description: '[Constant]'},
	ev_joystick2_up: {description: '[Constant]'},
	ev_keyboard: {description: '[Constant]'},
	ev_keypress: {description: '[Constant]'},
	ev_keyrelease: {description: '[Constant]'},
	ev_left_button: {description: '[Constant]'},
	ev_left_press: {description: '[Constant]'},
	ev_left_release: {description: '[Constant]'},
	ev_middle_button: {description: '[Constant]'},
	ev_middle_press: {description: '[Constant]'},
	ev_middle_release: {description: '[Constant]'},
	ev_mouse: {description: '[Constant]'},
	ev_mouse_enter: {description: '[Constant]'},
	ev_mouse_leave: {description: '[Constant]'},
	ev_mouse_wheel_down: {description: '[Constant]'},
	ev_mouse_wheel_up: {description: '[Constant]'},
	ev_no_button: {description: '[Constant]'},
	ev_no_more_health: {description: '[Constant]'},
	ev_no_more_lives: {description: '[Constant]'},
	ev_other: {description: '[Constant]'},
	ev_outside: {description: '[Constant]'},
	ev_right_button: {description: '[Constant]'},
	ev_right_press: {description: '[Constant]'},
	ev_right_release: {description: '[Constant]'},
	ev_room_end: {description: '[Constant]'},
	ev_room_start: {description: '[Constant]'},
	ev_step: {description: '[Constant]'},
	ev_step_begin: {description: '[Constant]'},
	ev_step_end: {description: '[Constant]'},
	ev_step_normal: {description: '[Constant]'},
	ev_trigger: {description: '[Constant]'},
	ev_user0: {description: '[Constant]'},
	ev_user1: {description: '[Constant]'},
	ev_user10: {description: '[Constant]'},
	ev_user11: {description: '[Constant]'},
	ev_user12: {description: '[Constant]'},
	ev_user13: {description: '[Constant]'},
	ev_user14: {description: '[Constant]'},
	ev_user15: {description: '[Constant]'},
	ev_user2: {description: '[Constant]'},
	ev_user3: {description: '[Constant]'},
	ev_user4: {description: '[Constant]'},
	ev_user5: {description: '[Constant]'},
	ev_user6: {description: '[Constant]'},
	ev_user7: {description: '[Constant]'},
	ev_user8: {description: '[Constant]'},
	ev_user9: {description: '[Constant]'},
	false: {description: '[Constant]'},
	fa_archive: {description: '[Constant]'},
	fa_bottom: {description: '[Constant]'},
	fa_center: {description: '[Constant]'},
	fa_directory: {description: '[Constant]'},
	fa_hidden: {description: '[Constant]'},
	fa_left: {description: '[Constant]'},
	fa_middle: {description: '[Constant]'},
	fa_readonly: {description: '[Constant]'},
	fa_right: {description: '[Constant]'},
	fa_sysfile: {description: '[Constant]'},
	fa_top: {description: '[Constant]'},
	fa_volumeid: {description: '[Constant]'},
	GB2312_CHARSET: {description: '[Constant]'},
	global: {description: '[Constant]'},
	gp_axislh: {description: '[Constant]'},
	gp_axislv: {description: '[Constant]'},
	gp_axisrh: {description: '[Constant]'},
	gp_axisrv: {description: '[Constant]'},
	gp_face1: {description: '[Constant]'},
	gp_face2: {description: '[Constant]'},
	gp_face3: {description: '[Constant]'},
	gp_face4: {description: '[Constant]'},
	gp_padd: {description: '[Constant]'},
	gp_padl: {description: '[Constant]'},
	gp_padr: {description: '[Constant]'},
	gp_padu: {description: '[Constant]'},
	gp_select: {description: '[Constant]'},
	gp_shoulderl: {description: '[Constant]'},
	gp_shoulderlb: {description: '[Constant]'},
	gp_shoulderr: {description: '[Constant]'},
	gp_shoulderrb: {description: '[Constant]'},
	gp_start: {description: '[Constant]'},
	gp_stickl: {description: '[Constant]'},
	gp_stickr: {description: '[Constant]'},
	GREEK_CHARSET: {description: '[Constant]'},
	HANGEUL_CHARSET: {description: '[Constant]'},
	HEBREW_CHARSET: {description: '[Constant]'},
	JOHAB_CHARSET: {description: '[Constant]'},
	lb_disp_none: {description: '[Constant]'},
	lb_disp_numeric: {description: '[Constant]'},
	lb_disp_time_ms: {description: '[Constant]'},
	lb_disp_time_sec: {description: '[Constant]'},
	lb_sort_ascending: {description: '[Constant]'},
	lb_sort_descending: {description: '[Constant]'},
	lb_sort_none: {description: '[Constant]'},
	leaderboard_type_number: {description: '[Constant]'},
	leaderboard_type_time_mins_secs: {description: '[Constant]'},
	local: {description: '[Constant]'},
	MAC_CHARSET: {description: '[Constant]'},
	matrix_projection: {description: '[Constant]'},
	matrix_view: {description: '[Constant]'},
	matrix_world: {description: '[Constant]'},
	mb_any: {description: '[Constant]'},
	mb_left: {description: '[Constant]'},
	mb_middle: {description: '[Constant]'},
	mb_none: {description: '[Constant]'},
	mb_right: {description: '[Constant]'},
	network_socket_bluetooth: {description: '[Constant]'},
	network_socket_tcp: {description: '[Constant]'},
	network_socket_udp: {description: '[Constant]'},
	network_type_connect: {description: '[Constant]'},
	network_type_data: {description: '[Constant]'},
	network_type_disconnect: {description: '[Constant]'},
	noone: {description: '[Constant]'},
	OEM_CHARSET: {description: '[Constant]'},
	of_challenge_lose: {description: '[Constant]'},
	of_challenge_tie: {description: '[Constant]'},
	of_challenge_win: {description: '[Constant]'},
	os_android: {description: '[Constant]'},
	os_ios: {description: '[Constant]'},
	os_linux: {description: '[Constant]'},
	os_macosx: {description: '[Constant]'},
	os_psp: {description: '[Constant]'},
	os_symbian: {description: '[Constant]'},
	os_tizen: {description: '[Constant]'},
	os_unknown: {description: '[Constant]'},
	os_win32: {description: '[Constant]'},
	os_win8native: {description: '[Constant]'},
	os_windows: {description: '[Constant]'},
	os_winphone: {description: '[Constant]'},
	other: {description: '[Constant]'},
	ov_achievements: {description: '[Constant]'},
	ov_community: {description: '[Constant]'},
	ov_friends: {description: '[Constant]'},
	ov_gamegroup: {description: '[Constant]'},
	ov_players: {description: '[Constant]'},
	ov_settings: {description: '[Constant]'},
	phy_debug_render_aabb: {description: '[Constant]'},
	phy_debug_render_collision_pairs: {description: '[Constant]'},
	phy_debug_render_coms: {description: '[Constant]'},
	phy_debug_render_core_shapes: {description: '[Constant]'},
	phy_debug_render_joints: {description: '[Constant]'},
	phy_debug_render_obb: {description: '[Constant]'},
	phy_debug_render_shapes: {description: '[Constant]'},
	phy_joint_anchor_1_x: {description: '[Constant]'},
	phy_joint_anchor_1_y: {description: '[Constant]'},
	phy_joint_anchor_2_x: {description: '[Constant]'},
	phy_joint_anchor_2_y: {description: '[Constant]'},
	phy_joint_angle: {description: '[Constant]'},
	phy_joint_angle_limits: {description: '[Constant]'},
	phy_joint_damping_ratio: {description: '[Constant]'},
	phy_joint_frequency: {description: '[Constant]'},
	phy_joint_length_1: {description: '[Constant]'},
	phy_joint_length_2: {description: '[Constant]'},
	phy_joint_lower_angle_limit: {description: '[Constant]'},
	phy_joint_max_motor_force: {description: '[Constant]'},
	phy_joint_max_motor_torque: {description: '[Constant]'},
	phy_joint_motor_force: {description: '[Constant]'},
	phy_joint_motor_speed: {description: '[Constant]'},
	phy_joint_motor_torque: {description: '[Constant]'},
	phy_joint_reaction_force_x: {description: '[Constant]'},
	phy_joint_reaction_force_y: {description: '[Constant]'},
	phy_joint_reaction_torque: {description: '[Constant]'},
	phy_joint_speed: {description: '[Constant]'},
	phy_joint_translation: {description: '[Constant]'},
	phy_joint_upper_angle_limit: {description: '[Constant]'},
	pi: {description: '[Constant]'},
	pr_linelist: {description: '[Constant]'},
	pr_linestrip: {description: '[Constant]'},
	pr_pointlist: {description: '[Constant]'},
	pr_trianglefan: {description: '[Constant]'},
	pr_trianglelist: {description: '[Constant]'},
	pr_trianglestrip: {description: '[Constant]'},
	ps_change_all: {description: '[Constant]'},
	ps_change_motion: {description: '[Constant]'},
	ps_change_shape: {description: '[Constant]'},
	ps_deflect_horizontal: {description: '[Constant]'},
	ps_deflect_vertical: {description: '[Constant]'},
	ps_distr_gaussian: {description: '[Constant]'},
	ps_distr_invgaussian: {description: '[Constant]'},
	ps_distr_linear: {description: '[Constant]'},
	ps_force_constant: {description: '[Constant]'},
	ps_force_linear: {description: '[Constant]'},
	ps_force_quadratic: {description: '[Constant]'},
	ps_shape_diamond: {description: '[Constant]'},
	ps_shape_ellipse: {description: '[Constant]'},
	ps_shape_line: {description: '[Constant]'},
	ps_shape_rectangle: {description: '[Constant]'},
	pt_shape_circle: {description: '[Constant]'},
	pt_shape_cloud: {description: '[Constant]'},
	pt_shape_disk: {description: '[Constant]'},
	pt_shape_explosion: {description: '[Constant]'},
	pt_shape_flare: {description: '[Constant]'},
	pt_shape_line: {description: '[Constant]'},
	pt_shape_pixel: {description: '[Constant]'},
	pt_shape_ring: {description: '[Constant]'},
	pt_shape_smoke: {description: '[Constant]'},
	pt_shape_snow: {description: '[Constant]'},
	pt_shape_spark: {description: '[Constant]'},
	pt_shape_sphere: {description: '[Constant]'},
	pt_shape_square: {description: '[Constant]'},
	pt_shape_star: {description: '[Constant]'},
	RUSSIAN_CHARSET: {description: '[Constant]'},
	self: {description: '[Constant]'},
	SHIFTJIS_CHARSET: {description: '[Constant]'},
	SYMBOL_CHARSET: {description: '[Constant]'},
	THAI_CHARSET: {description: '[Constant]'},
	true: {description: '[Constant]'},
	TURKISH_CHARSET: {description: '[Constant]'},
	ty_real: {description: '[Constant]'},
	ty_string: {description: '[Constant]'},
	vertex_type_colour: {description: '[Constant]'},
	vertex_type_float1: {description: '[Constant]'},
	vertex_type_float2: {description: '[Constant]'},
	vertex_type_float3: {description: '[Constant]'},
	vertex_type_float4: {description: '[Constant]'},
	vertex_type_ubyte4: {description: '[Constant]'},
	vertex_usage_binormal: {description: '[Constant]'},
	vertex_usage_blendindices: {description: '[Constant]'},
	vertex_usage_blendweight: {description: '[Constant]'},
	vertex_usage_colour: {description: '[Constant]'},
	vertex_usage_depth: {description: '[Constant]'},
	vertex_usage_fog: {description: '[Constant]'},
	vertex_usage_normal: {description: '[Constant]'},
	vertex_usage_position: {description: '[Constant]'},
	vertex_usage_psize: {description: '[Constant]'},
	vertex_usage_sample: {description: '[Constant]'},
	vertex_usage_tagnet: {description: '[Constant]'},
	vertex_usage_textcoord: {description: '[Constant]'},
	VIETNAMESE_CHARSET: {description: '[Constant]'},
	vk_add: {description: '[Constant]'},
	vk_alt: {description: '[Constant]'},
	vk_anykey: {description: '[Constant]'},
	vk_backspace: {description: '[Constant]'},
	vk_control: {description: '[Constant]'},
	vk_decimal: {description: '[Constant]'},
	vk_delete: {description: '[Constant]'},
	vk_divide: {description: '[Constant]'},
	vk_down: {description: '[Constant]'},
	vk_end: {description: '[Constant]'},
	vk_enter: {description: '[Constant]'},
	vk_escape: {description: '[Constant]'},
	vk_f1: {description: '[Constant]'},
	vk_f10: {description: '[Constant]'},
	vk_f11: {description: '[Constant]'},
	vk_f12: {description: '[Constant]'},
	vk_f2: {description: '[Constant]'},
	vk_f3: {description: '[Constant]'},
	vk_f4: {description: '[Constant]'},
	vk_f5: {description: '[Constant]'},
	vk_f6: {description: '[Constant]'},
	vk_f7: {description: '[Constant]'},
	vk_f8: {description: '[Constant]'},
	vk_f9: {description: '[Constant]'},
	vk_home: {description: '[Constant]'},
	vk_insert: {description: '[Constant]'},
	vk_lalt: {description: '[Constant]'},
	vk_lcontrol: {description: '[Constant]'},
	vk_left: {description: '[Constant]'},
	vk_lshift: {description: '[Constant]'},
	vk_multiply: {description: '[Constant]'},
	vk_nokey: {description: '[Constant]'},
	vk_numpad0: {description: '[Constant]'},
	vk_numpad1: {description: '[Constant]'},
	vk_numpad2: {description: '[Constant]'},
	vk_numpad3: {description: '[Constant]'},
	vk_numpad4: {description: '[Constant]'},
	vk_numpad5: {description: '[Constant]'},
	vk_numpad6: {description: '[Constant]'},
	vk_numpad7: {description: '[Constant]'},
	vk_numpad8: {description: '[Constant]'},
	vk_numpad9: {description: '[Constant]'},
	vk_pagedown: {description: '[Constant]'},
	vk_pageup: {description: '[Constant]'},
	vk_pause: {description: '[Constant]'},
	vk_printscreen: {description: '[Constant]'},
	vk_ralt: {description: '[Constant]'},
	vk_rcontrol: {description: '[Constant]'},
	vk_return: {description: '[Constant]'},
	vk_right: {description: '[Constant]'},
	vk_rshift: {description: '[Constant]'},
	vk_shift: {description: '[Constant]'},
	vk_space: {description: '[Constant]'},
	vk_subtract: {description: '[Constant]'},
	vk_tab: {description: '[Constant]'},
	vk_up: {description: '[Constant]'},

	//GameMaker 8.1 Only
	input_type: {description: '[Constant] (GameMaker 8.1 Only)'},
    se_chorus: {description: '[Constant] (GameMaker 8.1 Only)'},
	se_compressor: {description: '[Constant] (GameMaker 8.1 Only)'},
	se_echo: {description: '[Constant] (GameMaker 8.1 Only)'},
	se_equalizer: {description: '[Constant] (GameMaker 8.1 Only)'},
	se_flanger: {description: '[Constant] (GameMaker 8.1 Only)'},
	se_gargle: {description: '[Constant] (GameMaker 8.1 Only)'},
	se_none: {description: '[Constant] (GameMaker 8.1 Only)'},
	se_reverb: {description: '[Constant] (GameMaker 8.1 Only)'},
	text_type: {description: '[Constant] (GameMaker 8.1 Only)'},
	
	//New in GameMaker Studio 2
	undefined: {description: '[Constant] (New in GameMaker Studio 2)'},
	pointer_invalid: {description: '[Constant] (New in GameMaker Studio 2)'},
	pointer_null: {description: '[Constant] (New in GameMaker Studio 2)'},
	path_action_stop: {description: '[Constant] (New in GameMaker Studio 2)'},
	path_action_restart: {description: '[Constant] (New in GameMaker Studio 2)'},
	path_action_continue: {description: '[Constant] (New in GameMaker Studio 2)'},
	path_action_reverse: {description: '[Constant] (New in GameMaker Studio 2)'},
	gamespeed_fps: {description: '[Constant] (New in GameMaker Studio 2)'},
	gamespeed_microseconds: {description: '[Constant] (New in GameMaker Studio 2)'},
	ev_gesture: {description: '[Constant] (New in GameMaker Studio 2)'},
	ev_gesture_tap: {description: '[Constant] (New in GameMaker Studio 2)'},
	ev_gesture_double_tap: {description: '[Constant] (New in GameMaker Studio 2)'},
	ev_gesture_drag_start: {description: '[Constant] (New in GameMaker Studio 2)'},
	ev_gesture_dragging: {description: '[Constant] (New in GameMaker Studio 2)'},
	ev_gesture_drag_end: {description: '[Constant] (New in GameMaker Studio 2)'},
	ev_gesture_flick: {description: '[Constant] (New in GameMaker Studio 2)'},
	ev_gesture_pinch_start: {description: '[Constant] (New in GameMaker Studio 2)'},
	ev_gesture_pinch_in: {description: '[Constant] (New in GameMaker Studio 2)'},
	ev_gesture_pinch_out: {description: '[Constant] (New in GameMaker Studio 2)'},
	ev_gesture_pinch_end: {description: '[Constant] (New in GameMaker Studio 2)'},
	ev_gesture_rotate_start: {description: '[Constant] (New in GameMaker Studio 2)'},
	ev_gesture_rotating: {description: '[Constant] (New in GameMaker Studio 2)'},
	ev_gesture_rotate_end: {description: '[Constant] (New in GameMaker Studio 2)'},
	ev_global_gesture_tap: {description: '[Constant] (New in GameMaker Studio 2)'},
	ev_global_gesture_double_tap: {description: '[Constant] (New in GameMaker Studio 2)'},
	ev_global_gesture_drag_start: {description: '[Constant] (New in GameMaker Studio 2)'},
	ev_global_gesture_dragging: {description: '[Constant] (New in GameMaker Studio 2)'},
	ev_global_gesture_drag_end: {description: '[Constant] (New in GameMaker Studio 2)'},
	ev_global_gesture_flick: {description: '[Constant] (New in GameMaker Studio 2)'},
	ev_global_gesture_pinch_start: {description: '[Constant] (New in GameMaker Studio 2)'},
	ev_global_gesture_pinch_in: {description: '[Constant] (New in GameMaker Studio 2)'},
	ev_global_gesture_pinch_out: {description: '[Constant] (New in GameMaker Studio 2)'},
	ev_global_gesture_pinch_end: {description: '[Constant] (New in GameMaker Studio 2)'},
	ev_global_gesture_rotate_start: {description: '[Constant] (New in GameMaker Studio 2)'},
	ev_global_gesture_rotating: {description: '[Constant] (New in GameMaker Studio 2)'},
	ev_global_gesture_rotate_end: {description: '[Constant] (New in GameMaker Studio 2)'},
	bm_complex: {description: '[Constant] (New in GameMaker Studio 2)'},
	tf_point: {description: '[Constant] (New in GameMaker Studio 2)'},
	tf_linear: {description: '[Constant] (New in GameMaker Studio 2)'},
	tf_anisotropic: {description: '[Constant] (New in GameMaker Studio 2)'},
	mip_off: {description: '[Constant] (New in GameMaker Studio 2)'},
	mip_on: {description: '[Constant] (New in GameMaker Studio 2)'},
	mip_markedonly: {description: '[Constant] (New in GameMaker Studio 2)'},
	asset_tiles: {description: '[Constant] (New in GameMaker Studio 2)'},
	asset_shader: {description: '[Constant] (New in GameMaker Studio 2)'},
	tile_rotate: {description: '[Constant] (New in GameMaker Studio 2)'},
	tile_flip: {description: '[Constant] (New in GameMaker Studio 2)'},
	tile_mirror: {description: '[Constant] (New in GameMaker Studio 2)'},
	tile_index_mask: {description: '[Constant] (New in GameMaker Studio 2)'},
	layerelementtype_undefined: {description: '[Constant] (New in GameMaker Studio 2)'},
	layerelementtype_background: {description: '[Constant] (New in GameMaker Studio 2)'},
	layerelementtype_instance: {description: '[Constant] (New in GameMaker Studio 2)'},
	layerelementtype_oldtilemap: {description: '[Constant] (New in GameMaker Studio 2)'},
	layerelementtype_sprite: {description: '[Constant] (New in GameMaker Studio 2)'},
	layerelementtype_tilemap: {description: '[Constant] (New in GameMaker Studio 2)'},
	layerelementtype_particlesystem: {description: '[Constant] (New in GameMaker Studio 2)'},
	layerelementtype_tile: {description: '[Constant] (New in GameMaker Studio 2)'},
	cmpfunc_never: {description: '[Constant] (New in GameMaker Studio 2)'},
	cmpfunc_less: {description: '[Constant] (New in GameMaker Studio 2)'},
	cmpfunc_equal: {description: '[Constant] (New in GameMaker Studio 2)'},
	cmpfunc_lessequal: {description: '[Constant] (New in GameMaker Studio 2)'},
	cmpfunc_greater: {description: '[Constant] (New in GameMaker Studio 2)'},
	cmpfunc_notequal: {description: '[Constant] (New in GameMaker Studio 2)'},
	cmpfunc_greaterequal: {description: '[Constant] (New in GameMaker Studio 2)'},
	cmpfunc_always: {description: '[Constant] (New in GameMaker Studio 2)'},
	cull_noculling: {description: '[Constant] (New in GameMaker Studio 2)'},
	cull_clockwise: {description: '[Constant] (New in GameMaker Studio 2)'},
	cull_counterclockwise: {description: '[Constant] (New in GameMaker Studio 2)'},
	lighttype_dir: {description: '[Constant] (New in GameMaker Studio 2)'},
	lighttype_point: {description: '[Constant] (New in GameMaker Studio 2)'},
	spritespeed_framespersecond: {description: '[Constant] (New in GameMaker Studio 2)'},
	spritespeed_framespergameframe: {description: '[Constant] (New in GameMaker Studio 2)'},
	browser_edge: {description: '[Constant] (New in GameMaker Studio 2)'},
	of_challenge_win: {description: '[Constant] (New in GameMaker Studio 2)'},
	of_challen: {description: '[Constant] (New in GameMaker Studio 2)'},
	ge_lose: {description: '[Constant] (New in GameMaker Studio 2)'},
	of_challenge_tie: {description: '[Constant] (New in GameMaker Studio 2)'},
	buffer_text: {description: '[Constant] (New in GameMaker Studio 2)'}
};

exports.keywords = {
    and: {},
    break: {},
    case: {},
    catch: {},
    continue: {},
    default: {},
    do: {},
    else: {},
    exit: {},
    for: {},
    if: {},
    not: {},
    or: {},
    repeat: {},
    return: {},
    switch: {},
    until: {},
    var: {},
    while: {},
    with: {},
    xor: {}
};