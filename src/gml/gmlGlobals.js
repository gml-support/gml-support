"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode_1 = require("vscode");
const datasimple = require("../../data/data.simple.json");
const localizationset = vscode_1.workspace.getConfiguration('gmlsupport').get('localization');
const i18n = require("../../data/i18n/" + localizationset + "/gmlGlobals.json");
const i18n_variable = require("../../data/i18n/" + localizationset + "/gmlGlobals-variables.json");
const i18n_constant = require("../../data/i18n/" + localizationset + "/gmlGlobals-constants.json");
const i18n_notice = require("../../data/i18n/" + localizationset + "/gmlNotices.json");

exports.globalfunctions = {
    abs: {
        description: '[Function]' + i18n.abs.desc,
        available: datasimple.all,
        parameters: [
            { label: 'val', documentation: i18n.abs.val }
        ],
		signature: '(val)'
	},
	achievement_available: {
		description: '[Function]' + i18n.achievement_available.desc,
        available: datasimple.gms1
	},
	achievement_event: {
        description: '[Function]' + i18n.achievement_event.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'stringid', documentation: i18n.achievement_event.stringid }
        ],
		signature: '(stringid)'
	},
	achievement_get_challenges: {
		description: '[Function]' + i18n.achievement_get_challenges.desc,
        available: datasimple.gms1
	},
	achievement_get_info: {
        description: '[Function]' + i18n.achievement_get_info.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'userid', documentation: i18n.achievement_get_info.userid }
        ],
		signature: '(userid)'
	},
	achievement_get_pic: {
        description: '[Function]' + i18n.achievement_get_pic.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'char', documentation: i18n.achievement_get_pic.char }
        ],
		signature: '(char)'
	},
	achievement_increment: {
        description: '[Function]' + i18n.achievement_increment.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'achievement_name', documentation: i18n.achievement_increment.achievement_name },
            { label: 'value', documentation: i18n.achievement_increment.value }
        ],
		signature: '(achievement_name, value)'
	},
	achievement_load_friends: {
		description: '[Function]' + i18n.achievement_load_friends.desc,
        available: datasimple.gms1
	},
	achievement_load_leaderboard: {
        description: '[Function]' + i18n.achievement_load_leaderboard.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'ident', documentation: i18n.achievement_load_leaderboard.ident },
            { label: 'minindex', documentation: i18n.achievement_load_leaderboard.minindex },
            { label: 'maxindex', documentation: i18n.achievement_load_leaderboard.maxindex },
            { label: 'filter', documentation: i18n.achievement_load_leaderboard.filter }
        ],
		signature: '(ident, minindex, maxindex, filter)'
	},
	achievement_load_progress: {
		description: '[Function]' + i18n.achievement_load_progress.desc,
        available: datasimple.gms1
	},
	achievement_login: {
		description: '[Function]' + i18n.achievement_login.desc,
        available: datasimple.gms1
	},
	achievement_login_status: {
		description: '[Function]' + i18n.achievement_login_status.desc,
        available: datasimple.gms1
	},
	achievement_logout: {
		description: '[Function]' + i18n.achievement_logout.desc,
        available: datasimple.gms1
	},
	achievement_post: {
        description: '[Function]' + i18n.achievement_post.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'achievement_name', documentation: i18n.achievement_post.achievement_name },
            { label: 'percent', documentation: i18n.achievement_post.percent }
        ],
		signature: '(achievement_name, percent)'
	},
	achievement_post_score: {
        description: '[Function]' + i18n.achievement_post_score.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'score_name', documentation: i18n.achievement_post_score.score_name },
            { label: 'score', documentation: i18n.achievement_post_score.score }
        ],
		signature: '(score_name, score)'
	},
	achievement_reset: {
		description: '[Function]' + i18n.achievement_reset.desc,
        available: datasimple.gms1
	},
	achievement_send_challenge: {
        description: '[Function]' + i18n.achievement_send_challenge.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'to', documentation: i18n.achievement_send_challenge.to },
            { label: 'challengeid', documentation: i18n.achievement_send_challenge.challengeid },
            { label: 'score', documentation: i18n.achievement_send_challenge.score },
            { label: 'type', documentation: i18n.achievement_send_challenge.type },
            { label: 'msg', documentation: i18n.achievement_send_challenge.msg }
        ],
		signature: '(to, challengeid, score, type, msg)'
	},
	achievement_show: {
        description: '[Function]' + i18n.achievement_show.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'type', documentation: i18n.achievement_show.type },
            { label: 'val', documentation: i18n.achievement_show.val }
        ],
		signature: '(type, val)'
	},
	achievement_show_achievements: {
		description: '[Function]' + i18n.achievement_show_achievements.desc,
        available: datasimple.gms1
	},
	achievement_show_challenge_notifications: {
        description: '[Function]' + i18n.achievement_show_challenge_notifications.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'receive_challenge', documentation: i18n.achievement_show_challenge_notifications.receive_challenge },
            { label: 'local_complete', documentation: i18n.achievement_show_challenge_notifications.local_complete },
            { label: 'remote_complete', documentation: i18n.achievement_show_challenge_notifications.remote_complete }
        ],
		signature: '(receive_challenge, local_complete, remote_complete)'
	},
	achievement_show_leaderboards: {
		description: '[Function]' + i18n.achievement_show_leaderboards.desc,
        available: datasimple.gms1
	},
	alarm_get: {
        description: '[Function]' + i18n.alarm_get.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'index', documentation: i18n.alarm_get.index }
        ],
		signature: '(index)'
	},
	alarm_set: {
        description: '[Function]' + i18n.alarm_set.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'index', documentation: i18n.alarm_set.index },
            { label: 'count', documentation: i18n.alarm_set.count }
        ],
		signature: '(index, count)'
	},
	angle_difference: {
        description: '[Function]' + i18n.angle_difference.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'ang1', documentation: i18n.angle_difference.ang1 },
            { label: 'ang2', documentation: i18n.angle_difference.ang2 }
        ],
		signature: '(ang1, ang2)'
	},
	ansi_char: {
        description: '[Function]' + i18n.ansi_char.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'val', documentation: i18n.ansi_char.val }
        ],
		signature: '(val)'
	},
	application_get_position: {
		description: '[Function]' + i18n.application_get_position.desc,
        available: datasimple.gms1
	},
	application_surface_draw_enable: {
        description: '[Function]' + i18n.application_surface_draw_enable.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'flag', documentation: i18n.application_surface_draw_enable.flag }
        ],
		signature: '(flag)'
	},
	application_surface_enable: {
        description: '[Function]' + i18n.application_surface_enable.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'enable', documentation: i18n.application_surface_enable.enable }
        ],
		signature: '(enable)'
	},
	application_surface_is_enabled: {
		description: '[Function]' + i18n.application_surface_is_enabled.desc,
        available: datasimple.gms1
	},
	arccos: {
        description: '[Function]' + i18n.arccos.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x', documentation: i18n.arccos.x }
        ],
		signature: '(x)'
	},
	arcsin: {
        description: '[Function]' + i18n.arcsin.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x', documentation: i18n.arcsin.x }
        ],
		signature: '(x)'
	},
	arctan: {
        description: '[Function]' + i18n.arctan.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x', documentation: i18n.arctan.x }
        ],
		signature: '(x)'
	},
	arctan2: {
        description: '[Function]' + i18n.arctan2.desc,
        available: datasimple.all,
        parameters: [
            { label: 'y', documentation: i18n.arctan2.y },
            { label: 'x', documentation: i18n.arctan2.x }
        ],
		signature: '(y, x)'
	},
	array_copy: {
        description: '[Function]' + i18n.array_copy.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'dest', documentation: i18n.array_copy.dest },
            { label: 'dest_index', documentation: i18n.array_copy.dest_index },
            { label: 'src', documentation: i18n.array_copy.src },
            { label: 'src_index', documentation: i18n.array_copy.src_index },
            { label: 'length', documentation: i18n.array_copy.length }
        ],
		signature: '(dest, dest_index, src, src_index, length)'
	},
	array_create: {
        description: '[Function]' + i18n.array_create.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'size', documentation: i18n.array_create.size },
            { label: 'value', documentation: i18n.array_create.value }
        ],
		signature: '(size, [value])'
	},
	array_equals: {
        description: '[Function]' + i18n.array_equals.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'var1', documentation: i18n.array_equals.var1 },
            { label: 'var2', documentation: i18n.array_equals.var2 }
        ],
		signature: '(var1, var2)'
	},
	array_height_2d: {
        description: '[Function]' + i18n.array_height_2d.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'array', documentation: i18n.array_height_2d.array }
        ],
		signature: '(array)'
	},
	array_length_1d: {
        description: '[Function]' + i18n.array_length_1d.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'array', documentation: i18n.array_length_1d.array }
        ],
		signature: '(array)'
	},
	array_length_2d: {
        description: '[Function]' + i18n.array_length_2d.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'array', documentation: i18n.array_length_2d.array },
            { label: 'n', documentation: i18n.array_length_2d.n }
        ],
		signature: '(array, n)'
	},
	asset_get_index: {
        description: '[Function]' + i18n.asset_get_index.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'name', documentation: i18n.asset_get_index.name }
        ],
		signature: '(name)'
	},
	asset_get_type: {
        description: '[Function]' + i18n.asset_get_type.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'name', documentation: i18n.asset_get_type.name }
        ],
		signature: '(name)'
	},
	audio_channel_num: {
        description: '[Function]' + i18n.audio_channel_num.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'numchannels', documentation: i18n.audio_channel_num.numchannels }
        ],
		signature: '(numchannels)'
	},
	audio_create_buffer_sound: {
        description: '[Function]' + i18n.audio_create_buffer_sound.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'bufferId', documentation: i18n.audio_create_buffer_sound.bufferId },
            { label: 'format', documentation: i18n.audio_create_buffer_sound.format },
            { label: 'rate', documentation: i18n.audio_create_buffer_sound.rate },
            { label: 'offset', documentation: i18n.audio_create_buffer_sound.offset },
            { label: 'length', documentation: i18n.audio_create_buffer_sound.length },
            { label: 'channels', documentation: i18n.audio_create_buffer_sound.channels }
        ],
		signature: '(bufferId, format, rate, offset, length, channels)'
	},
	audio_create_play_queue: {
        description: '[Function]' + i18n.audio_create_play_queue.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'queueFormat', documentation: i18n.audio_create_play_queue.queueFormat },
            { label: 'sampleRate', documentation: i18n.audio_create_play_queue.sampleRate },
            { label: 'channels', documentation: i18n.audio_create_play_queue.channels }
        ],
		signature: '(queueFormat, sampleRate, channels)'
	},
	audio_create_stream: {
        description: '[Function]' + i18n.audio_create_stream.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'filename', documentation: i18n.audio_create_stream.filename }
        ],
		signature: '(filename)'
	},
	audio_create_sync_group: {
        description: '[Function]' + i18n.audio_create_stream.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'looping', documentation: i18n.audio_create_stream.looping }
        ],
		signature: '(looping)'
	},
	audio_debug: {
        description: '[Function]' + i18n.audio_debug.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'enable', documentation: i18n.audio_debug.enable }
        ],
		signature: '(enable)'
	},
	audio_destroy_stream: {
        description: '[Function]' + i18n.audio_destroy_stream.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'filename', documentation: i18n.audio_destroy_stream.filename }
        ],
		signature: '(filename)'
	},
	audio_destroy_sync_group: {
        description: '[Function]' + i18n.audio_destroy_sync_group.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'group_index', documentation: i18n.audio_destroy_sync_group.group_index }
        ],
		signature: '(group_index)'
	},
	audio_emitter_create: {
		description: '[Function]' + i18n.audio_emitter_create.desc,
        available: datasimple.gms1
	},
	audio_emitter_exists: {
        description: '[Function]' + i18n.audio_emitter_exists.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'index', documentation: i18n.audio_emitter_exists.index }
        ],
		signature: '(index)'
	},
	audio_emitter_falloff: {
        description: '[Function]' + i18n.audio_emitter_falloff.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'emitterid', documentation: i18n.audio_emitter_falloff.emitterid },
            { label: 'falloff_ref_dist', documentation: i18n.audio_emitter_falloff.falloff_ref_dist },
            { label: 'falloff_max_dist', documentation: i18n.audio_emitter_falloff.falloff_max_dist },
            { label: 'falloff_factor', documentation: i18n.audio_emitter_falloff.falloff_factor }
        ],
		signature: '(emitterid, falloff_ref_dist, falloff_max_dist, falloff_factor)'
	},
	audio_emitter_free: {
        description: '[Function]' + i18n.audio_emitter_free.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'emitterid', documentation: i18n.audio_emitter_free.emitterid }
        ],
		signature: '(emitterid)'
	},
	audio_emitter_gain: {
        description: '[Function]' + i18n.audio_emitter_gain.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'emitterid', documentation: i18n.audio_emitter_gain.emitterid },
            { label: 'gain', documentation: i18n.audio_emitter_gain.gain }
        ],
		signature: '(emitterid, gain)'
	},
	audio_emitter_get_gain: {
        description: '[Function]' + i18n.audio_emitter_get_gain.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'emitterid', documentation: i18n.audio_emitter_get_gain.emitterid },
        ],
		signature: '(emitterid)'
	},
	audio_emitter_get_listener_mask: {
        description: '[Function]' + i18n.audio_emitter_get_listener_mask.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'emitterid', documentation: i18n.audio_emitter_get_listener_mask.emitterid },
        ],
		signature: '(emitterid)'
	},
	audio_emitter_get_pitch: {
        description: '[Function]' + i18n.audio_emitter_get_pitch.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'emitterid', documentation: i18n.audio_emitter_get_pitch.emitterid },
        ],
		signature: '(emitterid)'
	},
	audio_emitter_get_vx: {
        description: '[Function]' + i18n.audio_emitter_get_vx.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'emitterid', documentation: i18n.audio_emitter_get_vx.emitterid },
        ],
		signature: '(emitterid)'
	},
	audio_emitter_get_vy: {
        description: '[Function]' + i18n.audio_emitter_get_vy.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'emitterid', documentation: i18n.audio_emitter_get_vy.emitterid },
        ],
		signature: '(emitterid)'
	},
	audio_emitter_get_vz: {
        description: '[Function]' + i18n.audio_emitter_get_vz.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'emitterid', documentation: i18n.audio_emitter_get_vz.emitterid },
        ],
		signature: '(emitterid)'
	},
	audio_emitter_get_x: {
        description: '[Function]' + i18n.audio_emitter_get_x.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'emitterid', documentation: i18n.audio_emitter_get_x.emitterid },
        ],
		signature: '(emitterid)'
	},
	audio_emitter_get_y: {
        description: '[Function]' + i18n.audio_emitter_get_y.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'emitterid', documentation: i18n.audio_emitter_get_y.emitterid },
        ],
		signature: '(emitterid)'
	},
	audio_emitter_get_z: {
        description: '[Function]' + i18n.audio_emitter_get_z.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'emitterid', documentation: i18n.audio_emitter_get_z.emitterid },
        ],
		signature: '(emitterid)'
	},
	audio_emitter_pitch: {
        description: '[Function]' + i18n.audio_emitter_pitch.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'emitterid', documentation: i18n.audio_emitter_pitch.emitterid },,
            { label: 'pitch', documentation: i18n.audio_emitter_pitch.pitch }
        ],
		signature: '(emitterid, pitch)'
	},
	audio_emitter_position: {
        description: '[Function]' + i18n.audio_emitter_position.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'emitterid', documentation: i18n.audio_emitter_position.emitterid },,
            { label: 'x', documentation: i18n.audio_emitter_position.x },
            { label: 'y', documentation: i18n.audio_emitter_position.y },
            { label: 'z', documentation: i18n.audio_emitter_position.z }
        ],
		signature: '(emitterid, x, y, z)'
	},
	audio_emitter_set_listener_mask: {
        description: '[Function]' + i18n.audio_emitter_set_listener_mask.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'emitterid', documentation: i18n.audio_emitter_set_listener_mask.emitterid },,
            { label: 'mask', documentation: i18n.audio_emitter_set_listener_mask.mask }
        ],
		signature: '(emitterid, mask)'
	},
	audio_emitter_velocity: {
        description: '[Function]' + i18n.audio_emitter_velocity.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'emitterid', documentation: i18n.audio_emitter_velocity.emitterid },,
            { label: 'vx', documentation: i18n.audio_emitter_velocity.vx },
            { label: 'vy', documentation: i18n.audio_emitter_velocity.vy },
            { label: 'vz', documentation: i18n.audio_emitter_velocity.vz }
        ],
		signature: '(emitterid, vx, vy, vz)'
	},
	audio_exists: {
        description: '[Function]' + i18n.audio_exists.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'index', documentation: i18n.audio_exists.index }
        ],
		signature: '(index)'
	},
	audio_falloff_set_model: {
        description: '[Function]' + i18n.audio_falloff_set_model.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'falloffmodel', documentation: i18n.audio_falloff_set_model.falloffmodel }
        ],
		signature: '(falloffmodel)'
	},
	audio_free_buffer_sound: {
        description: '[Function]' + i18n.audio_free_buffer_sound.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'index', documentation: i18n.audio_free_buffer_sound.index }
        ],
		signature: '(index)'
	},
	audio_free_play_queue: {
        description: '[Function]' + i18n.audio_free_play_queue.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'queueIndex', documentation: i18n.audio_free_play_queue.queueIndex }
        ],
		signature: '(queueIndex)'
	},
	audio_get_listener_count: {
		description: '[Function]' + i18n.audio_get_listener_count.desc,
        available: datasimple.gms1
	},
	audio_get_listener_info: {
        description: '[Function]' + i18n.audio_get_listener_info.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'num', documentation: i18n.audio_get_listener_info.num }
        ],
		signature: '(num)'
	},
	audio_get_listener_mask: {
        description: '[Function]' + i18n.audio_get_listener_mask.desc,
        available: datasimple.gms1
	},
	audio_get_master_gain: {
        description: '[Function]' + i18n.audio_get_master_gain.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'listenerIndex', documentation: i18n.audio_get_master_gain.listenerIndex }
        ],
		signature: '(listenerIndex)'
	},
	audio_get_name: {
        description: '[Function]' + i18n.audio_get_name.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'index', documentation: i18n.audio_get_name.index }
        ],
		signature: '(index)'
	},
	audio_get_recorder_count: {
		description: '[Function]' + i18n.audio_get_recorder_count.desc,
        available: datasimple.gms1
	},
	audio_get_recorder_info: {
        description: '[Function]' + i18n.audio_get_recorder_info.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'recorder_index', documentation: i18n.audio_get_recorder_info.recorder_index }
        ],
		signature: '(recorder_index)'
	},
	audio_get_type: {
        description: '[Function]' + i18n.audio_get_type.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'index', documentation: i18n.audio_get_type.index }
        ],
		signature: '(index)'
	},
	audio_group_is_loaded: {
        description: '[Function]' + i18n.audio_group_is_loaded.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'groupId', documentation: i18n.audio_group_is_loaded.groupId }
        ],
		signature: '(groupId)'
	},
	audio_group_load: {
        description: '[Function]' + i18n.audio_group_load.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'groupId', documentation: i18n.audio_group_load.groupId }
        ],
		signature: '(groupId)'
	},
	audio_group_load_progress: {
        description: '[Function]' + i18n.audio_group_load_progress.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'groupId', documentation: i18n.audio_group_load_progress.groupId }
        ],
		signature: '(groupId)'
	},
	audio_group_name: {
        description: '[Function]' + i18n.audio_group_name.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'groupId', documentation: i18n.audio_group_name.groupId }
        ],
		signature: '(groupId)'
	},
	audio_group_set_gain: {
        description: '[Function]' + i18n.audio_group_set_gain.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'groupId', documentation: i18n.audio_group_set_gain.groupId },
            { label: 'volume', documentation: i18n.audio_group_set_gain.volume },
            { label: 'time', documentation: i18n.audio_group_set_gain.time }
        ],
		signature: '(groupId, volume, time)'
	},
	audio_group_stop: {
        description: '[Function]' + i18n.audio_group_stop.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'groupId', documentation: i18n.audio_group_stop.groupId }
        ],
		signature: '(groupId)'
	},
	audio_group_unload: {
        description: '[Function]' + i18n.audio_group_unload.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'groupId', documentation: i18n.audio_group_unload.groupId }
        ],
		signature: '(groupId)'
	},
	audio_is_paused: {
        description: '[Function]' + i18n.audio_is_paused.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'index', documentation: i18n.audio_is_paused.index }
        ],
        signature: '(index)'
    },
	audio_is_playing: {
        description: '[Function]' + i18n.audio_is_playing.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'index', documentation: i18n.audio_is_playing.index }
        ],
        signature: '(index)'
    },
	audio_listener_get_data: {
        description: '[Function]' + i18n.audio_listener_get_data.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'index', documentation: i18n.audio_listener_get_data.index }
        ],
        signature: '(index)'
    },
	audio_listener_orientation: {
        description: '[Function]' + i18n.audio_listener_orientation.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'lookat_x', documentation: i18n.audio_listener_orientation.lookat_x },
            { label: 'lookat_y', documentation: i18n.audio_listener_orientation.lookat_y },
            { label: 'lookat_z', documentation: i18n.audio_listener_orientation.lookat_z },
            { label: 'up_x', documentation: i18n.audio_listener_orientation.up_x },
            { label: 'up_y', documentation: i18n.audio_listener_orientation.up_y },
            { label: 'up_z', documentation: i18n.audio_listener_orientation.up_z }
        ],
        signature: '(lookat_x, lookat_y, lookat_z, up_x, up_y, up_z)'
    },
	audio_listener_position: {
        description: '[Function]' + i18n.audio_listener_position.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'x', documentation: i18n.audio_listener_position.x },
            { label: 'y', documentation: i18n.audio_listener_position.y },
            { label: 'z', documentation: i18n.audio_listener_position.z }
        ],
        signature: '(x, y, z)'
    },
	audio_listener_set_orientation: {
        description: '[Function]' + i18n.audio_listener_set_orientation.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'index', documentation: i18n.audio_listener_set_orientation.index },
            { label: 'lookat_x', documentation: i18n.audio_listener_set_orientation.lookat_x },
            { label: 'lookat_y', documentation: i18n.audio_listener_set_orientation.lookat_y },
            { label: 'lookat_z', documentation: i18n.audio_listener_set_orientation.lookat_z },
            { label: 'up_x', documentation: i18n.audio_listener_set_orientation.up_x },
            { label: 'up_y', documentation: i18n.audio_listener_set_orientation.up_y },
            { label: 'up_z', documentation: i18n.audio_listener_set_orientation.up_z }
        ],
        signature: '(index, lookat_x, lookat_y, lookat_z, up_x, up_y, up_z)'
    },
	audio_listener_set_position: {
        description: '[Function]' + i18n.audio_listener_set_position.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'index', documentation: i18n.audio_listener_set_position.index },
            { label: 'x', documentation: i18n.audio_listener_set_position.x },
            { label: 'y', documentation: i18n.audio_listener_set_position.y },
            { label: 'z', documentation: i18n.audio_listener_set_position.z }
        ],
        signature: '(index, x, y, z)'
    },
	audio_listener_set_velocity: {
        description: '[Function]' + i18n.audio_listener_set_velocity.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'index', documentation: i18n.audio_listener_set_velocity.index },
            { label: 'vx', documentation: i18n.audio_listener_set_velocity.vx },
            { label: 'vy', documentation: i18n.audio_listener_set_velocity.vy },
            { label: 'vz', documentation: i18n.audio_listener_set_velocity.vz }
        ],
        signature: '(index, vx, vy, vz)'
    },
	audio_listener_velocity: {
        description: '[Function]' + i18n.audio_listener_velocity.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'vx', documentation: i18n.audio_listener_velocity.vx },
            { label: 'vy', documentation: i18n.audio_listener_velocity.vy },
            { label: 'vz', documentation: i18n.audio_listener_velocity.vz }
        ],
        signature: '(vx, vy, vz)'
    },
	audio_master_gain: {
        description: '[Function]' + i18n.audio_master_gain.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'gain', documentation: i18n.audio_master_gain.gain }
        ],
        signature: '(gain)'
    },
	audio_pause_all: {
        description: '[Function]' + i18n.audio_pause_all.desc,
        available: datasimple.gms1
    },
	audio_pause_sound: {
        description: '[Function]' + i18n.audio_pause_sound.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'index', documentation: i18n.audio_pause_sound.index }
        ],
        signature: '(index)'
    },
	audio_pause_sync_group: {
        description: '[Function]' + i18n.audio_pause_sync_group.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'group_index', documentation: i18n.audio_pause_sync_group.group_index }
        ],
        signature: '(group_index)'
    },
	audio_play_in_sync_group: {
        description: '[Function]' + i18n.audio_play_in_sync_group.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'group_index', documentation: i18n.audio_play_in_sync_group.group_index },
            { label: 'sound_index', documentation: i18n.audio_play_in_sync_group.sound_index }
        ],
        signature: '(group_index, sound_index)'
    },
	audio_play_sound: {
        description: '[Function]' + i18n.audio_play_sound.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'index', documentation: i18n.audio_play_sound.index },
            { label: 'priority', documentation: i18n.audio_play_sound.priority },
            { label: 'loops', documentation: i18n.audio_play_sound.loops }
        ],
        signature: '(index, priority, loops)'
    },
	audio_play_sound_at: {
        description: '[Function]' + i18n.audio_play_sound_at.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'index', documentation: i18n.audio_play_sound_at.index },
            { label: 'x', documentation: i18n.audio_play_sound_at.x },
            { label: 'y', documentation: i18n.audio_play_sound_at.y },
            { label: 'z', documentation: i18n.audio_play_sound_at.z },
            { label: 'falloff_ref_dist', documentation: i18n.audio_play_sound_at.falloff_ref_dist },
            { label: 'falloff_max_dist', documentation: i18n.audio_play_sound_at.falloff_max_dist },
            { label: 'falloff_factor', documentation: i18n.audio_play_sound_at.falloff_factor },
            { label: 'loops', documentation: i18n.audio_play_sound_at.loops },
            { label: 'priority', documentation: i18n.audio_play_sound_at.priority }
        ],
        signature: '(index, x, y, z, falloff_ref_dist, falloff_max_dist, falloff_factor, loops, priority)'
    },
	audio_play_sound_on: {
        description: '[Function]' + i18n.audio_play_sound_on.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'emitterid', documentation: i18n.audio_play_sound_on.emitterid },,
            { label: 'sound', documentation: i18n.audio_play_sound_on.sound },
            { label: 'priority', documentation: i18n.audio_play_sound_on.priority },
            { label: 'loops', documentation: i18n.audio_play_sound_on.loops }
        ],
        signature: '(emitterid, sound, loops, priority)'
    },
	audio_queue_sound: {
        description: '[Function]' + i18n.audio_queue_sound.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'queueid', documentation: i18n.audio_queue_sound.queueid },
            { label: 'buffer_id', documentation: i18n.audio_queue_sound.buffer_id },
            { label: 'offset', documentation: i18n.audio_queue_sound.offset },
            { label: 'length', documentation: i18n.audio_queue_sound.length }
        ],
        signature: '(queueId, buffer_id, offset, length)'
    },
	audio_resume_all: {
        description: '[Function]' + i18n.audio_resume_all.desc,
        available: datasimple.gms1
    },
	audio_resume_sound: {
        description: '[Function]' + i18n.audio_resume_sound.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'index', documentation: i18n.audio_resume_sound.index }
        ],
        signature: '(index)'
    },
	audio_resume_sync_group: {
        description: '[Function]' + i18n.audio_resume_sync_group.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'group_index', documentation: i18n.audio_resume_sync_group.group_index }
        ],
        signature: '(group_index)'
    },
	audio_set_listener_mask: {
        description: '[Function]' + i18n.audio_set_listener_mask.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'mask', documentation: i18n.audio_set_listener_mask.mask }
        ],
        signature: '(mask)'
    },
	audio_set_master_gain: {
        description: '[Function]' + i18n.audio_set_master_gain.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'listenerIndex', documentation: i18n.audio_set_master_gain.listenerIndex },
            { label: 'gain', documentation: i18n.audio_set_master_gain.gain }
        ],
        signature: '(listenerIndex, gain)'
    },
	audio_sound_gain: {
        description: '[Function]' + i18n.audio_sound_gain.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'index', documentation: i18n.audio_sound_gain.index },
            { label: 'volume', documentation: i18n.audio_sound_gain.volume },
            { label: 'time', documentation: i18n.audio_sound_gain.time }
        ],
        signature: '(index, volume, time)'
    },
	audio_sound_get_gain: {
        description: '[Function]' + i18n.audio_sound_get_gain.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'soundID', documentation: i18n.audio_sound_get_gain.soundID }
        ],
        signature: '(soundID)'
    },
	audio_sound_get_listener_mask: {
        description: '[Function]' + i18n.audio_sound_get_listener_mask.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'index', documentation: i18n.audio_sound_get_listener_mask.index }
        ],
        signature: '(index)'
    },
	audio_sound_get_pitch: {
        description: '[Function]' + i18n.audio_sound_get_pitch.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'index', documentation: i18n.audio_sound_get_pitch.index }
        ],
        signature: '(index)'
    },
	audio_sound_get_track_position: {
        description: '[Function]' + i18n.audio_sound_get_track_position.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'index', documentation: i18n.audio_sound_get_track_position.index }
        ],
        signature: '(index)'
    },
	audio_sound_length: {
        description: '[Function]' + i18n.audio_sound_length.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'index', documentation: i18n.audio_sound_length.index }
        ],
        signature: '(index)'
    },
	audio_sound_pitch: {
        description: '[Function]' + i18n.audio_sound_pitch.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'index', documentation: i18n.audio_sound_pitch.index },
            { label: 'pitch', documentation: i18n.audio_sound_pitch.pitch }
        ],
        signature: '(index, pitch)'
    },
	audio_sound_set_listener_mask: {
        description: '[Function]' + i18n.audio_sound_set_listener_mask.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'soundID', documentation: i18n.audio_sound_set_listener_mask.soundID },
            { label: 'mask', documentation: i18n.audio_sound_set_listener_mask.mask }
        ],
        signature: '(soundID, mask)'
    },
	audio_sound_set_track_position: {
        description: '[Function]' + i18n.audio_sound_set_track_position.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'index', documentation: i18n.audio_sound_set_track_position.index },
            { label: 'time', documentation: i18n.audio_sound_set_track_position.time }
        ],
        signature: '(index, time)'
    },
	audio_start_recording: {
        description: '[Function]' + i18n.audio_start_recording.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'recorder_index', documentation: i18n.audio_start_recording.recorder_index }
        ],
        signature: '(recorder_index)'
    },
	audio_start_sync_group: {
        description: '[Function]' + i18n.audio_start_sync_group.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'group_index', documentation: i18n.audio_start_sync_group.group_index }
        ],
        signature: '(group_index)'
    },
	audio_stop_all: {
        description: '[Function]' + i18n.audio_stop_all.desc,
        available: datasimple.gms1
    },
	audio_stop_recording: {
        description: '[Function]' + i18n.audio_stop_recording.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'channel_index', documentation: i18n.audio_stop_recording.channel_index }
        ],
        signature: '(channel_index)'
    },
	audio_stop_sound: {
        description: '[Function]' + i18n.audio_stop_sound.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'index', documentation: i18n.audio_stop_sound.index }
        ],
        signature: '(index)'
    },
	audio_stop_sync_group: {
        description: '[Function]' + i18n.audio_stop_sync_group.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'group_index', documentation: i18n.audio_stop_sync_group.group_index }
        ],
        signature: '(group_index)'
    },
	audio_sync_group_debug: {
        description: '[Function]' + i18n.audio_sync_group_debug.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'group_index', documentation: i18n.audio_sync_group_debug.group_index }
        ],
        signature: '(group_index)'
    },
	audio_sync_group_get_track_pos: {
        description: '[Function]' + i18n.audio_sync_group_get_track_pos.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'group_index', documentation: i18n.audio_sync_group_get_track_pos.group_index }
        ],
        signature: '(group_index)'
    },
	audio_sync_group_is_playing: {
        description: '[Function]' + i18n.audio_sync_group_is_playing.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'group_index', documentation: i18n.audio_sync_group_is_playing.group_index }
        ],
        signature: '(group_index)'
    },
	audio_system: {
        description: '[Function]' + i18n.audio_system.desc,
        available: datasimple.gms1
    },
	base64_decode: {
        description: '[Function]' + i18n.base64_decode.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'string', documentation: i18n.base64_decode.string }
        ],
        signature: '(string)'
    },
	base64_encode: {
        description: '[Function]' + i18n.base64_encode.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'string', documentation: i18n.base64_encode.string }
        ],
        signature: '(string)'
    },
	browser_input_capture: {
        description: '[Function]' + i18n.browser_input_capture.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'enable', documentation: i18n.browser_input_capture.enable }
        ],
        signature: '(enable)'
    },
	buffer_async_group_begin: {
        description: '[Function]' + i18n.buffer_async_group_begin.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'groupname', documentation: i18n.buffer_async_group_begin.groupname }
        ],
        signature: '(groupname)'
    },
	buffer_async_group_end: {
        description: '[Function]' + i18n.buffer_async_group_end.desc,
        available: datasimple.gms1
    },
	buffer_async_group_option: {
        description: '[Function]' + i18n.buffer_async_group_option.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'optionname', documentation: i18n.buffer_async_group_option.optionname },
            { label: 'optionvalue', documentation: i18n.buffer_async_group_option.optionvalue }
        ],
        signature: '(optionname, optionvalue)'
    },
	buffer_base64_decode: {
        description: '[Function]' + i18n.buffer_base64_decode.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'string', documentation: i18n.buffer_base64_decode.string }
        ],
        signature: '(string)'
    },
	buffer_base64_decode_ext: {
        description: '[Function]' + i18n.buffer_base64_decode_ext.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'buffer', documentation: i18n.buffer_base64_decode_ext.buffer },
            { label: 'string', documentation: i18n.buffer_base64_decode_ext.string },
            { label: 'offset', documentation: i18n.buffer_base64_decode_ext.offset }
        ],
        signature: '(buffer, string, offset)'
    },
	buffer_base64_encode: {
        description: '[Function]' + i18n.buffer_base64_encode.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'buffer', documentation: i18n.buffer_base64_encode.buffer },
            { label: 'offset', documentation: i18n.buffer_base64_encode.offset },
            { label: 'size', documentation: i18n.buffer_base64_encode.size }
        ],
        signature: '(buffer, offset, size)'
    },
	buffer_copy: {
        description: '[Function]' + i18n.buffer_copy.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'src_buffer', documentation: i18n.buffer_copy.src_buffer },
            { label: 'src_offset', documentation: i18n.buffer_copy.src_offset },
            { label: 'size', documentation: i18n.buffer_copy.size },
            { label: 'dest_buffer', documentation: i18n.buffer_copy.dest_buffer },
            { label: 'dest_offset', documentation: i18n.buffer_copy.dest_offset }
        ],
        signature: '(src_buffer, src_offset, size, dest_buffer, dest_offset)'
    },
	buffer_copy_from_vertex_buffer: {
        description: '[Function]' + i18n.buffer_copy_from_vertex_buffer.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'vertex_buffer', documentation: i18n.buffer_copy_from_vertex_buffer.vertex_buffer },
            { label: 'start_vertex', documentation: i18n.buffer_copy_from_vertex_buffer.start_vertex },
            { label: 'num_vertices', documentation: i18n.buffer_copy_from_vertex_buffer.num_vertice },
            { label: 'dest_buffer', documentation: i18n.buffer_copy_from_vertex_buffer.dest_buffer },
            { label: 'dest_offset', documentation: i18n.buffer_copy_from_vertex_buffer.dest_offset }
        ],
        signature: '(vertex_buffer, start_vertex, num_vertices, dest_buffer, dest_offset)'
    },
	buffer_create: {
        description: '[Function]' + i18n.buffer_create.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'size', documentation: i18n.buffer_create.size },
            { label: 'buffer_type', documentation: i18n.buffer_create.buffer_type },
            { label: 'alignment', documentation: i18n.buffer_create.alignment }
        ],
        signature: '(size, buffer_type, alignment)'
    },
	buffer_create_from_vertex_buffer: {
        description: '[Function]' + i18n.buffer_create_from_vertex_buffer.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'vertex_buffer', documentation: i18n.buffer_create_from_vertex_buffer.vertex_buffer },
            { label: 'type', documentation: i18n.buffer_create_from_vertex_buffer.type },
            { label: 'alignment', documentation: i18n.buffer_create_from_vertex_buffer.alignment }
        ],
        signature: '(vertex_buffer, type, alignment)'
    },
	buffer_create_from_vertex_buffer_ext: {
        description: '[Function]' + i18n.buffer_create_from_vertex_buffer_ext.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'vertex_buffer', documentation: i18n.buffer_create_from_vertex_buffer_ext.vertex_buffer },
            { label: 'type', documentation: i18n.buffer_create_from_vertex_buffer_ext.type },
            { label: 'alignment', documentation: i18n.buffer_create_from_vertex_buffer_ext.alignment },
            { label: 'start_vertex', documentation: i18n.buffer_create_from_vertex_buffer_ext.start_vertex },
            { label: 'num_vertices', documentation: i18n.buffer_create_from_vertex_buffer_ext.num_vertices }
        ],
        signature: '(vertex_buffer, type, alignment, start_vertex, num_vertices)'
    },
	buffer_delete: {
        description: '[Function]' + i18n.buffer_delete.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'buffer', documentation: i18n.buffer_delete.buffer }
        ],
        signature: '(buffer)'
    },
	buffer_exists: {
        description: '[Function]' + i18n.buffer_exists.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'buffer', documentation: i18n.buffer_exists.buffer }
        ],
        signature: '(buffer)'
    },
	buffer_fill: {
        description: '[Function]' + i18n.buffer_fill.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'buffer', documentation: i18n.buffer_fill.buffer },
            { label: 'offset', documentation: i18n.buffer_fill.offset },
            { label: 'type', documentation: i18n.buffer_fill.type },
            { label: 'value', documentation: i18n.buffer_fill.value },
            { label: 'size', documentation: i18n.buffer_fill.size }
        ],
        signature: '(buffer, offset, type, value, size)'
    },
	buffer_get_address: {
        description: '[Function]' + i18n.buffer_get_address.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'buffer', documentation: i18n.buffer_get_address.buffer }
        ],
        signature: '(buffer)'
    },
	buffer_get_alignment: {
        description: '[Function]' + i18n.buffer_get_alignment.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'buffer', documentation: i18n.buffer_get_alignment.buffer }
        ],
        signature: '(buffer)'
    },
	buffer_get_size: {
        description: '[Function]' + i18n.buffer_get_size.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'index', documentation: i18n.buffer_get_size.index }
        ],
        signature: '(index)'
    },
	buffer_get_surface: {
        description: '[Function]' + i18n.buffer_get_surface.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'buffer', documentation: i18n.buffer_get_surface.buffer },
            { label: 'surface', documentation: i18n.buffer_get_surface.surface },
            { label: 'mode', documentation: i18n.buffer_get_surface.mode },
            { label: 'offset', documentation: i18n.buffer_get_surface.offset },
            { label: 'modulo', documentation: i18n.buffer_get_surface.modulo }
        ],
        signature: '(buffer, surface, mode, offset, modulo)'
    },
	buffer_get_type: {
        description: '[Function]' + i18n.buffer_get_type.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'buffer', documentation: i18n.buffer_get_type.buffer }
        ],
        signature: '(buffer)'
    },
	buffer_load: {
        description: '[Function]' + i18n.buffer_load.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'filename', documentation: i18n.buffer_load.filename }
        ],
        signature: '(filename)'
    },
	buffer_load_async: {
        description: '[Function]' + i18n.buffer_load_async.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'bufferid', documentation: i18n.buffer_load_async.bufferid },
            { label: 'filename', documentation: i18n.buffer_load_async.filename },
            { label: 'offset', documentation: i18n.buffer_load_async.offset },
            { label: 'size', documentation: i18n.buffer_load_async.size }
        ],
        signature: '(bufferid, filename, offset, size)'
    },
	buffer_load_ext: {
        description: '[Function]' + i18n.buffer_load_ext.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'bufferid', documentation: i18n.buffer_load_ext.bufferid },
            { label: 'filename', documentation: i18n.buffer_load_ext.filename },
            { label: 'offset', documentation: i18n.buffer_load_ext.offset }
        ],
        signature: '(buffer, filename, offset)'
    },
	buffer_load_partial: {
        description: '[Function]' + i18n.buffer_load_partial.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'bufferid', documentation: i18n.buffer_load_partial.bufferid },
            { label: 'filename', documentation: i18n.buffer_load_partial.filename },
            { label: 'src_offset', documentation: i18n.buffer_load_partial.src_offset },
            { label: 'src_len', documentation: i18n.buffer_load_partial.src_len },
            { label: 'dest_offset', documentation: i18n.buffer_load_partial.dest_offset }
        ],
        signature: '(buffer, filename, src_offset, src_len, dest_offset)'
    },
	buffer_md5: {
        description: '[Function]' + i18n.buffer_md5.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'buffer', documentation: i18n.buffer_md5.buffer },
            { label: 'offset', documentation: i18n.buffer_md5.offset },
            { label: 'size', documentation: i18n.buffer_md5.size }
        ],
        signature: '(buffer, offset, size)'
    },
	buffer_peek: {
        description: '[Function]' + i18n.buffer_peek.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'buffer', documentation: i18n.buffer_peek.buffer },
            { label: 'offset', documentation: i18n.buffer_peek.offset },
            { label: 'type', documentation: i18n.buffer_peek.type }
        ],
        signature: '(buffer, offset, type)'
    },
	buffer_poke: {
        description: '[Function]' + i18n.buffer_poke.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'buffer', documentation: i18n.buffer_poke.buffer },
            { label: 'offset', documentation: i18n.buffer_poke.offset },
            { label: 'type', documentation: i18n.buffer_poke.type },
            { label: 'value', documentation: i18n.buffer_poke.value }
        ],
        signature: '(buffer, offset, type, value)'
    },
	buffer_read: {
        description: '[Function]' + i18n.buffer_read.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'buffer', documentation: i18n.buffer_read.buffer },
            { label: 'type', documentation: i18n.buffer_read.type }
        ],
        signature: '(buffer, type)'
    },
	buffer_resize: {
        description: '[Function]' + i18n.buffer_resize.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'buffer', documentation: i18n.buffer_resize.buffer },
            { label: 'newsize', documentation: i18n.buffer_resize.newsize }
        ],
        signature: '(buffer, newsize)'
    },
	buffer_save: {
        description: '[Function]' + i18n.buffer_save.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'buffer', documentation: i18n.buffer_save.buffer },
            { label: 'filename', documentation: i18n.buffer_save.filename }
        ],
        signature: '(buffer, filename)'
    },
	buffer_save_async: {
        description: '[Function]' + i18n.buffer_save_async.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'buffer', documentation: i18n.buffer_save_async.buffer },
            { label: 'type', documentation: i18n.buffer_save_async.type },
            { label: 'offset', documentation: i18n.buffer_save_async.offset },
            { label: 'size', documentation: i18n.buffer_save_async.size }
        ],
        signature: '(bufferid, filename, offset, size)'
    },
	buffer_save_ext: {
        description: '[Function]' + i18n.buffer_save_ext.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'bufferid', documentation: i18n.buffer_save_ext.bufferid },
            { label: 'filename', documentation: i18n.buffer_save_ext.filename },
            { label: 'offset', documentation: i18n.buffer_save_ext.offset },
            { label: 'size', documentation: i18n.buffer_save_ext.size }
        ],
        signature: '(buffer, filename, offset, size)'
    },
	buffer_seek: {
        description: '[Function]' + i18n.buffer_seek.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'bufferid', documentation: i18n.buffer_seek.bufferid },
            { label: 'base', documentation: i18n.buffer_seek.base },
            { label: 'offset', documentation: i18n.buffer_seek.offset }
        ],
        signature: '(buffer, base, offset)'
    },
	buffer_set_surface: {
        description: '[Function]' + i18n.buffer_set_surface.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'buffer', documentation: i18n.buffer_set_surface.buffer },
            { label: 'surface', documentation: i18n.buffer_set_surface.surface },
            { label: 'mode', documentation: i18n.buffer_set_surface.mode },
            { label: 'offset', documentation: i18n.buffer_set_surface.offset },
            { label: 'modulo', documentation: i18n.buffer_set_surface.modulo }
        ],
        signature: '(buffer, surface, mode, offset, modulo)'
    },
	buffer_sha1: {
        description: '[Function]' + i18n.buffer_sha1.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'bufferid', documentation: i18n.buffer_sha1.bufferid },
            { label: 'offset', documentation: i18n.buffer_sha1.offset },
            { label: 'size', documentation: i18n.buffer_sha1.size }
        ],
        signature: '(buffer, offset, size)'
    },
	buffer_sizeof: {
        description: '[Function]' + i18n.buffer_sizeof.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'type', documentation: i18n.buffer_sizeof.type }
        ],
        signature: '(type)'
    },
	buffer_tell: {
        description: '[Function]' + i18n.buffer_tell.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'buffer', documentation: i18n.buffer_tell.buffer }
        ],
        signature: '(buffer)'
    },
	buffer_write: {
        description: '[Function]' + i18n.buffer_write.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'buffer', documentation: i18n.buffer_write.buffer },
            { label: 'type', documentation: i18n.buffer_write.type },
            { label: 'value', documentation: i18n.buffer_write.value }
        ],
        signature: '(buffer, type, value)'
    },
	ceil: {
        description: '[Function]' + i18n.ceil.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x', documentation: i18n.ceil.x }
        ],
        signature: '(x)'
    },
	choose: {
        description: '[Function]' + i18n.choose.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x1', documentation: i18n.choose.x1 },
            { label: 'x2', documentation: i18n.choose.x2 },
            { label: 'x3', documentation: i18n.choose.x3 },
            { label: '...', documentation: i18n.choose.more }
        ],
        signature: '(x1, x2, x3, ...)'
    },
	chr: {
        description: '[Function]' + i18n.chr.desc,
        available: datasimple.all,
        parameters: [
            { label: 'val', documentation: i18n.chr.val }
        ],
        signature: '(val)'
    },
	clamp: {
        description: '[Function]' + i18n.clamp.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'val', documentation: i18n.clamp.val },
            { label: 'min', documentation: i18n.clamp.min },
            { label: 'max', documentation: i18n.clamp.max }
        ],
        signature: '(val, min, max)'
    },
	clickable_add: {
        description: '[Function]' + i18n.clickable_add.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'x', documentation: i18n.clickable_add.x },
            { label: 'y', documentation: i18n.clickable_add.y },
            { label: 'spritetpe', documentation: i18n.clickable_add.spritetpe },
            { label: 'URL', documentation: i18n.clickable_add.URL },
            { label: 'target', documentation: i18n.clickable_add.target },
            { label: 'params', documentation: i18n.clickable_add.params }
        ],
        signature: '(x, y, spritetpe, URL, target, params)'
    },
	clickable_add_ext: {
        description: '[Function]' + i18n.clickable_add_ext.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'x', documentation: i18n.clickable_add_ext.x },
            { label: 'y', documentation: i18n.clickable_add_ext.y },
            { label: 'spritetpe', documentation: i18n.clickable_add_ext.spritetpe },
            { label: 'URL', documentation: i18n.clickable_add_ext.URL },
            { label: 'target', documentation: i18n.clickable_add_ext.target },
            { label: 'params', documentation: i18n.clickable_add_ext.params },
            { label: 'scale', documentation: i18n.clickable_add_ext.scale },
            { label: 'alpha', documentation: i18n.clickable_add_ext.alpha }
        ],
        signature: '(x, y, spritetpe, URL, target, params, scale, alpha)'
    },
	clickable_change: {
        description: '[Function]' + i18n.clickable_change.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'index', documentation: i18n.clickable_change.index },
            { label: 'spritetpe', documentation: i18n.clickable_change.spritetpe },
            { label: 'x', documentation: i18n.clickable_change.x },
            { label: 'y', documentation: i18n.clickable_change.y }
        ],
        signature: '(index, spritetpe, x, y)'
    },
	clickable_change_ext: {
        description: '[Function]' + i18n.clickable_change_ext.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'index', documentation: i18n.clickable_change_ext.index },
            { label: 'spritetpe', documentation: i18n.clickable_change_ext.spritetpe },
            { label: 'x', documentation: i18n.clickable_change_ext.x },
            { label: 'y', documentation: i18n.clickable_change_ext.y },
            { label: 'scale', documentation: i18n.clickable_change_ext.scale },
            { label: 'alpha', documentation: i18n.clickable_change_ext.alpha }
        ],
        signature: '(index, spritetpe, x, y, scale, alpha)'
    },
	clickable_delete: {
        description: '[Function]' + i18n.clickable_delete.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'index', documentation: i18n.clickable_delete.index }
        ],
        signature: '(index)'
    },
	clickable_exists: {
        description: '[Function]' + i18n.clickable_exists.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'index', documentation: i18n.clickable_exists.index }
        ],
        signature: '(index)'
    },
	clickable_set_style: {
        description: '[Function]' + i18n.clickable_set_style.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'index', documentation: i18n.clickable_set_style.index },
            { label: 'map', documentation: i18n.clickable_set_style.map }
        ],
        signature: '(index, map)'
    },
	clipboard_get_text: {
        description: '[Function]' + i18n.clipboard_get_text.desc,
        available: datasimple.all
    },
	clipboard_has_text: {
        description: '[Function]' + i18n.clipboard_has_text.desc,
        available: datasimple.all
    },
	clipboard_set_text: {
        description: '[Function]' + i18n.clipboard_set_text.desc,
        available: datasimple.all,
        parameters: [
            { label: 'str', documentation: i18n.clipboard_set_text.str }
        ],
        signature: '(str)'
    },
	cloud_file_save: {
        description: '[Function]' + i18n.cloud_file_save.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'filename', documentation: i18n.cloud_file_save.filename },
            { label: 'description', documentation: i18n.cloud_file_save.description }
        ],
        signature: '(filename, description)'
    },
	cloud_string_save: {
        description: '[Function]' + i18n.cloud_string_save.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'data', documentation: i18n.cloud_string_save.data },
            { label: 'description', documentation: i18n.cloud_string_save.description }
        ],
        signature: '(data, description)'
    },
	cloud_synchronise: {
        description: '[Function]' + i18n.cloud_synchronise.desc,
        available: datasimple.gms1
    },
	code_is_compiled: {
        description: '[Function]' + i18n.code_is_compiled.desc,
        available: datasimple.gms1
    },
	collision_circle: {
        description: '[Function]' + i18n.collision_circle.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x1', documentation: i18n.collision_circle.x1 },
            { label: 'y1', documentation: i18n.collision_circle.y1 },
            { label: 'radius', documentation: i18n.collision_circle.radius },
            { label: 'obj', documentation: i18n.collision_circle.obj },
            { label: 'prec', documentation: i18n.collision_circle.prec },
            { label: 'notme', documentation: i18n.collision_circle.notme }
        ],
        signature: '(x1, y1, radius, obj, prec, notme)'
    },
	collision_ellipse: {
        description: '[Function]' + i18n.collision_ellipse.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x1', documentation: i18n.collision_ellipse.x1 },
            { label: 'y1', documentation: i18n.collision_ellipse.y1 },
            { label: 'x2', documentation: i18n.collision_ellipse.x2 },
            { label: 'y2', documentation: i18n.collision_ellipse.y2 },
            { label: 'obj', documentation: i18n.collision_ellipse.obj },
            { label: 'prec', documentation: i18n.collision_ellipse.prec },
            { label: 'notme', documentation: i18n.collision_ellipse.notme }
        ],
        signature: '(x1, y1, x2, y2, obj, prec, notme)'
    },
	collision_line: {
        description: '[Function]' + i18n.collision_line.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x1', documentation: i18n.collision_line.x1 },
            { label: 'y1', documentation: i18n.collision_line.y1 },
            { label: 'x2', documentation: i18n.collision_line.x2 },
            { label: 'y2', documentation: i18n.collision_line.y2 },
            { label: 'obj', documentation: i18n.collision_line.obj },
            { label: 'prec', documentation: i18n.collision_line.prec },
            { label: 'notme', documentation: i18n.collision_line.notme }
        ],
        signature: '(x1, y1, x2, y2, obj, prec, notme)'
    },
	collision_point: {
        description: '[Function]' + i18n.collision_point.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x', documentation: i18n.collision_point.x },
            { label: 'y', documentation: i18n.collision_point.y },
            { label: 'obj', documentation: i18n.collision_point.obj },
            { label: 'prec', documentation: i18n.collision_point.prec },
            { label: 'notme', documentation: i18n.collision_point.notme }
        ],
        signature: '(x, y, obj, prec, notme)'
    },
	collision_rectangle: {
        description: '[Function]' + i18n.collision_rectangle.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x1', documentation: i18n.collision_rectangle.x1 },
            { label: 'y1', documentation: i18n.collision_rectangle.y1 },
            { label: 'x2', documentation: i18n.collision_rectangle.x2 },
            { label: 'y2', documentation: i18n.collision_rectangle.y2 },
            { label: 'obj', documentation: i18n.collision_rectangle.obj },
            { label: 'prec', documentation: i18n.collision_rectangle.prec },
            { label: 'notme', documentation: i18n.collision_rectangle.notme }
        ],
        signature: '(x1, y1, x2, y2, obj, prec, notme)'
    },
    color_get_blue: {
        description: '[Function]' + i18n.color_get_blue.desc,
        available: datasimple.all,
        parameters: [
            { label: 'col', documentation: i18n.color_get_blue.col }
        ],
        signature: '(col)'
    },
	color_get_green: {
        description: '[Function]' + i18n.color_get_green.desc,
        available: datasimple.all,
        parameters: [
            { label: 'col', documentation: i18n.color_get_green.col }
        ],
        signature: '(col)'
    },
	color_get_hue: {
        description: '[Function]' + i18n.color_get_hue.desc,
        available: datasimple.all,
        parameters: [
            { label: 'col', documentation: i18n.color_get_hue.col }
        ],
        signature: '(col)'
    },
	color_get_red: {
        description: '[Function]' + i18n.color_get_red.desc,
        available: datasimple.all,
        parameters: [
            { label: 'col', documentation: i18n.color_get_red.col }
        ],
        signature: '(col)'
    },
	color_get_saturation: {
        description: '[Function]' + i18n.color_get_saturation.desc,
        available: datasimple.all,
        parameters: [
            { label: 'col', documentation: i18n.color_get_saturation.col }
        ],
        signature: '(col)'
    },
	color_get_value: {
        description: '[Function]' + i18n.color_get_value.desc,
        available: datasimple.all,
        parameters: [
            { label: 'col', documentation: i18n.color_get_value.col }
        ],
        signature: '(col)'
    },
	colour_get_blue: {
        description: '[Function]' + i18n.colour_get_blue.desc,
        available: datasimple.all,
        parameters: [
            { label: 'col', documentation: i18n.colour_get_blue.col }
        ],
        signature: '(col)'
    },
	colour_get_green: {
        description: '[Function]' + i18n.colour_get_green.desc,
        available: datasimple.all,
        parameters: [
            { label: 'col', documentation: i18n.colour_get_green.col }
        ],
        signature: '(col)'
    },
	colour_get_hue: {
        description: '[Function]' + i18n.colour_get_hue.desc,
        available: datasimple.all,
        parameters: [
            { label: 'col', documentation: i18n.colour_get_hue.col }
        ],
        signature: '(col)'
    },
	colour_get_red: {
        description: '[Function]' + i18n.colour_get_red.desc,
        available: datasimple.all,
        parameters: [
            { label: 'col', documentation: i18n.colour_get_red.col }
        ],
        signature: '(col)'
    },
	colour_get_saturation: {
        description: '[Function]' + i18n.colour_get_saturation.desc,
        available: datasimple.all,
        parameters: [
            { label: 'col', documentation: i18n.colour_get_saturation.col }
        ],
        signature: '(col)'
    },
	colour_get_value: {
        description: '[Function]' + i18n.colour_get_value.desc,
        available: datasimple.all,
        parameters: [
            { label: 'col', documentation: i18n.colour_get_value.col }
        ],
        signature: '(col)'
    },
	cos: {
        description: '[Function]' + i18n.cos.desc,
        available: datasimple.all,
        parameters: [
            { label: 'radian_angle', documentation: i18n.cos.radian_angle }
        ],
        signature: '(radian_angle)'
    },
	darccos: {
        description: '[Function]' + i18n.darccos.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x', documentation: i18n.darccos.x }
        ],
        signature: '(x)'
    },
	darcsin: {
        description: '[Function]' + i18n.darcsin.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x', documentation: i18n.darcsin.x }
        ],
        signature: '(x)'
    },
	darctan: {
        description: '[Function]' + i18n.darctan.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x', documentation: i18n.darctan.x }
        ],
        signature: '(x)'
    },
	darctan2: {
        description: '[Function]' + i18n.darctan2.desc,
        available: datasimple.all,
        parameters: [
            { label: 'y', documentation: i18n.darctan2.y },
            { label: 'x', documentation: i18n.darctan2.x }
        ],
        signature: '(y, x)'
    },
	date_compare_date: {
        description: '[Function]' + i18n.date_compare_date.desc,
        available: datasimple.all,
        parameters: [
            { label: 'date1', documentation: i18n.date_compare_date.date1 },
            { label: 'date2', documentation: i18n.date_compare_date.date2 }
        ],
        signature: '(date1, date2)'
    },
	date_compare_datetime: {
        description: '[Function]' + i18n.date_compare_datetime.desc,
        available: datasimple.all,
        parameters: [
            { label: 'date1', documentation: i18n.date_compare_datetime.date1 },
            { label: 'date2', documentation: i18n.date_compare_datetime.date2 }
        ],
        signature: '(date1, date2)'
    },
	date_compare_time: {
        description: '[Function]' + i18n.date_compare_time.desc,
        available: datasimple.all,
        parameters: [
            { label: 'date1', documentation: i18n.date_compare_time.date1 },
            { label: 'date2', documentation: i18n.date_compare_time.date2 }
        ],
        signature: '(date1, date2)'
    },
	date_create_datetime: {
        description: '[Function]' + i18n.date_create_datetime.desc,
        available: datasimple.all,
        parameters: [
            { label: 'year', documentation: i18n.date_create_datetime.year },
            { label: 'month', documentation: i18n.date_create_datetime.month },
            { label: 'day', documentation: i18n.date_create_datetime.day },
            { label: 'hour', documentation: i18n.date_create_datetime.hour },
            { label: 'minute', documentation: i18n.date_create_datetime.minute },
            { label: 'second', documentation: i18n.date_create_datetime.second }
        ],
        signature: '(year, month, day, hour, minute, second)'
    },
	date_current_datetime: {
        description: '[Function]' + i18n.date_current_datetime.desc,
        available: datasimple.all
    },
	date_datetime_string: {
        description: '[Function]' + i18n.date_datetime_string.desc,
        available: datasimple.all,
        parameters: [
            { label: 'date', documentation: i18n.date_datetime_string.date }
        ],
        signature: '(date)'
    },
	date_date_of: {
        description: '[Function]' + i18n.date_date_of.desc,
        available: datasimple.all,
        parameters: [
            { label: 'date', documentation: i18n.date_date_of.date }
        ],
        signature: '(date)'
    },
	date_date_string: {
        description: '[Function]' + i18n.date_date_string.desc,
        available: datasimple.all,
        parameters: [
            { label: 'date', documentation: i18n.date_date_string.date }
        ],
        signature: '(date)'
    },
	date_days_in_month: {
        description: '[Function]' + i18n.date_days_in_month.desc,
        available: datasimple.all,
        parameters: [
            { label: 'date', documentation: i18n.date_days_in_month.date }
        ],
        signature: '(date)'
    },
	date_days_in_year: {
        description: '[Function]' + i18n.date_days_in_year.desc,
        available: datasimple.all,
        parameters: [
            { label: 'date', documentation: i18n.date_days_in_year.date }
        ],
        signature: '(date)'
    },
	date_day_span: {
        description: '[Function]' + i18n.date_day_span.desc,
        available: datasimple.all,
        parameters: [
            { label: 'date1', documentation: i18n.date_day_span.date1 },
            { label: 'date2', documentation: i18n.date_day_span.date2 }
        ],
        signature: '(date1, date2)'
    },
	date_get_day: {
        description: '[Function]' + i18n.date_get_day.desc,
        available: datasimple.all,
        parameters: [
            { label: 'date', documentation: i18n.date_get_day.date }
        ],
        signature: '(date)'
    },
	date_get_day_of_year: {
        description: '[Function]' + i18n.date_get_day_of_year.desc,
        available: datasimple.all,
        parameters: [
            { label: 'date', documentation: i18n.date_get_day_of_year.date }
        ],
        signature: '(date)'
    },
	date_get_hour: {
        description: '[Function]' + i18n.date_get_hour.desc,
        available: datasimple.all,
        parameters: [
            { label: 'date', documentation: i18n.date_get_hour.date }
        ],
        signature: '(date)'
    },
	date_get_hour_of_year: {
        description: '[Function]' + i18n.date_get_hour_of_year.desc,
        available: datasimple.all,
        parameters: [
            { label: 'date', documentation: i18n.date_get_hour_of_year.date }
        ],
        signature: '(date)'
    },
	date_get_minute: {
        description: '[Function]' + i18n.date_get_minute.desc,
        available: datasimple.all,
        parameters: [
            { label: 'date', documentation: i18n.date_get_minute.date }
        ],
        signature: '(date)'
    },
	date_get_minute_of_year: {
        description: '[Function]' + i18n.date_get_minute_of_year.desc,
        available: datasimple.all,
        parameters: [
            { label: 'date', documentation: i18n.date_get_minute_of_year.date }
        ],
        signature: '(date)'
    },
	date_get_month: {
        description: '[Function]' + i18n.date_get_month.desc,
        available: datasimple.all,
        parameters: [
            { label: 'date', documentation: i18n.date_get_month.date }
        ],
        signature: '(date)'
    },
	date_get_second: {
        description: '[Function]' + i18n.date_get_second.desc,
        available: datasimple.all,
        parameters: [
            { label: 'date', documentation: i18n.date_get_second.date }
        ],
        signature: '(date)'
    },
	date_get_second_of_year: {
        description: '[Function]' + i18n.date_get_second_of_year.desc,
        available: datasimple.all,
        parameters: [
            { label: 'date', documentation: i18n.date_get_second_of_year.date }
        ],
        signature: '(date)'
    },
	date_get_timezone: {
        description: '[Function]' + i18n.date_get_timezone.desc,
        available: datasimple.all
    },
	date_get_week: {
        description: '[Function]' + i18n.date_get_week.desc,
        available: datasimple.all,
        parameters: [
            { label: 'date', documentation: i18n.date_get_week.date }
        ],
        signature: '(date)'
    },
	date_get_weekday: {
        description: '[Function]' + i18n.date_get_weekday.desc,
        available: datasimple.all,
        parameters: [
            { label: 'date', documentation: i18n.date_get_weekday.date }
        ],
        signature: '(date)'
    },
	date_get_year: {
        description: '[Function]' + i18n.date_get_year.desc,
        available: datasimple.all,
        parameters: [
            { label: 'date', documentation: i18n.date_get_year.date }
        ],
        signature: '(date)'
    },
	date_hour_span: {
        description: '[Function]' + i18n.date_hour_span.desc,
        available: datasimple.all,
        parameters: [
            { label: 'date1', documentation: i18n.date_hour_span.date1 },
            { label: 'date2', documentation: i18n.date_hour_span.date2 }
        ],
        signature: '(date1, date2)'
    },
	date_inc_day: {
        description: '[Function]' + i18n.date_inc_day.desc,
        available: datasimple.all,
        parameters: [
            { label: 'date', documentation: i18n.date_inc_day.date },
            { label: 'amount', documentation: i18n.date_inc_day.amount }
        ],
        signature: '(date, amount)'
    },
	date_inc_hour: {
        description: '[Function]' + i18n.date_inc_hour.desc,
        available: datasimple.all,
        parameters: [
            { label: 'date', documentation: i18n.date_inc_hour.date },
            { label: 'amount', documentation: i18n.date_inc_hour.amount }
        ],
        signature: '(date, amount)'
    },
	date_inc_minute: {
        description: '[Function]' + i18n.date_inc_minute.desc,
        available: datasimple.all,
        parameters: [
            { label: 'date', documentation: i18n.date_inc_minute.date },
            { label: 'amount', documentation: i18n.date_inc_minute.amount }
        ],
        signature: '(date, amount)'
    },
	date_inc_month: {
        description: '[Function]' + i18n.date_inc_month.desc,
        available: datasimple.all,
        parameters: [
            { label: 'date', documentation: i18n.date_inc_month.date },
            { label: 'amount', documentation: i18n.date_inc_month.amount }
        ],
        signature: '(date, amount)'
    },
	date_inc_second: {
        description: '[Function]' + i18n.date_inc_second.desc,
        available: datasimple.all,
        parameters: [
            { label: 'date', documentation: i18n.date_inc_second.date },
            { label: 'amount', documentation: i18n.date_inc_second.amount }
        ],
        signature: '(date, amount)'
    },
	date_inc_week: {
        description: '[Function]' + i18n.date_inc_week.desc,
        available: datasimple.all,
        parameters: [
            { label: 'date', documentation: i18n.date_inc_week.date },
            { label: 'amount', documentation: i18n.date_inc_week.amount }
        ],
        signature: '(date, amount)'
    },
	date_inc_year: {
        description: '[Function]' + i18n.date_inc_year.desc,
        available: datasimple.all,
        parameters: [
            { label: 'date', documentation: i18n.date_inc_year.date },
            { label: 'amount', documentation: i18n.date_inc_year.amount }
        ],
        signature: '(date, amount)'
    },
	date_is_today: {
        description: '[Function]' + i18n.date_is_today.desc,
        available: datasimple.all,
        parameters: [
            { label: 'date', documentation: i18n.date_is_today.date }
        ],
        signature: '(date)'
    },
	date_leap_year: {
        description: '[Function]' + i18n.date_leap_year.desc,
        available: datasimple.all,
        parameters: [
            { label: 'date', documentation: i18n.date_leap_year.date }
        ],
        signature: '(date)'
    },
	date_minute_span: {
        description: '[Function]' + i18n.date_minute_span.desc,
        available: datasimple.all,
        parameters: [
            { label: 'date1', documentation: i18n.date_minute_span.date1 },
            { label: 'date2', documentation: i18n.date_minute_span.date2 }
        ],
        signature: '(date1, date2)'
    },
	date_month_span: {
        description: '[Function]' + i18n.date_month_span.desc,
        available: datasimple.all,
        parameters: [
            { label: 'date1', documentation: i18n.date_month_span.date1 },
            { label: 'date2', documentation: i18n.date_month_span.date2 }
        ],
        signature: '(date1, date2)'
    },
	date_second_span: {
        description: '[Function]' + i18n.date_second_span.desc,
        available: datasimple.all,
        parameters: [
            { label: 'date1', documentation: i18n.date_second_span.date1 },
            { label: 'date2', documentation: i18n.date_second_span.date2 }
        ],
        signature: '(date1, date2)'
    },
	date_set_timezone: {
        description: '[Function]' + i18n.date_set_timezone.desc,
        available: datasimple.all,
        parameters: [
            { label: 'timezone', documentation: i18n.date_set_timezone.timezone }
        ],
        signature: '(timezone)'
    },
	date_time_of: {
        description: '[Function]' + i18n.date_time_of.desc,
        available: datasimple.all,
        parameters: [
            { label: 'date', documentation: i18n.date_time_of.date }
        ],
        signature: '(date)'
    },
	date_time_string: {
        description: '[Function]' + i18n.date_time_string.desc,
        available: datasimple.all,
        parameters: [
            { label: 'date', documentation: i18n.date_time_string.date }
        ],
        signature: '(date)'
    },
	date_valid_datetime: {
        description: '[Function]' + i18n.date_valid_datetime.desc,
        available: datasimple.all,
        parameters: [
            { label: 'year', documentation: i18n.date_valid_datetime.year },
            { label: 'month', documentation: i18n.date_valid_datetime.month },
            { label: 'day', documentation: i18n.date_valid_datetime.day },
            { label: 'hour', documentation: i18n.date_valid_datetime.hour },
            { label: 'minute', documentation: i18n.date_valid_datetime.minute },
            { label: 'second', documentation: i18n.date_valid_datetime.second }
        ],
        signature: '(year, month, day, hour, minute, second)'
    },
	date_week_span: {
        description: '[Function]' + i18n.date_week_span.desc,
        available: datasimple.all,
        parameters: [
            { label: 'date1', documentation: i18n.date_week_span.date1 },
            { label: 'date2', documentation: i18n.date_week_span.date2 }
        ],
        signature: '(date1, date2)'
    },
	date_year_span: {
        description: '[Function]' + i18n.date_year_span.desc,
        available: datasimple.all,
        parameters: [
            { label: 'date1', documentation: i18n.date_year_span.date1 },
            { label: 'date2', documentation: i18n.date_year_span.date2 }
        ],
        signature: '(date1, date2)'
    },
	dcos: {
        description: '[Function]' + i18n.dcos.desc,
        available: datasimple.all,
        parameters: [
            { label: 'degree_angle', documentation: i18n.dcos.degree_angle }
        ],
        signature: '(degree_angle)'
    },
	debug_event: {
        description: '[Function]' + i18n.debug_event.desc,
        available: datasimple.all,
        parameters: [
            { label: 'str', documentation: i18n.debug_event.str }
        ],
        signature: '(str)'
    },
	degtorad: {
        description: '[Function]' + i18n.degtorad.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'x', documentation: i18n.degtorad.x }
        ],
        signature: '(x)'
    },
	device_get_tilt_x: {
        description: '[Function]' + i18n.device_get_tilt_x.desc,
        available: datasimple.gms1
    },
	device_get_tilt_y: {
        description: '[Function]' + i18n.device_get_tilt_y.desc,
        available: datasimple.gms1
    },
	device_get_tilt_z: {
        description: '[Function]' + i18n.device_get_tilt_z.desc,
        available: datasimple.gms1
    },
	device_is_keypad_open: {
        description: '[Function]' + i18n.device_is_keypad_open.desc,
        available: datasimple.gms1
    },
	device_mouse_check_button: {
        description: '[Function]' + i18n.device_mouse_check_button.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'device', documentation: i18n.device_mouse_check_button.device },
            { label: 'button', documentation: i18n.device_mouse_check_button.button }
        ],
        signature: '(device, button)'
    },
	device_mouse_check_button_pressed: {
        description: '[Function]' + i18n.device_mouse_check_button_pressed.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'device', documentation: i18n.device_mouse_check_button_pressed.device },
            { label: 'button', documentation: i18n.device_mouse_check_button_pressed.button }
        ],
        signature: '(device, button)'
    },
	device_mouse_check_button_released: {
        description: '[Function]' + i18n.device_mouse_check_button_released.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'device', documentation: i18n.device_mouse_check_button_released.device },
            { label: 'button', documentation: i18n.device_mouse_check_button_released.button }
        ],
        signature: '(device, button)'
    },
	device_mouse_dbclick_enable: {
        description: '[Function]' + i18n.device_mouse_dbclick_enable.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'enable', documentation: i18n.device_mouse_dbclick_enable.enable }
        ],
        signature: '(enable)'
    },
	device_mouse_raw_x: {
        description: '[Function]' + i18n.device_mouse_raw_x.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'device', documentation: i18n.device_mouse_raw_x.device }
        ],
        signature: '(device)'
    },
	device_mouse_raw_y: {
        description: '[Function]' + i18n.device_mouse_raw_y.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'device', documentation: i18n.device_mouse_raw_y.device }
        ],
        signature: '(device)'
    },
	device_mouse_x: {
        description: '[Function]' + i18n.device_mouse_x.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'device', documentation: i18n.device_mouse_x.device }
        ],
        signature: '(device)'
    },
	device_mouse_x_to_gui: {
        description: '[Function]' + i18n.device_mouse_x_to_gui.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'device', documentation: i18n.device_mouse_x_to_gui.device }
        ],
        signature: '(device)'
    },
	device_mouse_y: {
        description: '[Function]' + i18n.device_mouse_y.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'device', documentation: i18n.device_mouse_y.device }
        ],
        signature: '(device)'
    },
	device_mouse_y_to_gui: {
        description: '[Function]' + i18n.device_mouse_y_to_gui.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'device', documentation: i18n.device_mouse_y_to_gui.device }
        ],
        signature: '(device)'
    },
	directory_create: {
        description: '[Function]' + i18n.directory_create.desc,
        available: datasimple.all,
        parameters: [
            { label: 'dname', documentation: i18n.directory_create.dname }
        ],
        signature: '(dname)'
    },
	directory_destroy: {
        description: '[Function]' + i18n.directory_destroy.desc,
        available: datasimple.all,
        parameters: [
            { label: 'dname', documentation: i18n.directory_destroy.dname }
        ],
        signature: '(dname)'
    },
	directory_exists: {
        description: '[Function]' + i18n.directory_exists.desc,
        available: datasimple.all,
        parameters: [
            { label: 'dname', documentation: i18n.directory_exists.dname }
        ],
        signature: '(dname)'
    },
	display_get_dpi_x: {
        description: '[Function]' + i18n.display_get_dpi_x.desc,
        available: datasimple.gms1
    },
	display_get_dpi_y: {
        description: '[Function]' + i18n.display_get_dpi_y.desc,
        available: datasimple.gms1
    },
	display_get_gui_height: {
        description: '[Function]' + i18n.display_get_gui_height.desc,
        available: datasimple.gms1
    },
	display_get_gui_width: {
        description: '[Function]' + i18n.display_get_gui_width.desc,
        available: datasimple.gms1
    },
	
    display_get_colordepth: {
        description: '[Function]' + i18n.display_get_colordepth.desc,
        available: datasimple.gms1
    },
	display_get_height: {
        description: '[Function]' + i18n.display_get_height.desc,
        available: datasimple.gms1
    },
	display_get_orientation: {
        description: '[Function]' + i18n.display_get_orientation.desc,
        available: datasimple.gms1
    },
	display_get_width: {
        description: '[Function]' + i18n.display_get_width.desc,
        available: datasimple.gms1
    },
	display_mouse_get_x: {
        description: '[Function]' + i18n.display_mouse_get_x.desc,
        available: datasimple.gms1
    },
	display_mouse_get_y: {
        description: '[Function]' + i18n.display_mouse_get_y.desc,
        available: datasimple.gms1
    },
	display_set_gui_maximise: {
        description: '[Function]' + i18n.display_set_gui_maximise.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'xscale', documentation: i18n.display_set_gui_maximise.xscale },
            { label: 'yscale', documentation: i18n.display_set_gui_maximise.yscale },
            { label: 'xoffset', documentation: i18n.display_set_gui_maximise.xoffset },
            { label: 'yoffset', documentation: i18n.display_set_gui_maximise.yoffset }
        ],
        signature: '(xscale, yscale, xoffset, yoffset)'
    },
	display_set_gui_size: {
        description: '[Function]' + i18n.display_set_gui_size.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'width', documentation: i18n.display_set_gui_size.width },
            { label: 'height', documentation: i18n.display_set_gui_size.height }
        ],
        signature: '(width, height)'
    },
	display_set_ui_visibility: {
        description: '[Function]' + i18n.display_set_ui_visibility.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'flags', documentation: i18n.display_set_ui_visibility.flags }
        ],
        signature: '(flags)'
    },
	display_mouse_set: {
        description: '[Function]' + i18n.display_mouse_set.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'x', documentation: i18n.display_mouse_set.x },
            { label: 'y', documentation: i18n.display_mouse_set.y }
        ],
        signature: '(x, y)'
    },
	display_reset: {
        description: '[Function]' + i18n.display_reset.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'aa_level', documentation: i18n.display_reset.aa_level },
            { label: 'vsync', documentation: i18n.display_reset.vsync }
        ],
        signature: '(aa_level, vsync)'
    },
	distance_to_object: {
        description: '[Function]' + i18n.distance_to_object.desc,
        available: datasimple.all,
        parameters: [
            { label: 'obj', documentation: i18n.distance_to_object.obj }
        ],
        signature: '(obj)'
    },
	distance_to_point: {
        description: '[Function]' + i18n.distance_to_point.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x', documentation: i18n.distance_to_point.x },
            { label: 'y', documentation: i18n.distance_to_point.y }
        ],
        signature: '(x, y)'
    },
	dot_product: {
        description: '[Function]' + i18n.dot_product.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'x1', documentation: i18n.dot_product.x1 },
            { label: 'y1', documentation: i18n.dot_product.y1 },
            { label: 'x2', documentation: i18n.dot_product.x2 },
            { label: 'y2', documentation: i18n.dot_product.y2 }
        ],
        signature: '(x1, y1, x2, y2)'
    },
	dot_product_3d: {
        description: '[Function]' + i18n.dot_product_3d.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'x1', documentation: i18n.dot_product_3d.x1 },
            { label: 'y1', documentation: i18n.dot_product_3d.y1 },
            { label: 'z1', documentation: i18n.dot_product_3d.z1 },
            { label: 'x2', documentation: i18n.dot_product_3d.x2 },
            { label: 'y2', documentation: i18n.dot_product_3d.y2 },
            { label: 'z2', documentation: i18n.dot_product_3d.z2 }
        ],
        signature: '(x1, y1, z1, x2, y2, z2)'
    },
	dot_product_3d_normalised: {
        description: '[Function]' + i18n.dot_product_3d_normalised.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'x1', documentation: i18n.dot_product_3d_normalised.x1 },
            { label: 'y1', documentation: i18n.dot_product_3d_normalised.y1 },
            { label: 'z1', documentation: i18n.dot_product_3d_normalised.z1 },
            { label: 'x2', documentation: i18n.dot_product_3d_normalised.x2 },
            { label: 'y2', documentation: i18n.dot_product_3d_normalised.y2 },
            { label: 'z2', documentation: i18n.dot_product_3d_normalised.z2 }
        ],
        signature: '(x1, y1, z1, x2, y2, z2)'
    },
	dot_product_normalised: {
        description: '[Function]' + i18n.dot_product_normalised.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'x1', documentation: i18n.dot_product_normalised.x1 },
            { label: 'y1', documentation: i18n.dot_product_normalised.y1 },
            { label: 'x2', documentation: i18n.dot_product_normalised.x2 },
            { label: 'y2', documentation: i18n.dot_product_normalised.y2 }
        ],
        signature: '(x1, y1, x2, y2)'
    },
	draw_arrow: {
        description: '[Function]' + i18n.draw_arrow.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x1', documentation: i18n.draw_arrow.x1 },
            { label: 'y1', documentation: i18n.draw_arrow.y1 },
            { label: 'x2', documentation: i18n.draw_arrow.x2 },
            { label: 'y2', documentation: i18n.draw_arrow.y2 },
            { label: 'size', documentation: i18n.draw_arrow.size }
        ],
        signature: '(x1, y1, x2, y2, size)'
    },
	draw_button: {
        description: '[Function]' + i18n.draw_button.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x1', documentation: i18n.draw_button.x1 },
            { label: 'y1', documentation: i18n.draw_button.y1 },
            { label: 'x2', documentation: i18n.draw_button.x2 },
            { label: 'y2', documentation: i18n.draw_button.y2 },
            { label: 'up', documentation: i18n.draw_button.up }
        ],
        signature: '(x1, y1, x2, y2, up)'
    },
	draw_circle: {
        description: '[Function]' + i18n.draw_circle.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x', documentation: i18n.draw_circle.x },
            { label: 'y', documentation: i18n.draw_circle.y },
            { label: 'r', documentation: i18n.draw_circle.r },
            { label: 'outline', documentation: i18n.draw_circle.outline }
        ],
        signature: '(x, y, r, outline)'
    },
	draw_circle_color: {
        description: '[Function]' + i18n.draw_circle_color.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x', documentation: i18n.draw_circle_color.x },
            { label: 'y', documentation: i18n.draw_circle_color.y },
            { label: 'r', documentation: i18n.draw_circle_color.r },
            { label: 'col1', documentation: i18n.draw_circle_color.col1 },
            { label: 'col2', documentation: i18n.draw_circle_color.col2 },
            { label: 'outline', documentation: i18n.draw_circle_color.outline }
        ],
        signature: '(x, y, r, col1, col2, outline)'
    },
	draw_circle_colour: {
        description: '[Function]' + i18n.draw_circle_colour.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x', documentation: i18n.draw_circle_colour.x },
            { label: 'y', documentation: i18n.draw_circle_colour.y },
            { label: 'r', documentation: i18n.draw_circle_colour.r },
            { label: 'col1', documentation: i18n.draw_circle_colour.col1 },
            { label: 'col2', documentation: i18n.draw_circle_colour.col2 },
            { label: 'outline', documentation: i18n.draw_circle_colour.outline }
        ],
        signature: '(x, y, r, col1, col2, outline)'
    },
	draw_clear: {
        description: '[Function]' + i18n.draw_clear.desc,
        available: datasimple.all,
        parameters: [
            { label: 'col', documentation: i18n.draw_clear.col }
        ],
        signature: '(col)'
    },
	draw_clear_alpha: {
        description: '[Function]' + i18n.draw_clear_alpha.desc,
        available: datasimple.all,
        parameters: [
            { label: 'col', documentation: i18n.draw_clear_alpha.col },
            { label: 'alpha', documentation: i18n.draw_clear_alpha.alpha }
        ],
        signature: '(col, alpha)'
    },
	draw_ellipse: {
        description: '[Function]' + i18n.draw_ellipse.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x1', documentation: i18n.draw_ellipse.x1 },
            { label: 'y1', documentation: i18n.draw_ellipse.y1 },
            { label: 'x2', documentation: i18n.draw_ellipse.x2 },
            { label: 'y2', documentation: i18n.draw_ellipse.y2 },
            { label: 'outline', documentation: i18n.draw_ellipse.outline }
        ],
        signature: '(x1, y1, x2, y2, outline)'
    },
	draw_ellipse_color: {
        description: '[Function]' + i18n.draw_ellipse_color.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x1', documentation: i18n.draw_ellipse_color.x1 },
            { label: 'y1', documentation: i18n.draw_ellipse_color.y1 },
            { label: 'x2', documentation: i18n.draw_ellipse_color.x2 },
            { label: 'y2', documentation: i18n.draw_ellipse_color.y2 },
            { label: 'col1', documentation: i18n.draw_ellipse_color.col1 },
            { label: 'col2', documentation: i18n.draw_ellipse_color.col2 },
            { label: 'outline', documentation: i18n.draw_ellipse_color.outline }
        ],
        signature: '(x1, y1, x2, y2, col1, col2, outline)'
    },
	draw_ellipse_colour: {
        description: '[Function]' + i18n.draw_ellipse_colour.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x1', documentation: i18n.draw_ellipse_colour.x1 },
            { label: 'y1', documentation: i18n.draw_ellipse_colour.y1 },
            { label: 'x2', documentation: i18n.draw_ellipse_colour.x2 },
            { label: 'y2', documentation: i18n.draw_ellipse_colour.y2 },
            { label: 'col1', documentation: i18n.draw_ellipse_colour.col1 },
            { label: 'col2', documentation: i18n.draw_ellipse_colour.col2 },
            { label: 'outline', documentation: i18n.draw_ellipse_colour.outline }
        ],
        signature: '(x1, y1, x2, y2, col1, col2, outline)'
    },
	draw_enable_alphablend: {
        description: '[Function]' + i18n.draw_enable_alphablend.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'enable', documentation: i18n.draw_enable_alphablend.enable }
        ],
        signature: '(enable)'
    },
	draw_enable_drawevent: {
        description: '[Function]' + i18n.draw_enable_drawevent.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'enable', documentation: i18n.draw_enable_drawevent.enable }
        ],
        signature: '(enable)'
    },
	draw_enable_swf_aa: {
        description: '[Function]' + i18n.draw_enable_swf_aa.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'enable', documentation: i18n.draw_enable_swf_aa.enable }
        ],
        signature: '(enable)'
    },
	draw_flush: {
        description: '[Function]' + i18n.draw_flush.desc,
        available: datasimple.all
    },
	draw_getpixel: {
        description: '[Function]' + i18n.draw_getpixel.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x', documentation: i18n.draw_getpixel.x },
            { label: 'y', documentation: i18n.draw_getpixel.y }
        ],
        signature: '(x, y)'
    },
	draw_getpixel_ext: {
        description: '[Function]' + i18n.draw_getpixel_ext.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x', documentation: i18n.draw_getpixel_ext.x },
            { label: 'y', documentation: i18n.draw_getpixel_ext.y }
        ],
        signature: '(x, y)'
    },
	draw_get_alpha: {
        description: '[Function]' + i18n.draw_get_alpha.desc,
        available: datasimple.all
    },
	draw_get_alpha_test: {
        description: '[Function]' + i18n.draw_get_alpha_test.desc,
        available: datasimple.all
    },
	draw_get_alpha_test_ref_value: {
        description: '[Function]' + i18n.draw_get_alpha_test_ref_value.desc,
        available: datasimple.all
    },
	draw_get_color: {
        description: '[Function]' + i18n.draw_get_color.desc,
        available: datasimple.all
    },
	draw_get_colour: {
        description: '[Function]' + i18n.draw_get_colour.desc,
        available: datasimple.all
    },
	draw_get_swf_aa_level: {
        description: '[Function]' + i18n.draw_get_swf_aa_level.desc,
        available: datasimple.all
    },
	draw_healthbar: {
        description: '[Function]' + i18n.draw_healthbar.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x1', documentation: i18n.draw_healthbar.x1 },
            { label: 'y1', documentation: i18n.draw_healthbar.y1 },
            { label: 'x2', documentation: i18n.draw_healthbar.x2 },
            { label: 'y2', documentation: i18n.draw_healthbar.y2 },
            { label: 'amount', documentation: i18n.draw_healthbar.amount },
            { label: 'backcol', documentation: i18n.draw_healthbar.backcol },
            { label: 'mincol', documentation: i18n.draw_healthbar.mincol },
            { label: 'maxcol', documentation: i18n.draw_healthbar.maxcol },
            { label: 'direction', documentation: i18n.draw_healthbar.direction },
            { label: 'showback', documentation: i18n.draw_healthbar.showback },
            { label: 'showborder', documentation: i18n.draw_healthbar.showborder }
        ],
        signature: '(x1, y1, x2, y2, amount, backcol, mincol, maxcol, direction, showback, showborder)'
    },
	draw_highscore: {
        description: '[Function]' + i18n.draw_highscore.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x1', documentation: i18n.draw_highscore.x1 },
            { label: 'y1', documentation: i18n.draw_highscore.y1 },
            { label: 'x2', documentation: i18n.draw_highscore.x2 },
            { label: 'y2', documentation: i18n.draw_highscore.y2 }
        ],
        signature: '(x1, y1, x2, y2)'
    },
	draw_line: {
        description: '[Function]' + i18n.draw_line.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x1', documentation: i18n.draw_line.x1 },
            { label: 'y1', documentation: i18n.draw_line.y1 },
            { label: 'x2', documentation: i18n.draw_line.x2 },
            { label: 'y2', documentation: i18n.draw_line.y2 }
        ],
        signature: '(x1, y1, x2, y2)'
    },
	draw_line_color: {
        description: '[Function]' + i18n.draw_line_color.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x1', documentation: i18n.draw_line_color.x1 },
            { label: 'y1', documentation: i18n.draw_line_color.y1 },
            { label: 'x2', documentation: i18n.draw_line_color.x2 },
            { label: 'y2', documentation: i18n.draw_line_color.y2 },
            { label: 'col1', documentation: i18n.draw_line_color.col1 },
            { label: 'col2', documentation: i18n.draw_line_color.col2 }
        ],
        signature: '(x1, y1, x2, y2, col1, col2)'
    },
	draw_line_colour: {
        description: '[Function]' + i18n.draw_line_colour.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x1', documentation: i18n.draw_line_colour.x1 },
            { label: 'y1', documentation: i18n.draw_line_colour.y1 },
            { label: 'x2', documentation: i18n.draw_line_colour.x2 },
            { label: 'y2', documentation: i18n.draw_line_colour.y2 },
            { label: 'col1', documentation: i18n.draw_line_colour.col1 },
            { label: 'col2', documentation: i18n.draw_line_colour.col2 }
        ],
        signature: '(x1, y1, x2, y2, col1, col2)'
    },
	draw_line_width: {
        description: '[Function]' + i18n.draw_line_width.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x1', documentation: i18n.draw_line_width.x1 },
            { label: 'y1', documentation: i18n.draw_line_width.y1 },
            { label: 'x2', documentation: i18n.draw_line_width.x2 },
            { label: 'y2', documentation: i18n.draw_line_width.y2 },
            { label: 'w', documentation: i18n.draw_line_width.w }
        ],
        signature: '(x1, y1, x2, y2, w)'
    },
	draw_line_width_color: {
        description: '[Function]' + i18n.draw_line_width_color.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x1', documentation: i18n.draw_line_width_color.x1 },
            { label: 'y1', documentation: i18n.draw_line_width_color.y1 },
            { label: 'x2', documentation: i18n.draw_line_width_color.x2 },
            { label: 'y2', documentation: i18n.draw_line_width_color.y2 },
            { label: 'w', documentation: i18n.draw_line_width_color.w },
            { label: 'col1', documentation: i18n.draw_line_width_color.col1 },
            { label: 'col2', documentation: i18n.draw_line_width_color.col2 }
        ],
        signature: '(x1, y1, x2, y2, w, col1, col2)'
    },
	draw_line_width_colour: {
        description: '[Function]' + i18n.draw_line_width_colour.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x1', documentation: i18n.draw_line_width_colour.x1 },
            { label: 'y1', documentation: i18n.draw_line_width_colour.y1 },
            { label: 'x2', documentation: i18n.draw_line_width_colour.x2 },
            { label: 'y2', documentation: i18n.draw_line_width_colour.y2 },
            { label: 'w', documentation: i18n.draw_line_width_colour.w },
            { label: 'col1', documentation: i18n.draw_line_width_colour.col1 },
            { label: 'col2', documentation: i18n.draw_line_width_colour.col2 }
        ],
        signature: '(x1, y1, x2, y2, w, col1, col2)'
    },
	draw_path: {
        description: '[Function]' + i18n.draw_path.desc,
        available: datasimple.all,
        parameters: [
            { label: 'path', documentation: i18n.draw_path.path },
            { label: 'x1', documentation: i18n.draw_path.x1 },
            { label: 'y1', documentation: i18n.draw_path.y1 },
            { label: 'absolute', documentation: i18n.draw_path.absolute }
        ],
        signature: '(path, x, y, absolute)'
    },
	draw_point: {
        description: '[Function]' + i18n.draw_point.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x', documentation: i18n.draw_point.x },
            { label: 'y', documentation: i18n.draw_point.y }
        ],
        signature: '(x, y)'
    },
	draw_point_color: {
        description: '[Function]' + i18n.draw_point_color.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x', documentation: i18n.draw_point_color.x },
            { label: 'y', documentation: i18n.draw_point_color.y },
            { label: 'col', documentation: i18n.draw_point_color.col }
        ],
        signature: '(x, y, col1)'
    },
	draw_point_colour: {
        description: '[Function]' + i18n.draw_point_colour.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x', documentation: i18n.draw_point_colour.x },
            { label: 'y', documentation: i18n.draw_point_colour.y },
            { label: 'col', documentation: i18n.draw_point_colour.col }
        ],
        signature: '(x, y, col1)'
    },
	draw_primitive_begin: {
        description: '[Function]' + i18n.draw_primitive_begin.desc,
        available: datasimple.all,
        parameters: [
            { label: 'kind', documentation: i18n.draw_primitive_begin.kind }
        ],
        signature: '(kind)'
    },
	draw_primitive_begin_texture: {
        description: '[Function]' + i18n.draw_primitive_begin_texture.desc,
        available: datasimple.all,
        parameters: [
            { label: 'kind', documentation: i18n.draw_primitive_begin_texture.kind },
            { label: 'texid', documentation: i18n.draw_primitive_begin_texture.texid }
        ],
        signature: '(kind, texid)'
    },
	draw_primitive_end: {
        description: '[Function]' + i18n.draw_primitive_end.desc,
        available: datasimple.all
    },
	draw_rectangle: {
        description: '[Function]' + i18n.draw_rectangle.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x1', documentation: i18n.draw_rectangle.x1 },
            { label: 'y1', documentation: i18n.draw_rectangle.y1 },
            { label: 'x2', documentation: i18n.draw_rectangle.x2 },
            { label: 'y2', documentation: i18n.draw_rectangle.y2 },
            { label: 'outline', documentation: i18n.draw_rectangle.outline }
        ],
        signature: '(x1, y1, x2, y2, outline)'
    },
	draw_rectangle_color: {
        description: '[Function]' + i18n.draw_rectangle_color.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x1', documentation: i18n.draw_rectangle_color.x1 },
            { label: 'y1', documentation: i18n.draw_rectangle_color.y1 },
            { label: 'x2', documentation: i18n.draw_rectangle_color.x2 },
            { label: 'y2', documentation: i18n.draw_rectangle_color.y2 },
            { label: 'col1', documentation: i18n.draw_rectangle_color.col1 },
            { label: 'col2', documentation: i18n.draw_rectangle_color.col2 },
            { label: 'col3', documentation: i18n.draw_rectangle_color.col3 },
            { label: 'col4', documentation: i18n.draw_rectangle_color.col4 },
            { label: 'outline', documentation: i18n.draw_rectangle_color.outline }
        ],
        signature: '(x1, y1, x2, y2, col1, col2, col3, col4, outline)'
    },
	draw_rectangle_colour: {
        description: '[Function]' + i18n.draw_rectangle_colour.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x1', documentation: i18n.draw_rectangle_colour.x1 },
            { label: 'y1', documentation: i18n.draw_rectangle_colour.y1 },
            { label: 'x2', documentation: i18n.draw_rectangle_colour.x2 },
            { label: 'y2', documentation: i18n.draw_rectangle_colour.y2 },
            { label: 'col1', documentation: i18n.draw_rectangle_colour.col1 },
            { label: 'col2', documentation: i18n.draw_rectangle_colour.col2 },
            { label: 'col3', documentation: i18n.draw_rectangle_colour.col3 },
            { label: 'col4', documentation: i18n.draw_rectangle_colour.col4 },
            { label: 'outline', documentation: i18n.draw_rectangle_colour.outline }
        ],
        signature: '(x1, y1, x2, y2, col1, col2, col3, col4, outline)'
    },
	draw_roundrect: {
        description: '[Function]' + i18n.draw_roundrect.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x1', documentation: i18n.draw_roundrect.x1 },
            { label: 'y1', documentation: i18n.draw_roundrect.y1 },
            { label: 'x2', documentation: i18n.draw_roundrect.x2 },
            { label: 'y2', documentation: i18n.draw_roundrect.y2 },
            { label: 'outline', documentation: i18n.draw_roundrect.outline }
        ],
        signature: '(x1, y1, x2, y2, outline)'
    },
	draw_roundrect_color: {
        description: '[Function]' + i18n.draw_roundrect_color.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x1', documentation: i18n.draw_roundrect_color.x1 },
            { label: 'y1', documentation: i18n.draw_roundrect_color.y1 },
            { label: 'x2', documentation: i18n.draw_roundrect_color.x2 },
            { label: 'y2', documentation: i18n.draw_roundrect_color.y2 },
            { label: 'col1', documentation: i18n.draw_roundrect_color.col1 },
            { label: 'col2', documentation: i18n.draw_roundrect_color.col2 },
            { label: 'outline', documentation: i18n.draw_roundrect_color.outline }
        ],
        signature: '(x1, y1, x2, y2, col1, col2, outline)'
    },
	draw_roundrect_color_ext: {
        description: '[Function]' + i18n.draw_roundrect_color_ext.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'x1', documentation: i18n.draw_roundrect_color_ext.x1 },
            { label: 'y1', documentation: i18n.draw_roundrect_color_ext.y1 },
            { label: 'x2', documentation: i18n.draw_roundrect_color_ext.x2 },
            { label: 'y2', documentation: i18n.draw_roundrect_color_ext.y2 },
            { label: 'radiusx', documentation: i18n.draw_roundrect_color_ext.radiusx },
            { label: 'radiusy', documentation: i18n.draw_roundrect_color_ext.radiusy },
            { label: 'col1', documentation: i18n.draw_roundrect_color_ext.col1 },
            { label: 'col2', documentation: i18n.draw_roundrect_color_ext.col2 },
            { label: 'outline', documentation: i18n.draw_roundrect_color_ext.outline }
        ],
        signature: '(x1, y1, x2, y2, radiusx, radiusy, col1, col2, outline)'
    },
	draw_roundrect_colour: {
        description: '[Function]' + i18n.draw_roundrect_colour.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x1', documentation: i18n.draw_roundrect_colour.x1 },
            { label: 'y1', documentation: i18n.draw_roundrect_colour.y1 },
            { label: 'x2', documentation: i18n.draw_roundrect_colour.x2 },
            { label: 'y2', documentation: i18n.draw_roundrect_colour.y2 },
            { label: 'col1', documentation: i18n.draw_roundrect_colour.col1 },
            { label: 'col2', documentation: i18n.draw_roundrect_colour.col2 },
            { label: 'outline', documentation: i18n.draw_roundrect_colour.outline }
        ],
        signature: '(x1, y1, x2, y2, col1, col2, outline)'
    },
	draw_roundrect_colour_ext: {
        description: '[Function]' + i18n.draw_roundrect_colour_ext.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'x1', documentation: i18n.draw_roundrect_colour_ext.x1 },
            { label: 'y1', documentation: i18n.draw_roundrect_colour_ext.y1 },
            { label: 'x2', documentation: i18n.draw_roundrect_colour_ext.x2 },
            { label: 'y2', documentation: i18n.draw_roundrect_colour_ext.y2 },
            { label: 'radiusx', documentation: i18n.draw_roundrect_colour_ext.radiusx },
            { label: 'radiusy', documentation: i18n.draw_roundrect_colour_ext.radiusy },
            { label: 'col1', documentation: i18n.draw_roundrect_colour_ext.col1 },
            { label: 'col2', documentation: i18n.draw_roundrect_colour_ext.col2 },
            { label: 'outline', documentation: i18n.draw_roundrect_colour_ext.outline }
        ],
        signature: '(x1, y1, x2, y2, radiusx, radiusy, col1, col2, outline)'
    },
	draw_roundrect_ext: {
        description: '[Function]' + i18n.draw_roundrect_ext.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'x1', documentation: i18n.draw_roundrect_ext.x1 },
            { label: 'y1', documentation: i18n.draw_roundrect_ext.y1 },
            { label: 'x2', documentation: i18n.draw_roundrect_ext.x2 },
            { label: 'y2', documentation: i18n.draw_roundrect_ext.y2 },
            { label: 'radiusx', documentation: i18n.draw_roundrect_ext.radiusx },
            { label: 'radiusy', documentation: i18n.draw_roundrect_ext.radiusy },
            { label: 'outline', documentation: i18n.draw_roundrect_ext.outline }
        ],
        signature: '(x1, y1, x2, y2, radiusx, radiusy, outline)'
    },
	draw_self: {
        description: '[Function]' + i18n.draw_self.desc,
        available: datasimple.all
    },
	draw_set_alpha: {
        description: '[Function]' + i18n.draw_set_alpha.desc,
        available: datasimple.all,
        parameters: [
            { label: 'alpha', documentation: i18n.draw_set_alpha.alpha }
        ],
        signature: '(alpha)'
    },
	draw_set_alpha_test: {
        description: '[Function]' + i18n.draw_set_alpha_test.desc,
        available: datasimple.all,
        parameters: [
            { label: 'enable', documentation: i18n.draw_set_alpha_test.enable }
        ],
        signature: '(enable)'
    },
	draw_set_alpha_test_ref_value: {
        description: '[Function]' + i18n.draw_set_alpha_test_ref_value.desc,
        available: datasimple.all,
        parameters: [
            { label: 'value', documentation: i18n.draw_set_alpha_test_ref_value.value }
        ],
        signature: '(value)'
    },
	draw_set_blend_mode: {
        description: '[Function]' + i18n.draw_set_blend_mode.desc,
        available: datasimple.all,
        parameters: [
            { label: 'mode', documentation: i18n.draw_set_blend_mode.mode }
        ],
        signature: '(mode)'
    },
	draw_set_blend_mode_ext: {
        description: '[Function]' + i18n.draw_set_blend_mode_ext.desc,
        available: datasimple.all,
        parameters: [
            { label: 'src', documentation: i18n.draw_set_blend_mode_ext.src },
            { label: 'dest', documentation: i18n.draw_set_blend_mode_ext.dest }
        ],
        signature: '(src, dest)'
    },
	draw_set_circle_precision: {
        description: '[Function]' + i18n.draw_set_circle_precision.desc,
        available: datasimple.all,
        parameters: [
            { label: 'precision', documentation: i18n.draw_set_circle_precision.precision }
        ],
        signature: '(precision)'
    },
	draw_set_color: {
        description: '[Function]' + i18n.draw_set_color.desc,
        available: datasimple.all,
        parameters: [
            { label: 'col', documentation: i18n.draw_set_color.col }
        ],
        signature: '(col)'
    },
	draw_set_color_write_enable: {
        description: '[Function]' + i18n.draw_set_color_write_enable.desc,
        available: datasimple.all,
        parameters: [
            { label: 'red', documentation: i18n.draw_set_color_write_enable.red },
            { label: 'green', documentation: i18n.draw_set_color_write_enable.green },
            { label: 'blue', documentation: i18n.draw_set_color_write_enable.blue },
            { label: 'alpha', documentation: i18n.draw_set_color_write_enable.alpha }
        ],
        signature: '(red, green, blue, alpha)'
    },
	draw_set_colour: {
        description: '[Function]' + i18n.draw_set_colour.desc,
        available: datasimple.all,
        parameters: [
            { label: 'col', documentation: i18n.draw_set_colour.col }
        ],
        signature: '(col)'
    },
	draw_set_colour_write_enable: {
        description: '[Function]' + i18n.draw_set_colour_write_enable.desc,
        available: datasimple.all,
        parameters: [
            { label: 'red', documentation: i18n.draw_set_colour_write_enable.red },
            { label: 'green', documentation: i18n.draw_set_colour_write_enable.green },
            { label: 'blue', documentation: i18n.draw_set_colour_write_enable.blue },
            { label: 'alpha', documentation: i18n.draw_set_colour_write_enable.alpha }
        ],
        signature: '(red, green, blue, alpha)'
    },
	draw_set_font: {
        description: '[Function]' + i18n.draw_set_font.desc,
        available: datasimple.all,
        parameters: [
            { label: 'font', documentation: i18n.draw_set_font.font }
        ],
        signature: '(font)'
    },
	draw_set_halign: {
        description: '[Function]' + i18n.draw_set_halign.desc,
        available: datasimple.all,
        parameters: [
            { label: 'halign', documentation: i18n.draw_set_halign.halign }
        ],
        signature: '(halign)'
    },
	draw_set_swf_aa_level: {
        description: '[Function]' + i18n.draw_set_swf_aa_level.desc,
        available: datasimple.all,
        parameters: [
            { label: 'aa_level', documentation: i18n.draw_set_swf_aa_level.aa_level }
        ],
        signature: '(aa_level)'
    },
	draw_set_valign: {
        description: '[Function]' + i18n.draw_set_valign.desc,
        available: datasimple.all,
        parameters: [
            { label: 'valign', documentation: i18n.draw_set_valign.valign }
        ],
        signature: '(valign)'
    },
	draw_skeleton: {
        description: '[Function]' + i18n.draw_skeleton.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'sprite', documentation: i18n.draw_skeleton.sprite },
            { label: 'animname', documentation: i18n.draw_skeleton.animname },
            { label: 'animname', documentation: i18n.draw_skeleton.animname },
            { label: 'frame', documentation: i18n.draw_skeleton.frame },
            { label: 'x', documentation: i18n.draw_skeleton.x },
            { label: 'y', documentation: i18n.draw_skeleton.y },
            { label: 'xscale', documentation: i18n.draw_skeleton.xscale },
            { label: 'yscale', documentation: i18n.draw_skeleton.yscale },
            { label: 'rot', documentation: i18n.draw_skeleton.rot },
            { label: 'colour', documentation: i18n.draw_skeleton.colour },
            { label: 'alpha', documentation: i18n.draw_skeleton.alpha }
        ],
        signature: '(sprite, animname, skinname, frame, x, y, xscale, yscale, rot, colour, alpha)'
    },
	draw_skeleton_collision: {
        description: '[Function]' + i18n.draw_skeleton_collision.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'sprite', documentation: i18n.draw_skeleton_collision.sprite },
            { label: 'animname', documentation: i18n.draw_skeleton_collision.animname },
            { label: 'frame', documentation: i18n.draw_skeleton_collision.frame },
            { label: 'x', documentation: i18n.draw_skeleton_collision.x },
            { label: 'y', documentation: i18n.draw_skeleton_collision.y },
            { label: 'xscale', documentation: i18n.draw_skeleton_collision.xscale },
            { label: 'yscale', documentation: i18n.draw_skeleton_collision.yscale },
            { label: 'rot', documentation: i18n.draw_skeleton_collision.rot },
            { label: 'colour', documentation: i18n.draw_skeleton_collision.colour }
        ],
        signature: '(sprite, animname, frame, x, y, xscale, yscale, rot, colour)'
    },
	draw_skeleton_instance: {
        description: '[Function]' + i18n.draw_skeleton_instance.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'instance', documentation: i18n.draw_skeleton_instance.instance },
            { label: 'animname', documentation: i18n.draw_skeleton_instance.animname },
            { label: 'animname', documentation: i18n.draw_skeleton_instance.animname },
            { label: 'frame', documentation: i18n.draw_skeleton_instance.frame },
            { label: 'x', documentation: i18n.draw_skeleton_instance.x },
            { label: 'y', documentation: i18n.draw_skeleton_instance.y },
            { label: 'xscale', documentation: i18n.draw_skeleton_instance.xscale },
            { label: 'yscale', documentation: i18n.draw_skeleton_instance.yscale },
            { label: 'rot', documentation: i18n.draw_skeleton_instance.rot },
            { label: 'colour', documentation: i18n.draw_skeleton_instance.colour },
            { label: 'alpha', documentation: i18n.draw_skeleton_instance.alpha }
        ],
        signature: '(instance, animname, skinname, frame, x, y, xscale, yscale, rot, colour, alpha)'
    },
	draw_skeleton_time: {
        description: '[Function]' + i18n.draw_skeleton_time.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'sprite', documentation: i18n.draw_skeleton_time.sprite },
            { label: 'animname', documentation: i18n.draw_skeleton_time.animname },
            { label: 'animname', documentation: i18n.draw_skeleton_time.animname },
            { label: 'time', documentation: i18n.draw_skeleton_time.time },
            { label: 'x', documentation: i18n.draw_skeleton_time.x },
            { label: 'y', documentation: i18n.draw_skeleton_time.y },
            { label: 'xscale', documentation: i18n.draw_skeleton_time.xscale },
            { label: 'yscale', documentation: i18n.draw_skeleton_time.yscale },
            { label: 'rot', documentation: i18n.draw_skeleton_time.rot },
            { label: 'colour', documentation: i18n.draw_skeleton_time.colour }
        ],
        signature: '(sprite, animname, skinname, time, x, y, xscale, yscale, rot, colour, alpha)'
    },
	draw_sprite: {
        description: '[Function]' + i18n.draw_sprite.desc,
        available: datasimple.all,
        parameters: [
            { label: 'sprite', documentation: i18n.draw_sprite.sprite },
            { label: 'subimg', documentation: i18n.draw_sprite.subimg },
            { label: 'x', documentation: i18n.draw_sprite.x },
            { label: 'y', documentation: i18n.draw_sprite.y }
        ],
        signature: '(sprite, subimg, x, y)'
    },
	draw_sprite_ext: {
        description: '[Function]' + i18n.draw_sprite_ext.desc,
        available: datasimple.all,
        parameters: [
            { label: 'sprite', documentation: i18n.draw_sprite_ext.sprite },
            { label: 'subimg', documentation: i18n.draw_sprite_ext.subimg },
            { label: 'x', documentation: i18n.draw_sprite_ext.x },
            { label: 'y', documentation: i18n.draw_sprite_ext.y },
            { label: 'xscale', documentation: i18n.draw_sprite_ext.xscale },
            { label: 'yscale', documentation: i18n.draw_sprite_ext.yscale },
            { label: 'rot', documentation: i18n.draw_sprite_ext.rot },
            { label: 'colour', documentation: i18n.draw_sprite_ext.colour },
            { label: 'alpha', documentation: i18n.draw_sprite_ext.alpha }
        ],
        signature: '(sprite, subimg, x, y, xscale, yscale, rot, colour, alpha)'
    },
	draw_sprite_general: {
        description: '[Function]' + i18n.draw_sprite_general.desc,
        available: datasimple.all,
        parameters: [
            { label: 'sprite', documentation: i18n.draw_sprite_general.sprite },
            { label: 'subimg', documentation: i18n.draw_sprite_general.subimg },
            { label: 'left', documentation: i18n.draw_sprite_general.left },
            { label: 'top', documentation: i18n.draw_sprite_general.top },
            { label: 'width', documentation: i18n.draw_sprite_general.width },
            { label: 'height', documentation: i18n.draw_sprite_general.height },
            { label: 'x', documentation: i18n.draw_sprite_general.x },
            { label: 'y', documentation: i18n.draw_sprite_general.y },
            { label: 'xscale', documentation: i18n.draw_sprite_general.xscale },
            { label: 'yscale', documentation: i18n.draw_sprite_general.yscale },
            { label: 'rot', documentation: i18n.draw_sprite_general.rot },
            { label: 'c1', documentation: i18n.draw_sprite_general.c1 },
            { label: 'c2', documentation: i18n.draw_sprite_general.c2 },
            { label: 'c3', documentation: i18n.draw_sprite_general.c3 },
            { label: 'c4', documentation: i18n.draw_sprite_general.c4 },
            { label: 'alpha', documentation: i18n.draw_sprite_general.alpha }
        ],
        signature: '(sprite, subimg, left, top, width, height, x, y, xscale, yscale, rot, c1, c2, c3, c4, alpha)'
    },
	draw_sprite_part: {
        description: '[Function]' + i18n.draw_sprite_part.desc,
        available: datasimple.all,
        parameters: [
            { label: 'sprite', documentation: i18n.draw_sprite_part.sprite },
            { label: 'subimg', documentation: i18n.draw_sprite_part.subimg },
            { label: 'left', documentation: i18n.draw_sprite_part.left },
            { label: 'top', documentation: i18n.draw_sprite_part.top },
            { label: 'width', documentation: i18n.draw_sprite_part.width },
            { label: 'height', documentation: i18n.draw_sprite_part.height },
            { label: 'x', documentation: i18n.draw_sprite_part.x },
            { label: 'y', documentation: i18n.draw_sprite_part.y }
        ],
        signature: '(sprite, subimg, left, top, width, height, x, y)'
    },
	draw_sprite_part_ext: {
        description: '[Function]' + i18n.draw_sprite_part_ext.desc,
        available: datasimple.all,
        parameters: [
            { label: 'sprite', documentation: i18n.draw_sprite_part_ext.sprite },
            { label: 'subimg', documentation: i18n.draw_sprite_part_ext.subimg },
            { label: 'left', documentation: i18n.draw_sprite_part_ext.left },
            { label: 'top', documentation: i18n.draw_sprite_part_ext.top },
            { label: 'width', documentation: i18n.draw_sprite_part_ext.width },
            { label: 'height', documentation: i18n.draw_sprite_part_ext.height },
            { label: 'x', documentation: i18n.draw_sprite_part_ext.x },
            { label: 'y', documentation: i18n.draw_sprite_part_ext.y },
            { label: 'xscale', documentation: i18n.draw_sprite_part_ext.xscale },
            { label: 'yscale', documentation: i18n.draw_sprite_part_ext.yscale },
            { label: 'colour', documentation: i18n.draw_sprite_part_ext.colour },
            { label: 'alpha', documentation: i18n.draw_sprite_part_ext.alpha }
        ],
        signature: '(sprite, subimg, left, top, width, height, x, y, xscale, yscale, colour, alpha)'
    },
	draw_sprite_pos: {
        description: '[Function]' + i18n.draw_sprite_pos.desc,
        available: datasimple.all,
        parameters: [
            { label: 'sprite', documentation: i18n.draw_sprite_pos.sprite },
            { label: 'subimg', documentation: i18n.draw_sprite_pos.subimg },
            { label: 'x1', documentation: i18n.draw_sprite_pos.x1 },
            { label: 'y1', documentation: i18n.draw_sprite_pos.y1 },
            { label: 'x2', documentation: i18n.draw_sprite_pos.x2 },
            { label: 'y2', documentation: i18n.draw_sprite_pos.y2 },
            { label: 'x3', documentation: i18n.draw_sprite_pos.x3 },
            { label: 'y3', documentation: i18n.draw_sprite_pos.y3 },
            { label: 'x4', documentation: i18n.draw_sprite_pos.x4 },
            { label: 'y4', documentation: i18n.draw_sprite_pos.y4 },
            { label: 'alpha', documentation: i18n.draw_sprite_pos.alpha }
        ],
        signature: '(sprite, subimg, x1, y1, x2, y2, x3, y3, x4, y4, alpha)'
    },
	draw_sprite_stretched: {
        description: '[Function]' + i18n.draw_sprite_stretched.desc,
        available: datasimple.all,
        parameters: [
            { label: 'sprite', documentation: i18n.draw_sprite_stretched.sprite },
            { label: 'subimg', documentation: i18n.draw_sprite_stretched.subimg },
            { label: 'x', documentation: i18n.draw_sprite_stretched.x },
            { label: 'y', documentation: i18n.draw_sprite_stretched.y },
            { label: 'w', documentation: i18n.draw_sprite_stretched.w },
            { label: 'h', documentation: i18n.draw_sprite_stretched.h }
        ],
        signature: '(sprite, subimg, x, y, w, h)'
    },
	draw_sprite_stretched_ext: {
        description: '[Function]' + i18n.draw_sprite_stretched_ext.desc,
        available: datasimple.all,
        parameters: [
            { label: 'sprite', documentation: i18n.draw_sprite_stretched_ext.sprite },
            { label: 'subimg', documentation: i18n.draw_sprite_stretched_ext.subimg },
            { label: 'x', documentation: i18n.draw_sprite_stretched_ext.x },
            { label: 'y', documentation: i18n.draw_sprite_stretched_ext.y },
            { label: 'w', documentation: i18n.draw_sprite_stretched_ext.w },
            { label: 'h', documentation: i18n.draw_sprite_stretched_ext.h },
            { label: 'colour', documentation: i18n.draw_sprite_stretched_ext.colour },
            { label: 'alpha', documentation: i18n.draw_sprite_stretched_ext.alpha }
        ],
        signature: '(sprite, subimg, x, y, w, h, colour, alpha)'
    },
	draw_sprite_tiled: {
        description: '[Function]' + i18n.draw_sprite_tiled.desc,
        available: datasimple.all,
        parameters: [
            { label: 'sprite', documentation: i18n.draw_sprite_tiled.sprite },
            { label: 'subimg', documentation: i18n.draw_sprite_tiled.subimg },
            { label: 'x', documentation: i18n.draw_sprite_tiled.x },
            { label: 'y', documentation: i18n.draw_sprite_tiled.y }
        ],
        signature: '(sprite, subimg, x, y)'
    },
	draw_sprite_tiled_ext: {
        description: '[Function]' + i18n.draw_sprite_tiled_ext.desc,
        available: datasimple.all,
        parameters: [
            { label: 'sprite', documentation: i18n.draw_sprite_tiled_ext.sprite },
            { label: 'subimg', documentation: i18n.draw_sprite_tiled_ext.subimg },
            { label: 'x', documentation: i18n.draw_sprite_tiled_ext.x },
            { label: 'y', documentation: i18n.draw_sprite_tiled_ext.y },
            { label: 'xscale', documentation: i18n.draw_sprite_tiled_ext.xscale },
            { label: 'yscale', documentation: i18n.draw_sprite_tiled_ext.yscale },
            { label: 'colour', documentation: i18n.draw_sprite_tiled_ext.colour },
            { label: 'alpha', documentation: i18n.draw_sprite_tiled_ext.alpha }
        ],
        signature: '(sprite, subimg, x, y, xscale, yscale, colour, alpha)'
    },
	draw_surface: {
        description: '[Function]' + i18n.draw_surface.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'id', documentation: i18n.draw_surface.id },
            { label: 'x', documentation: i18n.draw_surface.x },
            { label: 'y', documentation: i18n.draw_surface.y }
        ],
        signature: '(id, x, y)'
    },
	draw_surface_ext: {
        description: '[Function]' + i18n.draw_surface_ext.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'id', documentation: i18n.draw_surface_ext.id },
            { label: 'x', documentation: i18n.draw_surface_ext.x },
            { label: 'y', documentation: i18n.draw_surface_ext.y },
            { label: 'xscale', documentation: i18n.draw_surface_ext.xscale },
            { label: 'yscale', documentation: i18n.draw_surface_ext.yscale },
            { label: 'rot', documentation: i18n.draw_surface_ext.rot },
            { label: 'colour', documentation: i18n.draw_surface_ext.colour },
            { label: 'alpha', documentation: i18n.draw_surface_ext.alpha }
        ],
        signature: '(id, x, y, xscale, yscale, rot, colour, alpha)'
    },
	draw_surface_general: {
        description: '[Function]' + i18n.draw_surface_general.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'id', documentation: i18n.draw_surface_general.id },
            { label: 'left', documentation: i18n.draw_surface_general.left },
            { label: 'top', documentation: i18n.draw_surface_general.top },
            { label: 'width', documentation: i18n.draw_surface_general.width },
            { label: 'height', documentation: i18n.draw_surface_general.height },
            { label: 'x', documentation: i18n.draw_surface_general.x },
            { label: 'y', documentation: i18n.draw_surface_general.y },
            { label: 'xscale', documentation: i18n.draw_surface_general.xscale },
            { label: 'yscale', documentation: i18n.draw_surface_general.yscale },
            { label: 'rot', documentation: i18n.draw_surface_general.rot },
            { label: 'c1', documentation: i18n.draw_surface_general.c1 },
            { label: 'c2', documentation: i18n.draw_surface_general.c2 },
            { label: 'c3', documentation: i18n.draw_surface_general.c3 },
            { label: 'c4', documentation: i18n.draw_surface_general.c4 },
            { label: 'alpha', documentation: i18n.draw_surface_general.alpha }
        ],
        signature: '(id, left, top, width, height, x, y, xscale, yscale, rot, c1, c2, c3, c4, alpha)'
    },
	draw_surface_part: {
        description: '[Function]' + i18n.draw_surface_part.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'id', documentation: i18n.draw_surface_part.id },
            { label: 'left', documentation: i18n.draw_surface_part.left },
            { label: 'top', documentation: i18n.draw_surface_part.top },
            { label: 'width', documentation: i18n.draw_surface_part.width },
            { label: 'height', documentation: i18n.draw_surface_part.height },
            { label: 'x', documentation: i18n.draw_surface_part.x },
            { label: 'y', documentation: i18n.draw_surface_part.y }
        ],
        signature: '(id, left, top, width, height, x, y)'
    },
	draw_surface_part_ext: {
        description: '[Function]' + i18n.draw_surface_part_ext.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'id', documentation: i18n.draw_surface_part_ext.id },
            { label: 'left', documentation: i18n.draw_surface_part_ext.left },
            { label: 'top', documentation: i18n.draw_surface_part_ext.top },
            { label: 'width', documentation: i18n.draw_surface_part_ext.width },
            { label: 'height', documentation: i18n.draw_surface_part_ext.height },
            { label: 'x', documentation: i18n.draw_surface_part_ext.x },
            { label: 'y', documentation: i18n.draw_surface_part_ext.y },
            { label: 'xscale', documentation: i18n.draw_surface_part_ext.xscale },
            { label: 'yscale', documentation: i18n.draw_surface_part_ext.yscale },
            { label: 'colour', documentation: i18n.draw_surface_part_ext.colour },
            { label: 'alpha', documentation: i18n.draw_surface_part_ext.alpha }
        ],
        signature: '(id, left, top, width, height, x, y, xscale, yscale, colour, alpha)'
    },
	draw_surface_stretched: {
        description: '[Function]' + i18n.draw_surface_stretched.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'id', documentation: i18n.draw_surface_stretched.id },
            { label: 'x', documentation: i18n.draw_surface_stretched.x },
            { label: 'y', documentation: i18n.draw_surface_stretched.y },
            { label: 'w', documentation: i18n.draw_surface_stretched.w },
            { label: 'h', documentation: i18n.draw_surface_stretched.h }
        ],
        signature: '(id, x, y, w, h)'
    },
	draw_surface_stretched_ext: {
        description: '[Function]' + i18n.draw_surface_stretched_ext.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'id', documentation: i18n.draw_surface_stretched_ext.id },
            { label: 'x', documentation: i18n.draw_surface_stretched_ext.x },
            { label: 'y', documentation: i18n.draw_surface_stretched_ext.y },
            { label: 'w', documentation: i18n.draw_surface_stretched_ext.w },
            { label: 'h', documentation: i18n.draw_surface_stretched_ext.h },
            { label: 'colour', documentation: i18n.draw_surface_stretched_ext.colour },
            { label: 'alpha', documentation: i18n.draw_surface_stretched_ext.alpha }
        ],
        signature: '(id, x, y, w, h, colour, alpha)'
    },
	draw_surface_tiled: {
        description: '[Function]' + i18n.draw_surface_tiled.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'id', documentation: i18n.draw_surface_tiled.id },
            { label: 'x', documentation: i18n.draw_surface_tiled.x },
            { label: 'y', documentation: i18n.draw_surface_tiled.y }
        ],
        signature: '(id, x, y)'
    },
	draw_surface_tiled_ext: {
        description: '[Function]' + i18n.draw_surface_tiled_ext.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'id', documentation: i18n.draw_surface_tiled_ext.id },
            { label: 'x', documentation: i18n.draw_surface_tiled_ext.x },
            { label: 'y', documentation: i18n.draw_surface_tiled_ext.y },
            { label: 'xscale', documentation: i18n.draw_surface_tiled_ext.xscale },
            { label: 'yscale', documentation: i18n.draw_surface_tiled_ext.yscale },
            { label: 'colour', documentation: i18n.draw_surface_tiled_ext.colour },
            { label: 'alpha', documentation: i18n.draw_surface_tiled_ext.alpha }
        ],
        signature: '(id, x, y, xscale, yscale, colour, alpha)'
    },
	draw_text: {
        description: '[Function]' + i18n.draw_text.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x', documentation: i18n.draw_text.x },
            { label: 'y', documentation: i18n.draw_text.y },
            { label: 'string', documentation: i18n.draw_text.string }
        ],
        signature: '(x, y, string)'
    },
	draw_texture_flush: {
        description: '[Function]' + i18n.draw_texture_flush.desc,
        available: datasimple.all
    },
	draw_text_color: {
        description: '[Function]' + i18n.draw_text_color.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x', documentation: i18n.draw_text_color.x },
            { label: 'y', documentation: i18n.draw_text_color.y },
            { label: 'string', documentation: i18n.draw_text_color.string },
            { label: 'c1', documentation: i18n.draw_text_color.c1 },
            { label: 'c2', documentation: i18n.draw_text_color.c2 },
            { label: 'c3', documentation: i18n.draw_text_color.c3 },
            { label: 'c4', documentation: i18n.draw_text_color.c4 },
            { label: 'alpha', documentation: i18n.draw_text_color.alpha }
        ],
        signature: '(x, y, string, c1, c2, c3, c4, alpha)'
    },
	draw_text_colour: {
        description: '[Function]' + i18n.draw_text_colour.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x', documentation: i18n.draw_text_colour.x },
            { label: 'y', documentation: i18n.draw_text_colour.y },
            { label: 'string', documentation: i18n.draw_text_colour.string },
            { label: 'c1', documentation: i18n.draw_text_colour.c1 },
            { label: 'c2', documentation: i18n.draw_text_colour.c2 },
            { label: 'c3', documentation: i18n.draw_text_colour.c3 },
            { label: 'c4', documentation: i18n.draw_text_colour.c4 },
            { label: 'alpha', documentation: i18n.draw_text_colour.alpha }
        ],
        signature: '(x, y, string, c1, c2, c3, c4, alpha)'
    },
	draw_text_ext: {
        description: '[Function]' + i18n.draw_text_ext.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x', documentation: i18n.draw_text_ext.x },
            { label: 'y', documentation: i18n.draw_text_ext.y },
            { label: 'string', documentation: i18n.draw_text_ext.string },
            { label: 'sep', documentation: i18n.draw_text_ext.sep },
            { label: 'w', documentation: i18n.draw_text_ext.w }
        ],
        signature: '(x, y, string, sep, w)'
    },
	draw_text_ext_color: {
        description: '[Function]' + i18n.draw_text_ext_color.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x', documentation: i18n.draw_text_ext_color.x },
            { label: 'y', documentation: i18n.draw_text_ext_color.y },
            { label: 'string', documentation: i18n.draw_text_ext_color.string },
            { label: 'sep', documentation: i18n.draw_text_ext_color.sep },
            { label: 'w', documentation: i18n.draw_text_ext_color.w },
            { label: 'c1', documentation: i18n.draw_text_ext_color.c1 },
            { label: 'c2', documentation: i18n.draw_text_ext_color.c2 },
            { label: 'c3', documentation: i18n.draw_text_ext_color.c3 },
            { label: 'c4', documentation: i18n.draw_text_ext_color.c4 },
            { label: 'alpha', documentation: i18n.draw_text_ext_color.alpha }
        ],
        signature: '(x, y, string, sep, w, c1, c2, c3, c4, alpha)'
    },
	draw_text_ext_colour: {
        description: '[Function]' + i18n.draw_text_ext_colour.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x', documentation: i18n.draw_text_ext_colour.x },
            { label: 'y', documentation: i18n.draw_text_ext_colour.y },
            { label: 'string', documentation: i18n.draw_text_ext_colour.string },
            { label: 'sep', documentation: i18n.draw_text_ext_colour.sep },
            { label: 'w', documentation: i18n.draw_text_ext_colour.w },
            { label: 'c1', documentation: i18n.draw_text_ext_colour.c1 },
            { label: 'c2', documentation: i18n.draw_text_ext_colour.c2 },
            { label: 'c3', documentation: i18n.draw_text_ext_colour.c3 },
            { label: 'c4', documentation: i18n.draw_text_ext_colour.c4 },
            { label: 'alpha', documentation: i18n.draw_text_ext_colour.alpha }
        ],
        signature: '(x, y, string, sep, w, c1, c2, c3, c4, alpha)'
    },
	draw_text_ext_transformed: {
        description: '[Function]' + i18n.draw_text_ext_transformed.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x', documentation: i18n.draw_text_ext_transformed.x },
            { label: 'y', documentation: i18n.draw_text_ext_transformed.y },
            { label: 'string', documentation: i18n.draw_text_ext_transformed.string },
            { label: 'sep', documentation: i18n.draw_text_ext_transformed.sep },
            { label: 'w', documentation: i18n.draw_text_ext_transformed.w },
            { label: 'xscale', documentation: i18n.draw_text_ext_transformed.xscale },
            { label: 'yscale', documentation: i18n.draw_text_ext_transformed.yscale },
            { label: 'angle', documentation: i18n.draw_text_ext_transformed.angle }
        ],
        signature: '(x, y, string, sep, w, xscale, yscale, angle)'
    },
	draw_text_ext_transformed_color: {
        description: '[Function]' + i18n.draw_text_ext_transformed_color.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x', documentation: i18n.draw_text_ext_transformed_color.x },
            { label: 'y', documentation: i18n.draw_text_ext_transformed_color.y },
            { label: 'string', documentation: i18n.draw_text_ext_transformed_color.string },
            { label: 'sep', documentation: i18n.draw_text_ext_transformed_color.sep },
            { label: 'w', documentation: i18n.draw_text_ext_transformed_color.w },
            { label: 'xscale', documentation: i18n.draw_text_ext_transformed_color.xscale },
            { label: 'yscale', documentation: i18n.draw_text_ext_transformed_color.yscale },
            { label: 'angle', documentation: i18n.draw_text_ext_transformed_color.angle },
            { label: 'c1', documentation: i18n.draw_text_ext_transformed_color.c1 },
            { label: 'c2', documentation: i18n.draw_text_ext_transformed_color.c2 },
            { label: 'c3', documentation: i18n.draw_text_ext_transformed_color.c3 },
            { label: 'c4', documentation: i18n.draw_text_ext_transformed_color.c4 },
            { label: 'alpha', documentation: i18n.draw_text_ext_transformed_color.alpha }
        ],
        signature: '(x, y, string, sep, w, xscale, yscale, angle, c1, c2, c3, c4, alpha)'
    },
	draw_text_ext_transformed_colour: {
        description: '[Function]' + i18n.draw_text_ext_transformed_colour.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x', documentation: i18n.draw_text_ext_transformed_colour.x },
            { label: 'y', documentation: i18n.draw_text_ext_transformed_colour.y },
            { label: 'string', documentation: i18n.draw_text_ext_transformed_colour.string },
            { label: 'sep', documentation: i18n.draw_text_ext_transformed_colour.sep },
            { label: 'w', documentation: i18n.draw_text_ext_transformed_colour.w },
            { label: 'xscale', documentation: i18n.draw_text_ext_transformed_colour.xscale },
            { label: 'yscale', documentation: i18n.draw_text_ext_transformed_colour.yscale },
            { label: 'angle', documentation: i18n.draw_text_ext_transformed_colour.angle },
            { label: 'c1', documentation: i18n.draw_text_ext_transformed_colour.c1 },
            { label: 'c2', documentation: i18n.draw_text_ext_transformed_colour.c2 },
            { label: 'c3', documentation: i18n.draw_text_ext_transformed_colour.c3 },
            { label: 'c4', documentation: i18n.draw_text_ext_transformed_colour.c4 },
            { label: 'alpha', documentation: i18n.draw_text_ext_transformed_colour.alpha }
        ],
        signature: '(x, y, string, sep, w, xscale, yscale, angle, c1, c2, c3, c4, alpha)'
    },
	draw_text_transformed: {
        description: '[Function]' + i18n.draw_text_transformed.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x', documentation: i18n.draw_text_transformed.x },
            { label: 'y', documentation: i18n.draw_text_transformed.y },
            { label: 'string', documentation: i18n.draw_text_transformed.string },
            { label: 'xscale', documentation: i18n.draw_text_transformed.xscale },
            { label: 'yscale', documentation: i18n.draw_text_transformed.yscale },
            { label: 'angle', documentation: i18n.draw_text_transformed.angle }
        ],
        signature: '(x, y, string, xscale, yscale, angle)'
    },
	draw_text_transformed_color: {
        description: '[Function]' + i18n.draw_text_transformed_color.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x', documentation: i18n.draw_text_transformed_color.x },
            { label: 'y', documentation: i18n.draw_text_transformed_color.y },
            { label: 'string', documentation: i18n.draw_text_transformed_color.string },
            { label: 'xscale', documentation: i18n.draw_text_transformed_color.xscale },
            { label: 'yscale', documentation: i18n.draw_text_transformed_color.yscale },
            { label: 'angle', documentation: i18n.draw_text_transformed_color.angle },
            { label: 'c1', documentation: i18n.draw_text_transformed_color.c1 },
            { label: 'c2', documentation: i18n.draw_text_transformed_color.c2 },
            { label: 'c3', documentation: i18n.draw_text_transformed_color.c3 },
            { label: 'c4', documentation: i18n.draw_text_transformed_color.c4 },
            { label: 'alpha', documentation: i18n.draw_text_transformed_color.alpha }
        ],
        signature: '(x, y, string, xscale, yscale, angle, c1, c2, c3, c4, alpha)'
    },
	draw_text_transformed_colour: {
        description: '[Function]' + i18n.draw_text_transformed_colour.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x', documentation: i18n.draw_text_transformed_colour.x },
            { label: 'y', documentation: i18n.draw_text_transformed_colour.y },
            { label: 'string', documentation: i18n.draw_text_transformed_colour.string },
            { label: 'xscale', documentation: i18n.draw_text_transformed_colour.xscale },
            { label: 'yscale', documentation: i18n.draw_text_transformed_colour.yscale },
            { label: 'angle', documentation: i18n.draw_text_transformed_colour.angle },
            { label: 'c1', documentation: i18n.draw_text_transformed_colour.c1 },
            { label: 'c2', documentation: i18n.draw_text_transformed_colour.c2 },
            { label: 'c3', documentation: i18n.draw_text_transformed_colour.c3 },
            { label: 'c4', documentation: i18n.draw_text_transformed_colour.c4 },
            { label: 'alpha', documentation: i18n.draw_text_transformed_colour.alpha }
        ],
        signature: '(x, y, string, xscale, yscale, angle, c1, c2, c3, c4, alpha)'
    },
	draw_triangle: {
        description: '[Function]' + i18n.draw_triangle.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x1', documentation: i18n.draw_triangle.x1 },
            { label: 'y1', documentation: i18n.draw_triangle.y1 },
            { label: 'x2', documentation: i18n.draw_triangle.x2 },
            { label: 'y2', documentation: i18n.draw_triangle.y2 },
            { label: 'x3', documentation: i18n.draw_triangle.x3 },
            { label: 'y3', documentation: i18n.draw_triangle.y3 },
            { label: 'outline', documentation: i18n.draw_triangle.outline }
        ],
        signature: '(x1, y1, x2, y2, x3, y3, outline)'
    },
	draw_triangle_color: {
        description: '[Function]' + i18n.draw_triangle_color.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x1', documentation: i18n.draw_triangle_color.x1 },
            { label: 'y1', documentation: i18n.draw_triangle_color.y1 },
            { label: 'x2', documentation: i18n.draw_triangle_color.x2 },
            { label: 'y2', documentation: i18n.draw_triangle_color.y2 },
            { label: 'x3', documentation: i18n.draw_triangle_color.x3 },
            { label: 'y3', documentation: i18n.draw_triangle_color.y3 },
            { label: 'col1', documentation: i18n.draw_triangle_color.col1 },
            { label: 'col2', documentation: i18n.draw_triangle_color.col2 },
            { label: 'col3', documentation: i18n.draw_triangle_color.col3 },
            { label: 'outline', documentation: i18n.draw_triangle_color.outline }
        ],
        signature: '(x1, y1, x2, y2, x3, y3, col1, col2, col3, outline)'
    },
	draw_triangle_colour: {
        description: '[Function]' + i18n.draw_triangle_colour.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x1', documentation: i18n.draw_triangle_colour.x1 },
            { label: 'y1', documentation: i18n.draw_triangle_colour.y1 },
            { label: 'x2', documentation: i18n.draw_triangle_colour.x2 },
            { label: 'y2', documentation: i18n.draw_triangle_colour.y2 },
            { label: 'x3', documentation: i18n.draw_triangle_colour.x3 },
            { label: 'y3', documentation: i18n.draw_triangle_colour.y3 },
            { label: 'col1', documentation: i18n.draw_triangle_colour.col1 },
            { label: 'col2', documentation: i18n.draw_triangle_colour.col2 },
            { label: 'col3', documentation: i18n.draw_triangle_colour.col3 },
            { label: 'outline', documentation: i18n.draw_triangle_colour.outline }
        ],
        signature: '(x1, y1, x2, y2, x3, y3, col1, col2, col3, outline)'
    },
	draw_vertex: {
        description: '[Function]' + i18n.draw_vertex.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x', documentation: i18n.draw_vertex.x },
            { label: 'y', documentation: i18n.draw_vertex.y }
        ],
        signature: '(x, y)'
    },
	draw_vertex_color: {
        description: '[Function]' + i18n.draw_vertex_color.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x', documentation: i18n.draw_vertex_color.x },
            { label: 'y', documentation: i18n.draw_vertex_color.y },
            { label: 'col', documentation: i18n.draw_vertex_color.col },
            { label: 'alpha', documentation: i18n.draw_vertex_color.alpha }
        ],
        signature: '(x, y, col, alpha)'
    },
	draw_vertex_colour: {
        description: '[Function]' + i18n.draw_vertex_colour.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x', documentation: i18n.draw_vertex_colour.x },
            { label: 'y', documentation: i18n.draw_vertex_colour.y },
            { label: 'col', documentation: i18n.draw_vertex_colour.col },
            { label: 'alpha', documentation: i18n.draw_vertex_colour.alpha }
        ],
        signature: '(x, y, col, alpha)'
    },
	draw_vertex_texture: {
        description: '[Function]' + i18n.draw_vertex_texture.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x', documentation: i18n.draw_vertex_texture.x },
            { label: 'y', documentation: i18n.draw_vertex_texture.y },
            { label: 'xtex', documentation: i18n.draw_vertex_texture.xtex },
            { label: 'ytex', documentation: i18n.draw_vertex_texture.ytex }
        ],
        signature: '(x, y, xtex, ytex)'
    },
	draw_vertex_texture_color: {
        description: '[Function]' + i18n.draw_vertex_texture_color.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x', documentation: i18n.draw_vertex_texture_color.x },
            { label: 'y', documentation: i18n.draw_vertex_texture_color.y },
            { label: 'xtex', documentation: i18n.draw_vertex_texture_color.xtex },
            { label: 'ytex', documentation: i18n.draw_vertex_texture_color.ytex },
            { label: 'col', documentation: i18n.draw_vertex_texture_color.col },
            { label: 'alpha', documentation: i18n.draw_vertex_texture_color.alpha }
        ],
        signature: '(x, y, xtex, ytex, col, alpha)'
    },
	draw_vertex_texture_colour: {
        description: '[Function]' + i18n.draw_vertex_texture_colour.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x', documentation: i18n.draw_vertex_texture_colour.x },
            { label: 'y', documentation: i18n.draw_vertex_texture_colour.y },
            { label: 'xtex', documentation: i18n.draw_vertex_texture_colour.xtex },
            { label: 'ytex', documentation: i18n.draw_vertex_texture_colour.ytex },
            { label: 'col', documentation: i18n.draw_vertex_texture_colour.col },
            { label: 'alpha', documentation: i18n.draw_vertex_texture_colour.alpha }
        ],
        signature: '(x, y, xtex, ytex, col, alpha)'
    },
	dsin: {
        description: '[Function]' + i18n.dsin.desc,
        parameters: [
            { label: 'degree_angle', documentation: i18n.dsin.degree_angle }
        ],
        signature: '(degree_angle)'
    },
	ds_exists: {
        description: '[Function]' + i18n.ds_exists.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_exists.id },
            { label: 'type', documentation: i18n.ds_exists.type }
        ],
        signature: '(id, type)'
    },
	ds_grid_add: {
        description: '[Function]' + i18n.ds_grid_add.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_grid_add.id },
            { label: 'x', documentation: i18n.ds_grid_add.x },
            { label: 'y', documentation: i18n.ds_grid_add.y },
            { label: 'val', documentation: i18n.ds_grid_add.val }
        ],
        signature: '(id, x, y, val)'
    },
	ds_grid_add_disk: {
        description: '[Function]' + i18n.ds_grid_add_disk.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_grid_add_disk.id },
            { label: 'xm', documentation: i18n.ds_grid_add_disk.xm },
            { label: 'ym', documentation: i18n.ds_grid_add_disk.ym },
            { label: 'r', documentation: i18n.ds_grid_add_disk.r },
            { label: 'val', documentation: i18n.ds_grid_add_disk.val }
        ],
        signature: '(id, xm, ym, r, val)'
    },
	ds_grid_add_grid_region: {
        description: '[Function]' + i18n.ds_grid_add_grid_region.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_grid_add_grid_region.id },
            { label: 'source', documentation: i18n.ds_grid_add_grid_region.source },
            { label: 'x1', documentation: i18n.ds_grid_add_grid_region.x1 },
            { label: 'y1', documentation: i18n.ds_grid_add_grid_region.y1 },
            { label: 'x2', documentation: i18n.ds_grid_add_grid_region.x2 },
            { label: 'y2', documentation: i18n.ds_grid_add_grid_region.y2 },
            { label: 'xpos', documentation: i18n.ds_grid_add_grid_region.xpos },
            { label: 'ypos', documentation: i18n.ds_grid_add_grid_region.ypos }
        ],
        signature: '(id, source, x1, y1, x2, y2, xpos, ypos)'
    },
	ds_grid_add_region: {
        description: '[Function]' + i18n.ds_grid_add_region.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_grid_add_region.id },
            { label: 'x1', documentation: i18n.ds_grid_add_region.x1 },
            { label: 'y1', documentation: i18n.ds_grid_add_region.y1 },
            { label: 'x2', documentation: i18n.ds_grid_add_region.x2 },
            { label: 'y2', documentation: i18n.ds_grid_add_region.y2 },
            { label: 'val', documentation: i18n.ds_grid_add_region.val }
        ],
        signature: '(id, x1, y1, x2, y2, val)'
    },
	ds_grid_clear: {
        description: '[Function]' + i18n.ds_grid_clear.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_grid_clear.id },
            { label: 'val', documentation: i18n.ds_grid_clear.val }
        ],
        signature: '(id, val)'
    },
	ds_grid_copy: {
        description: '[Function]' + i18n.ds_grid_copy.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_grid_copy.id },
            { label: 'source', documentation: i18n.ds_grid_copy.source }
        ],
        signature: '(id, source)'
    },
	ds_grid_create: {
        description: '[Function]' + i18n.ds_grid_create.desc,
        available: datasimple.all,
        parameters: [
            { label: 'w', documentation: i18n.ds_grid_create.w },
            { label: 'h', documentation: i18n.ds_grid_create.h }
        ],
        signature: '(w, h)'
    },
	ds_grid_destroy: {
        description: '[Function]' + i18n.ds_grid_destroy.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_grid_destroy.id }
        ],
        signature: '(id)'
    },
	ds_grid_get: {
        description: '[Function]' + i18n.ds_grid_get.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_grid_get.id },
            { label: 'x', documentation: i18n.ds_grid_get.x },
            { label: 'y', documentation: i18n.ds_grid_get.y }
        ],
        signature: '(id, x, y)'
    },
	ds_grid_get_disk_max: {
        description: '[Function]' + i18n.ds_grid_get_disk_max.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_grid_get_disk_max.id },
            { label: 'xm', documentation: i18n.ds_grid_get_disk_max.xm },
            { label: 'ym', documentation: i18n.ds_grid_get_disk_max.ym },
            { label: 'r', documentation: i18n.ds_grid_get_disk_max.r }
        ],
        signature: '(id, xm, ym, r)'
    },
	ds_grid_get_disk_mean: {
        description: '[Function]' + i18n.ds_grid_get_disk_mean.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_grid_get_disk_mean.id },
            { label: 'xm', documentation: i18n.ds_grid_get_disk_mean.xm },
            { label: 'ym', documentation: i18n.ds_grid_get_disk_mean.ym },
            { label: 'r', documentation: i18n.ds_grid_get_disk_mean.r }
        ],
        signature: '(id, xm, ym, r)'
    },
	ds_grid_get_disk_min: {
        description: '[Function]' + i18n.ds_grid_get_disk_min.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_grid_get_disk_min.id },
            { label: 'xm', documentation: i18n.ds_grid_get_disk_min.xm },
            { label: 'ym', documentation: i18n.ds_grid_get_disk_min.ym },
            { label: 'r', documentation: i18n.ds_grid_get_disk_min.r }
        ],
        signature: '(id, xm, ym, r)'
    },
	ds_grid_get_disk_sum: {
        description: '[Function]' + i18n.ds_grid_get_disk_sum.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_grid_get_disk_sum.id },
            { label: 'xm', documentation: i18n.ds_grid_get_disk_sum.xm },
            { label: 'ym', documentation: i18n.ds_grid_get_disk_sum.ym },
            { label: 'r', documentation: i18n.ds_grid_get_disk_sum.r }
        ],
        signature: '(id, xm, ym, r)'
    },
	ds_grid_get_max: {
        description: '[Function]' + i18n.ds_grid_get_max.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_grid_get_max.id },
            { label: 'x1', documentation: i18n.ds_grid_get_max.x1 },
            { label: 'y1', documentation: i18n.ds_grid_get_max.y1 },
            { label: 'x2', documentation: i18n.ds_grid_get_max.x2 },
            { label: 'y2', documentation: i18n.ds_grid_get_max.y2 }
        ],
        signature: '(id, x1, y1, x2, y2)'
    },
	ds_grid_get_mean: {
        description: '[Function]' + i18n.ds_grid_get_mean.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_grid_get_mean.id },
            { label: 'x1', documentation: i18n.ds_grid_get_mean.x1 },
            { label: 'y1', documentation: i18n.ds_grid_get_mean.y1 },
            { label: 'x2', documentation: i18n.ds_grid_get_mean.x2 },
            { label: 'y2', documentation: i18n.ds_grid_get_mean.y2 }
        ],
        signature: '(id, x1, y1, x2, y2)'
    },
	ds_grid_get_min: {
        description: '[Function]' + i18n.ds_grid_get_min.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_grid_get_min.id },
            { label: 'x1', documentation: i18n.ds_grid_get_min.x1 },
            { label: 'y1', documentation: i18n.ds_grid_get_min.y1 },
            { label: 'x2', documentation: i18n.ds_grid_get_min.x2 },
            { label: 'y2', documentation: i18n.ds_grid_get_min.y2 }
        ],
        signature: '(id, x1, y1, x2, y2)'
    },
	ds_grid_get_sum: {
        description: '[Function]' + i18n.ds_grid_get_sum.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_grid_get_sum.id },
            { label: 'x1', documentation: i18n.ds_grid_get_sum.x1 },
            { label: 'y1', documentation: i18n.ds_grid_get_sum.y1 },
            { label: 'x2', documentation: i18n.ds_grid_get_sum.x2 },
            { label: 'y2', documentation: i18n.ds_grid_get_sum.y2 }
        ],
        signature: '(id, x1, y1, x2, y2)'
    },
	ds_grid_height: {
        description: '[Function]' + i18n.ds_grid_height.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_grid_height.id }
        ],
        signature: '(id)'
    },
	ds_grid_multiply: {
        description: '[Function]' + i18n.ds_grid_multiply.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_grid_multiply.id },
            { label: 'x', documentation: i18n.ds_grid_multiply.x },
            { label: 'y', documentation: i18n.ds_grid_multiply.y },
            { label: 'val', documentation: i18n.ds_grid_multiply.val }
        ],
        signature: '(id, x, y, val)'
    },
	ds_grid_multiply_disk: {
        description: '[Function]' + i18n.ds_grid_multiply_disk.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_grid_multiply_disk.id },
            { label: 'xm', documentation: i18n.ds_grid_multiply_disk.xm },
            { label: 'ym', documentation: i18n.ds_grid_multiply_disk.ym },
            { label: 'r', documentation: i18n.ds_grid_multiply_disk.r },
            { label: 'val', documentation: i18n.ds_grid_multiply_disk.val }
        ],
        signature: '(id, xm, ym, r, val)'
    },
	ds_grid_multiply_grid_region: {
        description: '[Function]' + i18n.ds_grid_multiply_grid_region.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_grid_multiply_grid_region.id },
            { label: 'source', documentation: i18n.ds_grid_multiply_grid_region.source },
            { label: 'x1', documentation: i18n.ds_grid_multiply_grid_region.x1 },
            { label: 'y1', documentation: i18n.ds_grid_multiply_grid_region.y1 },
            { label: 'x2', documentation: i18n.ds_grid_multiply_grid_region.x2 },
            { label: 'y2', documentation: i18n.ds_grid_multiply_grid_region.y2 },
            { label: 'xpos', documentation: i18n.ds_grid_multiply_grid_region.xpos },
            { label: 'ypos', documentation: i18n.ds_grid_multiply_grid_region.ypos }
        ],
        signature: '(id, source, x1, y1, x2, y2, xpos, ypos)'
    },
	ds_grid_multiply_region: {
        description: '[Function]' + i18n.ds_grid_multiply_region.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_grid_multiply_region.id },
            { label: 'x1', documentation: i18n.ds_grid_multiply_region.x1 },
            { label: 'y1', documentation: i18n.ds_grid_multiply_region.y1 },
            { label: 'x2', documentation: i18n.ds_grid_multiply_region.x2 },
            { label: 'y2', documentation: i18n.ds_grid_multiply_region.y2 },
            { label: 'val', documentation: i18n.ds_grid_multiply_region.val }
        ],
        signature: '(id, x1, y1, x2, y2, val)'
    },
	ds_grid_read: {
        description: '[Function]' + i18n.ds_grid_read.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_grid_read.id },
            { label: 'str', documentation: i18n.ds_grid_read.str },
            { label: '...', documentation: i18n.ds_grid_read.more }
        ],
        signature: '(id, str, ...)'
    },
	ds_grid_resize: {
        description: '[Function]' + i18n.ds_grid_resize.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_grid_resize.id },
            { label: 'w', documentation: i18n.ds_grid_resize.w },
            { label: 'h', documentation: i18n.ds_grid_resize.h }
        ],
        signature: '(id, w, h)'
    },
	ds_grid_set: {
        description: '[Function]' + i18n.ds_grid_set.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_grid_set.id },
            { label: 'x', documentation: i18n.ds_grid_set.x },
            { label: 'y', documentation: i18n.ds_grid_set.y },
            { label: 'val', documentation: i18n.ds_grid_set.val }
        ],
        signature: '(id, x, y, val)'
    },
	ds_grid_set_disk: {
        description: '[Function]' + i18n.ds_grid_set_disk.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_grid_set_disk.id },
            { label: 'xm', documentation: i18n.ds_grid_set_disk.xm },
            { label: 'ym', documentation: i18n.ds_grid_set_disk.ym },
            { label: 'r', documentation: i18n.ds_grid_set_disk.r },
            { label: 'val', documentation: i18n.ds_grid_set_disk.val }
        ],
        signature: '(id, xm, ym, r, val)'
    },
	ds_grid_set_grid_region: {
        description: '[Function]' + i18n.ds_grid_set_grid_region.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_grid_set_grid_region.id },
            { label: 'source', documentation: i18n.ds_grid_set_grid_region.source },
            { label: 'x1', documentation: i18n.ds_grid_set_grid_region.x1 },
            { label: 'y1', documentation: i18n.ds_grid_set_grid_region.y1 },
            { label: 'x2', documentation: i18n.ds_grid_set_grid_region.x2 },
            { label: 'y2', documentation: i18n.ds_grid_set_grid_region.y2 },
            { label: 'xpos', documentation: i18n.ds_grid_set_grid_region.xpos },
            { label: 'ypos', documentation: i18n.ds_grid_set_grid_region.ypos }
        ],
        signature: '(id, source, x1, y1, x2, y2, xpos, ypos)'
    },
	ds_grid_set_region: {
        description: '[Function]' + i18n.ds_grid_set_region.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_grid_set_region.id },
            { label: 'x1', documentation: i18n.ds_grid_set_region.x1 },
            { label: 'y1', documentation: i18n.ds_grid_set_region.y1 },
            { label: 'x2', documentation: i18n.ds_grid_set_region.x2 },
            { label: 'y2', documentation: i18n.ds_grid_set_region.y2 },
            { label: 'val', documentation: i18n.ds_grid_set_region.val }
        ],
        signature: '(id, x1, y1, x2, y2, val)'
    },
	ds_grid_shuffle: {
        description: '[Function]' + i18n.ds_grid_shuffle.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_grid_shuffle.id }
        ],
        signature: '(id)'
    },
	ds_grid_sort: {
        description: '[Function]' + i18n.ds_grid_sort.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_grid_sort.id },
            { label: 'column', documentation: i18n.ds_grid_sort.column },
            { label: 'ascending', documentation: i18n.ds_grid_sort.ascending }
        ],
        signature: '(id, column, ascending)'
    },
	ds_grid_value_disk_exists: {
        description: '[Function]' + i18n.ds_grid_value_disk_exists.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_grid_value_disk_exists.id },
            { label: 'xm', documentation: i18n.ds_grid_value_disk_exists.xm },
            { label: 'ym', documentation: i18n.ds_grid_value_disk_exists.ym },
            { label: 'r', documentation: i18n.ds_grid_value_disk_exists.r },
            { label: 'val', documentation: i18n.ds_grid_value_disk_exists.val }
        ],
        signature: '(id, xm, ym, r, val)'
    },
	ds_grid_value_disk_x: {
        description: '[Function]' + i18n.ds_grid_value_disk_x.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_grid_value_disk_x.id },
            { label: 'xm', documentation: i18n.ds_grid_value_disk_x.xm },
            { label: 'ym', documentation: i18n.ds_grid_value_disk_x.ym },
            { label: 'r', documentation: i18n.ds_grid_value_disk_x.r },
            { label: 'val', documentation: i18n.ds_grid_value_disk_x.val }
        ],
        signature: '(id, xm, ym, r, val)'
    },
	ds_grid_value_disk_y: {
        description: '[Function]' + i18n.ds_grid_value_disk_y.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_grid_value_disk_y.id },
            { label: 'xm', documentation: i18n.ds_grid_value_disk_y.xm },
            { label: 'ym', documentation: i18n.ds_grid_value_disk_y.ym },
            { label: 'r', documentation: i18n.ds_grid_value_disk_y.r },
            { label: 'val', documentation: i18n.ds_grid_value_disk_y.val }
        ],
        signature: '(id, xm, ym, r, val)'
    },
	ds_grid_value_exists: {
        description: '[Function]' + i18n.ds_grid_value_exists.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_grid_value_exists.id },
            { label: 'x1', documentation: i18n.ds_grid_value_exists.x1 },
            { label: 'y1', documentation: i18n.ds_grid_value_exists.y1 },
            { label: 'x2', documentation: i18n.ds_grid_value_exists.x2 },
            { label: 'y2', documentation: i18n.ds_grid_value_exists.y2 },
            { label: 'val', documentation: i18n.ds_grid_value_exists.val }
        ],
        signature: '(id, x1, y1, x2, y2, val)'
    },
	ds_grid_value_x: {
        description: '[Function]' + i18n.ds_grid_value_x.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_grid_value_x.id },
            { label: 'x1', documentation: i18n.ds_grid_value_x.x1 },
            { label: 'y1', documentation: i18n.ds_grid_value_x.y1 },
            { label: 'x2', documentation: i18n.ds_grid_value_x.x2 },
            { label: 'y2', documentation: i18n.ds_grid_value_x.y2 },
            { label: 'val', documentation: i18n.ds_grid_value_x.val }
        ],
        signature: '(id, x1, y1, x2, y2, val)'
    },
	ds_grid_value_y: {
        description: '[Function]' + i18n.ds_grid_value_y.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_grid_value_y.id },
            { label: 'x1', documentation: i18n.ds_grid_value_y.x1 },
            { label: 'y1', documentation: i18n.ds_grid_value_y.y1 },
            { label: 'x2', documentation: i18n.ds_grid_value_y.x2 },
            { label: 'y2', documentation: i18n.ds_grid_value_y.y2 },
            { label: 'val', documentation: i18n.ds_grid_value_y.val }
        ],
        signature: '(id, x1, y1, x2, y2, val)'
    },
	ds_grid_width: {
        description: '[Function]' + i18n.ds_grid_width.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_grid_width.id }
        ],
        signature: '(id)'
    },
	ds_grid_write: {
        description: '[Function]' + i18n.ds_grid_write.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_grid_write.id }
        ],
        signature: '(id)'
    },
	ds_list_add: {
        description: '[Function]' + i18n.ds_list_add.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_list_add.id },
            { label: 'value', documentation: i18n.ds_list_add.value },
            { label: '...', documentation: i18n.ds_list_add.more }
        ],
        signature: '(id, value, ...)'
    },
	ds_list_clear: {
        description: '[Function]' + i18n.ds_list_clear.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_list_clear.id }
        ],
        signature: '(id)'
    },
	ds_list_copy: {
        description: '[Function]' + i18n.ds_list_copy.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_list_copy.id },
            { label: 'source', documentation: i18n.ds_list_copy.source }
        ],
        signature: '(id, source)'
    },
	ds_list_create: {
        description: '[Function]' + i18n.ds_list_create.desc,
        available: datasimple.all
    },
	ds_list_delete: {
        description: '[Function]' + i18n.ds_list_delete.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_list_delete.id },
            { label: 'pos', documentation: i18n.ds_list_delete.pos }
        ],
        signature: '(id, pos)'
    },
	ds_list_destroy: {
        description: '[Function]' + i18n.ds_list_destroy.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_list_destroy.id }
        ],
        signature: '(id)'
    },
	ds_list_empty: {
        description: '[Function]' + i18n.ds_list_empty.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_list_empty.id }
        ],
        signature: '(id)'
    },
	ds_list_find_index: {
        description: '[Function]' + i18n.ds_list_find_index.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_list_find_index.id },
            { label: 'value', documentation: i18n.ds_list_find_index.value }
        ],
        signature: '(id, value)'
    },
	ds_list_find_value: {
        description: '[Function]' + i18n.ds_list_find_value.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_list_find_value.id },
            { label: 'pos', documentation: i18n.ds_list_find_value.pos }
        ],
        signature: '(id, pos)'
    },
	ds_list_insert: {
        description: '[Function]' + i18n.ds_list_insert.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_list_insert.id },
            { label: 'pos', documentation: i18n.ds_list_insert.pos },
            { label: 'value', documentation: i18n.ds_list_insert.value }
        ],
        signature: '(id, pos, value)'
    },
	ds_list_mark_as_list: {
        description: '[Function]' + i18n.ds_list_mark_as_list.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_list_mark_as_list.id },
            { label: 'pos', documentation: i18n.ds_list_mark_as_list.pos }
        ],
        signature: '(id, pos)'
    },
	ds_list_mark_as_map: {
        description: '[Function]' + i18n.ds_list_mark_as_map.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_list_mark_as_map.id },
            { label: 'pos', documentation: i18n.ds_list_mark_as_map.pos }
        ],
        signature: '(id, pos)'
    },
	ds_list_read: {
        description: '[Function]' + i18n.ds_list_read.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_list_read.id },
            { label: 'str', documentation: i18n.ds_list_read.str },
            { label: '...', documentation: i18n.ds_list_read.more }
        ],
        signature: '(id, str, ...)'
    },
	ds_list_replace: {
        description: '[Function]' + i18n.ds_list_replace.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_list_replace.id },
            { label: 'pos', documentation: i18n.ds_list_replace.pos },
            { label: 'value', documentation: i18n.ds_list_replace.value }
        ],
        signature: '(id, pos, value)'
    },
	ds_list_shuffle: {
        description: '[Function]' + i18n.ds_list_shuffle.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_list_shuffle.id }
        ],
        signature: '(id)'
    },
	ds_list_size: {
        description: '[Function]' + i18n.ds_list_size.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_list_size.id }
        ],
        signature: '(id)'
    },
	ds_list_sort: {
        description: '[Function]' + i18n.ds_list_sort.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_list_sort.id },
            { label: 'ascending', documentation: i18n.ds_list_sort.ascending }
        ],
        signature: '(id, ascending)'
    },
	ds_list_write: {
        description: '[Function]' + i18n.ds_list_write.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_list_write.id }
        ],
        signature: '(id)'
    },
	ds_map_add: {
        description: '[Function]' + i18n.ds_map_add.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_map_add.id },
            { label: 'key', documentation: i18n.ds_map_add.key },
            { label: 'value', documentation: i18n.ds_map_add.value }
        ],
        signature: '(id, key, value)'
    },
	ds_map_add_list: {
        description: '[Function]' + i18n.ds_map_add_list.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_map_add_list.id },
            { label: 'key', documentation: i18n.ds_map_add_list.key },
            { label: 'value', documentation: i18n.ds_map_add_list.value }
        ],
        signature: '(id, key, value)'
    },
	ds_map_add_map: {
        description: '[Function]' + i18n.ds_map_add_map.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_map_add_map.id },
            { label: 'key', documentation: i18n.ds_map_add_map.key },
            { label: 'value', documentation: i18n.ds_map_add_map.value }
        ],
        signature: '(id, key, value)'
    },
	ds_map_clear: {
        description: '[Function]' + i18n.ds_map_clear.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_map_clear.id }
        ],
        signature: '(id)'
    },
	ds_map_copy: {
        description: '[Function]' + i18n.ds_map_copy.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_map_copy.id },
            { label: 'source', documentation: i18n.ds_map_copy.source }
        ],
        signature: '(id, source)'
    },
	ds_map_create: {
        description: '[Function]' + i18n.ds_map_create.desc,
        available: datasimple.all
    },
	ds_map_delete: {
        description: '[Function]' + i18n.ds_map_delete.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_map_delete.id },
            { label: 'key', documentation: i18n.ds_map_delete.key }
        ],
        signature: '(id, key)'
    },
	ds_map_destroy: {
        description: '[Function]' + i18n.ds_map_destroy.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_map_destroy.id }
        ],
        signature: '(id)'
    },
	ds_map_empty: {
        description: '[Function]' + i18n.ds_map_empty.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_map_empty.id }
        ],
        signature: '(id)'
    },
	ds_map_exists: {
        description: '[Function]' + i18n.ds_map_exists.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_map_exists.id },
            { label: 'key', documentation: i18n.ds_map_exists.key }
        ],
        signature: '(id, key)'
    },
	ds_map_find_first: {
        description: '[Function]' + i18n.ds_map_find_first.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_map_find_first.id }
        ],
        signature: '(id)'
    },
	ds_map_find_last: {
        description: '[Function]' + i18n.ds_map_find_last.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_map_find_last.id }
        ],
        signature: '(id)'
    },
	ds_map_find_next: {
        description: '[Function]' + i18n.ds_map_find_next.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_map_find_next.id },
            { label: 'key', documentation: i18n.ds_map_find_next.key }
        ],
        signature: '(id, key)'
    },
	ds_map_find_previous: {
        description: '[Function]' + i18n.ds_map_find_previous.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_map_find_previous.id },
            { label: 'key', documentation: i18n.ds_map_find_previous.key }
        ],
        signature: '(id, key)'
    },
	ds_map_find_value: {
        description: '[Function]' + i18n.ds_map_find_value.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_map_find_value.id },
            { label: 'key', documentation: i18n.ds_map_find_value.key }
        ],
        signature: '(id, key)'
    },
	ds_map_read: {
        description: '[Function]' + i18n.ds_map_read.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_map_read.id },
            { label: 'str', documentation: i18n.ds_map_read.str },
            { label: '...', documentation: i18n.ds_map_read.more }
        ],
        signature: '(id, str, ...)'
    },
	ds_map_replace: {
        description: '[Function]' + i18n.ds_map_replace.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_map_replace.id },
            { label: 'key', documentation: i18n.ds_map_replace.key },
            { label: 'value', documentation: i18n.ds_map_replace.value }
        ],
        signature: '(id, key, value)'
    },
	ds_map_replace_list: {
        description: '[Function]' + i18n.ds_map_replace_list.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_map_replace_list.id },
            { label: 'key', documentation: i18n.ds_map_replace_list.key },
            { label: 'value', documentation: i18n.ds_map_replace_list.value }
        ],
        signature: '(id, key, value)'
    },
	ds_map_replace_map: {
        description: '[Function]' + i18n.ds_map_replace_map.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_map_replace_map.id },
            { label: 'key', documentation: i18n.ds_map_replace_map.key },
            { label: 'value', documentation: i18n.ds_map_replace_map.value }
        ],
        signature: '(id, key, value)'
    },
	ds_map_secure_load: {
        description: '[Function]' + i18n.ds_map_secure_load.desc,
        available: datasimple.all,
        parameters: [
            { label: 'filename', documentation: i18n.ds_map_secure_load.filename }
        ],
        signature: '(filename)'
    },
	ds_map_secure_load_buffer: {
        description: '[Function]' + i18n.ds_map_secure_load_buffer.desc,
        available: datasimple.all,
        parameters: [
            { label: 'buffer', documentation: i18n.ds_map_secure_load_buffer.buffer }
        ],
        signature: '(buffer)'
    },
	ds_map_secure_save: {
        description: '[Function]' + i18n.ds_map_secure_save.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_map_secure_save.id },
            { label: 'filename', documentation: i18n.ds_map_secure_save.filename }
        ],
        signature: '(id, filename)'
    },
	ds_map_secure_save_buffer: {
        description: '[Function]' + i18n.ds_map_secure_save_buffer.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_map_secure_save_buffer.id },
            { label: 'buffer', documentation: i18n.ds_map_secure_save_buffer.buffer }
        ],
        signature: '(id, buffer)'
    },
	ds_map_size: {
        description: '[Function]' + i18n.ds_map_size.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_map_size.id }
        ],
        signature: '(id)'
    },
	ds_map_write: {
        description: '[Function]' + i18n.ds_map_write.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_map_write.id }
        ],
        signature: '(id)'
    },
	ds_priority_add: {
        description: '[Function]' + i18n.ds_priority_add.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_priority_add.id },
            { label: 'value', documentation: i18n.ds_priority_add.value },
            { label: 'priority', documentation: i18n.ds_priority_add.priority }
        ],
        signature: '(id, value, priority)'
    },
	ds_priority_change_priority: {
        description: '[Function]' + i18n.ds_priority_change_priority.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_priority_change_priority.id },
            { label: 'value', documentation: i18n.ds_priority_change_priority.value },
            { label: 'priority', documentation: i18n.ds_priority_change_priority.priority }
        ],
        signature: '(id, value, priority)'
    },
	ds_priority_clear: {
        description: '[Function]' + i18n.ds_priority_clear.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_priority_clear.id }
        ],
        signature: '(id)'
    },
	ds_priority_copy: {
        description: '[Function]' + i18n.ds_priority_copy.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_priority_copy.id },
            { label: 'source', documentation: i18n.ds_priority_copy.source }
        ],
        signature: '(id, source)'
    },
	ds_priority_create: {
        description: '[Function]' + i18n.ds_priority_create.desc,
        available: datasimple.all
    },
	ds_priority_delete_max: {
        description: '[Function]' + i18n.ds_priority_delete_max.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_priority_delete_max.id }
        ],
        signature: '(id)'
    },
	ds_priority_delete_min: {
        description: '[Function]' + i18n.ds_priority_delete_min.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_priority_delete_min.id }
        ],
        signature: '(id)'
    },
	ds_priority_delete_value: {
        description: '[Function]' + i18n.ds_priority_delete_value.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_priority_delete_value.id },
            { label: 'value', documentation: i18n.ds_priority_delete_value.value }
        ],
        signature: '(id, value)'
    },
	ds_priority_destroy: {
        description: '[Function]' + i18n.ds_priority_destroy.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_priority_destroy.id }
        ],
        signature: '(id)'
    },
	ds_priority_empty: {
        description: '[Function]' + i18n.ds_priority_empty.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_priority_empty.id }
        ],
        signature: '(id)'
    },
	ds_priority_find_max: {
        description: '[Function]' + i18n.ds_priority_find_max.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_priority_find_max.id }
        ],
        signature: '(id)'
    },
	ds_priority_find_min: {
        description: '[Function]' + i18n.ds_priority_find_min.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_priority_find_min.id }
        ],
        signature: '(id)'
    },
	ds_priority_find_priority: {
        description: '[Function]' + i18n.ds_priority_find_priority.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_priority_find_priority.id },
            { label: 'value', documentation: i18n.ds_priority_find_priority.value }
        ],
        signature: '(id, value)'
    },
	ds_priority_read: {
        description: '[Function]' + i18n.ds_priority_read.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_priority_read.id },
            { label: 'str', documentation: i18n.ds_priority_read.str },
            { label: '...', documentation: i18n.ds_priority_read.more }
        ],
        signature: '(id, str, ...)'
    },
	ds_priority_size: {
        description: '[Function]' + i18n.ds_priority_size.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_priority_size.id }
        ],
        signature: '(id)'
    },
	ds_priority_write: {
        description: '[Function]' + i18n.ds_priority_write.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_priority_write.id }
        ],
        signature: '(id)'
    },
	ds_queue_clear: {
        description: '[Function]' + i18n.ds_queue_clear.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_queue_clear.id }
        ],
        signature: '(id)'
    },
	ds_queue_copy: {
        description: '[Function]' + i18n.ds_queue_copy.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_queue_copy.id },
            { label: 'source', documentation: i18n.ds_queue_copy.source }
        ],
        signature: '(id, source)'
    },
	ds_queue_create: {
        description: '[Function]' + i18n.ds_queue_create.desc,
        available: datasimple.all
    },
	ds_queue_dequeue: {
        description: '[Function]' + i18n.ds_queue_dequeue.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_queue_dequeue.id }
        ],
        signature: '(id)'
    },
	ds_queue_destroy: {
        description: '[Function]' + i18n.ds_queue_destroy.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_queue_destroy.id }
        ],
        signature: '(id)'
    },
	ds_queue_empty: {
        description: '[Function]' + i18n.ds_queue_empty.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_queue_empty.id }
        ],
        signature: '(id)'
    },
	ds_queue_enqueue: {
        description: '[Function]' + i18n.ds_queue_enqueue.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_queue_enqueue.id },
            { label: 'value', documentation: i18n.ds_queue_enqueue.value },
            { label: '...', documentation: i18n.ds_queue_enqueue.more }
        ],
        signature: '(id, value, ...)'
    },
	ds_queue_head: {
        description: '[Function]' + i18n.ds_queue_head.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_queue_head.id }
        ],
        signature: '(id)'
    },
	ds_queue_read: {
        description: '[Function]' + i18n.ds_queue_read.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_queue_read.id },
            { label: 'str', documentation: i18n.ds_queue_read.str },
            { label: '...', documentation: i18n.ds_queue_read.more }
        ],
        signature: '(id, str, ...)'
    },
	ds_queue_size: {
        description: '[Function]' + i18n.ds_queue_size.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_queue_size.id }
        ],
        signature: '(id)'
    },
	ds_queue_tail: {
        description: '[Function]' + i18n.ds_queue_tail.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_queue_tail.id }
        ],
        signature: '(id)'
    },
	ds_queue_write: {
        description: '[Function]' + i18n.ds_queue_write.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_queue_write.id }
        ],
        signature: '(id)'
    },
	ds_set_precision: {
        description: '[Function]' + i18n.ds_set_precision.desc,
        available: datasimple.all,
        parameters: [
            { label: 'prec', documentation: i18n.ds_set_precision.prec }
        ],
        signature: '(prec)'
    },
	ds_stack_clear: {
        description: '[Function]' + i18n.ds_stack_clear.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_stack_clear.id }
        ],
        signature: '(id)'
    },
	ds_stack_copy: {
        description: '[Function]' + i18n.ds_stack_copy.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_stack_copy.id },
            { label: 'source', documentation: i18n.ds_stack_copy.source }
        ],
        signature: '(id, source)'
    },
	ds_stack_create: {
        description: '[Function]' + i18n.ds_stack_create.desc,
        available: datasimple.all
    },
	ds_stack_destroy: {
        description: '[Function]' + i18n.ds_stack_destroy.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_stack_destroy.id }
        ],
        signature: '(id)'
    },
	ds_stack_empty: {
        description: '[Function]' + i18n.ds_stack_empty.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_stack_empty.id }
        ],
        signature: '(id)'
    },
	ds_stack_pop: {
        description: '[Function]' + i18n.ds_stack_pop.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_stack_pop.id }
        ],
        signature: '(id)'
    },
	ds_stack_push: {
        description: '[Function]' + i18n.ds_stack_push.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_stack_push.id },
            { label: 'value', documentation: i18n.ds_stack_push.value },
            { label: '...', documentation: i18n.ds_stack_push.more }
        ],
        signature: '(id, value, ...)'
    },
	ds_stack_read: {
        description: '[Function]' + i18n.ds_stack_read.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_stack_read.id },
            { label: 'str', documentation: i18n.ds_stack_read.str },
            { label: '...', documentation: i18n.ds_stack_read.more }
        ],
        signature: '(id, str, ...)'
    },
	ds_stack_size: {
        description: '[Function]' + i18n.ds_stack_size.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_stack_size.id }
        ],
        signature: '(id)'
    },
	ds_stack_top: {
        description: '[Function]' + i18n.ds_stack_top.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_stack_top.id }
        ],
        signature: '(id)'
    },
	ds_stack_write: {
        description: '[Function]' + i18n.ds_stack_write.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_stack_write.id }
        ],
        signature: '(id)'
    },
	dtan: {
        description: '[Function]' + i18n.dtan.desc,
        available: datasimple.all,
        parameters: [
            { label: 'degree_angle', documentation: i18n.dtan.degree_angle }
        ],
        signature: '(degree_angle)'
    },
	effect_clear: {
        description: '[Function]' + i18n.effect_clear.desc,
        available: datasimple.all
    },
	effect_create_above: {
        description: '[Function]' + i18n.effect_create_above.desc,
        available: datasimple.all,
        parameters: [
            { label: 'kind', documentation: i18n.effect_create_above.kind },
            { label: 'x', documentation: i18n.effect_create_above.x },
            { label: 'y', documentation: i18n.effect_create_above.y },
            { label: 'size', documentation: i18n.effect_create_above.size },
            { label: 'colour', documentation: i18n.effect_create_above.colour }
        ],
        signature: '(kind, x, y, size, colour)'
    },
	effect_create_below: {
        description: '[Function]' + i18n.effect_create_below.desc,
        available: datasimple.all,
        parameters: [
            { label: 'kind', documentation: i18n.effect_create_below.kind },
            { label: 'x', documentation: i18n.effect_create_below.x },
            { label: 'y', documentation: i18n.effect_create_below.y },
            { label: 'size', documentation: i18n.effect_create_below.size },
            { label: 'colour', documentation: i18n.effect_create_below.colour }
        ],
        signature: '(kind, x, y, size, colour)'
    },
	environment_get_variable: {
        description: '[Function]' + i18n.environment_get_variable.desc,
        available: datasimple.all,
        parameters: [
            { label: 'name', documentation: i18n.environment_get_variable.name }
        ],
        signature: '(name)'
    },
	event_inherited: {
        description: '[Function]' + i18n.event_inherited.desc,
        available: datasimple.all
    },
	event_perform: {
        description: '[Function]' + i18n.event_perform.desc,
        available: datasimple.all,
        parameters: [
            { label: 'type', documentation: i18n.event_perform.type },
            { label: 'numb', documentation: i18n.event_perform.numb }
        ],
        signature: '(type, numb)'
    },
	event_perform_object: {
        description: '[Function]' + i18n.event_perform_object.desc,
        available: datasimple.all,
        parameters: [
            { label: 'obj', documentation: i18n.event_perform_object.obj },
            { label: 'type', documentation: i18n.event_perform_object.type },
            { label: 'numb', documentation: i18n.event_perform_object.numb }
        ],
        signature: '(obj, type, numb)'
    },
	event_user: {
        description: '[Function]' + i18n.event_user.desc,
        available: datasimple.all,
        parameters: [
            { label: 'numb', documentation: i18n.event_user.numb }
        ],
        signature: '(numb)'
    },
	exp: {
        description: '[Function]' + i18n.exp.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x', documentation: i18n.exp.x }
        ],
        signature: '(x)'
    },
	external_call: {
        description: '[Function]' + i18n.external_call.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.external_call.id },
            { label: 'arg1', documentation: i18n.external_call.arg1 },
            { label: 'arg2', documentation: i18n.external_call.arg2 },
            { label: '...', documentation: i18n.external_call.more }
        ],
        signature: '(id, arg1, arg2, ...)'
    },
	external_define: {
        description: '[Function]' + i18n.external_define.desc,
        available: datasimple.all,
        parameters: [
            { label: 'dll', documentation: i18n.external_define.dll },
            { label: 'name', documentation: i18n.external_define.name },
            { label: 'calltype', documentation: i18n.external_define.calltype },
            { label: 'restype', documentation: i18n.external_define.restype },
            { label: 'argnumb', documentation: i18n.external_define.argnumb },
            { label: 'arg1type', documentation: i18n.external_define.arg1type },
            { label: 'arg2type', documentation: i18n.external_define.arg2type },
            { label: '...', documentation: i18n.external_define.more }
        ],
        signature: '(dll, name, calltype, restype, argnumb, arg1type, arg2type, ...)'
    },
	external_free: {
        description: '[Function]' + i18n.external_free.desc,
        available: datasimple.all,
        parameters: [
            { label: 'dllname', documentation: i18n.external_free.dllname }
        ],
        signature: '(dllname)'
    },
	facebook_accesstoken: {
        description: '[Function]' + i18n.facebook_accesstoken.desc,
        available: datasimple.gms1
    },
	facebook_check_permission: {
        description: '[Function]' + i18n.facebook_check_permission.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'permission', documentation: i18n.facebook_check_permission.permission }
        ],
        signature: '(permission)'
    },
	facebook_dialog: {
        description: '[Function]' + i18n.facebook_dialog.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'graph_path', documentation: i18n.facebook_dialog.graph_path },
            { label: 'ds_map_params', documentation: i18n.facebook_dialog.ds_map_params },
            { label: 'ds_map_response', documentation: i18n.facebook_dialog.ds_map_response }
        ],
        signature: '(graph_path, ds_map_params, ds_map_response)'
    },
	facebook_graph_request: {
        description: '[Function]' + i18n.facebook_graph_request.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'graph_path', documentation: i18n.facebook_graph_request.graph_path },
            { label: 'httpMethod', documentation: i18n.facebook_graph_request.httpMethod },
            { label: 'ds_map_params', documentation: i18n.facebook_graph_request.ds_map_params },
            { label: 'ds_map_response', documentation: i18n.facebook_graph_request.ds_map_response }
        ],
        signature: '(graph_path, httpMethod, ds_map_params, ds_map_response)'
    },
	facebook_init: {
        description: '[Function]' + i18n.facebook_init.desc,
        available: datasimple.gms1
    },
	facebook_launch_offerwall: {
        description: '[Function]' + i18n.facebook_launch_offerwall.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'product_url', documentation: i18n.facebook_launch_offerwall.product_url }
        ],
        signature: '(product_url)'
    },
	facebook_login: {
        description: '[Function]' + i18n.facebook_login.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'ds_list_of_permissions', documentation: i18n.facebook_login.ds_list_of_permissions },
            { label: 'ios_login_type', documentation: i18n.facebook_login.ios_login_type }
        ],
        signature: '(ds_list_of_permissions, ios_login_type)'
    },
	facebook_logout: {
        description: '[Function]' + i18n.facebook_logout.desc,
        available: datasimple.gms1
    },
	facebook_post_message: {
        description: '[Function]' + i18n.facebook_post_message.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'title', documentation: i18n.facebook_post_message.title },
            { label: 'caption', documentation: i18n.facebook_post_message.caption },
            { label: 'message', documentation: i18n.facebook_post_message.message },
            { label: 'picture_url', documentation: i18n.facebook_post_message.picture_url },
            { label: 'redirect_url', documentation: i18n.facebook_post_message.redirect_url },
            { label: 'actionname', documentation: i18n.facebook_post_message.actionname },
            { label: 'action_url', documentation: i18n.facebook_post_message.action_url }
        ],
        signature: '(title, caption, message, picture_url, redirect_url, actionname, action_url)'
    },
	facebook_request_publish_permissions: {
        description: '[Function]' + i18n.facebook_request_publish_permissions.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'ds_list_permissions', documentation: i18n.facebook_request_publish_permissions.ds_list_permissions }
        ],
        signature: '(ds_list_permissions)'
    },
	facebook_request_read_permissions: {
        description: '[Function]' + i18n.facebook_request_read_permissions.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'ds_list_permissions', documentation: i18n.facebook_request_read_permissions.ds_list_permissions }
        ],
        signature: '(ds_list_permissions)'
    },
	facebook_send_invite: {
        description: '[Function]' + i18n.facebook_send_invite.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'title', documentation: i18n.facebook_send_invite.title },
            { label: 'message', documentation: i18n.facebook_send_invite.message },
            { label: 'picture_url', documentation: i18n.facebook_send_invite.picture_url },
            { label: 'redirect_url', documentation: i18n.facebook_send_invite.redirect_url },
            { label: 'ds_map_response', documentation: i18n.facebook_send_invite.ds_map_response }
        ],
        signature: '(title, message, picture_url, redirect_url, ds_map_response)'
    },
	facebook_status: {
        description: '[Function]' + i18n.facebook_status.desc,
        available: datasimple.gms1
    },
	facebook_user_id: {
        description: '[Function]' + i18n.facebook_user_id.desc,
        available: datasimple.gms1
    },
	filename_change_ext: {
        description: '[Function]' + i18n.filename_change_ext.desc,
        available: datasimple.all,
        parameters: [
            { label: 'fname', documentation: i18n.filename_change_ext.fname },
            { label: 'newext', documentation: i18n.filename_change_ext.newext }
        ],
        signature: '(fname, newext)'
    },
	filename_dir: {
        description: '[Function]' + i18n.filename_dir.desc,
        available: datasimple.all,
        parameters: [
            { label: 'fname', documentation: i18n.filename_dir.fname }
        ],
        signature: '(fname)'
    },
	filename_drive: {
        description: '[Function]' + i18n.filename_drive.desc,
        available: datasimple.all,
        parameters: [
            { label: 'fname', documentation: i18n.filename_drive.fname }
        ],
        signature: '(fname)'
    },
	filename_ext: {
        description: '[Function]' + i18n.filename_ext.desc,
        available: datasimple.all,
        parameters: [
            { label: 'fname', documentation: i18n.filename_ext.fname }
        ],
        signature: '(fname)'
    },
	filename_name: {
        description: '[Function]' + i18n.filename_name.desc,
        available: datasimple.all,
        parameters: [
            { label: 'fname', documentation: i18n.filename_name.fname }
        ],
        signature: '(fname)'
    },
	filename_path: {
        description: '[Function]' + i18n.filename_path.desc,
        available: datasimple.all,
        parameters: [
            { label: 'fname', documentation: i18n.filename_path.fname }
        ],
        signature: '(fname)'
    },
	file_attributes: {
        description: '[Function]' + i18n.file_attributes.desc,
        available: datasimple.all,
        parameters: [
            { label: 'fname', documentation: i18n.file_attributes.fname },
            { label: 'attr', documentation: i18n.file_attributes.attr }
        ],
        signature: '(fname, attr)'
    },
	file_bin_close: {
        description: '[Function]' + i18n.file_bin_close.desc,
        available: datasimple.all,
        parameters: [
            { label: 'binfile', documentation: i18n.file_bin_close.binfile }
        ],
        signature: '(binfile)'
    },
	file_bin_open: {
        description: '[Function]' + i18n.file_bin_open.desc,
        available: datasimple.all,
        parameters: [
            { label: 'fname', documentation: i18n.file_bin_open.fname },
            { label: 'mode', documentation: i18n.file_bin_open.mode }
        ],
        signature: '(fname, mode)'
    },
	file_bin_position: {
        description: '[Function]' + i18n.file_bin_position.desc,
        available: datasimple.all,
        parameters: [
            { label: 'binfile', documentation: i18n.file_bin_position.binfile }
        ],
        signature: '(binfile)'
    },
	file_bin_read_byte: {
        description: '[Function]' + i18n.file_bin_read_byte.desc,
        available: datasimple.all,
        parameters: [
            { label: 'binfile', documentation: i18n.file_bin_read_byte.binfile }
        ],
        signature: '(binfile)'
    },
	file_bin_rewrite: {
        description: '[Function]' + i18n.file_bin_rewrite.desc,
        available: datasimple.all,
        parameters: [
            { label: 'binfile', documentation: i18n.file_bin_rewrite.binfile }
        ],
        signature: '(binfile)'
    },
	file_bin_seek: {
        description: '[Function]' + i18n.file_bin_seek.desc,
        available: datasimple.all,
        parameters: [
            { label: 'binfile', documentation: i18n.file_bin_seek.binfile },
            { label: 'pos', documentation: i18n.file_bin_seek.pos }
        ],
        signature: '(binfile, pos)'
    },
	file_bin_size: {
        description: '[Function]' + i18n.file_bin_size.desc,
        available: datasimple.all,
        parameters: [
            { label: 'binfile', documentation: i18n.file_bin_size.binfile }
        ],
        signature: '(binfile)'
    },
	file_bin_write_byte: {
        description: '[Function]' + i18n.file_bin_write_byte.desc,
        available: datasimple.all,
        parameters: [
            { label: 'binfile', documentation: i18n.file_bin_write_byte.binfile },
            { label: 'byte', documentation: i18n.file_bin_write_byte.byte }
        ],
        signature: '(binfile, byte)'
    },
	file_copy: {
        description: '[Function]' + i18n.file_copy.desc,
        available: datasimple.all,
        parameters: [
            { label: 'fname', documentation: i18n.file_copy.fname },
            { label: 'newname', documentation: i18n.file_copy.newname }
        ],
        signature: '(fname, newname)'
    },
	file_delete: {
        description: '[Function]' + i18n.file_delete.desc,
        available: datasimple.all,
        parameters: [
            { label: 'fname', documentation: i18n.file_delete.fname }
        ],
        signature: '(fname)'
    },
	file_exists: {
        description: '[Function]' + i18n.file_exists.desc,
        available: datasimple.all,
        parameters: [
            { label: 'fname', documentation: i18n.file_exists.fname }
        ],
        signature: '(fname)'
    },
	file_find_close: {
        description: '[Function]' + i18n.file_find_close.desc,
        available: datasimple.all
    },
	file_find_first: {
        description: '[Function]' + i18n.file_find_first.desc,
        available: datasimple.all,
        parameters: [
            { label: 'mask', documentation: i18n.file_find_first.mask },
            { label: 'attr', documentation: i18n.file_find_first.attr }
        ],
        signature: '(mask, attr)'
    },
	file_find_next: {
        description: '[Function]' + i18n.file_find_next.desc,
        available: datasimple.all
    },
	file_rename: {
        description: '[Function]' + i18n.file_rename.desc,
        available: datasimple.all,
        parameters: [
            { label: 'oldname', documentation: i18n.file_rename.oldname },
            { label: 'newname', documentation: i18n.file_rename.newname }
        ],
        signature: '(oldname, newname)'
    },
	file_text_close: {
        description: '[Function]' + i18n.file_text_close.desc,
        available: datasimple.all,
        parameters: [
            { label: 'file', documentation: i18n.file_text_close.file }
        ],
        signature: '(file)'
    },
	file_text_eof: {
        description: '[Function]' + i18n.file_text_eof.desc,
        available: datasimple.all,
        parameters: [
            { label: 'file', documentation: i18n.file_text_eof.file }
        ],
        signature: '(file)'
    },
	file_text_eoln: {
        description: '[Function]' + i18n.file_text_eoln.desc,
        available: datasimple.all,
        parameters: [
            { label: 'file', documentation: i18n.file_text_eoln.file }
        ],
        signature: '(file)'
    },
	file_text_open_append: {
        description: '[Function]' + i18n.file_text_open_append.desc,
        available: datasimple.all,
        parameters: [
            { label: 'fname', documentation: i18n.file_text_open_append.fname }
        ],
        signature: '(fname)'
    },
	file_text_open_from_string: {
        description: '[Function]' + i18n.file_text_open_from_string.desc,
        available: datasimple.all,
        parameters: [
            { label: 'content', documentation: i18n.file_text_open_from_string.content }
        ],
        signature: '(content)'
    },
	file_text_open_read: {
        description: '[Function]' + i18n.file_text_open_read.desc,
        available: datasimple.all,
        parameters: [
            { label: 'fname', documentation: i18n.file_text_open_read.fname }
        ],
        signature: '(fname)'
    },
	file_text_open_write: {
        description: '[Function]' + i18n.file_text_open_write.desc,
        available: datasimple.all,
        parameters: [
            { label: 'fname', documentation: i18n.file_text_open_write.fname }
        ],
        signature: '(fname)'
    },
	file_text_readln: {
        description: '[Function]' + i18n.file_text_readln.desc,
        available: datasimple.all,
        parameters: [
            { label: 'file', documentation: i18n.file_text_readln.file }
        ],
        signature: '(file)'
    },
	file_text_read_real: {
        description: '[Function]' + i18n.file_text_read_real.desc,
        available: datasimple.all,
        parameters: [
            { label: 'file', documentation: i18n.file_text_read_real.file }
        ],
        signature: '(file)'
    },
	file_text_read_string: {
        description: '[Function]' + i18n.file_text_read_string.desc,
        available: datasimple.all,
        parameters: [
            { label: 'file', documentation: i18n.file_text_read_string.file }
        ],
        signature: '(file)'
    },
	file_text_writeln: {
        description: '[Function]' + i18n.file_text_writeln.desc,
        available: datasimple.all,
        parameters: [
            { label: 'file', documentation: i18n.file_text_writeln.file }
        ],
        signature: '(file)'
    },
	file_text_write_real: {
        description: '[Function]' + i18n.file_text_write_real.desc,
        available: datasimple.all,
        parameters: [
            { label: 'file', documentation: i18n.file_text_write_real.file },
            { label: 'val', documentation: i18n.file_text_write_real.val }
        ],
        signature: '(file, val)'
    },
	file_text_write_string: {
        description: '[Function]' + i18n.file_text_write_string.desc,
        available: datasimple.all,
        parameters: [
            { label: 'file', documentation: i18n.file_text_write_string.file },
            { label: 'str', documentation: i18n.file_text_write_string.str }
        ],
        signature: '(file, str)'
    },
	floor: {
        description: '[Function]' + i18n.floor.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x', documentation: i18n.floor.x }
        ],
        signature: '(x)'
    },
	font_add: {
        description: '[Function]' + i18n.font_add.desc,
        available: datasimple.all,
        parameters: [
            { label: 'name', documentation: i18n.font_add.name },
            { label: 'size', documentation: i18n.font_add.size },
            { label: 'bold', documentation: i18n.font_add.bold },
            { label: 'italic', documentation: i18n.font_add.italic },
            { label: 'first', documentation: i18n.font_add.first },
            { label: 'last', documentation: i18n.font_add.last }
        ],
        signature: '(name, size, bold, italic, first, last)'
    },
	font_add_sprite: {
        description: '[Function]' + i18n.font_add_sprite.desc,
        available: datasimple.all,
        parameters: [
            { label: 'spr', documentation: i18n.font_add_sprite.spr },
            { label: 'first', documentation: i18n.font_add_sprite.first },
            { label: 'prop', documentation: i18n.font_add_sprite.prop },
            { label: 'sep', documentation: i18n.font_add_sprite.sep }
        ],
        signature: '(spr, first, prop, sep)'
    },
	font_add_sprite_ext: {
        description: '[Function]' + i18n.font_add_sprite_ext.desc,
        available: datasimple.all,
        parameters: [
            { label: 'spr', documentation: i18n.font_add_sprite_ext.spr },
            { label: 'mapstring', documentation: i18n.font_add_sprite_ext.mapstring },
            { label: 'prop', documentation: i18n.font_add_sprite_ext.prop },
            { label: 'sep', documentation: i18n.font_add_sprite_ext.sep }
        ],
        signature: '(spr, mapstring, prop, sep)'
    },
	font_delete: {
        description: '[Function]' + i18n.font_delete.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.font_delete.ind }
        ],
        signature: '(ind)'
    },
	font_exists: {
        description: '[Function]' + i18n.font_exists.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.font_exists.ind }
        ],
        signature: '(ind)'
    },
	font_get_bold: {
        description: '[Function]' + i18n.font_get_bold.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.font_get_bold.ind }
        ],
        signature: '(ind)'
    },
	font_get_first: {
        description: '[Function]' + i18n.font_get_first.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.font_get_first.ind }
        ],
        signature: '(ind)'
    },
	font_get_fontname: {
        description: '[Function]' + i18n.font_get_fontname.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.font_get_fontname.ind }
        ],
        signature: '(ind)'
    },
	font_get_italic: {
        description: '[Function]' + i18n.font_get_italic.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.font_get_italic.ind }
        ],
        signature: '(ind)'
    },
	font_get_last: {
        description: '[Function]' + i18n.font_get_last.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.font_get_last.ind }
        ],
        signature: '(ind)'
    },
	font_get_name: {
        description: '[Function]' + i18n.font_get_name.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.font_get_name.ind }
        ],
        signature: '(ind)'
    },
	font_get_size: {
        description: '[Function]' + i18n.font_get_size.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.font_get_size.ind }
        ],
        signature: '(ind)'
    },
	font_get_texture: {
        description: '[Function]' + i18n.font_get_texture.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.font_get_texture.ind }
        ],
        signature: '(ind)'
    },
	font_get_uvs: {
        description: '[Function]' + i18n.font_get_uvs.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.font_get_uvs.ind }
        ],
        signature: '(ind)'
    },
	font_replace: {
        description: '[Function]' + i18n.font_replace.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.font_replace.ind },
            { label: 'name', documentation: i18n.font_replace.name },
            { label: 'size', documentation: i18n.font_replace.size },
            { label: 'bold', documentation: i18n.font_replace.bold },
            { label: 'italic', documentation: i18n.font_replace.italic },
            { label: 'first', documentation: i18n.font_replace.first },
            { label: 'last', documentation: i18n.font_replace.last }
        ],
        signature: '(ind, name, size, bold, italic, first, last)'
    },
	font_replace_sprite: {
        description: '[Function]' + i18n.font_replace_sprite.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.font_replace_sprite.ind },
            { label: 'spr', documentation: i18n.font_replace_sprite.spr },
            { label: 'first', documentation: i18n.font_replace_sprite.first },
            { label: 'prop', documentation: i18n.font_replace_sprite.prop },
            { label: 'sep', documentation: i18n.font_replace_sprite.sep }
        ],
        signature: '(ind, spr, first, prop, sep)'
    },
	font_replace_sprite_ext: {
        description: '[Function]' + i18n.font_replace_sprite_ext.desc,
        available: datasimple.all,
        parameters: [
            { label: 'font', documentation: i18n.font_replace_sprite_ext.font },
            { label: 'spr', documentation: i18n.font_replace_sprite_ext.spr },
            { label: 'string_map', documentation: i18n.font_replace_sprite_ext.string_map },
            { label: 'prop', documentation: i18n.font_replace_sprite_ext.prop },
            { label: 'sep', documentation: i18n.font_replace_sprite_ext.sep }
        ],
        signature: '(font, spr, string_map, prop, sep)'
    },
	font_set_cache_size: {
        description: '[Function]' + i18n.font_set_cache_size.desc,
        available: datasimple.all,
        parameters: [
            { label: 'font', documentation: i18n.font_set_cache_size.font },
            { label: 'max', documentation: i18n.font_set_cache_size.max }
        ],
        signature: '(font, max)'
    },
	frac: {
        description: '[Function]' + i18n.frac.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x', documentation: i18n.frac.x }
        ],
        signature: '(x)'
    },
	gamepad_axis_count: {
        description: '[Function]' + i18n.gamepad_axis_count.desc,
        available: datasimple.all,
        parameters: [
            { label: 'axis', documentation: i18n.gamepad_axis_count.axis }
        ],
        signature: '(axis)'
    },
	gamepad_axis_value: {
        description: '[Function]' + i18n.gamepad_axis_value.desc,
        available: datasimple.all,
        parameters: [
            { label: 'device', documentation: i18n.gamepad_axis_value.device },
            { label: 'axisIndex', documentation: i18n.gamepad_axis_value.axisIndex }
        ],
        signature: '(device, axisIndex)'
    },
	gamepad_button_check: {
        description: '[Function]' + i18n.gamepad_button_check.desc,
        available: datasimple.all,
        parameters: [
            { label: 'device', documentation: i18n.gamepad_button_check.device },
            { label: 'buttonIndex', documentation: i18n.gamepad_button_check.buttonIndex }
        ],
        signature: '(device, buttonIndex)'
    },
	gamepad_button_check_pressed: {
        description: '[Function]' + i18n.gamepad_button_check_pressed.desc,
        available: datasimple.all,
        parameters: [
            { label: 'device', documentation: i18n.gamepad_button_check_pressed.device },
            { label: 'buttonIndex', documentation: i18n.gamepad_button_check_pressed.buttonIndex }
        ],
        signature: '(device, buttonIndex)'
    },
	gamepad_button_check_released: {
        description: '[Function]' + i18n.gamepad_button_check_released.desc,
        available: datasimple.all,
        parameters: [
            { label: 'device', documentation: i18n.gamepad_button_check_released.device },
            { label: 'buttonIndex', documentation: i18n.gamepad_button_check_released.buttonIndex }
        ],
        signature: '(device, buttonIndex)'
    },
	gamepad_button_count: {
        description: '[Function]' + i18n.gamepad_button_count.desc,
        available: datasimple.all,
        parameters: [
            { label: 'device', documentation: i18n.gamepad_button_count.device }
        ],
        signature: '(device)'
    },
	gamepad_button_value: {
        description: '[Function]' + i18n.gamepad_button_value.desc,
        available: datasimple.all,
        parameters: [
            { label: 'device', documentation: i18n.gamepad_button_value.device },
            { label: 'buttonIndex', documentation: i18n.gamepad_button_value.buttonIndex }
        ],
        signature: '(device, buttonIndex)'
    },
	gamepad_get_axis_deadzone: {
        description: '[Function]' + i18n.gamepad_get_axis_deadzone.desc,
        available: datasimple.all,
        parameters: [
            { label: 'device', documentation: i18n.gamepad_get_axis_deadzone.device }
        ],
        signature: '(device)'
    },
	gamepad_get_button_threshold: {
        description: '[Function]' + i18n.gamepad_get_button_threshold.desc,
        available: datasimple.all,
        parameters: [
            { label: 'device', documentation: i18n.gamepad_get_button_threshold.device }
        ],
        signature: '(device)'
    },
	gamepad_get_description: {
        description: '[Function]' + i18n.gamepad_get_description.desc,
        available: datasimple.all,
        parameters: [
            { label: 'device', documentation: i18n.gamepad_get_description.device }
        ],
        signature: '(device)'
    },
	gamepad_get_device_count: {
        description: '[Function]' + i18n.gamepad_get_device_count.desc,
        available: datasimple.all
    },
	gamepad_is_connected: {
        description: '[Function]' + i18n.gamepad_is_connected.desc,
        available: datasimple.all,
        parameters: [
            { label: 'device', documentation: i18n.gamepad_is_connected.device }
        ],
        signature: '(device)'
    },
	gamepad_is_supported: {
        description: '[Function]' + i18n.gamepad_is_supported.desc,
        available: datasimple.all
    },
	gamepad_set_axis_deadzone: {
        description: '[Function]' + i18n.gamepad_set_axis_deadzone.desc,
        available: datasimple.all,
        parameters: [
            { label: 'device', documentation: i18n.gamepad_set_axis_deadzone.device },
            { label: 'deadzone', documentation: i18n.gamepad_set_axis_deadzone.deadzone }
        ],
        signature: '(device, deadzone)'
    },
	gamepad_set_button_threshold: {
        description: '[Function]' + i18n.gamepad_set_button_threshold.desc,
        available: datasimple.all,
        parameters: [
            { label: 'device', documentation: i18n.gamepad_set_button_threshold.device },
            { label: 'threshold', documentation: i18n.gamepad_set_button_threshold.threshold }
        ],
        signature: '(device, threshold)'
    },
	gamepad_set_color: {
        description: '[Function]' + i18n.gamepad_set_color.desc,
        available: datasimple.all,
        parameters: [
            { label: 'index', documentation: i18n.gamepad_set_color.index },
            { label: 'color', documentation: i18n.gamepad_set_color.color }
        ],
        signature: '(index, color)'
    },
	gamepad_set_colour: {
        description: '[Function]' + i18n.gamepad_set_colour.desc,
        available: datasimple.all,
        parameters: [
            { label: 'index', documentation: i18n.gamepad_set_colour.index },
            { label: 'colour', documentation: i18n.gamepad_set_colour.colour }
        ],
        signature: '(index, colour)'
    },
	gamepad_set_vibration: {
        description: '[Function]' + i18n.gamepad_set_vibration.desc,
        available: datasimple.all,
        parameters: [
            { label: 'device', documentation: i18n.gamepad_set_vibration.device },
            { label: 'leftMotorSpeed', documentation: i18n.gamepad_set_vibration.leftMotorSpeed },
            { label: 'rightMotorSpeed', documentation: i18n.gamepad_set_vibration.rightMotorSpeed }
        ],
        signature: '(device, leftMotorSpeed, rightMotorSpeed)'
    },
	game_end: {
        description: '[Function]' + i18n.game_end.desc,
        available: datasimple.all
    },
	game_load: {
        description: '[Function]' + i18n.game_load.desc,
        available: datasimple.all,
        parameters: [
            { label: 'filename', documentation: i18n.game_load.filename }
        ],
        signature: '(filename)'
    },
	game_load_buffer: {
        description: '[Function]' + i18n.game_load_buffer.desc,
        available: datasimple.all,
        parameters: [
            { label: 'buffer', documentation: i18n.game_load_buffer.buffer }
        ],
        signature: '(buffer)'
    },
	game_restart: {
        description: '[Function]' + i18n.game_restart.desc,
        available: datasimple.all
    },
	game_save: {
        description: '[Function]' + i18n.game_save.desc,
        available: datasimple.all,
        parameters: [
            { label: 'filename', documentation: i18n.game_save.filename }
        ],
        signature: '(filename)'
    },
	game_save_buffer: {
        description: '[Function]' + i18n.game_save_buffer.desc,
        available: datasimple.all,
        parameters: [
            { label: 'buffer', documentation: i18n.game_save_buffer.buffer }
        ],
        signature: '(buffer)'
    },
	get_integer: {
        description: '[Function]' + i18n.get_integer.desc,
        available: datasimple.all,
        parameters: [
            { label: 'str', documentation: i18n.get_integer.str },
            { label: 'def', documentation: i18n.get_integer.def }
        ],
        signature: '(str, def)'
    },
	get_integer_async: {
        description: '[Function]' + i18n.get_integer_async.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'str', documentation: i18n.get_integer_async.str },
            { label: 'def', documentation: i18n.get_integer_async.def }
        ],
        signature: '(str, def)'
    },
	get_login_async: {
        description: '[Function]' + i18n.get_login_async.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'username', documentation: i18n.get_login_async.username },
            { label: 'password', documentation: i18n.get_login_async.password }
        ],
        signature: '(username, password)'
    },
	get_open_filename: {
        description: '[Function]' + i18n.get_open_filename.desc,
        available: datasimple.all,
        parameters: [
            { label: 'filter', documentation: i18n.get_open_filename.filter },
            { label: 'fname', documentation: i18n.get_open_filename.fname }
        ],
        signature: '(filter, fname)'
    },
	get_open_filename_ext: {
        description: '[Function]' + i18n.get_open_filename_ext.desc,
        available: datasimple.all,
        parameters: [
            { label: 'filter', documentation: i18n.get_open_filename_ext.filter },
            { label: 'fname', documentation: i18n.get_open_filename_ext.fname },
            { label: 'dir', documentation: i18n.get_open_filename_ext.dir },
            { label: 'title', documentation: i18n.get_open_filename_ext.title }
        ],
        signature: '(filter, fname, dir, title)'
    },
	get_save_filename: {
        description: '[Function]' + i18n.get_save_filename.desc,
        available: datasimple.all,
        parameters: [
            { label: 'filter', documentation: i18n.get_save_filename.filter },
            { label: 'fname', documentation: i18n.get_save_filename.fname }
        ],
        signature: '(filter, fname)'
    },
	get_save_filename_ext: {
        description: '[Function]' + i18n.get_save_filename_ext.desc,
        available: datasimple.all,
        parameters: [
            { label: 'filter', documentation: i18n.get_save_filename_ext.filter },
            { label: 'fname', documentation: i18n.get_save_filename_ext.fname },
            { label: 'dir', documentation: i18n.get_save_filename_ext.dir },
            { label: 'title', documentation: i18n.get_save_filename_ext.title }
        ],
        signature: '(filter, fname, dir, title)'
    },
	get_string: {
        description: '[Function]' + i18n.get_string.desc,
        available: datasimple.all,
        parameters: [
            { label: 'str', documentation: i18n.get_string.str },
            { label: 'def', documentation: i18n.get_string.def }
        ],
        signature: '(str, def)'
    },
	get_string_async: {
        description: '[Function]' + i18n.get_string_async.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'str', documentation: i18n.get_string_async.str },
            { label: 'def', documentation: i18n.get_string_async.def }
        ],
        signature: '(str, def)'
    },
	get_timer: {
        description: '[Function]' + i18n.get_timer.desc,
        available: datasimple.all
    },
	gml_pragma: {
        description: '[Function]' + i18n.gml_pragma.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'setting', documentation: i18n.gml_pragma.setting },
            { label: '....', documentation: i18n.gml_pragma.more }
        ],
        signature: '(setting, ....)'
    },
	gml_release_mode: {
        description: '[Function]' + i18n.gml_release_mode.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'enable', documentation: i18n.gml_release_mode.enable }
        ],
        signature: '(enable)'
    },
	highscore_add: {
        description: '[Function]' + i18n.highscore_add.desc,
        available: datasimple.all,
        parameters: [
            { label: 'str', documentation: i18n.highscore_add.str },
            { label: 'numb', documentation: i18n.highscore_add.numb }
        ],
        signature: '(str, numb)'
    },
	highscore_clear: {
        description: '[Function]' + i18n.highscore_clear.desc,
        available: datasimple.all
    },
	highscore_name: {
        description: '[Function]' + i18n.highscore_name.desc,
        available: datasimple.all,
        parameters: [
            { label: 'place', documentation: i18n.highscore_name.place }
        ],
        signature: '(place)'
    },
	highscore_value: {
        description: '[Function]' + i18n.highscore_value.desc,
        available: datasimple.all,
        parameters: [
            { label: 'place', documentation: i18n.highscore_value.place }
        ],
        signature: '(place)'
    },
	http_get: {
        description: '[Function]' + i18n.http_get.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'url', documentation: i18n.http_get.url }
        ],
        signature: '(url)'
    },
	http_get_file: {
        description: '[Function]' + i18n.http_get_file.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'url', documentation: i18n.http_get_file.url },
            { label: 'dest', documentation: i18n.http_get_file.dest }
        ],
        signature: '(url, dest)'
    },
	http_post_string: {
        description: '[Function]' + i18n.http_post_string.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'url', documentation: i18n.http_post_string.url },
            { label: 'string', documentation: i18n.http_post_string.string }
        ],
        signature: '(url, string)'
    },
	http_request: {
        description: '[Function]' + i18n.http_request.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'url', documentation: i18n.http_request.url },
            { label: 'method', documentation: i18n.http_request.method },
            { label: 'header_map', documentation: i18n.http_request.header_map },
            { label: 'body', documentation: i18n.http_request.body }
        ],
        signature: '(url, method, header_map, body)'
    },
	iap_acquire: {
        description: '[Function]' + i18n.iap_acquire.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'product_id', documentation: i18n.iap_acquire.product_id },
            { label: 'payload', documentation: i18n.iap_acquire.payload }
        ],
        signature: '(product_id, payload)'
    },
	iap_activate: {
        description: '[Function]' + i18n.iap_activate.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'ds_list', documentation: i18n.iap_activate.ds_list }
        ],
        signature: '(ds_list)'
    },
	iap_consume: {
        description: '[Function]' + i18n.iap_consume.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'product_id', documentation: i18n.iap_consume.product_id }
        ],
        signature: '(product_id)'
    },
	iap_enumerate_products: {
        description: '[Function]' + i18n.iap_enumerate_products.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'ds_list', documentation: i18n.iap_enumerate_products.ds_list }
        ],
        signature: '(ds_list)'
    },
	iap_is_purchased: {
        description: '[Function]' + i18n.iap_is_purchased.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'product_id', documentation: i18n.iap_is_purchased.product_id }
        ],
        signature: '(product_id)'
    },
	iap_product_details: {
        description: '[Function]' + i18n.iap_product_details.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'product_id', documentation: i18n.iap_product_details.product_id },
            { label: 'ds_map', documentation: i18n.iap_product_details.ds_map }
        ],
        signature: '(product_id, ds_map)'
    },
	iap_purchase_details: {
        description: '[Function]' + i18n.iap_purchase_details.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'product_id', documentation: i18n.iap_purchase_details.product_id },
            { label: 'ds_map', documentation: i18n.iap_purchase_details.ds_map }
        ],
        signature: '(product_id, ds_map)'
    },
	iap_restore_all: {
        description: '[Function]' + i18n.iap_restore_all.desc,
        available: datasimple.gms1
    },
	iap_status: {
        description: '[Function]' + i18n.iap_status.desc,
        available: datasimple.gms1
    },
	ini_close: {
        description: '[Function]' + i18n.ini_close.desc,
        available: datasimple.all
    },
	ini_key_delete: {
        description: '[Function]' + i18n.ini_key_delete.desc,
        available: datasimple.all,
        parameters: [
            { label: 'section', documentation: i18n.ini_key_delete.section },
            { label: 'key', documentation: i18n.ini_key_delete.key }
        ],
        signature: '(section, key)'
    },
	ini_key_exists: {
        description: '[Function]' + i18n.ini_key_exists.desc,
        available: datasimple.all,
        parameters: [
            { label: 'section', documentation: i18n.ini_key_exists.section },
            { label: 'key', documentation: i18n.ini_key_exists.key }
        ],
        signature: '(section, key)'
    },
	ini_open: {
        description: '[Function]' + i18n.ini_open.desc,
        available: datasimple.all,
        parameters: [
            { label: 'fname', documentation: i18n.ini_open.fname }
        ],
        signature: '(fname)'
    },
	ini_open_from_string: {
        description: '[Function]' + i18n.ini_open_from_string.desc,
        available: datasimple.all,
        parameters: [
            { label: 'content', documentation: i18n.ini_open_from_string.content }
        ],
        signature: '(content)'
    },
	ini_read_real: {
        description: '[Function]' + i18n.ini_read_real.desc,
        available: datasimple.all,
        parameters: [
            { label: 'section', documentation: i18n.ini_read_real.section },
            { label: 'key', documentation: i18n.ini_read_real.key },
            { label: 'default', documentation: i18n.ini_read_real.default }
        ],
        signature: '(section, key, default)'
    },
	ini_read_string: {
        description: '[Function]' + i18n.ini_read_string.desc,
        available: datasimple.all,
        parameters: [
            { label: 'section', documentation: i18n.ini_read_string.section },
            { label: 'key', documentation: i18n.ini_read_string.key },
            { label: 'default', documentation: i18n.ini_read_string.default }
        ],
        signature: '(section, key, default)'
    },
	ini_section_delete: {
        description: '[Function]' + i18n.ini_section_delete.desc,
        available: datasimple.all,
        parameters: [
            { label: 'section', documentation: i18n.ini_section_delete.section }
        ],
        signature: '(section)'
    },
	ini_section_exists: {
        description: '[Function]' + i18n.ini_section_exists.desc,
        available: datasimple.all,
        parameters: [
            { label: 'section', documentation: i18n.ini_section_exists.section }
        ],
        signature: '(section)'
    },
	ini_write_real: {
        description: '[Function]' + i18n.ini_write_real.desc,
        available: datasimple.all,
        parameters: [
            { label: 'section', documentation: i18n.ini_write_real.section },
            { label: 'key', documentation: i18n.ini_write_real.key },
            { label: 'value', documentation: i18n.ini_write_real.value }
        ],
        signature: '(section, key, value)'
    },
	ini_write_string: {
        description: '[Function]' + i18n.ini_write_string.desc,
        available: datasimple.all,
        parameters: [
            { label: 'section', documentation: i18n.ini_write_stringsection },
            { label: 'key', documentation: i18n.ini_write_string.key },
            { label: 'str', documentation: i18n.ini_write_string.str }
        ],
        signature: '(section, key, str)'
    },
	instance_activate_all: {
        description: '[Function]' + i18n.instance_activate_all.desc,
        available: datasimple.all
    },
	instance_activate_object: {
        description: '[Function]' + i18n.instance_activate_object.desc,
        available: datasimple.all,
        parameters: [
            { label: 'obj', documentation: i18n.instance_activate_object.obj }
        ],
        signature: '(obj)'
    },
	instance_activate_region: {
        description: '[Function]' + i18n.instance_activate_region.desc,
        available: datasimple.all,
        parameters: [
            { label: 'left', documentation: i18n.instance_activate_region.left },
            { label: 'top', documentation: i18n.instance_activate_region.top },
            { label: 'width', documentation: i18n.instance_activate_region.width },
            { label: 'height', documentation: i18n.instance_activate_region.height },
            { label: 'inside', documentation: i18n.instance_activate_region.inside }
        ],
        signature: '(left, top, width, height, inside)'
    },
	instance_change: {
        description: '[Function]' + i18n.instance_change.desc,
        available: datasimple.all,
        parameters: [
            { label: 'obj', documentation: i18n.instance_change.obj },
            { label: 'performevents', documentation: i18n.instance_change.performevents }
        ],
        signature: '(obj, performevents)'
    },
	instance_copy: {
        description: '[Function]' + i18n.instance_copy.desc,
        available: datasimple.all,
        parameters: [
            { label: 'performevents', documentation: i18n.instance_copy.performevents }
        ],
        signature: '(performevent)'
    },
	instance_create: {
        description: '[Function]' + i18n.instance_create.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x', documentation: i18n.instance_create.x },
            { label: 'y', documentation: i18n.instance_create.y },
            { label: 'obj', documentation: i18n.instance_create.obj }
        ],
        signature: '(x, y, obj)'
    },
	instance_deactivate_all: {
        description: '[Function]' + i18n.instance_deactivate_all.desc,
        available: datasimple.all,
        parameters: [
            { label: 'notme', documentation: i18n.instance_deactivate_all.notme }
        ],
        signature: '(notme)'
    },
	instance_deactivate_object: {
        description: '[Function]' + i18n.instance_deactivate_object.desc,
        available: datasimple.all,
        parameters: [
            { label: 'obj', documentation: i18n.instance_deactivate_object.obj }
        ],
        signature: '(obj)'
    },
	instance_deactivate_region: {
        description: '[Function]' + i18n.instance_deactivate_region.desc,
        available: datasimple.all,
        parameters: [
            { label: 'left', documentation: i18n.instance_deactivate_region.left },
            { label: 'top', documentation: i18n.instance_deactivate_region.top },
            { label: 'width', documentation: i18n.instance_deactivate_region.width },
            { label: 'height', documentation: i18n.instance_deactivate_region.height },
            { label: 'inside', documentation: i18n.instance_deactivate_region.inside },
            { label: 'notme', documentation: i18n.instance_deactivate_region.notme }
        ],
        signature: '(left, top, width, height, inside, notme)'
    },
	instance_destroy: {
        description: '[Function]' + i18n.instance_destroy.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.instance_destroy.id },
            { label: 'execute_event_flag', documentation: i18n.instance_destroy.execute_event_flag }
        ],
        signature: '(id, execute_event_flag)'
    },
	instance_exists: {
        description: '[Function]' + i18n.instance_exists.desc,
        available: datasimple.all,
        parameters: [
            { label: 'obj', documentation: i18n.instance_exists.obj }
        ],
        signature: '(obj)'
    },
	instance_find: {
        description: '[Function]' + i18n.instance_find.desc,
        available: datasimple.all,
        parameters: [
            { label: 'obj', documentation: i18n.instance_find.obj },
            { label: 'n', documentation: i18n.instance_find.n }
        ],
        signature: '(obj, n)'
    },
	instance_furthest: {
        description: '[Function]' + i18n.instance_furthest.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x', documentation: i18n.instance_furthest.x },
            { label: 'y', documentation: i18n.instance_furthest.y },
            { label: 'obj', documentation: i18n.instance_furthest.obj }
        ],
        signature: '(x, y, obj)'
    },
	instance_nearest: {
        description: '[Function]' + i18n.instance_nearest.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x', documentation: i18n.instance_nearest.x },
            { label: 'y', documentation: i18n.instance_nearest.y },
            { label: 'obj', documentation: i18n.instance_nearest.obj }
        ],
        signature: '(x, y, obj)'
    },
	instance_number: {
        description: '[Function]' + i18n.instance_number.desc,
        available: datasimple.all,
        parameters: [
            { label: 'obj', documentation: i18n.instance_number.obj }
        ],
        signature: '(obj)'
    },
	instance_place: {
        description: '[Function]' + i18n.instance_place.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x', documentation: i18n.instance_place.x },
            { label: 'y', documentation: i18n.instance_place.y },
            { label: 'obj', documentation: i18n.instance_place.obj }
        ],
        signature: '(x, y, obj)'
    },
	instance_position: {
        description: '[Function]' + i18n.instance_position.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x', documentation: i18n.instance_position.x },
            { label: 'y', documentation: i18n.instance_position.y },
            { label: 'obj', documentation: i18n.instance_position.obj }
        ],
        signature: '(x, y, obj)'
    },
	int64: {
        description: '[Function]' + i18n.int64.desc,
        available: datasimple.all,
        parameters: [
            { label: 'val', documentation: i18n.int64.val }
        ],
        signature: '(val)'
    },
	io_clear: {
        description: '[Function]' + i18n.io_clear.desc,
        available: datasimple.all
    },
	irandom: {
        description: '[Function]' + i18n.irandom.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x', documentation: i18n.irandom.x }
        ],
        signature: '(x)'
    },
	irandom_old: {
        description: '[Function]' + i18n.irandom_old.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x', documentation: i18n.irandom_old.x }
        ],
        signature: '(x)'
    },
	irandom_range: {
        description: '[Function]' + i18n.irandom_range.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x1', documentation: i18n.irandom_range.x1 },
            { label: 'x2', documentation: i18n.irandom_range.x2 }
        ],
        signature: '(x1, x2)'
    },
	irandom_range_old: {
        description: '[Function]' + i18n.irandom_range_old.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x1', documentation: i18n.irandom_range_old.x1 },
            { label: 'x2', documentation: i18n.irandom_range_old.x2 }
        ],
        signature: '(x1, x2)'
    },
	is_array: {
        description: '[Function]' + i18n.is_array.desc,
        available: datasimple.all,
        parameters: [
            { label: 'val', documentation: i18n.is_array.val }
        ],
        signature: '(val)'
    },
	is_bool: {
        description: '[Function]' + i18n.is_bool.desc,
        available: datasimple.all,
        parameters: [
            { label: 'val', documentation: i18n.is_bool.val }
        ],
        signature: '(val)'
    },
	is_int32: {
        description: '[Function]' + i18n.is_int32.desc,
        available: datasimple.all,
        parameters: [
            { label: 'val', documentation: i18n.is_int32.val }
        ],
        signature: '(val)'
    },
	is_int64: {
        description: '[Function]' + i18n.is_int64.desc,
        available: datasimple.all,
        parameters: [
            { label: 'val', documentation: i18n.is_int64.val }
        ],
        signature: '(val)'
    },
	is_matrix: {
        description: '[Function]' + i18n.is_matrix.desc,
        available: datasimple.all,
        parameters: [
            { label: 'val', documentation: i18n.is_matrix.val }
        ],
        signature: '(val)'
    },
	is_ptr: {
        description: '[Function]' + i18n.is_ptr.desc,
        available: datasimple.all,
        parameters: [
            { label: 'val', documentation: i18n.is_ptr.val }
        ],
        signature: '(val)'
    },
	is_real: {
        description: '[Function]' + i18n.is_real.desc,
        available: datasimple.all,
        parameters: [
            { label: 'val', documentation: i18n.is_real.val }
        ],
        signature: '(val)'
    },
	is_string: {
        description: '[Function]' + i18n.is_string.desc,
        available: datasimple.all,
        parameters: [
            { label: 'val', documentation: i18n.is_string.val }
        ],
        signature: '(val)'
    },
	is_undefined: {
        description: '[Function]' + i18n.is_undefined.desc,
        available: datasimple.all,
        parameters: [
            { label: 'val', documentation: i18n.is_undefined.val }
        ],
        signature: '(val)'
    },
	is_vec3: {
        description: '[Function]' + i18n.is_vec3.desc,
        available: datasimple.all,
        parameters: [
            { label: 'val', documentation: i18n.is_vec3.val }
        ],
        signature: '(val)'
    },
	is_vec4: {
        description: '[Function]' + i18n.is_vec4.desc,
        available: datasimple.all,
        parameters: [
            { label: 'val', documentation: i18n.is_vec4.val }
        ],
        signature: '(val)'
    },
	joystick_axes: {
        description: '[Function]' + i18n.joystick_axes.desc,
        parameters: [
            { label: 'id', documentation: i18n.joystick_axes.id }
        ],
        signature: '(id)'
    },
	joystick_buttons: {
        description: '[Function]' + i18n.joystick_buttons.desc,
        parameters: [
            { label: 'id', documentation: i18n.joystick_buttons.id }
        ],
        signature: '(id)'
    },
	joystick_check_button: {
        description: '[Function]' + i18n.joystick_check_button.desc,
        parameters: [
            { label: 'id', documentation: i18n.joystick_check_button.id },
            { label: 'button', documentation: i18n.joystick_check_button.button }
        ],
        signature: '(id, button)'
    },
	joystick_direction: {
        description: '[Function]' + i18n.joystick_direction.desc,
        parameters: [
            { label: 'id', documentation: i18n.joystick_direction.id }
        ],
        signature: '(id)'
    },
	joystick_exists: {
        description: '[Function]' + i18n.joystick_exists.desc,
        parameters: [
            { label: 'id', documentation: i18n.joystick_exists.id }
        ],
        signature: '(id)'
    },
	joystick_has_pov: {
        description: '[Function]' + i18n.joystick_has_pov.desc,
        parameters: [
            { label: 'id', documentation: i18n.joystick_has_pov.id }
        ],
        signature: '(id)'
    },
	joystick_name: {
        description: '[Function]' + i18n.joystick_name.desc,
        parameters: [
            { label: 'id', documentation: i18n.joystick_name.id }
        ],
        signature: '(id)'
    },
	joystick_pov: {
        description: '[Function]' + i18n.joystick_pov.desc,
        parameters: [
            { label: 'id', documentation: i18n.joystick_pov.id }
        ],
        signature: '(id)'
    },
	joystick_rpos: {
        description: '[Function]' + i18n.joystick_rpos.desc,
        parameters: [
            { label: 'id', documentation: i18n.joystick_rpos.id }
        ],
        signature: '(id)'
    },
	joystick_upos: {
        description: '[Function]' + i18n.joystick_upos.desc,
        parameters: [
            { label: 'id', documentation: i18n.joystick_upos.id }
        ],
        signature: '(id)'
    },
	joystick_vpos: {
        description: '[Function]' + i18n.joystick_vpos.desc,
        parameters: [
            { label: 'id', documentation: i18n.joystick_vpos.id }
        ],
        signature: '(id)'
    },
	joystick_xpos: {
        description: '[Function]' + i18n.joystick_xpos.desc,
        parameters: [
            { label: 'id', documentation: i18n.joystick_xpos.id }
        ],
        signature: '(id)'
    },
	joystick_ypos: {
        description: '[Function]' + i18n.joystick_ypos.desc,
        parameters: [
            { label: 'id', documentation: i18n.joystick_ypos.id }
        ],
        signature: '(id)'
    },
	joystick_zpos: {
        description: '[Function]' + i18n.joystick_zpos.desc,
        parameters: [
            { label: 'id', documentation: i18n.joystick_zpos.id }
        ],
        signature: '(id)'
    },
	json_decode: {
        description: '[Function]' + i18n.json_decode.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'string', documentation: i18n.json_decode.string }
        ],
        signature: '(string)'
    },
	json_encode: {
        description: '[Function]' + i18n.json_encode.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'ds_map', documentation: i18n.json_encode.ds_map }
        ],
        signature: '(ds_map)'
    },
	keyboard_check: {
        description: '[Function]' + i18n.keyboard_check.desc,
        available: datasimple.all,
        parameters: [
            { label: 'key', documentation: i18n.keyboard_check.key }
        ],
        signature: '(key)'
    },
	keyboard_check_direct: {
        description: '[Function]' + i18n.keyboard_check_direct.desc,
        available: datasimple.all,
        parameters: [
            { label: 'key', documentation: i18n.keyboard_check_direct.key }
        ],
        signature: '(key)'
    },
	keyboard_check_pressed: {
        description: '[Function]' + i18n.keyboard_check_pressed.desc,
        available: datasimple.all,
        parameters: [
            { label: 'key', documentation: i18n.keyboard_check_pressed.key }
        ],
        signature: '(key)'
    },
	keyboard_check_released: {
        description: '[Function]' + i18n.keyboard_check_released.desc,
        available: datasimple.all,
        parameters: [
            { label: 'key', documentation: i18n.keyboard_check_released.key }
        ],
        signature: '(key)'
    },
	keyboard_clear: {
        description: '[Function]' + i18n.keyboard_clear.desc,
        available: datasimple.all,
        parameters: [
            { label: 'key', documentation: i18n.keyboard_clear.key }
        ],
        signature: '(key)'
    },
	keyboard_get_map: {
        description: '[Function]' + i18n.keyboard_get_map.desc,
        available: datasimple.all,
        parameters: [
            { label: 'key', documentation: i18n.keyboard_get_map.key }
        ],
        signature: '(key)'
    },
	keyboard_get_numlock: {
        description: '[Function]' + i18n.keyboard_get_numlock.desc,
        available: datasimple.all
    },
	keyboard_key_press: {
        description: '[Function]' + i18n.keyboard_key_press.desc,
        available: datasimple.all,
        parameters: [
            { label: 'key', documentation: i18n.keyboard_key_press.key }
        ],
        signature: '(key)'
    },
	keyboard_key_release: {
        description: '[Function]' + i18n.keyboard_key_release.desc,
        available: datasimple.all,
        parameters: [
            { label: 'key', documentation: i18n.keyboard_key_release.key }
        ],
        signature: '(key)'
    },
	keyboard_set_map: {
        description: '[Function]' + i18n.keyboard_set_map.desc,
        available: datasimple.all,
        parameters: [
            { label: 'key1', documentation: i18n.keyboard_set_map.key1 },
            { label: 'key2', documentation: i18n.keyboard_set_map.key2 }
        ],
        signature: '(key1, key2)'
    },
	keyboard_set_numlock: {
        description: '[Function]' + i18n.keyboard_set_numlock.desc,
        available: datasimple.all,
        parameters: [
            { label: 'bool', documentation: i18n.keyboard_set_numlock.bool }
        ],
        signature: '(bool)'
    },
	keyboard_unset_map: {
        description: '[Function]' + i18n.keyboard_unset_map.desc,
        available: datasimple.all
    },
	lengthdir_x: {
        description: '[Function]' + i18n.lengthdir_x.desc,
        available: datasimple.all,
        parameters: [
            { label: 'len', documentation: i18n.lengthdir_x.len },
            { label: 'dir', documentation: i18n.lengthdir_x.dir }
        ],
        signature: '(len, dir)'
    },
	lengthdir_y: {
        description: '[Function]' + i18n.lengthdir_y.desc,
        available: datasimple.all,
        parameters: [
            { label: 'len', documentation: i18n.lengthdir_y.len },
            { label: 'dir', documentation: i18n.lengthdir_y.dir }
        ],
        signature: '(len, dir)'
    },
	lerp: {
        description: '[Function]' + i18n.lerp.desc,
        available: datasimple.all,
        parameters: [
            { label: 'val1', documentation: i18n.lerp.val1 },
            { label: 'val2', documentation: i18n.lerp.val2 },
            { label: 'amount', documentation: i18n.lerp.amount }
        ],
        signature: '(val1, val2, amount)'
    },
	ln: {
        description: '[Function]' + i18n.ln.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x', documentation: i18n.ln.x }
        ],
        signature: '(x)'
    },
	log10: {
        description: '[Function]' + i18n.log10.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x', documentation: i18n.log10.x }
        ],
        signature: '(x)'
    },
	log2: {
        description: '[Function]' + i18n.log2.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x', documentation: i18n.log2.x }
        ],
        signature: '(x)'
    },
	logn: {
        description: '[Function]' + i18n.logn.desc,
        available: datasimple.all,
        parameters: [
            { label: 'n', documentation: i18n.logn.n },
            { label: 'x', documentation: i18n.logn.x }
        ],
        signature: '(n, x)'
    },
	make_color_hsv: {
        description: '[Function]' + i18n.make_color_hsv.desc,
        available: datasimple.all,
        parameters: [
            { label: 'hue', documentation: i18n.make_color_hsv.hue },
            { label: 'saturation', documentation: i18n.make_color_hsv.saturation },
            { label: 'value', documentation: i18n.make_color_hsv.value }
        ],
        signature: '(hue, saturation, value)'
    },
	make_color_rgb: {
        description: '[Function]' + i18n.make_color_rgb.desc,
        available: datasimple.all,
        parameters: [
            { label: 'red', documentation: i18n.make_color_rgb.red },
            { label: 'green', documentation: i18n.make_color_rgb.green },
            { label: 'blue', documentation: i18n.make_color_rgb.blue }
        ],
        signature: '(red, green, blue)'
    },
	make_colour_hsv: {
        description: '[Function]' + i18n.make_colour_hsv.desc,
        available: datasimple.all,
        parameters: [
            { label: 'hue', documentation: i18n.make_colour_hsv.hue },
            { label: 'saturation', documentation: i18n.make_colour_hsv.saturation },
            { label: 'value', documentation: i18n.make_colour_hsv.value }
        ],
        signature: '(hue, saturation, value)'
    },
	make_colour_rgb: {
        description: '[Function]' + i18n.make_colour_rgb.desc,
        available: datasimple.all,
        parameters: [
            { label: 'red', documentation: i18n.make_colour_rgb.red },
            { label: 'green', documentation: i18n.make_colour_rgb.green },
            { label: 'blue', documentation: i18n.make_colour_rgb.blue }
        ],
        signature: '(red, green, blue)'
    },
	math_get_epsilon: {
        description: '[Function]' + i18n.math_get_epsilon.desc,
        available: datasimple.gms1
    },
	math_set_epsilon: {
        description: '[Function]' + i18n.math_set_epsilon.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'new_epsilon', documentation: i18n.math_set_epsilon.new_epsilon }
        ],
        signature: '(new_epsilon)'
    },
	matrix_build: {
        description: '[Function]' + i18n.matrix_build.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'x', documentation: i18n.matrix_build.x },
            { label: 'y', documentation: i18n.matrix_build.y },
            { label: 'z', documentation: i18n.matrix_build.z },
            { label: 'xrotation', documentation: i18n.matrix_build.xrotation },
            { label: 'yrotation', documentation: i18n.matrix_build.yrotation },
            { label: 'zrotation', documentation: i18n.matrix_build.zrotation },
            { label: 'xscale', documentation: i18n.matrix_build.xscale },
            { label: 'yscale', documentation: i18n.matrix_build.yscale },
            { label: 'zscale', documentation: i18n.matrix_build.zscale }
        ],
        signature: '(x, y, z, xrotation, yrotation, zrotation, xscale, yscale, zscale)'
    },
	matrix_get: {
        description: '[Function]' + i18n.matrix_get.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'type', documentation: i18n.matrix_get.type }
        ],
        signature: '(type)'
    },
	matrix_multiply: {
        description: '[Function]' + i18n.matrix_multiply.matrix.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'matrix', documentation: i18n.matrix_multiply.matrix },
            { label: 'matrix', documentation: i18n.matrix_multiply.matrix }
        ],
        signature: '(matrix, matrix)'
    },
	matrix_set: {
        description: '[Function]' + i18n.matrix_set.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'type', documentation: i18n.matrix_set.type },
            { label: 'matrix', documentation: i18n.matrix_set.matrix }
        ],
        signature: '(type, matrix)'
    },
	max: {
        description: '[Function]' + i18n.max.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x1', documentation: i18n.max.x1 },
            { label: 'x2', documentation: i18n.max.x2 },
            { label: 'x3', documentation: i18n.max.x3 },
            { label: '...', documentation: i18n.max.more }
        ],
        signature: '(x1, x2, x3, ...)'
    },
	md5_file: {
        description: '[Function]' + i18n.md5_file.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'fname', documentation: i18n.md5_file.fname }
        ],
        signature: '(fname)'
    },
	md5_string_unicode: {
        description: '[Function]' + i18n.md5_string_unicode.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'string', documentation: i18n.md5_string_unicode.string }
        ],
        signature: '(string)'
    },
	md5_string_utf8: {
        description: '[Function]' + i18n.md5_string_utf8.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'string', documentation: i18n.md5_string_utf8.string }
        ],
        signature: '(string)'
    },
	mean: {
        description: '[Function]' + i18n.mean.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x1', documentation: i18n.mean.x1 },
            { label: 'x2', documentation: i18n.mean.x2 },
            { label: 'x3', documentation: i18n.mean.x3 },
            { label: '...', documentation: i18n.mean.more }
        ],
        signature: '(x1, x2, x3, ...)'
    },
	median: {
        description: '[Function]' + i18n.median.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x1', documentation: i18n.median.x1 },
            { label: 'x2', documentation: i18n.median.x2 },
            { label: 'x3', documentation: i18n.median.x3 },
            { label: '...', documentation: i18n.median.more }
        ],
        signature: '(x1, x2, x3, ...)'
    },
	merge_color: {
        description: '[Function]' + i18n.merge_color.desc,
        available: datasimple.all,
        parameters: [
            { label: 'col1', documentation: i18n.merge_color.col1 },
            { label: 'col2', documentation: i18n.merge_color.col2 },
            { label: 'amount', documentation: i18n.merge_color.amount }
        ],
        signature: '(col1, col2, amount)'
    },
	min: {
        description: '[Function]' + i18n.min.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x1', documentation: i18n.min.x1 },
            { label: 'x2', documentation: i18n.min.x2 },
            { label: 'x3', documentation: i18n.min.x3 },
            { label: '...', documentation: i18n.min.more }
        ],
        signature: '(x1, x2, x3, ...)'
    },
	motion_add: {
        description: '[Function]' + i18n.motion_add.desc,
        available: datasimple.all,
        parameters: [
            { label: 'dir', documentation: i18n.motion_add.dir },
            { label: 'speed', documentation: i18n.motion_add.speed }
        ],
        signature: '(dir, speed)'
    },
	motion_set: {
        description: '[Function]' + i18n.motion_set.desc,
        available: datasimple.all,
        parameters: [
            { label: 'dir', documentation: i18n.motion_set.dir },
            { label: 'speed', documentation: i18n.motion_set.speed }
        ],
        signature: '(dir, speed)'
    },
	mouse_check_button: {
        description: '[Function]' + i18n.mouse_check_button.desc,
        available: datasimple.all,
        parameters: [
            { label: 'button', documentation: i18n.mouse_check_button.button }
        ],
        signature: '(button)'
    },
	mouse_check_button_pressed: {
        description: '[Function]' + i18n.mouse_check_button_pressed.desc,
        available: datasimple.all,
        parameters: [
            { label: 'button', documentation: i18n.mouse_check_button_pressed.button }
        ],
        signature: '(button)'
    },
	mouse_check_button_released: {
        description: '[Function]' + i18n.mouse_check_button_released.desc,
        available: datasimple.all,
        parameters: [
            { label: 'button', documentation: i18n.mouse_check_button_released.button }
        ],
        signature: '(button)'
    },
	mouse_clear: {
        description: '[Function]' + i18n.mouse_clear.desc,
        available: datasimple.all,
        parameters: [
            { label: 'button', documentation: i18n.mouse_clear.button }
        ],
        signature: '(button)'
    },
	mouse_wheel_down: {
        description: '[Function]' + i18n.mouse_wheel_down.desc,
        available: datasimple.all
    },
	mouse_wheel_up: {
        description: '[Function]' + i18n.mouse_wheel_up.desc,
        available: datasimple.all
    },
	move_bounce_all: {
        description: '[Function]' + i18n.move_bounce_all.desc,
        available: datasimple.all,
        parameters: [
            { label: 'advanced', documentation: i18n.move_bounce_all.advanced }
        ],
        signature: '(advanced)'
    },
	move_bounce_solid: {
        description: '[Function]' + i18n.move_bounce_solid.desc,
        available: datasimple.all,
        parameters: [
            { label: 'advanced', documentation: i18n.move_bounce_solid.advanced }
        ],
        signature: '(advanced)'
    },
	move_contact_all: {
        description: '[Function]' + i18n.move_contact_all.desc,
        available: datasimple.all,
        parameters: [
            { label: 'dir', documentation: i18n.move_contact_all.dir },
            { label: 'maxdist', documentation: i18n.move_contact_all.maxdist }
        ],
        signature: '(dir, maxdist)'
    },
	move_contact_solid: {
        description: '[Function]' + i18n.move_contact_solid.desc,
        available: datasimple.all,
        parameters: [
            { label: 'dir', documentation: i18n.move_contact_solid.dir },
            { label: 'maxdist', documentation: i18n.move_contact_solid.maxdist }
        ],
        signature: '(dir, maxdist)'
    },
	move_outside_all: {
        description: '[Function]' + i18n.move_contact_solid.desc,
        available: datasimple.all,
        parameters: [
            { label: 'dir', documentation: i18n.move_contact_solid.dir },
            { label: 'maxdist', documentation: i18n.move_contact_solid.maxdist }
        ],
        signature: '(dir, maxdist)'
    },
	move_outside_solid: {
        description: '[Function]' + i18n.move_outside_solid.desc,
        available: datasimple.all,
        parameters: [
            { label: 'dir', documentation: i18n.move_outside_solid.dir },
            { label: 'maxdist', documentation: i18n.move_outside_solid.maxdist }
        ],
        signature: '(dir, maxdist)'
    },
	move_random: {
        description: '[Function]' + i18n.move_random.desc,
        available: datasimple.all,
        parameters: [
            { label: 'hsnap', documentation: i18n.move_random.hsnap },
            { label: 'vsnap', documentation: i18n.move_random.vsnap }
        ],
        signature: '(hsnap, vsnap)'
    },
	move_snap: {
        description: '[Function]' + i18n.move_snap.desc,
        available: datasimple.all,
        parameters: [
            { label: 'hsnap', documentation: i18n.move_snap.hsnap },
            { label: 'vsnap', documentation: i18n.move_snap.vsnap }
        ],
        signature: '(hsnap, vsnap)'
    },
	move_towards_point: {
        description: '[Function]' + i18n.move_towards_point.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x', documentation: i18n.move_towards_point.x },
            { label: 'y', documentation: i18n.move_towards_point.y },
            { label: 'sp', documentation: i18n.move_towards_point.sp }
        ],
        signature: '(x, y, sp)'
    },
	move_wrap: {
        description: '[Function]' + i18n.move_wrap.desc,
        available: datasimple.all,
        parameters: [
            { label: 'hor', documentation: i18n.move_wrap.hor },
            { label: 'vert', documentation: i18n.move_wrap.vert },
            { label: 'margin', documentation: i18n.move_wrap.margin }
        ],
        signature: '(hor, vert, margin)'
    },
	mp_grid_add_cell: {
        description: '[Function]' + i18n.mp_grid_add_cell.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.mp_grid_add_cell.id },
            { label: 'h', documentation: i18n.mp_grid_add_cell.h },
            { label: 'v', documentation: i18n.mp_grid_add_cell.v }
        ],
        signature: '(id, h, v)'
    },
	mp_grid_add_instances: {
        description: '[Function]' + i18n.mp_grid_add_instances.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.mp_grid_add_instances.id },
            { label: 'obj', documentation: i18n.mp_grid_add_instances.obj },
            { label: 'prec', documentation: i18n.mp_grid_add_instances.prec }
        ],
        signature: '(id, obj, prec)'
    },
	mp_grid_add_rectangle: {
        description: '[Function]' + i18n.mp_grid_add_rectangle.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.mp_grid_add_rectangle.id },
            { label: 'left', documentation: i18n.mp_grid_add_rectangle.left },
            { label: 'top', documentation: i18n.mp_grid_add_rectangle.top },
            { label: 'right', documentation: i18n.mp_grid_add_rectangle.right },
            { label: 'bottom', documentation: i18n.mp_grid_add_rectangle.bottom }
        ],
        signature: '(id, left, top, right, bottom)'
    },
	mp_grid_clear_all: {
        description: '[Function]' + i18n.mp_grid_clear_all.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.mp_grid_clear_all.id }
        ],
        signature: '(id)'
    },
	mp_grid_clear_cell: {
        description: '[Function]' + i18n.mp_grid_clear_cell.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.mp_grid_clear_cell.id },
            { label: 'h', documentation: i18n.mp_grid_clear_cell.h },
            { label: 'v', documentation: i18n.mp_grid_clear_cell.v }
        ],
        signature: '(id, h, v)'
    },
	mp_grid_clear_rectangle: {
        description: '[Function]' + i18n.mp_grid_clear_rectangle.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.mp_grid_clear_rectangle.id },
            { label: 'left', documentation: i18n.mp_grid_clear_rectangle.left },
            { label: 'top', documentation: i18n.mp_grid_clear_rectangle.top },
            { label: 'right', documentation: i18n.mp_grid_clear_rectangle.right },
            { label: 'bottom', documentation: i18n.mp_grid_clear_rectangle.bottom }
        ],
        signature: '(id, left, top, right, bottom)'
    },
	mp_grid_create: {
        description: '[Function]' + i18n.mp_grid_create.desc,
        available: datasimple.all,
        parameters: [
            { label: 'left', documentation: i18n.mp_grid_create.left },
            { label: 'top', documentation: i18n.mp_grid_create.top },
            { label: 'hcells', documentation: i18n.mp_grid_create.heclls },
            { label: 'vcells', documentation: i18n.mp_grid_create.vcells },
            { label: 'cellwidth', documentation: i18n.mp_grid_create.cellwidth },
            { label: 'cellheight', documentation: i18n.mp_grid_create.cellheight }
        ],
        signature: '(left, top, hcells, vcells, cellwidth, cellheight)'
    },
	mp_grid_destroy: {
        description: '[Function]' + i18n.mp_grid_destroy.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.mp_grid_destroy.id }
        ],
        signature: '(id)'
    },
	mp_grid_draw: {
        description: '[Function]' + i18n.mp_grid_draw.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.mp_grid_draw.id }
        ],
        signature: '(id)'
    },
	mp_grid_get_cell: {
        description: '[Function]' + i18n.mp_grid_get_cell.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.mp_grid_get_cell.id },
            { label: 'h', documentation: i18n.mp_grid_get_cell.h },
            { label: 'v', documentation: i18n.mp_grid_get_cell.v }
        ],
        signature: '(id, h, v)'
    },
	mp_grid_path: {
        description: '[Function]' + i18n.mp_grid_path.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.mp_grid_path.id },
            { label: 'path', documentation: i18n.mp_grid_path.path },
            { label: 'xstart', documentation: i18n.mp_grid_path.xstart },
            { label: 'ystart', documentation: i18n.mp_grid_path.ystart },
            { label: 'xgoal', documentation: i18n.mp_grid_path.xgoal },
            { label: 'ygoal', documentation: i18n.mp_grid_path.ygoal },
            { label: 'allowdiag', documentation: i18n.mp_grid_path.allowding }
        ],
        signature: '(id, path, xstart, ystart, xgoal, ygoal, allowdiag)'
    },
	mp_grid_to_ds_grid: {
        description: '[Function]' + i18n.mp_grid_to_ds_grid.desc,
        available: datasimple.all,
        parameters: [
            { label: 'src', documentation: i18n.mp_grid_to_ds_grid.src },
            { label: 'dest', documentation: i18n.mp_grid_to_ds_grid.dest }
        ],
        signature: '(src, dest)'
    },
	mp_linear_path: {
        description: '[Function]' + i18n.mp_linear_path.desc,
        available: datasimple.all,
        parameters: [
            { label: 'path', documentation: i18n.mp_linear_path.path },
            { label: 'xg', documentation: i18n.mp_linear_path.xg },
            { label: 'yg', documentation: i18n.mp_linear_path.yg },
            { label: 'stepsize', documentation: i18n.mp_linear_path.stepsize },
            { label: 'checkall', documentation: i18n.mp_linear_path.checkall }
        ],
        signature: '(path, xg, yg, stepsize, checkall)'
    },
	mp_linear_path_object: {
        description: '[Function]' + i18n.mp_linear_path_object.desc,
        available: datasimple.all,
        parameters: [
            { label: 'path', documentation: i18n.mp_linear_path_object.path },
            { label: 'xg', documentation: i18n.mp_linear_path_object.xg },
            { label: 'yg', documentation: i18n.mp_linear_path_object.yg },
            { label: 'stepsize', documentation: i18n.mp_linear_path_object.stepsize },
            { label: 'obj', documentation: i18n.mp_linear_path_object.obj }
        ],
        signature: '(path, xg, yg, stepsize, obj)'
    },
	mp_linear_step: {
        description: '[Function]' + i18n.mp_linear_step.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x', documentation: i18n.mp_linear_step.x },
            { label: 'y', documentation: i18n.mp_linear_step.y },
            { label: 'speed', documentation: i18n.mp_linear_step.speed },
            { label: 'checkall', documentation: i18n.mp_linear_step.checkall }
        ],
        signature: '(x, y, speed, checkall)'
    },
	mp_linear_step_object: {
        description: '[Function]' + i18n.mp_linear_step_object.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x', documentation: i18n.mp_linear_step_object.x },
            { label: 'y', documentation: i18n.mp_linear_step_object.y },
            { label: 'speed', documentation: i18n.mp_linear_step_object.speed },
            { label: 'obj', documentation: i18n.mp_linear_step_object.obj }
        ],
        signature: '(x, y, speed, obj)'
    },
	mp_potential_path: {
        description: '[Function]' + i18n.mp_potential_path.desc,
        available: datasimple.all,
        parameters: [
            { label: 'path', documentation: i18n.mp_potential_path.path },
            { label: 'xg', documentation: i18n.mp_potential_path.xg },
            { label: 'yg', documentation: i18n.mp_potential_path.yg },
            { label: 'stepsize', documentation: i18n.mp_potential_path.stepsize },
            { label: 'factor', documentation: i18n.mp_potential_path.factor },
            { label: 'checkall', documentation: i18n.mp_potential_path.checkall }
        ],
        signature: '(path, xg, yg, stepsize, factor, checkall)'
    },
	mp_potential_path_object: {
        description: '[Function]' + i18n.mp_potential_path_object.desc,
        available: datasimple.all,
        parameters: [
            { label: 'path', documentation: i18n.mp_potential_path_object.path },
            { label: 'xg', documentation: i18n.mp_potential_path_object.xg },
            { label: 'yg', documentation: i18n.mp_potential_path_object.yg },
            { label: 'stepsize', documentation: i18n.mp_potential_path_object.stepsize },
            { label: 'factor', documentation: i18n.mp_potential_path_object.factor },
            { label: 'obj', documentation: i18n.mp_potential_path_object.obj }
        ],
        signature: '(path, xg, yg, stepsize, factor, obj)'
    },
	mp_potential_settings: {
        description: '[Function]' + i18n.mp_potential_settings.desc,
        available: datasimple.all,
        parameters: [
            { label: 'maxrot', documentation: i18n.mp_potential_settings.maxrot },
            { label: 'rotstep', documentation: i18n.mp_potential_settings.rotstep },
            { label: 'ahead', documentation: i18n.mp_potential_settings.ahead },
            { label: 'onspot', documentation: i18n.mp_potential_settings.onspot }
        ],
        signature: '(maxrot, rotstep, ahead, onspot)'
    },
	mp_potential_step: {
        description: '[Function]' + i18n.mp_potential_step.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x', documentation: i18n.mp_potential_step.x },
            { label: 'y', documentation: i18n.mp_potential_step.y },
            { label: 'speed', documentation: i18n.mp_potential_step.speed },
            { label: 'checkall', documentation: i18n.mp_potential_step.checkall }
        ],
        signature: '(x, y, speed, checkall)'
    },
	mp_potential_step_object: {
        description: '[Function]' + i18n.mp_potential_step_object.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x', documentation: i18n.mp_potential_step_object.x },
            { label: 'y', documentation: i18n.mp_potential_step_object.y },
            { label: 'speed', documentation: i18n.mp_potential_step_object.speed },
            { label: 'obj', documentation: i18n.mp_potential_step_object.obj }
        ],
        signature: '(x, y, speed, obj)'
    },
	network_connect: {
        description: '[Function]' + i18n.network_connect.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'socket', documentation: i18n.network_connect.socket },
            { label: 'url', documentation: i18n.network_connect.url },
            { label: 'port', documentation: i18n.network_connect.port }
        ],
        signature: '(socket, url, port)'
    },
	network_connect_raw: {
        description: '[Function]' + i18n.network_connect_raw.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'socket', documentation: i18n.network_connect_raw.socket },
            { label: 'url', documentation: i18n.network_connect_raw.url },
            { label: 'port', documentation: i18n.network_connect_raw.port }
        ],
        signature: '(socket, url, port)'
    },
	network_create_server: {
        description: '[Function]' + i18n.network_create_server.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'type', documentation: i18n.network_create_server.type },
            { label: 'port', documentation: i18n.network_create_server.port },
            { label: 'maxclients', documentation: i18n.network_create_server.maxclients }
        ],
        signature: '(type, port, maxclients)'
    },
	network_create_server_raw: {
        description: '[Function]' + i18n.network_create_server_raw.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'type', documentation: i18n.network_create_server_raw.type },
            { label: 'port', documentation: i18n.network_create_server_raw.port },
            { label: 'maxclients', documentation: i18n.network_create_server_raw.maxclients }
        ],
        signature: '(type, port, maxclients)'
    },
	network_create_socket: {
        description: '[Function]' + i18n.network_create_socket.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'type', documentation: i18n.network_create_socket.type }
        ],
        signature: '(type)'
    },
	network_create_socket_ext: {
        description: '[Function]' + i18n.network_create_socket_ext.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'type', documentation: i18n.network_create_socket_ext.type },
            { label: 'port', documentation: i18n.network_create_socket_ext.port }
        ],
        signature: '(type, port)'
    },
	network_destroy: {
        description: '[Function]' + i18n.network_destroy.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'socket', documentation: i18n.network_destroy.socket }
        ],
        signature: '(socket)'
    },
	network_resolve: {
        description: '[Function]' + i18n.network_resolve.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'url', documentation: i18n.network_resolve.url }
        ],
        signature: '(url)'
    },
	network_send_broadcast: {
        description: '[Function]' + i18n.network_send_broadcast.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'socket', documentation: i18n.network_send_broadcast.socket },
            { label: 'port', documentation: i18n.network_send_broadcast.port },
            { label: 'bufferid', documentation: i18n.network_send_broadcast.bufferid },
            { label: 'size', documentation: i18n.network_send_broadcast.size }
        ],
        signature: '(socket, port, bufferid, size)'
    },
	network_send_packet: {
        description: '[Function]' + i18n.network_send_packet.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'socket', documentation: i18n.network_send_packet.socket },
            { label: 'bufferid', documentation: i18n.network_send_packet.bufferid },
            { label: 'size', documentation: i18n.network_send_packet.size }
        ],
        signature: '(socket, bufferid, size)'
    },
	network_send_raw: {
        description: '[Function]' + i18n.network_send_raw.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'socket', documentation: i18n.network_send_raw.socket },
            { label: 'bufferid', documentation: i18n.network_send_raw.bufferid },
            { label: 'size', documentation: i18n.network_send_raw.size }
        ],
        signature: '(socket, buffer_id, size)'
    },
	network_send_udp: {
        description: '[Function]' + i18n.network_send_udp.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'socket', documentation: i18n.network_send_udp.socket },
            { label: 'url', documentation: i18n.network_send_udp.url },
            { label: 'port', documentation: i18n.network_send_udp.port },
            { label: 'data', documentation: i18n.network_send_udp.data },
            { label: 'size', documentation: i18n.network_send_udp.size }
        ],
        signature: '(socket, URL, port, data, size)'
    },
	network_send_udp_raw: {
        description: '[Function]' + i18n.network_send_udp_raw.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'socket', documentation: i18n.network_send_udp_raw.socket },
            { label: 'url', documentation: i18n.network_send_udp_raw.url },
            { label: 'port', documentation: i18n.network_send_udp_raw.port },
            { label: 'data', documentation: i18n.network_send_udp_raw.data },
            { label: 'size', documentation: i18n.network_send_udp_raw.size }
        ],
        signature: '(socket, URL, port, data, size)'
    },
	network_set_config: {
        description: '[Function]' + i18n.network_set_config.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'parameter', documentation: i18n.network_set_config.parameter },
            { label: 'value', documentation: i18n.network_set_config.value }
        ],
        signature: '(parameter, value)'
    },
	network_set_timeout: {
        description: '[Function]' + i18n.network_set_timeout.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'socket', documentation: i18n.network_set_timeout.socket },
            { label: 'read', documentation: i18n.network_set_timeout.read },
            { label: 'write', documentation: i18n.network_set_timeout.write }
        ],
        signature: '(socket, read, write)'
    },
	object_exists: {
        description: '[Function]' + i18n.object_exists.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.object_exists.ind }
        ],
        signature: '(ind)'
    },
	object_get_mask: {
        description: '[Function]' + i18n.object_get_mask.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.object_get_mask.ind }
        ],
        signature: '(ind)'
    },
	object_get_name: {
        description: '[Function]' + i18n.object_get_name.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.object_get_name.ind }
        ],
        signature: '(ind)'
    },
	object_get_parent: {
        description: '[Function]' + i18n.object_get_parent.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.object_get_parent.ind }
        ],
        signature: '(ind)'
    },
	object_get_persistent: {
        description: '[Function]' + i18n.object_get_persistent.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.object_get_persistent.ind }
        ],
        signature: '(ind)'
    },
	object_get_physics: {
        description: '[Function]' + i18n.object_get_physics.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.object_get_physics.ind }
        ],
        signature: '(ind)'
    },
	object_get_solid: {
        description: '[Function]' + i18n.object_get_solid.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.object_get_solid.ind }
        ],
        signature: '(ind)'
    },
	object_get_sprite: {
        description: '[Function]' + i18n.object_get_sprite.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.object_get_sprite.ind }
        ],
        signature: '(ind)'
    },
	object_get_visible: {
        description: '[Function]' + i18n.object_get_visible.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.object_get_visible.ind }
        ],
        signature: '(ind)'
    },
	object_is_ancestor: {
        description: '[Function]' + i18n.object_is_ancestor.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind_child', documentation: i18n.object_is_ancestor.ind_child },
            { label: 'ind_parent', documentation: i18n.object_is_ancestor.ind_parent }
        ],
        signature: '(ind_child, ind_parent)'
    },
	object_set_mask: {
        description: '[Function]' + i18n.object_set_mask.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.object_set_mask.ind },
            { label: 'spr', documentation: i18n.object_set_mask.spr }
        ],
        signature: '(ind, spr)'
    },
	object_set_parent: {
        description: '[Function]' + i18n.object_set_parent.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.object_set_parent.ind },
            { label: 'obj', documentation: i18n.object_set_parent.obj }
        ],
        signature: '(ind, obj)'
    },
	object_set_persistent: {
        description: '[Function]' + i18n.object_set_persistent.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.object_set_persistent.ind },
            { label: 'pers', documentation: i18n.object_set_persistent.pers }
        ],
        signature: '(ind, pers)'
    },
	object_set_solid: {
        description: '[Function]' + i18n.object_set_solid.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.object_set_solid.ind },
            { label: 'soild', documentation: i18n.object_set_solid.soild }
        ],
        signature: '(ind, soild)'
    },
	object_set_sprite: {
        description: '[Function]' + i18n.object_set_sprite.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.object_set_sprite.ind },
            { label: 'spr', documentation: i18n.object_set_sprite.spr }
        ],
        signature: '(ind, spr)'
    },
	object_set_visible: {
        description: '[Function]' + i18n.object_set_visible.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.object_set_visible.ind },
            { label: 'vis', documentation: i18n.object_set_visible.vis }
        ],
        signature: '(ind, vis)'
    },
	ord: {
        description: '[Function]' + i18n.ord.desc,
        available: datasimple.all,
        parameters: [
            { label: 'char', documentation: i18n.ord.char }
        ],
        signature: '(char)'
    },
	os_get_config: {
        description: '[Function]' + i18n.os_get_config.desc,
        available: datasimple.gms1
    },
	os_get_info: {
        description: '[Function]' + i18n.os_get_info.desc,
        available: datasimple.gms1
    },
	os_get_language: {
        description: '[Function]' + i18n.os_get_language.desc,
        available: datasimple.gms1
    },
	os_get_region: {
        description: '[Function]' + i18n.os_get_region.desc,
        available: datasimple.gms1
    },
	os_is_network_connected: {
        description: '[Function]' + i18n.os_is_network_connected.desc,
        available: datasimple.gms1
    },
	os_is_paused: {
        description: '[Function]' + i18n.os_is_paused.desc,
        available: datasimple.gms1
    },
	os_lock_orientation: {
        description: '[Function]' + i18n.os_lock_orientation.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'flag', documentation: i18n.os_lock_orientation.flag }
        ],
        signature: '(flag)'
    },
	os_powersave_enable: {
        description: '[Function]' + i18n.os_powersave_enable.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'enable', documentation: i18n.os_powersave_enable.enable }
        ],
        signature: '(enable)'
    },
	parameter_count: {
        description: '[Function]' + i18n.parameter_count.desc,
        available: datasimple.all
    },
	parameter_string: {
        description: '[Function]' + i18n.parameter_string.desc,
        available: datasimple.all,
        parameters: [
            { label: 'n', documentation: i18n.parameter_string.n }
        ],
        signature: '(n)'
    },
	part_emitter_burst: {
        description: '[Function]' + i18n.part_emitter_burst.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ps', documentation: i18n.part_emitter_burst.ps },
            { label: 'ind', documentation: i18n.part_emitter_burst.ind },
            { label: 'parttype', documentation: i18n.part_emitter_burst.parttype },
            { label: 'number', documentation: i18n.part_emitter_burst.number }
        ],
        signature: '(ps, ind, parttype, number)'
    },
	part_emitter_clear: {
        description: '[Function]' + i18n.part_emitter_clear.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ps', documentation: i18n.part_emitter_clear.ps },
            { label: 'ind', documentation: i18n.part_emitter_clear.ind }
        ],
        signature: '(ps, ind)'
    },
	part_emitter_create: {
        description: '[Function]' + i18n.part_emitter_create.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ps', documentation: i18n.part_emitter_create.ps }
        ],
        signature: '(ps)'
    },
	part_emitter_destroy: {
        description: '[Function]' + i18n.part_emitter_destroy.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ps', documentation: i18n.part_emitter_destroy.ps },
            { label: 'ind', documentation: i18n.part_emitter_destroy.ind }
        ],
        signature: '(ps, ind)'
    },
	part_emitter_destroy_all: {
        description: '[Function]' + i18n.part_emitter_destroy_all.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ps', documentation: i18n.part_emitter_destroy_all.ps }
        ],
        signature: '(ps)'
    },
	part_emitter_exists: {
        description: '[Function]' + i18n.part_emitter_exists.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ps', documentation: i18n.part_emitter_exists.ps },
            { label: 'ind', documentation: i18n.part_emitter_exists.ind }
        ],
        signature: '(ps, ind)'
    },
	part_emitter_region: {
        description: '[Function]' + i18n.part_emitter_region.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ps', documentation: i18n.part_emitter_region.ps },
            { label: 'ind', documentation: i18n.part_emitter_region.ind },
            { label: 'xmin', documentation: i18n.part_emitter_region.xmin },
            { label: 'xmax', documentation: i18n.part_emitter_region.xmax },
            { label: 'ymin', documentation: i18n.part_emitter_region.ymin },
            { label: 'ymax', documentation: i18n.part_emitter_region.ymax },
            { label: 'shape', documentation: i18n.part_emitter_region.shape },
            { label: 'distribution', documentation: i18n.part_emitter_region.distribution }
        ],
        signature: '(ps, ind, xmin, xmax, ymin, ymax, shape, distribution)'
    },
	part_emitter_stream: {
        description: '[Function]' + i18n.part_emitter_stream.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ps', documentation: i18n.part_emitter_stream.ps },
            { label: 'ind', documentation: i18n.part_emitter_stream.ind },
            { label: 'parttype', documentation: i18n.part_emitter_stream.parttype },
            { label: 'number', documentation: i18n.part_emitter_stream.number }
        ],
        signature: '(ps, ind, parttype, number)'
    },
	part_particles_clear: {
        description: '[Function]' + i18n.part_particles_clear.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.part_particles_clear.ind }
        ],
        signature: '(ind)'
    },
	part_particles_count: {
        description: '[Function]' + i18n.part_particles_count.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.part_particles_count.ind }
        ],
        signature: '(ind)'
    },
	part_particles_create: {
        description: '[Function]' + i18n.part_particles_create.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.part_particles_create.ind },
            { label: 'x', documentation: i18n.part_particles_create.x },
            { label: 'y', documentation: i18n.part_particles_create.y },
            { label: 'parttype', documentation: i18n.part_particles_create.parttype },
            { label: 'number', documentation: i18n.part_particles_create.number }
        ],
        signature: '(ind, x, y, parttype, number)'
    },
	part_particles_create_color: {
        description: '[Function]' + i18n.part_particles_create_color.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.part_particles_create_color.ind },
            { label: 'x', documentation: i18n.part_particles_create_color.x },
            { label: 'y', documentation: i18n.part_particles_create_color.y },
            { label: 'parttype', documentation: i18n.part_particles_create_color.parttype },
            { label: 'colour', documentation: i18n.part_particles_create_color.colour },
            { label: 'number', documentation: i18n.part_particles_create_color.number }
        ],
        signature: '(ind, x, y, parttype, colour, number)'
    },
	part_particles_create_colour: {
        description: '[Function]' + i18n.part_particles_create_colour.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.part_particles_create_colour.ind },
            { label: 'x', documentation: i18n.part_particles_create_colour.x },
            { label: 'y', documentation: i18n.part_particles_create_colour.y },
            { label: 'parttype', documentation: i18n.part_particles_create_colour.parttype },
            { label: 'colour', documentation: i18n.part_particles_create_colour.colour },
            { label: 'number', documentation: i18n.part_particles_create_colour.number }
        ],
        signature: '(ind, x, y, parttype, colour, number)'
    },
	part_system_automatic_draw: {
        description: '[Function]' + i18n.part_system_automatic_draw.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.part_system_automatic_draw.ind },
            { label: 'draw', documentation: i18n.part_system_automatic_draw.draw }
        ],
        signature: '(ind, draw)'
    },
	part_system_automatic_update: {
        description: '[Function]' + i18n.part_system_automatic_update.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.part_system_automatic_update.ind },
            { label: 'automatic', documentation: i18n.part_system_automatic_update.automatic }
        ],
        signature: '(ind, automatic)'
    },
	part_system_clear: {
        description: '[Function]' + i18n.part_system_clear.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.part_system_clear.ind }
        ],
        signature: '(ind)'
    },
	part_system_create: {
        description: '[Function]' + i18n.part_system_create.desc,
        available: datasimple.all
    },
	part_system_depth: {
        description: '[Function]' + i18n.part_system_depth.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.part_system_depth.ind },
            { label: 'depth', documentation: i18n.part_system_depth.depth }
        ],
        signature: '(ind, depth)'
    },
	part_system_destroy: {
        description: '[Function]' + i18n.part_system_destroy.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.part_system_destroy.ind }
        ],
        signature: '(ind)'
    },
	part_system_drawit: {
        description: '[Function]' + i18n.part_system_drawit.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.part_system_drawit.ind }
        ],
        signature: '(ind)'
    },
	part_system_draw_order: {
        description: '[Function]' + i18n.part_system_draw_order.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.part_system_draw_order.ind },
            { label: 'oldtonew', documentation: i18n.part_system_draw_order.oldtonew }
        ],
        signature: '(ind, oldtonew)'
    },
	part_system_exists: {
        description: '[Function]' + i18n.part_system_exists.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.part_system_exists.ind }
        ],
        signature: '(ind)'
    },
	part_system_position: {
        description: '[Function]' + i18n.part_system_position.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.part_system_position.ind },
            { label: 'x', documentation: i18n.part_system_position.x },
            { label: 'y', documentation: i18n.part_system_position.y }
        ],
        signature: '(ind, x, y)'
    },
	part_system_update: {
        description: '[Function]' + i18n.part_system_update.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.part_system_update.ind }
        ],
        signature: '(ind)'
    },
	part_type_alpha1: {
        description: '[Function]' + i18n.part_type_alpha1.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.part_type_alpha1.ind },
            { label: 'alpha1', documentation: i18n.part_type_alpha1.alpha1 }
        ],
        signature: '(ind, alpha1)'
    },
	part_type_alpha2: {
        description: '[Function]' + i18n.part_type_alpha2.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.part_type_alpha2.ind },
            { label: 'alpha1', documentation: i18n.part_type_alpha2.alpha1 },
            { label: 'alpha2', documentation: i18n.part_type_alpha2.alpha2 }
        ],
        signature: '(ind, alpha1, alpha2)'
    },
	part_type_alpha3: {
        description: '[Function]' + i18n.part_type_alpha3.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.part_type_alpha3.ind },
            { label: 'alpha1', documentation: i18n.part_type_alpha3.alpha1 },
            { label: 'alpha2', documentation: i18n.part_type_alpha3.alpha2 },
            { label: 'alpha3', documentation: i18n.part_type_alpha3.alpha3 }
        ],
        signature: '(ind, alpha1, alpha2, alpha3)'
    },
	part_type_blend: {
        description: '[Function]' + i18n.part_type_blend.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.part_type_blend.ind },
            { label: 'additive', documentation: i18n.part_type_blend.additive }
        ],
        signature: '(ind, additive)'
    },
	part_type_clear: {
        description: '[Function]' + i18n.part_type_clear.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.part_type_clear.ind }
        ],
        signature: '(ind)'
    },
	part_type_color1: {
        description: '[Function]' + i18n.part_type_color1.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.part_type_color1.ind },
            { label: 'color1', documentation: i18n.part_type_color1.color1 }
        ],
        signature: '(ind, color1)'
    },
	part_type_color2: {
        description: '[Function]' + i18n.part_type_color2.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.part_type_color2.ind },
            { label: 'color1', documentation: i18n.part_type_color2.color1 },
            { label: 'color2', documentation: i18n.part_type_color2.color2 }
        ],
        signature: '(ind, color1， color2)'
    },
	part_type_color3: {
        description: '[Function]' + i18n.part_type_color3.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.part_type_color3.ind },
            { label: 'color1', documentation: i18n.part_type_color3.color1 },
            { label: 'color2', documentation: i18n.part_type_color3.color2 },
            { label: 'color3', documentation: i18n.part_type_color3.color3 }
        ],
        signature: '(ind, color1, color2, color3)'
    },
	part_type_color_hsv: {
        description: '[Function]' + i18n.part_type_color_hsv.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.part_type_color_hsv.ind },
            { label: 'hmin', documentation: i18n.part_type_color_hsv.hmin },
            { label: 'hmax', documentation: i18n.part_type_color_hsv.hmax },
            { label: 'smin', documentation: i18n.part_type_color_hsv.smin },
            { label: 'smax', documentation: i18n.part_type_color_hsv.smax },
            { label: 'vmin', documentation: i18n.part_type_color_hsv.vmin },
            { label: 'vmax', documentation: i18n.part_type_color_hsv.vmax }
        ],
        signature: '(ind, hmin, hmax, smin, smax, vmin, vmax)'
    },
	part_type_color_mix: {
        description: '[Function]' + i18n.part_type_color_mix.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.part_type_color_mix.ind },
            { label: 'color1', documentation: i18n.part_type_color_mix.color1 },
            { label: 'color2', documentation: i18n.part_type_color_mix.color2 }
        ],
        signature: '(ind, color1, color2)'
    },
	part_type_color_rgb: {
        description: '[Function]' + i18n.part_type_color_rgb.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.part_type_color_rgb.ind },
            { label: 'rmin', documentation: i18n.part_type_color_rgb.rmin },
            { label: 'rmax', documentation: i18n.part_type_color_rgb.rmax },
            { label: 'gmin', documentation: i18n.part_type_color_rgb.gmin },
            { label: 'gmax', documentation: i18n.part_type_color_rgb.gmax },
            { label: 'bmin', documentation: i18n.part_type_color_rgb.bmin },
            { label: 'bmax', documentation: i18n.part_type_color_rgb.bmax }
        ],
        signature: '(ind, rmin, rmax, gmin, gmax, bmin, bmax)'
    },
	part_type_colour1: {
        description: '[Function]' + i18n.part_type_colour1.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.part_type_colour1.ind },
            { label: 'colour1', documentation: i18n.part_type_colour1.colour1 }
        ],
        signature: '(ind, colour1)'
    },
	part_type_colour2: {
        description: '[Function]' + i18n.part_type_colour2.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.part_type_colour2.ind },
            { label: 'colour1', documentation: i18n.part_type_colour2.colour1 },
            { label: 'colour2', documentation: i18n.part_type_colour2.colour2 }
        ],
        signature: '(ind, colour1, colour2)'
    },
	part_type_colour3: {
        description: '[Function]' + i18n.part_type_colour3.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.part_type_colour3.ind },
            { label: 'colour1', documentation: i18n.part_type_colour3.colour1 },
            { label: 'colour2', documentation: i18n.part_type_colour3.colour2 },
            { label: 'colour3', documentation: i18n.part_type_colour3.colour3 }
        ],
        signature: '(ind, colour1, colour2, colour3)'
    },
	part_type_colour_hsv: {
        description: '[Function]' + i18n.part_type_colour_hsv.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.part_type_colour_hsv.ind },
            { label: 'hmin', documentation: i18n.part_type_colour_hsv.hmin },
            { label: 'hmax', documentation: i18n.part_type_colour_hsv.hmax },
            { label: 'smin', documentation: i18n.part_type_colour_hsv.smin },
            { label: 'smax', documentation: i18n.part_type_colour_hsv.smax },
            { label: 'vmin', documentation: i18n.part_type_colour_hsv.vmin },
            { label: 'vmax', documentation: i18n.part_type_colour_hsv.vmax }
        ],
        signature: '(ind, hmin, hmax, smin, smax, vmin, vmax)'
    },
	part_type_colour_mix: {
        description: '[Function]' + i18n.part_type_colour_mix.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.part_type_colour_mix.ind },
            { label: 'colour1', documentation: i18n.part_type_colour_mix.colour1 },
            { label: 'colour2', documentation: i18n.part_type_colour_mix.colour2 }
        ],
        signature: '(ind, colour1, colour2)'
    },
	part_type_colour_rgb: {
        description: '[Function]' + i18n.part_type_colour_rgb.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.part_type_colour_rgb.ind },
            { label: 'rmin', documentation: i18n.part_type_colour_rgb.rmin },
            { label: 'rmax', documentation: i18n.part_type_colour_rgb.rmax },
            { label: 'gmin', documentation: i18n.part_type_colour_rgb.gmin },
            { label: 'gmax', documentation: i18n.part_type_colour_rgb.gmax },
            { label: 'bmin', documentation: i18n.part_type_colour_rgb.bmin },
            { label: 'bmax', documentation: i18n.part_type_colour_rgb.bmax }
        ],
        signature: '(ind, rmin, rmax, gmin, gmax, bmin, bmax)'
    },
	part_type_create: {
        description: '[Function]' + i18n.part_type_create.desc,
        available: datasimple.all
    },
	part_type_death: {
        description: '[Function]' + i18n.part_type_death.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.part_type_death.ind },
            { label: 'death_number', documentation: i18n.part_type_death.death_number },
            { label: 'death_type', documentation: i18n.part_type_death.death_type }
        ],
        signature: '(ind, death_number, death_type)'
    },
	part_type_destroy: {
        description: '[Function]' + i18n.part_type_destroy.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.part_type_destroy.ind }
        ],
        signature: '(ind)'
    },
	part_type_direction: {
        description: '[Function]' + i18n.part_type_direction.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.part_type_direction.ind },
            { label: 'dir_min', documentation: i18n.part_type_direction.dir_min },
            { label: 'dir_max', documentation: i18n.part_type_direction.dir_max },
            { label: 'dir_incr', documentation: i18n.part_type_direction.dir_incr },
            { label: 'dir_wiggle', documentation: i18n.part_type_direction.dir_wiggle }
        ],
        signature: '(ind, dir_min, dir_max, dir_incr, dir_wiggle)'
    },
	part_type_exists: {
        description: '[Function]' + i18n.part_type_exists.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.part_type_exists.ind }
        ],
        signature: '(ind)'
    },
	part_type_gravity: {
        description: '[Function]' + i18n.part_type_gravity.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.part_type_gravity.ind },
            { label: 'grav_amount', documentation: i18n.part_type_gravity.grav_amount },
            { label: 'grav_dir', documentation: i18n.part_type_gravity.grav_dir }
        ],
        signature: '(ind, grav_amount, grav_dir)'
    },
	part_type_life: {
        description: '[Function]' + i18n.part_type_life.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.part_type_life.ind },
            { label: 'life_min', documentation: i18n.part_type_life.life_min },
            { label: 'life_max', documentation: i18n.part_type_life.life_max }
        ],
        signature: '(ind, life_min, life_max)'
    },
	part_type_orientation: {
        description: '[Function]' + i18n.part_type_orientation.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.part_type_orientation.ind },
            { label: 'ang_min', documentation: i18n.part_type_orientation.ang_min },
            { label: 'ang_max', documentation: i18n.part_type_orientation.ang_max },
            { label: 'ang_incr', documentation: i18n.part_type_orientation.ang_incr },
            { label: 'ang_wiggle', documentation: i18n.part_type_orientation.ang_wiggle },
            { label: 'ang_relative', documentation: i18n.part_type_orientation.ang_relative }
        ],
        signature: '(ind, ang_min, ang_max, ang_incr, ang_wiggle, ang_relative)'
    },
	part_type_scale: {
        description: '[Function]' + i18n.part_type_scale.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.part_type_scale.ind },
            { label: 'xscale', documentation: i18n.part_type_scale.xscale },
            { label: 'yscale', documentation: i18n.part_type_scale.yscale }
        ],
        signature: '(ind, xscale, yscale)'
    },
	part_type_shape: {
        description: '[Function]' + i18n.part_type_shape.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.part_type_shape.ind },
            { label: 'shape', documentation: i18n.part_type_shape.shape }
        ],
        signature: '(ind, shape)'
    },
	part_type_size: {
        description: '[Function]' + i18n.part_type_size.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.part_type_size.ind },
            { label: 'size_min', documentation: i18n.part_type_size.size_min },
            { label: 'size_max', documentation: i18n.part_type_size.size_max },
            { label: 'size_incr', documentation: i18n.part_type_size.size_incr },
            { label: 'size_wiggle', documentation: i18n.part_type_size.size_wiggle }
        ],
        signature: '(ind, size_min, size_max, size_incr, size_wiggle)'
    },
	part_type_speed: {
        description: '[Function]' + i18n.part_type_speed.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.part_type_speed.ind },
            { label: 'speed_min', documentation: i18n.part_type_speed.speed_min },
            { label: 'speed_max', documentation: i18n.part_type_speed.speed_max },
            { label: 'speed_incr', documentation: i18n.part_type_speed.speed_incr },
            { label: 'speed_wiggle', documentation: i18n.part_type_speed.speed_wiggle }
        ],
        signature: '(ind, speed_min, speed_max, speed_incr, speed_wiggle)'
    },
	part_type_sprite: {
        description: '[Function]' + i18n.part_type_sprite.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.part_type_sprite.ind },
            { label: 'sprite', documentation: i18n.part_type_sprite.sprite },
            { label: 'animat', documentation: i18n.part_type_sprite.animat },
            { label: 'stretch', documentation: i18n.part_type_sprite.stretch },
            { label: 'random', documentation: i18n.part_type_sprite.random }
        ],
        signature: '(ind, sprite, animat, stretch, random)'
    },
	part_type_step: {
        description: '[Function]' + i18n.part_type_step.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.part_type_step.ind },
            { label: 'step_number', documentation: i18n.part_type_step.step_number },
            { label: 'step_type', documentation: i18n.part_type_step.step_type }
        ],
        signature: '(ind, step_number, step_type)'
    },
	path_add: {
        description: '[Function]' + i18n.path_add.desc,
        available: datasimple.all
    },
	path_add_point: {
        description: '[Function]' + i18n.path_add_point.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.path_add_point.ind },
            { label: 'x', documentation: i18n.path_add_point.x },
            { label: 'y', documentation: i18n.path_add_point.y },
            { label: 'speed', documentation: i18n.path_add_point.speed }
        ],
        signature: '(ind, x, y, speed)'
    },
	path_append: {
        description: '[Function]' + i18n.path_append.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.path_append.ind },
            { label: 'path', documentation: i18n.path_append.path }
        ],
        signature: '(ind, path)'
    },
	path_assign: {
        description: '[Function]' + i18n.path_assign.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.path_assign.ind },
            { label: 'x', documentation: i18n.path_assign.x },
            { label: 'y', documentation: i18n.path_assign.y },
            { label: 'speed', documentation: i18n.path_assign.speed }
        ],
        signature: '(ind, x, y, speed)'
    },
	path_change_point: {
        description: '[Function]' + i18n.path_change_point.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.path_change_point.ind },
            { label: 'n', documentation: i18n.path_change_point.n },
            { label: 'x', documentation: i18n.path_change_point.x },
            { label: 'y', documentation: i18n.path_change_point.y },
            { label: 'speed', documentation: i18n.path_change_point.speed }
        ],
        signature: '(ind, n, x, y, speed)'
    },
	path_clear_points: {
        description: '[Function]' + i18n.path_clear_points.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.path_clear_points.ind }
        ],
        signature: '(ind)'
    },
	path_delete: {
        description: '[Function]' + i18n.path_delete.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.path_delete.ind }
        ],
        signature: '(ind)'
    },
	path_delete_point: {
        description: '[Function]' + i18n.path_delete_point.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.path_delete_point.ind },
            { label: 'n', documentation: i18n.path_delete_point.n }
        ],
        signature: '(ind, n)'
    },
	path_duplicate: {
        description: '[Function]' + i18n.path_duplicate.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.path_duplicate.ind }
        ],
        signature: '(ind)'
    },
	path_end: {
        description: '[Function]' + i18n.path_end.desc,
        available: datasimple.all
    },
	path_exists: {
        description: '[Function]' + i18n.path_exists.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.path_exists.ind }
        ],
        signature: '(ind)'
    },
	path_flip: {
        description: '[Function]' + i18n.path_flip.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.path_flip.ind }
        ],
        signature: '(ind)'
    },
	path_get_closed: {
        description: '[Function]' + i18n.path_get_closed.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.path_get_closed.ind }
        ],
        signature: '(ind)'
    },
	path_get_kind: {
        description: '[Function]' + i18n.path_get_kind.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.path_get_kind.ind }
        ],
        signature: '(ind)'
    },
	path_get_length: {
        description: '[Function]' + i18n.path_get_length.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.path_get_length.ind }
        ],
        signature: '(ind)'
    },
	path_get_name: {
        description: '[Function]' + i18n.path_get_name.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.path_get_name.ind }
        ],
        signature: '(ind)'
    },
	path_get_number: {
        description: '[Function]' + i18n.path_get_number.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.path_get_number.ind }
        ],
        signature: '(ind)'
    },
	path_get_point_speed: {
        description: '[Function]' + i18n.path_get_point_speed.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.path_get_point_speed.ind },
            { label: 'n', documentation: i18n.path_get_point_speed.n }
        ],
        signature: '(ind, n)'
    },
	path_get_point_x: {
        description: '[Function]' + i18n.path_get_point_x.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.path_get_point_x.ind },
            { label: 'n', documentation: i18n.path_get_point_x.n }
        ],
        signature: '(ind, n)'
    },
	path_get_point_y: {
        description: '[Function]' + i18n.path_get_point_y.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.path_get_point_y.ind },
            { label: 'n', documentation: i18n.path_get_point_y.n }
        ],
        signature: '(ind, n)'
    },
	path_get_precision: {
        description: '[Function]' + i18n.path_get_precision.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.path_get_precision.ind }
        ],
        signature: '(ind)'
    },
	path_get_speed: {
        description: '[Function]' + i18n.path_get_speed.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.path_get_speed.ind },
            { label: 'pos', documentation: i18n.path_get_speed.pos }
        ],
        signature: '(ind, pos)'
    },
	path_get_time: {
        description: '[Function]' + i18n.path_get_time.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.path_get_time.ind },
            { label: 'speed', documentation: i18n.path_get_time.speed }
        ],
        signature: '(ind, speed)'
    },
	path_get_x: {
        description: '[Function]' + i18n.path_get_x.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.path_get_x.ind },
            { label: 'pos', documentation: i18n.path_get_x.pos }
        ],
        signature: '(ind, pos)'
    },
	path_get_y: {
        description: '[Function]' + i18n.path_get_y.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.path_get_y.ind },
            { label: 'pos', documentation: i18n.path_get_y.pos }
        ],
        signature: '(ind, pos)'
    },
	path_insert_point: {
        description: '[Function]' + i18n.path_insert_point.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.path_insert_point.ind },
            { label: 'n', documentation: i18n.path_insert_point.n },
            { label: 'x', documentation: i18n.path_insert_point.x },
            { label: 'y', documentation: i18n.path_insert_point.y },
            { label: 'speed', documentation: i18n.path_insert_point.speed }
        ],
        signature: '(ind, n, x, y, speed)'
    },
	path_mirror: {
        description: '[Function]' + i18n.path_mirror.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.path_mirror.ind }
        ],
        signature: '(ind)'
    },
	path_rescale: {
        description: '[Function]' + i18n.path_rescale.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.path_rescale.ind },
            { label: 'xscale', documentation: i18n.path_rescale.xscale },
            { label: 'yscale', documentation: i18n.path_rescale.yscale }
        ],
        signature: '(ind, xscale, yscale)'
    },
	path_reverse: {
        description: '[Function]' + i18n.path_reverse.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.path_reverse.ind }
        ],
        signature: '(ind)'
    },
	path_rotate: {
        description: '[Function]' + i18n.path_rotate.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.path_rotate.ind },
            { label: 'angle', documentation: i18n.path_rotate.angle }
        ],
        signature: '(ind, angle)'
    },
	path_set_closed: {
        description: '[Function]' + i18n.path_set_closed.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.path_set_closed.ind },
            { label: 'closed', documentation: i18n.path_set_closed.closed }
        ],
        signature: '(ind, closed)'
    },
	path_set_kind: {
        description: '[Function]' + i18n.path_set_kind.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.path_set_kind.ind },
            { label: 'kind', documentation: i18n.path_set_kind.kind }
        ],
        signature: '(ind, kind)'
    },
	path_set_precision: {
        description: '[Function]' + i18n.path_set_precision.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.path_set_precision.ind },
            { label: 'prec', documentation: i18n.path_set_precision.prec }
        ],
        signature: '(ind, prec)'
    },
	path_shift: {
        description: '[Function]' + i18n.path_shift.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.path_shift.ind },
            { label: 'xshift', documentation: i18n.path_shift.xshift },
            { label: 'yshift', documentation: i18n.path_shift.yshift }
        ],
        signature: '(ind, xshift, yshift)'
    },
	path_start: {
        description: '[Function]' + i18n.path_start.desc,
        available: datasimple.all,
        parameters: [
            { label: 'path', documentation: i18n.path_start.path },
            { label: 'speed', documentation: i18n.path_start.speed },
            { label: 'endaction', documentation: i18n.path_start.endaction },
            { label: 'absolute', documentation: i18n.path_start.aboslute }
        ],
        signature: '(path, speed, endaction, absolute)'
    },
	physics_apply_angular_impulse: {
        description: '[Function]' + i18n.physics_apply_angular_impulse.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'impulse', documentation: i18n.physics_apply_angular_impulse.impulse }
        ],
        signature: '(impulse)'
    },
	physics_apply_force: {
        description: '[Function]' + i18n.physics_apply_force.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'xpos', documentation: i18n.physics_apply_force.xpos },
            { label: 'ypos', documentation: i18n.physics_apply_force.ypos },
            { label: 'xforce', documentation: i18n.physics_apply_force.xforce },
            { label: 'yforce', documentation: i18n.physics_apply_force.yforce }
        ],
        signature: '(xpos, ypos, xforce, yforce)'
    },
	physics_apply_impulse: {
        description: '[Function]' + i18n.physics_apply_impulse.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'xpos', documentation: i18n.physics_apply_impulse.xpos },
            { label: 'ypos', documentation: i18n.physics_apply_impulse.ypos },
            { label: 'ximpulse', documentation: i18n.physics_apply_impulse.ximpulse },
            { label: 'yimpulse', documentation: i18n.physics_apply_impulse.yimpulse }
        ],
        signature: '(xpos, ypos, ximpulse, yimpulse)'
    },
	physics_apply_local_force: {
        description: '[Function]' + i18n.physics_apply_local_force.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'xlocal', documentation: i18n.physics_apply_local_force.xlocal },
            { label: 'ylocal', documentation: i18n.physics_apply_local_force.ylocal },
            { label: 'xforce_local', documentation: i18n.physics_apply_local_force.xforce_local },
            { label: 'yforce_local', documentation: i18n.physics_apply_local_force.yforce_local }
        ],
        signature: '(xlocal, ylocal, xforce_local, yforce_local)'
    },
	physics_apply_local_impulse: {
        description: '[Function]' + i18n.physics_apply_local_impulse.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'xlocal', documentation: i18n.physics_apply_local_impulse.xlocal },
            { label: 'ylocal', documentation: i18n.physics_apply_local_impulse.ylocal },
            { label: 'ximpulse_local', documentation: i18n.physics_apply_local_impulse.ximpulse_local },
            { label: 'yimpulse_local', documentation: i18n.physics_apply_local_impulse.yimpulse_local }
        ],
        signature: '(xlocal, ylocal, ximpulse_local, yimpulse_local)'
    },
	physics_apply_torque: {
        description: '[Function]' + i18n.physics_apply_torque.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'torque', documentation: i18n.physics_apply_torque.torque }
        ],
        signature: '(torque)'
    },
	physics_draw_debug: {
        description: '[Function]' + i18n.physics_draw_debug.desc,
        available: datasimple.gms1
    },
	physics_fixture_add_point: {
        description: '[Function]' + i18n.physics_fixture_add_point.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'fixture', documentation: i18n.physics_fixture_add_point.fixture },
            { label: 'local_x', documentation: i18n.physics_fixture_add_point.local_x },
            { label: 'local_y', documentation: i18n.physics_fixture_add_point.local_y }
        ],
        signature: '(fixture, local_x, local_y)'
    },
	physics_fixture_bind: {
        description: '[Function]' + i18n.physics_fixture_bind.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'fixture', documentation: i18n.physics_fixture_bind.fixture },
            { label: 'obj', documentation: i18n.physics_fixture_bind.obj }
        ],
        signature: '(fixture, obj)'
    },
	physics_fixture_bind_ext: {
        description: '[Function]' + i18n.physics_fixture_bind_ext.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'fixture', documentation: i18n.physics_fixture_bind_ext.fixture },
            { label: 'obj', documentation: i18n.physics_fixture_bind_ext.obj },
            { label: 'xo', documentation: i18n.physics_fixture_bind_ext.xo },
            { label: 'yo', documentation: i18n.physics_fixture_bind_ext.yo }
        ],
        signature: '(fixture, obj, xo, yo)'
    },
	physics_fixture_create: {
        description: '[Function]' + i18n.physics_fixture_create.desc,
        available: datasimple.gms1
    },
	physics_fixture_delete: {
        description: '[Function]' + i18n.physics_fixture_delete.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'fixture', documentation: i18n.physics_fixture_delete.fixture }
        ],
        signature: '(fixture)'
    },
	physics_fixture_set_angular_damping: {
        description: '[Function]' + i18n.physics_fixture_set_angular_damping.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'fixture', documentation: i18n.physics_fixture_set_angular_damping.fixture },
            { label: 'damping', documentation: i18n.physics_fixture_set_angular_damping.damping }
        ],
        signature: '(fixture, damping)'
    },
	physics_fixture_set_awake: {
        description: '[Function]' + i18n.physics_fixture_set_awake.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'fixture', documentation: i18n.physics_fixture_set_awake.fixture },
            { label: 'flag', documentation: i18n.physics_fixture_set_awake.flag }
        ],
        signature: '(fixture, flag)'
    },
	physics_fixture_set_box_shape: {
        description: '[Function]' + i18n.physics_fixture_set_box_shape.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'fixture', documentation: i18n.physics_fixture_set_box_shape.fixture },
            { label: 'halfWidth', documentation: i18n.physics_fixture_set_box_shape.halfWidth },
            { label: 'halfHeight', documentation: i18n.physics_fixture_set_box_shape.halfHeight }
        ],
        signature: '(fixture, halfWidth, halfHeight)'
    },
	physics_fixture_set_chain_shape: {
        description: '[Function]' + i18n.physics_fixture_set_chain_shape.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'fixture', documentation: i18n.physics_fixture_set_chain_shape.fixture },
            { label: 'loop', documentation: i18n.physics_fixture_set_chain_shape.loop }
        ],
        signature: '(fixture, loop)'
    },
	physics_fixture_set_circle_shape: {
        description: '[Function]' + i18n.physics_fixture_set_circle_shape.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'fixture', documentation: i18n.physics_fixture_set_circle_shape.fixture },
            { label: 'circleRadius', documentation: i18n.physics_fixture_set_circle_shape.circleRadius }
        ],
        signature: '(fixture, circleRadius)'
    },
	physics_fixture_set_collision_group: {
        description: '[Function]' + i18n.physics_fixture_set_collision_group.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'fixture', documentation: i18n.physics_fixture_set_collision_group.fixture },
            { label: 'group', documentation: i18n.physics_fixture_set_collision_group.group }
        ],
        signature: '(fixture, group)'
    },
	physics_fixture_set_density: {
        description: '[Function]' + i18n.physics_fixture_set_density.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'fixture', documentation: i18n.physics_fixture_set_density.fixture },
            { label: 'density', documentation: i18n.physics_fixture_set_density.density }
        ],
        signature: '(fixture, density)'
    },
	physics_fixture_set_edge_shape: {
        description: '[Function]' + i18n.physics_fixture_set_edge_shape.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'fixture', documentation: i18n.physics_fixture_set_edge_shape.fixture },
            { label: 'local_x1', documentation: i18n.physics_fixture_set_edge_shape.local_x1 },
            { label: 'local_y1', documentation: i18n.physics_fixture_set_edge_shape.local_y1 },
            { label: 'local_x2', documentation: i18n.physics_fixture_set_edge_shape.local_x2 },
            { label: 'local_y2', documentation: i18n.physics_fixture_set_edge_shape.local_y2 }
        ],
        signature: '(fixture, local_x1, local_y1, local_x2, local_y2)'
    },
	physics_fixture_set_friction: {
        description: '[Function]' + i18n.physics_fixture_set_friction.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'fixture', documentation: i18n.physics_fixture_set_friction.fixture },
            { label: 'friction', documentation: i18n.physics_fixture_set_friction.friction }
        ],
        signature: '(fixture, friction)'
    },
	physics_fixture_set_kinematic: {
        description: '[Function]' + i18n.physics_fixture_set_kinematic.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'fixture', documentation: i18n.physics_fixture_set_kinematic.fixture }
        ],
        signature: '(fixture)'
    },
	physics_fixture_set_linear_damping: {
        description: '[Function]' + i18n.physics_fixture_set_linear_damping.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'fixture', documentation: i18n.physics_fixture_set_linear_damping.fixture },
            { label: 'damping', documentation: i18n.physics_fixture_set_linear_damping.damping }
        ],
        signature: '(fixture, damping)'
    },
	physics_fixture_set_polygon_shape: {
        description: '[Function]' + i18n.physics_fixture_set_polygon_shape.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'fixture', documentation: i18n.physics_fixture_set_polygon_shape.fixture }
        ],
        signature: '(fixture)'
    },
	physics_fixture_set_restitution: {
        description: '[Function]' + i18n.physics_fixture_set_restitution.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'fixture', documentation: i18n.physics_fixture_set_restitution.fixture },
            { label: 'restitution', documentation: i18n.physics_fixture_set_restitution.restitution }
        ],
        signature: '(fixture, restitution)'
    },
	physics_fixture_set_sensor: {
        description: '[Function]' + i18n.physics_fixture_set_sensor.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'fixture', documentation: i18n.physics_fixture_set_sensor.fixture },
            { label: 'sensorState', documentation: i18n.physics_fixture_set_sensor.sensorState }
        ],
        signature: '(fixture, sensorState)'
    },
	physics_get_density: {
        description: '[Function]' + i18n.physics_get_density.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'fixture', documentation: i18n.physics_get_density.fixture }
        ],
        signature: '(fixture)'
    },
	physics_get_friction: {
        description: '[Function]' + i18n.physics_get_friction.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'fixture', documentation: i18n.physics_get_friction.fixture }
        ],
        signature: '(fixture)'
    },
	physics_get_restitution: {
        description: '[Function]' + i18n.physics_get_restitution.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'fixture', documentation: i18n.physics_get_restitution.fixture }
        ],
        signature: '(fixture)'
    },
	physics_joint_delete: {
        description: '[Function]' + i18n.physics_joint_delete.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'joint', documentation: i18n.physics_joint_delete.joint }
        ],
        signature: '(joint)'
    },
	physics_joint_distance_create: {
        description: '[Function]' + i18n.physics_joint_distance_create.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'inst1', documentation: i18n.physics_joint_distance_create.inst1 },
            { label: 'inst2', documentation: i18n.physics_joint_distance_create.inst2 },
            { label: 'anchor_1_x', documentation: i18n.physics_joint_distance_create.anchor_1_x },
            { label: 'anchor_1_y', documentation: i18n.physics_joint_distance_create.anchor_1_y },
            { label: 'anchor_2_x', documentation: i18n.physics_joint_distance_create.anchor_2_x },
            { label: 'anchor_2_y', documentation: i18n.physics_joint_distance_create.anchor_2_y },
            { label: 'collideInstances', documentation: i18n.physics_joint_distance_create.collideInstances }
        ],
        signature: '(inst1, inst2, anchor_1_x, anchor_1_y, anchor_2_x, anchor_2_y, collideInstances)'
    },
	physics_joint_enable_motor: {
        description: '[Function]' + i18n.physics_joint_enable_motor.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'joint', documentation: i18n.physics_joint_enable_motor.joint },
            { label: 'motorState', documentation: i18n.physics_joint_enable_motor.motorState }
        ],
        signature: '(joint, motorState)'
    },
	physics_joint_friction_create: {
        description: '[Function]' + i18n.physics_joint_friction_create.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'inst1', documentation: i18n.physics_joint_friction_create.inst1 },
            { label: 'inst2', documentation: i18n.physics_joint_friction_create.inst2 },
            { label: 'anchor_x', documentation: i18n.physics_joint_friction_create.anchor_x },
            { label: 'anchor_y', documentation: i18n.physics_joint_friction_create.anchor_y },
            { label: 'max_force', documentation: i18n.physics_joint_friction_create.max_force },
            { label: 'max_torque', documentation: i18n.physics_joint_friction_create.max_torque },
            { label: 'collideInstances', documentation: i18n.physics_joint_friction_create.collideInstances }
        ],
        signature: '(inst1, inst2, anchor_x, anchor_y, max_force, max_torque, collideInstances)'
    },
	physics_joint_gear_create: {
        description: '[Function]' + i18n.physics_joint_gear_create.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'inst1', documentation: i18n.physics_joint_gear_create.inst1 },
            { label: 'inst2', documentation: i18n.physics_joint_gear_create.inst2 },
            { label: 'revoluteJoint', documentation: i18n.physics_joint_gear_create.revoluteJoint },
            { label: 'prismaticJoint', documentation: i18n.physics_joint_gear_create.prismaticJoint },
            { label: 'ratio', documentation: i18n.physics_joint_gear_create.ratio }
        ],
        signature: '(inst1, inst2, revoluteJoint, prismaticJoint, ratio)'
    },
	physics_joint_get_value: {
        description: '[Function]' + i18n.physics_joint_get_value.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'joint', documentation: i18n.physics_joint_get_value.joint },
            { label: 'field', documentation: i18n.physics_joint_get_value.field }
        ],
        signature: '(joint, field)'
    },
	physics_joint_prismatic_create: {
        description: '[Function]' + i18n.physics_joint_prismatic_create.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'inst1', documentation: i18n.physics_joint_prismatic_create.inst1 },
            { label: 'inst2', documentation: i18n.physics_joint_prismatic_create.inst2 },
            { label: 'anchor_x', documentation: i18n.physics_joint_prismatic_create.anchor_x },
            { label: 'anchor_y', documentation: i18n.physics_joint_prismatic_create.anchor_y },
            { label: 'axis_x', documentation: i18n.physics_joint_prismatic_create.axis_x },
            { label: 'axis_y', documentation: i18n.physics_joint_prismatic_create.axis_y },
            { label: 'lower_translation_limit', documentation: i18n.physics_joint_prismatic_create.lower_translation_limit },
            { label: 'upper_translation_limit', documentation: i18n.physics_joint_prismatic_create.upper_translation_limit },
            { label: 'enable_limit', documentation: i18n.physics_joint_prismatic_create.enable_limit },
            { label: 'max_motor_force', documentation: i18n.physics_joint_prismatic_create.max_motor_force },
            { label: 'motor_speed', documentation: i18n.physics_joint_prismatic_create.motor_speed },
            { label: 'enable_motor', documentation: i18n.physics_joint_prismatic_create.enable_motor },
            { label: 'collideInstances', documentation: i18n.physics_joint_prismatic_create.collideInstances }
        ],
        signature: '(inst1, inst2, anchor_x, anchor_y, axis_x, axis_y, lower_translation_limit, upper_translation_limit, enable_limit, max_motor_force, motor_speed, enable_motor, collideInstances)'
    },
	physics_joint_pulley_create: {
        description: '[Function]' + i18n.physics_joint_pulley_create.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'inst1', documentation: i18n.physics_joint_pulley_create.inst1 },
            { label: 'inst2', documentation: i18n.physics_joint_pulley_create.inst2 },
            { label: 'anchor_1_x', documentation: i18n.physics_joint_pulley_create.anchor_1_x },
            { label: 'anchor_1_y', documentation: i18n.physics_joint_pulley_create.anchor_1_y },
            { label: 'anchor_2_x', documentation: i18n.physics_joint_pulley_create.anchor_2_x },
            { label: 'anchor_2_y', documentation: i18n.physics_joint_pulley_create.anchor_2_y },
            { label: 'local_anchor_1_x', documentation: i18n.physics_joint_pulley_create.local_anchor_1_x },
            { label: 'local_anchor_1_y', documentation: i18n.physics_joint_pulley_create.local_anchor_1_y },
            { label: 'local_anchor_2_x', documentation: i18n.physics_joint_pulley_create.local_anchor_2_x },
            { label: 'local_anchor_2_y', documentation: i18n.physics_joint_pulley_create.local_anchor_2_y },
            { label: 'ratio', documentation: i18n.physics_joint_pulley_create.ratio },
            { label: 'collideInstances', documentation: i18n.physics_joint_pulley_create.collideInstances }
        ],
        signature: '(inst1, inst2, anchor_1_x, anchor_1_y, anchor_2_x, anchor_2_y, local_anchor_1_x, local_anchor_1_y, local_anchor_2_x, local_anchor_2_y, ratio, collideInstances)'
    },
	physics_joint_revolute_create: {
        description: '[Function]' + i18n.physics_joint_revolute_create.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'inst1', documentation: i18n.physics_joint_revolute_create.inst1 },
            { label: 'inst2', documentation: i18n.physics_joint_revolute_create.inst2 },
            { label: 'anchor_x', documentation: i18n.physics_joint_revolute_create.anchor_x },
            { label: 'anchor_y', documentation: i18n.physics_joint_revolute_create.anchor_y },
            { label: 'lower_translation_limit', documentation: i18n.physics_joint_revolute_create.lower_translation_limit },
            { label: 'upper_translation_limit', documentation: i18n.physics_joint_revolute_create.upper_translation_limit },
            { label: 'enable_limit', documentation: i18n.physics_joint_revolute_create.enable_limit },
            { label: 'max_motor_force', documentation: i18n.physics_joint_revolute_create.max_motor_force },
            { label: 'motor_speed', documentation: i18n.physics_joint_revolute_create.motor_speed },
            { label: 'enable_motor', documentation: i18n.physics_joint_revolute_create.enable_motor },
            { label: 'collideInstances', documentation: i18n.physics_joint_revolute_create.collideInstances }
        ],
        signature: '(inst1, inst2, anchor_x, anchor_y, lower_angle_limit, upper_angle_limit, enable_limit, max_motor_torque, motor_speed, enable_motor, collideInstances)'
    },
	physics_joint_rope_create: {
        description: '[Function]' + i18n.physics_joint_rope_create.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'inst1', documentation: i18n.physics_joint_rope_create.inst1 },
            { label: 'inst2', documentation: i18n.physics_joint_rope_create.inst2 },
            { label: 'anchor_1_x', documentation: i18n.physics_joint_rope_create.anchor_1_x },
            { label: 'anchor_1_y', documentation: i18n.physics_joint_rope_create.anchor_1_y },
            { label: 'anchor_2_x', documentation: i18n.physics_joint_rope_create.anchor_2_x },
            { label: 'anchor_2_y', documentation: i18n.physics_joint_rope_create.anchor_2_y },
            { label: 'maxLength', documentation: i18n.physics_joint_rope_create.maxLength },
            { label: 'collideInstances', documentation: i18n.physics_joint_rope_create.collideInstances }
        ],
        signature: '(inst1, inst2, anchor_1_x, anchor_1_y, anchor_2_x, anchor_2_y, maxLength, collideInstances)'
    },
	physics_joint_set_value: {
        description: '[Function]' + i18n.physics_joint_set_value.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'joint', documentation: i18n.physics_joint_set_value.joint },
            { label: 'field', documentation: i18n.physics_joint_set_value.field },
            { label: 'value', documentation: i18n.physics_joint_set_value.value }
        ],
        signature: '(joint, field, value)'
    },
	physics_joint_weld_create: {
        description: '[Function]' + i18n.physics_joint_weld_create.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'inst1', documentation: i18n.physics_joint_weld_create.inst1 },
            { label: 'inst2', documentation: i18n.physics_joint_weld_create.inst2 },
            { label: 'anchor_x', documentation: i18n.physics_joint_weld_create.anchor_x },
            { label: 'anchor_y', documentation: i18n.physics_joint_weld_create.anchor_y },
            { label: 'ref_angle', documentation: i18n.physics_joint_weld_create.ref_angle },
            { label: 'freq_hz', documentation: i18n.physics_joint_weld_create.freq_hz },
            { label: 'damping_ratio', documentation: i18n.physics_joint_weld_create.damping_ratio },
            { label: 'collideInstances', documentation: i18n.physics_joint_weld_create.collideInstances }
        ],
        signature: '(inst1, inst2, anchor_x, anchor_y, ref_angle, freq_hz, damping_ratio, collideInstances)'
    },
	physics_joint_wheel_create: {
        description: '[Function]' + i18n.physics_joint_wheel_create.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'inst1', documentation: i18n.physics_joint_wheel_create.inst1 },
            { label: 'inst2', documentation: i18n.physics_joint_wheel_create.inst2 },
            { label: 'anchor_x', documentation: i18n.physics_joint_wheel_create.anchor_x },
            { label: 'anchor_y', documentation: i18n.physics_joint_wheel_create.anchor_y },
            { label: 'axis_x', documentation: i18n.physics_joint_wheel_create.axis_x },
            { label: 'axis_y', documentation: i18n.physics_joint_wheel_create.axis_y },
            { label: 'enableMotor', documentation: i18n.physics_joint_wheel_create.enableMotor },
            { label: 'max_motor_torque', documentation: i18n.physics_joint_wheel_create.max_motor_torque },
            { label: 'motor_speed', documentation: i18n.physics_joint_wheel_create.motor_speed },
            { label: 'freq_hz', documentation: i18n.physics_joint_wheel_create.freq_hz },
            { label: 'damping_ratio', documentation: i18n.physics_joint_wheel_create.damping_ratio },
            { label: 'collideInstances', documentation: i18n.physics_joint_wheel_create.collideInstances }
        ],
        signature: '(inst1, inst2, anchor_x, anchor_y, axis_x, axis_y, enableMotor, max_motor_torque, motor_speed, freq_hz, damping_ratio, collideInstances)'
    },
	physics_mass_properties: {
        description: '[Function]' + i18n.physics_mass_properties.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'mass', documentation: i18n.physics_mass_properties.mass },
            { label: 'local_centre_of_mass_x', documentation: i18n.physics_mass_properties.local_centre_of_mass_x },
            { label: 'local_centre_of_mass_y', documentation: i18n.physics_mass_properties.local_centre_of_mass_y },
            { label: 'inertia', documentation: i18n.physics_mass_properties.inertia }
        ],
        signature: '(mass, local_centre_of_mass_x, local_centre_of_mass_y, inertia)'
    },
	physics_particle_count: {
        description: '[Function]' + i18n.physics_particle_count.desc,
        available: datasimple.gms1
    },
	physics_particle_create: {
        description: '[Function]' + i18n.physics_particle_create.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'typeflags', documentation: i18n.physics_particle_create.typeflags },
            { label: 'x', documentation: i18n.physics_particle_create.x },
            { label: 'y', documentation: i18n.physics_particle_create.y },
            { label: 'xv', documentation: i18n.physics_particle_create.xv },
            { label: 'yv', documentation: i18n.physics_particle_create.yv },
            { label: 'col', documentation: i18n.physics_particle_create.col },
            { label: 'alpha', documentation: i18n.physics_particle_create.alpha },
            { label: 'category', documentation: i18n.physics_particle_create.category }
        ],
        signature: '(typeflags, x, y, xv, yv, col, alpha, category)'
    },
	physics_particle_delete: {
        description: '[Function]' + i18n.physics_particle_delete.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'ind', documentation: i18n.physics_particle_delete.ind }
        ],
        signature: '(ind)'
    },
	physics_particle_delete_region_box: {
        description: '[Function]' + i18n.physics_particle_delete_region_box.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'x', documentation: i18n.physics_particle_delete_region_box.x },
            { label: 'y', documentation: i18n.physics_particle_delete_region_box.y },
            { label: 'halfWidth', documentation: i18n.physics_particle_delete_region_box.halfWidth },
            { label: 'halfHeight', documentation: i18n.physics_particle_delete_region_box.halfHeight }
        ],
        signature: '(x, y, halfWidth, halfHeight)'
    },
	physics_particle_delete_region_circle: {
        description: '[Function]' + i18n.physics_particle_delete_region_circle.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'x', documentation: i18n.physics_particle_delete_region_circle.x },
            { label: 'y', documentation: i18n.physics_particle_delete_region_circle.y },
            { label: 'radius', documentation: i18n.physics_particle_delete_region_circle.radius }
        ],
        signature: '(x, y, radius)'
    },
	physics_particle_delete_region_poly: {
        description: '[Function]' + i18n.physics_particle_delete_region_poly.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'pointList', documentation: i18n.physics_particle_delete_region_poly.pointList }
        ],
        signature: '(pointList)'
    },
	physics_particle_draw: {
        description: '[Function]' + i18n.physics_particle_draw.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'typemask', documentation: i18n.physics_particle_draw.typemask },
            { label: 'category', documentation: i18n.physics_particle_draw.category },
            { label: 'sprite', documentation: i18n.physics_particle_draw.sprite },
            { label: 'subimg', documentation: i18n.physics_particle_draw.subimg }
        ],
        signature: '(typemask, category, sprite, subimg)'
    },
	physics_particle_draw_ext: {
        description: '[Function]' + i18n.physics_particle_draw_ext.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'typemask', documentation: i18n.physics_particle_draw_ext.typemask },
            { label: 'category', documentation: i18n.physics_particle_draw_ext.category },
            { label: 'sprite', documentation: i18n.physics_particle_draw_ext.sprite },
            { label: 'subimg', documentation: i18n.physics_particle_draw_ext.subimg },
            { label: 'xscale', documentation: i18n.physics_particle_draw_ext.xscale },
            { label: 'yscale', documentation: i18n.physics_particle_draw_ext.yscale },
            { label: 'angle', documentation: i18n.physics_particle_draw_ext.angle },
            { label: 'col', documentation: i18n.physics_particle_draw_ext.col },
            { label: 'alpha', documentation: i18n.physics_particle_draw_ext.alpha }
        ],
        signature: '(typemask, category, sprite, subimg, xscale, yscale, angle, col, alpha)'
    },
	physics_particle_get_damping: {
        description: '[Function]' + i18n.physics_particle_get_damping.desc,
        available: datasimple.gms1
    },
	physics_particle_get_data: {
        description: '[Function]' + i18n.physics_particle_get_data.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'buffer', documentation: i18n.physics_particle_get_data.buffer },
            { label: 'dataFlags', documentation: i18n.physics_particle_get_data.dataFlags }
        ],
        signature: '(buffer, dataFlags)'
    },
	physics_particle_get_data_particle: {
        description: '[Function]' + i18n.physics_particle_get_data_particle.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'ind', documentation: i18n.physics_particle_get_data_particle.ind },
            { label: 'buffer', documentation: i18n.physics_particle_get_data_particle.buffer },
            { label: 'dataFlags', documentation: i18n.physics_particle_get_data_particle.dataFlags }
        ],
        signature: '(ind, buffer, dataFlags)'
    },
	physics_particle_get_density: {
        description: '[Function]' + i18n.physics_particle_get_density.desc,
        available: datasimple.gms1
    },
	physics_particle_get_gravity_scale: {
        description: '[Function]' + i18n.physics_particle_get_gravity_scale.desc,
        available: datasimple.gms1
    },
	physics_particle_get_group_flags: {
        description: '[Function]' + i18n.physics_particle_get_group_flags.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'group', documentation: i18n.physics_particle_get_group_flags.group }
        ],
        signature: '(group)'
    },
	physics_particle_get_max_count: {
        description: '[Function]' + i18n.physics_particle_get_max_count.desc,
        available: datasimple.gms1
    },
	physics_particle_get_radius: {
        description: '[Function]' + i18n.physics_particle_get_radius.desc,
        available: datasimple.gms1
    },
	physics_particle_group_add_point: {
        description: '[Function]' + i18n.physics_particle_group_add_point.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'x', documentation: i18n.physics_particle_group_add_point.x },
            { label: 'y', documentation: i18n.physics_particle_group_add_point.y }
        ],
        signature: '(x, y)'
    },
	physics_particle_group_begin: {
        description: '[Function]' + i18n.physics_particle_group_begin.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'typeflags', documentation: i18n.physics_particle_group_begin.typeflags },
            { label: 'groupflag', documentation: i18n.physics_particle_group_begin.groupflag },
            { label: 'x', documentation: i18n.physics_particle_group_begin.x },
            { label: 'y', documentation: i18n.physics_particle_group_begin.y },
            { label: 'ang', documentation: i18n.physics_particle_group_begin.ang },
            { label: 'xv', documentation: i18n.physics_particle_group_begin.xv },
            { label: 'yv', documentation: i18n.physics_particle_group_begin.yv },
            { label: 'angVelocity', documentation: i18n.physics_particle_group_begin.angVelocity },
            { label: 'col', documentation: i18n.physics_particle_group_begin.col },
            { label: 'alpha', documentation: i18n.physics_particle_group_begin.alpha },
            { label: 'strength', documentation: i18n.physics_particle_group_begin.strength },
            { label: 'category', documentation: i18n.physics_particle_group_begin.category }
        ],
        signature: '(typeflags, groupflags, x, y, ang, xv, yv, angVelocity, col, alpha, strength, category)'
    },
	physics_particle_group_box: {
        description: '[Function]' + i18n.physics_particle_group_box.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'halfWidth', documentation: i18n.physics_particle_group_box.halfWidth },
            { label: 'halfHeight', documentation: i18n.physics_particle_group_box.halfHeight }
        ],
        signature: '(halfWidth, halfHeight)'
    },
	physics_particle_group_circle: {
        description: '[Function]' + i18n.physics_particle_group_circle.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'radius', documentation: i18n.physics_particle_group_circle.radius }
        ],
        signature: '(radius)'
    },
	physics_particle_group_count: {
        description: '[Function]' + i18n.physics_particle_group_count.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'group', documentation: i18n.physics_particle_group_count.group }
        ],
        signature: '(group)'
    },
	physics_particle_group_delete: {
        description: '[Function]' + i18n.physics_particle_group_delete.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'ind', documentation: i18n.physics_particle_group_delete.ind }
        ],
        signature: '(ind)'
    },
	physics_particle_group_end: {
        description: '[Function]' + i18n.physics_particle_group_end.desc,
        available: datasimple.gms1
    },
	physics_particle_group_get_angle: {
        description: '[Function]' + i18n.physics_particle_group_get_angle.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'group', documentation: i18n.physics_particle_group_get_angle.group }
        ],
        signature: '(group)'
    },
	physics_particle_group_get_ang_vel: {
        description: '[Function]' + i18n.physics_particle_group_get_ang_vel.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'group', documentation: i18n.physics_particle_group_get_ang_vel.group }
        ],
        signature: '(group)'
    },
	physics_particle_group_get_centre_x: {
        description: '[Function]' + i18n.physics_particle_group_get_centre_x.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'group', documentation: i18n.physics_particle_group_get_centre_x.group }
        ],
        signature: '(group)'
    },
	physics_particle_group_get_centre_y: {
        description: '[Function]' + i18n.physics_particle_group_get_centre_y.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'group', documentation: i18n.physics_particle_group_get_centre_y.group }
        ],
        signature: '(group)'
    },
	physics_particle_group_get_data: {
        description: '[Function]' + i18n.physics_particle_group_get_data.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'group', documentation: i18n.physics_particle_group_get_data.group },
            { label: 'buffer', documentation: i18n.physics_particle_group_get_data.buffer },
            { label: 'dataFlags', documentation: i18n.physics_particle_group_get_data.dataFlags }
        ],
        signature: '(group, buffer, dataFlags)'
    },
	physics_particle_group_get_inertia: {
        description: '[Function]' + i18n.physics_particle_group_get_inertia.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'group', documentation: i18n.physics_particle_group_get_inertia.group }
        ],
        signature: '(group)'
    },
	physics_particle_group_get_mass: {
        description: '[Function]' + i18n.physics_particle_group_get_mass.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'group', documentation: i18n.physics_particle_group_get_mass.group }
        ],
        signature: '(group)'
    },
	physics_particle_group_get_vel_x: {
        description: '[Function]' + i18n.physics_particle_group_get_vel_x.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'group', documentation: i18n.physics_particle_group_get_vel_x.group }
        ],
        signature: '(group)'
    },
	physics_particle_group_get_vel_y: {
        description: '[Function]' + i18n.physics_particle_group_get_vel_y.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'group', documentation: i18n.physics_particle_group_get_vel_y.group }
        ],
        signature: '(group)'
    },
	physics_particle_group_get_x: {
        description: '[Function]' + i18n.physics_particle_group_get_x.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'group', documentation: i18n.physics_particle_group_get_x.group }
        ],
        signature: '(group)'
    },
	physics_particle_group_get_y: {
        description: '[Function]' + i18n.physics_particle_group_get_y.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'group', documentation: i18n.physics_particle_group_get_y.group }
        ],
        signature: '(group)'
    },
	physics_particle_group_join: {
        description: '[Function]' + i18n.physics_particle_group_join.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'to', documentation: i18n.physics_particle_group_join.to },
            { label: 'from', documentation: i18n.physics_particle_group_join.from }
        ],
        signature: '(to, from)'
    },
	physics_particle_group_polygon: {
        description: '[Function]' + i18n.physics_particle_group_polygon.desc,
        available: datasimple.gms1
    },
	physics_particle_set_category_flags: {
        description: '[Function]' + i18n.physics_particle_set_category_flags.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'catagory', documentation: i18n.physics_particle_set_category_flags.catagory },
            { label: 'typeflags', documentation: i18n.physics_particle_set_category_flags.typeflags }
        ],
        signature: '(category, typeflags)'
    },
	physics_particle_set_damping: {
        description: '[Function]' + i18n.physics_particle_set_damping.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'damping', documentation: i18n.physics_particle_set_damping.damping }
        ],
        signature: '(damping)'
    },
	physics_particle_set_density: {
        description: '[Function]' + i18n.physics_particle_set_density.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'density', documentation: i18n.physics_particle_set_density.density }
        ],
        signature: '(density)'
    },
	physics_particle_set_flags: {
        description: '[Function]' + i18n.physics_particle_set_flags.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'ind', documentation: i18n.physics_particle_set_flags.ind },
            { label: 'typeflags', documentation: i18n.physics_particle_set_flags.typeflags }
        ],
        signature: '(ind, typeflags)'
    },
	physics_particle_set_gravity_scale: {
        description: '[Function]' + i18n.physics_particle_set_gravity_scale.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'scale', documentation: i18n.physics_particle_set_gravity_scale.scale }
        ],
        signature: '(scale)'
    },
	physics_particle_set_group_flags: {
        description: '[Function]' + i18n.physics_particle_set_group_flags.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'group', documentation: i18n.physics_particle_set_group_flags.group },
            { label: 'groupflags', documentation: i18n.physics_particle_set_group_flags.groupflags }
        ],
        signature: '(group, groupflags)'
    },
	physics_particle_set_max_count: {
        description: '[Function]' + i18n.physics_particle_set_max_count.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'count', documentation: i18n.physics_particle_set_max_count.count }
        ],
        signature: '(count)'
    },
	physics_particle_set_radius: {
        description: '[Function]' + i18n.physics_particle_set_radius.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'radius', documentation: i18n.physics_particle_set_radius.radius }
        ],
        signature: '(radius)'
    },
	physics_pause_enable: {
        description: '[Function]' + i18n.physics_pause_enable.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'pause', documentation: i18n.physics_pause_enable.pause }
        ],
        signature: '(pause)'
    },
	physics_remove_fixture: {
        description: '[Function]' + i18n.physics_remove_fixture.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'inst', documentation: i18n.physics_remove_fixture.inst },
            { label: 'id', documentation: i18n.physics_remove_fixture.id }
        ],
        signature: '(inst, id)'
    },
	physics_set_density: {
        description: '[Function]' + i18n.physics_set_density.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'fixture', documentation: i18n.physics_set_density.fixture },
            { label: 'density', documentation: i18n.physics_set_density.density }
        ],
        signature: '(fixture, density)'
    },
	physics_set_friction: {
        description: '[Function]' + i18n.physics_set_friction.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'fixture', documentation: i18n.physics_set_friction.fixture },
            { label: 'friction', documentation: i18n.physics_set_friction.friction }
        ],
        signature: '(fixture, friction)'
    },
	physics_set_restitution: {
        description: '[Function]' + i18n.physics_set_restitution.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'fixture', documentation: i18n.physics_set_restitution.fixture },
            { label: 'restitution', documentation: i18n.physics_set_restitution.restitution }
        ],
        signature: '(fixture, restitution)'
    },
	physics_test_overlap: {
        description: '[Function]' + i18n.physics_test_overlap.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'x', documentation: i18n.physics_test_overlap.x },
            { label: 'y', documentation: i18n.physics_test_overlap.y },
            { label: 'angle', documentation: i18n.physics_test_overlap.angle },
            { label: 'obj', documentation: i18n.physics_test_overlap.obj }
        ],
        signature: '(x, y, angle, obj)'
    },
	physics_world_create: {
        description: '[Function]' + i18n.physics_world_create.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'PixelToMetreScale', documentation: i18n.physics_world_create.PixelToMetreScale }
        ],
        signature: '(PixelToMetreScale)'
    },
	physics_world_draw_debug: {
        description: '[Function]' + i18n.physics_world_draw_debug.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'draw_flags', documentation: i18n.physics_world_draw_debug.draw_flags }
        ],
        signature: '(draw_flags)'
    },
	physics_world_gravity: {
        description: '[Function]' + i18n.physics_world_gravity.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'gx', documentation: i18n.physics_world_gravity.gx },
            { label: 'gy', documentation: i18n.physics_world_gravity.gy }
        ],
        signature: '(gx, gy)'
    },
	physics_world_update_iterations: {
        description: '[Function]' + i18n.physics_world_update_iterations.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'iterations', documentation: i18n.physics_world_update_iterations.iterations }
        ],
        signature: '(iterations)'
    },
	physics_world_update_speed: {
        description: '[Function]' + i18n.physics_world_update_speed.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'speed', documentation: i18n.physics_world_update_speed.speed }
        ],
        signature: '(speed)'
    },
	place_empty: {
        description: '[Function]' + i18n.place_empty.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x', documentation: i18n.place_empty.x },
            { label: 'y', documentation: i18n.place_empty.y }
        ],
        signature: '(x, y)'
    },
	place_free: {
        description: '[Function]' + i18n.place_free.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x', documentation: i18n.place_free.x },
            { label: 'y', documentation: i18n.place_free.y }
        ],
        signature: '(x, y)'
    },
	place_meeting: {
        description: '[Function]' + i18n.place_meeting.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x', documentation: i18n.place_meeting.x },
            { label: 'y', documentation: i18n.place_meeting.y },
            { label: 'obj', documentation: i18n.place_meeting.obj }
        ],
        signature: '(x, y, obj)'
    },
	place_snapped: {
        description: '[Function]' + i18n.place_snapped.desc,
        available: datasimple.all,
        parameters: [
            { label: 'hsnap', documentation: i18n.place_snapped.hsnap },
            { label: 'vsnap', documentation: i18n.place_snapped.vsnap }
        ],
        signature: '(hsnap, vsnap)'
    },
	point_direction: {
        description: '[Function]' + i18n.point_direction.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x1', documentation: i18n.point_direction.x1 },
            { label: 'y1', documentation: i18n.point_direction.y1 },
            { label: 'x2', documentation: i18n.point_direction.x2 },
            { label: 'y2', documentation: i18n.point_direction.y2 }
        ],
        signature: '(x1, y1, x2, y2)'
    },
	point_distance: {
        description: '[Function]' + i18n.point_distance.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x1', documentation: i18n.point_distance.x1 },
            { label: 'y1', documentation: i18n.point_distance.y1 },
            { label: 'x2', documentation: i18n.point_distance.x2 },
            { label: 'y2', documentation: i18n.point_distance.y2 }
        ],
        signature: '(x1, y1, x2, y2)'
    },
	point_distance_3d: {
        description: '[Function]' + i18n.point_distance_3d.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'x1', documentation: i18n.point_distance_3d.x1 },
            { label: 'y1', documentation: i18n.point_distance_3d.y1 },
            { label: 'z1', documentation: i18n.point_distance_3d.z1 },
            { label: 'x2', documentation: i18n.point_distance_3d.x2 },
            { label: 'y2', documentation: i18n.point_distance_3d.y2 },
            { label: 'z2', documentation: i18n.point_distance_3d.z2 }
        ],
        signature: '(x1, y1, z1, x2, y2, z2)'
    },
	point_in_circle: {
        description: '[Function]' + i18n.point_in_circle.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'px', documentation: i18n.point_in_circle.px },
            { label: 'py', documentation: i18n.point_in_circle.py },
            { label: 'cx', documentation: i18n.point_in_circle.cx },
            { label: 'cy', documentation: i18n.point_in_circle.cy },
            { label: 'rad', documentation: i18n.point_in_circle.rad }
        ],
        signature: '(px, py, cx, cy, rad)'
    },
	point_in_rectangle: {
        description: '[Function]' + i18n.point_in_rectangle.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'px', documentation: i18n.point_in_rectangle.px },
            { label: 'py', documentation: i18n.point_in_rectangle.py },
            { label: 'x1', documentation: i18n.point_in_rectangle.x1 },
            { label: 'y1', documentation: i18n.point_in_rectangle.y1 },
            { label: 'x2', documentation: i18n.point_in_rectangle.x2 },
            { label: 'y2', documentation: i18n.point_in_rectangle.y2 }
        ],
        signature: '(px, py, x1, y1, x2, y2)'
    },
	point_in_triangle: {
        description: '[Function]' + i18n.point_in_triangle.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'px', documentation: i18n.point_in_triangle.px },
            { label: 'py', documentation: i18n.point_in_triangle.py },
            { label: 'x1', documentation: i18n.point_in_triangle.x1 },
            { label: 'y1', documentation: i18n.point_in_triangle.y1 },
            { label: 'z1', documentation: i18n.point_in_triangle.z1 },
            { label: 'x2', documentation: i18n.point_in_triangle.x2 },
            { label: 'y2', documentation: i18n.point_in_triangle.y2 },
            { label: 'z2', documentation: i18n.point_in_triangle.z2 }
        ],
        signature: '(px, py, x1, y1, x2, y2, x3, y3)'
    },
	position_change: {
        description: '[Function]' + i18n.position_change.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x', documentation: i18n.position_change.x },
            { label: 'y', documentation: i18n.position_change.y },
            { label: 'obj', documentation: i18n.position_change.obj },
            { label: 'performevents', documentation: i18n.position_change.performevents }
        ],
        signature: '(x, y, obj, performevents)'
    },
	position_destroy: {
        description: '[Function]' + i18n.position_destroy.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x', documentation: i18n.position_destroy.x },
            { label: 'y', documentation: i18n.position_destroy.y }
        ],
        signature: '(x, y)'
    },
	position_empty: {
        description: '[Function]' + i18n.position_empty.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x', documentation: i18n.position_empty.x },
            { label: 'y', documentation: i18n.position_empty.y }
        ],
        signature: '(x, y)'
    },
	position_meeting: {
        description: '[Function]' + i18n.position_meeting.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x', documentation: i18n.position_meeting.x },
            { label: 'y', documentation: i18n.position_meeting.y },
            { label: 'obj', documentation: i18n.position_meeting.obj }
        ],
        signature: '(x, y, obj)'
    },
	power: {
        description: '[Function]' + i18n.power.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x', documentation: i18n.power.x },
            { label: 'n', documentation: i18n.power.n }
        ],
        signature: '(x, n)'
    },
	ptr: {
        description: '[Function]' + i18n.ptr.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'val', documentation: i18n.ptr.val }
        ],
        signature: '(val)'
    },
	push_cancel_local_notification: {
        description: '[Function]' + i18n.push_cancel_local_notification.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'id', documentation: i18n.push_cancel_local_notification.id }
        ],
        signature: '(id)'
    },
	push_get_first_local_notification: {
        description: '[Function]' + i18n.push_get_first_local_notification.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'ds_map', documentation: i18n.push_get_first_local_notification.ds_map }
        ],
        signature: '(ds_map)'
    },
	push_get_next_local_notification: {
        description: '[Function]' + i18n.push_get_next_local_notification.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'ds_map', documentation: i18n.push_get_next_local_notification.ds_map }
        ],
        signature: '(ds_map)'
    },
	push_local_notification: {
        description: '[Function]' + i18n.push_local_notification.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'fire_time', documentation: i18n.push_local_notification.fire_time },
            { label: 'title', documentation: i18n.push_local_notification.title },
            { label: 'message', documentation: i18n.push_local_notification.message },
            { label: 'data', documentation: i18n.push_local_notification.data }
        ],
        signature: '(fire_time, title, message, data)'
    },
	radtodeg: {
        description: '[Function]' + i18n.radtodeg.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x', documentation: i18n.radtodeg.x }
        ],
        signature: '(x)'
    },
	random: {
        description: '[Function]' + i18n.random.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x', documentation: i18n.random.x }
        ],
        signature: '(x)'
    },
	randomize: {
        description: '[Function]' + i18n.randomize.desc,
        available: datasimple.all
    },
	random_get_seed: {
        description: '[Function]' + i18n.random_get_seed.desc,
        available: datasimple.all
    },
	random_old: {
        description: '[Function]' + i18n.random_old.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x', documentation: i18n.random_old.x }
        ],
        signature: '(x)'
    },
	random_range: {
        description: '[Function]' + i18n.random_range.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x1', documentation: i18n.random_range.x1 },
            { label: 'x2', documentation: i18n.random_range.x2 }
        ],
        signature: '(x1, x2)'
    },
	random_range_old: {
        description: '[Function]' + i18n.random_range_old.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x1', documentation: i18n.random_range_old.x1 },
            { label: 'x2', documentation: i18n.random_range_old.x2 }
        ],
        signature: '(x1, x2)'
    },
	random_set_seed: {
        description: '[Function]' + i18n.random_set_seed.desc,
        available: datasimple.all,
        parameters: [
            { label: 'seed', documentation: i18n.random_set_seed.seed }
        ],
        signature: '(seed)'
    },
	random_use_old_version: {
        description: '[Function]' + i18n.random_use_old_version.desc,
        available: datasimple.all,
        parameters: [
            { label: 'trueFalse', documentation: i18n.random_use_old_version.trueFalse }
        ],
        signature: '(trueFalse)'
    },
	real: {
        description: '[Function]' + i18n.real.desc,
        available: datasimple.all,
        parameters: [
            { label: 'val', documentation: i18n.real.val }
        ],
        signature: '(val)'
    },
	rectangle_in_circle: {
        description: '[Function]' + i18n.rectangle_in_circle.desc,
        available: datasimple.all,
        parameters: [
            { label: 'sx1', documentation: i18n.rectangle_in_circle.sx1 },
            { label: 'sy1', documentation: i18n.rectangle_in_circle.sy1 },
            { label: 'sx2', documentation: i18n.rectangle_in_circle.sx2 },
            { label: 'sy2', documentation: i18n.rectangle_in_circle.sy2 },
            { label: 'cx', documentation: i18n.rectangle_in_circle.cx },
            { label: 'cy', documentation: i18n.rectangle_in_circle.cy },
            { label: 'rad', documentation: i18n.rectangle_in_circle.rad }
        ],
        signature: '(sx1, sy1, sx2, sy2, cx, cy, rad)'
    },
	rectangle_in_rectangle: {
        description: '[Function]' + i18n.rectangle_in_rectangle.desc,
        available: datasimple.all,
        parameters: [
            { label: 'sx1', documentation: i18n.rectangle_in_rectangle.sx1 },
            { label: 'sy1', documentation: i18n.rectangle_in_rectangle.sy1 },
            { label: 'sx2', documentation: i18n.rectangle_in_rectangle.sx2 },
            { label: 'sy2', documentation: i18n.rectangle_in_rectangle.sy2 },
            { label: 'dx1', documentation: i18n.rectangle_in_rectangle.dx1 },
            { label: 'dy1', documentation: i18n.rectangle_in_rectangle.dy1 },
            { label: 'dx2', documentation: i18n.rectangle_in_rectangle.dx2 },
            { label: 'dy2', documentation: i18n.rectangle_in_rectangle.dy2 }
        ],
        signature: '(sx1, sy1, sx2, sy2, dx1, dy1, dx2, dy2)'
    },
	rectangle_in_triangle: {
        description: '[Function]' + i18n.rectangle_in_triangle.desc,
        available: datasimple.all,
        parameters: [
            { label: 'sx1', documentation: i18n.rectangle_in_triangle.sx1 },
            { label: 'sy1', documentation: i18n.rectangle_in_triangle.sy1 },
            { label: 'sx2', documentation: i18n.rectangle_in_triangle.sx2 },
            { label: 'sy2', documentation: i18n.rectangle_in_triangle.sy2 },
            { label: 'x1', documentation: i18n.rectangle_in_triangle.x1 },
            { label: 'y1', documentation: i18n.rectangle_in_triangle.y1 },
            { label: 'x2', documentation: i18n.rectangle_in_triangle.x2 },
            { label: 'y2', documentation: i18n.rectangle_in_triangle.y2 },
            { label: 'x3', documentation: i18n.rectangle_in_triangle.x3 },
            { label: 'y3', documentation: i18n.rectangle_in_triangle.y3 }
        ],
        signature: '(sx1, sy1, sx2, sy2, x1, y1, x2, y2, x3, y3)'
    },
	room_add: {
        description: '[Function]' + i18n.room_add.desc,
        available: datasimple.all
    },
	room_assign: {
        description: '[Function]' + i18n.room_assign.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.room_assign.ind },
            { label: 'source', documentation: i18n.room_assign.source }
        ],
        signature: '(ind, source)'
    },
	room_duplicate: {
        description: '[Function]' + i18n.room_duplicate.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.room_duplicate.ind }
        ],
        signature: '(ind)'
    },
	room_exists: {
        description: '[Function]' + i18n.room_exists.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.room_exists.ind }
        ],
        signature: '(ind)'
    },
	room_get_name: {
        description: '[Function]' + i18n.room_get_name.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.room_get_name.ind }
        ],
        signature: '(ind)'
    },
	room_goto: {
        description: '[Function]' + i18n.room_goto.desc,
        available: datasimple.all,
        parameters: [
            { label: 'numb', documentation: i18n.room_goto.numb }
        ],
        signature: '(numb)'
    },
	room_goto_next: {
        description: '[Function]' + i18n.room_goto_next.desc,
        available: datasimple.all
    },
	room_goto_previous: {
        description: '[Function]' + i18n.room_goto_previous.desc,
        available: datasimple.all
    },
	room_instance_add: {
        description: '[Function]' + i18n.room_instance_add.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.room_instance_add.ind },
            { label: 'x', documentation: i18n.room_instance_add.x },
            { label: 'y', documentation: i18n.room_instance_add.y },
            { label: 'obj', documentation: i18n.room_instance_add.obj }
        ],
        signature: '(ind, x, y, obj)'
    },
	room_instance_clear: {
        description: '[Function]' + i18n.room_instance_clear.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.room_instance_clear.ind }
        ],
        signature: '(ind)'
    },
	room_next: {
        description: '[Function]' + i18n.room_next.desc,
        available: datasimple.all,
        parameters: [
            { label: 'numb', documentation: i18n.room_next.numb }
        ],
        signature: '(numb)'
    },
	room_previous: {
        description: '[Function]' + i18n.room_previous.desc,
        available: datasimple.all,
        parameters: [
            { label: 'numb', documentation: i18n.room_previous.numb }
        ],
        signature: '(numb)'
    },
	room_restart: {
        description: '[Function]' + i18n.room_restart.desc,
        available: datasimple.all
    },
	room_set_background_color: {
        description: '[Function]' + i18n.room_set_background_color.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.room_set_background_color.ind },
            { label: 'col', documentation: i18n.room_set_background_color.col },
            { label: 'show', documentation: i18n.room_set_background_color.show }
        ],
        signature: '(ind, col, show)'
    },
	room_set_background_colour: {
        description: '[Function]' + i18n.room_set_background_colour.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.room_set_background_colour.ind },
            { label: 'col', documentation: i18n.room_set_background_colour.col },
            { label: 'show', documentation: i18n.room_set_background_colour.show }
        ],
        signature: '(ind, col, show)'
    },
	room_set_height: {
        description: '[Function]' + i18n.room_set_height.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.room_set_height.ind },
            { label: 'h', documentation: i18n.room_set_height.h }
        ],
        signature: '(ind, h)'
    },
	room_set_persistent: {
        description: '[Function]' + i18n.room_set_persistent.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.room_set_persistent.ind },
            { label: 'pers', documentation: i18n.room_set_persistent.pers }
        ],
        signature: '(ind, pers)'
    },
	room_set_view_enabled: {
        description: '[Function]' + i18n.room_set_view_enabled.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.room_set_view_enabled.ind },
            { label: 'val', documentation: i18n.room_set_view_enabled.val }
        ],
        signature: '(ind, val)'
    },
	room_set_width: {
        description: '[Function]' + i18n.room_set_width.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.room_set_width.ind },
            { label: 'w', documentation: i18n.room_set_width.w }
        ],
        signature: '(ind, w)'
    },
	round: {
        description: '[Function]' + i18n.round.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x', documentation: i18n.round.x }
        ],
        signature: '(x)'
    },
	screen_save: {
        description: '[Function]' + i18n.screen_save.desc,
        available: datasimple.all,
        parameters: [
            { label: 'fname', documentation: i18n.screen_save.fname }
        ],
        signature: '(fname)'
    },
	screen_save_part: {
        description: '[Function]' + i18n.screen_save_part.desc,
        available: datasimple.all,
        parameters: [
            { label: 'fname', documentation: i18n.screen_save_part.fname },
            { label: 'x', documentation: i18n.screen_save_part.x },
            { label: 'y', documentation: i18n.screen_save_part.y },
            { label: 'w', documentation: i18n.screen_save_part.w },
            { label: 'h', documentation: i18n.screen_save_part.h }
        ],
        signature: '(fname, x, y, w, h)'
    },
	script_execute: {
        description: '[Function]' + i18n.script_execute.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.script_execute.ind },
            { label: 'arg0', documentation: i18n.script_execute.arg0 },
            { label: 'arg1', documentation: i18n.script_execute.arg1 },
            { label: '...', documentation: i18n.script_execute.more }
        ],
        signature: '(ind, arg0, arg1, ...)'
    },
	script_exists: {
        description: '[Function]' + i18n.script_exists.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.script_exists.ind }
        ],
        signature: '(ind)'
    },
	script_get_name: {
        description: '[Function]' + i18n.script_get_name.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.script_get_name.ind }
        ],
        signature: '(ind)'
    },
	sha1_file: {
        description: '[Function]' + i18n.sha1_file.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'fname', documentation: i18n.sha1_file.fname }
        ],
        signature: '(fname)'
    },
	sha1_string_unicode: {
        description: '[Function]' + i18n.sha1_string_unicode.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'string', documentation: i18n.sha1_string_unicode.string }
        ],
        signature: '(string)'
    },
	sha1_string_utf8: {
        description: '[Function]' + i18n.sha1_string_utf8.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'string', documentation: i18n.sha1_string_utf8.string }
        ],
        signature: '(string)'
    },
	shaders_are_supported: {
        description: '[Function]' + i18n.shaders_are_supported.desc,
        available: datasimple.gms1
    },
	shader_enable_corner_id: {
        description: '[Function]' + i18n.shader_enable_corner_id.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'enable', documentation: i18n.shader_enable_corner_id.enable }
        ],
        signature: '(enable)'
    },
	shader_get_sampler_index: {
        description: '[Function]' + i18n.shader_get_sampler_index.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'shader', documentation: i18n.shader_get_sampler_index.shader },
            { label: 'uniform_name', documentation: i18n.shader_get_sampler_index.uniform_name }
        ],
        signature: '(shader, uniform_name)'
    },
	shader_get_uniform: {
        description: '[Function]' + i18n.shader_get_uniform.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'shader', documentation: i18n.shader_get_uniform.shader },
            { label: 'uniform_name', documentation: i18n.shader_get_uniform.uniform_name }
        ],
        signature: '(shader, uniform_name)'
    },
	shader_is_compiled: {
        description: '[Function]' + i18n.shader_is_compiled.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'shader', documentation: i18n.shader_is_compiled.shader }
        ],
        signature: '(shader)'
    },
	shader_reset: {
        description: '[Function]' + i18n.shader_reset.desc,
        available: datasimple.gms1
    },
	shader_set: {
        description: '[Function]' + i18n.shader_set.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'shader', documentation: i18n.shader_set.shader }
        ],
        signature: '(shader)'
    },
	shader_set_uniform_f: {
        description: '[Function]' + i18n.shader_set_uniform_f.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'uniform_id', documentation: i18n.shader_set_uniform_f.uniform_id },
            { label: 'val', documentation: i18n.shader_set_uniform_f.val },
            { label: '....', documentation: i18n.shader_set_uniform_f.more }
        ],
        signature: '(uniform_id, val, ....)'
    },
	shader_set_uniform_f_array: {
        description: '[Function]' + i18n.shader_set_uniform_f_array.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'uniform_id', documentation: i18n.shader_set_uniform_f_array.uniform_id },
            { label: 'array', documentation: i18n.shader_set_uniform_f_array.array }
        ],
        signature: '(uniform_id, array)'
    },
	shader_set_uniform_i: {
        description: '[Function]' + i18n.shader_set_uniform_i.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'uniform_id', documentation: i18n.shader_set_uniform_i.uniform_id },
            { label: 'val', documentation: i18n.shader_set_uniform_i.val },
            { label: '....', documentation: i18n.shader_set_uniform_i.more }
        ],
        signature: '(uniform_id, val, ....)'
    },
	shader_set_uniform_i_array: {
        description: '[Function]' + i18n.shader_set_uniform_i_array.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'uniform_id', documentation: i18n.shader_set_uniform_i_array.uniform_id },
            { label: 'array', documentation: i18n.shader_set_uniform_i_array.array }
        ],
        signature: '(uniform_id, array)'
    },
	shader_set_uniform_matrix: {
        description: '[Function]' + i18n.shader_set_uniform_matrix.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'uniform_id', documentation: i18n.shader_set_uniform_matrix.uniform_id }
        ],
        signature: '(uniform_id)'
    },
	shader_set_uniform_matrix_array: {
        description: '[Function]' + i18n.shader_set_uniform_matrix_array.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'uniform_id', documentation: i18n.shader_set_uniform_matrix_array.uniform_id },
            { label: 'array', documentation: i18n.shader_set_uniform_matrix_array.array }
        ],
        signature: '(uniform_id, array)'
    },
	shop_leave_rating: {
        description: '[Function]' + i18n.shop_leave_rating.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'text_string', documentation: i18n.shop_leave_rating.text_string },
            { label: 'yes_string', documentation: i18n.shop_leave_rating.yes_string },
            { label: 'no_string', documentation: i18n.shop_leave_rating.no_string },
            { label: 'url', documentation: i18n.shop_leave_rating.url }
        ],
        signature: '(text_string, yes_string, no_string, url)'
    },
	show_debug_message: {
        description: '[Function]' + i18n.show_debug_message.desc,
        available: datasimple.all,
        parameters: [
            { label: 'str', documentation: i18n.show_debug_message.str }
        ],
        signature: '(str)'
    },
	show_debug_overlay: {
        description: '[Function]' + i18n.show_debug_overlay.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'bool', documentation: i18n.show_debug_overlay.bool }
        ],
        signature: '(bool)'
    },
	show_error: {
        description: '[Function]' + i18n.show_error.desc,
        available: datasimple.all,
        parameters: [
            { label: 'str', documentation: i18n.show_error.str },
            { label: 'abort', documentation: i18n.show_error.abort }
        ],
        signature: '(str, abort)'
    },
	show_message: {
        description: '[Function]' + i18n.show_message.desc,
        available: datasimple.all,
        parameters: [
            { label: 'str', documentation: i18n.show_message.str }
        ],
        signature: '(str)'
    },
	show_message_async: {
        description: '[Function]' + i18n.show_message_async.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'str', documentation: i18n.show_message_async.str }
        ],
        signature: '(str)'
    },
	show_question: {
        description: '[Function]' + i18n.show_question.desc,
        available: datasimple.all,
        parameters: [
            { label: 'str', documentation: i18n.show_question.str }
        ],
        signature: '(str)'
    },
	show_question_async: {
        description: '[Function]' + i18n.show_question_async.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'str', documentation: i18n.show_question_async.str }
        ],
        signature: '(str)'
    },
	sign: {
        description: '[Function]' + i18n.sign.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'x', documentation: i18n.sign.x }
        ],
        signature: '(x)'
    },
	sin: {
        description: '[Function]' + i18n.sin.desc,
        available: datasimple.all,
        parameters: [
            { label: 'radian_angle', documentation: i18n.sin.radian_angle }
        ],
        signature: '(radian_angle)'
    },
	skeleton_animation_clear: {
        description: '[Function]' + i18n.skeleton_animation_clear.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'track', documentation: i18n.skeleton_animation_clear.track }
        ],
        signature: '(track)'
    },
	skeleton_animation_get: {
        description: '[Function]' + i18n.skeleton_animation_get.desc,
        available: datasimple.gms1
    },
	skeleton_animation_get_duration: {
        description: '[Function]' + i18n.skeleton_animation_get_duration.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'anim_name', documentation: i18n.skeleton_animation_get_duration.anim_name }
        ],
        signature: '(anim_name)'
    },
	skeleton_animation_get_ext: {
        description: '[Function]' + i18n.skeleton_animation_get_ext.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'track', documentation: i18n.skeleton_animation_get_ext.track }
        ],
        signature: '(track)'
    },
	skeleton_animation_get_frames: {
        description: '[Function]' + i18n.skeleton_animation_get_frames.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'anim_name', documentation: i18n.skeleton_animation_get_frames.anim_name }
        ],
        signature: '(anim_name)'
    },
	skeleton_animation_list: {
        description: '[Function]' + i18n.skeleton_animation_list.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'sprite', documentation: i18n.skeleton_animation_list.sprite },
            { label: 'list', documentation: i18n.skeleton_animation_list.list }
        ],
        signature: '(sprite, list)'
    },
	skeleton_animation_mix: {
        description: '[Function]' + i18n.skeleton_animation_mix.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'anim_from', documentation: i18n.skeleton_animation_mix.anim_from },
            { label: 'anim_to', documentation: i18n.skeleton_animation_mix.anim_to },
            { label: 'duration', documentation: i18n.skeleton_animation_mix.duration }
        ],
        signature: '(anim_from, anim_to, duration)'
    },
	skeleton_animation_set: {
        description: '[Function]' + i18n.skeleton_animation_set.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'anim_name', documentation: i18n.skeleton_animation_set.anim_name }
        ],
        signature: '(anim_name)'
    },
	skeleton_animation_set_ext: {
        description: '[Function]' + i18n.skeleton_animation_set_ext.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'anim_name', documentation: i18n.skeleton_animation_set_ext.anim_name },
            { label: 'track', documentation: i18n.skeleton_animation_set_ext.track }
        ],
        signature: '(anim_name, track)'
    },
	skeleton_attachment_create: {
        description: '[Function]' + i18n.skeleton_attachment_create.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'name', documentation: i18n.skeleton_attachment_create.name },
            { label: 'sprite', documentation: i18n.skeleton_attachment_create.sprite },
            { label: 'ind', documentation: i18n.skeleton_attachment_create.ind },
            { label: 'xo', documentation: i18n.skeleton_attachment_create.xo },
            { label: 'yo', documentation: i18n.skeleton_attachment_create.yo },
            { label: 'xs', documentation: i18n.skeleton_attachment_create.xs },
            { label: 'ys', documentation: i18n.skeleton_attachment_create.ys },
            { label: 'ro', documentation: i18n.skeleton_attachment_create.ro }
        ],
        signature: '(name, sprite, ind, xo, yo, xs, ys, ro)'
    },
	skeleton_attachment_get: {
        description: '[Function]' + i18n.skeleton_attachment_get.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'slot', documentation: i18n.skeleton_attachment_get.slot }
        ],
        signature: '(slot)'
    },
	skeleton_attachment_set: {
        description: '[Function]' + i18n.skeleton_attachment_set.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'slot', documentation: i18n.skeleton_attachment_set.slot },
            { label: 'attachment', documentation: i18n.skeleton_attachment_set.attachment }
        ],
        signature: '(slot, attachment)'
    },
	skeleton_bone_data_get: {
        description: '[Function]' + i18n.skeleton_bone_data_get.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'bone', documentation: i18n.skeleton_bone_data_get.bone },
            { label: 'map', documentation: i18n.skeleton_bone_data_get.map }
        ],
        signature: '(bone, map)'
    },
	skeleton_bone_data_set: {
        description: '[Function]' + i18n.skeleton_bone_data_set.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'bone', documentation: i18n.skeleton_bone_data_set.bone },
            { label: 'map', documentation: i18n.skeleton_bone_data_set.map }
        ],
        signature: '(bone, map)'
    },
	skeleton_bone_state_get: {
        description: '[Function]' + i18n.skeleton_bone_state_get.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'bone', documentation: i18n.skeleton_bone_state_get.bone },
            { label: 'map', documentation: i18n.skeleton_bone_state_get.map }
        ],
        signature: '(bone, map)'
    },
	skeleton_bone_state_set: {
        description: '[Function]' + i18n.skeleton_bone_state_set.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'bone', documentation: i18n.skeleton_bone_state_set.bone },
            { label: 'map', documentation: i18n.skeleton_bone_state_set.map }
        ],
        signature: '(bone, map)'
    },
	skeleton_collision_draw_set: {
        description: '[Function]' + i18n.skeleton_collision_draw_set.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'val', documentation: i18n.skeleton_collision_draw_set.val }
        ],
        signature: '(val)'
    },
	skeleton_get_bounds: {
        description: '[Function]' + i18n.skeleton_get_bounds.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'index', documentation: i18n.skeleton_get_bounds.index }
        ],
        signature: '(index)'
    },
	skeleton_get_minmax: {
        description: '[Function]' + i18n.skeleton_get_minmax.desc,
        available: datasimple.gms1
    },
	skeleton_get_num_bounds: {
        description: '[Function]' + i18n.skeleton_get_num_bounds.desc,
        available: datasimple.gms1
    },
	skeleton_skin_get: {
        description: '[Function]' + i18n.skeleton_skin_get.desc,
        available: datasimple.gms1
    },
	skeleton_skin_list: {
        description: '[Function]' + i18n.skeleton_skin_list.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'sprite', documentation: i18n.skeleton_skin_list.sprite },
            { label: 'list', documentation: i18n.skeleton_skin_list.list }
        ],
        signature: '(sprite, list)'
    },
	skeleton_skin_set: {
        description: '[Function]' + i18n.skeleton_skin_set.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'skin_name', documentation: i18n.skeleton_skin_set.skin_name }
        ],
        signature: '(skin_name)'
    },
	skeleton_slot_data: {
        description: '[Function]' + i18n.skeleton_slot_data.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'sprite', documentation: i18n.skeleton_slot_data.sprite },
            { label: 'list', documentation: i18n.skeleton_slot_data.list }
        ],
        signature: '(sprite, list)'
    },
	sprite_add: {
        description: '[Function]' + i18n.sprite_add.desc,
        available: datasimple.all,
        parameters: [
            { label: 'fname', documentation: i18n.sprite_add.fname },
            { label: 'imgnumb', documentation: i18n.sprite_add.imgnumb },
            { label: 'removeback', documentation: i18n.sprite_add.removeback },
            { label: 'smooth', documentation: i18n.sprite_add.smooth },
            { label: 'xorig', documentation: i18n.sprite_add.xorig },
            { label: 'yorig', documentation: i18n.sprite_add.yorig }
        ],
        signature: '(fname, imgnumb, removeback, smooth, xorig, yorig)'
    },
	sprite_add_from_surface: {
        description: '[Function]' + i18n.sprite_add_from_surface.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.sprite_add_from_surface.ind },
            { label: 'id', documentation: i18n.sprite_add_from_surface.id },
            { label: 'x', documentation: i18n.sprite_add_from_surface.x },
            { label: 'y', documentation: i18n.sprite_add_from_surface.y },
            { label: 'w', documentation: i18n.sprite_add_from_surface.w },
            { label: 'h', documentation: i18n.sprite_add_from_surface.h },
            { label: 'removeback', documentation: i18n.sprite_add_from_surface.removeback },
            { label: 'smooth', documentation: i18n.sprite_add_from_surface.smooth }
        ],
        signature: '(ind, id, x, y, w, h, removeback, smooth)'
    },
	sprite_assign: {
        description: '[Function]' + i18n.sprite_assign.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.sprite_assign.ind },
            { label: 'source', documentation: i18n.sprite_assign.source }
        ],
        signature: '(ind, source)'
    },
	sprite_collision_mask: {
        description: '[Function]' + i18n.sprite_collision_mask.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.sprite_collision_mask.ind },
            { label: 'sepmasks', documentation: i18n.sprite_collision_mask.sepmasks },
            { label: 'bboxmode', documentation: i18n.sprite_collision_mask.bboxmode },
            { label: 'bbleft', documentation: i18n.sprite_collision_mask.bbleft },
            { label: 'bbtop', documentation: i18n.sprite_collision_mask.bbtop },
            { label: 'bbright', documentation: i18n.sprite_collision_mask.bbright },
            { label: 'bbbottom', documentation: i18n.sprite_collision_mask.bbbottom },
            { label: 'kind', documentation: i18n.sprite_collision_mask.kind },
            { label: 'tolerance', documentation: i18n.sprite_collision_mask.tolerance }
        ],
        signature: '(ind, sepmasks, bboxmode, bbleft, bbtop, bbright, bbbottom, kind, tolerance)'
    },
	sprite_create_from_surface: {
        description: '[Function]' + i18n.sprite_create_from_surface.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.sprite_create_from_surface.id },
            { label: 'x', documentation: i18n.sprite_create_from_surface.x },
            { label: 'y', documentation: i18n.sprite_create_from_surface.y },
            { label: 'w', documentation: i18n.sprite_create_from_surface.w },
            { label: 'h', documentation: i18n.sprite_create_from_surface.h },
            { label: 'removeback', documentation: i18n.sprite_create_from_surface.removeback },
            { label: 'smooth', documentation: i18n.sprite_create_from_surface.smooth },
            { label: 'xorig', documentation: i18n.sprite_create_from_surface.xorig },
            { label: 'yorig', documentation: i18n.sprite_create_from_surface.yorig }
        ],
        signature: '(id, x, y, w, h, removeback, smooth, xorig, yorig)'
    },
	sprite_delete: {
        description: '[Function]' + i18n.sprite_delete.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.sprite_delete.ind }
        ],
        signature: '(ind)'
    },
	sprite_duplicate: {
        description: '[Function]' + i18n.sprite_duplicate.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.sprite_duplicate.ind }
        ],
        signature: '(ind)'
    },
	sprite_exists: {
        description: '[Function]' + i18n.sprite_exists.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.sprite_exists.ind }
        ],
        signature: '(ind)'
    },
	sprite_flush: {
        description: '[Function]' + i18n.sprite_flush.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.sprite_flush.ind }
        ],
        signature: '(ind)'
    },
	sprite_flush_multi: {
        description: '[Function]' + i18n.sprite_flush_multi.desc,
        available: datasimple.all,
        parameters: [
            { label: 'indarray', documentation: i18n.sprite_flush_multi.indarray }
        ],
        signature: '(indarray)'
    },
	sprite_get_bbox_bottom: {
        description: '[Function]' + i18n.sprite_get_bbox_bottom.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.sprite_get_bbox_bottom.ind }
        ],
        signature: '(ind)'
    },
	sprite_get_bbox_left: {
        description: '[Function]' + i18n.sprite_get_bbox_left.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.sprite_get_bbox_left.ind }
        ],
        signature: '(ind)'
    },
	sprite_get_bbox_right: {
        description: '[Function]' + i18n.sprite_get_bbox_right.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.sprite_get_bbox_right.ind }
        ],
        signature: '(ind)'
    },
	sprite_get_bbox_top: {
        description: '[Function]' + i18n.sprite_get_bbox_top.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.sprite_get_bbox_top.ind }
        ],
        signature: '(ind)'
    },
	sprite_get_height: {
        description: '[Function]' + i18n.sprite_get_height.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.sprite_get_height.ind }
        ],
        signature: '(ind)'
    },
	sprite_get_name: {
        description: '[Function]' + i18n.sprite_get_name.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.sprite_get_name.ind }
        ],
        signature: '(ind)'
    },
	sprite_get_number: {
        description: '[Function]' + i18n.sprite_get_number.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.sprite_get_number.ind }
        ],
        signature: '(ind)'
    },
	sprite_get_texture: {
        description: '[Function]' + i18n.sprite_get_texture.desc,
        available: datasimple.all,
        parameters: [
            { label: 'spr', documentation: i18n.sprite_get_texture.spr },
            { label: 'subimg', documentation: i18n.sprite_get_texture.subimg }
        ],
        signature: '(spr, subimg)'
    },
	sprite_get_tpe: {
        description: '[Function]' + i18n.sprite_get_tpe.desc,
        available: datasimple.all,
        parameters: [
            { label: 'index', documentation: i18n.sprite_get_tpe.index },
            { label: 'subindex', documentation: i18n.sprite_get_tpe.subindex }
        ],
        signature: '(index, subindex)'
    },
	sprite_get_uvs: {
        description: '[Function]' + i18n.sprite_get_uvs.desc,
        available: datasimple.all,
        parameters: [
            { label: 'spr', documentation: i18n.sprite_get_uvs.spr },
            { label: 'subimg', documentation: i18n.sprite_get_uvs.subimg }
        ],
        signature: '(spr, subimg)'
    },
	sprite_get_width: {
        description: '[Function]' + i18n.sprite_get_width.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.sprite_get_width.ind }
        ],
        signature: '(ind)'
    },
	sprite_get_xoffset: {
        description: '[Function]' + i18n.sprite_get_xoffset.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.sprite_get_xoffset.ind }
        ],
        signature: '(ind)'
    },
	sprite_get_yoffset: {
        description: '[Function]' + i18n.sprite_get_yoffset.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.sprite_get_yoffset.ind }
        ],
        signature: '(ind)'
    },
	sprite_merge: {
        description: '[Function]' + i18n.sprite_merge.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind1', documentation: i18n.sprite_merge.ind1 },
            { label: 'ind2', documentation: i18n.sprite_merge.ind2 }
        ],
        signature: '(ind1, ind2)'
    },
	sprite_prefetch: {
        description: '[Function]' + i18n.sprite_prefetch.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.sprite_prefetch.ind }
        ],
        signature: '(ind)'
    },
	sprite_prefetch_multi: {
        description: '[Function]' + i18n.sprite_prefetch_multi.desc,
        available: datasimple.all,
        parameters: [
            { label: 'indarray', documentation: i18n.sprite_prefetch_multi.indarray }
        ],
        signature: '(indarray)'
    },
	sprite_replace: {
        description: '[Function]' + i18n.sprite_replace.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.sprite_replace.ind },
            { label: 'fname', documentation: i18n.sprite_replace.fname },
            { label: 'imgnumb', documentation: i18n.sprite_replace.imgnumb },
            { label: 'removeback', documentation: i18n.sprite_replace.removeback },
            { label: 'smooth', documentation: i18n.sprite_replace.smooth },
            { label: 'xorig', documentation: i18n.sprite_replace.xorig },
            { label: 'yorig', documentation: i18n.sprite_replace.yorig }
        ],
        signature: '(ind, fname, imgnumb, removeback, smooth, xorig, yorig)'
    },
	sprite_save: {
        description: '[Function]' + i18n.sprite_save.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.sprite_save.ind },
            { label: 'subimg', documentation: i18n.sprite_save.subimg },
            { label: 'fname', documentation: i18n.sprite_save.fname }
        ],
        signature: '(ind, subimg, fname)'
    },
	sprite_save_strip: {
        description: '[Function]' + i18n.sprite_save_strip.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.sprite_save_strip.ind },
            { label: 'fname', documentation: i18n.sprite_save_strip.fname }
        ],
        signature: '(ind, fname)'
    },
	sprite_set_alpha_from_sprite: {
        description: '[Function]' + i18n.sprite_set_alpha_from_sprite.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.sprite_set_alpha_from_sprite.ind },
            { label: 'spr', documentation: i18n.sprite_set_alpha_from_sprite.spr }
        ],
        signature: '(ind, spr)'
    },
	sprite_set_cache_size: {
        description: '[Function]' + i18n.sprite_set_cache_size.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.sprite_set_cache_size.ind },
            { label: 'max', documentation: i18n.sprite_set_cache_size.max }
        ],
        signature: '(ind, max)'
    },
	sprite_set_cache_size_ext: {
        description: '[Function]' + i18n.sprite_set_cache_size_ext.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.sprite_set_cache_size_ext.ind },
            { label: 'image', documentation: i18n.sprite_set_cache_size_ext.image },
            { label: 'max', documentation: i18n.sprite_set_cache_size_ext.max }
        ],
        signature: '(ind, image, max)'
    },
	sprite_set_offset: {
        description: '[Function]' + i18n.sprite_set_offset.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.sprite_set_offset.ind },
            { label: 'xoff', documentation: i18n.sprite_set_offset.xoff },
            { label: 'yoff', documentation: i18n.sprite_set_offset.yoff }
        ],
        signature: '(ind, xoff, yoff)'
    },
	sqr: {
        description: '[Function]' + i18n.sqr.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x', documentation: i18n.sqr.x }
        ],
        signature: '(x)'
    },
	sqrt: {
        description: '[Function]' + i18n.sqrt.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x', documentation: i18n.sqrt.x }
        ],
        signature: '(x)'
    },
	steam_activate_overlay: {
        description: '[Function]' + i18n.steam_activate_overlay.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'overlayIndex', documentation: i18n.steam_activate_overlay.steam_activate_overlay }
        ],
        signature: '(overlayIndex)'
    },
	steam_activate_overlay_browser: {
        description: '[Function]' + i18n.steam_activate_overlay_browser.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'url', documentation: i18n.steam_activate_overlay_browser.url }
        ],
        signature: '(url)'
    },
	steam_activate_overlay_store: {
        description: '[Function]' + i18n.steam_activate_overlay_store.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'app_id', documentation: i18n.steam_activate_overlay_store.app_id }
        ],
        signature: '(app_id)'
    },
	steam_activate_overlay_user: {
        description: '[Function]' + i18n.steam_activate_overlay_user.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'dialog_name', documentation: i18n.steam_activate_overlay_user.dialog_name },
            { label: 'steamid', documentation: i18n.steam_activate_overlay_user.steamid }
        ],
        signature: '(dialog_name, steamid)'
    },
	steam_available_languages: {
        description: '[Function]' + i18n.steam_available_languages.desc,
        available: datasimple.gms1
    },
	steam_clear_achievement: {
        description: '[Function]' + i18n.steam_clear_achievement.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'ach_name', documentation: i18n.steam_clear_achievement.ach_name }
        ],
        signature: '(ach_name)'
    },
	steam_create_leaderboard: {
        description: '[Function]' + i18n.steam_create_leaderboard.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'lb_name', documentation: i18n.steam_create_leaderboard.lb_name },
            { label: 'sort_method', documentation: i18n.steam_create_leaderboard.sort_method },
            { label: 'display_type', documentation: i18n.steam_create_leaderboard.display_type }
        ],
        signature: '(lb_name, sort_method, display_type)'
    },
	steam_current_game_language: {
        description: '[Function]' + i18n.steam_current_game_language.desc,
        available: datasimple.gms1
    },
	steam_download_friends_scores: {
        description: '[Function]' + i18n.steam_download_friends_scores.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'lb_name', documentation: i18n.steam_download_friends_scores.lb_name }
        ],
        signature: '(lb_name)'
    },
	steam_download_scores: {
        description: '[Function]' + i18n.steam_download_scores.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'lb_name', documentation: i18n.steam_download_scores.lb_name },
            { label: 'start_idx', documentation: i18n.steam_download_scores.start_idx },
            { label: 'end_idx', documentation: i18n.steam_download_scores.end_idx }
        ],
        signature: '(lb_name, start_idx, end_idx)'
    },
	steam_download_scores_around_user: {
        description: '[Function]' + i18n.steam_download_scores_around_user.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'lb_name', documentation: i18n.steam_download_scores_around_user.lb_name },
            { label: 'range_start', documentation: i18n.steam_download_scores_around_user.range_start },
            { label: 'range_end', documentation: i18n.steam_download_scores_around_user.range_end }
        ],
        signature: '(lb_name, range_start, range_end)'
    },
	steam_file_delete: {
        description: '[Function]' + i18n.steam_file_delete.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'filename', documentation: i18n.steam_file_delete.filename }
        ],
        signature: '(filename)'
    },
	steam_file_exists: {
        description: '[Function]' + i18n.steam_file_exists.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'filename', documentation: i18n.steam_file_exists.filename }
        ],
        signature: '(filename)'
    },
	steam_file_persisted: {
        description: '[Function]' + i18n.steam_file_persisted.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'filename', documentation: i18n.steam_file_persisted.filename }
        ],
        signature: '(filename)'
    },
	steam_file_read: {
        description: '[Function]' + i18n.steam_file_read.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'filename', documentation: i18n.steam_file_read.filename }
        ],
        signature: '(filename)'
    },
	steam_file_share: {
        description: '[Function]' + i18n.steam_file_share.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'filename', documentation: i18n.steam_file_share.filename }
        ],
        signature: '(filename)'
    },
	steam_file_size: {
        description: '[Function]' + i18n.steam_file_size.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'filename', documentation: i18n.steam_file_size.filename }
        ],
        signature: '(filename)'
    },
	steam_file_write: {
        description: '[Function]' + i18n.steam_file_write.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'steam_filename', documentation: i18n.steam_file_write.steam_filename },
            { label: 'data', documentation: i18n.steam_file_write.data },
            { label: 'size', documentation: i18n.steam_file_write.size }
        ],
        signature: '(steam_filename, data, size)'
    },
	steam_file_write_file: {
        description: '[Function]' + i18n.steam_file_write_file.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'steam_filename', documentation: i18n.steam_file_write_file.steam_filename },
            { label: 'local_filename', documentation: i18n.steam_file_write_file.local_filename }
        ],
        signature: '(steam_filename, local_filename)'
    },
	steam_get_achievement: {
        description: '[Function]' + i18n.steam_get_achievement.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'ach_name', documentation: i18n.steam_get_achievement.ach_name }
        ],
        signature: '(ach_name)'
    },
	steam_get_app_id: {
        description: '[Function]' + i18n.steam_get_app_id.desc,
        available: datasimple.gms1
    },
	steam_get_persona_name: {
        description: '[Function]' + i18n.steam_get_persona_name.desc,
        available: datasimple.gms1
    },
	steam_get_quota_free: {
        description: '[Function]' + i18n.steam_get_quota_free.desc,
        available: datasimple.gms1
    },
	steam_get_quota_total: {
        description: '[Function]' + i18n.steam_get_quota_total.desc,
        available: datasimple.gms1
    },
	steam_get_stat_avg_rate: {
        description: '[Function]' + i18n.steam_get_stat_avg_rate.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'stat_name', documentation: i18n.steam_get_stat_avg_rate.stat_name }
        ],
        signature: '(stat_name)'
    },
	steam_get_stat_float: {
        description: '[Function]' + i18n.steam_get_stat_float.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'stat_name', documentation: i18n.steam_get_stat_float.stat_name }
        ],
        signature: '(stat_name)'
    },
	steam_get_stat_int: {
        description: '[Function]' + i18n.steam_get_stat_int.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'stat_name', documentation: i18n.steam_get_stat_int.stat_name }
        ],
        signature: '(stat_name)'
    },
	steam_get_user_account_id: {
        description: '[Function]' + i18n.steam_get_user_account_id.desc,
        available: datasimple.gms1
    },
	steam_get_user_persona_name: {
        description: '[Function]' + i18n.steam_get_user_persona_name.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'steam_id', documentation: i18n.steam_get_user_persona_name.steam_id }
        ],
        signature: '(steam_id)'
    },
	steam_get_user_steam_id: {
        description: '[Function]' + i18n.steam_get_user_steam_id.desc,
        available: datasimple.gms1
    },
	steam_initialised: {
        description: '[Function]' + i18n.steam_initialised.desc,
        available: datasimple.gms1
    },
	steam_is_cloud_enabled_for_account: {
        description: '[Function]' + i18n.steam_is_cloud_enabled_for_account.desc,
        available: datasimple.gms1
    },
	steam_is_cloud_enabled_for_app: {
        description: '[Function]' + i18n.steam_is_cloud_enabled_for_app.desc,
        available: datasimple.gms1
    },
	steam_is_overlay_activated: {
        description: '[Function]' + i18n.steam_is_overlay_activated.desc,
        available: datasimple.gms1
    },
	steam_is_overlay_enabled: {
        description: '[Function]' + i18n.steam_is_overlay_enabled.desc,
        available: datasimple.gms1
    },
	steam_is_screenshot_requested: {
        description: '[Function]' + i18n.steam_is_screenshot_requested.desc,
        available: datasimple.gms1
    },
	steam_is_user_logged_on: {
        description: '[Function]' + i18n.steam_is_user_logged_on.desc,
        available: datasimple.gms1
    },
	steam_publish_workshop_file: {
        description: '[Function]' + i18n.steam_publish_workshop_file.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'filename', documentation: i18n.steam_publish_workshop_file.filename },
            { label: 'previewImage', documentation: i18n.steam_publish_workshop_file.previewImage },
            { label: 'title', documentation: i18n.steam_publish_workshop_file.title },
            { label: 'description', documentation: i18n.steam_publish_workshop_file.description }
        ],
        signature: '(filename, previewImage, title, description)'
    },
	steam_reset_all_stats: {
        description: '[Function]' + i18n.steam_reset_all_stats.desc,
        available: datasimple.gms1
    },
	steam_reset_all_stats_achievements: {
        description: '[Function]' + i18n.steam_reset_all_stats_achievements.desc,
        available: datasimple.gms1
    },
	steam_send_screenshot: {
        description: '[Function]' + i18n.steam_send_screenshot.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'filename', documentation: i18n.steam_send_screenshot.filename },
            { label: 'width', documentation: i18n.steam_send_screenshot.width },
            { label: 'height', documentation: i18n.steam_send_screenshot.height }
        ],
        signature: '(filename, width, height)'
    },
	steam_set_achievement: {
        description: '[Function]' + i18n.steam_set_achievement.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'ach_name', documentation: i18n.steam_set_achievement.ach_name }
        ],
        signature: '(ach_name)'
    },
	steam_set_stat_avg_rate: {
        description: '[Function]' + i18n.steam_set_stat_avg_rate.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'stat_name', documentation: i18n.steam_set_stat_avg_rate.stat_name },
            { label: 'session_count', documentation: i18n.steam_set_stat_avg_rate.session_count },
            { label: 'session_length', documentation: i18n.steam_set_stat_avg_rate.session_length }
        ],
        signature: '(stat_name, session_count, session_length)'
    },
	steam_set_stat_float: {
        description: '[Function]' + i18n.steam_set_stat_float.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'stat_name', documentation: i18n.steam_set_stat_float.stat_name },
            { label: 'value', documentation: i18n.steam_set_stat_float.value }
        ],
        signature: '(stat_name, value)'
    },
	steam_set_stat_int: {
        description: '[Function]' + i18n.steam_set_stat_int.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'stat_name', documentation: i18n.steam_set_stat_int.stat_name },
            { label: 'value', documentation: i18n.steam_set_stat_int.value }
        ],
        signature: '(stat_name, value)'
    },
	steam_stats_ready: {
        description: '[Function]' + i18n.steam_stats_ready.desc,
        available: datasimple.gms1
    },
	steam_ugc_create_item: {
        description: '[Function]' + i18n.steam_ugc_create_item.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'consumer_app_id', documentation: i18n.steam_ugc_create_item.consumer_app_id },
            { label: 'file_type', documentation: i18n.steam_ugc_create_item.file_type }
        ],
        signature: '(consumer_app_id, file_type)'
    },
	steam_ugc_create_query_all: {
        description: '[Function]' + i18n.steam_ugc_create_query_all.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'query_type', documentation: i18n.steam_ugc_create_query_all.query_type },
            { label: 'match_type', documentation: i18n.steam_ugc_create_query_all.match_type },
            { label: 'page', documentation: i18n.steam_ugc_create_query_all.page }
        ],
        signature: '(query_type, match_type, page)'
    },
	steam_ugc_create_query_all_ex: {
        description: '[Function]' + i18n.steam_ugc_create_query_all_ex.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'query_type', documentation: i18n.steam_ugc_create_query_all_ex.query_type },
            { label: 'match_type', documentation: i18n.steam_ugc_create_query_all_ex.match_type },
            { label: 'page', documentation: i18n.steam_ugc_create_query_all_ex.page },
            { label: 'creator_app_id', documentation: i18n.steam_ugc_create_query_all_ex.creator_app_id },
            { label: 'consumer_app_id', documentation: i18n.steam_ugc_create_query_all_ex.consumer_app_id }
        ],
        signature: '(query_type, match_type, page, creator_app_id, consumer_app_id)'
    },
	steam_ugc_create_query_user: {
        description: '[Function]' + i18n.steam_ugc_create_query_user.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'list_type', documentation: i18n.steam_ugc_create_query_user.list_type },
            { label: 'match_type', documentation: i18n.steam_ugc_create_query_user.match_type },
            { label: 'sort_order', documentation: i18n.steam_ugc_create_query_user.sort_order },
            { label: 'page', documentation: i18n.steam_ugc_create_query_user.page }
        ],
        signature: '(list_type, match_type, sort_order, page)'
    },
	steam_ugc_create_query_user_ex: {
        description: '[Function]' + i18n.steam_ugc_create_query_user_ex.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'list_type', documentation: i18n.steam_ugc_create_query_user_ex.list_type },
            { label: 'match_type', documentation: i18n.steam_ugc_create_query_user_ex.match_type },
            { label: 'sort_order', documentation: i18n.steam_ugc_create_query_user_ex.sort_order },
            { label: 'page', documentation: i18n.steam_ugc_create_query_user_ex.page },
            { label: 'account_id', documentation: i18n.steam_ugc_create_query_user_ex.account_id },
            { label: 'creator_app_id', documentation: i18n.steam_ugc_create_query_user_ex.creator_app_id },
            { label: 'consumer_app_id', documentation: i18n.steam_ugc_create_query_user_ex.consumer_app_id }
        ],
        signature: '(list_type, match_type, sort_order, page, account_id, creator_app_id, consumer_app_id)'
    },
	steam_ugc_download: {
        description: '[Function]' + i18n.steam_ugc_download.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'ugc_handle', documentation: i18n.steam_ugc_download.ugc_handle },
            { label: 'dest_filename', documentation: i18n.steam_ugc_download.dest_filename }
        ],
        signature: '(ugc_handle, dest_filename)'
    },
	steam_ugc_get_item_install_info: {
        description: '[Function]' + i18n.steam_ugc_get_item_install_info.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'published_file_id', documentation: i18n.steam_ugc_get_item_install_info.published_file_id },
            { label: 'info_map', documentation: i18n.steam_ugc_get_item_install_info.info_map }
        ],
        signature: '(published_file_id, info_map)'
    },
	steam_ugc_get_item_update_info: {
        description: '[Function]' + i18n.steam_ugc_get_item_update_info.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'published_file_id', documentation: i18n.steam_ugc_get_item_update_info.published_file_id },
            { label: 'info_map', documentation: i18n.steam_ugc_get_item_update_info.info_map }
        ],
        signature: '(published_file_id, info_map)'
    },
	steam_ugc_get_item_update_progress: {
        description: '[Function]' + i18n.steam_ugc_get_item_update_progress.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'ugc_update_handle', documentation: i18n.steam_ugc_get_item_update_progress.ugc_update_handle },
            { label: 'info_map', documentation: i18n.steam_ugc_get_item_update_progress.info_map }
        ],
        signature: '(ugc_update_handle, info_map)'
    },
	steam_ugc_get_subscribed_items: {
        description: '[Function]' + i18n.steam_ugc_get_subscribed_items.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'info_map', documentation: i18n.steam_ugc_get_subscribed_items.info_map }
        ],
        signature: '(item_list)'
    },
	steam_ugc_num_subscribed_items: {
        description: '[Function]' + i18n.steam_ugc_num_subscribed_items.desc,
        available: datasimple.gms1
    },
	steam_ugc_query_add_excluded_tag: {
        description: '[Function]' + i18n.steam_ugc_query_add_excluded_tag.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'ugc_query_handle', documentation: i18n.steam_ugc_query_add_excluded_tag.ugc_query_handle },
            { label: 'tag_name', documentation: i18n.steam_ugc_query_add_excluded_tag.tag_name }
        ],
        signature: '(ugc_query_handle, tag_name)'
    },
	steam_ugc_query_add_required_tag: {
        description: '[Function]' + i18n.steam_ugc_query_add_required_tag.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'ugc_query_handle', documentation: i18n.steam_ugc_query_add_required_tag.ugc_query_handle },
            { label: 'tag_name', documentation: i18n.steam_ugc_query_add_required_tag.tag_name }
        ],
        signature: '(ugc_query_handle, tag_name)'
    },
	steam_ugc_query_set_allow_cached_response: {
        description: '[Function]' + i18n.steam_ugc_query_set_allow_cached_response.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'ugc_query_handle', documentation: i18n.steam_ugc_query_set_allow_cached_response.ugc_query_handle },
            { label: 'max_age_seconds', documentation: i18n.steam_ugc_query_set_allow_cached_response.max_age_seconds }
        ],
        signature: '(ugc_query_handle, max_age_seconds)'
    },
	steam_ugc_query_set_cloud_filename_filter: {
        description: '[Function]' + i18n.steam_ugc_query_set_cloud_filename_filter.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'ugc_query_handle', documentation: i18n.steam_ugc_query_set_cloud_filename_filter.ugc_query_handle },
            { label: 'match_cloud_filename', documentation: i18n.steam_ugc_query_set_cloud_filename_filter.match_cloud_filename }
        ],
        signature: '(ugc_query_handle, match_cloud_filename)'
    },
	steam_ugc_query_set_match_any_tag: {
        description: '[Function]' + i18n.steam_ugc_query_set_match_any_tag.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'ugc_query_handle', documentation: i18n.steam_ugc_query_set_match_any_tag.ugc_query_handle },
            { label: 'match_any_tag', documentation: i18n.steam_ugc_query_set_match_any_tag.match_any_tag }
        ],
        signature: '(ugc_query_handle, match_any_tag)'
    },
	steam_ugc_query_set_ranked_by_trend_days: {
        description: '[Function]' + i18n.steam_ugc_query_set_ranked_by_trend_days.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'ugc_query_handle', documentation: i18n.steam_ugc_query_set_ranked_by_trend_days.ugc_query_handle },
            { label: 'days', documentation: i18n.steam_ugc_query_set_ranked_by_trend_days.days }
        ],
        signature: '(ugc_query_handle, days)'
    },
	steam_ugc_query_set_return_long_description: {
        description: '[Function]' + i18n.steam_ugc_query_set_return_long_description.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'ugc_query_handle', documentation: i18n.steam_ugc_query_set_return_long_description.ugc_query_handle },
            { label: 'return_long_desc', documentation: i18n.steam_ugc_query_set_return_long_description.return_long_desc }
        ],
        signature: '(ugc_query_handle, return_long_desc)'
    },
	steam_ugc_query_set_return_total_only: {
        description: '[Function]' + i18n.steam_ugc_query_set_return_total_only.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'ugc_query_handle', documentation: i18n.steam_ugc_query_set_return_total_only.ugc_query_handle },
            { label: 'return_total_only', documentation: i18n.steam_ugc_query_set_return_total_only.return_total_only }
        ],
        signature: '(ugc_query_handle, return_total_only)'
    },
	steam_ugc_query_set_search_text: {
        description: '[Function]' + i18n.steam_ugc_query_set_search_text.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'ugc_query_handle', documentation: i18n.steam_ugc_query_set_search_text.ugc_query_handle },
            { label: 'search_text', documentation: i18n.steam_ugc_query_set_search_text.search_text }
        ],
        signature: '(ugc_query_handle, search_text)'
    },
	steam_ugc_request_item_details: {
        description: '[Function]' + i18n.steam_ugc_request_item_details.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'published_file_id', documentation: i18n.steam_ugc_request_item_details.published_file_id },
            { label: 'max_age_seconds', documentation: i18n.steam_ugc_request_item_details.max_age_seconds }
        ],
        signature: '(published_file_id, max_age_seconds)'
    },
	steam_ugc_send_query: {
        description: '[Function]' + i18n.steam_ugc_send_query.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'ugc_query_handle', documentation: i18n.steam_ugc_send_query.ugc_query_handle }
        ],
        signature: '(ugc_query_handle)'
    },
	steam_ugc_set_item_content: {
        description: '[Function]' + i18n.steam_ugc_set_item_content.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'ugc_update_handle', documentation: i18n.steam_ugc_set_item_content.ugc_update_handle },
            { label: 'directory', documentation: i18n.steam_ugc_set_item_content.directory }
        ],
        signature: '(ugc_update_handle, directory)'
    },
	steam_ugc_set_item_description: {
        description: '[Function]' + i18n.steam_ugc_set_item_description.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'ugc_update_handle', documentation: i18n.steam_ugc_set_item_description.ugc_update_handle },
            { label: 'description', documentation: i18n.steam_ugc_set_item_description.description }
        ],
        signature: '(ugc_update_handle, description)'
    },
	steam_ugc_set_item_preview: {
        description: '[Function]' + i18n.steam_ugc_set_item_preview.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'ugc_update_handle', documentation: i18n.steam_ugc_set_item_preview.ugc_update_handle },
            { label: 'image_path', documentation: i18n.steam_ugc_set_item_preview.image_path }
        ],
        signature: '(ugc_update_handle, image_path)'
    },
	steam_ugc_set_item_tags: {
        description: '[Function]' + i18n.steam_ugc_set_item_tags.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'ugc_update_handle', documentation: i18n.steam_ugc_set_item_tags.ugc_update_handle },
            { label: 'tag_array', documentation: i18n.steam_ugc_set_item_tags.tag_array }
        ],
        signature: '(ugc_update_handle, tag_array)'
    },
	steam_ugc_set_item_title: {
        description: '[Function]' + i18n.steam_ugc_set_item_title.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'ugc_update_handle', documentation: i18n.steam_ugc_set_item_title.ugc_update_handle },
            { label: 'title', documentation: i18n.steam_ugc_set_item_title.title }
        ],
        signature: '(ugc_update_handle, title)'
    },
	steam_ugc_set_item_visibility: {
        description: '[Function]' + i18n.steam_ugc_set_item_visibility.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'ugc_update_handle', documentation: i18n.steam_ugc_set_item_visibility.ugc_update_handle },
            { label: 'visibility', documentation: i18n.steam_ugc_set_item_visibility.visibility }
        ],
        signature: '(ugc_update_handle, visibility)'
    },
	steam_ugc_start_item_update: {
        description: '[Function]' + i18n.steam_ugc_start_item_update.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'consumer_app_id', documentation: i18n.steam_ugc_start_item_update.consumer_app_id },
            { label: 'published_file_id', documentation: i18n.steam_ugc_start_item_update.published_file_id }
        ],
        signature: '(consumer_app_id, published_file_id)'
    },
	steam_ugc_submit_item_update: {
        description: '[Function]' + i18n.steam_ugc_submit_item_update.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'ugc_update_handle', documentation: i18n.steam_ugc_submit_item_update.ugc_update_handle },
            { label: 'change_note', documentation: i18n.steam_ugc_submit_item_update.change_note }
        ],
        signature: '(ugc_update_handle, change_note)'
    },
	steam_ugc_subscribe_item: {
        description: '[Function]' + i18n.steam_ugc_subscribe_item.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'published_file_id', documentation: i18n.steam_ugc_subscribe_item.published_file_id }
        ],
        signature: '(published_file_id)'
    },
	steam_ugc_unsubscribe_item: {
        description: '[Function]' + i18n.steam_ugc_unsubscribe_item.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'published_file_id', documentation: i18n.steam_ugc_unsubscribe_item.published_file_id }
        ],
        signature: '(published_file_id)'
    },
	steam_upload_score: {
        description: '[Function]' + i18n.steam_upload_score.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'lb_name', documentation: i18n.steam_upload_score.lb_name },
            { label: 'score', documentation: i18n.steam_upload_score.score }
        ],
        signature: '(lb_name, score)'
    },
	steam_upload_score_buffer: {
        description: '[Function]' + i18n.steam_upload_score_buffer.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'lb_name', documentation: i18n.steam_upload_score_buffer.lb_name },
            { label: 'score', documentation: i18n.steam_upload_score_buffer.score },
            { label: 'buffer_id', documentation: i18n.steam_upload_score_buffer.buffer_id }
        ],
        signature: '(lb_name, score, buffer_id)'
    },
	steam_upload_score_buffer_ext: {
        description: '[Function]' + i18n.steam_upload_score_buffer_ext.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'lb_name', documentation: i18n.steam_upload_score_buffer_ext.lb_name },
            { label: 'score', documentation: i18n.steam_upload_score_buffer_ext.score },
            { label: 'buffer_id', documentation: i18n.steam_upload_score_buffer_ext.buffer_id },
            { label: 'forceupdate', documentation: i18n.steam_upload_score_buffer_ext.forceupdate }
        ],
        signature: '(lb_name, score, buffer_id, forceupdate)'
    },
	steam_upload_score_ext: {
        description: '[Function]' + i18n.steam_upload_score_ext.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'lb_name', documentation: i18n.steam_upload_score_ext.lb_name },
            { label: 'score', documentation: i18n.steam_upload_score_ext.score },
            { label: 'forceupdate', documentation: i18n.steam_upload_score_ext.forceupdate }
        ],
        signature: '(lb_name, score, forceupdate)'
    },
	steam_user_installed_dlc: {
        description: '[Function]' + i18n.steam_user_installed_dlc.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'dlc_id', documentation: i18n.steam_user_installed_dlc.dlc_id }
        ],
        signature: '(dlc_id)'
    },
	steam_user_owns_dlc: {
        description: '[Function]' + i18n.steam_user_owns_dlc.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'dlc_id', documentation: i18n.steam_user_owns_dlc.dlc_id }
        ],
        signature: '(dlc_id)'
    },
	string: {
        description: '[Function]' + i18n.string.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'val', documentation: i18n.string.val }
        ],
        signature: '(val)'
    },
	string_byte_at: {
        description: '[Function]' + i18n.string_byte_at.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'str', documentation: i18n.string_byte_at.str },
            { label: 'index', documentation: i18n.string_byte_at.index }
        ],
        signature: '(str, index)'
    },
	string_byte_length: {
        description: '[Function]' + i18n.string_byte_length.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'str', documentation: i18n.string_byte_length.str }
        ],
        signature: '(str)'
    },
	string_char_at: {
        description: '[Function]' + i18n.string_char_at.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'str', documentation: i18n.string_char_at.str },
            { label: 'index', documentation: i18n.string_char_at.index }
        ],
        signature: '(str, index)'
    },
	string_copy: {
        description: '[Function]' + i18n.string_copy.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'str', documentation: i18n.string_copy.str },
            { label: 'index', documentation: i18n.string_copy.index },
            { label: 'count', documentation: i18n.string_copy.count }
        ],
        signature: '(str, index, count)'
    },
	string_count: {
        description: '[Function]' + i18n.string_count.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'substr', documentation: i18n.string_count.substr },
            { label: 'str', documentation: i18n.string_count.str }
        ],
        signature: '(substr, str)'
    },
	string_delete: {
        description: '[Function]' + i18n.string_delete.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'str', documentation: i18n.string_delete.str },
            { label: 'index', documentation: i18n.string_delete.index },
            { label: 'count', documentation: i18n.string_delete.count }
        ],
        signature: '(str, index, count)'
    },
	string_digits: {
        description: '[Function]' + i18n.string_digits.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'str', documentation: i18n.string_digits.str }
        ],
        signature: '(str)'
    },
	string_format: {
        description: '[Function]' + i18n.string_format.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'val', documentation: i18n.string_format.val },
            { label: 'total', documentation: i18n.string_format.total },
            { label: 'dec', documentation: i18n.string_format.dec }
        ],
        signature: '(val, total, dec)'
    },
	string_height: {
        description: '[Function]' + i18n.string_height.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'string', documentation: i18n.string_height.string }
        ],
        signature: '(string)'
    },
	string_height_ext: {
        description: '[Function]' + i18n.string_height_ext.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'string', documentation: i18n.string_height_ext.string },
            { label: 'sep', documentation: i18n.string_height_ext.sep },
            { label: 'w', documentation: i18n.string_height_ext.w }
        ],
        signature: '(string, sep, w)'
    },
	string_insert: {
        description: '[Function]' + i18n.string_insert.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'substr', documentation: i18n.string_insert.substr },
            { label: 'str', documentation: i18n.string_insert.str },
            { label: 'index', documentation: i18n.string_insert.index }
        ],
        signature: '(substr, str, index)'
    },
	string_length: {
        description: '[Function]' + i18n.string_length.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'str', documentation: i18n.string_length.str }
        ],
        signature: '(str)'
    },
	string_letters: {
        description: '[Function]' + i18n.string_letters.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'str', documentation: i18n.string_letters.str }
        ],
        signature: '(str)'
    },
	string_lettersdigits: {
        description: '[Function]' + i18n.string_lettersdigits.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'str', documentation: i18n.string_lettersdigits.str }
        ],
        signature: '(str)'
    },
	string_lower: {
        description: '[Function]' + i18n.string_lower.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'str', documentation: i18n.string_lower.str }
        ],
        signature: '(str)'
    },
	string_ord_at: {
        description: '[Function]' + i18n.string_ord_at.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'str', documentation: i18n.string_ord_at.str },
            { label: 'index', documentation: i18n.string_ord_at.index }
        ],
        signature: '(str, index)'
    },
	string_pos: {
        description: '[Function]' + i18n.string_pos.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'substr', documentation: i18n.string_pos.substr },
            { label: 'str', documentation: i18n.string_pos.str }
        ],
        signature: '(substr, str)'
    },
	string_repeat: {
        description: '[Function]' + i18n.string_repeat.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'str', documentation: i18n.string_repeat.str },
            { label: 'count', documentation: i18n.string_repeat.count }
        ],
        signature: '(str, count)'
    },
	string_replace: {
        description: '[Function]' + i18n.string_replace.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'str', documentation: i18n.string_replace.str },
            { label: 'substr', documentation: i18n.string_replace.substr },
            { label: 'newstr', documentation: i18n.string_replace.newstr }
        ],
        signature: '(str, substr, newstr)'
    },
	string_replace_all: {
        description: '[Function]' + i18n.string_replace_all.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'str', documentation: i18n.string_replace_all.str },
            { label: 'substr', documentation: i18n.string_replace_all.substr },
            { label: 'newstr', documentation: i18n.string_replace_all.newstr }
        ],
        signature: '(str, substr, newstr)'
    },
	string_set_byte_at: {
        description: '[Function]' + i18n.string_set_byte_at.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'str', documentation: i18n.string_set_byte_at.str },
            { label: 'index', documentation: i18n.string_set_byte_at.index },
            { label: 'val', documentation: i18n.string_set_byte_at.val }
        ],
        signature: '(str, index, val)'
    },
	string_upper: {
        description: '[Function]' + i18n.string_upper.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'str', documentation: i18n.string_upper.str }
        ],
        signature: '(str)'
    },
	string_width: {
        description: '[Function]' + i18n.string_width.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'string', documentation: i18n.string_width.string }
        ],
        signature: '(string)'
    },
	string_width_ext: {
        description: '[Function]' + i18n.string_width_ext.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'string', documentation: i18n.string_width_ext.string },
            { label: 'sep', documentation: i18n.string_width_ext.sep },
            { label: 'w', documentation: i18n.string_width_ext.w }
        ],
        signature: '(string, sep, w)'
    },
	surface_copy: {
        description: '[Function]' + i18n.surface_copy.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'destination', documentation: i18n.surface_copy.destination },
            { label: 'x', documentation: i18n.surface_copy.x },
            { label: 'y', documentation: i18n.surface_copy.y },
            { label: 'source', documentation: i18n.surface_copy.source }
        ],
        signature: '(destination, x, y, source)'
    },
	surface_copy_part: {
        description: '[Function]' + i18n.surface_copy_part.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'destination', documentation: i18n.surface_copy_part.destination },
            { label: 'x', documentation: i18n.surface_copy_part.x },
            { label: 'y', documentation: i18n.surface_copy_part.y },
            { label: 'source', documentation: i18n.surface_copy_part.source },
            { label: 'xs', documentation: i18n.surface_copy_part.xs },
            { label: 'ys', documentation: i18n.surface_copy_part.ys },
            { label: 'ws', documentation: i18n.surface_copy_part.ws },
            { label: 'hs', documentation: i18n.surface_copy_part.hs }
        ],
        signature: '(destination, x, y, source, xs, ys, ws, hs)'
    },
	surface_create: {
        description: '[Function]' + i18n.surface_create.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'w', documentation: i18n.surface_create.w },
            { label: 'h', documentation: i18n.surface_create.h }
        ],
        signature: '(w, h)'
    },
	surface_create_ext: {
        description: '[Function]' + i18n.surface_create_ext.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'name', documentation: i18n.surface_create_ext.name },
            { label: 'w', documentation: i18n.surface_create_ext.w },
            { label: 'h', documentation: i18n.surface_create_ext.h }
        ],
        signature: '(name, w, h)'
    },
	surface_exists: {
        description: '[Function]' + i18n.surface_exists.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'id', documentation: i18n.surface_exists.id }
        ],
        signature: '(id)'
    },
	surface_free: {
        description: '[Function]' + i18n.surface_free.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'id', documentation: i18n.surface_free.id }
        ],
        signature: '(id)'
    },
	surface_getpixel: {
        description: '[Function]' + i18n.surface_getpixel.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'id', documentation: i18n.surface_getpixel.id },
            { label: 'x', documentation: i18n.surface_getpixel.x },
            { label: 'y', documentation: i18n.surface_getpixel.y }
        ],
        signature: '(id, x, y)'
    },
	surface_getpixel_ext: {
        description: '[Function]' + i18n.surface_getpixel_ext.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'id', documentation: i18n.surface_getpixel_ext.id },
            { label: 'x', documentation: i18n.surface_getpixel_ext.x },
            { label: 'y', documentation: i18n.surface_getpixel_ext.y }
        ],
        signature: '(id, x, y)'
    },
	surface_get_height: {
        description: '[Function]' + i18n.surface_get_height.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'id', documentation: i18n.surface_get_height.id }
        ],
        signature: '(id)'
    },
	surface_get_texture: {
        description: '[Function]' + i18n.surface_get_texture.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'id', documentation: i18n.surface_get_texture.id }
        ],
        signature: '(id)'
    },
	surface_get_width: {
        description: '[Function]' + i18n.surface_get_width.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'id', documentation: i18n.surface_get_width.id }
        ],
        signature: '(id)'
    },
	surface_reset_target: {
        description: '[Function]' + i18n.surface_reset_target.desc,
        available: datasimple.gms1
    },
	surface_resize: {
        description: '[Function]' + i18n.surface_resize.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'id', documentation: i18n.surface_resize.id },
            { label: 'width', documentation: i18n.surface_resize.width },
            { label: 'height', documentation: i18n.surface_resize.height }
        ],
        signature: '(id, width, height)'
    },
	surface_save: {
        description: '[Function]' + i18n.surface_save.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'id', documentation: i18n.surface_save.id },
            { label: 'fname', documentation: i18n.surface_save.fname }
        ],
        signature: '(id, fname)'
    },
	surface_save_part: {
        description: '[Function]' + i18n.surface_save_part.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'id', documentation: i18n.surface_save_part.id },
            { label: 'fname', documentation: i18n.surface_save_part.fname },
            { label: 'x', documentation: i18n.surface_save_part.x },
            { label: 'y', documentation: i18n.surface_save_part.y },
            { label: 'w', documentation: i18n.surface_save_part.w },
            { label: 'h', documentation: i18n.surface_save_part.h }
        ],
        signature: '(id, fname, x, y, w, h)'
    },
	surface_set_target: {
        description: '[Function]' + i18n.surface_set_target.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'id', documentation: i18n.surface_set_target.id }
        ],
        signature: '(id)'
    },
	surface_set_target_ext: {
        description: '[Function]' + i18n.surface_set_target_ext.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'index', documentation: i18n.surface_set_target_ext.index },
            { label: 'id', documentation: i18n.surface_set_target_ext.id }
        ],
        signature: '(index, id)'
    },
	tan: {
        description: '[Function]' + i18n.tan.desc,
        available: datasimple.all,
        parameters: [
            { label: 'radian_angle', documentation: i18n.tan.radian_angle }
        ],
        signature: '(radian_angle)'
    },
	texture_get_height: {
        description: '[Function]' + i18n.texture_get_height.desc,
        available: datasimple.all,
        parameters: [
            { label: 'texid', documentation: i18n.texture_get_height.texid }
        ],
        signature: '(texid)'
    },
	texture_get_texel_height: {
        description: '[Function]' + i18n.texture_get_texel_height.desc,
        available: datasimple.all,
        parameters: [
            { label: 'texture_id', documentation: i18n.texture_get_texel_height.texture_id }
        ],
        signature: '(texture_id)'
    },
	texture_get_texel_width: {
        description: '[Function]' + i18n.texture_get_texel_width.desc,
        available: datasimple.all,
        parameters: [
            { label: 'texture_id', documentation: i18n.texture_get_texel_width.texture_id }
        ],
        signature: '(texture_id)'
    },
	texture_get_width: {
        description: '[Function]' + i18n.texture_get_width.desc,
        available: datasimple.all,
        parameters: [
            { label: 'texid', documentation: i18n.texture_get_width.texid }
        ],
        signature: '(texid)'
    },
	texture_global_scale: {
        description: '[Function]' + i18n.texture_global_scale.desc,
        available: datasimple.all,
        parameters: [
            { label: 'pow2integer', documentation: i18n.texture_global_scale.pow2integer }
        ],
        signature: '(pow2integer)'
    },
	texture_set_blending: {
        description: '[Function]' + i18n.texture_set_blending.desc,
        available: datasimple.all,
        parameters: [
            { label: 'blend', documentation: i18n.texture_set_blending.blend }
        ],
        signature: '(blend)'
    },
	texture_set_interpolation: {
        description: '[Function]' + i18n.texture_set_interpolation.desc,
        available: datasimple.all,
        parameters: [
            { label: 'linear', documentation: i18n.texture_set_interpolation.linear }
        ],
        signature: '(linear)'
    },
	texture_set_interpolation_ext: {
        description: '[Function]' + i18n.texture_set_interpolation_ext.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'sampler_id', documentation: i18n.texture_set_interpolation_ext.sampler_id },
            { label: 'linear', documentation: i18n.texture_set_interpolation_ext.linear }
        ],
        signature: '(sampler_id, linear)'
    },
	texture_set_repeat: {
        description: '[Function]' + i18n.texture_set_repeat.desc,
        available: datasimple.all,
        parameters: [
            { label: 'repeat', documentation: i18n.texture_set_repeat.repeat }
        ],
        signature: '(repeat)'
    },
	texture_set_repeat_ext: {
        description: '[Function]' + i18n.texture_set_repeat_ext.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'sampler_id', documentation: i18n.texture_set_repeat_ext.sampler_id },
            { label: 'repeat', documentation: i18n.texture_set_repeat_ext.repeat }
        ],
        signature: '(sampler_id, repeat)'
    },
	texture_set_stage: {
        description: '[Function]' + i18n.texture_set_stage.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'sampler_id', documentation: i18n.texture_set_stage.sampler_id },
            { label: 'texture_id', documentation: i18n.texture_set_stage.texture_id }
        ],
        signature: '(sampled_id, texture_id)'
    },
	timeline_add: {
        description: '[Function]' + i18n.timeline_add.desc,
        available: datasimple.all
    },
	timeline_clear: {
        description: '[Function]' + i18n.timeline_clear.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.timeline_clear.ind }
        ],
        signature: '(ind)'
    },
	timeline_delete: {
        description: '[Function]' + i18n.timeline_delete.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.timeline_delete.ind }
        ],
        signature: '(ind)'
    },
	timeline_exists: {
        description: '[Function]' + i18n.timeline_exists.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.timeline_exists.ind }
        ],
        signature: '(ind)'
    },
	timeline_get_name: {
        description: '[Function]' + i18n.timeline_get_name.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.timeline_get_name.ind }
        ],
        signature: '(ind)'
    },
	timeline_max_moment: {
        description: '[Function]' + i18n.timeline_max_moment.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'ind', documentation: i18n.timeline_max_moment.ind }
        ],
        signature: '(ind)'
    },
	timeline_moment_add_script: {
        description: '[Function]' + i18n.timeline_moment_add_script.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.timeline_moment_add_script.id },
            { label: 'step', documentation: i18n.timeline_moment_add_script.step },
            { label: 'script', documentation: i18n.timeline_moment_add_script.script }
        ],
        signature: '(ind, step, script)'
    },
	timeline_moment_clear: {
        description: '[Function]' + i18n.timeline_moment_clear.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.timeline_moment_clear.id },
            { label: 'step', documentation: i18n.timeline_moment_clear.step }
        ],
        signature: '(ind, step)'
    },
	timeline_size: {
        description: '[Function]' + i18n.timeline_size.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.timeline_size.ind }
        ],
        signature: '(ind)'
    },
	typeof: {
        description: '[Function]' + i18n.typeof.desc,
        available: datasimple.all,
        parameters: [
            { label: 'val', documentation: i18n.typeof.val }
        ],
        signature: '(val)'
    },
	url_get_domain: {
        description: '[Function]' + i18n.url_get_domain.desc,
        available: datasimple.gms1
    },
	url_open: {
        description: '[Function]' + i18n.url_open.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'url', documentation: i18n.url_open.url }
        ],
        signature: '(url)'
    },
	url_open_ext: {
        description: '[Function]' + i18n.url_open_ext.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'url', documentation: i18n.url_open_ext.url },
            { label: 'target', documentation: i18n.url_open_ext.target }
        ],
        signature: '(url, target)'
    },
	url_open_full: {
        description: '[Function]' + i18n.url_open_full.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'url', documentation: i18n.url_open_full.url },
            { label: 'target', documentation: i18n.url_open_full.target },
            { label: 'options', documentation: i18n.url_open_full.options }
        ],
        signature: '(url, target, options)'
    },
	vertex_argb: {
        description: '[Function]' + i18n.vertex_argb.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'vbuff', documentation: i18n.vertex_argb.vbuff },
            { label: 'argb', documentation: i18n.vertex_argb.argb }
        ],
        signature: '(vbuff, argb)'
    },
	vertex_begin: {
        description: '[Function]' + i18n.vertex_begin.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'vbuff', documentation: i18n.vertex_begin.vbuff },
            { label: 'format', documentation: i18n.vertex_begin.format }
        ],
        signature: '(vbuff, format)'
    },
	vertex_color: {
        description: '[Function]' + i18n.vertex_color.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'vbuff', documentation: i18n.vertex_color.vbuff },
            { label: 'color', documentation: i18n.vertex_color.color },
            { label: 'alpha', documentation: i18n.vertex_color.alpha }
        ],
        signature: '(vbuff, color, alpha)'
    },
	vertex_colour: {
        description: '[Function]' + i18n.vertex_colour.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'vbuff', documentation: i18n.vertex_colour.vbuff },
            { label: 'colour', documentation: i18n.vertex_colour.colour },
            { label: 'alpha', documentation: i18n.vertex_colour.alpha }
        ],
        signature: '(vbuff, colour, alpha)'
    },
	vertex_create_buffer: {
        description: '[Function]' + i18n.vertex_create_buffer.desc,
        available: datasimple.gms1
    },
	vertex_create_buffer_ext: {
        description: '[Function]' + i18n.vertex_create_buffer_ext.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'size', documentation: i18n.vertex_create_buffer_ext.size }
        ],
        signature: '(size)'
    },
	vertex_create_buffer_from_buffer: {
        description: '[Function]' + i18n.vertex_create_buffer_from_buffer.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'src_buffer', documentation: i18n.vertex_create_buffer_from_buffer.src_buffer },
            { label: 'format', documentation: i18n.vertex_create_buffer_from_buffer.format }
        ],
        signature: '(src_buffer, format)'
    },
	vertex_create_buffer_from_buffer_ext: {
        description: '[Function]' + i18n.vertex_create_buffer_from_buffer_ext.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'src_buffer', documentation: i18n.vertex_create_buffer_from_buffer_ext.src_buffer },
            { label: 'format', documentation: i18n.vertex_create_buffer_from_buffer_ext.format },
            { label: 'src_offset', documentation: i18n.vertex_create_buffer_from_buffer_ext.src_offset },
            { label: 'num_vertices', documentation: i18n.vertex_create_buffer_from_buffer_ext.num_vertices }
        ],
        signature: '(src_buffer, format, src_offset, num_vertices)'
    },
	vertex_delete_buffer: {
        description: '[Function]' + i18n.vertex_delete_buffer.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'vbuff', documentation: i18n.vertex_delete_buffer.vbuff }
        ],
        signature: '(vbuff)'
    },
	vertex_end: {
        description: '[Function]' + i18n.vertex_end.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'vbuff', documentation: i18n.vertex_end.vbuff }
        ],
        signature: '(vbuff)'
    },
	vertex_float1: {
        description: '[Function]' + i18n.vertex_float1.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'vbuff', documentation: i18n.vertex_float1.vbuff },
            { label: 'f1', documentation: i18n.vertex_float1.f1 }
        ],
        signature: '(vbuff, f1)'
    },
	vertex_float2: {
        description: '[Function]' + i18n.vertex_float2.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'vbuff', documentation: i18n.vertex_float2.vbuff },
            { label: 'f1', documentation: i18n.vertex_float2.f1 },
            { label: 'f2', documentation: i18n.vertex_float2.f2 }
        ],
        signature: '(vbuff, f1, f2)'
    },
	vertex_float3: {
        description: '[Function]' + i18n.vertex_float3.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'vbuff', documentation: i18n.vertex_float3.vbuff },
            { label: 'f1', documentation: i18n.vertex_float3.f1 },
            { label: 'f2', documentation: i18n.vertex_float3.f2 },
            { label: 'f3', documentation: i18n.vertex_float3.f3 }
        ],
        signature: '(vbuff, f1, f2, f3)'
    },
	vertex_float4: {
        description: '[Function]' + i18n.vertex_float4.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'vbuff', documentation: i18n.vertex_float4.vbuff },
            { label: 'f1', documentation: i18n.vertex_float4.f1 },
            { label: 'f2', documentation: i18n.vertex_float4.f2 },
            { label: 'f3', documentation: i18n.vertex_float4.f3 },
            { label: 'f4', documentation: i18n.vertex_float4.f4 }
        ],
        signature: '(vbuff, f1, f2, f3, f4)'
    },
	vertex_format_add_color: {
        description: '[Function]' + i18n.vertex_format_add_color.desc,
        available: datasimple.gms1
    },
	vertex_format_add_colour: {
        description: '[Function]' + i18n.vertex_format_add_colour.desc,
        available: datasimple.gms1
    },
	vertex_format_add_custom: {
        description: '[Function]' + i18n.vertex_format_add_custom.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'type', documentation: i18n.vertex_format_add_custom.type },
            { label: 'usage', documentation: i18n.vertex_format_add_custom.usage }
        ],
        signature: '(type, usage)'
    },
	vertex_format_add_normal: {
        description: '[Function]' + i18n.vertex_format_add_normal.desc,
        available: datasimple.gms1
    },
	vertex_format_add_position: {
        description: '[Function]' + i18n.vertex_format_add_position.desc,
        available: datasimple.gms1
    },
	vertex_format_add_position_3d: {
        description: '[Function]' + i18n.vertex_format_add_position_3d.desc,
        available: datasimple.gms1
    },
	vertex_format_add_textcoord: {
        description: '[Function]' + i18n.vertex_format_add_textcoord.desc,
        available: datasimple.gms1
    },
	vertex_format_begin: {
        description: '[Function]' + i18n.vertex_format_begin.desc,
        available: datasimple.gms1
    },
	vertex_format_delete: {
        description: '[Function]' + i18n.vertex_format_delete.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'format_id', documentation: i18n.vertex_format_delete.format_id }
        ],
        signature: '(format_id)'
    },
	vertex_format_end: {
        description: '[Function]' + i18n.vertex_format_end.desc,
        available: datasimple.gms1
    },
	vertex_freeze: {
        description: '[Function]' + i18n.vertex_freeze.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'vbuff', documentation: i18n.vertex_freeze.vbuff }
        ],
        signature: '(vbuff)'
    },
	vertex_get_buffer_size: {
        description: '[Function]' + i18n.vertex_get_buffer_size.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'vbuff', documentation: i18n.vertex_get_buffer_size.vbuff }
        ],
        signature: '(vbuff)'
    },
	vertex_get_number: {
        description: '[Function]' + i18n.vertex_get_number.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'vbuff', documentation: i18n.vertex_get_number.vbuff }
        ],
        signature: '(vbuff)'
    },
	vertex_normal: {
        description: '[Function]' + i18n.vertex_normal.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'vbuff', documentation: i18n.vertex_normal.vbuff },
            { label: 'nx', documentation: i18n.vertex_normal.nx },
            { label: 'ny', documentation: i18n.vertex_normal.ny },
            { label: 'nz', documentation: i18n.vertex_normal.nz }
        ],
        signature: '(vbuff, nx, ny, nz)'
    },
	vertex_position: {
        description: '[Function]' + i18n.vertex_position.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'vbuff', documentation: i18n.vertex_position.vbuff },
            { label: 'x', documentation: i18n.vertex_position.x },
            { label: 'y', documentation: i18n.vertex_position.y }
        ],
        signature: '(vbuff, x, y)'
    },
	vertex_position_3d: {
        description: '[Function]' + i18n.vertex_position_3d.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'vbuff', documentation: i18n.vertex_position_3d.vbuff },
            { label: 'x', documentation: i18n.vertex_position_3d.x },
            { label: 'y', documentation: i18n.vertex_position_3d.y },
            { label: 'z', documentation: i18n.vertex_position_3d.z }
        ],
        signature: '(vbuff, x, y, z)'
    },
	vertex_submit: {
        description: '[Function]' + i18n.vertex_submit.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'vbuff', documentation: i18n.vertex_submit.vbuff },
            { label: 'prim', documentation: i18n.vertex_submit.prim },
            { label: 'texture', documentation: i18n.vertex_submit.texture }
        ],
        signature: '(vbuff, prim, texture)'
    },
	vertex_texcoord: {
        description: '[Function]' + i18n.vertex_texcoord.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'vbuff', documentation: i18n.vertex_texcoord.vbuff },
            { label: 'u', documentation: i18n.vertex_texcoord.u },
            { label: 'v', documentation: i18n.vertex_texcoord.v }
        ],
        signature: '(vbuff, u, v)'
    },
	vertex_ubyte4: {
        description: '[Function]' + i18n.vertex_ubyte4.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'vbuff', documentation: i18n.vertex_ubyte4.vbuff },
            { label: 'b1', documentation: i18n.vertex_ubyte4.b1 },
            { label: 'b2', documentation: i18n.vertex_ubyte4.b2 },
            { label: 'b3', documentation: i18n.vertex_ubyte4.b3 },
            { label: 'b4', documentation: i18n.vertex_ubyte4.b4 }
        ],
        signature: '(vbuff, b1, b2, b3, b4)'
    },
	virtual_key_add: {
        description: '[Function]' + i18n.virtual_key_add.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'x', documentation: i18n.virtual_key_add.x },
            { label: 'y', documentation: i18n.virtual_key_add.y },
            { label: 'w', documentation: i18n.virtual_key_add.w },
            { label: 'h', documentation: i18n.virtual_key_add.h },
            { label: 'keycode', documentation: i18n.virtual_key_add.keycode }
        ],
        signature: '(x, y, w, h, keycode)'
    },
	virtual_key_delete: {
        description: '[Function]' + i18n.virtual_key_delete.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'id', documentation: i18n.virtual_key_delete.id }
        ],
        signature: '(id)'
    },
	virtual_key_hide: {
        description: '[Function]' + i18n.virtual_key_hide.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'id', documentation: i18n.virtual_key_hide.id }
        ],
        signature: '(id)'
    },
	virtual_key_show: {
        description: '[Function]' + i18n.virtual_key_show.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'id', documentation: i18n.virtual_key_show.id }
        ],
        signature: '(id)'
    },
	window_center: {
        description: '[Function]' + i18n.window_center.desc,
        available: datasimple.all
    },
	window_device: {
        description: '[Function]' + i18n.window_device.desc,
        available: datasimple.all
    },
	window_get_caption: {
        description: '[Function]' + i18n.window_get_caption.desc,
        available: datasimple.all
    },
	window_get_color: {
        description: '[Function]' + i18n.window_get_color.desc,
        available: datasimple.all
    },
	window_get_colour: {
        description: '[Function]' + i18n.window_get_colour.desc,
        available: datasimple.all
    },
	window_get_cursor: {
        description: '[Function]' + i18n.window_get_cursor.desc,
        available: datasimple.all
    },
	window_get_fullscreen: {
        description: '[Function]' + i18n.window_get_fullscreen.desc,
        available: datasimple.all
    },
	window_get_height: {
        description: '[Function]' + i18n.window_get_height.desc,
        available: datasimple.all
    },
	window_get_visible_rects: {
        description: '[Function]' + i18n.window_get_visible_rects.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x1', documentation: i18n.window_get_visible_rects.x1 },
            { label: 'y1', documentation: i18n.window_get_visible_rects.y1 },
            { label: 'x2', documentation: i18n.window_get_visible_rects.x2 },
            { label: 'y2', documentation: i18n.window_get_visible_rects.y2 }
        ],
        signature: '(x1, y1, x2, y2)'
    },
	window_get_width: {
        description: '[Function]' + i18n.window_get_width.desc,
        available: datasimple.all
    },
	window_get_x: {
        description: '[Function]' + i18n.window_get_x.desc,
        available: datasimple.all
    },
	window_get_y: {
        description: '[Function]' + i18n.window_get_y.desc,
        available: datasimple.all
    },
	window_handle: {
        description: '[Function]' + i18n.window_handle.desc,
        available: datasimple.all
    },
	window_has_focus: {
        description: '[Function]' + i18n.window_has_focus.desc,
        available: datasimple.all
    },
	window_mouse_get_x: {
        description: '[Function]' + i18n.window_mouse_get_x.desc,
        available: datasimple.all
    },
	window_mouse_get_y: {
        description: '[Function]' + i18n.window_mouse_get_y.desc,
        available: datasimple.all
    },
	window_mouse_set: {
        description: '[Function]' + i18n.window_mouse_set.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x', documentation: i18n.window_mouse_set.x },
            { label: 'y', documentation: i18n.window_mouse_set.y }
        ],
        signature: '(x, y)'
    },
	window_set_caption: {
        description: '[Function]' + i18n.window_set_caption.desc,
        available: datasimple.all,
        parameters: [
            { label: 'caption', documentation: i18n.window_set_caption.caption }
        ],
        signature: '(caption)'
    },
	window_set_color: {
        description: '[Function]' + i18n.window_set_color.desc,
        available: datasimple.all,
        parameters: [
            { label: 'color', documentation: i18n.window_set_color.color }
        ],
        signature: '(color)'
    },
	window_set_colour: {
        description: '[Function]' + i18n.window_set_colour.desc,
        available: datasimple.all,
        parameters: [
            { label: 'colour', documentation: i18n.window_set_colour.colour }
        ],
        signature: '(colour)'
    },
	window_set_cursor: {
        description: '[Function]' + i18n.window_set_cursor.desc,
        available: datasimple.all,
        parameters: [
            { label: 'curs', documentation: i18n.window_set_cursor.curs }
        ],
        signature: '(curs)'
    },
	window_set_fullscreen: {
        description: '[Function]' + i18n.window_set_fullscreen.desc,
        available: datasimple.all,
        parameters: [
            { label: 'full', documentation: i18n.window_set_fullscreen.full }
        ],
        signature: '(full)'
    },
	window_set_max_height: {
        description: '[Function]' + i18n.window_set_max_height.desc,
        available: datasimple.all,
        parameters: [
            { label: 'maxheight', documentation: i18n.window_set_max_height.maxheight }
        ],
        signature: '(maxheight)'
    },
	window_set_max_width: {
        description: '[Function]' + i18n.window_set_max_width.desc,
        available: datasimple.all,
        parameters: [
            { label: 'maxwidth', documentation: i18n.window_set_max_width.maxwidth }
        ],
        signature: '(maxwidth)'
    },
	window_set_min_height: {
        description: '[Function]' + i18n.window_set_min_height.desc,
        available: datasimple.all,
        parameters: [
            { label: 'minheight', documentation: i18n.window_set_min_height.minheight }
        ],
        signature: '(minheight)'
    },
	window_set_min_width: {
        description: '[Function]' + i18n.window_set_min_width.desc,
        available: datasimple.all,
        parameters: [
            { label: 'minwidth', documentation: i18n.window_set_min_width.minwidth }
        ],
        signature: '(minwidth)'
    },
	window_set_position: {
        description: '[Function]' + i18n.window_set_position.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x', documentation: i18n.window_set_position.x },
            { label: 'y', documentation: i18n.window_set_position.y }
        ],
        signature: '(x, y)'
    },
	window_set_rectangle: {
        description: '[Function]' + i18n.window_set_rectangle.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x', documentation: i18n.window_set_rectangle.x },
            { label: 'y', documentation: i18n.window_set_rectangle.y },
            { label: 'w', documentation: i18n.window_set_rectangle.w },
            { label: 'h', documentation: i18n.window_set_rectangle.h }
        ],
        signature: '(x, y, w, h)'
    },
	window_set_size: {
        description: '[Function]' + i18n.window_set_size.desc,
        available: datasimple.all,
        parameters: [
            { label: 'w', documentation: i18n.window_set_size.w },
            { label: 'h', documentation: i18n.window_set_size.h }
        ],
        signature: '(w, h)'
    },
	window_views_mouse_get_x: {
        description: '[Function]' + i18n.window_views_mouse_get_x.desc,
        available: datasimple.all
    },
	window_views_mouse_get_y: {
        description: '[Function]' + i18n.window_views_mouse_get_y.desc,
        available: datasimple.all
    },
	window_view_mouse_get_x: {
        description: '[Function]' + i18n.window_view_mouse_get_x.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.window_view_mouse_get_x.id }
        ],
        signature: '(id)'
    },
	window_view_mouse_get_y: {
        description: '[Function]' + i18n.window_view_mouse_get_y.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.window_view_mouse_get_y.id }
        ],
        signature: '(id)'
    },
	zip_unzip: {
        description: '[Function]' + i18n.zip_unzip.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'file', documentation: i18n.zip_unzip.file },
            { label: 'destPath', documentation: i18n.zip_unzip.destPath }
        ],
        signature: '(file, destPath)'
    },

    //These are the functions that were obsoleted in the old version but restored in the new version
    variable_global_exists: {
        description: '[Function]' + i18n.variable_global_exists.desc,
        available: datasimple.all,
        parameters: [
            { label: 'name', documentation: i18n.variable_global_exists.name }
        ],
        signature: '(name)'
    },
	variable_global_get: {
        description: '[Function]' + i18n.variable_global_get.desc,
        available: datasimple.all,
        parameters: [
            { label: 'name', documentation: i18n.variable_global_get.name }
        ],
        signature: '(name)'
    },
	variable_global_set: {
        description: '[Function]' + i18n.variable_global_set.desc,
        available: datasimple.all,
        parameters: [
            { label: 'name', documentation: i18n.variable_global_set.name },
            { label: 'value', documentation: i18n.variable_global_set.value }
        ],
        signature: '(name, value)'
    },
	variable_instance_exists: {
        description: '[Function]' + i18n.variable_instance_exists.desc,
        available: datasimple.all,
        parameters: [
            { label: 'instance_id', documentation: i18n.variable_instance_exists.instance_id },
            { label: 'name', documentation: i18n.variable_instance_exists.name }
        ],
        signature: '(instance_id, name)'
    },
	variable_instance_get: {
        description: '[Function]' + i18n.variable_instance_get.desc,
        available: datasimple.all,
        parameters: [
            { label: 'instance_id', documentation: i18n.variable_instance_get.instance_id },
            { label: 'name', documentation: i18n.variable_instance_get.name }
        ],
        signature: '(instance_id, name)'
    },
	variable_instance_set: {
        description: '[Function]' + i18n.variable_instance_set.desc,
        available: datasimple.all,
        parameters: [
            { label: 'instance_id', documentation: i18n.variable_instance_set.instance_id },
            { label: 'name', documentation: i18n.variable_instance_set.name },
            { label: 'val', documentation: i18n.variable_instance_set.val }
        ],
        signature: '(instance_id, name, val)'
    },
	variable_instance_get_names: {
        description: '[Function]' + i18n.variable_instance_get_names.desc,
        available: datasimple.all,
        parameters: [
            { label: 'instance_id', documentation: i18n.variable_instance_get_names.instance_id }
        ],
        signature: '(instance_id)'
    },

    //These functions are deprecated.
    pocketchange_display_reward: {
        description: '[Function] (' + i18n_notice.deprecated + ')' + i18n.pocketchange_display_reward.desc,
        available: datasimple.gms1d
    },
	pocketchange_display_shop: {
        description: '[Function] (' + i18n_notice.deprecated + ')' + i18n.pocketchange_display_shop.desc,
        available: datasimple.gms1d
    },
	iap_store_status: {
        description: '[Function] (' + i18n_notice.deprecated + ')' + i18n.iap_store_status.desc,
        available: datasimple.gms1d
    },
	iap_product_status: {
        description: '[Function] (' + i18n_notice.deprecated + ')' + i18n.iap_product_status.desc,
        available: datasimple.gms1d,
        parameters: [
            { label: 'product_id', documentation: i18n.iap_product_status.product_id }
        ],
        signature: '(product_id)'
    },
	iap_is_downloaded: {
        description: '[Function] (' + i18n_notice.deprecated + ')' + i18n.iap_is_downloaded.desc,
        available: datasimple.gms1d,
        parameters: [
            { label: 'product_id_string', documentation: i18n.iap_is_downloaded.product_id_string }
        ],
        signature: '(purchase_id_string)'
    },
	iap_files_purchased: {
        description: '[Function] (' + i18n_notice.deprecated + ')' + i18n.iap_files_purchased.desc,
        available: datasimple.gms1d
    },
	iap_product_files: {
        description: '[Function] (' + i18n_notice.deprecated + ')' + i18n.iap_product_files.desc,
        available: datasimple.gms1d,
        parameters: [
            { label: 'product_id', documentation: i18n.iap_product_files.product_id },
            { label: 'ds_list', documentation: i18n.iap_product_files.ds_list }
        ],
        signature: '(purchase_id, ds_list)'
    },
	iap_event_queue: {
        description: '[Function] (' + i18n_notice.deprecated + ')' + i18n.iap_event_queue.desc,
        available: datasimple.gms1d
    },
    win8_appbar_add_element: {
        description: '[Function] (' + i18n_notice.deprecated + ')' + i18n.win8_appbar_add_element.desc,
        available: datasimple.gms1d,
        parameters: [
            { label: 'type', documentation: i18n.win8_appbar_add_element.type },
            { label: 'icon', documentation: i18n.win8_appbar_add_element.icon },
            { label: 'label', documentation: i18n.win8_appbar_add_element.label },
            { label: 'section', documentation: i18n.win8_appbar_add_element.section },
            { label: 'toolTip', documentation: i18n.win8_appbar_add_element.toolTip },
            { label: 'callback', documentation: i18n.win8_appbar_add_element.callback }
        ],
        signature: '(type, icon, label, section, toolTip, callback)'
    },
	win8_appbar_enable: {
        description: '[Function] (' + i18n_notice.deprecated + ')' + i18n.win8_appbar_enable.desc,
        available: datasimple.gms1d,
        parameters: [
            { label: 'flag', documentation: i18n.win8_appbar_enable.flag }
        ],
        signature: '(flag)'
    },
	win8_appbar_remove_element: {
        description: '[Function] (' + i18n_notice.deprecated + ')' + i18n.win8_appbar_remove_element.desc,
        available: datasimple.gms1d,
        parameters: [
            { label: 'id', documentation: i18n.win8_appbar_remove_element.id }
        ],
        signature: '(id)'
    },
	win8_device_touchscreen_available: {
        description: '[Function] (' + i18n_notice.deprecated + ')' + i18n.win8_device_touchscreen_available.desc,
        available: datasimple.gms1d
    },
	win8_license_initialize_sandbox: {
        description: '[Function] (' + i18n_notice.deprecated + ')' + i18n.win8_license_initialize_sandbox.desc,
        available: datasimple.gms1d,
        parameters: [
            { label: '_licenseString', documentation: i18n.win8_license_initialize_sandbox.licenseString }
        ],
        signature: '(_licenseString)'
    },
	win8_license_trial_version: {
        description: '[Function] (' + i18n_notice.deprecated + ')' + i18n.win8_license_trial_version.desc,
        available: datasimple.gms1d
    },
	win8_livetile_badge_clear: {
        description: '[Function] (' + i18n_notice.deprecated + ')' + i18n.win8_livetile_badge_clear.desc,
        available: datasimple.gms1d
    },
	win8_livetile_badge_notification: {
        description: '[Function] (' + i18n_notice.deprecated + ')' + i18n.win8_livetile_badge_notification.desc,
        available: datasimple.gms1d,
        parameters: [
            { label: 'id', documentation: i18n.win8_livetile_badge_notification.id }
        ],
        signature: '(id)'
    },
	win8_livetile_notification_begin: {
        description: '[Function] (' + i18n_notice.deprecated + ')' + i18n.win8_livetile_notification_begin.desc,
        available: datasimple.gms1d,
        parameters: [
            { label: 'template', documentation: i18n.win8_livetile_notification_begin.template }
        ],
        signature: '(template)'
    },
	win8_livetile_notification_end: {
        description: '[Function] (' + i18n_notice.deprecated + ')' + i18n.win8_livetile_notification_end.desc,
        available: datasimple.gms1d
    },
	win8_livetile_notification_expiry: {
        description: '[Function] (' + i18n_notice.deprecated + ')' + i18n.win8_livetile_notification_expiry.desc,
        available: datasimple.gms1d,
        parameters: [
            { label: 'expiryTime', documentation: i18n.win8_livetile_notification_expiry.expiryTime }
        ],
        signature: '(expiryTime)'
    },
	win8_livetile_notification_image_add: {
        description: '[Function] (' + i18n_notice.deprecated + ')' + i18n.win8_livetile_notification_image_add.desc,
        available: datasimple.gms1d,
        parameters: [
            { label: 'image', documentation: i18n.win8_livetile_notification_image_add.image }
        ],
        signature: '(image)'
    },
	win8_livetile_notification_secondary_begin: {
        description: '[Function] (' + i18n_notice.deprecated + ')' + i18n.win8_livetile_notification_secondary_begin.desc,
        available: datasimple.gms1d,
        parameters: [
            { label: 'template', documentation: i18n.win8_livetile_notification_secondary_begin.template },
            { label: 'tileId', documentation: i18n.win8_livetile_notification_secondary_begin.tileId }
        ],
        signature: '(template, tileId)'
    },
	win8_livetile_notification_tag: {
        description: '[Function] (' + i18n_notice.deprecated + ')' + i18n.win8_livetile_notification_tag.desc,
        available: datasimple.gms1d,
        parameters: [
            { label: 'tag', documentation: i18n.win8_livetile_notification_tag.tag }
        ],
        signature: '(tag)'
    },
	win8_livetile_notification_text_add: {
        description: '[Function] (' + i18n_notice.deprecated + ')' + i18n.win8_livetile_notification_text_add.desc,
        available: datasimple.gms1d,
        parameters: [
            { label: 'text', documentation: i18n.win8_livetile_notification_text_add.text }
        ],
        signature: '(text)'
    },
	win8_livetile_queue_enable: {
        description: '[Function] (' + i18n_notice.deprecated + ')' + i18n.win8_livetile_queue_enable.desc,
        available: datasimple.gms1d,
        parameters: [
            { label: 'flag', documentation: i18n.win8_livetile_queue_enable.flag }
        ],
        signature: '(flag)'
    },
	win8_livetile_tile_clear: {
        description: '[Function] (' + i18n_notice.deprecated + ')' + i18n.win8_livetile_tile_clear.desc,
        available: datasimple.gms1d
    },
	win8_livetile_tile_notification: {
        description: '[Function] (' + i18n_notice.deprecated + ')' + i18n.win8_livetile_tile_notification.desc,
        available: datasimple.gms1d,
        parameters: [
            { label: 'template', documentation: i18n.win8_livetile_tile_notification.template },
            { label: 'ds_map', documentation: i18n.win8_livetile_tile_notification.ds_map },
            { label: 'expiry', documentation: i18n.win8_livetile_tile_notification.expiry },
            { label: 'tag', documentation: i18n.win8_livetile_tile_notification.tag }
        ],
        signature: '(template, ds_map, expiry, tag)'
    },
	win8_search_add_suggestions: {
        description: '[Function] (' + i18n_notice.deprecated + ')' + i18n.win8_search_add_suggestions.desc,
        available: datasimple.gms1d,
        parameters: [
            { label: '_dslist', documentation: i18n.win8_search_add_suggestions.dslist }
        ],
        signature: '(_dslist)'
    },
	win8_search_disable: {
        description: '[Function] (' + i18n_notice.deprecated + ')' + i18n.win8_search_disable.desc,
        available: datasimple.gms1d
    },
	win8_search_enable: {
        description: '[Function] (' + i18n_notice.deprecated + ')' + i18n.win8_search_enable.desc,
        available: datasimple.gms1d,
        parameters: [
            { label: '_selectionCallback', documentation: i18n.win8_search_enable.selectionCallback }
        ],
        signature: '(_selectionCallback)'
    },
	win8_secondarytile_badge_notification: {
        description: '[Function] (' + i18n_notice.deprecated + ')' + i18n.win8_secondarytile_badge_notification.desc,
        available: datasimple.gms1d,
        parameters: [
            { label: 'id', documentation: i18n.win8_secondarytile_badge_notification.id },
            { label: 'tileId', documentation: i18n.win8_secondarytile_badge_notification.tileId }
        ],
        signature: '(id, tileId)'
    },
	win8_secondarytile_delete: {
        description: '[Function] (' + i18n_notice.deprecated + ')' + i18n.win8_secondarytile_delete.desc,
        available: datasimple.gms1d,
        parameters: [
            { label: 'id', documentation: i18n.win8_secondarytile_delete.id }
        ],
        signature: '(id)'
    },
	win8_secondarytile_pin: {
        description: '[Function] (' + i18n_notice.deprecated + ')' + i18n.win8_secondarytile_pin.desc,
        available: datasimple.gms1d,
        parameters: [
            { label: 'id', documentation: i18n.win8_secondarytile_pin.id },
            { label: 'shortName', documentation: i18n.win8_secondarytile_pin.shortName },
            { label: 'displayName', documentation: i18n.win8_secondarytile_pin.displayName },
            { label: 'cmdLineArgs', documentation: i18n.win8_secondarytile_pin.cmdLineArgs },
            { label: 'dsListOptions', documentation: i18n.win8_secondarytile_pin.dsListOptions },
            { label: 'tileImg', documentation: i18n.win8_secondarytile_pin.tileImg },
            { label: 'wideTileImg', documentation: i18n.win8_secondarytile_pin.wideTileImg },
            { label: 'textCol', documentation: i18n.win8_secondarytile_pin.textCol }
        ],
        signature: '(id, shortName, displayName, cmdLineArgs, dsListOptions, tileImg, wideTileImg, textCol)'
    },
	win8_settingscharm_add_entry: {
        description: '[Function] (' + i18n_notice.deprecated + ')' + i18n.win8_settingscharm_add_entry.desc,
        available: datasimple.gms1d,
        parameters: [
            { label: 'name', documentation: i18n.win8_settingscharm_add_entry.name },
            { label: 'callback', documentation: i18n.win8_settingscharm_add_entry.callback }
        ],
        signature: '(name, callback)'
    },
	win8_settingscharm_add_html_entry: {
        description: '[Function] (' + i18n_notice.deprecated + ')' + i18n.win8_settingscharm_add_html_entry.desc,
        available: datasimple.gms1d,
        parameters: [
            { label: 'id', documentation: i18n.win8_settingscharm_add_html_entry.id },
            { label: 'name', documentation: i18n.win8_settingscharm_add_html_entry.name },
            { label: 'htmlPath', documentation: i18n.win8_settingscharm_add_html_entry.htmlPath }
        ],
        signature: '(id, name, htmlPath)'
    },
	win8_settingscharm_add_xaml_entry: {
        description: '[Function] (' + i18n_notice.deprecated + ')' + i18n.win8_settingscharm_add_xaml_entry.desc,
        available: datasimple.gms1d,
        parameters: [
            { label: 'name', documentation: i18n.win8_settingscharm_add_xaml_entry.name },
            { label: 'xamlPath', documentation: i18n.win8_settingscharm_add_xaml_entry.xamlPath },
            { label: 'headerRGB', documentation: i18n.win8_settingscharm_add_xaml_entry.headerRGB },
            { label: 'callback', documentation: i18n.win8_settingscharm_add_xaml_entry.callback },
            { label: 'wideFlyout', documentation: i18n.win8_settingscharm_add_xaml_entry.wideFlyout }
        ],
        signature: '(name, xamlPath, headerRGB, callback, wideFlyout)'
    },
	win8_settingscharm_get_xaml_property: {
        description: '[Function] (' + i18n_notice.deprecated + ')' + i18n.win8_settingscharm_get_xaml_property.desc,
        available: datasimple.gms1d,
        parameters: [
            { label: 'entryName', documentation: i18n.win8_settingscharm_get_xaml_property.entryName },
            { label: 'elementName', documentation: i18n.win8_settingscharm_get_xaml_property.elementName },
            { label: 'propertyName', documentation: i18n.win8_settingscharm_get_xaml_property.propertyName }
        ],
        signature: '(entryName, elementName, propertyName)'
    },
	win8_settingscharm_remove_entry: {
        description: '[Function] (' + i18n_notice.deprecated + ')' + i18n.win8_settingscharm_remove_entry.desc,
        available: datasimple.gms1d,
        parameters: [
            { label: 'name', documentation: i18n.win8_settingscharm_remove_entry.name }
        ],
        signature: '(name)'
    },
	win8_settingscharm_set_xaml_property: {
        description: '[Function] (' + i18n_notice.deprecated + ')' + i18n.win8_settingscharm_set_xaml_property.desc,
        available: datasimple.gms1d,
        parameters: [
            { label: 'entryName', documentation: i18n.win8_settingscharm_set_xaml_property.entryName },
            { label: 'elementName', documentation: i18n.win8_settingscharm_set_xaml_property.elementName },
            { label: 'propertyName', documentation: i18n.win8_settingscharm_set_xaml_property.propertyName },
            { label: 'newValue', documentation: i18n.win8_settingscharm_set_xaml_property.newValue }
        ],
        signature: '(entryName, elementName, propertyName, newValue)'
    },
	win8_share_file: {
        description: '[Function] (' + i18n_notice.deprecated + ')' + i18n.win8_share_file.desc,
        available: datasimple.gms1d,
        parameters: [
            { label: 'filename', documentation: i18n.win8_share_file.filename },
            { label: 'title', documentation: i18n.win8_share_file.title },
            { label: 'description', documentation: i18n.win8_share_file.description },
            { label: 'immediate', documentation: i18n.win8_share_file.immediate }
        ],
        signature: '(filename, title, description, immediate)'
    },
	win8_share_image: {
        description: '[Function] (' + i18n_notice.deprecated + ')' + i18n.win8_share_image.desc,
        available: datasimple.gms1d,
        parameters: [
            { label: 'image_filename', documentation: i18n.win8_share_image.image_filename },
            { label: 'title', documentation: i18n.win8_share_image.title },
            { label: 'description', documentation: i18n.win8_share_image.description },
            { label: 'immediate', documentation: i18n.win8_share_image.immediate }
        ],
        signature: '(image_filename, title, description, immediate)'
    },
	win8_share_screenshot: {
        description: '[Function] (' + i18n_notice.deprecated + ')' + i18n.win8_share_screenshot.desc,
        available: datasimple.gms1d,
        parameters: [
            { label: 'entryName', documentation: i18n.win8_share_screenshot.entryName },
            { label: 'description', documentation: i18n.win8_share_screenshot.description },
            { label: 'immediate', documentation: i18n.win8_share_screenshot.immediate }
        ],
        signature: '(title, description, immediate)'
    },
	win8_share_text: {
        description: '[Function] (' + i18n_notice.deprecated + ')' + i18n.win8_share_text.desc,
        available: datasimple.gms1d,
        parameters: [
            { label: 'text', documentation: i18n.win8_share_text.text },
            { label: 'title', documentation: i18n.win8_share_text.title },
            { label: 'description', documentation: i18n.win8_share_text.description },
            { label: 'immediate', documentation: i18n.win8_share_text.immediate }
        ],
        signature: '(text, title, description, immediate)'
    },
	win8_share_url: {
        description: '[Function] (' + i18n_notice.deprecated + ')' + i18n.win8_share_url.desc,
        available: datasimple.gms1d,
        parameters: [
            { label: 'url', documentation: i18n.win8_share_url.url },
            { label: 'title', documentation: i18n.win8_share_url.title },
            { label: 'description', documentation: i18n.win8_share_url.description },
            { label: 'immediate', documentation: i18n.win8_share_url.immediate }
        ],
        signature: '(url, title, description, immediate)'
    },
    winphone_license_trial_version: {
        description: '[Function] (' + i18n_notice.deprecated + ')' + i18n.winphone_license_trial_version.desc,
        available: datasimple.gms1d
    },
	winphone_tile_background_color: {
        description: '[Function] (' + i18n_notice.deprecated + ')' + i18n.winphone_tile_background_color.desc,
        available: datasimple.gms1d,
        arameters: [
            { label: 'color', documentation: i18n.winphone_tile_background_color.color }
        ],
        signature: '(color)'
    },
	winphone_tile_background_colour: {
        description: '[Function] (' + i18n_notice.deprecated + ')' + i18n.winphone_tile_background_colour.desc,
        available: datasimple.gms1d,
        arameters: [
            { label: 'colour', documentation: i18n.winphone_tile_background_colour.colour }
        ],
        signature: '(colour)'
    },
	winphone_tile_back_content: {
        description: '[Function] (' + i18n_notice.deprecated + ')' + i18n.winphone_tile_back_content.desc,
        available: datasimple.gms1d,
        parameters: [
            { label: 'content', documentation: i18n.winphone_tile_back_content.content }
        ],
        signature: '(content)'
    },
	winphone_tile_back_content_wide: {
        description: '[Function] (' + i18n_notice.deprecated + ')' + i18n.winphone_tile_back_content_wide.desc,
        available: datasimple.gms1d,
        parameters: [
            { label: 'content', documentation: i18n.winphone_tile_back_content_wide.content }
        ],
        signature: '(content)'
    },
	winphone_tile_back_image: {
        description: '[Function] (' + i18n_notice.deprecated + ')' + i18n.winphone_tile_back_image.desc,
        available: datasimple.gms1d,
        parameters: [
            { label: 'included_filename', documentation: i18n.winphone_tile_back_image.included_filename }
        ],
        signature: '(included_filename)'
    },
	winphone_tile_back_image_wide: {
        description: '[Function] (' + i18n_notice.deprecated + ')' + i18n.winphone_tile_back_image_wide.desc,
        available: datasimple.gms1d,
        parameters: [
            { label: 'included_filename', documentation: i18n.winphone_tile_back_image_wide.included_filename }
        ],
        signature: '(included_filename)'
    },
	winphone_tile_back_title: {
        description: '[Function] (' + i18n_notice.deprecated + ')' + i18n.winphone_tile_back_title.desc,
        available: datasimple.gms1d,
        parameters: [
            { label: 'title', documentation: i18n.winphone_tile_back_title.title }
        ],
        signature: '(title)'
    },
	winphone_tile_count: {
        description: '[Function] (' + i18n_notice.deprecated + ')' + i18n.winphone_tile_count.desc,
        available: datasimple.gms1d,
        parameters: [
            { label: 'count', documentation: i18n.winphone_tile_count.count }
        ],
        signature: '(count)'
    },
	winphone_tile_cycle_images: {
        description: '[Function] (' + i18n_notice.deprecated + ')' + i18n.winphone_tile_cycle_images.desc,
        available: datasimple.gms1d,
        parameters: [
            { label: 'included_filename_1', documentation: i18n.winphone_tile_cycle_images.included_filename_1 },
            { label: 'included_filename_2', documentation: i18n.winphone_tile_cycle_images.included_filename_2 },
            { label: '...', documentation: i18n.winphone_tile_cycle_images.more }
        ],
        signature: '(included_filename_1, included_filename_2, ...)'
    },
	winphone_tile_front_image: {
        description: '[Function] (' + i18n_notice.deprecated + ')' + i18n.winphone_tile_front_image.desc,
        available: datasimple.gms1d,
        parameters: [
            { label: 'included_filename', documentation: i18n.winphone_tile_front_image.included_filename }
        ],
        signature: '(included_filename)'
    },
	winphone_tile_front_image_small: {
        description: '[Function] (' + i18n_notice.deprecated + ')' + i18n.winphone_tile_front_image_small.desc,
        available: datasimple.gms1d,
        parameters: [
            { label: 'included_filename', documentation: i18n.winphone_tile_front_image_small.included_filename }
        ],
        signature: '(included_filename)'
    },
	winphone_tile_front_image_wide: {
        description: '[Function] (' + i18n_notice.deprecated + ')' + i18n.winphone_tile_front_image_wide.desc,
        available: datasimple.gms1d,
        parameters: [
            { label: 'included_filename', documentation: i18n.winphone_tile_front_image_wide.included_filename }
        ],
        signature: '(included_filename)'
    },
	winphone_tile_icon_image: {
        description: '[Function] (' + i18n_notice.deprecated + ')' + i18n.winphone_tile_icon_image.desc,
        available: datasimple.gms1d,
        parameters: [
            { label: 'included_filename', documentation: i18n.winphone_tile_icon_image.included_filename }
        ],
        signature: '(included_filename)'
    },
	winphone_tile_small_background_image: {
        description: '[Function] (' + i18n_notice.deprecated + ')' + i18n.winphone_tile_small_background_image.desc,
        available: datasimple.gms1d,
        parameters: [
            { label: 'included_filename', documentation: i18n.winphone_tile_small_background_image.included_filename }
        ],
        signature: '(included_filename)'
    },
	winphone_tile_small_icon_image: {
        description: '[Function] (' + i18n_notice.deprecated + ')' + i18n.winphone_tile_small_icon_image.desc,
        available: datasimple.gms1d,
        parameters: [
            { label: 'included_filename', documentation: i18n.winphone_tile_small_icon_image.included_filename }
        ],
        signature: '(included_filename)'
    },
	winphone_tile_title: {
        description: '[Function] (' + i18n_notice.deprecated + ')' + i18n.winphone_tile_title.desc,
        available: datasimple.gms1d,
        parameters: [
            { label: 'title', documentation: i18n.winphone_tile_title.title }
        ],
        signature: '(title)'
    },
	winphone_tile_wide_content: {
        description: '[Function] (' + i18n_notice.deprecated + ')' + i18n.winphone_tile_wide_content.desc,
        available: datasimple.gms1d,
        parameters: [
            { label: 'content', documentation: i18n.winphone_tile_wide_content.content },
            { label: 'index', documentation: i18n.winphone_tile_wide_content.index }
        ],
        signature: '(content, index)'
    },

    //Obsolete functions in new GameMaker Studio and GameMaker Studio 2
    device_ios_get_image: {
        description: '[Function] (' + i18n_notice.obsolete_new1_2 + ')' + i18n.device_ios_get_image.desc,
        available: datasimple.ob1
    },
	device_ios_get_imagename: {
        description: '[Function] (' + i18n_notice.obsolete_new1_2 + ')' + i18n.device_ios_get_imagename.desc,
        available: datasimple.ob1
    },
    sound_delete: {
        description: '[Function] (' + i18n_notice.obsolete_new1_2 + ')' + i18n.sound_delete.desc,
        available: datasimple.ob1,
        parameters: [
            { label: 'ind', documentation: i18n.sound_delete.ind }
        ],
        signature: '(ind)'
    },
    sound_discard: {
        description: '[Function] (' + i18n_notice.obsolete_new1_2 + ')' + i18n.sound_discard.desc,
        available: datasimple.ob1,
        parameters: [
            { label: 'ind', documentation: i18n.sound_discard.ind }
        ],
        signature: '(ind)'
    },
    sound_exists: {
        description: '[Function] (' + i18n_notice.obsolete_new1_2 + ')' + i18n.sound_exists.desc,
        available: datasimple.ob1,
        parameters: [
            { label: 'ind', documentation: i18n.sound_exists.ind }
        ],
        signature: '(ind)'
    },
    sound_get_kind: {
        description: '[Function] (' + i18n_notice.obsolete_new1_2 + ')' + i18n.sound_get_kind.desc,
        available: datasimple.ob1,
        parameters: [
            { label: 'ind', documentation: i18n.sound_get_kind.ind }
        ],
        signature: '(ind)'
    },
	sound_get_name: {
        description: '[Function] (' + i18n_notice.obsolete_new1_2 + ')' + i18n.sound_get_name.desc,
        available: datasimple.ob1,
        parameters: [
            { label: 'ind', documentation: i18n.sound_get_name.ind }
        ],
        signature: '(ind)'
    },
	sound_get_preload: {
        description: '[Function] (' + i18n_notice.obsolete_new1_2 + ')' + i18n.sound_get_preload.desc,
        available: datasimple.ob1,
        parameters: [
            { label: 'ind', documentation: i18n.sound_get_preload.ind }
        ],
        signature: '(ind)'
    },
    sound_restore: {
        description: '[Function] (' + i18n_notice.obsolete_new1_2 + ')' + i18n.sound_restore.desc,
        available: datasimple.ob1,
        parameters: [
            { label: 'ind', documentation: i18n.sound_restore.ind }
        ],
        signature: '(ind)'
    },
    sound_loop: {
        description: '[Function] (' + i18n_notice.obsolete_new1_2 + ')' + i18n.sound_loop.desc,
        available: datasimple.ob1,
        parameters: [
            { label: 'index', documentation: i18n.sound_loop.index }
        ],
        signature: '(index)'
    },
    sound_play: {
        description: '[Function] (' + i18n_notice.obsolete_new1_2 + ')' + i18n.sound_play.desc,
        available: datasimple.ob1,
        parameters: [
            { label: 'index', documentation: i18n.sound_play.index }
        ],
        signature: '(index)'
    },
    sound_stop: {
        description: '[Function] (' + i18n_notice.obsolete_new1_2 + ')' + i18n.sound_stop.desc,
        available: datasimple.ob1,
        parameters: [
            { label: 'index', documentation: i18n.sound_stop.index }
        ],
        signature: '(index)'
    },
	sound_stop_all: {
        description: '[Function] (' + i18n_notice.obsolete_new1_2 + ')' + i18n.sound_stop_all.desc,
        available: datasimple.ob1
    },
	sound_volume: {
        description: '[Function] (' + i18n_notice.obsolete_new1_2 + ')' + i18n.sound_volume.desc,
        available: datasimple.ob1,
        parameters: [
            { label: 'index', documentation: i18n.sound_volume.index },
            { label: 'value', documentation: i18n.sound_volume.value }
        ],
        signature: '(index, value)'
    },
	sound_global_volume: {
        description: '[Function] (' + i18n_notice.obsolete_new1_2 + ')' + i18n.sound_global_volume.desc,
        available: datasimple.ob1,
        parameters: [
            { label: 'value', documentation: i18n.sound_global_volume.value }
        ],
        signature: '(value)'
    },
	sound_fade: {
        description: '[Function] (' + i18n_notice.obsolete_new1_2 + ')' + i18n.sound_fade.desc,
        available: datasimple.ob1,
        parameters: [
            { label: 'index', documentation: i18n.sound_fade.index },
            { label: 'value', documentation: i18n.sound_fade.value },
            { label: 'time', documentation: i18n.sound_fade.time }
        ],
        signature: '(index, value, time)'
    },
	sound_isplaying: {
        description: '[Function] (' + i18n_notice.obsolete_new1_2 + ')' + i18n.sound_isplaying.desc,
        available: datasimple.ob1,
        parameters: [
            { label: 'index', documentation: i18n.sound_isplaying.index }
        ],
        signature: '(index)'
    },
    audio_music_is_playing: {
        description: '[Function] (' + i18n_notice.obsolete_new1_2 + ')' + i18n.audio_music_is_playing.desc,
        available: datasimple.ob1
    },
    audio_resume_music: {
        description: '[Function] (' + i18n_notice.obsolete_new1_2 + ')' + i18n.audio_resume_music.desc,
        available: datasimple.ob1
    },
    audio_pause_music: {
        description: '[Function] (' + i18n_notice.obsolete_new1_2 + ')' + i18n.audio_pause_music.desc,
        available: datasimple.ob1
    },
	audio_play_music: {
        description: '[Function] (' + i18n_notice.obsolete_new1_2 + ')' + i18n.audio_play_music.desc,
        available: datasimple.ob1,
        parameters: [
            { label: 'index', documentation: i18n.audio_play_music.index },
            { label: 'loops', documentation: i18n.audio_play_music.loops }
        ],
        signature: '(index, loops)'
    },
	audio_stop_music: {
        description: '[Function] (' + i18n_notice.obsolete_new1_2 + ')' + i18n.audio_stop_music.desc,
        available: datasimple.ob1
    },
	audio_music_gain: {
        description: '[Function] (' + i18n_notice.obsolete_new1_2 + ')' + i18n.audio_music_gain.desc,
        available: datasimple.ob1,
        parameters: [
            { label: 'value', documentation: i18n.audio_music_gain.value },
            { label: 'time', documentation: i18n.audio_music_gain.time }
        ],
        signature: '(value, time)'
    },
	ads_disable: {
        description: '[Function] (' + i18n_notice.obsolete_new1_2 + ')' + i18n.ads_disable.desc,
        available: datasimple.ob1,
        parameters: [
            { label: 'num', documentation: i18n.ads_disable.num }
        ],
		signature: '(num)'
	},
	ads_enable: {
        description: '[Function] (' + i18n_notice.obsolete_new1_2 + ')' + i18n.ads_enable.desc,
        available: datasimple.ob1,
        parameters: [
            { label: 'x', documentation: i18n.ads_enable.x },
            { label: 'y', documentation: i18n.ads_enable.y },
            { label: 'num', documentation: i18n.ads_enable.num }
        ],
		signature: '(x, y, num)'
	},
	ads_engagement_active: {
		description: '[Function] (' + i18n_notice.obsolete_new1_2 + ')' + i18n.ads_engagement_active.desc,
        available: datasimple.ob1
	},
	ads_engagement_available: {
		description: '[Function] (' + i18n_notice.obsolete_new1_2 + ')' + i18n.ads_engagement_available.desc,
        available: datasimple.ob1
	},
	ads_engagement_launch: {
		description: '[Function] (' + i18n_notice.obsolete_new1_2 + ')' + i18n.ads_engagement_launch.desc,
        available: datasimple.ob1
	},
	ads_event: {
        description: '[Function] (' + i18n_notice.obsolete_new1_2 + ')' + i18n.ads_event.desc,
        available: datasimple.ob1,
        parameters: [
            { label: 'stringid', documentation: i18n.ads_event.stringid }
        ],
		signature: '(stringid)'
	},
	ads_event_preload: {
        description: '[Function] (' + i18n_notice.obsolete_new1_2 + ')' + i18n.ads_event_preload.desc,
        available: datasimple.ob1,
        parameters: [
            { label: 'stringid', documentation: i18n.ads_event_preload.stringid }
        ],
		signature: '(stringid)'
	},
	ads_get_display_height: {
        description: '[Function] (' + i18n_notice.obsolete_new1_2 + ')' + i18n.ads_get_display_height.desc,
        available: datasimple.ob1,
        parameters: [
            { label: 'slotnum', documentation: i18n.ads_get_display_height.slotnum }
        ],
		signature: '(slotnum)'
	},
	ads_get_display_width: {
        description: '[Function] (' + i18n_notice.obsolete_new1_2 + ')' + i18n.ads_get_display_width.desc,
        available: datasimple.ob1,
        parameters: [
            { label: 'slotnum', documentation: i18n.ads_get_display_width.slotnum }
        ],
		signature: '(slotnum)'
	},
	ads_interstitial_available: {
		description: '[Function] (' + i18n_notice.obsolete_new1_2 + ')' + i18n.ads_interstitial_available.desc,
        available: datasimple.ob1
	},
	ads_interstitial_display: {
		description: '[Function] (' + i18n_notice.obsolete_new1_2 + ')' + i18n.ads_interstitial_display.desc,
        available: datasimple.ob1
	},
	ads_move: {
        description: '[Function] (' + i18n_notice.obsolete_new1_2 + ')' + i18n.ads_move.desc,
        available: datasimple.ob1,
        parameters: [
            { label: 'x', documentation: i18n.ads_move.x },
            { label: 'y', documentation: i18n.ads_move.y },
            { label: 'slotnum', documentation: i18n.ads_move.slotnum }
        ],
		signature: '(x, y, slotnum)'},
	ads_setup: {
        description: '[Function] (' + i18n_notice.obsolete_new1_2 + ')' + i18n.ads_setup.desc,
        available: datasimple.ob1,
        parameters: [
            { label: 'user_uuid', documentation: i18n.ads_setup.user_uuid },
            { label: 'ad_app_key', documentation: i18n.ads_setup.ad_app_key }
        ],
		signature: '(user_uuid, ad_app_key)'
	},
	ads_set_reward_callback: {
        description: '[Function] (' + i18n_notice.obsolete_new1_2 + ')' + i18n.ads_set_reward_callback.desc,
        available: datasimple.ob1,
        parameters: [
            { label: 'callback', documentation: i18n.ads_set_reward_callback.callback }
        ],
		signature: '(callback)'
	},
    playhaven_add_notification_badge: {
        description: '[Function] (' + i18n_notice.obsolete_new1_2 + ')' + i18n.playhaven_add_notification_badge.desc,
        available: datasimple.ob1,
        parameters: [
            { label: 'x', documentation: i18n.playhaven_add_notification_badge.x },
            { label: 'y', documentation: i18n.playhaven_add_notification_badge.y },
            { label: 'w', documentation: i18n.playhaven_add_notification_badge.w },
            { label: 'h', documentation: i18n.playhaven_add_notification_badge.h },
            { label: 'ident', documentation: i18n.playhaven_add_notification_badge.ident }
        ],
        signature: '(x, y, w, h, ident)'
    },
	playhaven_hide_notification_badge: {
        description: '[Function] (' + i18n_notice.obsolete_new1_2 + ')' + i18n.playhaven_hide_notification_badge.desc,
        available: datasimple.ob1,
        parameters: [
            { label: 'x', documentation: i18n.playhaven_hide_notification_badge.x },
            { label: 'y', documentation: i18n.playhaven_hide_notification_badge.y },
            { label: 'w', documentation: i18n.playhaven_hide_notification_badge.w },
            { label: 'h', documentation: i18n.playhaven_hide_notification_badge.h },
            { label: 'ident', documentation: i18n.playhaven_hide_notification_badge.ident }
        ],
        signature: '(x, y, w, h, ident)'
    },
	playhaven_position_notification_badge: {
        description: '[Function] (' + i18n_notice.obsolete_new1_2 + ')' + i18n.playhaven_position_notification_badge.desc,
        available: datasimple.ob1,
        parameters: [
            { label: 'x', documentation: i18n.playhaven_position_notification_badge.x },
            { label: 'y', documentation: i18n.playhaven_position_notification_badge.y },
            { label: 'w', documentation: i18n.playhaven_position_notification_badge.w },
            { label: 'h', documentation: i18n.playhaven_position_notification_badge.h }
        ],
        signature: '(x, y, w, h)'
    },
	playhaven_update_notification_badge: {
        description: '[Function] (' + i18n_notice.obsolete_new1_2 + ')' + i18n.playhaven_update_notification_badge.desc,
        available: datasimple.ob1,
        parameters: [
            { label: 'x', documentation: i18n.playhaven_update_notification_badge.x },
            { label: 'y', documentation: i18n.playhaven_update_notification_badge.y },
            { label: 'w', documentation: i18n.playhaven_update_notification_badge.w },
            { label: 'h', documentation: i18n.playhaven_update_notification_badge.h }
        ],
        signature: '(x, y, w, h)'
    },
    openfeint_accept_challenge: {
        description: '[Function] (' + i18n_notice.obsolete_new1_2 + ')' + i18n.openfeint_accept_challenge.desc,
        available: datasimple.ob1
    },
	openfeint_send_challenge: {
        description: '[Function] (' + i18n_notice.obsolete_new1_2 + ')' + i18n.openfeint_send_challenge.desc,
        available: datasimple.ob1,
        parameters: [
            { label: 'definition_string', documentation: i18n.openfeint_send_challenge.definition_string },
            { label: 'text_string', documentation: i18n.openfeint_send_challenge.text_string },
            { label: 'data_string', documentation: i18n.openfeint_send_challenge.data_string }
        ],
        signature: '(definition_string, text_string, data_string)'
    },
	openfeint_send_invite: {
        description: '[Function] (' + i18n_notice.obsolete_new1_2 + ')' + i18n.openfeint_send_invite.desc,
        available: datasimple.ob1,
        parameters: [
            { label: 'definition_string', documentation: i18n.openfeint_send_invite.definition_string }
        ],
        signature: '(definition_string)'
    },
	openfeint_send_result: {
        description: '[Function] (' + i18n_notice.obsolete_new1_2 + ')' + i18n.openfeint_send_result.desc,
        available: datasimple.ob1,
        parameters: [
            { label: 'challenge_result', documentation: i18n.openfeint_send_result.challenge_result },
            { label: 'definition_string', documentation: i18n.openfeint_send_result.definition_string }
        ],
        signature: '(challenge_result, description_string)'
    },
	openfeint_send_social: {
        description: '[Function] (' + i18n_notice.obsolete_new1_2 + ')' + i18n.openfeint_send_social.desc,
        available: datasimple.ob1,
        parameters: [
            { label: 'text_string', documentation: i18n.openfeint_send_social.text_string },
            { label: 'suggested_message', documentation: i18n.openfeint_send_social.suggested_message },
            { label: 'image_name', documentation: i18n.openfeint_send_social.image_name }
        ],
        signature: '(text_string, suggested_message, image_name)'
    },
	openfeint_set_url: {
        description: '[Function] (' + i18n_notice.obsolete_new1_2 + ')' + i18n.openfeint_set_url.desc,
        available: datasimple.ob1,
        parameters: [
            { label: 'url', documentation: i18n.openfeint_set_url.url }
        ],
        signature: '(url)'
    },
	openfeint_start: {
        description: '[Function] (' + i18n_notice.obsolete_new1_2 + ')' + i18n.openfeint_start.desc,
        available: datasimple.ob1
    },
	achievement_map_achievement: {
        description: '[Function] (' + i18n_notice.obsolete_new1_2 + ')' + i18n.achievement_map_achievement.desc,
        available: datasimple.ob1,
        parameters: [
            { label: 'gamecenter_string', documentation: i18n.achievement_map_achievement.gamecenter_string },
            { label: 'openfeint_string', documentation: i18n.achievement_map_achievement.openfeint_string }
        ],
		signature: '(gamecenter_string, openfeint_string)'
	},
	achievement_map_leaderboard: {
        description: '[Function] (' + i18n_notice.obsolete_new1_2 + ')' + i18n.achievement_map_leaderboard.desc,
        available: datasimple.ob1,
        parameters: [
            { label: 'gamecenter_string', documentation: i18n.achievement_map_leaderboard.gamecenter_string },
            { label: 'openfeint_string', documentation: i18n.achievement_map_leaderboard.openfeint_string },
            { label: 'leaderboard_type', documentation: i18n.achievement_map_leaderboard.leaderboard_type }
        ],
		signature: '(gamecenter_string, openfeint_string, leaderboard_type)'
	},
	achievement_is_online: {
		description: '[Function] (' + i18n_notice.obsolete_new1_2 + ')' + i18n.achievement_is_online.desc,
        available: datasimple.ob1
	},

    //Obsolete functions in GameMaker Studio 2
    background_add: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.background_add.desc,
        available: datasimple.ob2,
        parameters: [
            { label: 'fname', documentation: i18n.background_add.fname },
            { label: 'removeback', documentation: i18n.background_add.removeback },
            { label: 'smooth', documentation: i18n.background_add.smooth }
        ],
        signature: '(fname, removeback, smooth)'
    },
    background_assign: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.background_assign.desc,
        available: datasimple.ob2,
        parameters: [
            { label: 'ind', documentation: i18n.background_assign.ind },
            { label: 'source', documentation: i18n.background_assign.source }
        ],
        signature: '(ind, source)'
    },
    background_create_color: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.background_create_color.desc,
        available: datasimple.ob2,
        parameters: [
            { label: 'w', documentation: i18n.background_create_color.w },
            { label: 'h', documentation: i18n.background_create_color.h },
            { label: 'col', documentation: i18n.background_create_color.col }
        ],
        signature: '(w, h, col)'
    },
    background_create_colour: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.background_create_colour.desc,
        available: datasimple.ob2,
        parameters: [
            { label: 'w', documentation: i18n.background_create_colour.w },
            { label: 'h', documentation: i18n.background_create_colour.h },
            { label: 'col', documentation: i18n.background_create_colour.col }
        ],
        signature: '(w, h, col)'
    },
    background_create_from_surface: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.background_create_from_surface.desc,
        available: datasimple.ob2,
        parameters: [
            { label: 'id', documentation: i18n.background_create_from_surface.id },
            { label: 'x', documentation: i18n.background_create_from_surface.x },
            { label: 'y', documentation: i18n.background_create_from_surface.y },
            { label: 'w', documentation: i18n.background_create_from_surface.w },
            { label: 'h', documentation: i18n.background_create_from_surface.h },
            { label: 'removeback', documentation: i18n.background_create_from_surface.removeback },
            { label: 'smooth', documentation: i18n.background_create_from_surface.smooth }
        ],
        signature: '(id, x, y, w, h, removeback, smooth)'
    },
    background_create_gradient: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.background_create_gradient.desc,
        available: datasimple.ob2,
        parameters: [
            { label: 'w', documentation: i18n.background_create_gradient.w },
            { label: 'h', documentation: i18n.background_create_gradient.h },
            { label: 'col1', documentation: i18n.background_create_gradient.col1 },
            { label: 'col2', documentation: i18n.background_create_gradient.col2 },
            { label: 'kind', documentation: i18n.background_create_gradient.kind }
        ],
        signature: '(w, h, col1, col2, kind)'
    },
    background_delete: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.background_delete.desc,
        available: datasimple.ob2,
        parameters: [
            { label: 'ind', documentation: i18n.background_delete.ind }
        ],
        signature: '(ind)'
    },
    background_duplicate: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.background_duplicate.desc,
        available: datasimple.ob2,
        parameters: [
            { label: 'ind', documentation: i18n.background_duplicate.ind }
        ],
        signature: '(ind)'
    },
    background_exists: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.background_exists.desc,
        available: datasimple.ob2,
        parameters: [
            { label: 'ind', documentation: i18n.background_exists.ind }
        ],
        signature: '(ind)'
    },
    background_flush: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.background_flush.desc,
        available: datasimple.ob2,
        parameters: [
            { label: 'ind', documentation: i18n.background_flush.ind }
        ],
        signature: '(ind)'
    },
    background_flush_multi: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.background_flush_multi.desc,
        available: datasimple.ob2,
        parameters: [
            { label: 'indarray', documentation: i18n.background_flush_multi.indarray }
        ],
        signature: '(indarray)'
    },
    background_get_height: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.background_get_height.desc,
        available: datasimple.ob2,
        parameters: [
            { label: 'ind', documentation: i18n.background_get_height.ind }
        ],
        signature: '(ind)'
    },
    background_get_name: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.background_get_name.desc,
        available: datasimple.ob2,
        parameters: [
            { label: 'ind', documentation: i18n.background_get_name.ind }
        ],
        signature: '(ind)'
    },
    background_get_texture: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.background_get_texture.desc,
        available: datasimple.ob2,
        parameters: [
            { label: 'back', documentation: i18n.background_get_texture.back }
        ],
        signature: '(back)'
    },
    background_get_uvs: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.background_get_uvs.desc,
        available: datasimple.ob2,
        parameters: [
            { label: 'back', documentation: i18n.background_get_uvs.back }
        ],
        signature: '(back)'
    },
    background_get_width: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.background_get_width.desc,
        available: datasimple.ob2,
        parameters: [
            { label: 'ind', documentation: i18n.background_get_width.ind }
        ],
        signature: '(ind)'
    },
    background_prefetch: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.background_prefetch.desc,
        available: datasimple.ob2,
        parameters: [
            { label: 'ind', documentation: i18n.background_prefetch.ind }
        ],
        signature: '(ind)'
    },
    background_prefetch_multi: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.background_prefetch_multi.desc,
        available: datasimple.ob2,
        parameters: [
            { label: 'indarray', documentation: i18n.background_prefetch_multi.indarray }
        ],
        signature: '(indarray)'
    },
    background_replace: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.background_replace.desc,
        available: datasimple.ob2,
        parameters: [
            { label: 'ind', documentation: i18n.background_replace.ind },
            { label: 'fname', documentation: i18n.background_replace.fname },
            { label: 'removeback', documentation: i18n.background_replace.removeback },
            { label: 'smooth', documentation: i18n.background_replace.smooth }
        ],
        signature: '(ind, fname, removeback, smooth)'
    },
    background_replace_background: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.background_replace_background.desc,
        available: datasimple.ob2,
        parameters: [
            { label: 'ind', documentation: i18n.background_replace_background.ind },
            { label: 'fname', documentation: i18n.background_replace_background.fname }
        ],
        signature: '(ind, fname)'
    },
    background_save: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.background_save.desc,
        available: datasimple.ob2,
        parameters: [
            { label: 'ind', documentation: i18n.background_save.ind },
            { label: 'fname', documentation: i18n.background_save.fname }
        ],
        signature: '(ind, fname)'
    },
    background_set_alpha_from_background: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.background_set_alpha_from_background.desc,
        available: datasimple.ob2,
        parameters: [
            { label: 'ind', documentation: i18n.background_set_alpha_from_background.ind },
            { label: 'back', documentation: i18n.background_set_alpha_from_background.back }
        ],
        signature: '(ind, back)'
    },
    draw_background: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.draw_background.desc,
        available: datasimple.ob2,
        parameters: [
            { label: 'back', documentation: i18n.draw_background.back },
            { label: 'x', documentation: i18n.draw_background.x },
            { label: 'y', documentation: i18n.draw_background.y }
        ],
        signature: '(back, x, y)'
    },
    draw_background_ext: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.draw_background_ext.desc,
        available: datasimple.ob2,
        parameters: [
            { label: 'back', documentation: i18n.draw_background_ext.back },
            { label: 'x', documentation: i18n.draw_background_ext.x },
            { label: 'y', documentation: i18n.draw_background_ext.y },
            { label: 'xscale', documentation: i18n.draw_background_ext.xscale },
            { label: 'yscale', documentation: i18n.draw_background_ext.yscale },
            { label: 'rot', documentation: i18n.draw_background_ext.rot },
            { label: 'colour', documentation: i18n.draw_background_ext.colour },
            { label: 'alpha', documentation: i18n.draw_background_ext.alpha }
        ],
        signature: '(back, x, y, xscale, yscale, rot, colour, alpha)'
    },
    draw_background_general: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.draw_background_general.desc,
        available: datasimple.ob2,
        parameters: [
            { label: 'back', documentation: i18n.draw_background_general.back },
            { label: 'left', documentation: i18n.draw_background_general.left },
            { label: 'top', documentation: i18n.draw_background_general.top },
            { label: 'width', documentation: i18n.draw_background_general.width },
            { label: 'height', documentation: i18n.draw_background_general.height },
            { label: 'x', documentation: i18n.draw_background_general.x },
            { label: 'y', documentation: i18n.draw_background_general.y },
            { label: 'xscale', documentation: i18n.draw_background_general.xscale },
            { label: 'yscale', documentation: i18n.draw_background_general.yscale },
            { label: 'rot', documentation: i18n.draw_background_general.rot },
            { label: 'c1', documentation: i18n.draw_background_general.c1 },
            { label: 'c2', documentation: i18n.draw_background_general.c2 },
            { label: 'c3', documentation: i18n.draw_background_general.c3 },
            { label: 'c4', documentation: i18n.draw_background_general.c4 },
            { label: 'alpha', documentation: i18n.draw_background_general.alpha }
        ],
        signature: '(back, left, top, width, height, x, y, xscale, yscale, rot, c1, c2, c3, c4, alpha)'
    },
    draw_background_part: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.draw_background_part.desc,
        available: datasimple.ob2,
        parameters: [
            { label: 'back', documentation: i18n.draw_background_part.back },
            { label: 'left', documentation: i18n.draw_background_part.left },
            { label: 'top', documentation: i18n.draw_background_part.top },
            { label: 'width', documentation: i18n.draw_background_part.width },
            { label: 'height', documentation: i18n.draw_background_part.height },
            { label: 'x', documentation: i18n.draw_background_part.x },
            { label: 'y', documentation: i18n.draw_background_part.y }
        ],
        signature: '(back, left, top, width, height, x, y)'
    },
    draw_background_part_ext: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.draw_background_part_ext.desc,
        available: datasimple.ob2,
        parameters: [
            { label: 'back', documentation: i18n.draw_background_part_ext.back },
            { label: 'left', documentation: i18n.draw_background_part_ext.left },
            { label: 'top', documentation: i18n.draw_background_part_ext.top },
            { label: 'width', documentation: i18n.draw_background_part_ext.width },
            { label: 'height', documentation: i18n.draw_background_part_ext.height },
            { label: 'x', documentation: i18n.draw_background_part_ext.x },
            { label: 'y', documentation: i18n.draw_background_part_ext.y },
            { label: 'xscale', documentation: i18n.draw_background_part_ext.xscale },
            { label: 'yscale', documentation: i18n.draw_background_part_ext.yscale },
            { label: 'colour', documentation: i18n.draw_background_part_ext.colour },
            { label: 'alpha', documentation: i18n.draw_background_part_ext.alpha }
        ],
        signature: '(back, left, top, width, height, x, y, xscale, yscale, colour, alpha)'
    },
    draw_background_stretched: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.draw_background_stretched.desc,
        available: datasimple.ob2,
        parameters: [
            { label: 'back', documentation: i18n.draw_background_stretched.back },
            { label: 'x', documentation: i18n.draw_background_stretched.x },
            { label: 'y', documentation: i18n.draw_background_stretched.y },
            { label: 'w', documentation: i18n.draw_background_stretched.w },
            { label: 'h', documentation: i18n.draw_background_stretched.h }
        ],
        signature: '(back, x, y, w, h)'
    },
    draw_background_stretched_ext: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.draw_background_stretched_ext.desc,
        available: datasimple.ob2,
        parameters: [
            { label: 'back', documentation: i18n.draw_background_stretched_ext.back },
            { label: 'x', documentation: i18n.draw_background_stretched_ext.x },
            { label: 'y', documentation: i18n.draw_background_stretched_ext.y },
            { label: 'w', documentation: i18n.draw_background_stretched_ext.w },
            { label: 'h', documentation: i18n.draw_background_stretched_ext.h },
            { label: 'colour', documentation: i18n.draw_background_stretched_ext.colour },
            { label: 'alpha', documentation: i18n.draw_background_stretched_ext.alpha }
        ],
        signature: '(back, x, y, w, h, colour, alpha)'
    },
    draw_background_tiled: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.draw_background_tiled.desc,
        available: datasimple.ob2,
        parameters: [
            { label: 'back', documentation: i18n.draw_background_tiled.back },
            { label: 'x', documentation: i18n.draw_background_tiled.x },
            { label: 'y', documentation: i18n.draw_background_tiled.y }
        ],
        signature: '(back, x, y)'
    },
    draw_background_tiled_ext: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.draw_background_tiled_ext.desc,
        available: datasimple.ob2,
        parameters: [
            { label: 'back', documentation: i18n.draw_background_tiled_ext.back },
            { label: 'x', documentation: i18n.draw_background_tiled_ext.x },
            { label: 'y', documentation: i18n.draw_background_tiled_ext.y },
            { label: 'xscale', documentation: i18n.draw_background_tiled_ext.xscale },
            { label: 'yscale', documentation: i18n.draw_background_tiled_ext.yscale },
            { label: 'colour', documentation: i18n.draw_background_tiled_ext.colour },
            { label: 'alpha', documentation: i18n.draw_background_tiled_ext.alpha }
        ],
        signature: '(back, x, y, xscale, yscale, colour, alpha)'
    },
    room_set_background: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.room_set_background.desc,
        available: datasimple.ob2,
        parameters: [
            { label: 'ind', documentation: i18n.room_set_background.ind },
            { label: 'bind', documentation: i18n.room_set_background.bind },
            { label: 'vis', documentation: i18n.room_set_background.vis },
            { label: 'fore', documentation: i18n.room_set_background.fore },
            { label: 'back', documentation: i18n.room_set_background.back },
            { label: 'x', documentation: i18n.room_set_background.x },
            { label: 'y', documentation: i18n.room_set_background.y },
            { label: 'htiled', documentation: i18n.room_set_background.htiled },
            { label: 'vtiled', documentation: i18n.room_set_background.vtiled },
            { label: 'hspeed', documentation: i18n.room_set_background.hspeed },
            { label: 'vspeed', documentation: i18n.room_set_background.vspeed },
            { label: 'alpha', documentation: i18n.room_set_background.alpha }
        ],
        signature: '(ind, bind, vis, fore, back, x, y, htiled, vtiled, hspeed, vspeed, alpha)'
    },
    room_tile_add: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.room_tile_add.desc,
        available: datasimple.ob2,
        parameters: [
            { label: 'ind', documentation: i18n.room_tile_add.ind },
            { label: 'back', documentation: i18n.room_tile_add.back },
            { label: 'left', documentation: i18n.room_tile_add.left },
            { label: 'top', documentation: i18n.room_tile_add.top },
            { label: 'width', documentation: i18n.room_tile_add.width },
            { label: 'height', documentation: i18n.room_tile_add.height },
            { label: 'x', documentation: i18n.room_tile_add.x },
            { label: 'y', documentation: i18n.room_tile_add.y },
            { label: 'depth', documentation: i18n.room_tile_add.depth }
        ],
        signature: '(ind, back, left, top, width, height, x, y, depth)'
    },
    room_tile_add_ext: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.room_tile_add_ext.desc,
        available: datasimple.ob2,
        parameters: [
            { label: 'ind', documentation: i18n.room_tile_add_ext.ind },
            { label: 'back', documentation: i18n.room_tile_add_ext.back },
            { label: 'left', documentation: i18n.room_tile_add_ext.left },
            { label: 'top', documentation: i18n.room_tile_add_ext.top },
            { label: 'width', documentation: i18n.room_tile_add_ext.width },
            { label: 'height', documentation: i18n.room_tile_add_ext.height },
            { label: 'x', documentation: i18n.room_tile_add_ext.x },
            { label: 'y', documentation: i18n.room_tile_add_ext.y },
            { label: 'depth', documentation: i18n.room_tile_add_ext.depth },
            { label: 'xscale', documentation: i18n.room_tile_add_ext.xscale },
            { label: 'yscale', documentation: i18n.room_tile_add_ext.yscale },
            { label: 'alpha', documentation: i18n.room_tile_add_ext.alpha }
        ],
        signature: '(ind, back, left, top, width, height, x, y, depth, xscale, yscale, alpha)'
    },
    room_tile_clear: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.room_tile_clear.desc,
        available: datasimple.ob2,
        parameters: [
            { label: 'ind', documentation: i18n.room_tile_clear.ind }
        ],
        signature: '(ind)'
    },
    tile_add: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.tile_add.desc,
        available: datasimple.ob2,
        parameters: [
            { label: 'background', documentation: i18n.tile_add.background },
            { label: 'left', documentation: i18n.tile_add.left },
            { label: 'top', documentation: i18n.tile_add.top },
            { label: 'width', documentation: i18n.tile_add.width },
            { label: 'height', documentation: i18n.tile_add.height },
            { label: 'x', documentation: i18n.tile_add.x },
            { label: 'y', documentation: i18n.tile_add.y },
            { label: 'depth', documentation: i18n.tile_add.depth }
        ],
        signature: '(background, left, top, width, height, x, y, depth)'
    },
    tile_delete: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.tile_delete.desc,
        available: datasimple.ob2,
        parameters: [
            { label: 'id', documentation: i18n.tile_delete.id }
        ],
        signature: '(id)'
    },
    tile_exists: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.tile_exists.desc,
        available: datasimple.ob2,
        parameters: [
            { label: 'id', documentation: i18n.tile_exists.id }
        ],
        signature: '(id)'
    },
    tile_get_alpha: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.tile_get_alpha.desc,
        available: datasimple.ob2,
        parameters: [
            { label: 'id', documentation: i18n.tile_get_alpha.id }
        ],
        signature: '(id)'
    },
    tile_get_background: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.tile_get_background.desc,
        available: datasimple.ob2,
        parameters: [
            { label: 'id', documentation: i18n.tile_get_background.id }
        ],
        signature: '(id)'
    },
    tile_get_blend: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.tile_get_blend.desc,
        available: datasimple.ob2,
        parameters: [
            { label: 'id', documentation: i18n.tile_get_blend.id }
        ],
        signature: '(id)'
    },
    tile_get_count: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.tile_get_count.desc,
        available: datasimple.ob2
    },
    tile_get_depth: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.tile_get_depth.desc,
        available: datasimple.ob2,
        parameters: [
            { label: 'id', documentation: i18n.tile_get_depth.id }
        ],
        signature: '(id)'
    },
    tile_get_height: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.tile_get_height.desc,
        available: datasimple.ob2,
        parameters: [
            { label: 'id', documentation: i18n.tile_get_height.id }
        ],
        signature: '(id)'
    },
    tile_get_id: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.tile_get_id.desc,
        available: datasimple.ob2,
        parameters: [
            { label: 'index', documentation: i18n.tile_get_id.index }
        ],
        signature: '(index)'
    },
    tile_get_ids: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.tile_get_ids.desc,
        available: datasimple.ob2
    },
    tile_get_ids_at_depth: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.tile_get_ids_at_depth.desc,
        available: datasimple.ob2,
        parameters: [
            { label: 'depth', documentation: i18n.tile_get_ids_at_depth.depth }
        ],
        signature: '(depth)'
    },
    tile_get_left: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.tile_get_left.desc,
        available: datasimple.ob2,
        parameters: [
            { label: 'id', documentation: i18n.tile_get_left.id }
        ],
        signature: '(id)'
    },
    tile_get_top: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.tile_get_top.desc,
        available: datasimple.ob2,
        parameters: [
            { label: 'id', documentation: i18n.tile_get_top.id }
        ],
        signature: '(id)'
    },
    tile_get_visible: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.tile_get_visible.desc,
        available: datasimple.ob2,
        parameters: [
            { label: 'id', documentation: i18n.tile_get_visible.id }
        ],
        signature: '(id)'
    },
    tile_get_width: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.tile_get_width.desc,
        available: datasimple.ob2,
        parameters: [
            { label: 'id', documentation: i18n.tile_get_width.id }
        ],
        signature: '(id)'
    },
    tile_get_x: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.tile_get_x.desc,
        available: datasimple.ob2,
        parameters: [
            { label: 'id', documentation: i18n.tile_get_x.id }
        ],
        signature: '(id)'
    },
    tile_get_xscale: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.tile_get_xscale.desc,
        available: datasimple.ob2,
        parameters: [
            { label: 'id', documentation: i18n.tile_get_xscale.id }
        ],
        signature: '(id)'
    },
    tile_get_y: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.tile_get_y.desc,
        available: datasimple.ob2,
        parameters: [
            { label: 'id', documentation: i18n.tile_get_y.id }
        ],
        signature: '(id)'
    },
    tile_get_yscale: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.tile_get_yscale.desc,
        available: datasimple.ob2,
        parameters: [
            { label: 'id', documentation: i18n.tile_get_yscale.id }
        ],
        signature: '(id)'
    },
    tile_layer_delete: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.tile_layer_delete.desc,
        available: datasimple.ob2,
        parameters: [
            { label: 'depth', documentation: i18n.tile_layer_delete.depth }
        ],
        signature: '(depth)'
    },
    tile_layer_delete_at: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.tile_layer_delete_at.desc,
        available: datasimple.ob2,
        parameters: [
            { label: 'depth', documentation: i18n.tile_layer_delete_at.depth },
            { label: 'x', documentation: i18n.tile_layer_delete_at.x },
            { label: 'y', documentation: i18n.tile_layer_delete_at.y }
        ],
        signature: '(depth, x, y)'
    },
    tile_layer_depth: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.tile_layer_depth.desc,
        available: datasimple.ob2,
        parameters: [
            { label: 'depth', documentation: i18n.tile_layer_depth.depth },
            { label: 'newdepth', documentation: i18n.tile_layer_depth.newdepth }
        ],
        signature: '(depth, newdepth)'
    },
    tile_layer_find: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.tile_layer_find.desc,
        available: datasimple.ob2,
        parameters: [
            { label: 'depth', documentation: i18n.tile_layer_find.depth },
            { label: 'x', documentation: i18n.tile_layer_find.x },
            { label: 'y', documentation: i18n.tile_layer_find.y }
        ],
        signature: '(depth, x, y)'
    },
    tile_layer_hide: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.tile_layer_hide.desc,
        available: datasimple.ob2,
        parameters: [
            { label: 'depth', documentation: i18n.tile_layer_hide.depth }
        ],
        signature: '(depth)'
    },
    tile_layer_shift: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.tile_layer_shift.desc,
        available: datasimple.ob2,
        parameters: [
            { label: 'depth', documentation: i18n.tile_layer_shift.depth },
            { label: 'x', documentation: i18n.tile_layer_shift.x },
            { label: 'y', documentation: i18n.tile_layer_shift.y }
        ],
        signature: '(depth, x, y)'
    },
    tile_layer_show: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.tile_layer_show.desc,
        available: datasimple.ob2,
        parameters: [
            { label: 'depth', documentation: i18n.tile_layer_show.depth }
        ],
        signature: '(depth)'
    },
    tile_set_alpha: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.tile_set_alpha.desc,
        available: datasimple.ob2,
        parameters: [
            { label: 'id', documentation: i18n.tile_set_alpha.id },
            { label: 'alpha', documentation: i18n.tile_set_alpha.alpha }
        ],
        signature: '(id, alpha)'
    },
    tile_set_background: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.tile_set_background.desc,
        available: datasimple.ob2,
        parameters: [
            { label: 'id', documentation: i18n.tile_set_background.id },
            { label: 'background', documentation: i18n.tile_set_background.background }
        ],
        signature: '(id, background)'
    },
    tile_set_blend: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.tile_set_blend.desc,
        available: datasimple.ob2,
        parameters: [
            { label: 'id', documentation: i18n.tile_set_blend.id },
            { label: 'colour', documentation: i18n.tile_set_blend.colour }
        ],
        signature: '(id, colour)'
    },
    tile_set_depth: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.tile_set_depth.desc,
        available: datasimple.ob2,
        parameters: [
            { label: 'id', documentation: i18n.tile_set_depth.id },
            { label: 'depth', documentation: i18n.tile_set_depth.depth }
        ],
        signature: '(id, depth)'
    },
    tile_set_position: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.tile_set_position.desc,
        available: datasimple.ob2,
        parameters: [
            { label: 'id', documentation: i18n.tile_set_position.id },
            { label: 'x', documentation: i18n.tile_set_position.x },
            { label: 'y', documentation: i18n.tile_set_position.y }
        ],
        signature: '(id, x, y)'
    },
    tile_set_region: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.tile_set_region.desc,
        available: datasimple.ob2,
        parameters: [
            { label: 'id', documentation: i18n.tile_set_region.id },
            { label: 'left', documentation: i18n.tile_set_region.left },
            { label: 'top', documentation: i18n.tile_set_region.top },
            { label: 'width', documentation: i18n.tile_set_region.width },
            { label: 'height', documentation: i18n.tile_set_region.height }
        ],
        signature: '(id, left, top, width, height)'
    },
    tile_set_scale: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.tile_set_scale.desc,
        available: datasimple.ob2,
        parameters: [
            { label: 'id', documentation: i18n.tile_set_scale.id },
            { label: 'xscale', documentation: i18n.tile_set_scale.xscale },
            { label: 'yscale', documentation: i18n.tile_set_scale.yscale }
        ],
        signature: '(id, xscale, yscale)'
    },
    tile_set_visible: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.tile_set_visible.desc,
        available: datasimple.ob2,
        parameters: [
            { label: 'id', documentation: i18n.tile_set_visible.id },
            { label: 'visible', documentation: i18n.tile_set_visible.visible }
        ],
        signature: '(id, visible)'
    },
    object_get_depth: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.object_get_depth.desc,
        available: datasimple.ob2,
        parameters: [
            { label: 'ind', documentation: i18n.object_get_depth.ind }
        ],
        signature: '(ind)'
    },
    object_set_depth: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.object_set_depth.desc,
        available: datasimple.ob2,
        parameters: [
            { label: 'ind', documentation: i18n.object_set_depth.ind },
            { label: 'depth', documentation: i18n.object_set_depth.depth }
        ],
        signature: '(ind, depth)'
    },
    d3d_draw_block: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.d3d_draw_block.desc,
        available: datasimple.ob2,
        parameters: [
            { label: 'x1', documentation: i18n.d3d_draw_block.x1 },
            { label: 'y1', documentation: i18n.d3d_draw_block.y1 },
            { label: 'z1', documentation: i18n.d3d_draw_block.z1 },
            { label: 'x2', documentation: i18n.d3d_draw_block.x2 },
            { label: 'y2', documentation: i18n.d3d_draw_block.y2 },
            { label: 'z2', documentation: i18n.d3d_draw_block.z2 },
            { label: 'texid', documentation: i18n.d3d_draw_block.texid },
            { label: 'hrepeat', documentation: i18n.d3d_draw_block.hrepeat },
            { label: 'vrepeat', documentation: i18n.d3d_draw_block.vrepeat }
        ],
        signature: '(x1, y1, z1, x2, y2, z2, texid, hrepeat, vrepeat)'
    },
    d3d_draw_cone: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.d3d_draw_cone.desc,
        available: datasimple.ob2,
        parameters: [
            { label: 'x1', documentation: i18n.d3d_draw_cone.x1 },
            { label: 'y1', documentation: i18n.d3d_draw_cone.y1 },
            { label: 'z1', documentation: i18n.d3d_draw_cone.z1 },
            { label: 'x2', documentation: i18n.d3d_draw_cone.x2 },
            { label: 'y2', documentation: i18n.d3d_draw_cone.y2 },
            { label: 'z2', documentation: i18n.d3d_draw_cone.z2 },
            { label: 'texid', documentation: i18n.d3d_draw_cone.texid },
            { label: 'hrepeat', documentation: i18n.d3d_draw_cone.hrepeat },
            { label: 'vrepeat', documentation: i18n.d3d_draw_cone.vrepeat },
            { label: 'closed', documentation: i18n.d3d_draw_cone.closed },
            { label: 'steps', documentation: i18n.d3d_draw_cone.steps }
        ],
        signature: '(x1, y1, z1, x2, y2, z2, texid, hrepeat, vrepeat, closed, steps)'
    },
    d3d_draw_cylinder: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.d3d_draw_cylinder.desc,
        available: datasimple.ob2,
        parameters: [
            { label: 'x1', documentation: i18n.d3d_draw_cylinder.x1 },
            { label: 'y1', documentation: i18n.d3d_draw_cylinder.y1 },
            { label: 'z1', documentation: i18n.d3d_draw_cylinder.z1 },
            { label: 'x2', documentation: i18n.d3d_draw_cylinder.x2 },
            { label: 'y2', documentation: i18n.d3d_draw_cylinder.y2 },
            { label: 'z2', documentation: i18n.d3d_draw_cylinder.z2 },
            { label: 'texid', documentation: i18n.d3d_draw_cylinder.texid },
            { label: 'hrepeat', documentation: i18n.d3d_draw_cylinder.hrepeat },
            { label: 'vrepeat', documentation: i18n.d3d_draw_cylinder.vrepeat },
            { label: 'closed', documentation: i18n.d3d_draw_cylinder.closed },
            { label: 'steps', documentation: i18n.d3d_draw_cylinder.steps }
        ],
        signature: '(x1, y1, z1, x2, y2, z2, texid, hrepeat, vrepeat, closed, steps)'
    },
    d3d_draw_ellipsoid: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.d3d_draw_ellipsoid.desc,
        available: datasimple.ob2,
        parameters: [
            { label: 'x1', documentation: i18n.d3d_draw_ellipsoid.x1 },
            { label: 'y1', documentation: i18n.d3d_draw_ellipsoid.y1 },
            { label: 'z1', documentation: i18n.d3d_draw_ellipsoid.z1 },
            { label: 'x2', documentation: i18n.d3d_draw_ellipsoid.x2 },
            { label: 'y2', documentation: i18n.d3d_draw_ellipsoid.y2 },
            { label: 'z2', documentation: i18n.d3d_draw_ellipsoid.z2 },
            { label: 'texid', documentation: i18n.d3d_draw_ellipsoid.texid },
            { label: 'hrepeat', documentation: i18n.d3d_draw_ellipsoid.hrepeat },
            { label: 'vrepeat', documentation: i18n.d3d_draw_ellipsoid.vrepeat },
            { label: 'closed', documentation: i18n.d3d_draw_ellipsoid.closed },
            { label: 'steps', documentation: i18n.d3d_draw_ellipsoid.steps }
        ],
        signature: '(x1, y1, z1, x2, y2, z2, texid, hrepeat, vrepeat, closed, steps)'
    },
    d3d_draw_floor: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.d3d_draw_floor.desc,
        available: datasimple.ob2,
        parameters: [
            { label: 'x1', documentation: i18n.d3d_draw_floor.x1 },
            { label: 'y1', documentation: i18n.d3d_draw_floor.y1 },
            { label: 'z1', documentation: i18n.d3d_draw_floor.z1 },
            { label: 'x2', documentation: i18n.d3d_draw_floor.x2 },
            { label: 'y2', documentation: i18n.d3d_draw_floor.y2 },
            { label: 'z2', documentation: i18n.d3d_draw_floor.z2 },
            { label: 'texid', documentation: i18n.d3d_draw_floor.texid },
            { label: 'hrepeat', documentation: i18n.d3d_draw_floor.hrepeat },
            { label: 'vrepeat', documentation: i18n.d3d_draw_floor.vrepeat }
        ],
        signature: '(x1, y1, z1, x2, y2, z2, texid, hrepeat, vrepeat)'
    },
    d3d_draw_wall: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.d3d_draw_wall.desc,
        available: datasimple.ob2,
        parameters: [
            { label: 'x1', documentation: i18n.d3d_draw_wall.x1 },
            { label: 'y1', documentation: i18n.d3d_draw_wall.y1 },
            { label: 'z1', documentation: i18n.d3d_draw_wall.z1 },
            { label: 'x2', documentation: i18n.d3d_draw_wall.x2 },
            { label: 'y2', documentation: i18n.d3d_draw_wall.y2 },
            { label: 'z2', documentation: i18n.d3d_draw_wall.z2 },
            { label: 'texid', documentation: i18n.d3d_draw_wall.texid },
            { label: 'hrepeat', documentation: i18n.d3d_draw_wall.hrepeat },
            { label: 'vrepeat', documentation: i18n.d3d_draw_wall.vrepeat }
        ],
        signature: '(x1, y1, z1, x2, y2, z2, texid, hrepeat, vrepeat)'
    },
    d3d_end: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.d3d_end.desc,
        available: datasimple.ob2
    },
    d3d_light_define_ambient: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.d3d_light_define_ambient.desc,
        available: datasimple.ob2,
        parameters: [
            { label: 'col', documentation: i18n.d3d_light_define_ambient.col }
        ],
        signature: '(col)'
    },
    d3d_light_define_direction: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.d3d_light_define_direction.desc,
        available: datasimple.ob2,
        parameters: [
            { label: 'ind', documentation: i18n.d3d_light_define_direction.ind },
            { label: 'dx', documentation: i18n.d3d_light_define_direction.dx },
            { label: 'dy', documentation: i18n.d3d_light_define_direction.dy },
            { label: 'dz', documentation: i18n.d3d_light_define_direction.dz },
            { label: 'col', documentation: i18n.d3d_light_define_direction.col }
        ],
        signature: '(ind, dx, dy, dz, col)'
    },
    d3d_light_define_point: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.d3d_light_define_point.desc,
        available: datasimple.ob2,
        parameters: [
            { label: 'ind', documentation: i18n.d3d_light_define_point.ind },
            { label: 'x', documentation: i18n.d3d_light_define_point.x },
            { label: 'y', documentation: i18n.d3d_light_define_point.y },
            { label: 'z', documentation: i18n.d3d_light_define_point.z },
            { label: 'range', documentation: i18n.d3d_light_define_point.range },
            { label: 'col', documentation: i18n.d3d_light_define_point.col }
        ],
        signature: '(ind, x, y, z, range, col)'
    },
    d3d_light_enable: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.d3d_light_enable.desc,
        available: datasimple.ob2,
        parameters: [
            { label: 'ind', documentation: i18n.d3d_light_enable.ind },
            { label: 'enable', documentation: i18n.d3d_light_enable.enable }
        ],
        signature: '(ind, enable)'
    },
    d3d_model_block: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.d3d_model_block.desc,
        available: datasimple.ob2,
        parameters: [
            { label: 'ind', documentation: i18n.d3d_model_block.ind },
            { label: 'x1', documentation: i18n.d3d_model_block.x1 },
            { label: 'y1', documentation: i18n.d3d_model_block.y1 },
            { label: 'z1', documentation: i18n.d3d_model_block.z1 },
            { label: 'x2', documentation: i18n.d3d_model_block.x2 },
            { label: 'y2', documentation: i18n.d3d_model_block.y2 },
            { label: 'z2', documentation: i18n.d3d_model_block.z2 },
            { label: 'hrepeat', documentation: i18n.d3d_model_block.hrepeat },
            { label: 'vrepeat', documentation: i18n.d3d_model_block.vrepeat }
        ],
        signature: '(ind, x1, y1, z1, x2, y2, z2, hrepeat, vrepeat)'
    },
    d3d_model_clear: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.d3d_model_clear.desc,
        available: datasimple.ob2,
        parameters: [
            { label: 'ind', documentation: i18n.d3d_model_clear.ind }
        ],
        signature: '(ind)'
    },
    d3d_model_cone: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.d3d_model_cone.desc,
        available: datasimple.ob2,
        parameters: [
            { label: 'ind', documentation: i18n.d3d_model_cone.ind },
            { label: 'x1', documentation: i18n.d3d_model_cone.x1 },
            { label: 'y1', documentation: i18n.d3d_model_cone.y1 },
            { label: 'z1', documentation: i18n.d3d_model_cone.z1 },
            { label: 'x2', documentation: i18n.d3d_model_cone.x2 },
            { label: 'y2', documentation: i18n.d3d_model_cone.y2 },
            { label: 'z2', documentation: i18n.d3d_model_cone.z2 },
            { label: 'hrepeat', documentation: i18n.d3d_model_cone.hrepeat },
            { label: 'vrepeat', documentation: i18n.d3d_model_cone.vrepeat },
            { label: 'closed', documentation: i18n.d3d_model_cone.closed },
            { label: 'steps', documentation: i18n.d3d_model_cone.steps }
        ],
        signature: '(ind, x1, y1, z1, x2, y2, z2, hrepeat, vrepeat, closed, steps)'
    },
    d3d_model_create: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.d3d_model_create.desc,
        available: datasimple.ob2
    },
    d3d_model_cylinder: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.d3d_model_cylinder.desc,
        available: datasimple.ob2,
        parameters: [
            { label: 'ind', documentation: i18n.d3d_model_cylinder.ind },
            { label: 'x1', documentation: i18n.d3d_model_cylinder.x1 },
            { label: 'y1', documentation: i18n.d3d_model_cylinder.y1 },
            { label: 'z1', documentation: i18n.d3d_model_cylinder.z1 },
            { label: 'x2', documentation: i18n.d3d_model_cylinder.x2 },
            { label: 'y2', documentation: i18n.d3d_model_cylinder.y2 },
            { label: 'z2', documentation: i18n.d3d_model_cylinder.z2 },
            { label: 'hrepeat', documentation: i18n.d3d_model_cylinder.hrepeat },
            { label: 'vrepeat', documentation: i18n.d3d_model_cylinder.vrepeat },
            { label: 'closed', documentation: i18n.d3d_model_cylinder.closed },
            { label: 'steps', documentation: i18n.d3d_model_cylinder.steps }
        ],
        signature: '(ind, x1, y1, z1, x2, y2, z2, hrepeat, vrepeat, closed, steps)'
    },
    d3d_model_destroy: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.d3d_model_destroy.desc,
        available: datasimple.ob2
    },
    d3d_model_draw: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.d3d_model_draw.desc,
        available: datasimple.ob2,
        parameters: [
            { label: 'ind', documentation: i18n.d3d_model_draw.ind },
            { label: 'x', documentation: i18n.d3d_model_draw.x },
            { label: 'y', documentation: i18n.d3d_model_draw.y },
            { label: 'z', documentation: i18n.d3d_model_draw.z },
            { label: 'texid', documentation: i18n.d3d_model_draw.texid }
        ],
        signature: '(ind, x, y, z, texid)'
    },
    d3d_model_ellipsoid: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.d3d_model_ellipsoid.desc,
        available: datasimple.ob2,
        parameters: [
            { label: 'ind', documentation: i18n.d3d_model_ellipsoid.ind },
            { label: 'x1', documentation: i18n.d3d_model_ellipsoid.x1 },
            { label: 'y1', documentation: i18n.d3d_model_ellipsoid.y1 },
            { label: 'z1', documentation: i18n.d3d_model_ellipsoid.z1 },
            { label: 'x2', documentation: i18n.d3d_model_ellipsoid.x2 },
            { label: 'y2', documentation: i18n.d3d_model_ellipsoid.y2 },
            { label: 'z2', documentation: i18n.d3d_model_ellipsoid.z2 },
            { label: 'hrepeat', documentation: i18n.d3d_model_ellipsoid.hrepeat },
            { label: 'vrepeat', documentation: i18n.d3d_model_ellipsoid.vrepeat },
            { label: 'closed', documentation: i18n.d3d_model_ellipsoid.closed }
        ],
        signature: '(ind, x1, y1, z1, x2, y2, z2, hrepeat, vrepeat, steps)'
    },
    d3d_model_floor: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.d3d_model_floor.desc,
        available: datasimple.ob2,
        parameters: [
            { label: 'ind', documentation: i18n.d3d_model_floor.ind },
            { label: 'x1', documentation: i18n.d3d_model_floor.x1 },
            { label: 'y1', documentation: i18n.d3d_model_floor.y1 },
            { label: 'z1', documentation: i18n.d3d_model_floor.z1 },
            { label: 'x2', documentation: i18n.d3d_model_floor.x2 },
            { label: 'y2', documentation: i18n.d3d_model_floor.y2 },
            { label: 'z2', documentation: i18n.d3d_model_floor.z2 },
            { label: 'hrepeat', documentation: i18n.d3d_model_floor.hrepeat },
            { label: 'vrepeat', documentation: i18n.d3d_model_floor.vrepeat }
        ],
        signature: '(ind, x1, y1, z1, x2, y2, z2, hrepeat, vrepeat)'
    },
    d3d_model_load: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.d3d_model_load.desc,
        available: datasimple.ob2,
        parameters: [
            { label: 'ind', documentation: i18n.d3d_model_load.ind },
            { label: 'fname', documentation: i18n.d3d_model_load.fname }
        ],
        signature: '(ind, fname)'
    },
    d3d_model_primitive_begin: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.d3d_model_primitive_begin.desc,
        available: datasimple.ob2,
        parameters: [
            { label: 'ind', documentation: i18n.d3d_model_primitive_begin.ind },
            { label: 'kind', documentation: i18n.d3d_model_primitive_begin.kind }
        ],
        signature: '(ind, kind)'
    },
    d3d_model_primitive_end: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.d3d_model_primitive_end.desc,
        available: datasimple.ob2,
        parameters: [
            { label: 'ind', documentation: i18n.d3d_model_primitive_end.ind }
        ],
        signature: '(ind)'
    },
    d3d_model_save: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.d3d_model_save.desc,
        available: datasimple.ob2,
        parameters: [
            { label: 'ind', documentation: i18n.d3d_model_save.ind },
            { label: 'fname', documentation: i18n.d3d_model_save.fname }
        ], 
        signature: '(ind, fname)'
    },
    d3d_model_vertex: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.d3d_model_vertex.desc,
        available: datasimple.ob2,
        parameters: [
            { label: 'ind', documentation: i18n.d3d_model_vertex.ind },
            { label: 'x', documentation: i18n.d3d_model_vertex.x },
            { label: 'y', documentation: i18n.d3d_model_vertex.y },
            { label: 'z', documentation: i18n.d3d_model_vertex.z }
        ],
        signature: '(ind, x, y, z)'
    },
    d3d_model_vertex_color: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.d3d_model_vertex_color.desc,
        available: datasimple.ob2,
        parameters: [
            { label: 'ind', documentation: i18n.d3d_model_vertex_color.ind },
            { label: 'x', documentation: i18n.d3d_model_vertex_color.x },
            { label: 'y', documentation: i18n.d3d_model_vertex_color.y },
            { label: 'z', documentation: i18n.d3d_model_vertex_color.z },
            { label: 'col', documentation: i18n.d3d_model_vertex_color.col },
            { label: 'alpha', documentation: i18n.d3d_model_vertex_color.alpha }
        ],
        signature: '(ind, x, y, z, col, alpha)'
    },
    d3d_model_vertex_colour: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.d3d_model_vertex_colour.desc,
        available: datasimple.ob2,
        parameters: [
            { label: 'ind', documentation: i18n.d3d_model_vertex_colour.ind },
            { label: 'x', documentation: i18n.d3d_model_vertex_colour.x },
            { label: 'y', documentation: i18n.d3d_model_vertex_colour.y },
            { label: 'z', documentation: i18n.d3d_model_vertex_colour.z },
            { label: 'col', documentation: i18n.d3d_model_vertex_colour.col },
            { label: 'alpha', documentation: i18n.d3d_model_vertex_colour.alpha }
        ],
        signature: '(ind, x, y, z, col, alpha)'
    },
    d3d_model_vertex_normal: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.d3d_model_vertex_normal.desc,
        available: datasimple.ob2,
        parameters: [
            { label: 'ind', documentation: i18n.d3d_model_vertex_normal.ind },
            { label: 'x', documentation: i18n.d3d_model_vertex_normal.x },
            { label: 'y', documentation: i18n.d3d_model_vertex_normal.y },
            { label: 'z', documentation: i18n.d3d_model_vertex_normal.z },
            { label: 'nx', documentation: i18n.d3d_model_vertex_normal.nx },
            { label: 'ny', documentation: i18n.d3d_model_vertex_normal.ny },
            { label: 'nz', documentation: i18n.d3d_model_vertex_normal.nz }
        ],
        signature: '(ind, x, y, z, nx, ny, nz)'
    },
    d3d_model_vertex_normal_color: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.d3d_model_vertex_normal_color.desc,
        available: datasimple.ob2,
        parameters: [
            { label: 'ind', documentation: i18n.d3d_model_vertex_normal_color.ind },
            { label: 'x', documentation: i18n.d3d_model_vertex_normal_color.x },
            { label: 'y', documentation: i18n.d3d_model_vertex_normal_color.y },
            { label: 'z', documentation: i18n.d3d_model_vertex_normal_color.z },
            { label: 'nx', documentation: i18n.d3d_model_vertex_normal_color.nx },
            { label: 'ny', documentation: i18n.d3d_model_vertex_normal_color.ny },
            { label: 'nz', documentation: i18n.d3d_model_vertex_normal_color.nz },
            { label: 'col', documentation: i18n.d3d_model_vertex_normal_color.col },
            { label: 'alpha', documentation: i18n.d3d_model_vertex_normal_color.alpha }
        ],
        signature: '(ind, x, y, z, nx, ny, nz, col, alpha)'
    },
    d3d_model_vertex_normal_colour: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.d3d_model_vertex_normal_colour.desc,
        available: datasimple.ob2,
        parameters: [
            { label: 'ind', documentation: i18n.d3d_model_vertex_normal_colour.ind },
            { label: 'x', documentation: i18n.d3d_model_vertex_normal_colour.x },
            { label: 'y', documentation: i18n.d3d_model_vertex_normal_colour.y },
            { label: 'z', documentation: i18n.d3d_model_vertex_normal_colour.z },
            { label: 'nx', documentation: i18n.d3d_model_vertex_normal_colour.nx },
            { label: 'ny', documentation: i18n.d3d_model_vertex_normal_colour.ny },
            { label: 'nz', documentation: i18n.d3d_model_vertex_normal_colour.nz },
            { label: 'col', documentation: i18n.d3d_model_vertex_normal_colour.col },
            { label: 'alpha', documentation: i18n.d3d_model_vertex_normal_colour.alpha }
        ],
        signature: '(ind, x, y, z, nx, ny, nz, col, alpha)'
    },
    d3d_model_vertex_normal_texture: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.d3d_model_vertex_normal_texture.desc,
        available: datasimple.ob2,
        parameters: [
            { label: 'ind', documentation: i18n.d3d_model_vertex_normal_texture.ind },
            { label: 'x', documentation: i18n.d3d_model_vertex_normal_texture.x },
            { label: 'y', documentation: i18n.d3d_model_vertex_normal_texture.y },
            { label: 'z', documentation: i18n.d3d_model_vertex_normal_texture.z },
            { label: 'nx', documentation: i18n.d3d_model_vertex_normal_texture.nx },
            { label: 'ny', documentation: i18n.d3d_model_vertex_normal_texture.ny },
            { label: 'nz', documentation: i18n.d3d_model_vertex_normal_texture.nz },
            { label: 'xtex', documentation: i18n.d3d_model_vertex_normal_texture.xtex },
            { label: 'ytex', documentation: i18n.d3d_model_vertex_normal_texture.ytex }
        ],
        signature: '(ind, x, y, z, nx, ny, nz, xtex, ytex)'
    },
    d3d_model_vertex_normal_texture_color: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.d3d_model_vertex_normal_texture_color.desc,
        available: datasimple.ob2,
        parameters: [
            { label: 'ind', documentation: i18n.d3d_model_vertex_normal_texture_color.ind },
            { label: 'x', documentation: i18n.d3d_model_vertex_normal_texture_color.x },
            { label: 'y', documentation: i18n.d3d_model_vertex_normal_texture_color.y },
            { label: 'z', documentation: i18n.d3d_model_vertex_normal_texture_color.z },
            { label: 'nx', documentation: i18n.d3d_model_vertex_normal_texture_color.nx },
            { label: 'ny', documentation: i18n.d3d_model_vertex_normal_texture_color.ny },
            { label: 'nz', documentation: i18n.d3d_model_vertex_normal_texture_color.nz },
            { label: 'xtex', documentation: i18n.d3d_model_vertex_normal_texture_color.xtex },
            { label: 'ytex', documentation: i18n.d3d_model_vertex_normal_texture_color.ytex },
            { label: 'col', documentation: i18n.d3d_model_vertex_normal_texture_color.col },
            { label: 'alpha', documentation: i18n.d3d_model_vertex_normal_texture_color.alpha }
        ],
        signature: '(ind, x, y, z, nx, ny, nz, xtex, ytex, col, alpha)'
    },
    d3d_model_vertex_normal_texture_colour: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.d3d_model_vertex_normal_texture_colour.desc,
        available: datasimple.ob2,
        parameters: [
            { label: 'ind', documentation: i18n.d3d_model_vertex_normal_texture_colour.ind },
            { label: 'x', documentation: i18n.d3d_model_vertex_normal_texture_colour.x },
            { label: 'y', documentation: i18n.d3d_model_vertex_normal_texture_colour.y },
            { label: 'z', documentation: i18n.d3d_model_vertex_normal_texture_colour.z },
            { label: 'nx', documentation: i18n.d3d_model_vertex_normal_texture_colour.nx },
            { label: 'ny', documentation: i18n.d3d_model_vertex_normal_texture_colour.ny },
            { label: 'nz', documentation: i18n.d3d_model_vertex_normal_texture_colour.nz },
            { label: 'xtex', documentation: i18n.d3d_model_vertex_normal_texture_colour.xtex },
            { label: 'ytex', documentation: i18n.d3d_model_vertex_normal_texture_colour.ytex },
            { label: 'col', documentation: i18n.d3d_model_vertex_normal_texture_colour.col },
            { label: 'alpha', documentation: i18n.d3d_model_vertex_normal_texture_colour.alpha }
        ],
        signature: '(ind, x, y, z, nx, ny, nz, xtex, ytex, col, alpha)'
    },
    d3d_model_vertex_texture: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.d3d_model_vertex_texture.desc,
        available: datasimple.ob2,
        parameters: [
            { label: 'ind', documentation: i18n.d3d_model_vertex_texture.ind },
            { label: 'x', documentation: i18n.d3d_model_vertex_texture.x },
            { label: 'y', documentation: i18n.d3d_model_vertex_texture.y },
            { label: 'z', documentation: i18n.d3d_model_vertex_texture.z },
            { label: 'xtex', documentation: i18n.d3d_model_vertex_texture.xtex },
            { label: 'ytex', documentation: i18n.d3d_model_vertex_texture.ytex }
        ],
        signature: '(ind, x, y, z, xtex, ytex)'
    },
    d3d_model_vertex_texture_color: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.d3d_model_vertex_texture_color.desc,
        available: datasimple.ob2,
        parameters: [
            { label: 'ind', documentation: i18n.d3d_model_vertex_texture_color.ind },
            { label: 'x', documentation: i18n.d3d_model_vertex_texture_color.x },
            { label: 'y', documentation: i18n.d3d_model_vertex_texture_color.y },
            { label: 'z', documentation: i18n.d3d_model_vertex_texture_color.z },
            { label: 'xtex', documentation: i18n.d3d_model_vertex_texture_color.xtex },
            { label: 'ytex', documentation: i18n.d3d_model_vertex_texture_color.ytex },
            { label: 'col', documentation: i18n.d3d_model_vertex_texture_color.col },
            { label: 'alpha', documentation: i18n.d3d_model_vertex_texture_color.alpha }
        ],
        signature: '(ind, x, y, z, xtex, ytex, col, alpha)'
    },
    d3d_model_vertex_texture_colour: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.d3d_model_vertex_texture_colour.desc,
        available: datasimple.ob2,
        parameters: [
            { label: 'ind', documentation: i18n.d3d_model_vertex_texture_colour.ind },
            { label: 'x', documentation: i18n.d3d_model_vertex_texture_colour.x },
            { label: 'y', documentation: i18n.d3d_model_vertex_texture_colour.y },
            { label: 'z', documentation: i18n.d3d_model_vertex_texture_colour.z },
            { label: 'xtex', documentation: i18n.d3d_model_vertex_texture_colour.xtex },
            { label: 'ytex', documentation: i18n.d3d_model_vertex_texture_colour.ytex },
            { label: 'col', documentation: i18n.d3d_model_vertex_texture_colour.col },
            { label: 'alpha', documentation: i18n.d3d_model_vertex_texture_colour.alpha }
        ],
        signature: '(ind, x, y, z, xtex, ytex, col, alpha)'
    },
    d3d_model_wall: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.d3d_model_wall.desc,
        available: datasimple.ob2,
        parameters: [
            { label: 'ind', documentation: i18n.d3d_model_wall.ind },
            { label: 'x1', documentation: i18n.d3d_model_wall.x1 },
            { label: 'y1', documentation: i18n.d3d_model_wall.y1 },
            { label: 'z1', documentation: i18n.d3d_model_wall.z1 },
            { label: 'x2', documentation: i18n.d3d_model_wall.x2 },
            { label: 'y2', documentation: i18n.d3d_model_wall.y2 },
            { label: 'z2', documentation: i18n.d3d_model_wall.z2 },
            { label: 'hrepeat', documentation: i18n.d3d_model_wall.hrepeat },
            { label: 'vrepeat', documentation: i18n.d3d_model_wall.vrepeat }
        ],
        signature: '(ind, x1, y1, z1, x2, y2, z2, hrepeat, vrepeat)'
    },
    d3d_primitive_begin: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.d3d_primitive_begin.desc,
        available: datasimple.ob2,
        parameters: [
            { label: 'kind', documentation: i18n.d3d_primitive_begin.kind }
        ],
        signature: '(kind)'
    },
    d3d_primitive_begin_texture: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.d3d_primitive_begin_texture.desc,
        available: datasimple.ob2,
        parameters: [
            { label: 'kind', documentation: i18n.d3d_primitive_begin_texture.kind },
            { label: 'texid', documentation: i18n.d3d_primitive_begin_texture.texid }
        ],
        signature: '(kind, texid)'
    },
    d3d_primitive_end: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.d3d_primitive_end.desc,
        available: datasimple.ob2
    },
    d3d_set_culling: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.d3d_set_culling.desc,
        available: datasimple.ob2,
        parameters: [
            { label: 'cull', documentation: i18n.d3d_set_culling.cull }
        ],
        signature: '(cull)'
    },
    d3d_set_depth: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.d3d_set_depth.desc,
        available: datasimple.ob2,
        parameters: [
            { label: 'depth', documentation: i18n.d3d_set_depth.depth }
        ],
        signature: '(depth)'
    },
    d3d_set_fog: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.d3d_set_fog.desc,
        available: datasimple.ob2,
        parameters: [
            { label: 'enable', documentation: i18n.d3d_set_fog.enable },
            { label: 'colour', documentation: i18n.d3d_set_fog.colour },
            { label: 'start', documentation: i18n.d3d_set_fog.start },
            { label: 'end', documentation: i18n.d3d_set_fog.end }
        ],
        signature: '(enable, colour, start, end)'
    },
    d3d_set_hidden: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.d3d_set_hidden.desc,
        available: datasimple.ob2,
        parameters: [
            { label: 'hidden', documentation: i18n.d3d_set_hidden.hidden }
        ],
        signature: '(hidden)'
    },
    d3d_set_lighting: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.d3d_set_lighting.desc,
        available: datasimple.ob2,
        parameters: [
            { label: 'enable', documentation: i18n.d3d_set_lighting.enable }
        ],
        signature: '(enable)'
    },
    d3d_set_perspective: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.d3d_set_perspective.desc,
        available: datasimple.ob2,
        parameters: [
            { label: 'enable', documentation: i18n.d3d_set_perspective.enable }
        ],
        signature: '(enable)'
    },
    d3d_set_projection: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.d3d_set_projection.desc,
        available: datasimple.ob2,
        parameters: [
            { label: 'xfrom', documentation: i18n.d3d_set_projection.xfrom },
            { label: 'yfrom', documentation: i18n.d3d_set_projection.yfrom },
            { label: 'zfrom', documentation: i18n.d3d_set_projection.zfrom },
            { label: 'xto', documentation: i18n.d3d_set_projection.xto },
            { label: 'yto', documentation: i18n.d3d_set_projection.yto },
            { label: 'zto', documentation: i18n.d3d_set_projection.zto },
            { label: 'xup', documentation: i18n.d3d_set_projection.xup },
            { label: 'yup', documentation: i18n.d3d_set_projection.yup },
            { label: 'zup', documentation: i18n.d3d_set_projection.zup }
        ],
        signature: '(xfrom, yfrom, zfrom, xto, yto, zto, xup, yup, zup)'
    },
    d3d_set_projection_ext: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.d3d_set_projection_ext.desc,
        available: datasimple.ob2,
        parameters: [
            { label: 'xfrom', documentation: i18n.d3d_set_projection_ext.xfrom },
            { label: 'yfrom', documentation: i18n.d3d_set_projection_ext.yfrom },
            { label: 'zfrom', documentation: i18n.d3d_set_projection_ext.zfrom },
            { label: 'xto', documentation: i18n.d3d_set_projection_ext.xto },
            { label: 'yto', documentation: i18n.d3d_set_projection_ext.yto },
            { label: 'zto', documentation: i18n.d3d_set_projection_ext.zto },
            { label: 'xup', documentation: i18n.d3d_set_projection_ext.xup },
            { label: 'yup', documentation: i18n.d3d_set_projection_ext.yup },
            { label: 'zup', documentation: i18n.d3d_set_projection_ext.zup },
            { label: 'angle', documentation: i18n.d3d_set_projection_ext.angle },
            { label: 'aspect', documentation: i18n.d3d_set_projection_ext.aspect },
            { label: 'znear', documentation: i18n.d3d_set_projection_ext.znear },
            { label: 'zfar', documentation: i18n.d3d_set_projection_ext.zfar }
        ],
        signature: '(xfrom, yfrom, zfrom, xto, yto, zto, xup, yup, zup, angle, aspect, znear, zfar)'
    },
    d3d_set_projection_ortho: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.d3d_set_projection_ortho.desc,
        available: datasimple.ob2,
        parameters: [
            { label: 'x', documentation: i18n.d3d_set_projection_ortho.x },
            { label: 'y', documentation: i18n.d3d_set_projection_ortho.y },
            { label: 'w', documentation: i18n.d3d_set_projection_ortho.w },
            { label: 'h', documentation: i18n.d3d_set_projection_ortho.h },
            { label: 'angle', documentation: i18n.d3d_set_projection_ortho.angle }
        ],
        signature: '(x, y, w, h, angle)'
    },
    d3d_set_projection_perspective: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.d3d_set_projection_perspective.desc,
        available: datasimple.ob2,
        parameters: [
            { label: 'x', documentation: i18n.d3d_set_projection_perspective.x },
            { label: 'y', documentation: i18n.d3d_set_projection_perspective.y },
            { label: 'w', documentation: i18n.d3d_set_projection_perspective.w },
            { label: 'h', documentation: i18n.d3d_set_projection_perspective.h },
            { label: 'angle', documentation: i18n.d3d_set_projection_perspective.angle }
        ],
        signature: '(x, y, w, h, angle)'
    },
    d3d_set_shading: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.d3d_set_shading.desc,
        available: datasimple.ob2,
        parameters: [
            { label: 'smooth', documentation: i18n.d3d_set_shading.smooth }
        ],
        signature: '(smooth)'
    },
    d3d_set_zwriteenable: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.d3d_set_zwriteenable.desc,
        available: datasimple.ob2,
        parameters: [
            { label: 'on_off', documentation: i18n.d3d_set_zwriteenable.on_off }
        ],
        signature: '(on_off)'
    },
    d3d_start: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.d3d_start.desc,
        available: datasimple.ob2
    },
    d3d_transform_add_rotation_axis: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.d3d_transform_add_rotation_axis.desc,
        available: datasimple.ob2,
        parameters: [
            { label: 'xa', documentation: i18n.d3d_transform_add_rotation_axis.xa },
            { label: 'ya', documentation: i18n.d3d_transform_add_rotation_axis.ya },
            { label: 'za', documentation: i18n.d3d_transform_add_rotation_axis.za },
            { label: 'angle', documentation: i18n.d3d_transform_add_rotation_axis.angle }
        ],
        signature: '(xa, ya, za, angle)'
    },
    d3d_transform_add_rotation_x: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.d3d_transform_add_rotation_x.desc,
        available: datasimple.ob2,
        parameters: [
            { label: 'angle', documentation: i18n.d3d_transform_add_rotation_x.angle }
        ],
        signature: '(angle)'
    },
    d3d_transform_add_rotation_y: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.d3d_transform_add_rotation_y.desc,
        available: datasimple.ob2,
        parameters: [
            { label: 'angle', documentation: i18n.d3d_transform_add_rotation_y.angle }
        ],
        signature: '(angle)'
    },
    d3d_transform_add_rotation_z: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.d3d_transform_add_rotation_z.desc,
        available: datasimple.ob2,
        parameters: [
            { label: 'angle', documentation: i18n.d3d_transform_add_rotation_z.angle }
        ],
        signature: '(angle)'
    },
    d3d_transform_add_scaling: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.d3d_transform_add_scaling.desc,
        available: datasimple.ob2,
        parameters: [
            { label: 'xs', documentation: i18n.d3d_transform_add_scaling.xs },
            { label: 'ys', documentation: i18n.d3d_transform_add_scaling.ys },
            { label: 'zs', documentation: i18n.d3d_transform_add_scaling.zs }
        ],
        signature: '(xs, ys, zs)'
    },
    d3d_transform_add_translation: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.d3d_transform_add_translation.desc,
        available: datasimple.ob2,
        parameters: [
            { label: 'xt', documentation: i18n.d3d_transform_add_translation.xt },
            { label: 'yt', documentation: i18n.d3d_transform_add_translation.yt },
            { label: 'zt', documentation: i18n.d3d_transform_add_translation.zt }
        ],
        signature: '(xt, yt, zt)'
    },
    d3d_transform_set_identity: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.d3d_transform_set_identity.desc,
        available: datasimple.ob2
    },
    d3d_transform_set_rotation_axis: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.d3d_transform_set_rotation_axis.desc,
        available: datasimple.ob2,
        parameters: [
            { label: 'xa', documentation: i18n.d3d_transform_set_rotation_axis.xa },
            { label: 'ya', documentation: i18n.d3d_transform_set_rotation_axis.ya },
            { label: 'za', documentation: i18n.d3d_transform_set_rotation_axis.za },
            { label: 'angle', documentation: i18n.d3d_transform_set_rotation_axis.angle }
        ],
        signature: '(xa, ya, za, angle)'
    },
    d3d_transform_set_rotation_x: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.d3d_transform_set_rotation_x.desc,
        available: datasimple.ob2,
        parameters: [
            { label: 'angle', documentation: i18n.d3d_transform_set_rotation_x.angle }
        ],
        signature: '(angle)'
    },
    d3d_transform_set_rotation_y: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.d3d_transform_set_rotation_y.desc,
        available: datasimple.ob2,
        parameters: [
            { label: 'angle', documentation: i18n.d3d_transform_set_rotation_y.angle }
        ],
        signature: '(angle)'
    },
    d3d_transform_set_rotation_z: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.d3d_transform_set_rotation_z.desc,
        available: datasimple.ob2,
        parameters: [
            { label: 'angle', documentation: i18n.d3d_transform_set_rotation_z.angle }
        ],
        signature: '(angle)'
    },
    d3d_transform_set_scaling: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.d3d_transform_set_scaling.desc,
        available: datasimple.ob2,
        parameters: [
            { label: 'xs', documentation: i18n.d3d_transform_set_scaling.xs },
            { label: 'ys', documentation: i18n.d3d_transform_set_scaling.ys },
            { label: 'zs', documentation: i18n.d3d_transform_set_scaling.zs }
        ],
        signature: '(xs, ys, zs)'
    },
    d3d_transform_set_translation: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.d3d_transform_set_translation.desc,
        available: datasimple.ob2,
        parameters: [
            { label: 'xt', documentation: i18n.d3d_transform_set_translation.xt },
            { label: 'yt', documentation: i18n.d3d_transform_set_translation.yt },
            { label: 'zt', documentation: i18n.d3d_transform_set_translation.zt }
        ],
        signature: '(xt, yt, zt)'
    },
    d3d_transform_stack_clear: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.d3d_transform_stack_clear.desc,
        available: datasimple.ob2
    },
    d3d_transform_stack_discard: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.d3d_transform_stack_discard.desc,
        available: datasimple.ob2
    },
    d3d_transform_stack_empty: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.d3d_transform_stack_empty.desc,
        available: datasimple.ob2
    },
    d3d_transform_stack_pop: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.d3d_transform_stack_pop.desc,
        available: datasimple.ob2
    },
    d3d_transform_stack_push: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.d3d_transform_stack_push.desc,
        available: datasimple.ob2
    },
    d3d_transform_stack_top: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.d3d_transform_stack_top.desc,
        available: datasimple.ob2
    },
    d3d_transform_vertex: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.d3d_transform_vertex.desc,
        available: datasimple.ob2,
        parameters: [
            { label: 'x', documentation: i18n.d3d_transform_vertex.x },
            { label: 'y', documentation: i18n.d3d_transform_vertex.y },
            { label: 'z', documentation: i18n.d3d_transform_vertex.z }
        ],
        signature: '(x, y, z)'
    },
    d3d_vertex: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.d3d_vertex.desc,
        available: datasimple.ob2,
        parameters: [
            { label: 'x', documentation: i18n.d3d_vertex.x },
            { label: 'y', documentation: i18n.d3d_vertex.y },
            { label: 'z', documentation: i18n.d3d_vertex.z }
        ],
        signature: '(x, y, z)'
    },
    d3d_vertex_color: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.d3d_vertex_color.desc,
        available: datasimple.ob2,
        parameters: [
            { label: 'x', documentation: i18n.d3d_vertex_color.x },
            { label: 'y', documentation: i18n.d3d_vertex_color.y },
            { label: 'z', documentation: i18n.d3d_vertex_color.z },
            { label: 'col', documentation: i18n.d3d_vertex_color.col },
            { label: 'alpha', documentation: i18n.d3d_vertex_color.alpha }
        ],
        signature: '(x, y, z, col, alpha)'
    },
    d3d_vertex_colour: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.d3d_vertex_colour.desc,
        available: datasimple.ob2,
        parameters: [
            { label: 'x', documentation: i18n.d3d_vertex_colour.x },
            { label: 'y', documentation: i18n.d3d_vertex_colour.y },
            { label: 'z', documentation: i18n.d3d_vertex_colour.z },
            { label: 'col', documentation: i18n.d3d_vertex_colour.col },
            { label: 'alpha', documentation: i18n.d3d_vertex_colour.alpha }
        ],
        signature: '(x, y, z, col, alpha)'
    },
    d3d_vertex_normal: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.d3d_vertex_normal.desc,
        available: datasimple.ob2,
        parameters: [
            { label: 'x', documentation: i18n.d3d_vertex_normal.x },
            { label: 'y', documentation: i18n.d3d_vertex_normal.y },
            { label: 'z', documentation: i18n.d3d_vertex_normal.z },
            { label: 'nx', documentation: i18n.d3d_vertex_normal.nx },
            { label: 'ny', documentation: i18n.d3d_vertex_normal.ny },
            { label: 'nz', documentation: i18n.d3d_vertex_normal.nz }
        ],
        signature: '(x, y, z, nx, ny, nz)'
    },
    d3d_vertex_normal_color: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.d3d_vertex_normal_color.desc,
        available: datasimple.ob2,
        parameters: [
            { label: 'x', documentation: i18n.d3d_vertex_normal_color.x },
            { label: 'y', documentation: i18n.d3d_vertex_normal_color.y },
            { label: 'z', documentation: i18n.d3d_vertex_normal_color.z },
            { label: 'nx', documentation: i18n.d3d_vertex_normal_color.nx },
            { label: 'ny', documentation: i18n.d3d_vertex_normal_color.ny },
            { label: 'nz', documentation: i18n.d3d_vertex_normal_color.nz },
            { label: 'col', documentation: i18n.d3d_vertex_normal_color.col },
            { label: 'alpha', documentation: i18n.d3d_vertex_normal_color.alpha }
        ],
        signature: '(x, y, z, nx, ny, nz, col, alpha)'
    },
    d3d_vertex_normal_colour: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.d3d_vertex_normal_colour.desc,
        available: datasimple.ob2,
        parameters: [
            { label: 'x', documentation: i18n.d3d_vertex_normal_colour.x },
            { label: 'y', documentation: i18n.d3d_vertex_normal_colour.y },
            { label: 'z', documentation: i18n.d3d_vertex_normal_colour.z },
            { label: 'nx', documentation: i18n.d3d_vertex_normal_colour.nx },
            { label: 'ny', documentation: i18n.d3d_vertex_normal_colour.ny },
            { label: 'nz', documentation: i18n.d3d_vertex_normal_colour.nz },
            { label: 'col', documentation: i18n.d3d_vertex_normal_colour.col },
            { label: 'alpha', documentation: i18n.d3d_vertex_normal_colour.alpha }
        ],
        signature: '(x, y, z, nx, ny, nz, col, alpha)'
    },
    d3d_vertex_normal_texture: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.d3d_vertex_normal_texture.desc,
        available: datasimple.ob2,
        parameters: [
            { label: 'x', documentation: i18n.d3d_vertex_normal_texture.x },
            { label: 'y', documentation: i18n.d3d_vertex_normal_texture.y },
            { label: 'z', documentation: i18n.d3d_vertex_normal_texture.z },
            { label: 'nx', documentation: i18n.d3d_vertex_normal_texture.nx },
            { label: 'ny', documentation: i18n.d3d_vertex_normal_texture.ny },
            { label: 'nz', documentation: i18n.d3d_vertex_normal_texture.nz },
            { label: 'xtex', documentation: i18n.d3d_vertex_normal_texture.xtex },
            { label: 'ytex', documentation: i18n.d3d_vertex_normal_texture.ytex }
        ],
        signature: '(x, y, z, nx, ny, nz, xtex, ytex)'
    },
    d3d_vertex_normal_texture_color: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.d3d_vertex_normal_texture_color.desc,
        available: datasimple.ob2,
        parameters: [
            { label: 'x', documentation: i18n.d3d_vertex_normal_texture_color.x },
            { label: 'y', documentation: i18n.d3d_vertex_normal_texture_color.y },
            { label: 'z', documentation: i18n.d3d_vertex_normal_texture_color.z },
            { label: 'nx', documentation: i18n.d3d_vertex_normal_texture_color.nx },
            { label: 'ny', documentation: i18n.d3d_vertex_normal_texture_color.ny },
            { label: 'nz', documentation: i18n.d3d_vertex_normal_texture_color.nz },
            { label: 'xtex', documentation: i18n.d3d_vertex_normal_texture_color.xtex },
            { label: 'ytex', documentation: i18n.d3d_vertex_normal_texture_color.ytex },
            { label: 'col', documentation: i18n.d3d_vertex_normal_texture_color.col },
            { label: 'alpha', documentation: i18n.d3d_vertex_normal_texture_color.alpha }
        ],
        signature: '(x, y, z, nx, ny, nz, xtex, ytex, col, alpha)'
    },
    d3d_vertex_normal_texture_colour: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.d3d_vertex_normal_texture_colour.desc,
        available: datasimple.ob2,
        parameters: [
            { label: 'x', documentation: i18n.d3d_vertex_normal_texture_colour.x },
            { label: 'y', documentation: i18n.d3d_vertex_normal_texture_colour.y },
            { label: 'z', documentation: i18n.d3d_vertex_normal_texture_colour.z },
            { label: 'nx', documentation: i18n.d3d_vertex_normal_texture_colour.nx },
            { label: 'ny', documentation: i18n.d3d_vertex_normal_texture_colour.ny },
            { label: 'nz', documentation: i18n.d3d_vertex_normal_texture_colour.nz },
            { label: 'xtex', documentation: i18n.d3d_vertex_normal_texture_colour.xtex },
            { label: 'ytex', documentation: i18n.d3d_vertex_normal_texture_colour.ytex },
            { label: 'col', documentation: i18n.d3d_vertex_normal_texture_colour.col },
            { label: 'alpha', documentation: i18n.d3d_vertex_normal_texture_colour.alpha }
        ],
        signature: '(x, y, z, nx, ny, nz, xtex, ytex, col, alpha)'
    },
    d3d_vertex_texture: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.d3d_vertex_texture.desc,
        available: datasimple.ob2,
        parameters: [
            { label: 'x', documentation: i18n.d3d_vertex_texture.x },
            { label: 'y', documentation: i18n.d3d_vertex_texture.y },
            { label: 'z', documentation: i18n.d3d_vertex_texture.z },
            { label: 'xtex', documentation: i18n.d3d_vertex_texture.xtex },
            { label: 'ytex', documentation: i18n.d3d_vertex_texture.ytex }
        ],
        signature: '(x, y, z, xtex, ytex)'
    },
    d3d_vertex_texture_color: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.d3d_vertex_texture_color.desc,
        available: datasimple.ob2,
        parameters: [
            { label: 'x', documentation: i18n.d3d_vertex_texture_color.x },
            { label: 'y', documentation: i18n.d3d_vertex_texture_color.y },
            { label: 'z', documentation: i18n.d3d_vertex_texture_color.z },
            { label: 'xtex', documentation: i18n.d3d_vertex_texture_color.xtex },
            { label: 'ytex', documentation: i18n.d3d_vertex_texture_color.ytex },
            { label: 'col', documentation: i18n.d3d_vertex_texture_color.col },
            { label: 'alpha', documentation: i18n.d3d_vertex_texture_color.alpha }
        ],
        signature: '(x, y, z, xtex, ytex, col, alpha)'
    },
    d3d_vertex_texture_colour: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.d3d_vertex_texture_colour.desc,
        available: datasimple.ob2,
        parameters: [
            { label: 'x', documentation: i18n.d3d_vertex_texture_colour.x },
            { label: 'y', documentation: i18n.d3d_vertex_texture_colour.y },
            { label: 'z', documentation: i18n.d3d_vertex_texture_colour.z },
            { label: 'xtex', documentation: i18n.d3d_vertex_texture_colour.xtex },
            { label: 'ytex', documentation: i18n.d3d_vertex_texture_colour.ytex },
            { label: 'col', documentation: i18n.d3d_vertex_texture_colour.col },
            { label: 'alpha', documentation: i18n.d3d_vertex_texture_colour.alpha }
        ],
        signature: '(x, y, z, xtex, ytex, col, alpha)'
    },
    display_set_windows_vertex_buffer_method: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.display_set_windows_vertex_buffer_method.desc,
        available: datasimple.ob2,
        parameters: [
            { label: 'method', documentation: i18n.display_set_windows_vertex_buffer_method.method }
        ],
        signature: '(method)'
    },
    display_get_windows_vertex_buffer_method: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.display_get_windows_vertex_buffer_method.desc,
        available: datasimple.ob2
    },
    display_set_windows_alternate_sync: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.display_set_windows_alternate_sync.desc,
        available: datasimple.ob2,
        parameters: [
            { label: 'enable', documentation: i18n.display_set_windows_alternate_sync.enable }
        ],
        signature: '(enable)'
    },
    display_get_windows_alternate_sync: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.display_get_windows_alternate_sync.desc,
        available: datasimple.ob2
    },
    room_set_view: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.room_set_view.desc,
        available: datasimple.ob2,
        parameters: [
            { label: 'ind', documentation: i18n.room_set_view.ind },
            { label: 'vind', documentation: i18n.room_set_view.vind },
            { label: 'vis', documentation: i18n.room_set_view.vis },
            { label: 'xview', documentation: i18n.room_set_view.xview },
            { label: 'yview', documentation: i18n.room_set_view.yview },
            { label: 'wview', documentation: i18n.room_set_view.wview },
            { label: 'hview', documentation: i18n.room_set_view.hview },
            { label: 'xport', documentation: i18n.room_set_view.xport },
            { label: 'yport', documentation: i18n.room_set_view.yport },
            { label: 'wport', documentation: i18n.room_set_view.wport },
            { label: 'hport', documentation: i18n.room_set_view.hport },
            { label: 'hborder', documentation: i18n.room_set_view.hborder },
            { label: 'vborder', documentation: i18n.room_set_view.vborder },
            { label: 'hspeed', documentation: i18n.room_set_view.hspeed },
            { label: 'vspeed', documentation: i18n.room_set_view.vspeed },
            { label: 'obj', documentation: i18n.room_set_view.obj }
        ],
        signature: '(ind, vind, vis, xview, yview, wview, hview, xport, yport, wport, hport, hborder, vborder, hspeed, vspeed, obj)'
    },
    immersion_play_effect: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.immersion_play_effect.desc,
        available: datasimple.ob2,
        parameters: [
            { label: 'effect', documentation: i18n.immersion_play_effect.effect }
        ],
        signature: '(effect)'
    },
    immersion_stop: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.immersion_stop.desc,
        available: datasimple.ob2
    },
    analytics_event: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.analytics_event.desc,
        available: datasimple.ob2,
        parameters: [
            { label: 'string', documentation: i18n.analytics_event.string }
        ],
        signature: '(string)'
    },
    analytics_event_ext: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')' + i18n.analytics_event_ext.desc,
        available: datasimple.ob2,
        parameters: [
            { label: 'string', documentation: i18n.analytics_event_ext.string },
            { label: 'string_param_name1', documentation: i18n.analytics_event_ext.string_param_name1 },
            { label: 'number_value1', documentation: i18n.analytics_event_ext.number_value1 },
            { label: '...', documentation: i18n.analytics_event_ext.more }
        ],
        signature: '(string, string_param_name1, number_value1, ...)'
    },

	//GameMaker 8.1 Only
	background_add_background: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.background_add_background.desc,
        available: datasimple.gm81,
        parameters: [
            { label: 'fname', documentation: i18n.background_add_background.fname }
        ],
        signature: '(fname)'
    },
    background_create_from_screen: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.background_create_from_screen.desc,
        available: datasimple.gm81,
        parameters: [
            { label: 'x', documentation: i18n.background_create_from_screen.x },
            { label: 'y', documentation: i18n.background_create_from_screen.y },
            { label: 'w', documentation: i18n.background_create_from_screen.w },
            { label: 'h', documentation: i18n.background_create_from_screen.h },
            { label: 'removeback', documentation: i18n.background_create_from_screen.removeback },
            { label: 'smooth', documentation: i18n.background_create_from_screen.smooth }
        ],
        signature: '(x, y, w, h, removeback, smooth)'
    },
    cd_close_door: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.cd_close_door.desc,
        available: datasimple.gm81
    },
	cd_init: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.cd_init.desc,
        available: datasimple.gm81
    },
    cd_length: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.cd_length.desc,
        available: datasimple.gm81
    },
	cd_number: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.cd_number.desc,
        available: datasimple.gm81
    },
	cd_open_door: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.cd_open_door.desc,
        available: datasimple.gm81
    },
	cd_pause: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.cd_pause.desc,
        available: datasimple.gm81
    },
	cd_paused: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.cd_paused.desc,
        available: datasimple.gm81
    },
	cd_play: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.cd_play.desc,
        available: datasimple.gm81,
        parameters: [
            { label: 'first', documentation: i18n.cd_play.first },
            { label: 'last', documentation: i18n.cd_play.last }
        ],
        signature: '(first, last)'
    },
	cd_playing: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.cd_playing.desc,
        available: datasimple.gm81
    },
	cd_position: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.cd_position.desc,
        available: datasimple.gm81
    },
	cd_present: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.cd_present.desc,
        available: datasimple.gm81
    },
	cd_resume: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.cd_resume.desc,
        available: datasimple.gm81
    },
	cd_set_position: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.cd_set_position.desc,
        available: datasimple.gm81,
        parameters: [
            { label: 'pos', documentation: i18n.cd_set_position.pos }
        ],
        signature: '(pos)'
    },
	cd_set_track_position: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.cd_set_track_position.desc,
        available: datasimple.gm81,
        parameters: [
            { label: 'pos', documentation: i18n.cd_set_track_position.pos }
        ],
        signature: '(pos)'
    },
	cd_stop: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.cd_stop.desc,
        available: datasimple.gm81
    },
	cd_track: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.cd_track.desc,
        available: datasimple.gm81
    },
	cd_track_length: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.cd_track_length.desc,
        available: datasimple.gm81,
        parameters: [
            { label: 'n', documentation: i18n.cd_track_length.n }
        ],
        signature: '(n)'
    },
	cd_track_position: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.cd_track_position.desc,
        available: datasimple.gm81
    },
    date_create_date: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.date_create_date.desc,
        available: datasimple.gm81,
        parameters: [
            { label: 'year', documentation: i18n.date_create_date.year },
            { label: 'month', documentation: i18n.date_create_date.month },
            { label: 'day', documentation: i18n.date_create_date.day }
        ],
        signature: '(year, month, day)'
    },
    date_create_time: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.date_create_time.desc,
        available: datasimple.gm81,
        parameters: [
            { label: 'hour', documentation: i18n.date_create_time.hour },
            { label: 'minute', documentation: i18n.date_create_time.minute },
            { label: 'second', documentation: i18n.date_create_time.second }
        ],
        signature: '(hour, minute, second)'
    },
	date_current_date: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.date_current_date.desc,
        available: datasimple.gm81
    },
    date_current_time: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.date_current_time.desc,
        available: datasimple.gm81
    },
    date_valid_date: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.date_valid_date.desc,
        available: datasimple.gm81,
        parameters: [
            { label: 'year', documentation: i18n.date_valid_date.year },
            { label: 'month', documentation: i18n.date_valid_date.month },
            { label: 'day', documentation: i18n.date_valid_date.day }
        ],
        signature: '(year, month, day)'
    },
    date_valid_time: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.date_valid_time.desc,
        available: datasimple.gm81,
        parameters: [
            { label: 'hour', documentation: i18n.date_valid_time.hour },
            { label: 'minute', documentation: i18n.date_valid_time.minute },
            { label: 'second', documentation: i18n.date_valid_time.second }
        ],
        signature: '(hour, minute, second)'
    },
    discard_include_file: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.discard_include_file.desc,
        available: datasimple.gm81,
        parameters: [
            { label: 'fname', documentation: i18n.discard_include_file.fname }
        ],
        signature: '(fname)'
    },
	disk_free: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.disk_free.desc,
        available: datasimple.gm81,
        parameters: [
            { label: 'drive', documentation: i18n.disk_free.drive }
        ],
        signature: '(drive)'
    },
	disk_size: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.disk_size.desc,
        available: datasimple.gm81,
        parameters: [
            { label: 'drive', documentation: i18n.disk_size.drive }
        ],
        signature: '(drive)'
    },
	display_set_all: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.display_set_all.desc,
        available: datasimple.gm81,
        parameters: [
            { label: 'w', documentation: i18n.display_set_all.w },
            { label: 'h', documentation: i18n.display_set_all.h },
            { label: 'frequency', documentation: i18n.display_set_all.frequency },
            { label: 'coldepth', documentation: i18n.display_set_all.coldepth }
        ],
        signature: '(w, h, frequency, coldepth)'
    },
	display_set_colordepth: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.display_set_colordepth.desc,
        available: datasimple.gm81,
        parameters: [
            { label: 'coldepth', documentation: i18n.display_set_colordepth.coldepth }
        ],
        signature: '(coldepth)'
    },
	display_set_frequency: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.display_set_frequency.desc,
        available: datasimple.gm81,
        parameters: [
            { label: 'frequency', documentation: i18n.display_set_frequency.frequency }
        ],
        signature: '(frequency)'
    },
	display_set_size: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.display_set_size.desc,
        available: datasimple.gm81,
        parameters: [
            { label: 'w', documentation: i18n.display_set_size.w },
            { label: 'h', documentation: i18n.display_set_size.h }
        ],
        signature: '(w, h)'
    },
	display_test_all: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.display_test_all.desc,
        available: datasimple.gm81,
        parameters: [
            { label: 'w', documentation: i18n.display_test_all.w },
            { label: 'h', documentation: i18n.display_test_all.h },
            { label: 'frequency', documentation: i18n.display_test_all.frequency },
            { label: 'coldepth', documentation: i18n.display_test_all.coldepth }
        ],
        signature: '(w, h, frequency, coldepth)'
    },
    execute_file: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.execute_file.desc,
        available: datasimple.gm81,
        parameters: [
            { label: 'fname', documentation: i18n.execute_file.fname },
            { label: 'arg0', documentation: i18n.execute_file.arg0 },
            { label: 'arg1', documentation: i18n.execute_file.arg1 },
            { label: '...', documentation: i18n.execute_file.more }
        ],
        signature: '(fname, arg0, arg1, ...)'
    },
    execute_program: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.execute_program.desc,
        available: datasimple.gm81,
        parameters: [
            { label: 'fname', documentation: i18n.execute_program.fname },
            { label: 'arg', documentation: i18n.execute_program.arg },
            { label: 'wait', documentation: i18n.execute_program.wait }
        ],
        signature: '(prog, arg, wait)'
    },
	execute_shell: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.execute_shell.desc,
        available: datasimple.gm81,
        parameters: [
            { label: 'fname', documentation: i18n.execute_shell.fname },
            { label: 'arg', documentation: i18n.execute_shell.arg }
        ],
        signature: '(prog, arg)'
    },
    execute_string: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.execute_string.desc,
        available: datasimple.gm81,
        parameters: [
            { label: 'str', documentation: i18n.execute_string.str },
            { label: 'arg0', documentation: i18n.execute_string.arg0 },
            { label: 'arg1', documentation: i18n.execute_string.arg1 },
            { label: '...', documentation: i18n.execute_string.more }
        ],
        signature: '(str, arg0, arg1, ...)'
    },
	export_include_file: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.export_include_file.desc,
        available: datasimple.gm81,
        parameters: [
            { label: 'fname', documentation: i18n.export_include_file.fname }
        ],
        signature: '(fname)'
    },
	export_include_file_location: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.export_include_file_location.desc,
        available: datasimple.gm81,
        parameters: [
            { label: 'fname', documentation: i18n.export_include_file_location.fname },
            { label: 'location', documentation: i18n.export_include_file_location.location }
        ],
        signature: '(fname, location)'
    },
    get_color: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.get_color.desc,
        available: datasimple.gm81,
        parameters: [
            { label: 'defcol', documentation: i18n.get_color.defcol }
        ],
        signature: '(defcol)'
    },
	get_directory: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.get_directory.desc,
        available: datasimple.gm81,
        parameters: [
            { label: 'dname', documentation: i18n.get_directory.dname }
        ],
        signature: '(dname)'
    },
	get_directory_alt: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.get_directory_alt.desc,
        available: datasimple.gm81,
        parameters: [
            { label: 'capt', documentation: i18n.get_directory_alt.capt },
            { label: 'root', documentation: i18n.get_directory_alt.root }
        ],
        signature: '(capt, root)'
    },
    highscore_add_current: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.highscore_add_current.desc,
        available: datasimple.gm81
    },
    highscore_set_background: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.highscore_set_background.desc,
        available: datasimple.gm81,
        parameters: [
            { label: 'back', documentation: i18n.highscore_set_background.back }
        ],
        signature: '(back)'
    },
	highscore_set_border: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.highscore_set_border.desc,
        available: datasimple.gm81,
        parameters: [
            { label: 'show', documentation: i18n.highscore_set_border.show }
        ],
        signature: '(show)'
    },
	highscore_set_colors: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.highscore_set_colors.desc,
        available: datasimple.gm81,
        parameters: [
            { label: 'back', documentation: i18n.highscore_set_colors.back },
            { label: 'new', documentation: i18n.highscore_set_colors.new },
            { label: 'other', documentation: i18n.highscore_set_colors.other }
        ],
        signature: '(back, new, other)'
    },
	highscore_set_font: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.highscore_set_font.desc,
        available: datasimple.gm81,
        parameters: [
            { label: 'name', documentation: i18n.highscore_set_font.name },
            { label: 'size', documentation: i18n.highscore_set_font.size },
            { label: 'style', documentation: i18n.highscore_set_font.style }
        ],
        signature: '(name, size, style)'
    },
	highscore_set_strings: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.highscore_set_strings.desc,
        available: datasimple.gm81,
        parameters: [
            { label: 'caption', documentation: i18n.highscore_set_strings.caption },
            { label: 'nobody', documentation: i18n.highscore_set_strings.nobody },
            { label: 'escape', documentation: i18n.highscore_set_strings.escape }
        ],
        signature: '(caption, nobody, escape)'
    },
	highscore_show: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.highscore_show.desc,
        available: datasimple.gm81,
        parameters: [
            { label: 'numb', documentation: i18n.highscore_show.numb }
        ],
        signature: '(numb)'
    },
	highscore_show_ext: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.highscore_show_ext.desc,
        available: datasimple.gm81,
        parameters: [
            { label: 'numb', documentation: i18n.highscore_show_ext.numb },
            { label: 'back', documentation: i18n.highscore_show_ext.back },
            { label: 'border', documentation: i18n.highscore_show_ext.border },
            { label: 'col1', documentation: i18n.highscore_show_ext.col1 },
            { label: 'col2', documentation: i18n.highscore_show_ext.col2 },
            { label: 'name', documentation: i18n.highscore_show_ext.name },
            { label: 'size', documentation: i18n.highscore_show_ext.size }
        ],
        signature: '(numb, back, border, col1, col2, name, size)'
    },
    io_handle: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.io_handle.desc,
        available: datasimple.gm81
    },
    keyboard_wait: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.keyboard_wait.desc,
        available: datasimple.gm81
    },
	MCI_command: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.MCI_command.desc,
        available: datasimple.gm81,
        parameters: [
            { label: 'str', documentation: i18n.MCI_command.str }
        ],
        signature: '(str)'
    },
	message_alpha: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.message_alpha.desc,
        available: datasimple.gm81,
        parameters: [
            { label: 'alpha', documentation: i18n.message_alpha.alpha }
        ],
        signature: '(alpha)'
    },
	message_background: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.message_background.desc,
        available: datasimple.gm81,
        parameters: [
            { label: 'back', documentation: i18n.message_background.back }
        ],
        signature: '(back)'
    },
	message_button: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.message_button.desc,
        available: datasimple.gm81,
        parameters: [
            { label: 'sprite', documentation: i18n.message_button.sprite }
        ],
        signature: '(sprite)'
    },
	message_button_font: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.message_button_font.desc,
        available: datasimple.gm81,
        parameters: [
            { label: 'name', documentation: i18n.message_button_font.name },
            { label: 'size', documentation: i18n.message_button_font.size },
            { label: 'colour', documentation: i18n.message_button_font.colour },
            { label: 'style', documentation: i18n.message_button_font.style }
        ],
        signature: '(name, size, colour, style)'
    },
	message_caption: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.message_caption.desc,
        available: datasimple.gm81,
        parameters: [
            { label: 'show', documentation: i18n.message_caption.show },
            { label: 'str', documentation: i18n.message_caption.str }
        ],
        signature: '(show, str)'
    },
	message_input_color: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.message_input_color.desc,
        available: datasimple.gm81,
        parameters: [
            { label: 'col', documentation: i18n.message_input_color.col }
        ],
        signature: '(col)'
    },
	message_input_font: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.message_input_font.desc,
        available: datasimple.gm81,
        parameters: [
            { label: 'name', documentation: i18n.message_input_font.name },
            { label: 'size', documentation: i18n.message_input_font.size },
            { label: 'colour', documentation: i18n.message_input_font.colour },
            { label: 'style', documentation: i18n.message_input_font.style }
        ],
        signature: '(name, size, colour, style)'
    },
	message_mouse_color: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.message_mouse_color.desc,
        available: datasimple.gm81,
        parameters: [
            { label: 'col', documentation: i18n.message_mouse_color.col }
        ],
        signature: '(col)'
    },
	message_position: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.message_position.desc,
        available: datasimple.gm81,
        parameters: [
            { label: 'x', documentation: i18n.message_position.x },
            { label: 'y', documentation: i18n.message_position.y }
        ],
        signature: '(x, y)'
    },
	message_size: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.message_size.desc,
        available: datasimple.gm81,
        parameters: [
            { label: 'w', documentation: i18n.message_size.w },
            { label: 'h', documentation: i18n.message_size.h }
        ],
        signature: '(w, h)'
    },
	message_text_charset: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.message_text_charset.desc,
        available: datasimple.gm81,
        parameters: [
            { label: 'type', documentation: i18n.message_text_charset.type },
            { label: 'charset_id', documentation: i18n.message_text_charset.charset_id }
        ],
        signature: '(type, charset_id)'
    },
	message_text_font: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.message_text_font.desc,
        available: datasimple.gm81,
        parameters: [
            { label: 'name', documentation: i18n.message_text_font.name },
            { label: 'size', documentation: i18n.message_text_font.size },
            { label: 'colour', documentation: i18n.message_text_font.colour },
            { label: 'style', documentation: i18n.message_text_font.style }
        ],
        signature: '(name, size, colour, style)'
    },
    mouse_wait: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.mouse_wait.desc,
        available: datasimple.gm81
    },
    object_add: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.object_add.desc,
        available: datasimple.gm81
    },
	object_delete: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.object_delete.desc,
        available: datasimple.gm81,
        parameters: [
            { label: 'ind', documentation: i18n.object_delete.ind }
        ],
        signature: '(ind)'
    },
	object_event_add: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.object_event_add.desc,
        available: datasimple.gm81,
        parameters: [
            { label: 'ind', documentation: i18n.object_event_add.ind },
            { label: 'evtype', documentation: i18n.object_event_add.evtype },
            { label: 'evnumb', documentation: i18n.object_event_add.evnumb },
            { label: 'codestr', documentation: i18n.object_event_add.codestr }
        ],
        signature: '(ind, evtype, evnumb, codestr)'
    },
	object_event_clear: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.object_event_clear.desc,
        available: datasimple.gm81,
        parameters: [
            { label: 'ind', documentation: i18n.object_event_clear.ind },
            { label: 'evtype', documentation: i18n.object_event_clear.evtype },
            { label: 'evnumb', documentation: i18n.object_event_clear.evnumb }
        ],
        signature: '(ind, evtype, evnumb)'
    },
	part_attractor_clear: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.part_attractor_clear.desc,
        available: datasimple.gm81,
        parameters: [
            { label: 'ps', documentation: i18n.part_attractor_clear.ps },
            { label: 'ind', documentation: i18n.part_attractor_clear.ind }
        ],
        signature: '(ps, ind)'
    },
	part_attractor_create: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.part_attractor_create.desc,
        available: datasimple.gm81,
        parameters: [
            { label: 'ps', documentation: i18n.part_attractor_create.ps }
        ],
        signature: '(ps)'
    },
	part_attractor_destroy: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.part_attractor_destroy.desc,
        available: datasimple.gm81,
        parameters: [
            { label: 'ps', documentation: i18n.part_attractor_destroy.ps },
            { label: 'ind', documentation: i18n.part_attractor_destroy.ind }
        ],
        signature: '(ps, ind)'
    },
	part_attractor_destroy_all: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.part_attractor_destroy_all.desc,
        available: datasimple.gm81,
        parameters: [
            { label: 'ps', documentation: i18n.part_attractor_destroy_all.ps }
        ],
        signature: '(ps)'
    },
	part_attractor_exists: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.part_attractor_exists.desc,
        available: datasimple.gm81,
        parameters: [
            { label: 'ps', documentation: i18n.part_attractor_exists.ps },
            { label: 'ind', documentation: i18n.part_attractor_exists.ind }
        ],
        signature: '(ps, ind)'
    },
	part_attractor_force: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.part_attractor_force.desc,
        available: datasimple.gm81,
        parameters: [
            { label: 'ps', documentation: i18n.part_attractor_force.ps },
            { label: 'ind', documentation: i18n.part_attractor_force.ind },
            { label: 'force', documentation: i18n.part_attractor_force.force },
            { label: 'dist', documentation: i18n.part_attractor_force.dist },
            { label: 'kind', documentation: i18n.part_attractor_force.kind },
            { label: 'additive', documentation: i18n.part_attractor_force.additive }
        ],
        signature: '(ps, ind, force, dist, kind, additive)'
    },
	part_attractor_position: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.part_attractor_position.desc,
        available: datasimple.gm81,
        parameters: [
            { label: 'ps', documentation: i18n.part_attractor_position.ps },
            { label: 'ind', documentation: i18n.part_attractor_position.ind },
            { label: 'x', documentation: i18n.part_attractor_position.x },
            { label: 'y', documentation: i18n.part_attractor_position.y }
        ],
        signature: '(ps, ind, x, y)'
    },
	part_changer_clear: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.part_changer_clear.desc,
        available: datasimple.gm81,
        parameters: [
            { label: 'ps', documentation: i18n.part_changer_clear.ps },
            { label: 'ind', documentation: i18n.part_changer_clear.ind }
        ],
        signature: '(ps, ind)'
    },
	part_changer_create: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.part_changer_create.desc,
        available: datasimple.gm81,
        parameters: [
            { label: 'ps', documentation: i18n.part_changer_create.ps }
        ],
        signature: '(ps)'
    },
	part_changer_destroy: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.part_changer_destroy.desc,
        available: datasimple.gm81,
        parameters: [
            { label: 'ps', documentation: i18n.part_changer_destroy.ps },
            { label: 'ind', documentation: i18n.part_changer_destroy.ind }
        ],
        signature: '(ps, ind)'
    },
	part_changer_destroy_all: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.part_changer_destroy_all.desc,
        available: datasimple.gm81,
        parameters: [
            { label: 'ps', documentation: i18n.part_changer_destroy_all.ps }
        ],
        signature: '(ps)'
    },
	part_changer_exists: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.part_changer_exists.desc,
        available: datasimple.gm81,
        parameters: [
            { label: 'ps', documentation: i18n.part_changer_exists.ps },
            { label: 'ind', documentation: i18n.part_changer_exists.ind }
        ],
        signature: '(ps, ind)'
    },
	part_changer_kind: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.part_changer_kind.desc,
        available: datasimple.gm81,
        parameters: [
            { label: 'ps', documentation: i18n.part_changer_kind.ps },
            { label: 'ind', documentation: i18n.part_changer_kind.ind },
            { label: 'kind', documentation: i18n.part_changer_kind.kind }
        ],
        signature: '(ps, ind, kind)'
    },
	part_changer_region: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.part_changer_region.desc,
        available: datasimple.gm81,
        parameters: [
            { label: 'ps', documentation: i18n.part_changer_region.ps },
            { label: 'ind', documentation: i18n.part_changer_region.ind },
            { label: 'xmin', documentation: i18n.part_changer_region.xmin },
            { label: 'xmax', documentation: i18n.part_changer_region.xmax },
            { label: 'ymin', documentation: i18n.part_changer_region.ymin },
            { label: 'ymax', documentation: i18n.part_changer_region.ymax },
            { label: 'shape', documentation: i18n.part_changer_region.shape }
        ],
        signature: '(ps, ind, xmin, xmax, ymin, ymax, shape)'
    },
	part_changer_types: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.part_changer_types.desc,
        available: datasimple.gm81,
        parameters: [
            { label: 'ps', documentation: i18n.part_changer_types.ps },
            { label: 'ind', documentation: i18n.part_changer_types.ind },
            { label: 'parttype1', documentation: i18n.part_changer_types.parttype1 },
            { label: 'parttype2', documentation: i18n.part_changer_types.parttype2 }
        ],
        signature: '(ps, ind, parttype1, parttype2)'
    },
	part_deflector_clear: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.part_deflector_clear.desc,
        available: datasimple.gm81,
        parameters: [
            { label: 'ps', documentation: i18n.part_deflector_clear.ps },
            { label: 'ind', documentation: i18n.part_deflector_clear.ind }
        ],
        signature: '(ps, ind)'
    },
	part_deflector_create: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.part_deflector_create.desc,
        available: datasimple.gm81,
        parameters: [
            { label: 'ps', documentation: i18n.part_deflector_create.ps }
        ],
        signature: '(ps)'
    },
	part_deflector_destroy: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.part_deflector_destroy.desc,
        available: datasimple.gm81,
        parameters: [
            { label: 'ps', documentation: i18n.part_deflector_destroy.ps },
            { label: 'ind', documentation: i18n.part_deflector_destroy.ind }
        ],
        signature: '(ps, ind)'
    },
	part_deflector_destroy_all: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.part_deflector_destroy_all.desc,
        available: datasimple.gm81,
        parameters: [
            { label: 'ps', documentation: i18n.part_deflector_destroy_all.ps }
        ],
        signature: '(ps)'
    },
	part_deflector_exists: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.part_deflector_exists.desc,
        available: datasimple.gm81,
        parameters: [
            { label: 'ps', documentation: i18n.part_deflector_exists.ps },
            { label: 'ind', documentation: i18n.part_deflector_exists.ind }
        ],
        signature: '(ps, ind)'
    },
	part_deflector_friction: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.part_deflector_friction.desc,
        available: datasimple.gm81,
        parameters: [
            { label: 'ps', documentation: i18n.part_deflector_friction.ps },
            { label: 'ind', documentation: i18n.part_deflector_friction.ind },
            { label: 'amount', documentation: i18n.part_deflector_friction.amount }
        ],
        signature: '(ps, ind, amount)'
    },
	part_deflector_kind: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.part_deflector_kind.desc,
        available: datasimple.gm81,
        parameters: [
            { label: 'ps', documentation: i18n.part_deflector_kind.ps },
            { label: 'ind', documentation: i18n.part_deflector_kind.ind },
            { label: 'kind', documentation: i18n.part_deflector_kind.kind }
        ],
        signature: '(ps, ind, kind)'
    },
	part_deflector_region: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.part_deflector_region.desc,
        available: datasimple.gm81,
        parameters: [
            { label: 'ps', documentation: i18n.part_deflector_region.ps },
            { label: 'ind', documentation: i18n.part_deflector_region.ind },
            { label: 'xmin', documentation: i18n.part_deflector_region.xmin },
            { label: 'xmax', documentation: i18n.part_deflector_region.xmax },
            { label: 'ymin', documentation: i18n.part_deflector_region.ymin },
            { label: 'ymax', documentation: i18n.part_deflector_region.ymax }
        ],
        signature: '(ps, ind, xmin, xmax, ymin, ymax)'
    },
	part_destroyer_clear: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.part_destroyer_clear.desc,
        available: datasimple.gm81,
        parameters: [
            { label: 'ps', documentation: i18n.part_destroyer_clear.ps },
            { label: 'ind', documentation: i18n.part_destroyer_clear.ind }
        ],
        signature: '(ps, ind)'
    },
	part_destroyer_create: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.part_destroyer_create.desc,
        available: datasimple.gm81,
        parameters: [
            { label: 'ps', documentation: i18n.part_destroyer_create.ps }
        ],
        signature: '(ps)'
    },
	part_destroyer_destroy: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.part_destroyer_destroy.desc,
        available: datasimple.gm81,
        parameters: [
            { label: 'ps', documentation: i18n.part_destroyer_destroy.ps },
            { label: 'ind', documentation: i18n.part_destroyer_destroy.ind }
        ],
        signature: '(ps, ind)'
    },
	part_destroyer_destroy_all: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.part_destroyer_destroy_all.desc,
        available: datasimple.gm81,
        parameters: [
            { label: 'ps', documentation: i18n.part_destroyer_destroy_all.ps }
        ],
        signature: '(ps)'
    },
	part_destroyer_exists: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.part_destroyer_exists.desc,
        available: datasimple.gm81,
        parameters: [
            { label: 'ps', documentation: i18n.part_destroyer_exists.ps },
            { label: 'ind', documentation: i18n.part_destroyer_exists.ind }
        ],
        signature: '(ps, ind)'
    },
	part_destroyer_region: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.part_destroyer_region.desc,
        available: datasimple.gm81,
        parameters: [
            { label: 'ps', documentation: i18n.part_destroyer_region.ps },
            { label: 'ind', documentation: i18n.part_destroyer_region.ind },
            { label: 'xmin', documentation: i18n.part_destroyer_region.xmin },
            { label: 'xmax', documentation: i18n.part_destroyer_region.xmax },
            { label: 'ymin', documentation: i18n.part_destroyer_region.ymin },
            { label: 'ymax', documentation: i18n.part_destroyer_region.ymax },
            { label: 'shape', documentation: i18n.part_destroyer_region.shape }
        ],
        signature: '(ps, ind, xmin, xmax, ymin, ymax, shape)'
    },
    registry_exists: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.registry_exists.desc,
        available: datasimple.gm81,
        parameters: [
            { label: 'name', documentation: i18n.registry_exists.name }
        ],
        signature: '(name)'
    },
	registry_exists_ext: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.registry_exists_ext.desc,
        available: datasimple.gm81,
        parameters: [
            { label: 'key', documentation: i18n.registry_exists_ext.key },
            { label: 'name', documentation: i18n.registry_exists_ext.name }
        ],
        signature: '(key, name)'
    },
	registry_read_real: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.registry_read_real.desc,
        available: datasimple.gm81,
        parameters: [
            { label: 'name', documentation: i18n.registry_read_real.name }
        ],
        signature: '(name)'
    },
	registry_read_real_ext: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.registry_read_real_ext.desc,
        available: datasimple.gm81,
        parameters: [
            { label: 'key', documentation: i18n.registry_read_real_ext.key },
            { label: 'name', documentation: i18n.registry_read_real_ext.name }
        ],
        signature: '(key, name)'
    },
	registry_read_string: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.registry_read_string.desc,
        available: datasimple.gm81,
        parameters: [
            { label: 'name', documentation: i18n.registry_read_string.name }
        ],
        signature: '(name)'
    },
	registry_read_string_ext: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.registry_read_string_ext.desc,
        available: datasimple.gm81,
        parameters: [
            { label: 'key', documentation: i18n.registry_read_string_ext.key },
            { label: 'name', documentation: i18n.registry_read_string_ext.name }
        ],
        signature: '(key, name)'
    },
	registry_set_root: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.registry_set_root.desc,
        available: datasimple.gm81,
        parameters: [
            { label: 'root', documentation: i18n.registry_set_root.root }
        ],
        signature: '(root)'
    },
	registry_write_real: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.registry_write_real.desc,
        available: datasimple.gm81,
        parameters: [
            { label: 'name', documentation: i18n.registry_write_real.name },
            { label: 'value', documentation: i18n.registry_write_real.value }
        ],
        signature: '(name, value)'
    },
	registry_write_real_ext: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.registry_write_real_ext.desc,
        available: datasimple.gm81,
        parameters: [
            { label: 'key', documentation: i18n.registry_write_real_ext.key },
            { label: 'name', documentation: i18n.registry_write_real_ext.name },
            { label: 'value', documentation: i18n.registry_write_real_ext.value }
        ],
        signature: '(key, name, value)'
    },
	registry_write_string: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.registry_write_string.desc,
        available: datasimple.gm81,
        parameters: [
            { label: 'name', documentation: i18n.registry_write_string.name },
            { label: 'str', documentation: i18n.registry_write_string.str }
        ],
        signature: '(name, str)'
    },
	registry_write_string_ext: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.registry_write_string_ext.desc,
        available: datasimple.gm81,
        parameters: [
            { label: 'key', documentation: i18n.registry_write_string_ext.key },
            { label: 'name', documentation: i18n.registry_write_string_ext.name },
            { label: 'str', documentation: i18n.registry_write_string_ext.str }
        ],
        signature: '(key, name, str)'
    },
    room_set_caption: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.room_set_caption.desc,
        available: datasimple.gm81,
        parameters: [
            { label: 'ind', documentation: i18n.room_set_caption.ind },
            { label: 'str', documentation: i18n.room_set_caption.str }
        ],
        signature: '(ind, str)'
    },
	room_set_code: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.room_set_code.desc,
        available: datasimple.gm81,
        parameters: [
            { label: 'ind', documentation: i18n.room_set_code.ind },
            { label: 'codestr', documentation: i18n.room_set_code.codestr }
        ],
        signature: '(ind, codestr)'
    },
    screen_redraw: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.screen_redraw.desc,
        available: datasimple.gm81
    },
    screen_refresh: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.screen_refresh.desc,
        available: datasimple.gm81
    },
    screen_wait_vsync: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.screen_wait_vsync.desc,
        available: datasimple.gm81
    },
    script_get_text: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.script_get_text.desc,
        available: datasimple.gm81,
        parameters: [
            { label: 'ind', documentation: i18n.script_get_text.ind }
        ],
        signature: '(ind)'
    },
	set_application_title: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.set_application_title.desc,
        available: datasimple.gm81,
        parameters: [
            { label: 'title', documentation: i18n.set_application_title.title }
        ],
        signature: '(title)'
    },
	set_automatic_draw: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.set_automatic_draw.desc,
        available: datasimple.gm81,
        parameters: [
            { label: 'value', documentation: i18n.set_automatic_draw.value }
        ],
        signature: '(value)'
    },
	set_program_priority: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.set_program_priority.desc,
        available: datasimple.gm81,
        parameters: [
            { label: 'priority', documentation: i18n.set_program_priority.priority }
        ],
        signature: '(priority)'
    },
	set_synchronization: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.set_synchronization.desc,
        available: datasimple.gm81,
        parameters: [
            { label: 'value', documentation: i18n.set_synchronization.value }
        ],
        signature: '(value)'
    },
    show_menu: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.show_menu.desc,
        available: datasimple.gm81,
        parameters: [
            { label: 'str', documentation: i18n.show_menu.str },
            { label: 'def', documentation: i18n.show_menu.def }
        ],
        signature: '(str, def)'
    },
	show_menu_pos: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.show_menu_pos.desc,
        available: datasimple.gm81,
        parameters: [
            { label: 'x', documentation: i18n.show_menu_pos.x },
            { label: 'y', documentation: i18n.show_menu_pos.y },
            { label: 'str', documentation: i18n.show_menu_pos.str },
            { label: 'def', documentation: i18n.show_menu_pos.def }
        ],
        signature: '(x, y, str, def)'
    },
    show_message_ext: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.show_message_ext.desc,
        available: datasimple.gm81,
        parameters: [
            { label: 'str', documentation: i18n.show_message_ext.str },
            { label: 'but1', documentation: i18n.show_message_ext.but1 },
            { label: 'but2', documentation: i18n.show_message_ext.but2 },
            { label: 'but3', documentation: i18n.show_message_ext.but3 }
        ],
        signature: '(str, but1, but2, but3)'
    },
    sleep: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.sleep.desc,
        available: datasimple.gm81,
        parameters: [
            { label: 'millisec', documentation: i18n.sleep.millisec }
        ],
        signature: '(millisec)'
    },
	sound_3d_set_sound_cone: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.sound_3d_set_sound_cone.desc,
        available: datasimple.gm81,
        parameters: [
            { label: 'snd', documentation: i18n.sound_3d_set_sound_cone.snd },
            { label: 'x', documentation: i18n.sound_3d_set_sound_cone.x },
            { label: 'y', documentation: i18n.sound_3d_set_sound_cone.y },
            { label: 'z', documentation: i18n.sound_3d_set_sound_cone.z },
            { label: 'anglein', documentation: i18n.sound_3d_set_sound_cone.anglein },
            { label: 'angleout', documentation: i18n.sound_3d_set_sound_cone.angleout },
            { label: 'voloutside', documentation: i18n.sound_3d_set_sound_cone.voloutside }
        ],
        signature: '(snd, x, y, z, anglein, angleout, voloutside)'
    },
	sound_3d_set_sound_distance: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.sound_3d_set_sound_distance.desc,
        available: datasimple.gm81,
        parameters: [
            { label: 'snd', documentation: i18n.sound_3d_set_sound_distance.snd },
            { label: 'mindist', documentation: i18n.sound_3d_set_sound_distance.mindist },
            { label: 'maxdist', documentation: i18n.sound_3d_set_sound_distance.maxdist }
        ],
        signature: '(snd, mindist, maxdist)'
    },
	sound_3d_set_sound_position: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.sound_3d_set_sound_position.desc,
        available: datasimple.gm81,
        parameters: [
            { label: 'snd', documentation: i18n.sound_3d_set_sound_position.snd },
            { label: 'x', documentation: i18n.sound_3d_set_sound_position.x },
            { label: 'y', documentation: i18n.sound_3d_set_sound_position.y },
            { label: 'z', documentation: i18n.sound_3d_set_sound_position.z }
        ],
        signature: '(snd, x, y, z)'
    },
	sound_3d_set_sound_velocity: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.sound_3d_set_sound_velocity.desc,
        available: datasimple.gm81,
        parameters: [
            { label: 'snd', documentation: i18n.sound_3d_set_sound_velocity.snd },
            { label: 'x', documentation: i18n.sound_3d_set_sound_velocity.x },
            { label: 'y', documentation: i18n.sound_3d_set_sound_velocity.y },
            { label: 'z', documentation: i18n.sound_3d_set_sound_velocity.z }
        ],
        signature: '(snd, x, y, z)'
    },
	sound_add: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.sound_add.desc,
        available: datasimple.gm81,
        parameters: [
            { label: 'fname', documentation: i18n.sound_add.fname },
            { label: 'kind', documentation: i18n.sound_add.kind },
            { label: 'preload', documentation: i18n.sound_add.preload }
        ],
        signature: '(fname, kind, preload)'
    },
	sound_background_tempo: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.sound_background_tempo.desc,
        available: datasimple.gm81,
        parameters: [
            { label: 'factor', documentation: i18n.sound_background_tempo.factor }
        ],
        signature: '(factor)'
    },
	sound_effect_chorus: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.sound_effect_chorus.desc,
        available: datasimple.gm81,
        parameters: [
            { label: 'snd', documentation: i18n.sound_effect_chorus.snd },
            { label: 'wetdry', documentation: i18n.sound_effect_chorus.wetdry },
            { label: 'depth', documentation: i18n.sound_effect_chorus.depth },
            { label: 'feedback', documentation: i18n.sound_effect_chorus.feedback },
            { label: 'frequency', documentation: i18n.sound_effect_chorus.frequency },
            { label: 'wave', documentation: i18n.sound_effect_chorus.wave },
            { label: 'delay', documentation: i18n.sound_effect_chorus.delay },
            { label: 'phase', documentation: i18n.sound_effect_chorus.phase }
        ],
        signature: '(snd, wetdry, depth, feedback, frequency, wave, delay, phase)'
    },
	sound_effect_compressor: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.sound_effect_compressor.desc,
        available: datasimple.gm81,
        parameters: [
            { label: 'snd', documentation: i18n.sound_effect_compressor.snd },
            { label: 'gain', documentation: i18n.sound_effect_compressor.gain },
            { label: 'attack', documentation: i18n.sound_effect_compressor.attack },
            { label: 'release', documentation: i18n.sound_effect_compressor.release },
            { label: 'threshold', documentation: i18n.sound_effect_compressor.threshold },
            { label: 'ratio', documentation: i18n.sound_effect_compressor.ratio },
            { label: 'delay', documentation: i18n.sound_effect_compressor.delay }
        ],
        signature: '(snd, gain, attack, release, threshold, ratio, delay)'
    },
	sound_effect_echo: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.sound_effect_echo.desc,
        available: datasimple.gm81,
        parameters: [
            { label: 'snd', documentation: i18n.sound_effect_echo.snd },
            { label: 'wetdry', documentation: i18n.sound_effect_echo.wetdry },
            { label: 'feedback', documentation: i18n.sound_effect_echo.feedback },
            { label: 'leftdelay', documentation: i18n.sound_effect_echo.leftdelay },
            { label: 'rightdelay', documentation: i18n.sound_effect_echo.rightdelay },
            { label: 'pandelay', documentation: i18n.sound_effect_echo.pandelay }
        ],
        signature: '(snd, wetdry, feedback, leftdelay, rightdelay, pandelay)'
    },
	sound_effect_equalizer: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.sound_effect_equalizer.desc,
        available: datasimple.gm81,
        parameters: [
            { label: 'snd', documentation: i18n.sound_effect_equalizer.snd },
            { label: 'center', documentation: i18n.sound_effect_equalizer.center },
            { label: 'bandwidth', documentation: i18n.sound_effect_equalizer.bandwidth },
            { label: 'gain', documentation: i18n.sound_effect_equalizer.gain }
        ],
        signature: '(snd, center, bandwidth, gain)'
    },
	sound_effect_flanger: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.sound_effect_flanger.desc,
        available: datasimple.gm81,
        parameters: [
            { label: 'snd', documentation: i18n.sound_effect_flanger.snd },
            { label: 'wetdry', documentation: i18n.sound_effect_flanger.wetdry },
            { label: 'depth', documentation: i18n.sound_effect_flanger.depth },
            { label: 'feedback', documentation: i18n.sound_effect_flanger.feedback },
            { label: 'frequency', documentation: i18n.sound_effect_flanger.frequency },
            { label: 'wave', documentation: i18n.sound_effect_flanger.wave },
            { label: 'delay', documentation: i18n.sound_effect_flanger.delay },
            { label: 'phase', documentation: i18n.sound_effect_flanger.phase }
        ],
        signature: '(snd, wetdry, depth, feedback, frequency, wave, delay, phase)'
    },
	sound_effect_gargle: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.sound_effect_gargle.desc,
        available: datasimple.gm81,
        parameters: [
            { label: 'snd', documentation: i18n.sound_effect_gargle.snd },
            { label: 'rate', documentation: i18n.sound_effect_gargle.rate },
            { label: 'wave', documentation: i18n.sound_effect_gargle.wave }
        ],
        signature: '(snd, rate, wave)'
    },
	sound_effect_reverb: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.sound_effect_reverb.desc,
        available: datasimple.gm81,
        parameters: [
            { label: 'snd', documentation: i18n.sound_effect_reverb.snd },
            { label: 'gain', documentation: i18n.sound_effect_reverb.gain },
            { label: 'mix', documentation: i18n.sound_effect_reverb.mix },
            { label: 'time', documentation: i18n.sound_effect_reverb.time },
            { label: 'ratio', documentation: i18n.sound_effect_reverb.ratio }
        ],
        signature: '(snd, gain, mix, time, ratio)'
    },
	sound_effect_set: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.sound_effect_set.desc,
        available: datasimple.gm81,
        parameters: [
            { label: 'snd', documentation: i18n.sound_effect_set.snd },
            { label: 'effect', documentation: i18n.sound_effect_set.effect }
        ],
        signature: '(snd, effect)'
    },
	sound_pan: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.sound_pan.desc,
        available: datasimple.gm81,
        parameters: [
            { label: 'index', documentation: i18n.sound_pan.index },
            { label: 'value', documentation: i18n.sound_pan.value }
        ],
        signature: '(index, value)'
    },
	sound_replace: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.sound_replace.desc,
        available: datasimple.gm81,
        parameters: [
            { label: 'ind', documentation: i18n.sound_replace.ind },
            { label: 'fname', documentation: i18n.sound_replace.fname },
            { label: 'kind', documentation: i18n.sound_replace.kind },
            { label: 'preload', documentation: i18n.sound_replace.preload }
        ],
        signature: '(ind, fname, kind, preload)'
    },
	sound_set_search_directory: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.sound_set_search_directory.desc,
        available: datasimple.gm81,
        parameters: [
            { label: 'dir', documentation: i18n.sound_set_search_directory.dir }
        ],
        signature: '(dir)'
    },
	splash_set_adapt: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.splash_set_adapt.desc,
        available: datasimple.gm81,
        parameters: [
            { label: 'adapt', documentation: i18n.splash_set_adapt.adapt }
        ],
        signature: '(adapt)'
    },
	splash_set_border: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.splash_set_border.desc,
        available: datasimple.gm81,
        parameters: [
            { label: 'border', documentation: i18n.splash_set_border.border }
        ],
        signature: '(border)'
    },
	splash_set_caption: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.splash_set_caption.desc,
        available: datasimple.gm81,
        parameters: [
            { label: 'cap', documentation: i18n.splash_set_caption.cap }
        ],
        signature: '(cap)'
    },
	splash_set_close_button: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.splash_set_close_button.desc,
        available: datasimple.gm81,
        parameters: [
            { label: 'show', documentation: i18n.splash_set_close_button.show }
        ],
        signature: '(show)'
    },
	splash_set_color: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.splash_set_color.desc,
        available: datasimple.gm81,
        parameters: [
            { label: 'col', documentation: i18n.splash_set_color.col }
        ],
        signature: '(col)'
    },
	splash_set_cursor: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.splash_set_cursor.desc,
        available: datasimple.gm81,
        arameters: [
            { label: 'vis', documentation: i18n.splash_set_cursor.vis }
        ],
        signature: '(vis)'
    },
	splash_set_fullscreen: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.splash_set_fullscreen.desc,
        available: datasimple.gm81,
        arameters: [
            { label: 'full', documentation: i18n.splash_set_fullscreen.full }
        ],
        signature: '(full)'
    },
	splash_set_interrupt: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.splash_set_interrupt.desc,
        available: datasimple.gm81,
        arameters: [
            { label: 'interrupt', documentation: i18n.splash_set_interrupt.interrupt }
        ],
        signature: '(interrupt)'
    },
	splash_set_main: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.splash_set_main.desc,
        available: datasimple.gm81,
        arameters: [
            { label: 'main', documentation: i18n.splash_set_main.main }
        ],
        signature: '(main)'
    },
	splash_set_position: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.splash_set_position.desc,
        available: datasimple.gm81,
        parameters: [
            { label: 'x', documentation: i18n.splash_set_position.x },
            { label: 'y', documentation: i18n.splash_set_position.y }
        ],
        signature: '(x, y)'
    },
	splash_set_scale: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.splash_set_scale.desc,
        available: datasimple.gm81,
        arameters: [
            { label: 'scale', documentation: i18n.splash_set_scale.scale }
        ],
        signature: '(scale)'
    },
	splash_set_size: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.splash_set_size.desc,
        available: datasimple.gm81,
        parameters: [
            { label: 'w', documentation: i18n.splash_set_size.w },
            { label: 'h', documentation: i18n.splash_set_size.h }
        ],
        signature: '(w, h)'
    },
	splash_set_stop_key: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.splash_set_stop_key.desc,
        available: datasimple.gm81,
        arameters: [
            { label: 'stop', documentation: i18n.splash_set_stop_key.stop }
        ],
        signature: '(stop)'
    },
	splash_set_stop_mouse: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.splash_set_stop_mouse.desc,
        available: datasimple.gm81,
        arameters: [
            { label: 'stop', documentation: i18n.splash_set_stop_mouse.stop }
        ],
        signature: '(stop)'
    },
	splash_set_top: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.splash_set_top.desc,
        available: datasimple.gm81,
        arameters: [
            { label: 'top', documentation: i18n.splash_set_top.top }
        ],
        signature: '(top)'
    },
	splash_show_image: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.splash_show_image.desc,
        available: datasimple.gm81,
        parameters: [
            { label: 'fname', documentation: i18n.splash_show_image.fname },
            { label: 'delay', documentation: i18n.splash_show_image.delay }
        ],
        signature: '(fname, delay)'
    },
	splash_show_text: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.splash_show_text.desc,
        available: datasimple.gm81,
        parameters: [
            { label: 'fname', documentation: i18n.splash_show_text.fname },
            { label: 'delay', documentation: i18n.splash_show_text.delay }
        ],
        signature: '(fname, delay)'
    },
	splash_show_video: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.splash_show_video.desc,
        available: datasimple.gm81,
        parameters: [
            { label: 'fname', documentation: i18n.splash_show_video.fname },
            { label: 'loop', documentation: i18n.splash_show_video.loop }
        ],
        signature: '(fname, loop)'
    },
	splash_show_web: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.splash_show_web.desc,
        available: datasimple.gm81,
        parameters: [
            { label: 'url', documentation: i18n.splash_show_web.url },
            { label: 'delay', documentation: i18n.splash_show_web.delay }
        ],
        signature: '(url, delay)'
    },
    sprite_add_from_screen: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.sprite_add_from_screen.desc,
        available: datasimple.gm81,
        parameters: [
            { label: 'ind', documentation: i18n.sprite_add_from_screen.ind },
            { label: 'x', documentation: i18n.sprite_add_from_screen.x },
            { label: 'y', documentation: i18n.sprite_add_from_screen.y },
            { label: 'w', documentation: i18n.sprite_add_from_screen.w },
            { label: 'h', documentation: i18n.sprite_add_from_screen.h },
            { label: 'removeback', documentation: i18n.sprite_add_from_screen.removeback },
            { label: 'smooth', documentation: i18n.sprite_add_from_screen.smooth }
        ],
        signature: '(ind, x, y, w, h, removeback, smooth)'
    },
    sprite_add_sprite: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.sprite_add_sprite.desc,
        available: datasimple.gm81,
        parameters: [
            { label: 'fname', documentation: i18n.sprite_add_sprite.fname }
        ],
        signature: '(fname)'
    },
    sprite_create_from_screen: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.sprite_create_from_screen.desc,
        available: datasimple.gm81,
        parameters: [
            { label: 'x', documentation: i18n.sprite_create_from_screen.x },
            { label: 'y', documentation: i18n.sprite_create_from_screen.y },
            { label: 'w', documentation: i18n.sprite_create_from_screen.w },
            { label: 'h', documentation: i18n.sprite_create_from_screen.h },
            { label: 'removeback', documentation: i18n.sprite_create_from_screen.removeback },
            { label: 'smooth', documentation: i18n.sprite_create_from_screen.smooth },
            { label: 'xorig', documentation: i18n.sprite_create_from_screen.xorig },
            { label: 'yorig', documentation: i18n.sprite_create_from_screen.yorig }
        ],
        signature: '(x, y, w, h, removeback, smooth, xorig, yorig)'
    },
    sprite_replace_sprite: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.sprite_replace_sprite.desc,
        available: datasimple.gm81,
        parameters: [
            { label: 'ind', documentation: i18n.sprite_replace_sprite.ind },
            { label: 'fname', documentation: i18n.sprite_replace_sprite.fname }
        ],
        signature: '(ind, fname)'
    },
    timeline_moment_add: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.timeline_moment_add.desc,
        available: datasimple.gm81,
        parameters: [
            { label: 'ind', documentation: i18n.timeline_moment_add.ind },
            { label: 'step', documentation: i18n.timeline_moment_add.step },
            { label: 'codestr', documentation: i18n.timeline_moment_add.codestr }
        ],
        signature: '(ind, step, codestr)'
    },
    transition_define: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.transition_define.desc,
        available: datasimple.gm81,
        parameters: [
            { label: 'kind', documentation: i18n.transition_define.kind },
            { label: 'name', documentation: i18n.transition_define.name }
        ],
        signature: '(kind, name)'
    },
	transition_exists: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.transition_exists.desc,
        available: datasimple.gm81,
        parameters: [
            { label: 'kind', documentation: i18n.transition_exists.kind }
        ],
        signature: '(kind)'
    },
	variable_global_array2_get: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.variable_global_array2_get.desc,
        available: datasimple.gm81,
        parameters: [
            { label: 'name', documentation: i18n.variable_global_array2_get.name },
            { label: 'ind1', documentation: i18n.variable_global_array2_get.ind1 },
            { label: 'ind2', documentation: i18n.variable_global_array2_get.ind2 }
        ],
        signature: '(name, ind1, ind2)'
    },
	variable_global_array2_set: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.variable_global_array2_set.desc,
        available: datasimple.gm81,
        parameters: [
            { label: 'name', documentation: i18n.variable_global_array2_set.name },
            { label: 'ind1', documentation: i18n.variable_global_array2_set.ind1 },
            { label: 'ind2', documentation: i18n.variable_global_array2_set.ind2 },
            { label: 'value', documentation: i18n.variable_global_array2_set.value }
        ],
        signature: '(name, ind1, ind2, value)'
    },
	variable_global_array_get: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.variable_global_array_get.desc,
        available: datasimple.gm81,
        parameters: [
            { label: 'name', documentation: i18n.variable_global_array_get.name },
            { label: 'ind', documentation: i18n.variable_global_array_get.ind }
        ],
        signature: '(name, ind)'
    },
	variable_global_array_set: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.variable_global_array_set.desc,
        available: datasimple.gm81,
        parameters: [
            { label: 'name', documentation: i18n.variable_global_array_set.name },
            { label: 'ind', documentation: i18n.variable_global_array_set.ind },
            { label: 'value', documentation: i18n.variable_global_array_set.value }
        ],
        signature: '(name, ind, value)'
    },
    variable_local_array2_get: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.variable_local_array2_get.desc,
        available: datasimple.gm81,
        parameters: [
            { label: 'name', documentation: i18n.variable_local_array2_get.name },
            { label: 'ind1', documentation: i18n.variable_local_array2_get.ind1 },
            { label: 'ind2', documentation: i18n.variable_local_array2_get.ind2 }
        ],
        signature: '(name, ind1, ind2)'
    },
	variable_local_array2_set: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.variable_local_array2_set.desc,
        available: datasimple.gm81,
        parameters: [
            { label: 'name', documentation: i18n.variable_local_array2_set.name },
            { label: 'ind1', documentation: i18n.variable_local_array2_set.ind1 },
            { label: 'ind2', documentation: i18n.variable_local_array2_set.ind2 },
            { label: 'value', documentation: i18n.variable_local_array2_set.value }
        ],
        signature: '(name, ind1, ind2, value)'
    },
	variable_local_array_get: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.variable_local_array_get.desc,
        available: datasimple.gm81,
        parameters: [
            { label: 'name', documentation: i18n.variable_local_array_get.name },
            { label: 'ind', documentation: i18n.variable_local_array_get.ind }
        ],
        signature: '(name, ind)'
    },
	variable_local_array_set: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.variable_local_array_set.desc,
        available: datasimple.gm81,
        parameters: [
            { label: 'name', documentation: i18n.variable_local_array_set.name },
            { label: 'ind', documentation: i18n.variable_local_array_set.ind },
            { label: 'value', documentation: i18n.variable_local_array_set.value }
        ],
        signature: '(name, ind, value)'
    },
	variable_local_exists: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.variable_local_exists.desc,
        available: datasimple.gm81,
        parameters: [
            { label: 'name', documentation: i18n.variable_local_exists.name }
        ],
        signature: '(name)'
    },
	variable_local_get: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.variable_local_get.desc,
        available: datasimple.gm81,
        parameters: [
            { label: 'name', documentation: i18n.variable_local_get.name }
        ],
        signature: '(name)'
    },
	variable_local_set: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.variable_local_set.desc,
        available: datasimple.gm81,
        parameters: [
            { label: 'name', documentation: i18n.variable_local_set.name },
            { label: 'value', documentation: i18n.variable_local_set.value }
        ],
        signature: '(name, value)'
    },
    window_default: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.window_default.desc,
        available: datasimple.gm81
    },
    window_get_region_height: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.window_get_region_height.desc,
        available: datasimple.gm81
    },
	window_get_region_scale: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.window_get_region_scale.desc,
        available: datasimple.gm81
    },
	window_get_region_width: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.window_get_region_width.desc,
        available: datasimple.gm81
    },
	window_get_showborder: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.window_get_showborder.desc,
        available: datasimple.gm81
    },
	window_get_showicons: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.window_get_showicons.desc,
        available: datasimple.gm81
    },
	window_get_sizeable: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.window_get_sizeable.desc,
        available: datasimple.gm81
    },
	window_get_stayontop: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.window_get_stayontop.desc,
        available: datasimple.gm81
    },
    window_get_visible: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.window_get_visible.desc,
        available: datasimple.gm81
    },
    window_set_region_scale: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.window_set_region_scale.desc,
        available: datasimple.gm81,
        parameters: [
            { label: 'scale', documentation: i18n.window_set_region_scale.scale },
            { label: 'adaptwindow', documentation: i18n.window_set_region_scale.adaptwindow }
        ],
        signature: '(scale, adaptwindow)'
    },
	window_set_region_size: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.window_set_region_size.desc,
        available: datasimple.gm81,
        parameters: [
            { label: 'w', documentation: i18n.window_set_region_size.w },
            { label: 'h', documentation: i18n.window_set_region_size.h },
            { label: 'adaptwindow', documentation: i18n.window_set_region_size.adaptwindow }
        ],
        signature: '(w, h, adaptwindow)'
    },
	window_set_showborder: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.window_set_showborder.desc,
        available: datasimple.gm81,
        parameters: [
            { label: 'show', documentation: i18n.window_set_showborder.show }
        ],
        signature: '(show)'
    },
	window_set_showicons: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.window_set_showicons.desc,
        available: datasimple.gm81,
        parameters: [
            { label: 'show', documentation: i18n.window_set_showicons.show }
        ],
        signature: '(show)'
    },
	window_set_sizeable: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.window_set_sizeable.desc,
        available: datasimple.gm81,
        parameters: [
            { label: 'sizeable', documentation: i18n.window_set_sizeable.sizeable }
        ],
        signature: '(sizeable)'
    },
	window_set_stayontop: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.window_set_stayontop.desc,
        available: datasimple.gm81,
        parameters: [
            { label: 'stay', documentation: i18n.window_set_stayontop.stay }
        ],
        signature: '(stay)'
    },
	window_set_visible: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.window_set_visible.desc,
        available: datasimple.gm81,
        parameters: [
            { label: 'visible', documentation: i18n.window_set_visible.visible }
        ],
        signature: '(visible)'
    },
	window_views_mouse_set: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.window_views_mouse_set.desc,
        available: datasimple.gm81,
        parameters: [
            { label: 'x', documentation: i18n.window_views_mouse_set.x },
            { label: 'y', documentation: i18n.window_views_mouse_set.y }
        ],
        signature: '(x, y)'
    },
	window_view_mouse_set: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.window_view_mouse_set.desc,
        available: datasimple.gm81,
        parameters: [
            { label: 'id', documentation: i18n.window_view_mouse_set.id },
            { label: 'x', documentation: i18n.window_view_mouse_set.x },
            { label: 'y', documentation: i18n.window_view_mouse_set.y }
        ],
        signature: '(id, x, y)'
    },
    texture_preload: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.texture_preload.desc,
        available: datasimple.gm81,
        parameters: [
            { label: 'texid', documentation: i18n.texture_preload.texid }
        ],
        signature: '(texid)'
    },
    texture_set_priority: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.texture_set_priority.desc,
        available: datasimple.gm81,
        parameters: [
            { label: 'texid', documentation: i18n.texture_set_priority.texid },
            { label: 'prio', documentation: i18n.texture_set_priority.prio }
        ],
        signature: '(texid, prio)'
    },
    display_get_colourdepth: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.display_get_colourdepth.desc,
        available: datasimple.gm81
    },
    display_get_frequency: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.display_get_frequency.desc,
        available: datasimple.gm81
    },
    show_info: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.show_info.desc,
        available: datasimple.gm81
    },
    load_info: {
        description: '[Function] (' + i18n_notice.gm_81 + ')' + i18n.load_info.desc,
        available: datasimple.gm81,
        parameters: [
            { label: 'fname', documentation: i18n.load_info.fname }
        ],
        signature: '(fname)'
    },

	//New in GameMaker Studio 2
	string_hash_to_newline: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.string_hash_to_newline.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'str', documentation: i18n.string_hash_to_newline.str }
        ],
        signature: '(str)'
    },
	game_set_speed: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.game_set_speed.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'value', documentation: i18n.game_set_speed.value },
            { label: 'type', documentation: i18n.game_set_speed.type }
        ],
        signature: '(value, type)'
    },
	game_get_speed: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.game_get_speed.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'type', documentation: i18n.game_get_speed.type }
        ],
        signature: '(type)'
    },
	sprite_set_speed: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.sprite_set_speed.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'ind', documentation: i18n.sprite_set_speed.ind },
            { label: 'speed', documentation: i18n.sprite_set_speed.speed },
            { label: 'type', documentation: i18n.sprite_set_speed.type }
        ],
        signature: '(ind, speed, type)'
    },
	sprite_get_speed_type: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.sprite_get_speed_type.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'ind', documentation: i18n.sprite_get_speed_type.ind }
        ],
        signature: '(ind)'
    },
	sprite_get_speed: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.sprite_get_speed.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'ind', documentation: i18n.sprite_get_speed.ind }
        ],
        signature: '(ind)'
    },
	texture_get_uvs: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.texture_get_uvs.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'texid', documentation: i18n.texture_get_uvs.texid }
        ],
        signature: '(texid)'
    },
	room_get_camera: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.room_get_camera.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'ind', documentation: i18n.room_get_camera.ind },
            { label: 'vind', documentation: i18n.room_get_camera.vind }
        ],
        signature: '(ind, vind)'
    },
	room_set_camera: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.room_set_camera.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'ind', documentation: i18n.room_set_camera.ind },
            { label: 'vind', documentation: i18n.room_set_camera.vind },
            { label: 'camera', documentation: i18n.room_set_camera.camera }
        ],
        signature: '(ind, vind, camera)'
    },
	room_get_viewport: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.room_get_viewport.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'ind', documentation: i18n.room_get_viewport.ind },
            { label: 'vind', documentation: i18n.room_get_viewport.vind }
        ],
        signature: '(ind, vind)'
    },
	room_set_viewport: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.room_set_viewport.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'ind', documentation: i18n.room_set_viewport.ind },
            { label: 'vind', documentation: i18n.room_set_viewport.vind },
            { label: 'vis', documentation: i18n.room_set_viewport.vis },
            { label: 'xport', documentation: i18n.room_set_viewport.xport },
            { label: 'yport', documentation: i18n.room_set_viewport.yport },
            { label: 'wport', documentation: i18n.room_set_viewport.wport },
            { label: 'hport', documentation: i18n.room_set_viewport.hport }
        ],
        signature: '(ind, vind, vis, xport, yport, wport, hport)'
    },
	ds_list_set: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.ds_list_set.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'id', documentation: i18n.ds_list_set.id },
            { label: 'pos', documentation: i18n.ds_list_set.pos },
            { label: 'value', documentation: i18n.ds_list_set.value }
        ],
        signature: '(id, pos, value)'
    },
	ds_map_set: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.ds_map_set.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'id', documentation: i18n.ds_map_set.id },
            { label: 'key', documentation: i18n.ds_map_set.key },
            { label: 'value', documentation: i18n.ds_map_set.value }
        ],
        signature: '(id, key, value)'
    },
	part_system_create_layer: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.part_system_create_layer.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'layer', documentation: i18n.part_system_create_layer.layer },
            { label: 'persistent', documentation: i18n.part_system_create_layer.persistent }
        ],
        signature: '(layer, persistent)'
    },
	part_system_get_layer: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.part_system_get_layer.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'ind', documentation: i18n.part_system_get_layer.ind }
        ],
        signature: '(ind)'
    },
	part_system_layer: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.part_system_layer.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'ind', documentation: i18n.part_system_layer.ind },
            { label: 'layer', documentation: i18n.part_system_layer.layer }
        ],
        signature: '(ind, layer)'
    },
	matrix_build_identity: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.matrix_build_identity.desc,
        available: datasimple.gms2
    },
	matrix_build_lookat: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.matrix_build_lookat.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'xfrom', documentation: i18n.matrix_build_lookat.xfrom },
            { label: 'yfrom', documentation: i18n.matrix_build_lookat.yfrom },
            { label: 'zfrom', documentation: i18n.matrix_build_lookat.zfrom },
            { label: 'xto', documentation: i18n.matrix_build_lookat.xto },
            { label: 'yto', documentation: i18n.matrix_build_lookat.yto },
            { label: 'zto', documentation: i18n.matrix_build_lookat.zto },
            { label: 'xup', documentation: i18n.matrix_build_lookat.xup },
            { label: 'yup', documentation: i18n.matrix_build_lookat.yup },
            { label: 'zup', documentation: i18n.matrix_build_lookat.zup }
        ],
        signature: '(xfrom, yfrom, zfrom, xto, yto, zto, xup, yup, zup)'
    },
	matrix_build_projection_ortho: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.matrix_build_projection_ortho.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'width', documentation: i18n.matrix_build_projection_ortho.width },
            { label: 'height', documentation: i18n.matrix_build_projection_ortho.height },
            { label: 'znear', documentation: i18n.matrix_build_projection_ortho.znear },
            { label: 'zfar', documentation: i18n.matrix_build_projection_ortho.zfar }
        ],
        signature: '(width, height, znear, zfar)'
    },
	matrix_build_projection_perspective: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.matrix_build_projection_perspective.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'width', documentation: i18n.matrix_build_projection_perspective.width },
            { label: 'height', documentation: i18n.matrix_build_projection_perspective.height },
            { label: 'znear', documentation: i18n.matrix_build_projection_perspective.znear },
            { label: 'zfar', documentation: i18n.matrix_build_projection_perspective.zfar }
        ],
        signature: '(width, height, znear, zfar)'
    },
	matrix_build_projection_perspective_fov: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.matrix_build_projection_perspective_fov.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'fov_y', documentation: i18n.matrix_build_projection_perspective_fov.fov_y },
            { label: 'height', documentation: i18n.matrix_build_projection_perspective_fov.height },
            { label: 'znear', documentation: i18n.matrix_build_projection_perspective_fov.znear },
            { label: 'zfar', documentation: i18n.matrix_build_projection_perspective_fov.zfar }
        ],
        signature: '(fov_y, aspect, znear, zfar)'
    },
	matrix_transform_vertex: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.matrix_transform_vertex.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'matrix', documentation: i18n.matrix_transform_vertex.matrix },
            { label: 'x', documentation: i18n.matrix_transform_vertex.x },
            { label: 'y', documentation: i18n.matrix_transform_vertex.y },
            { label: 'z', documentation: i18n.matrix_transform_vertex.z }
        ],
        signature: '(matrix, x, y, z)'
    },
	matrix_stack_push: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.matrix_stack_push.desc,
        available: datasimple.gms2,
        parameters: [
            { label: '...', documentation: i18n.matrix_stack_push.more }
        ],
        signature: '(...)'
    },
	matrix_stack_pop: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.matrix_stack_pop.desc,
        available: datasimple.gms2
    },
	matrix_stack_set: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.matrix_stack_set.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'matrix', documentation: i18n.matrix_stack_set.matrix }
        ],
        signature: '(matrix)'
    },
	matrix_stack_clear: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.matrix_stack_clear.desc,
        available: datasimple.gms2
    },
	matrix_stack_top: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.matrix_stack_top.desc,
        available: datasimple.gms2
    },
	matrix_stack_is_empty: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.matrix_stack_is_empty.desc,
        available: datasimple.gms2
    },
	gpu_set_blendenable: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.gpu_set_blendenable.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'enable', documentation: i18n.gpu_set_blendenable.enable }
        ],
        signature: '(enable)'
    },
	gpu_set_ztestenable: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.gpu_set_ztestenable.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'enable', documentation: i18n.gpu_set_ztestenable.enable }
        ],
        signature: '(enable)'
    },
	gpu_set_zfunc: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.gpu_set_zfunc.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'enable', documentation: i18n.gpu_set_zfunc.enable }
        ],
        signature: '(enable)'
    },
	gpu_set_zwriteenable: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.gpu_set_zwriteenable.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'enable', documentation: i18n.gpu_set_zwriteenable.enable }
        ],
        signature: '(enable)'
    },
	gpu_set_fog: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.gpu_set_fog.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'enable', documentation: i18n.gpu_set_fog.enable },
            { label: 'col', documentation: i18n.gpu_set_fog.col },
            { label: 'start', documentation: i18n.gpu_set_fog.start },
            { label: 'end', documentation: i18n.gpu_set_fog.end }
        ],
        signature: '(enable, col, start, end)'
    },
	gpu_set_cullmode: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.gpu_set_cullmode.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'cullmode', documentation: i18n.gpu_set_cullmode.cullmode }
        ],
        signature: '(cullmode)'
    },
	gpu_set_blendmode: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.gpu_set_blendmode.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'mode', documentation: i18n.gpu_set_blendmode.mode }
        ],
        signature: '(mode)'
    },
	gpu_set_blendmode_ext: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.gpu_set_blendmode_ext.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'src', documentation: i18n.gpu_set_blendmode_ext.src },
            { label: 'dest', documentation: i18n.gpu_set_blendmode_ext.dest }
        ],
        signature: '(src, dest)'
    },
	gpu_set_blendmode_ext_sepalpha: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.gpu_set_blendmode_ext_sepalpha.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'src', documentation: i18n.gpu_set_blendmode_ext_sepalpha.src },
            { label: 'dest', documentation: i18n.gpu_set_blendmode_ext_sepalpha.dest },
            { label: 'srcalpha', documentation: i18n.gpu_set_blendmode_ext_sepalpha.srcalpha },
            { label: 'destalpha', documentation: i18n.gpu_set_blendmode_ext_sepalpha.destalpha }
        ],
        signature: '(src, dest, srcalpha, destalpha)'
    },
	gpu_set_colorwriteenable: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.gpu_set_colorwriteenable.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'red', documentation: i18n.gpu_set_colorwriteenable.red },
            { label: 'green', documentation: i18n.gpu_set_colorwriteenable.green },
            { label: 'blue', documentation: i18n.gpu_set_colorwriteenable.blue },
            { label: 'alpha', documentation: i18n.gpu_set_colorwriteenable.alpha }
        ],
        signature: '(red, green, blue, alpha)'
    },
	gpu_set_colourwriteenable: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.gpu_set_colourwriteenable.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'red', documentation: i18n.gpu_set_colourwriteenable.red },
            { label: 'green', documentation: i18n.gpu_set_colourwriteenable.green },
            { label: 'blue', documentation: i18n.gpu_set_colourwriteenable.blue },
            { label: 'alpha', documentation: i18n.gpu_set_colourwriteenable.alpha }
        ],
        signature: '(red, green, blue, alpha)'
    },
	gpu_set_alphatestenable: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.gpu_set_alphatestenable.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'enable', documentation: i18n.gpu_set_alphatestenable.enable }
        ],
        signature: '(enable)'
    },
	gpu_set_alphatestref: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.gpu_set_alphatestref.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'value', documentation: i18n.gpu_set_alphatestref.value }
        ],
        signature: '(value)'
    },
	gpu_set_alphatestfunc: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.gpu_set_alphatestfunc.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'cmp_func', documentation: i18n.gpu_set_alphatestfunc.cmp_func }
        ],
        signature: '(cmp_func)'
    },
	gpu_set_texfilter: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.gpu_set_texfilter.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'linear', documentation: i18n.gpu_set_texfilter.linear }
        ],
        signature: '(linear)'
    },
	gpu_set_texfilter_ext: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.gpu_set_texfilter_ext.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'sampler_id', documentation: i18n.gpu_set_texfilter_ext.sampler_id },
            { label: 'linear', documentation: i18n.gpu_set_texfilter_ext.linear }
        ],
        signature: '(sampler_id, linear)'
    },
	gpu_set_texrepeat: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.gpu_set_texrepeat.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'repeat', documentation: i18n.gpu_set_texrepeat.repeat }
        ],
        signature: '(repeat)'
    },
	gpu_set_texrepeat_ext: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.gpu_set_texrepeat_ext.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'sampler_id', documentation: i18n.gpu_set_texrepeat_ext.sampler_id },
            { label: 'repeat', documentation: i18n.gpu_set_texrepeat_ext.repeat }
        ],
        signature: '(sampler_id, repeat)'
    },
	gpu_set_tex_filter: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.gpu_set_tex_filter.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'linear', documentation: i18n.gpu_set_tex_filter.linear }
        ],
        signature: '(linear)'
    },
	gpu_set_tex_filter_ext: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.gpu_set_tex_filter_ext.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'sampler_id', documentation: i18n.gpu_set_tex_filter_ext.sampler_id },
            { label: 'linear', documentation: i18n.gpu_set_tex_filter_ext.linear }
        ],
        signature: '(sampler_id, linear)'
    },
	gpu_set_tex_repeat: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.gpu_set_tex_repeat.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'repeat', documentation: i18n.gpu_set_tex_repeat.repeat }
        ],
        signature: '(repeat)'
    },
	gpu_set_tex_repeat_ext: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.gpu_set_tex_repeat_ext.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'sampler_id', documentation: i18n.gpu_set_tex_repeat_ext.sampler_id },
            { label: 'repeat', documentation: i18n.gpu_set_tex_repeat_ext.repeat }
        ],
        signature: '(sampler_id, repeat)'
    },
	gpu_set_tex_mip_filter: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.gpu_set_tex_mip_filter.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'filter', documentation: i18n.gpu_set_tex_mip_filter.filter }
        ],
        signature: '(filter)'
    },
	gpu_set_tex_mip_filter_ext: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.gpu_set_tex_mip_filter_ext.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'sampler_id', documentation: i18n.gpu_set_tex_mip_filter_ext.sampler_id },
            { label: 'filter', documentation: i18n.gpu_set_tex_mip_filter_ext.filter }
        ],
        signature: '(sampler_id, filter)'
    },
	gpu_set_tex_mip_bias: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.gpu_set_tex_mip_bias.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'bias', documentation: i18n.gpu_set_tex_mip_bias.bias }
        ],
        signature: '(bias)'
    },
	gpu_set_tex_mip_bias_ext: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.gpu_set_tex_mip_bias_ext.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'sampler_id', documentation: i18n.gpu_set_tex_mip_bias_ext.sampler_id },
            { label: 'bias', documentation: i18n.gpu_set_tex_mip_bias_ext.bias }
        ],
        signature: '(sampler_id, bias)'
    },
	gpu_set_tex_min_mip: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.gpu_set_tex_min_mip.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'minmip', documentation: i18n.gpu_set_tex_min_mip.minmip }
        ],
        signature: '(minmip)'
    },
	gpu_set_tex_min_mip_ext: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.gpu_set_tex_min_mip_ext.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'sampler_id', documentation: i18n.gpu_set_tex_min_mip_ext.sampler_id },
            { label: 'minmip', documentation: i18n.gpu_set_tex_min_mip_ext.minmip }
        ],
        signature: '(sampler_id, minmip)'
    },
	gpu_set_tex_max_mip: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.gpu_set_tex_max_mip.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'maxmip', documentation: i18n.gpu_set_tex_max_mip.maxmip }
        ],
        signature: '(maxmip)'
    },
	gpu_set_tex_max_mip_ext: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.gpu_set_tex_max_mip_ext.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'sampler_id', documentation: i18n.gpu_set_tex_max_mip_ext.sampler_id },
            { label: 'maxmip', documentation: i18n.gpu_set_tex_max_mip_ext.maxmip }
        ],
        signature: '(sampler_id, maxmip)'
    },
	gpu_set_tex_max_aniso: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.gpu_set_tex_max_aniso.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'maxaniso', documentation: i18n.gpu_set_tex_max_aniso.maxaniso }
        ],
        signature: '(maxaniso)'
    },
	gpu_set_tex_max_aniso_ext: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.gpu_set_tex_max_aniso_ext.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'sampler_id', documentation: i18n.gpu_set_tex_max_aniso_ext.sampler_id },
            { label: 'maxaniso', documentation: i18n.gpu_set_tex_max_aniso_ext.maxaniso }
        ],
        signature: '(sampler_id, maxaniso)'
    },
	gpu_set_tex_mip_enable: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.gpu_set_tex_mip_enable.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'setting', documentation: i18n.gpu_set_tex_mip_enable.setting }
        ],
        signature: '(setting)'
    },
	gpu_set_tex_mip_enable_ext: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.gpu_set_tex_mip_enable_ext.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'sampler_id', documentation: i18n.gpu_set_tex_mip_enable_ext.sampler_id },
            { label: 'setting', documentation: i18n.gpu_set_tex_mip_enable_ext.setting }
        ],
        signature: '(sampler_id, setting)'
    },
	gpu_get_blendenable: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.gpu_get_blendenable.desc,
        available: datasimple.gms2
    },
	gpu_get_ztestenable: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.gpu_get_ztestenable.desc,
        available: datasimple.gms2
    },
	gpu_get_zfunc: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.gpu_get_zfunc.desc,
        available: datasimple.gms2
    },
	gpu_get_zwriteenable: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.gpu_get_zwriteenable.desc,
        available: datasimple.gms2
    },
	gpu_get_fog: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.gpu_get_fog.desc,
        available: datasimple.gms2
    },
	gpu_get_cullmode: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.gpu_get_cullmode.desc,
        available: datasimple.gms2
    },
	gpu_get_blendmode: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.gpu_get_blendmode.desc,
        available: datasimple.gms2
    },
	gpu_get_blendmode_ext: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.gpu_get_blendmode_ext.desc,
        available: datasimple.gms2
    },
	gpu_get_blendmode_ext_sepalpha: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.gpu_get_blendmode_ext_sepalpha.desc,
        available: datasimple.gms2
    },
	gpu_get_blendmode_src: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.gpu_get_blendmode_src.desc,
        available: datasimple.gms2
    },
	gpu_get_blendmode_dest: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.gpu_get_blendmode_dest.desc,
        available: datasimple.gms2
    },
	gpu_get_blendmode_srcalpha: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.gpu_get_blendmode_srcalpha.desc,
        available: datasimple.gms2
    },
	gpu_get_blendmode_destalpha: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.gpu_get_blendmode_destalpha.desc,
        available: datasimple.gms2
    },
	gpu_get_colorwriteenable: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.gpu_get_colorwriteenable.desc,
        available: datasimple.gms2
    },
	gpu_get_colourwriteenable: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.gpu_get_colourwriteenable.desc,
        available: datasimple.gms2
    },
	gpu_get_alphatestenable: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.gpu_get_alphatestenable.desc,
        available: datasimple.gms2
    },
	gpu_get_alphatestref: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.gpu_get_alphatestref.desc,
        available: datasimple.gms2
    },
	gpu_get_alphatestfunc: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.gpu_get_alphatestfunc.desc,
        available: datasimple.gms2
    },
	gpu_get_texfilter: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.gpu_get_texfilter.desc,
        available: datasimple.gms2
    },
	gpu_get_texfilter_ext: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.gpu_get_texfilter_ext.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'sampler_id', documentation: i18n.gpu_get_texfilter_ext.sampler_id }
        ],
        signature: '(sampler_id)'
    },
	gpu_get_texrepeat: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.gpu_get_texrepeat.desc,
        available: datasimple.gms2
    },
	gpu_get_texrepeat_ext: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.gpu_get_texrepeat_ext.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'sampler_id', documentation: i18n.gpu_get_texrepeat_ext.sampler_id }
        ],
        signature: '(sampler_id)'
    },
	gpu_get_tex_filter: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.gpu_get_tex_filter.desc,
        available: datasimple.gms2
    },
	gpu_get_tex_filter_ext: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.gpu_get_tex_filter_ext.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'sampler_id', documentation: i18n.gpu_get_tex_filter_ext.sampler_id }
        ],
        signature: '(sampler_id)'
    },
	gpu_get_tex_repeat: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.gpu_get_tex_repeat.desc,
        available: datasimple.gms2
    },
	gpu_get_tex_repeat_ext: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.gpu_get_tex_repeat_ext.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'sampler_id', documentation: i18n.gpu_get_tex_repeat_ext.sampler_id }
        ],
        signature: '(sampler_id)'
    },
	gpu_get_tex_mip_filter: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.gpu_get_tex_mip_filter.desc,
        available: datasimple.gms2
    },
	gpu_get_tex_mip_filter_ext: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.gpu_get_tex_mip_filter_ext.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'sampler_id', documentation: i18n.gpu_get_tex_mip_filter_ext.sampler_id }
        ],
        signature: '(sampler_id)'
    },
	gpu_get_tex_mip_bias: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.gpu_get_tex_mip_bias.desc,
        available: datasimple.gms2
    },
	gpu_get_tex_mip_bias_ext: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.gpu_get_tex_mip_bias_ext.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'sampler_id', documentation: i18n.gpu_get_tex_mip_bias_ext.sampler_id }
        ],
        signature: '(sampler_id)'
    },
	gpu_get_tex_min_mip: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.gpu_get_tex_min_mip.desc,
        available: datasimple.gms2
    },
	gpu_get_tex_min_mip_ext: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.gpu_get_tex_min_mip_ext.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'sampler_id', documentation: i18n.gpu_get_tex_min_mip_ext.sampler_id }
        ],
        signature: '(sampler_id)'
    },
	gpu_get_tex_max_mip: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.gpu_get_tex_max_mip.desc,
        available: datasimple.gms2
    },
	gpu_get_tex_max_mip_ext: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.gpu_get_tex_max_mip_ext.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'sampler_id', documentation: i18n.gpu_get_tex_max_mip_ext.sampler_id }
        ],
        signature: '(sampler_id)'
    },
	gpu_get_tex_max_aniso: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.gpu_get_tex_max_aniso.desc,
        available: datasimple.gms2
    },
	gpu_get_tex_max_aniso_ext: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.gpu_get_tex_max_aniso_ext.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'sampler_id', documentation: i18n.gpu_get_tex_max_aniso_ext.sampler_id }
        ],
        signature: '(sampler_id)'
    },
	gpu_get_tex_mip_enable: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.gpu_get_tex_mip_enable.desc,
        available: datasimple.gms2
    },
	gpu_get_tex_mip_enable_ext: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.gpu_get_tex_mip_enable_ext.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'sampler_id', documentation: i18n.gpu_get_tex_mip_enable_ext.sampler_id }
        ],
        signature: '(sampler_id)'
    },
	gpu_push_state: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.gpu_push_state.desc,
        available: datasimple.gms2
    },
	gpu_pop_state: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.gpu_pop_state.desc,
        available: datasimple.gms2
    },
	gpu_get_state: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.gpu_get_state.desc,
        available: datasimple.gms2
    },
	gpu_set_state: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.gpu_set_state.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'map', documentation: i18n.gpu_set_state.map }
        ],
        signature: '(map)'
    },
	draw_light_define_ambient: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.draw_light_define_ambient.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'col', documentation: i18n.draw_light_define_ambient.col }
        ],
        signature: '(col)'
    },
	draw_light_define_direction: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.draw_light_define_direction.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'ind', documentation: i18n.draw_light_define_direction.ind },
            { label: 'dx', documentation: i18n.draw_light_define_direction.dx },
            { label: 'dy', documentation: i18n.draw_light_define_direction.dy },
            { label: 'dz', documentation: i18n.draw_light_define_direction.dz },
            { label: 'col', documentation: i18n.draw_light_define_direction.col }
        ],
        signature: '(ind, dx, dy, dz, col)'
    },
	draw_light_define_point: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.draw_light_define_point.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'ind', documentation: i18n.draw_light_define_point.ind },
            { label: 'x', documentation: i18n.draw_light_define_point.x },
            { label: 'y', documentation: i18n.draw_light_define_point.y },
            { label: 'z', documentation: i18n.draw_light_define_point.z },
            { label: 'range', documentation: i18n.draw_light_define_point.range },
            { label: 'col', documentation: i18n.draw_light_define_point.col }
        ],
        signature: '(ind, x, y, z, range, col)'
    },
	draw_light_enable: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.draw_light_enable.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'ind', documentation: i18n.draw_light_enable.ind },
            { label: 'enable', documentation: i18n.draw_light_enable.enable }
        ],
        signature: '(ind, enable)'
    },
	draw_set_lighting: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.draw_set_lighting.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'enable', documentation: i18n.draw_set_lighting.enable }
        ],
        signature: '(enable)'
    },
	draw_light_get_ambient: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.draw_light_get_ambient.desc,
        available: datasimple.gms2
    },
	draw_light_get: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.draw_light_get.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'ind', documentation: i18n.draw_light_get.ind }
        ],
        signature: '(ind)'
    },
	draw_get_lighting: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.draw_get_lighting.desc,
        available: datasimple.gms2
    },
	load_csv: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.load_csv.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'filename', documentation: i18n.load_csv.filename }
        ],
        signature: '(filename)'
    },
    skeleton_animation_get_frame: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.skeleton_animation_get_frame.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'track', documentation: i18n.skeleton_animation_get_frame.track }
        ],
        signature: '(track)'
    },
	skeleton_animation_set_frame: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.skeleton_animation_set_frame.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'track', documentation: i18n.skeleton_animation_set_frame.track },
            { label: 'index', documentation: i18n.skeleton_animation_set_frame.index }
        ],
        signature: '(track, index)'
    },
	layer_get_id: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.layer_get_id.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'layer_name', documentation: i18n.layer_get_id.layer_name }
        ],
        signature: '(layer_name)'
    },
	layer_get_id_at_depth: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.layer_get_id_at_depth.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'depth', documentation: i18n.layer_get_id_at_depth.depth }
        ],
        signature: '(depth)'
    },
	layer_get_depth: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.layer_get_depth.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'layer_id', documentation: i18n.layer_get_depth.layer_id }
        ],
        signature: '(layer_id)'
    },
	layer_create: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.layer_create.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'depth', documentation: i18n.layer_create.depth },
            { label: 'name*', documentation: i18n.layer_create.name },
            { label: '...', documentation: i18n.layer_create.more }
        ],
        signature: '(depth, name*, ...)'
    },
	layer_destroy: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.layer_destroy.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'layer_id', documentation: i18n.layer_destroy.layer_id }
        ],
        signature: '(layer_id)'
    },
	layer_destroy_instances: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.layer_destroy_instances.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'layer_id', documentation: i18n.layer_destroy_instances.layer_id }
        ],
        signature: '(layer_id)'
    },
	layer_add_instance: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.layer_add_instance.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'layer_id', documentation: i18n.layer_add_instance.layer_id },
            { label: 'instance', documentation: i18n.layer_add_instance.instance }
        ],
        signature: '(layer_id, instance)'
    },
	layer_has_instance: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.layer_has_instance.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'layer_id', documentation: i18n.layer_has_instance.layer_id },
            { label: 'instance', documentation: i18n.layer_has_instance.instance }
        ],
        signature: '(layer_id, instance)'
    },
	layer_set_visible: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.layer_set_visible.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'layer_id', documentation: i18n.layer_set_visible.layer_id },
            { label: 'visible', documentation: i18n.layer_set_visible.visible }
        ],
        signature: '(layer_id, visible)'
    },
	layer_get_visible: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.layer_get_visible.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'layer_id', documentation: i18n.layer_get_visible.layer_id }
        ],
        signature: '(layer_id)'
    },
	layer_exists: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.layer_exists.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'layer_id', documentation: i18n.layer_exists.layer_id }
        ],
        signature: '(layer_id)'
    },
	layer_x: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.layer_x.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'layer_id', documentation: i18n.layer_x.layer_id },
            { label: 'x', documentation: i18n.layer_x.x }
        ],
        signature: '(layer_id, x)'
    },
	layer_y: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.layer_y.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'layer_id', documentation: i18n.layer_y.layer_id },
            { label: 'y', documentation: i18n.layer_y.y }
        ],
        signature: '(layer_id, y)'
    },
	layer_get_x: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.layer_get_x.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'layer_id', documentation: i18n.layer_get_x.layer_id }
        ],
        signature: '(layer_id)'
    },
	layer_get_y: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.layer_get_y.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'layer_id', documentation: i18n.layer_get_y.layer_id }
        ],
        signature: '(layer_id)'
    },
	layer_hspeed: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.layer_hspeed.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'layer_id', documentation: i18n.layer_hspeed.layer_id },
            { label: 'speed', documentation: i18n.layer_hspeed.speed }
        ],
        signature: '(layer_id, speed)'
    },
	layer_vspeed: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.layer_vspeed.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'layer_id', documentation: i18n.layer_vspeed.layer_id },
            { label: 'speed', documentation: i18n.layer_vspeed.speed }
        ],
        signature: '(layer_id, speed)'
    },
	layer_get_hspeed: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.layer_get_hspeed.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'layer_id', documentation: i18n.layer_get_hspeed.layer_id }
        ],
        signature: '(layer_id)'
    },
	layer_get_vspeed: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.layer_get_vspeed.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'layer_id', documentation: i18n.layer_get_vspeed.layer_id }
        ],
        signature: '(layer_id)'
    },
	layer_script_begin: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.layer_script_begin.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'layer_id', documentation: i18n.layer_script_begin.layer_id },
            { label: 'script', documentation: i18n.layer_script_begin.script }
        ],
        signature: '(layer_id, script)'
    },
	layer_script_end: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.layer_script_end.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'layer_id', documentation: i18n.layer_script_end.layer_id },
            { label: 'script', documentation: i18n.layer_script_end.script }
        ],
        signature: '(layer_id, script)'
    },
	layer_shader: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.layer_shader.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'layer_id', documentation: i18n.layer_shader.layer_id },
            { label: 'shader', documentation: i18n.layer_shader.shader }
        ],
        signature: '(layer_id, shader)'
    },
	layer_get_script_begin: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.layer_get_script_begin.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'layer_id', documentation: i18n.layer_get_script_begin.layer_id }
        ],
        signature: '(layer_id)'
    },
	layer_get_script_end: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.layer_get_script_end.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'layer_id', documentation: i18n.layer_get_script_end.layer_id }
        ],
        signature: '(layer_id)'
    },
	layer_get_shader: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.layer_get_shader.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'layer_id', documentation: i18n.layer_get_shader.layer_id }
        ],
        signature: '(layer_id)'
    },
	layer_set_target_room: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.layer_set_target_room.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'room', documentation: i18n.layer_set_target_room.room }
        ],
        signature: '(room)'
    },
	layer_get_target_room: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.layer_get_target_room.desc,
        available: datasimple.gms2
    },
	layer_reset_target_room: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.layer_reset_target_room.desc,
        available: datasimple.gms2
    },
	layer_get_all: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.layer_get_all.desc,
        available: datasimple.gms2
    },
	layer_get_all_elements: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.layer_get_all_elements.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'layer_id', documentation: i18n.layer_get_all_elements.layer_id }
        ],
        signature: '(layer_id)'
    },
	layer_get_name: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.layer_get_name.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'layer_id', documentation: i18n.layer_get_name.layer_id }
        ],
        signature: '(layer_id)'
    },
	layer_depth: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.layer_depth.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'layer_id', documentation: i18n.layer_depth.layer_id },
            { label: 'depth', documentation: i18n.layer_depth.depth }
        ],
        signature: '(layer_id, depth)'
    },
	layer_get_element_layer: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.layer_get_element_layer.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'element_id', documentation: i18n.layer_get_element_layer.element_id }
        ],
        signature: '(element_id)'
    },
	layer_get_element_type: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.layer_get_element_type.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'element_id', documentation: i18n.layer_get_element_type.element_id }
        ],
        signature: '(element_id)'
    },
	layer_element_move: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.layer_element_move.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'element_id', documentation: i18n.layer_element_move.element_id },
            { label: 'layer_id', documentation: i18n.layer_element_move.layer_id }
        ],
        signature: '(element_id, layer_id)'
    },
	layer_force_draw_depth: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.layer_force_draw_depth.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'force', documentation: i18n.layer_force_draw_depth.force },
            { label: 'depth', documentation: i18n.layer_force_draw_depth.depth }
        ],
        signature: '(force, depth)'
    },
	layer_is_draw_depth_forced: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.layer_is_draw_depth_forced.desc,
        available: datasimple.gms2
    },
	layer_get_forced_depth: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.layer_get_forced_depth.desc,
        available: datasimple.gms2
    },
	layer_background_get_id: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.layer_background_get_id.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'layer_id', documentation: i18n.layer_background_get_id.layer_id }
        ],
        signature: '(layer_id)'
    },
	layer_background_exists: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.layer_background_exists.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'layer_id', documentation: i18n.layer_background_exists.layer_id },
            { label: 'background_element_id', documentation: i18n.layer_background_exists.background_element_id }
        ],
        signature: '(layer_id, background_element_id)'
    },
	layer_background_create: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.layer_background_create.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'layer_id', documentation: i18n.layer_background_create.layer_id },
            { label: 'sprite', documentation: i18n.layer_background_create.sprite }
        ],
        signature: '(layer_id, sprite)'
    },
	layer_background_destroy: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.layer_background_destroy.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'background_element_id', documentation: i18n.layer_background_destroy.background_element_id }
        ],
        signature: '(background_element_id)'
    },
	layer_background_visible: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.layer_background_visible.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'background_element_id', documentation: i18n.layer_background_visible.background_element_id },
            { label: 'visible', documentation: i18n.layer_background_visible.visible }
        ],
        signature: '(background_element_id, visible)'
    },
	layer_background_change: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.layer_background_change.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'background_element_id', documentation: i18n.layer_background_change.background_element_id },
            { label: 'sprite', documentation: i18n.layer_background_change.sprite }
        ],
        signature: '(background_element_id, sprite)'
    },
	layer_background_sprite: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.layer_background_sprite.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'background_element_id', documentation: i18n.layer_background_sprite.background_element_id },
            { label: 'sprite', documentation: i18n.layer_background_sprite.sprite }
        ],
        signature: '(background_element_id, sprite)'
    },
	layer_background_htiled: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.layer_background_htiled.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'background_element_id', documentation: i18n.layer_background_htiled.background_element_id },
            { label: 'tiled', documentation: i18n.layer_background_htiled.tiled }
        ],
        signature: '(background_element_id, tiled)'
    },
	layer_background_vtiled: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.layer_background_vtiled.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'background_element_id', documentation: i18n.layer_background_vtiled.background_element_id },
            { label: 'tiled', documentation: i18n.layer_background_vtiled.tiled }
        ],
        signature: '(background_element_id, tiled)'
    },
	layer_background_stretch: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.layer_background_stretch.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'background_element_id', documentation: i18n.layer_background_stretch.background_element_id },
            { label: 'stretch', documentation: i18n.layer_background_stretch.stretch }
        ],
        signature: '(background_element_id, stretch)'
    },
	layer_background_yscale: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.layer_background_yscale.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'background_element_id', documentation: i18n.layer_background_yscale.background_element_id },
            { label: 'yscale', documentation: i18n.layer_background_yscale.yscale }
        ],
        signature: '(background_element_id, yscale)'
    },
	layer_background_xscale: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.layer_background_xscale.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'background_element_id', documentation: i18n.layer_background_xscale.background_element_id },
            { label: 'xscale', documentation: i18n.layer_background_xscale.xscale }
        ],
        signature: '(background_element_id, xscale)'
    },
	layer_background_blend: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.layer_background_blend.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'background_element_id', documentation: i18n.layer_background_blend.background_element_id },
            { label: 'col', documentation: i18n.layer_background_blend.col }
        ],
        signature: '(background_element_id, col)'
    },
	layer_background_alpha: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.layer_background_alpha.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'background_element_id', documentation: i18n.layer_background_alpha.background_element_id },
            { label: 'alpha', documentation: i18n.layer_background_alpha.alpha }
        ],
        signature: '(background_element_id, alpha)'
    },
	layer_background_index: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.layer_background_index.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'background_element_id', documentation: i18n.layer_background_index.background_element_id },
            { label: 'image_index', documentation: i18n.layer_background_index.image_index }
        ],
        signature: '(background_element_id, image_index)'
    },
	layer_background_speed: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.layer_background_speed.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'background_element_id', documentation: i18n.layer_background_speed.background_element_id },
            { label: 'image_speed', documentation: i18n.layer_background_speed.image_speed }
        ],
        signature: '(background_element_id, image_speed)'
    },
	layer_background_get_visible: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.layer_background_get_visible.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'background_element_id', documentation: i18n.layer_background_get_visible.background_element_id }
        ],
        signature: '(background_element_id)'
    },
	layer_background_get_sprite: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.layer_background_get_sprite.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'background_element_id', documentation: i18n.layer_background_get_sprite.background_element_id }
        ],
        signature: '(background_element_id)'
    },
	layer_background_get_htiled: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.layer_background_get_htiled.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'background_element_id', documentation: i18n.layer_background_get_htiled.background_element_id }
        ],
        signature: '(background_element_id)'
    },
	layer_background_get_vtiled: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.layer_background_get_vtiled.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'background_element_id', documentation: i18n.layer_background_get_vtiled.background_element_id }
        ],
        signature: '(background_element_id)'
    },
	layer_background_get_stretch: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.layer_background_get_stretch.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'background_element_id', documentation: i18n.layer_background_get_stretch.background_element_id }
        ],
        signature: '(background_element_id)'
    },
	layer_background_get_yscale: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.layer_background_get_yscale.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'background_element_id', documentation: i18n.layer_background_get_yscale.background_element_id }
        ],
        signature: '(background_element_id)'
    },
	layer_background_get_xscale: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.layer_background_get_xscale.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'background_element_id', documentation: i18n.layer_background_get_xscale.background_element_id }
        ],
        signature: '(background_element_id)'
    },
	layer_background_get_blend: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.layer_background_get_blend.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'background_element_id', documentation: i18n.layer_background_get_blend.background_element_id }
        ],
        signature: '(background_element_id)'
    },
	layer_background_get_alpha: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.layer_background_get_alpha.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'background_element_id', documentation: i18n.layer_background_get_alpha.background_element_id }
        ],
        signature: '(background_element_id)'
    },
	layer_background_get_index: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.layer_background_get_index.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'background_element_id', documentation: i18n.layer_background_get_index.background_element_id }
        ],
        signature: '(background_element_id)'
    },
	layer_background_get_speed: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.layer_background_get_speed.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'background_element_id', documentation: i18n.layer_background_get_speed.background_element_id }
        ],
        signature: '(background_element_id)'
    },
	layer_sprite_get_id: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.layer_sprite_get_id.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'layer_id', documentation: i18n.layer_sprite_get_id.layer_id },
            { label: 'sprite_element_name', documentation: i18n.layer_sprite_get_id.sprite_element_name }
        ],
        signature: '(layer_id, sprite_element_name)'
    },
	layer_sprite_exists: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.layer_sprite_exists.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'layer_id', documentation: i18n.layer_sprite_exists.layer_id },
            { label: 'sprite_element_id', documentation: i18n.layer_sprite_exists.sprite_element_id }
        ],
        signature: '(layer_id, sprite_element_id)'
    },
	layer_sprite_create: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.layer_sprite_create.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'layer_id', documentation: i18n.layer_sprite_create.layer_id },
            { label: 'x', documentation: i18n.layer_sprite_create.x },
            { label: 'y', documentation: i18n.layer_sprite_create.y },
            { label: 'sprite', documentation: i18n.layer_sprite_create.sprite }
        ],
        signature: '(layer_id, x, y, sprite)'
    },
	layer_sprite_destroy: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.layer_sprite_destroy.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'sprite_element_id', documentation: i18n.layer_sprite_destroy.sprite_element_id }
        ],
        signature: '(sprite_element_id)'
    },
	layer_sprite_change: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.layer_sprite_change.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'sprite_element_id', documentation: i18n.layer_sprite_change.sprite_element_id },
            { label: 'sprite', documentation: i18n.layer_sprite_change.sprite }
        ],
        signature: '(sprite_element_id, sprite)'
    },
	layer_sprite_index: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.layer_sprite_index.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'sprite_element_id', documentation: i18n.layer_sprite_index.sprite_element_id },
            { label: 'image_index', documentation: i18n.layer_sprite_index.image_index }
        ],
        signature: '(sprite_element_id, image_index)'
    },
	layer_sprite_speed: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.layer_sprite_speed.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'sprite_element_id', documentation: i18n.layer_sprite_speed.sprite_element_id },
            { label: 'image_speed', documentation: i18n.layer_sprite_speed.image_speed }
        ],
        signature: '(sprite_element_id, image_speed)'
    },
	layer_sprite_xscale: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.layer_sprite_xscale.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'sprite_element_id', documentation: i18n.layer_sprite_xscale.sprite_element_id },
            { label: 'xscale', documentation: i18n.layer_sprite_xscale.xscale }
        ],
        signature: '(sprite_element_id, xscale)'
    },
	layer_sprite_yscale: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.layer_sprite_yscale.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'sprite_element_id', documentation: i18n.layer_sprite_yscale.sprite_element_id },
            { label: 'yscale', documentation: i18n.layer_sprite_yscale.yscale }
        ],
        signature: '(sprite_element_id, yscale)'
    },
	layer_sprite_angle: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.layer_sprite_angle.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'sprite_element_id', documentation: i18n.layer_sprite_angle.sprite_element_id },
            { label: 'angle', documentation: i18n.layer_sprite_angle.angle }
        ],
        signature: '(sprite_element_id, angle)'
    },
	layer_sprite_blend: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.layer_sprite_blend.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'sprite_element_id', documentation: i18n.layer_sprite_blend.sprite_element_id },
            { label: 'col', documentation: i18n.layer_sprite_blend.col }
        ],
        signature: '(sprite_element_id, col)'
    },
	layer_sprite_alpha: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.layer_sprite_alpha.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'sprite_element_id', documentation: i18n.layer_sprite_alpha.sprite_element_id },
            { label: 'alpha', documentation: i18n.layer_sprite_alpha.alpha }
        ],
        signature: '(sprite_element_id, alpha)'
    },
	layer_sprite_x: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.layer_sprite_x.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'sprite_element_id', documentation: i18n.layer_sprite_x.sprite_element_id },
            { label: 'x', documentation: i18n.layer_sprite_x.x }
        ],
        signature: '(sprite_element_id, x)'
    },
	layer_sprite_y: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.layer_sprite_y.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'sprite_element_id', documentation: i18n.layer_sprite_y.sprite_element_id },
            { label: 'y', documentation: i18n.layer_sprite_y.y }
        ],
        signature: '(sprite_element_id, y)'
    },
	layer_sprite_get_sprite: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.layer_sprite_get_sprite.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'sprite_element_id', documentation: i18n.layer_sprite_get_sprite.sprite_element_id }
        ],
        signature: '(sprite_element_id)'
    },
	layer_sprite_get_index: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.layer_sprite_get_index.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'sprite_element_id', documentation: i18n.layer_sprite_get_index.sprite_element_id }
        ],
        signature: '(sprite_element_id)'
    },
	layer_sprite_get_speed: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.layer_sprite_get_speed.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'sprite_element_id', documentation: i18n.layer_sprite_get_speed.sprite_element_id }
        ],
        signature: '(sprite_element_id)'
    },
	layer_sprite_get_xscale: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.layer_sprite_get_xscale.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'sprite_element_id', documentation: i18n.layer_sprite_get_xscale.sprite_element_id }
        ],
        signature: '(sprite_element_id)'
    },
	layer_sprite_get_yscale: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.layer_sprite_get_yscale.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'sprite_element_id', documentation: i18n.layer_sprite_get_yscale.sprite_element_id }
        ],
        signature: '(sprite_element_id)'
    },
	layer_sprite_get_angle: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.layer_sprite_get_angle.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'sprite_element_id', documentation: i18n.layer_sprite_get_angle.sprite_element_id }
        ],
        signature: '(sprite_element_id)'
    },
	layer_sprite_get_blend: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.layer_sprite_get_blend.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'sprite_element_id', documentation: i18n.layer_sprite_get_blend.sprite_element_id }
        ],
        signature: '(sprite_element_id)'
    },
	layer_sprite_get_alpha: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.layer_sprite_get_alpha.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'sprite_element_id', documentation: i18n.layer_sprite_get_alpha.sprite_element_id }
        ],
        signature: '(sprite_element_id)'
    },
	layer_sprite_get_x: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.layer_sprite_get_x.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'sprite_element_id', documentation: i18n.layer_sprite_get_x.sprite_element_id }
        ],
        signature: '(sprite_element_id)'
    },
	layer_sprite_get_y: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.layer_sprite_get_y.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'sprite_element_id', documentation: i18n.layer_sprite_get_y.sprite_element_id }
        ],
        signature: '(sprite_element_id)'
    },
	layer_tilemap_get_id: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.layer_tilemap_get_id.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'layer_id', documentation: i18n.layer_tilemap_get_id.layer_id }
        ],
        signature: '(layer_id)'
    },
	layer_tilemap_exists: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.layer_tilemap_exists.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'layer_id', documentation: i18n.layer_tilemap_exists.layer_id },
            { label: 'tilemap_element_id', documentation: i18n.layer_tilemap_exists.tilemap_element_id }
        ],
        signature: '(layer_id, tilemap_element_id)'
    },
	layer_tilemap_create: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.layer_tilemap_create.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'layer_id', documentation: i18n.layer_tilemap_create.layer_id },
            { label: 'x', documentation: i18n.layer_tilemap_create.x },
            { label: 'y', documentation: i18n.layer_tilemap_create.y },
            { label: 'tileset', documentation: i18n.layer_tilemap_create.tileset },
            { label: 'width', documentation: i18n.layer_tilemap_create.width },
            { label: 'height', documentation: i18n.layer_tilemap_create.height }
        ],
        signature: '(layer_id, x, y, tileset, width, height)'
    },
	layer_tilemap_destroy: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.layer_tilemap_destroy.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'tilemap_element_id', documentation: i18n.layer_tilemap_destroy.tilemap_element_id }
        ],
        signature: '(tilemap_element_id)'
    },
	tilemap_tileset: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.tilemap_tileset.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'tilemap_element_id', documentation: i18n.tilemap_tileset.tilemap_element_id },
            { label: 'tileset', documentation: i18n.tilemap_tileset.tileset }
        ],
        signature: '(tilemap_element_id, tileset)'
    },
	tilemap_x: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.tilemap_x.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'tilemap_element_id', documentation: i18n.tilemap_x.tilemap_element_id },
            { label: 'x', documentation: i18n.tilemap_x.x }
        ],
        signature: '(tilemap_element_id, x)'
    },
	tilemap_y: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.tilemap_y.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'tilemap_element_id', documentation: i18n.tilemap_y.tilemap_element_id },
            { label: 'y', documentation: i18n.tilemap_y.y }
        ],
        signature: '(tilemap_element_id, y)'
    },
	tilemap_set: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.tilemap_set.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'tilemap_element_id', documentation: i18n.tilemap_set.tilemap_element_id },
            { label: 'tiledata', documentation: i18n.tilemap_set.tiledata },
            { label: 'cell_x', documentation: i18n.tilemap_set.cell_x },
            { label: 'cell_y', documentation: i18n.tilemap_set.cell_y }
        ],
        signature: '(tilemap_element_id, tiledata, cell_x, cell_y)'
    },
	tilemap_set_at_pixel: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.tilemap_set_at_pixel.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'tilemap_element_id', documentation: i18n.tilemap_set_at_pixel.tilemap_element_id },
            { label: 'tiledata', documentation: i18n.tilemap_set_at_pixel.tiledata },
            { label: 'x', documentation: i18n.tilemap_set_at_pixel.x },
            { label: 'y', documentation: i18n.tilemap_set_at_pixel.y }
        ],
        signature: '(tilemap_element_id, tiledata, x, y)'
    },
	tilemap_get_tileset: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.tilemap_get_tileset.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'tilemap_element_id', documentation: i18n.tilemap_get_tileset.tilemap_element_id }
        ],
        signature: '(tilemap_element_id)'
    },
	tilemap_get_tile_width: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.tilemap_get_tile_width.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'tilemap_element_id', documentation: i18n.tilemap_get_tile_width.tilemap_element_id }
        ],
        signature: '(tilemap_element_id)'
    },
	tilemap_get_tile_height: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.tilemap_get_tile_height.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'tilemap_element_id', documentation: i18n.tilemap_get_tile_height.tilemap_element_id }
        ],
        signature: '(tilemap_element_id)'
    },
	tilemap_get_width: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.tilemap_get_width.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'tilemap_element_id', documentation: i18n.tilemap_get_width.tilemap_element_id }
        ],
        signature: '(tilemap_element_id)'
    },
	tilemap_get_height: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.tilemap_get_height.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'tilemap_element_id', documentation: i18n.tilemap_get_height.tilemap_element_id }
        ],
        signature: '(tilemap_element_id)'
    },
	tilemap_get_x: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.tilemap_get_x.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'tilemap_element_id', documentation: i18n.tilemap_get_x.tilemap_element_id }
        ],
        signature: '(tilemap_element_id)'
    },
	tilemap_get_y: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.tilemap_get_y.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'tilemap_element_id', documentation: i18n.tilemap_get_y.tilemap_element_id }
        ],
        signature: '(tilemap_element_id)'
    },
	tilemap_get: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.tilemap_get.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'tilemap_element_id', documentation: i18n.tilemap_get.tilemap_element_id },
            { label: 'cell_x', documentation: i18n.tilemap_get.cell_x },
            { label: 'cell_y', documentation: i18n.tilemap_get.cell_y }
        ],
        signature: '(tilemap_element_id, cell_x, cell_y)'
    },
	tilemap_get_at_pixel: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.tilemap_get_at_pixel.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'tilemap_element_id', documentation: i18n.tilemap_get_at_pixel.tilemap_element_id },
            { label: 'x', documentation: i18n.tilemap_get_at_pixel.x },
            { label: 'y', documentation: i18n.tilemap_get_at_pixel.y }
        ],
        signature: '(tilemap_element_id, x, y)'
    },
	tilemap_get_cell_x_at_pixel: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.tilemap_get_cell_x_at_pixel.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'tilemap_element_id', documentation: i18n.tilemap_get_cell_x_at_pixel.tilemap_element_id },
            { label: 'x', documentation: i18n.tilemap_get_cell_x_at_pixel.x },
            { label: 'y', documentation: i18n.tilemap_get_cell_x_at_pixel.y }
        ],
        signature: '(tilemap_element_id, x, y)'
    },
	tilemap_get_cell_y_at_pixel: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.tilemap_get_cell_y_at_pixel.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'tilemap_element_id', documentation: i18n.tilemap_get_cell_y_at_pixel.tilemap_element_id },
            { label: 'x', documentation: i18n.tilemap_get_cell_y_at_pixel.x },
            { label: 'y', documentation: i18n.tilemap_get_cell_y_at_pixel.y }
        ],
        signature: '(tilemap_element_id, x, y)'
    },
	tilemap_clear: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.tilemap_clear.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'tilemap_element_id', documentation: i18n.tilemap_clear.tilemap_element_id },
            { label: 'tiledata', documentation: i18n.tilemap_clear.tiledata }
        ],
        signature: '(tilemap_element_id, tiledata)'
    },
	draw_tilemap: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.draw_tilemap.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'tilemap_element_id', documentation: i18n.draw_tilemap.tilemap_element_id },
            { label: 'x', documentation: i18n.draw_tilemap.x },
            { label: 'y', documentation: i18n.draw_tilemap.y }
        ],
        signature: '(tilemap_element_id, x, y)'
    },
	draw_tile: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.draw_tile.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'tileset', documentation: i18n.draw_tile.tileset },
            { label: 'tiledata', documentation: i18n.draw_tile.tiledata },
            { label: 'frame', documentation: i18n.draw_tile.frame },
            { label: 'x', documentation: i18n.draw_tile.x },
            { label: 'y', documentation: i18n.draw_tile.y }
        ],
        signature: '(tileset, tiledata, frame, x, y)'
    },
	tilemap_set_global_mask: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.tilemap_set_global_mask.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'mask', documentation: i18n.tilemap_set_global_mask.mask }
        ],
        signature: '(mask)'
    },
	tilemap_get_global_mask: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.tilemap_get_global_mask.desc,
        available: datasimple.gms2
    },
	tilemap_set_mask: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.tilemap_set_mask.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'tilemap_element_id', documentation: i18n.tilemap_set_mask.tilemap_element_id },
            { label: 'mask', documentation: i18n.tilemap_set_mask.mask }
        ],
        signature: '(tilemap_element_id, mask)'
    },
	tilemap_get_mask: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.tilemap_get_mask.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'tilemap_element_id', documentation: i18n.tilemap_get_mask.tilemap_element_id }
        ],
        signature: '(tilemap_element_id)'
    },
	tilemap_get_frame: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.tilemap_get_frame.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'tilemap_element_id', documentation: i18n.tilemap_get_frame.tilemap_element_id }
        ],
        signature: '(tilemap_element_id)'
    },
	tile_set_empty: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.tile_set_empty.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'tiledata', documentation: i18n.tile_set_empty.tiledata }
        ],
        signature: '(tiledata)'
    },
	tile_set_index: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.tile_set_index.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'tiledata', documentation: i18n.tile_set_index.tiledata },
            { label: 'tileindex', documentation: i18n.tile_set_index.tileindex }
        ],
        signature: '(tiledata, tileindex)'
    },
	tile_set_flip: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.tile_set_flip.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'tiledata', documentation: i18n.tile_set_flip.tiledata },
            { label: 'flip', documentation: i18n.tile_set_flip.flip }
        ],
        signature: '(tiledata, flip)'
    },
	tile_set_mirror: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.tile_set_mirror.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'tiledata', documentation: i18n.tile_set_mirror.tiledata },
            { label: 'mirror', documentation: i18n.tile_set_mirror.mirror }
        ],
        signature: '(tiledata, mirror)'
    },
	tile_set_rotate: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.tile_set_rotate.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'tiledata', documentation: i18n.tile_set_rotate.tiledata },
            { label: 'rotate', documentation: i18n.tile_set_rotate.rotate }
        ],
        signature: '(tiledata, rotate)'
    },
	tile_get_empty: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.tile_get_empty.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'tiledata', documentation: i18n.tile_get_empty.tiledata }
        ],
        signature: '(tiledata)'
    },
	tile_get_index: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.tile_get_index.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'tiledata', documentation: i18n.tile_get_index.tiledata }
        ],
        signature: '(tiledata)'
    },
	tile_get_flip: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.tile_get_flip.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'tiledata', documentation: i18n.tile_get_flip.tiledata }
        ],
        signature: '(tiledata)'
    },
	tile_get_mirror: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.tile_get_mirror.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'tiledata', documentation: i18n.tile_get_mirror.tiledata }
        ],
        signature: '(tiledata)'
    },
	tile_get_rotate: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.tile_get_rotate.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'tiledata', documentation: i18n.tile_get_rotate.tiledata }
        ],
        signature: '(tiledata)'
    },
	layer_tile_exists: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.layer_tile_exists.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'layer_id', documentation: i18n.layer_tile_exists.layer_id },
            { label: 'tile_element_id', documentation: i18n.layer_tile_exists.tile_element_id },
            { label: '...', documentation: i18n.layer_tile_exists.more }
        ],
        signature: '(layer_id, tile_element_id, ...)'
    },
	layer_tile_create: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.layer_tile_create.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'layer_id', documentation: i18n.layer_tile_create.layer_id },
            { label: 'x', documentation: i18n.layer_tile_create.x },
            { label: 'y', documentation: i18n.layer_tile_create.y },
            { label: 'tileset', documentation: i18n.layer_tile_create.tileset },
            { label: 'left', documentation: i18n.layer_tile_create.left },
            { label: 'top', documentation: i18n.layer_tile_create.top },
            { label: 'width', documentation: i18n.layer_tile_create.width },
            { label: 'height', documentation: i18n.layer_tile_create.height }
        ],
        signature: '(layer_id, x, y, tileset, left, top, width, height)'
    },
	layer_tile_destroy: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.layer_tile_destroy.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'tile_element_id', documentation: i18n.layer_tile_destroy.tile_element_id }
        ],
        signature: '(tile_element_id)'
    },
	layer_tile_change: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.layer_tile_change.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'tile_element_id', documentation: i18n.layer_tile_change.tile_element_id },
            { label: 'sprite', documentation: i18n.layer_tile_change.sprite }
        ],
        signature: '(tile_element_id, sprite)'
    },
	layer_tile_xscale: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.layer_tile_xscale.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'tile_element_id', documentation: i18n.layer_tile_xscale.tile_element_id },
            { label: 'xscale', documentation: i18n.layer_tile_xscale.xscale }
        ],
        signature: '(tile_element_id, xscale)'
    },
	layer_tile_yscale: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.layer_tile_yscale.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'tile_element_id', documentation: i18n.layer_tile_yscale.tile_element_id },
            { label: 'yscale', documentation: i18n.layer_tile_yscale.yscale }
        ],
        signature: '(tile_element_id, yscale)'
    },
	layer_tile_blend: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.layer_tile_blend.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'tile_element_id', documentation: i18n.layer_tile_blend.tile_element_id },
            { label: 'col', documentation: i18n.layer_tile_blend.col }
        ],
        signature: '(tile_element_id, col)'
    },
	layer_tile_alpha: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.layer_tile_alpha.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'tile_element_id', documentation: i18n.layer_tile_alpha.tile_element_id },
            { label: 'alpha', documentation: i18n.layer_tile_alpha.alpha }
        ],
        signature: '(tile_element_id, alpha)'
    },
	layer_tile_x: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.layer_tile_x.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'tile_element_id', documentation: i18n.layer_tile_x.tile_element_id },
            { label: 'x', documentation: i18n.layer_tile_x.x }
        ],
        signature: '(tile_element_id, x)'
    },
	layer_tile_y: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.layer_tile_y.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'tile_element_id', documentation: i18n.layer_tile_y.tile_element_id },
            { label: 'y', documentation: i18n.layer_tile_y.y }
        ],
        signature: '(tile_element_id, y)'
    },
	layer_tile_region: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.layer_tile_region.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'tile_element_id', documentation: i18n.layer_tile_region.tile_element_id },
            { label: 'left', documentation: i18n.layer_tile_region.left },
            { label: 'top', documentation: i18n.layer_tile_region.top },
            { label: 'width', documentation: i18n.layer_tile_region.width },
            { label: 'height', documentation: i18n.layer_tile_region.height }
        ],
        signature: '(tile_element_id, left, top, width, height)'
    },
	layer_tile_visible: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.layer_tile_visible.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'tile_element_id', documentation: i18n.layer_tile_visible.tile_element_id },
            { label: 'visible', documentation: i18n.layer_tile_visible.visible }
        ],
        signature: '(tile_element_id, visible)'
    },
	layer_tile_get_sprite: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.layer_tile_get_sprite.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'tile_element_id', documentation: i18n.layer_tile_get_sprite.tile_element_id }
        ],
        signature: '(tile_element_id)'
    },
	layer_tile_get_xscale: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.layer_tile_get_xscale.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'tile_element_id', documentation: i18n.layer_tile_get_xscale.tile_element_id }
        ],
        signature: '(tile_element_id)'
    },
	layer_tile_get_yscale: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.layer_tile_get_yscale.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'tile_element_id', documentation: i18n.layer_tile_get_yscale.tile_element_id }
        ],
        signature: '(tile_element_id)'
    },
	layer_tile_get_blend: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.layer_tile_get_blend.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'tile_element_id', documentation: i18n.layer_tile_get_blend.tile_element_id }
        ],
        signature: '(tile_element_id)'
    },
	layer_tile_get_alpha: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.layer_tile_get_alpha.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'tile_element_id', documentation: i18n.layer_tile_get_alpha.tile_element_id }
        ],
        signature: '(tile_element_id)'
    },
	layer_tile_get_x: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.layer_tile_get_x.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'tile_element_id', documentation: i18n.layer_tile_get_x.tile_element_id }
        ],
        signature: '(tile_element_id)'
    },
	layer_tile_get_y: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.layer_tile_get_y.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'tile_element_id', documentation: i18n.layer_tile_get_y.tile_element_id }
        ],
        signature: '(tile_element_id)'
    },
	layer_tile_get_region: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.layer_tile_get_region.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'tile_element_id', documentation: i18n.layer_tile_get_region.tile_element_id }
        ],
        signature: '(tile_element_id)'
    },
	layer_tile_get_visible: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.layer_tile_get_visible.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'tile_element_id', documentation: i18n.layer_tile_get_visible.tile_element_id }
        ],
        signature: '(tile_element_id)'
    },
	layer_instance_get_instance: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.layer_instance_get_instance.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'instance_element_id', documentation: i18n.layer_instance_get_instance.instance_element_id }
        ],
        signature: '(instance_element_id)'
    },
	instance_activate_layer: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.instance_activate_layer.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'layer_id', documentation: i18n.instance_activate_layer.layer_id }
        ],
        signature: '(layer_id)'
    },
	instance_deactivate_layer: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.instance_deactivate_layer.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'layer_id', documentation: i18n.instance_deactivate_layer.layer_id }
        ],
        signature: '(layer_id)'
    },
	camera_create: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.camera_create.desc,
        available: datasimple.gms2
    },
	camera_create_view: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.camera_create_view.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'room_x', documentation: i18n.camera_create_view.room_x },
            { label: 'room_y', documentation: i18n.camera_create_view.room_y },
            { label: 'width', documentation: i18n.camera_create_view.width },
            { label: 'height', documentation: i18n.camera_create_view.height },
            { label: 'angle', documentation: i18n.camera_create_view.angle },
            { label: 'object', documentation: i18n.camera_create_view.object },
            { label: 'x_speed', documentation: i18n.camera_create_view.x_speed },
            { label: 'y_speed', documentation: i18n.camera_create_view.y_speed },
            { label: 'x_border', documentation: i18n.camera_create_view.x_border },
            { label: 'y_border', documentation: i18n.camera_create_view.y_border }
        ],
        signature: '(room_x, room_y, width, height, angle, object, x_speed, y_speed, x_border, y_border)'
    },
	camera_destroy: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.camera_destroy.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'camera', documentation: i18n.camera_destroy.camera }
        ],
        signature: '(camera)'
    },
	camera_apply: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.camera_apply.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'camera', documentation: i18n.camera_apply.camera }
        ],
        signature: '(camera)'
    },
	camera_get_active: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.camera_get_active.desc,
        available: datasimple.gms2
    },
	camera_get_default: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.camera_get_default.desc,
        available: datasimple.gms2
    },
	camera_set_default: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.camera_set_default.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'camera', documentation: i18n.camera_set_default.camera }
        ],
        signature: '(camera)'
    },
	camera_set_view_mat: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.camera_set_view_mat.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'camera', documentation: i18n.camera_set_view_mat.camera },
            { label: 'matrix', documentation: i18n.camera_set_view_mat.matrix }
        ],
        signature: '(camera, matrix)'
    },
	camera_set_proj_mat: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.camera_set_proj_mat.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'camera', documentation: i18n.camera_set_proj_mat.camera },
            { label: 'matrix', documentation: i18n.camera_set_proj_mat.matrix }
        ],
        signature: '(camera, matrix)'
    },
	camera_set_update_script: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.camera_set_update_script.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'camera', documentation: i18n.camera_set_update_script.camera },
            { label: 'script', documentation: i18n.camera_set_update_script.script }
        ],
        signature: '(camera, script)'
    },
	camera_set_begin_script: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.camera_set_begin_script.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'camera', documentation: i18n.camera_set_begin_script.camera },
            { label: 'script', documentation: i18n.camera_set_begin_script.script }
        ],
        signature: '(camera, script)'
    },
	camera_set_end_script: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.camera_set_end_script.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'camera', documentation: i18n.camera_set_end_script.camera },
            { label: 'script', documentation: i18n.camera_set_end_script.script }
        ],
        signature: '(camera, script)'
    },
	camera_set_view_pos: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.camera_set_view_pos.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'camera', documentation: i18n.camera_set_view_pos.camera },
            { label: 'x', documentation: i18n.camera_set_view_pos.x },
            { label: 'y', documentation: i18n.camera_set_view_pos.y }
        ],
        signature: '(camera, x, y)'
    },
	camera_set_view_size: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.camera_set_view_size.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'camera', documentation: i18n.camera_set_view_size.camera },
            { label: 'width', documentation: i18n.camera_set_view_size.width },
            { label: 'height', documentation: i18n.camera_set_view_size.height }
        ],
        signature: '(camera, width, height)'
    },
	camera_set_view_speed: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.camera_set_view_speed.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'camera', documentation: i18n.camera_set_view_speed.camera },
            { label: 'x_speed', documentation: i18n.camera_set_view_speed.x_speed },
            { label: 'y_speed', documentation: i18n.camera_set_view_speed.y_speed }
        ],
        signature: '(camera, x_speed, y_speed)'
    },
	camera_set_view_border: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.camera_set_view_border.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'camera', documentation: i18n.camera_set_view_border.camera },
            { label: 'x_border', documentation: i18n.camera_set_view_border.x_border },
            { label: 'y_border', documentation: i18n.camera_set_view_border.y_border }
        ],
        signature: '(camera, x_border, y_border)'
    },
	camera_set_view_angle: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.camera_set_view_angle.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'camera', documentation: i18n.camera_set_view_angle.camera },
            { label: 'angle', documentation: i18n.camera_set_view_angle.angle }
        ],
        signature: '(camera, angle)'
    },
	camera_set_view_target: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.camera_set_view_target.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'camera', documentation: i18n.camera_set_view_target.camera },
            { label: 'object', documentation: i18n.camera_set_view_target.object }
        ],
        signature: '(camera, object)'
    },
	camera_get_view_mat: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.camera_get_view_mat.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'camera', documentation: i18n.camera_get_view_mat.camera }
        ],
        signature: '(camera)'
    },
	camera_get_proj_mat: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.camera_get_proj_mat.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'camera', documentation: i18n.camera_get_proj_mat.camera }
        ],
        signature: '(camera)'
    },
	camera_get_update_script: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.camera_get_update_script.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'camera', documentation: i18n.camera_get_update_script.camera }
        ],
        signature: '(camera)'
    },
	camera_get_begin_script: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.camera_get_begin_script.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'camera', documentation: i18n.camera_get_begin_script.camera }
        ],
        signature: '(camera)'
    },
	camera_get_end_script: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.camera_get_end_script.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'camera', documentation: i18n.camera_get_end_script.camera }
        ],
        signature: '(camera)'
    },
	camera_get_view_x: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.camera_get_view_x.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'camera', documentation: i18n.camera_get_view_x.camera }
        ],
        signature: '(camera)'
    },
	camera_get_view_y: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.camera_get_view_y.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'camera', documentation: i18n.camera_get_view_y.camera }
        ],
        signature: '(camera)'
    },
	camera_get_view_width: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.camera_get_view_width.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'camera', documentation: i18n.camera_get_view_width.camera }
        ],
        signature: '(camera)'
    },
	camera_get_view_height: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.camera_get_view_height.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'camera', documentation: i18n.camera_get_view_height.camera }
        ],
        signature: '(camera)'
    },
	camera_get_view_speed_x: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.camera_get_view_speed_x.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'camera', documentation: i18n.camera_get_view_speed_x.camera }
        ],
        signature: '(camera)'
    },
	camera_get_view_speed_y: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.camera_get_view_speed_y.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'camera', documentation: i18n.camera_get_view_speed_y.camera }
        ],
        signature: '(camera)'
    },
	camera_get_view_border_x: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.camera_get_view_border_x.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'camera', documentation: i18n.camera_get_view_border_x.camera }
        ],
        signature: '(camera)'
    },
	camera_get_view_border_y: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.camera_get_view_border_y.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'camera', documentation: i18n.camera_get_view_border_y.camera }
        ],
        signature: '(camera)'
    },
	camera_get_view_angle: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.camera_get_view_angle.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'camera', documentation: i18n.camera_get_view_angle.camera }
        ],
        signature: '(camera)'
    },
	camera_get_view_target: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.camera_get_view_target.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'camera', documentation: i18n.camera_get_view_target.camera }
        ],
        signature: '(camera)'
    },
	view_get_camera: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.view_get_camera.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'view', documentation: i18n.view_get_camera.view }
        ],
        signature: '(view)'
    },
	view_get_visible: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.view_get_visible.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'view', documentation: i18n.view_get_visible.view }
        ],
        signature: '(view)'
    },
	view_get_xport: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.view_get_xport.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'view', documentation: i18n.view_get_xport.view }
        ],
        signature: '(view)'
    },
	view_get_yport: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.view_get_yport.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'view', documentation: i18n.view_get_yport.view }
        ],
        signature: '(view)'
    },
	view_get_wport: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.view_get_wport.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'view', documentation: i18n.view_get_wport.view }
        ],
        signature: '(view)'
    },
	view_get_hport: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.view_get_hport.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'view', documentation: i18n.view_get_hport.view }
        ],
        signature: '(view)'
    },
	view_get_surface_id: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.view_get_surface_id.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'view', documentation: i18n.view_get_surface_id.view }
        ],
        signature: '(view)'
    },
	view_set_camera: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.view_set_camera.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'view', documentation: i18n.view_set_camera.view },
            { label: 'camera', documentation: i18n.view_set_camera.camera }
        ],
        signature: '(view, camera)'
    },
	view_set_visible: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.view_set_visible.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'view', documentation: i18n.view_set_visible.view },
            { label: 'visible', documentation: i18n.view_set_visible.visible }
        ],
        signature: '(view, visible)'
    },
	view_set_xport: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.view_set_xport.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'view', documentation: i18n.view_set_xport.view },
            { label: 'xport', documentation: i18n.view_set_xport.xport }
        ],
        signature: '(view, xport)'
    },
	view_set_yport: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.view_set_yport.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'view', documentation: i18n.view_set_yport.view },
            { label: 'yport', documentation: i18n.view_set_yport.yport }
        ],
        signature: '(view, yport)'
    },
	view_set_wport: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.view_set_wport.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'view', documentation: i18n.view_set_wport.view },
            { label: 'wport', documentation: i18n.view_set_wport.wport }
        ],
        signature: '(view, wport)'
    },
	view_set_hport: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.view_set_hport.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'view', documentation: i18n.view_set_hport.view },
            { label: 'hport', documentation: i18n.view_set_hport.hport }
        ],
        signature: '(view, hport)'
    },
	view_set_surface_id: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.view_set_surface_id.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'view', documentation: i18n.view_set_surface_id.view },
            { label: 'surface_id', documentation: i18n.view_set_surface_id.surface_id }
        ],
        signature: '(view, surface_id)'
    },
	gesture_drag_time: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.gesture_drag_time.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'time', documentation: i18n.gesture_drag_time.time }
        ],
        signature: '(time)'
    },
	gesture_drag_distance: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.gesture_drag_distance.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'distance', documentation: i18n.gesture_drag_distance.distance }
        ],
        signature: '(distance)'
    },
	gesture_flick_speed: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.gesture_flick_speed.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'speed', documentation: i18n.gesture_flick_speed.speed }
        ],
        signature: '(speed)'
    },
	gesture_double_tap_time: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.gesture_double_tap_time.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'time', documentation: i18n.gesture_double_tap_time.time }
        ],
        signature: '(time)'
    },
	gesture_double_tap_distance: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.gesture_double_tap_distance.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'distance', documentation: i18n.gesture_double_tap_distance.distance }
        ],
        signature: '(distance)'
    },
	gesture_pinch_distance: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.gesture_pinch_distance.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'distance', documentation: i18n.gesture_pinch_distance.distance }
        ],
        signature: '(distance)'
    },
	gesture_pinch_angle_towards: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.gesture_pinch_angle_towards.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'angle', documentation: i18n.gesture_pinch_angle_towards.angle }
        ],
        signature: '(angle)'
    },
	gesture_pinch_angle_away: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.gesture_pinch_angle_away.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'angle', documentation: i18n.gesture_pinch_angle_away.angle }
        ],
        signature: '(angle)'
    },
	gesture_rotate_time: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.gesture_rotate_time.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'time', documentation: i18n.gesture_rotate_time.time }
        ],
        signature: '(time)'
    },
	gesture_rotate_angle: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.gesture_rotate_angle.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'angle', documentation: i18n.gesture_rotate_angle.angle }
        ],
        signature: '(angle)'
    },
	gesture_tap_count: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.gesture_tap_count.desc,
        available: datasimple.gms2,
        parameters: [
            { label: 'enable', documentation: i18n.gesture_tap_count.enable }
        ],
        signature: '(enable)'
    },
	gesture_get_drag_time: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.gesture_get_drag_time.desc,
        available: datasimple.gms2
    },
	gesture_get_drag_distance: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.gesture_get_drag_distance.desc,
        available: datasimple.gms2
    },
	gesture_get_flick_speed: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.gesture_get_flick_speed.desc,
        available: datasimple.gms2
    },
	gesture_get_double_tap_time: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.gesture_get_double_tap_time.desc,
        available: datasimple.gms2
    },
	gesture_get_double_tap_distance: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.gesture_get_double_tap_distance.desc,
        available: datasimple.gms2
    },
	gesture_get_pinch_distance: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.gesture_get_pinch_distance.desc,
        available: datasimple.gms2
    },
	gesture_get_pinch_angle_towards: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.gesture_get_pinch_angle_towards.desc,
        available: datasimple.gms2
    },
	gesture_get_pinch_angle_away: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.gesture_get_pinch_angle_away.desc,
        available: datasimple.gms2
    },
	gesture_get_rotate_time: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.gesture_get_rotate_time.desc,
        available: datasimple.gms2
    },
	gesture_get_rotate_angle: {
        description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.gesture_get_rotate_angle.desc,
        available: datasimple.gms2
    },
	gesture_get_tap_count: {
		description: '[Function] (' + i18n_notice.new_2 + ')' + i18n.gesture_get_tap_count.desc,
        available: datasimple.gms2
	}
};

exports.globalvariables = {
    argument: {description: '[Variable]' + i18n_variable.argument.desc,available: datasimple.all},
	argument0: {description: '[Variable]' + i18n_variable.argument0.desc,available: datasimple.all},
	argument1: {description: '[Variable]' + i18n_variable.argument1.desc,available: datasimple.all},
	argument10: {description: '[Variable]' + i18n_variable.argument10.desc,available: datasimple.all},
	argument11: {description: '[Variable]' + i18n_variable.argument11.desc,available: datasimple.all},
	argument12: {description: '[Variable]' + i18n_variable.argument12.desc,available: datasimple.all},
	argument13: {description: '[Variable]' + i18n_variable.argument13.desc,available: datasimple.all},
	argument14: {description: '[Variable]' + i18n_variable.argument14.desc,available: datasimple.all},
	argument15: {description: '[Variable]' + i18n_variable.argument15.desc,available: datasimple.all},
	argument2: {description: '[Variable]' + i18n_variable.argument2.desc,available: datasimple.all},
	argument3: {description: '[Variable]' + i18n_variable.argument3.desc,available: datasimple.all},
	argument4: {description: '[Variable]' + i18n_variable.argument4.desc,available: datasimple.all},
	argument5: {description: '[Variable]' + i18n_variable.argument5.desc,available: datasimple.all},
	argument6: {description: '[Variable]' + i18n_variable.argument6.desc,available: datasimple.all},
	argument7: {description: '[Variable]' + i18n_variable.argument7.desc,available: datasimple.all},
	argument8: {description: '[Variable]' + i18n_variable.argument8.desc,available: datasimple.all},
	argument9: {description: '[Variable]' + i18n_variable.argument9.desc,available: datasimple.all},
	argument_count: {description: '[Variable]' + i18n_variable.argument_count.desc,available: datasimple.all},
	argument_relative: {description: '[Variable]' + i18n_variable.argument_relative.desc,available: datasimple.all},
	async_load: {description: '[Variable]' + i18n_variable.async_load.desc,available: datasimple.all},
	browser_height: {description: '[Variable]' + i18n_variable.browser_height.desc,available: datasimple.all},
	browser_width: {description: '[Variable]' + i18n_variable.browser_width.desc,available: datasimple.all},
	caption_health: {description: '[Variable]' + i18n_variable.caption_health.desc,available: datasimple.all},
	caption_lives: {description: '[Variable]' + i18n_variable.caption_lives.desc,available: datasimple.all},
	caption_score: {description: '[Variable]' + i18n_variable.caption_score.desc,available: datasimple.all},
	current_day: {description: '[Variable]' + i18n_variable.current_day.desc,available: datasimple.all},
	current_hour: {description: '[Variable]' + i18n_variable.current_hour.desc,available: datasimple.all},
	current_minute: {description: '[Variable]' + i18n_variable.current_minute.desc,available: datasimple.all},
    current_month: {description: '[Variable]' + i18n_variable.current_month.desc,available: datasimple.all},
    current_second: {description: '[Variable]' + i18n_variable.current_second.desc,available: datasimple.all},
    current_time: {description: '[Variable]' + i18n_variable.current_time.desc,available: datasimple.all},
    current_weekday: {description: '[Variable]' + i18n_variable.current_weekday.desc,available: datasimple.all},
    current_year: {description: '[Variable]' + i18n_variable.current_year.desc,available: datasimple.all},
    cursor_sprite: {description: '[Variable]' + i18n_variable.cursor_sprite.desc,available: datasimple.all},
    debug_mode: {description: '[Variable]' + i18n_variable.debug_mode.desc,available: datasimple.all},
    delta_time: {description: '[Variable]' + i18n_variable.delta_time.desc,available: datasimple.all},
    display_aa: {description: '[Variable]' + i18n_variable.display_aa.desc,available: datasimple.all},
    error_last: {description: '[Variable]' + i18n_variable.error_last.desc,available: datasimple.all},
    error_occurred: {description: '[Variable]' + i18n_variable.error_occurred.desc,available: datasimple.all},
    event_action: {description: '[Variable]' + i18n_variable.event_action.desc,available: datasimple.all},
    event_number: {description: '[Variable]' + i18n_variable.event_number.desc,available: datasimple.all},
    event_object: {description: '[Variable]' + i18n_variable.event_object.desc,available: datasimple.all},
    event_type: {description: '[Variable]' + i18n_variable.event_type.desc,available: datasimple.all},
    fps: {description: '[Variable]' + i18n_variable.fps.desc,available: datasimple.all},
    fps_real: {description: '[Variable]' + i18n_variable.fps_real.desc,available: datasimple.all},
    game_id: {description: '[Variable]' + i18n_variable.game_id.desc,available: datasimple.all},
    health: {description: '[Variable]' + i18n_variable.health.desc,available: datasimple.all},
    instance_count: {description: '[Variable]' + i18n_variable.instance_count.desc,available: datasimple.all},
    instance_id: {description: '[Variable]' + i18n_variable.instance_id.desc,available: datasimple.all},
    keyboard_key: {description: '[Variable]' + i18n_variable.keyboard_key.desc,available: datasimple.all},
    keyboard_lastchar: {description: '[Variable]' + i18n_variable.keyboard_lastchar.desc,available: datasimple.all},
    keyboard_lastkey: {description: '[Variable]' + i18n_variable.keyboard_lastkey.desc,available: datasimple.all},
    keyboard_string: {description: '[Variable]' + i18n_variable.keyboard_string.desc,available: datasimple.all},
    lives: {description: '[Variable]' + i18n_variable.lives.desc,available: datasimple.all},
    mouse_button: {description: '[Variable]' + i18n_variable.mouse_button.desc,available: datasimple.all},
    mouse_lastbutton: {description: '[Variable]' + i18n_variable.mouse_lastbutton.desc,available: datasimple.all},
    mouse_x: {description: '[Variable]' + i18n_variable.mouse_x.desc,available: datasimple.all},
    mouse_y: {description: '[Variable]' + i18n_variable.mouse_y.desc,available: datasimple.all},
    os_browser: {description: '[Variable]' + i18n_variable.os_browser.desc,available: datasimple.all},
    os_device: {description: '[Variable]' + i18n_variable.os_device.desc,available: datasimple.all},
    os_type: {description: '[Variable]' + i18n_variable.os_type.desc,available: datasimple.all},
    os_version: {description: '[Variable]' + i18n_variable.os_version.desc,available: datasimple.all},
    program_directory: {description: '[Variable]' + i18n_variable.program_directory.desc,available: datasimple.all},
	room: {description: '[Variable]' + i18n_variable.room.desc,available: datasimple.all},
    room_caption: {description: '[Variable]' + i18n_variable.room_caption.desc,available: datasimple.all},
    room_first: {description: '[Variable]' + i18n_variable.room_first.desc,available: datasimple.all},
    room_height: {description: '[Variable]' + i18n_variable.room_height.desc,available: datasimple.all},
    room_last: {description: '[Variable]' + i18n_variable.room_last.desc,available: datasimple.all},
    room_persistent: {description: '[Variable]' + i18n_variable.room_persistent.desc,available: datasimple.all},
    room_speed: {description: '[Variable]' + i18n_variable.room_speed.desc,available: datasimple.all},
    room_width: {description: '[Variable]' + i18n_variable.room_width.desc,available: datasimple.all},
    score: {description: '[Variable]' + i18n_variable.score.desc,available: datasimple.all},
    show_health: {description: '[Variable]' + i18n_variable.show_health.desc,available: datasimple.all},
    show_lives: {description: '[Variable]' + i18n_variable.show_lives.desc,available: datasimple.all},
    show_score: {description: '[Variable]' + i18n_variable.show_score.desc,available: datasimple.all},
    temp_directory: {description: '[Variable]' + i18n_variable.temp_directory.desc,available: datasimple.all},
    transition_color: {description: '[Variable]' + i18n_variable.transition_color.desc,available: datasimple.all},
    transition_kind: {description: '[Variable]' + i18n_variable.transition_kind.desc,available: datasimple.all},
    transition_steps: {description: '[Variable]' + i18n_variable.transition_steps.desc,available: datasimple.all},
    webgl_enabled: {description: '[Variable]' + i18n_variable.webgl_enabled.desc,available: datasimple.gms1},
    working_directory: {description: '[Variable]' + i18n_variable.working_directory.desc,available: datasimple.all},
    alarm: {description: '[Variable]' + i18n_variable.alarm.desc,available: datasimple.all},
    bbox_bottom: {description: '[Variable]' + i18n_variable.bbox_bottom.desc,available: datasimple.all},
    bbox_left: {description: '[Variable]' + i18n_variable.bbox_left.desc,available: datasimple.all},
    bbox_right: {description: '[Variable]' + i18n_variable.bbox_right.desc,available: datasimple.all},
    bbox_top: {description: '[Variable]' + i18n_variable.bbox_top.desc,available: datasimple.all},
    depth: {description: '[Variable]' + i18n_variable.depth.desc,available: datasimple.all},
    direction: {description: '[Variable]' + i18n_variable.direction.desc,available: datasimple.all},
    friction: {description: '[Variable]' + i18n_variable.friction.desc,available: datasimple.all},
    gravity: {description: '[Variable]' + i18n_variable.gravity.desc,available: datasimple.all},
    gravity_direction: {description: '[Variable]' + i18n_variable.gravity_direction.desc,available: datasimple.all},
    hspeed: {description: '[Variable]' + i18n_variable.hspeed.desc,available: datasimple.all},
    id: {description: '[Variable]' + i18n_variable.id.desc,available: datasimple.all},
    image_alpha: {description: '[Variable]' + i18n_variable.image_alpha.desc,available: datasimple.all},
    image_angle: {description: '[Variable]' + i18n_variable.image_angle.desc,available: datasimple.all},
    image_blend: {description: '[Variable]' + i18n_variable.image_blend.desc,available: datasimple.all},
    image_index: {description: '[Variable]' + i18n_variable.image_index.desc,available: datasimple.all},
    image_number: {description: '[Variable]' + i18n_variable.image_number.desc,available: datasimple.all},
    image_single: {description: '[Variable]' + i18n_variable.image_single.desc,available: datasimple.all},
    image_speed: {description: '[Variable]' + i18n_variable.image_speed.desc,available: datasimple.all},
    image_xscale: {description: '[Variable]' + i18n_variable.image_xscale.desc,available: datasimple.all},
    image_yscale: {description: '[Variable]' + i18n_variable.image_yscale.desc,available: datasimple.all},
    mask_index: {description: '[Variable]' + i18n_variable.mask_index.desc,available: datasimple.all},
    object_index: {description: '[Variable]' + i18n_variable.object_index.desc,available: datasimple.all},
    path_endaction: {description: '[Variable]' + i18n_variable.path_endaction.desc,available: datasimple.all},
    path_index: {description: '[Variable]' + i18n_variable.path_index.desc,available: datasimple.all},
    path_orientation: {description: '[Variable]' + i18n_variable.path_orientation.desc,available: datasimple.all},
    path_position: {description: '[Variable]' + i18n_variable.path_position.desc,available: datasimple.all},
    path_positionprevious: {description: '[Variable]' + i18n_variable.path_positionprevious.desc,available: datasimple.all},
    path_scale: {description: '[Variable]' + i18n_variable.path_scale.desc,available: datasimple.all},
    path_speed: {description: '[Variable]' + i18n_variable.path_speed.desc,available: datasimple.all},
    persistent: {description: '[Variable]' + i18n_variable.persistent.desc,available: datasimple.all},
	phy_active: {description: '[Variable]' + i18n_variable.phy_active.desc,available: datasimple.gms1},
    phy_angular_damping: {description: '[Variable]' + i18n_variable.phy_angular_damping.desc,available: datasimple.gms1},
    phy_angular_velocity: {description: '[Variable]' + i18n_variable.phy_angular_velocity.desc,available: datasimple.gms1},
    phy_bullet: {description: '[Variable]' + i18n_variable.phy_bullet.desc,available: datasimple.gms1},
    phy_collision_points: {description: '[Variable]' + i18n_variable.phy_collision_points.desc,available: datasimple.gms1},
    phy_collision_x: {description: '[Variable]' + i18n_variable.phy_collision_x.desc,available: datasimple.gms1},
    phy_collision_y: {description: '[Variable]' + i18n_variable.phy_collision_y.desc,available: datasimple.gms1},
    phy_col_normal_x: {description: '[Variable]' + i18n_variable.phy_col_normal_x.desc,available: datasimple.gms1},
    phy_col_normal_y: {description: '[Variable]' + i18n_variable.phy_col_normal_y.desc,available: datasimple.gms1},
    phy_com_x: {description: '[Variable]' + i18n_variable.phy_com_x.desc,available: datasimple.gms1},
    phy_com_y: {description: '[Variable]' + i18n_variable.phy_com_y.desc,available: datasimple.gms1},
    phy_dynamic: {description: '[Variable]' + i18n_variable.phy_dynamic.desc,available: datasimple.gms1},
    phy_fixed_rotation: {description: '[Variable]' + i18n_variable.phy_fixed_rotation.desc,available: datasimple.gms1},
    phy_inertia: {description: '[Variable]' + i18n_variable.phy_inertia.desc,available: datasimple.gms1},
    phy_kinematic: {description: '[Variable]' + i18n_variable.phy_kinematic.desc,available: datasimple.gms1},
    phy_linear_damping: {description: '[Variable]' + i18n_variable.phy_linear_damping.desc,available: datasimple.gms1},
    phy_linear_velocity_x: {description: '[Variable]' + i18n_variable.phy_linear_velocity_x.desc,available: datasimple.gms1},
    phy_linear_velocity_y: {description: '[Variable]' + i18n_variable.phy_linear_velocity_y.desc,available: datasimple.gms1},
    phy_mass: {description: '[Variable]' + i18n_variable.phy_mass.desc,available: datasimple.gms1},
    phy_position_x: {description: '[Variable]' + i18n_variable.phy_position_x.desc,available: datasimple.gms1},
    phy_position_xprevious: {description: '[Variable]' + i18n_variable.phy_position_xprevious.desc,available: datasimple.gms1},
    phy_position_y: {description: '[Variable]' + i18n_variable.phy_position_y.desc,available: datasimple.gms1},
    phy_position_yprevious: {description: '[Variable]' + i18n_variable.phy_position_yprevious.desc,available: datasimple.gms1},
    phy_rotation: {description: '[Variable]' + i18n_variable.phy_rotation.desc,available: datasimple.gms1},
    phy_sleeping: {description: '[Variable]' + i18n_variable.phy_sleeping.desc,available: datasimple.gms1},
    phy_speed: {description: '[Variable]' + i18n_variable.phy_speed.desc,available: datasimple.gms1},
    phy_speed_x: {description: '[Variable]' + i18n_variable.phy_speed_x.desc,available: datasimple.gms1},
    phy_speed_y: {description: '[Variable]' + i18n_variable.phy_speed_y.desc,available: datasimple.gms1},
    solid: {description: '[Variable]' + i18n_variable.solid.desc,available: datasimple.all},
    speed: {description: '[Variable]' + i18n_variable.speed.desc,available: datasimple.all},
    sprite_height: {description: '[Variable]' + i18n_variable.sprite_height.desc,available: datasimple.all},
    sprite_index: {description: '[Variable]' + i18n_variable.sprite_index.desc,available: datasimple.all},
    sprite_width: {description: '[Variable]' + i18n_variable.sprite_width.desc,available: datasimple.all},
    sprite_xoffset: {description: '[Variable]' + i18n_variable.sprite_xoffset.desc,available: datasimple.all},
    sprite_yoffset: {description: '[Variable]' + i18n_variable.sprite_yoffset.desc,available: datasimple.all},
    timeline_index: {description: '[Variable]' + i18n_variable.timeline_index.desc,available: datasimple.all},
    timeline_loop: {description: '[Variable]' + i18n_variable.timeline_loop.desc,available: datasimple.all},
    timeline_position: {description: '[Variable]' + i18n_variable.timeline_position.desc,available: datasimple.all},
    timeline_running: {description: '[Variable]' + i18n_variable.timeline_running.desc,available: datasimple.all},
    timeline_speed: {description: '[Variable]' + i18n_variable.timeline_speed.desc,available: datasimple.all},
    visible: {description: '[Variable]' + i18n_variable.visible.desc,available: datasimple.all},
    vspeed: {description: '[Variable]' + i18n_variable.vspeed.desc,available: datasimple.all},
    x: {description: '[Variable]' + i18n_variable.x.desc,available: datasimple.all},
    xprevious: {description: '[Variable]' + i18n_variable.xprevious.desc,available: datasimple.all},
    xstart: {description: '[Variable]' + i18n_variable.xstart.desc,available: datasimple.all},
    y: {description: '[Variable]' + i18n_variable.y.desc,available: datasimple.all},
    yprevious: {description: '[Variable]' + i18n_variable.yprevious.desc,available: datasimple.all},
    ystart: {description: '[Variable]' + i18n_variable.ystart.desc,available: datasimple.all},
    view_enabled: {description: '[Variable]' + i18n_variable.view_enabled.desc,available: datasimple.all},
    view_current: {description: '[Variable]' + i18n_variable.view_current.desc,available: datasimple.all},
    background_color: {description: '[Variable]' + i18n_variable.background_color.desc,available: datasimple.all},
    background_showcolor: {description: '[Variable]' + i18n_variable.background_showcolor.desc,available: datasimple.all},
    background_visible: {description: '[Variable] [0..7]' + i18n_variable.background_visible.desc,available: datasimple.all},
    background_foreground: {description: '[Variable] [0..7]' + i18n_variable.background_foreground.desc,available: datasimple.all},
    background_index: {description: '[Variable] [0..7]' + i18n_variable.background_index.desc,available: datasimple.all},
    background_x: {description: '[Variable] [0..7]' + i18n_variable.background_x.desc,available: datasimple.all},
    background_y: {description: '[Variable] [0..7]' + i18n_variable.background_y.desc,available: datasimple.all},
    background_width: {description: '[Variable] [0..7]' + i18n_variable.background_width.desc,available: datasimple.all},
    background_height: {description: '[Variable] [0..7]' + i18n_variable.background_height.desc,available: datasimple.all},
    background_htiled: {description: '[Variable] [0..7]' + i18n_variable.background_htiled.desc,available: datasimple.all},
    background_vtiled: {description: '[Variable] [0..7]' + i18n_variable.background_vtiled.desc,available: datasimple.all},
    background_xscale: {description: '[Variable] [0..7]' + i18n_variable.background_xscale.desc,available: datasimple.all},
    background_yscale: {description: '[Variable] [0..7]' + i18n_variable.background_yscale.desc,available: datasimple.all},
    background_hspeed: {description: '[Variable] [0..7]' + i18n_variable.background_hspeed.desc,available: datasimple.all},
    background_vspeed: {description: '[Variable] [0..7]' + i18n_variable.background_vspeed.desc,available: datasimple.all},
    background_blend: {description: '[Variable] [0..7]' + i18n_variable.background_blend.desc,available: datasimple.all},
    background_alpha: {description: '[Variable] [0..7]' + i18n_variable.background_alpha.desc,available: datasimple.all},

    //GameMaker 8.1 Only
    secure_mode: {description: '[Variable] (' + i18n_notice.gm_81_variable + ')' + i18n_variable.secure_mode.desc,available: datasimple.gm81},
    gamemaker_pro: {description: '[Variable] (' + i18n_notice.gm_81_variable + ')' + i18n_variable.gamemaker_pro.desc,available: datasimple.gm81},
	gamemaker_registered: {description: '[Variable] (' + i18n_notice.gm_81_variable + ')' + i18n_variable.gamemaker_registered.desc,available: datasimple.gm81},
	gamemaker_version: {description: '[Variable] (' + i18n_notice.gm_81_variable + ')' + i18n_variable.gamemaker_version.desc,available: datasimple.gm81},
    
    //Obsolete variables in GameMaker Studio 2
    view_angle: {description: '[Variable] [0..7] (' + i18n_notice.obsolete_2_variable + ')' + i18n_variable.view_angle.desc,available: datasimple.ob2},
	view_hborder: {description: '[Variable] [0..7] (' + i18n_notice.obsolete_2_variable + ')' + i18n_variable.view_hborder.desc,available: datasimple.ob2},
	view_hport: {description: '[Variable] [0..7] (' + i18n_notice.obsolete_2_variable + ')' + i18n_variable.view_hport.desc,available: datasimple.ob2},
	view_hspeed: {description: '[Variable] [0..7] (' + i18n_notice.obsolete_2_variable + ')' + i18n_variable.view_hspeed.desc,available: datasimple.ob2},
	view_hview: {description: '[Variable] [0..7] (' + i18n_notice.obsolete_2_variable + ')' + i18n_variable.view_hview.desc,available: datasimple.ob2},
	view_object: {description: '[Variable] [0..7] (' + i18n_notice.obsolete_2_variable + ')' + i18n_variable.view_object.desc,available: datasimple.ob2},
	view_vborder: {description: '[Variable] [0..7] (' + i18n_notice.obsolete_2_variable + ')' + i18n_variable.view_vborder.desc,available: datasimple.ob2},
	view_visible: {description: '[Variable] [0..7] (' + i18n_notice.obsolete_2_variable + ')' + i18n_variable.view_visible.desc,available: datasimple.ob2},
	view_vspeed: {description: '[Variable] [0..7] (' + i18n_notice.obsolete_2_variable + ')' + i18n_variable.view_vspeed.desc,available: datasimple.ob2},
	view_wport: {description: '[Variable] [0..7] (' + i18n_notice.obsolete_2_variable + ')' + i18n_variable.view_wport.desc,available: datasimple.ob2},
	view_wview: {description: '[Variable] [0..7] (' + i18n_notice.obsolete_2_variable + ')' + i18n_variable.view_wview.desc,available: datasimple.ob2},
	view_xport: {description: '[Variable] [0..7] (' + i18n_notice.obsolete_2_variable + ')' + i18n_variable.view_xport.desc,available: datasimple.ob2},
	view_xview: {description: '[Variable] [0..7] (' + i18n_notice.obsolete_2_variable + ')' + i18n_variable.view_xview.desc,available: datasimple.ob2},
	view_yport: {description: '[Variable] [0..7] (' + i18n_notice.obsolete_2_variable + ')' + i18n_variable.view_yport.desc,available: datasimple.ob2},
	view_yview: {description: '[Variable] [0..7] (' + i18n_notice.obsolete_2_variable + ')' + i18n_variable.view_yview.desc,available: datasimple.ob2},

	//New in GameMaker Studio 2
	layer: {description: '[Variable] (' + i18n_notice.new_2 + ')' + i18n_variable.layer.desc,available: datasimple.gms2},
	view_camera: {description: '[Variable] [0..7] (' + i18n_notice.new_2 + ')' + i18n_variable.view_camera.desc,available: datasimple.gms2},
	event_data: {description: '[Variable] (' + i18n_notice.new_2 + ')' + i18n_variable.event_data.desc,available: datasimple.gms2}
};

exports.constants = {
	achievement_achievement_info: {description: '[Constant]' + i18n_constant.achievement_achievement_info.desc,available: datasimple.gms1},
	achievement_challenge_completed: {description: '[Constant]' + i18n_constant.achievement_challenge_completed.desc,available: datasimple.gms1},
	achievement_challenge_completed_by_remote: {description: '[Constant]' + i18n_constant.achievement_challenge_completed_by_remote.desc,available: datasimple.gms1},
	achievement_challenge_launched: {description: '[Constant]' + i18n_constant.achievement_challenge_launched.desc,available: datasimple.gms1},
	achievement_challenge_list_received: {description: '[Constant]' + i18n_constant.achievement_challenge_list_received.desc,available: datasimple.gms1},
	achievement_challenge_received: {description: '[Constant]' + i18n_constant.achievement_challenge_received.desc,available: datasimple.gms1},
	achievement_filter_all_players: {description: '[Constant]' + i18n_constant.achievement_filter_all_players.desc,available: datasimple.gms1},
	achievement_filter_friends_only: {description: '[Constant]' + i18n_constant.achievement_filter_friends_only.desc,available: datasimple.gms1},
	achievement_friends_info: {description: '[Constant]' + i18n_constant.achievement_friends_info.desc,available: datasimple.gms1},
	achievement_leaderboard_info: {description: '[Constant]' + i18n_constant.achievement_leaderboard_info.desc,available: datasimple.gms1},
	achievement_our_info: {description: '[Constant]' + i18n_constant.achievement_our_info.desc,available: datasimple.gms1},
	achievement_pic_loaded: {description: '[Constant]' + i18n_constant.achievement_pic_loaded.desc,available: datasimple.gms1},
	achievement_player_info: {description: '[Constant]' + i18n_constant.achievement_player_info.desc,available: datasimple.gms1},
	achievement_purchase_info: {description: '[Constant]' + i18n_constant.achievement_purchase_info.desc,available: datasimple.gms1},
	achievement_show_achievement: {description: '[Constant]' + i18n_constant.achievement_show_achievement.desc,available: datasimple.gms1},
	achievement_show_bank: {description: '[Constant]' + i18n_constant.achievement_show_bank.desc,available: datasimple.gms1},
	achievement_show_friend_picker: {description: '[Constant]' + i18n_constant.achievement_show_friend_picker.desc,available: datasimple.gms1},
	achievement_show_leaderboard: {description: '[Constant]' + i18n_constant.achievement_show_leaderboard.desc,available: datasimple.gms1},
	achievement_show_profile: {description: '[Constant]' + i18n_constant.achievement_show_profile.desc,available: datasimple.gms1},
	achievement_show_purchase_prompt: {description: '[Constant]' + i18n_constant.achievement_show_purchase_prompt.desc,available: datasimple.gms1},
	achievement_show_ui: {description: '[Constant]' + i18n_constant.achievement_show_ui.desc,available: datasimple.gms1},
	achievement_type_achievement_challenge: {description: '[Constant]' + i18n_constant.achievement_type_achievement_challenge.desc,available: datasimple.gms1},
	achievement_type_score_challenge: {description: '[Constant]' + i18n_constant.achievement_type_score_challenge.desc,available: datasimple.gms1},
	all: {description: '[Constant]' + i18n_constant.all.desc,available: datasimple.all},
	ANSI_CHARSET: {description: '[Constant]' + i18n_constant.ANSI_CHARSET.desc,available: datasimple.all},
	ARABIC_CHARSET: {description: '[Constant]' + i18n_constant.ARABIC_CHARSET.desc,available: datasimple.all},
	asset_background: {description: '[Constant]' + i18n_constant.asset_background.desc,available: datasimple.gms1},
	asset_font: {description: '[Constant]' + i18n_constant.asset_font.desc,available: datasimple.gms1},
	asset_object: {description: '[Constant]' + i18n_constant.asset_object.desc,available: datasimple.gms1},
	asset_path: {description: '[Constant]' + i18n_constant.asset_path.desc,available: datasimple.gms1},
	asset_room: {description: '[Constant]' + i18n_constant.asset_room.desc,available: datasimple.gms1},
	asset_script: {description: '[Constant]' + i18n_constant.asset_script.desc,available: datasimple.gms1},
	asset_sound: {description: '[Constant]' + i18n_constant.asset_sound.desc,available: datasimple.gms1},
	asset_sprite: {description: '[Constant]' + i18n_constant.asset_sprite.desc,available: datasimple.gms1},
	asset_timeline: {description: '[Constant]' + i18n_constant.asset_timeline.desc,available: datasimple.gms1},
    asset_unknown: {description: '[Constant]' + i18n_constant.asset_unknown.desc,available: datasimple.gms1},
    audio_3D: {description: '[Constant]' + i18n_constant.audio_3D.desc,available: datasimple.gms1},
	audio_falloff_exponent_distance: {description: '[Constant]' + i18n_constant.audio_falloff_exponent_distance.desc,available: datasimple.gms1},
	audio_falloff_exponent_distance_clamped: {description: '[Constant]' + i18n_constant.audio_falloff_exponent_distance_clamped.desc,available: datasimple.gms1},
	audio_falloff_inverse_distance: {description: '[Constant]' + i18n_constant.audio_falloff_inverse_distance.desc,available: datasimple.gms1},
	audio_falloff_inverse_distance_clamped: {description: '[Constant]' + i18n_constant.audio_falloff_inverse_distance_clamped.desc,available: datasimple.gms1},
	audio_falloff_linear_distance: {description: '[Constant]' + i18n_constant.audio_falloff_linear_distance.desc,available: datasimple.gms1},
	audio_falloff_linear_distance_clamped: {description: '[Constant]' + i18n_constant.audio_falloff_linear_distance_clamped.desc,available: datasimple.gms1},
    audio_falloff_none: {description: '[Constant]' + i18n_constant.audio_falloff_none.desc,available: datasimple.gms1},
    audio_mono: {description: '[Constant]' + i18n_constant.audio_mono.desc,available: datasimple.gms1},
	audio_new_system: {description: '[Constant]' + i18n_constant.audio_new_system.desc,available: datasimple.gms1},
    audio_old_system: {description: '[Constant]' + i18n_constant.audio_old_system.desc,available: datasimple.gms1},
    audio_stereo: {description: '[Constant]' + i18n_constant.audio_stereo.desc,available: datasimple.gms1},
	BALTIC_CHARSET: {description: '[Constant]' + i18n_constant.BALTIC_CHARSET.desc,available: datasimple.all},
	bm_add: {description: '[Constant]' + i18n_constant.bm_add.desc,available: datasimple.all},
	bm_dest_alpha: {description: '[Constant]' + i18n_constant.bm_dest_alpha.desc,available: datasimple.all},
	bm_dest_color: {description: '[Constant]' + i18n_constant.bm_dest_color.desc,available: datasimple.all},
	bm_inv_dest_alpha: {description: '[Constant]' + i18n_constant.bm_inv_dest_alpha.desc,available: datasimple.all},
	bm_inv_dest_color: {description: '[Constant]' + i18n_constant.bm_inv_dest_color.desc,available: datasimple.all},
	bm_inv_src_alpha: {description: '[Constant]' + i18n_constant.bm_inv_src_alpha.desc,available: datasimple.all},
	bm_inv_src_color: {description: '[Constant]' + i18n_constant.bm_inv_src_color.desc,available: datasimple.all},
	bm_max: {description: '[Constant]' + i18n_constant.bm_max.desc,available: datasimple.all},
	bm_normal: {description: '[Constant]' + i18n_constant.bm_normal.desc,available: datasimple.all},
	bm_one: {description: '[Constant]' + i18n_constant.bm_one.desc,available: datasimple.all},
	bm_src_alpha: {description: '[Constant]' + i18n_constant.bm_src_alpha.desc,available: datasimple.all},
	bm_src_alpha_sat: {description: '[Constant]' + i18n_constant.bm_src_alpha_sat.desc,available: datasimple.all},
	bm_src_color: {description: '[Constant]' + i18n_constant.bm_src_color.desc,available: datasimple.all},
	bm_subtract: {description: '[Constant]' + i18n_constant.bm_subtract.desc,available: datasimple.all},
	bm_zero: {description: '[Constant]' + i18n_constant.bm_zero.desc,available: datasimple.all},
	browser_chrome: {description: '[Constant]' + i18n_constant.browser_chrome.desc,available: datasimple.gms1},
	browser_firefox: {description: '[Constant]' + i18n_constant.browser_firefox.desc,available: datasimple.gms1},
	browser_ie: {description: '[Constant]' + i18n_constant.browser_ie.desc,available: datasimple.gms1},
	browser_ie_mobile: {description: '[Constant]' + i18n_constant.browser_ie_mobile.desc,available: datasimple.gms1},
	browser_not_a_browser: {description: '[Constant]' + i18n_constant.browser_not_a_browser.desc,available: datasimple.gms1},
	browser_opera: {description: '[Constant]' + i18n_constant.browser_opera.desc,available: datasimple.gms1},
	browser_safari: {description: '[Constant]' + i18n_constant.browser_safari.desc,available: datasimple.gms1},
	browser_safari_mobile: {description: '[Constant]' + i18n_constant.browser_safari_mobile.desc,available: datasimple.gms1},
	browser_tizen: {description: '[Constant]' + i18n_constant.browser_tizen.desc,available: datasimple.gms1},
	browser_unknown: {description: '[Constant]' + i18n_constant.browser_unknown.desc,available: datasimple.gms1},
	browser_windows_store: {description: '[Constant]' + i18n_constant.browser_windows_store.desc,available: datasimple.gms1},
	buffer_bool: {description: '[Constant]' + i18n_constant.buffer_bool.desc,available: datasimple.gms1},
	buffer_f16: {description: '[Constant]' + i18n_constant.buffer_f16.desc,available: datasimple.gms1},
	buffer_f32: {description: '[Constant]' + i18n_constant.buffer_f32.desc,available: datasimple.gms1},
	buffer_f64: {description: '[Constant]' + i18n_constant.buffer_f64.desc,available: datasimple.gms1},
	buffer_fast: {description: '[Constant]' + i18n_constant.buffer_fast.desc,available: datasimple.gms1},
	buffer_fixed: {description: '[Constant]' + i18n_constant.buffer_fixed.desc,available: datasimple.gms1},
	buffer_generalerror: {description: '[Constant]' + i18n_constant.buffer_generalerror.desc,available: datasimple.gms1},
	buffer_grow: {description: '[Constant]' + i18n_constant.buffer_grow.desc,available: datasimple.gms1},
	buffer_invalidtype: {description: '[Constant]' + i18n_constant.buffer_invalidtype.desc,available: datasimple.gms1},
	buffer_outofbounds: {description: '[Constant]' + i18n_constant.buffer_outofbounds.desc,available: datasimple.gms1},
	buffer_outofspace: {description: '[Constant]' + i18n_constant.buffer_outofspace.desc,available: datasimple.gms1},
	buffer_s16: {description: '[Constant]' + i18n_constant.buffer_s16.desc,available: datasimple.gms1},
	buffer_s32: {description: '[Constant]' + i18n_constant.buffer_s32.desc,available: datasimple.gms1},
	buffer_s8: {description: '[Constant]' + i18n_constant.buffer_s8.desc,available: datasimple.gms1},
	buffer_seek_end: {description: '[Constant]' + i18n_constant.buffer_seek_end.desc,available: datasimple.gms1},
	buffer_seek_relative: {description: '[Constant]' + i18n_constant.buffer_seek_relative.desc,available: datasimple.gms1},
	buffer_seek_start: {description: '[Constant]' + i18n_constant.buffer_seek_start.desc,available: datasimple.gms1},
	buffer_string: {description: '[Constant]' + i18n_constant.buffer_string.desc,available: datasimple.gms1},
	buffer_u16: {description: '[Constant]' + i18n_constant.buffer_u16.desc,available: datasimple.gms1},
	buffer_u32: {description: '[Constant]' + i18n_constant.buffer_u32.desc,available: datasimple.gms1},
	buffer_u8: {description: '[Constant]' + i18n_constant.buffer_u8.desc,available: datasimple.gms1},
	buffer_vbuffer: {description: '[Constant]' + i18n_constant.buffer_vbuffer.desc,available: datasimple.gms1},
	buffer_wrap: {description: '[Constant]' + i18n_constant.buffer_wrap.desc,available: datasimple.gms1},
	CHINESEBIG5_CHARSET: {description: '[Constant]' + i18n_constant.CHINESEBIG5_CHARSET.desc,available: datasimple.all},
	cr_appstart: {description: '[Constant]' + i18n_constant.cr_appstart.desc,available: datasimple.all},
	cr_arrow: {description: '[Constant]' + i18n_constant.cr_arrow.desc,available: datasimple.all},
	cr_beam: {description: '[Constant]' + i18n_constant.cr_beam.desc,available: datasimple.all},
	cr_cross: {description: '[Constant]' + i18n_constant.cr_cross.desc,available: datasimple.all},
	cr_default: {description: '[Constant]' + i18n_constant.cr_default.desc,available: datasimple.all},
	cr_drag: {description: '[Constant]' + i18n_constant.cr_drag.desc,available: datasimple.all},
	cr_handpoint: {description: '[Constant]' + i18n_constant.cr_handpoint.desc,available: datasimple.all},
	cr_help: {description: '[Constant]' + i18n_constant.cr_help.desc,available: datasimple.all},
	cr_hourglass: {description: '[Constant]' + i18n_constant.cr_hourglass.desc,available: datasimple.all},
	cr_hsplit: {description: '[Constant]' + i18n_constant.cr_hsplit.desc,available: datasimple.all},
	cr_multidrag: {description: '[Constant]' + i18n_constant.cr_multidrag.desc,available: datasimple.all},
	cr_no: {description: '[Constant]' + i18n_constant.cr_no.desc,available: datasimple.all},
	cr_nodrop: {description: '[Constant]' + i18n_constant.cr_nodrop.desc,available: datasimple.all},
	cr_none: {description: '[Constant]' + i18n_constant.cr_none.desc,available: datasimple.all},
	cr_size_all: {description: '[Constant]' + i18n_constant.cr_size_all.desc,available: datasimple.all},
	cr_size_nesw: {description: '[Constant]' + i18n_constant.cr_size_nesw.desc,available: datasimple.all},
	cr_size_ns: {description: '[Constant]' + i18n_constant.cr_size_ns.desc,available: datasimple.all},
	cr_size_nwse: {description: '[Constant]' + i18n_constant.cr_size_nwse.desc,available: datasimple.all},
	cr_size_we: {description: '[Constant]' + i18n_constant.cr_size_we.desc,available: datasimple.all},
	cr_sqlwait: {description: '[Constant]' + i18n_constant.cr_sqlwait.desc,available: datasimple.all},
	cr_uparrow: {description: '[Constant]' + i18n_constant.cr_uparrow.desc,available: datasimple.all},
	cr_vsplit: {description: '[Constant]' + i18n_constant.cr_vsplit.desc,available: datasimple.all},
	c_aqua: {description: '[Constant]' + i18n_constant.c_aqua.desc,available: datasimple.all},
	c_black: {description: '[Constant]' + i18n_constant.c_black.desc,available: datasimple.all},
	c_blue: {description: '[Constant]' + i18n_constant.c_blue.desc,available: datasimple.all},
	c_dkgray: {description: '[Constant]' + i18n_constant.c_dkgray.desc,available: datasimple.all},
	c_fuchsia: {description: '[Constant]' + i18n_constant.c_fuchsia.desc,available: datasimple.all},
	c_gray: {description: '[Constant]' + i18n_constant.c_gray.desc,available: datasimple.all},
	c_green: {description: '[Constant]' + i18n_constant.c_green.desc,available: datasimple.all},
	c_lime: {description: '[Constant]' + i18n_constant.c_lime.desc,available: datasimple.all},
	c_ltgray: {description: '[Constant]' + i18n_constant.c_ltgray.desc,available: datasimple.all},
	c_maroon: {description: '[Constant]' + i18n_constant.c_maroon.desc,available: datasimple.all},
	c_navy: {description: '[Constant]' + i18n_constant.c_navy.desc,available: datasimple.all},
	c_olive: {description: '[Constant]' + i18n_constant.c_olive.desc,available: datasimple.all},
	c_orange: {description: '[Constant]' + i18n_constant.c_orange.desc,available: datasimple.all},
	c_purple: {description: '[Constant]' + i18n_constant.c_purple.desc,available: datasimple.all},
	c_red: {description: '[Constant]' + i18n_constant.c_red.desc,available: datasimple.all},
	c_silver: {description: '[Constant]' + i18n_constant.c_silver.desc,available: datasimple.all},
	c_teal: {description: '[Constant]' + i18n_constant.c_teal.desc,available: datasimple.all},
	c_white: {description: '[Constant]' + i18n_constant.c_white.desc,available: datasimple.all},
	c_yellow: {description: '[Constant]' + i18n_constant.c_yellow.desc,available: datasimple.all},
	DEFAULT_CHARSET: {description: '[Constant]' + i18n_constant.DEFAULT_CHARSET.desc,available: datasimple.all},
	device_emulator: {description: '[Constant]' + i18n_constant.device_emulator.desc,available: datasimple.gms1},
	device_ios_ipad: {description: '[Constant]' + i18n_constant.device_ios_ipad.desc,available: datasimple.gms1},
	device_ios_ipad_retina: {description: '[Constant]' + i18n_constant.device_ios_ipad_retina.desc,available: datasimple.gms1},
	device_ios_iphone: {description: '[Constant]' + i18n_constant.device_ios_iphone.desc,available: datasimple.gms1},
	device_ios_iphone5: {description: '[Constant]' + i18n_constant.device_ios_iphone5.desc,available: datasimple.gms1},
    device_ios_iphone6: {description: '[Constant]' + i18n_constant.device_ios_iphone6.desc,available: datasimple.gms1},
    device_ios_iphone6plus: {description: '[Constant]' + i18n_constant.device_ios_iphone6plus.desc,available: datasimple.gms1},
	device_ios_iphone_retina: {description: '[Constant]' + i18n_constant.device_ios_iphone_retina.desc,available: datasimple.gms1},
	device_ios_unknown: {description: '[Constant]' + i18n_constant.device_ios_unknown.desc,available: datasimple.gms1},
	device_tablet: {description: '[Constant]' + i18n_constant.device_tablet.desc,available: datasimple.gms1},
	display_landscape: {description: '[Constant]' + i18n_constant.display_landscape.desc,available: datasimple.gms1},
	display_landscape_flipped: {description: '[Constant]' + i18n_constant.display_landscape_flipped.desc,available: datasimple.gms1},
	display_portrait: {description: '[Constant]' + i18n_constant.display_portrait.desc,available: datasimple.gms1},
	display_portrait_flipped: {description: '[Constant]' + i18n_constant.display_portrait_flipped.desc,available: datasimple.gms1},
	dll_cdel: {description: '[Constant]' + i18n_constant.dll_cdel.desc,available: datasimple.all},
	dll_cdecl: {description: '[Constant]' + i18n_constant.dll_cdecl.desc,available: datasimple.all},
	dll_stdcall: {description: '[Constant]' + i18n_constant.dll_stdcall.desc,available: datasimple.all},
	ds_type_grid: {description: '[Constant]' + i18n_constant.ds_type_grid.desc,available: datasimple.gms1},
	ds_type_list: {description: '[Constant]' + i18n_constant.ds_type_list.desc,available: datasimple.gms1},
	ds_type_map: {description: '[Constant]' + i18n_constant.ds_type_map.desc,available: datasimple.gms1},
	ds_type_priority: {description: '[Constant]' + i18n_constant.ds_type_priority.desc,available: datasimple.gms1},
	ds_type_queue: {description: '[Constant]' + i18n_constant.ds_type_queue.desc,available: datasimple.gms1},
	ds_type_stack: {description: '[Constant]' + i18n_constant.ds_type_stack.desc,available: datasimple.gms1},
	EASTEUROPE_CHARSET: {description: '[Constant]' + i18n_constant.EASTEUROPE_CHARSET.desc,available: datasimple.all},
	ef_cloud: {description: '[Constant]' + i18n_constant.ef_cloud.desc,available: datasimple.all},
	ef_ellipse: {description: '[Constant]' + i18n_constant.ef_ellipse.desc,available: datasimple.all},
	ef_explosion: {description: '[Constant]' + i18n_constant.ef_explosion.desc,available: datasimple.all},
	ef_firework: {description: '[Constant]' + i18n_constant.ef_firework.desc,available: datasimple.all},
	ef_flare: {description: '[Constant]' + i18n_constant.ef_flare.desc,available: datasimple.all},
	ef_rain: {description: '[Constant]' + i18n_constant.ef_rain.desc,available: datasimple.all},
	ef_ring: {description: '[Constant]' + i18n_constant.ef_ring.desc,available: datasimple.all},
	ef_smoke: {description: '[Constant]' + i18n_constant.ef_smoke.desc,available: datasimple.all},
	ef_smokeup: {description: '[Constant]' + i18n_constant.ef_smokeup.desc,available: datasimple.all},
	ef_snow: {description: '[Constant]' + i18n_constant.ef_snow.desc,available: datasimple.all},
	ef_spark: {description: '[Constant]' + i18n_constant.ef_spark.desc,available: datasimple.all},
	ef_star: {description: '[Constant]' + i18n_constant.ef_star.desc,available: datasimple.all},
	ev_alarm: {description: '[Constant]' + i18n_constant.ev_alarm.desc,available: datasimple.all},
	ev_animation_end: {description: '[Constant]' + i18n_constant.ev_animation_end.desc,available: datasimple.all},
	ev_boundary: {description: '[Constant]' + i18n_constant.ev_boundary.desc,available: datasimple.all},
	ev_close_button: {description: '[Constant]' + i18n_constant.ev_close_button.desc,available: datasimple.all},
	ev_collision: {description: '[Constant]' + i18n_constant.ev_collision.desc,available: datasimple.all},
	ev_create: {description: '[Constant]' + i18n_constant.ev_create.desc,available: datasimple.all},
	ev_destroy: {description: '[Constant]' + i18n_constant.ev_destroy.desc,available: datasimple.all},
	ev_draw: {description: '[Constant]' + i18n_constant.ev_draw.desc,available: datasimple.all},
	ev_end_of_path: {description: '[Constant]' + i18n_constant.ev_end_of_path.desc,available: datasimple.all},
	ev_game_end: {description: '[Constant]' + i18n_constant.ev_game_end.desc,available: datasimple.all},
	ev_game_start: {description: '[Constant]' + i18n_constant.ev_game_start.desc,available: datasimple.all},
	ev_global_left_button: {description: '[Constant]' + i18n_constant.ev_global_left_button.desc,available: datasimple.all},
	ev_global_left_press: {description: '[Constant]' + i18n_constant.ev_global_left_press.desc,available: datasimple.all},
	ev_global_left_release: {description: '[Constant]' + i18n_constant.ev_global_left_release.desc,available: datasimple.all},
	ev_global_middle_button: {description: '[Constant]' + i18n_constant.ev_global_middle_button.desc,available: datasimple.all},
	ev_global_middle_press: {description: '[Constant]' + i18n_constant.ev_global_middle_press.desc,available: datasimple.all},
	ev_global_middle_release: {description: '[Constant]' + i18n_constant.ev_global_middle_release.desc,available: datasimple.all},
	ev_global_press: {description: '[Constant]' + i18n_constant.ev_global_press.desc,available: datasimple.all},
	ev_global_release: {description: '[Constant]' + i18n_constant.ev_global_release.desc,available: datasimple.all},
	ev_global_right_button: {description: '[Constant]' + i18n_constant.ev_global_right_button.desc,available: datasimple.all},
	ev_global_right_press: {description: '[Constant]' + i18n_constant.ev_global_right_press.desc,available: datasimple.all},
	ev_global_right_release: {description: '[Constant]' + i18n_constant.ev_global_right_release.desc,available: datasimple.all},
	ev_gui: {description: '[Constant]' + i18n_constant.ev_gui.desc,available: datasimple.all},
	ev_joystick1_button1: {description: '[Constant]' + i18n_constant.ev_joystick1_button1.desc,available: datasimple.all},
	ev_joystick1_button2: {description: '[Constant]' + i18n_constant.ev_joystick1_button2.desc,available: datasimple.all},
	ev_joystick1_button3: {description: '[Constant]' + i18n_constant.ev_joystick1_button3.desc,available: datasimple.all},
	ev_joystick1_button4: {description: '[Constant]' + i18n_constant.ev_joystick1_button4.desc,available: datasimple.all},
	ev_joystick1_button5: {description: '[Constant]' + i18n_constant.ev_joystick1_button5.desc,available: datasimple.all},
	ev_joystick1_button6: {description: '[Constant]' + i18n_constant.ev_joystick1_button6.desc,available: datasimple.all},
	ev_joystick1_button7: {description: '[Constant]' + i18n_constant.ev_joystick1_button7.desc,available: datasimple.all},
	ev_joystick1_button8: {description: '[Constant]' + i18n_constant.ev_joystick1_button8.desc,available: datasimple.all},
	ev_joystick1_down: {description: '[Constant]' + i18n_constant.ev_joystick1_down.desc,available: datasimple.all},
	ev_joystick1_left: {description: '[Constant]' + i18n_constant.ev_joystick1_left.desc,available: datasimple.all},
	ev_joystick1_right: {description: '[Constant]' + i18n_constant.ev_joystick1_right.desc,available: datasimple.all},
	ev_joystick1_up: {description: '[Constant]' + i18n_constant.ev_joystick1_up.desc,available: datasimple.all},
	ev_joystick2_button1: {description: '[Constant]' + i18n_constant.ev_joystick2_button1.desc,available: datasimple.all},
	ev_joystick2_button2: {description: '[Constant]' + i18n_constant.ev_joystick2_button2.desc,available: datasimple.all},
	ev_joystick2_button3: {description: '[Constant]' + i18n_constant.ev_joystick2_button3.desc,available: datasimple.all},
	ev_joystick2_button4: {description: '[Constant]' + i18n_constant.ev_joystick2_button4.desc,available: datasimple.all},
	ev_joystick2_button5: {description: '[Constant]' + i18n_constant.ev_joystick2_button5.desc,available: datasimple.all},
	ev_joystick2_button6: {description: '[Constant]' + i18n_constant.ev_joystick2_button6.desc,available: datasimple.all},
	ev_joystick2_button7: {description: '[Constant]' + i18n_constant.ev_joystick2_button7.desc,available: datasimple.all},
	ev_joystick2_button8: {description: '[Constant]' + i18n_constant.ev_joystick2_button8.desc,available: datasimple.all},
	ev_joystick2_down: {description: '[Constant]' + i18n_constant.ev_joystick2_down.desc,available: datasimple.all},
	ev_joystick2_left: {description: '[Constant]' + i18n_constant.ev_joystick2_left.desc,available: datasimple.all},
	ev_joystick2_right: {description: '[Constant]' + i18n_constant.ev_joystick2_right.desc,available: datasimple.all},
	ev_joystick2_up: {description: '[Constant]' + i18n_constant.ev_joystick2_up.desc,available: datasimple.all},
	ev_keyboard: {description: '[Constant]' + i18n_constant.ev_keyboard.desc,available: datasimple.all},
	ev_keypress: {description: '[Constant]' + i18n_constant.ev_keypress.desc,available: datasimple.all},
	ev_keyrelease: {description: '[Constant]' + i18n_constant.ev_keyrelease.desc,available: datasimple.all},
	ev_left_button: {description: '[Constant]' + i18n_constant.ev_left_button.desc,available: datasimple.all},
	ev_left_press: {description: '[Constant]' + i18n_constant.ev_left_press.desc,available: datasimple.all},
	ev_left_release: {description: '[Constant]' + i18n_constant.ev_left_release.desc,available: datasimple.all},
	ev_middle_button: {description: '[Constant]' + i18n_constant.ev_middle_button.desc,available: datasimple.all},
	ev_middle_press: {description: '[Constant]' + i18n_constant.ev_middle_press.desc,available: datasimple.all},
	ev_middle_release: {description: '[Constant]' + i18n_constant.ev_middle_release.desc,available: datasimple.all},
	ev_mouse: {description: '[Constant]' + i18n_constant.ev_mouse.desc,available: datasimple.all},
	ev_mouse_enter: {description: '[Constant]' + i18n_constant.ev_mouse_enter.desc,available: datasimple.all},
	ev_mouse_leave: {description: '[Constant]' + i18n_constant.ev_mouse_leave.desc,available: datasimple.all},
	ev_mouse_wheel_down: {description: '[Constant]' + i18n_constant.ev_mouse_wheel_down.desc,available: datasimple.all},
	ev_mouse_wheel_up: {description: '[Constant]' + i18n_constant.ev_mouse_wheel_up.desc,available: datasimple.all},
	ev_no_button: {description: '[Constant]' + i18n_constant.ev_no_button.desc,available: datasimple.all},
	ev_no_more_health: {description: '[Constant]' + i18n_constant.ev_no_more_health.desc,available: datasimple.all},
	ev_no_more_lives: {description: '[Constant]' + i18n_constant.ev_no_more_lives.desc,available: datasimple.all},
	ev_other: {description: '[Constant]' + i18n_constant.ev_other.desc,available: datasimple.all},
	ev_outside: {description: '[Constant]' + i18n_constant.ev_outside.desc,available: datasimple.all},
	ev_right_button: {description: '[Constant]' + i18n_constant.ev_right_button.desc,available: datasimple.all},
	ev_right_press: {description: '[Constant]' + i18n_constant.ev_right_press.desc,available: datasimple.all},
	ev_right_release: {description: '[Constant]' + i18n_constant.ev_right_release.desc,available: datasimple.all},
	ev_room_end: {description: '[Constant]' + i18n_constant.ev_room_end.desc,available: datasimple.all},
	ev_room_start: {description: '[Constant]' + i18n_constant.ev_room_start.desc,available: datasimple.all},
	ev_step: {description: '[Constant]' + i18n_constant.ev_step.desc,available: datasimple.all},
	ev_step_begin: {description: '[Constant]' + i18n_constant.ev_step_begin.desc,available: datasimple.all},
	ev_step_end: {description: '[Constant]' + i18n_constant.ev_step_end.desc,available: datasimple.all},
	ev_step_normal: {description: '[Constant]' + i18n_constant.ev_step_normal.desc,available: datasimple.all},
	ev_trigger: {description: '[Constant]' + i18n_constant.ev_trigger.desc,available: datasimple.all},
	ev_user0: {description: '[Constant]' + i18n_constant.ev_user0.desc,available: datasimple.all},
	ev_user1: {description: '[Constant]' + i18n_constant.ev_user1.desc,available: datasimple.all},
	ev_user10: {description: '[Constant]' + i18n_constant.ev_user10.desc,available: datasimple.all},
	ev_user11: {description: '[Constant]' + i18n_constant.ev_user11.desc,available: datasimple.all},
	ev_user12: {description: '[Constant]' + i18n_constant.ev_user12.desc,available: datasimple.all},
	ev_user13: {description: '[Constant]' + i18n_constant.ev_user13.desc,available: datasimple.all},
	ev_user14: {description: '[Constant]' + i18n_constant.ev_user14.desc,available: datasimple.all},
	ev_user15: {description: '[Constant]' + i18n_constant.ev_user15.desc,available: datasimple.all},
	ev_user2: {description: '[Constant]' + i18n_constant.ev_user2.desc,available: datasimple.all},
	ev_user3: {description: '[Constant]' + i18n_constant.ev_user3.desc,available: datasimple.all},
	ev_user4: {description: '[Constant]' + i18n_constant.ev_user4.desc,available: datasimple.all},
	ev_user5: {description: '[Constant]' + i18n_constant.ev_user5.desc,available: datasimple.all},
	ev_user6: {description: '[Constant]' + i18n_constant.ev_user6.desc,available: datasimple.all},
	ev_user7: {description: '[Constant]' + i18n_constant.ev_user7.desc,available: datasimple.all},
	ev_user8: {description: '[Constant]' + i18n_constant.ev_user8.desc,available: datasimple.all},
	ev_user9: {description: '[Constant]' + i18n_constant.ev_user9.desc,available: datasimple.all},
	false: {description: '[Constant]' + i18n_constant.false.desc,available: datasimple.all},
	fa_archive: {description: '[Constant]' + i18n_constant.fa_archive.desc,available: datasimple.all},
	fa_bottom: {description: '[Constant]' + i18n_constant.fa_bottom.desc,available: datasimple.all},
	fa_center: {description: '[Constant]' + i18n_constant.fa_center.desc,available: datasimple.all},
	fa_directory: {description: '[Constant]' + i18n_constant.fa_directory.desc,available: datasimple.all},
	fa_hidden: {description: '[Constant]' + i18n_constant.fa_hidden.desc,available: datasimple.all},
	fa_left: {description: '[Constant]' + i18n_constant.fa_left.desc,available: datasimple.all},
	fa_middle: {description: '[Constant]' + i18n_constant.fa_middle.desc,available: datasimple.all},
	fa_readonly: {description: '[Constant]' + i18n_constant.fa_readonly.desc,available: datasimple.all},
	fa_right: {description: '[Constant]' + i18n_constant.fa_right.desc,available: datasimple.all},
	fa_sysfile: {description: '[Constant]' + i18n_constant.fa_sysfile.desc,available: datasimple.all},
	fa_top: {description: '[Constant]' + i18n_constant.fa_top.desc,available: datasimple.all},
	fa_volumeid: {description: '[Constant]' + i18n_constant.fa_volumeid.desc,available: datasimple.all},
	GB2312_CHARSET: {description: '[Constant]' + i18n_constant.GB2312_CHARSET.desc,available: datasimple.all},
	global: {description: '[Constant]' + i18n_constant.global.desc,available: datasimple.all},
	gp_axislh: {description: '[Constant]' + i18n_constant.gp_axislh.desc,available: datasimple.gms1},
	gp_axislv: {description: '[Constant]' + i18n_constant.gp_axislv.desc,available: datasimple.gms1},
	gp_axisrh: {description: '[Constant]' + i18n_constant.gp_axisrh.desc,available: datasimple.gms1},
	gp_axisrv: {description: '[Constant]' + i18n_constant.gp_axisrv.desc,available: datasimple.gms1},
	gp_face1: {description: '[Constant]' + i18n_constant.gp_face1.desc,available: datasimple.gms1},
	gp_face2: {description: '[Constant]' + i18n_constant.gp_face2.desc,available: datasimple.gms1},
	gp_face3: {description: '[Constant]' + i18n_constant.gp_face3.desc,available: datasimple.gms1},
	gp_face4: {description: '[Constant]' + i18n_constant.gp_face4.desc,available: datasimple.gms1},
	gp_padd: {description: '[Constant]' + i18n_constant.gp_padd.desc,available: datasimple.gms1},
	gp_padl: {description: '[Constant]' + i18n_constant.gp_padl.desc,available: datasimple.gms1},
	gp_padr: {description: '[Constant]' + i18n_constant.gp_padr.desc,available: datasimple.gms1},
	gp_padu: {description: '[Constant]' + i18n_constant.gp_padu.desc,available: datasimple.gms1},
	gp_select: {description: '[Constant]' + i18n_constant.gp_select.desc,available: datasimple.gms1},
	gp_shoulderl: {description: '[Constant]' + i18n_constant.gp_shoulderl.desc,available: datasimple.gms1},
	gp_shoulderlb: {description: '[Constant]' + i18n_constant.gp_shoulderlb.desc,available: datasimple.gms1},
	gp_shoulderr: {description: '[Constant]' + i18n_constant.gp_shoulderr.desc,available: datasimple.gms1},
	gp_shoulderrb: {description: '[Constant]' + i18n_constant.gp_shoulderrb.desc,available: datasimple.gms1},
	gp_start: {description: '[Constant]' + i18n_constant.gp_start.desc,available: datasimple.gms1},
	gp_stickl: {description: '[Constant]' + i18n_constant.gp_stickl.desc,available: datasimple.gms1},
	gp_stickr: {description: '[Constant]' + i18n_constant.gp_stickr.desc,available: datasimple.gms1},
	GREEK_CHARSET: {description: '[Constant]' + i18n_constant.GREEK_CHARSET.desc,available: datasimple.all},
	HANGEUL_CHARSET: {description: '[Constant]' + i18n_constant.HANGEUL_CHARSET.desc,available: datasimple.all},
	HEBREW_CHARSET: {description: '[Constant]' + i18n_constant.HEBREW_CHARSET.desc,available: datasimple.all},
	JOHAB_CHARSET: {description: '[Constant]' + i18n_constant.JOHAB_CHARSET.desc,available: datasimple.all},
	lb_disp_none: {description: '[Constant]' + i18n_constant.lb_disp_none.desc,available: datasimple.gms1},
	lb_disp_numeric: {description: '[Constant]' + i18n_constant.lb_disp_numeric.desc,available: datasimple.gms1},
	lb_disp_time_ms: {description: '[Constant]' + i18n_constant.lb_disp_time_ms.desc,available: datasimple.gms1},
	lb_disp_time_sec: {description: '[Constant]' + i18n_constant.lb_disp_time_sec.desc,available: datasimple.gms1},
	lb_sort_ascending: {description: '[Constant]' + i18n_constant.lb_sort_ascending.desc,available: datasimple.gms1},
	lb_sort_descending: {description: '[Constant]' + i18n_constant.lb_sort_descending.desc,available: datasimple.gms1},
	lb_sort_none: {description: '[Constant]' + i18n_constant.lb_sort_none.desc,available: datasimple.gms1},
	leaderboard_type_number: {description: '[Constant]' + i18n_constant.leaderboard_type_number.desc,available: datasimple.gms1},
	leaderboard_type_time_mins_secs: {description: '[Constant]' + i18n_constant.leaderboard_type_time_mins_secs.desc,available: datasimple.gms1},
	local: {description: '[Constant]' + i18n_constant.local.desc,available: datasimple.all},
	MAC_CHARSET: {description: '[Constant]' + i18n_constant.MAC_CHARSET.desc,available: datasimple.all},
	matrix_projection: {description: '[Constant]' + i18n_constant.matrix_projection.desc,available: datasimple.all},
	matrix_view: {description: '[Constant]' + i18n_constant.matrix_view.desc,available: datasimple.all},
	matrix_world: {description: '[Constant]' + i18n_constant.matrix_world.desc,available: datasimple.all},
	mb_any: {description: '[Constant]' + i18n_constant.mb_any.desc,available: datasimple.all},
	mb_left: {description: '[Constant]' + i18n_constant.mb_left.desc,available: datasimple.all},
	mb_middle: {description: '[Constant]' + i18n_constant.mb_middle.desc,available: datasimple.all},
	mb_none: {description: '[Constant]' + i18n_constant.mb_none.desc,available: datasimple.all},
	mb_right: {description: '[Constant]' + i18n_constant.mb_right.desc,available: datasimple.all},
	network_socket_bluetooth: {description: '[Constant]' + i18n_constant.network_socket_bluetooth.desc,available: datasimple.gms1},
	network_socket_tcp: {description: '[Constant]' + i18n_constant.network_socket_tcp.desc,available: datasimple.gms1},
	network_socket_udp: {description: '[Constant]' + i18n_constant.network_socket_udp.desc,available: datasimple.gms1},
	network_type_connect: {description: '[Constant]' + i18n_constant.network_type_connect.desc,available: datasimple.gms1},
	network_type_data: {description: '[Constant]' + i18n_constant.network_type_data.desc,available: datasimple.gms1},
	network_type_disconnect: {description: '[Constant]' + i18n_constant.network_type_disconnect.desc,available: datasimple.gms1},
	noone: {description: '[Constant]' + i18n_constant.noone.desc,available: datasimple.all},
	OEM_CHARSET: {description: '[Constant]' + i18n_constant.OEM_CHARSET.desc,available: datasimple.all},
	of_challenge_lose: {description: '[Constant]' + i18n_constant.of_challenge_lose.desc,available: datasimple.gms1},
	of_challenge_tie: {description: '[Constant]' + i18n_constant.of_challenge_tie.desc,available: datasimple.gms1},
	of_challenge_win: {description: '[Constant]' + i18n_constant.of_challenge_win.desc,available: datasimple.gms1},
	os_android: {description: '[Constant]' + i18n_constant.os_android.desc,available: datasimple.gms1},
	os_ios: {description: '[Constant]' + i18n_constant.os_ios.desc,available: datasimple.gms1},
	os_linux: {description: '[Constant]' + i18n_constant.os_linux.desc,available: datasimple.gms1},
	os_macosx: {description: '[Constant]' + i18n_constant.os_macosx.desc,available: datasimple.gms1},
	os_psp: {description: '[Constant]' + i18n_constant.os_psp.desc,available: datasimple.gms1},
	os_symbian: {description: '[Constant]' + i18n_constant.os_symbian.desc,available: datasimple.gms1},
	os_tizen: {description: '[Constant]' + i18n_constant.os_tizen.desc,available: datasimple.gms1},
	os_unknown: {description: '[Constant]' + i18n_constant.os_unknown.desc,available: datasimple.gms1},
	os_win32: {description: '[Constant]' + i18n_constant.os_win32.desc,available: datasimple.gms1},
	os_win8native: {description: '[Constant]' + i18n_constant.os_win8native.desc,available: datasimple.gms1},
	os_windows: {description: '[Constant]' + i18n_constant.os_windows.desc,available: datasimple.gms1},
	os_winphone: {description: '[Constant]' + i18n_constant.os_winphone.desc,available: datasimple.gms1},
	other: {description: '[Constant]' + i18n_constant.other.desc,available: datasimple.all},
	ov_achievements: {description: '[Constant]' + i18n_constant.ov_achievements.desc,available: datasimple.gms1},
	ov_community: {description: '[Constant]' + i18n_constant.ov_community.desc,available: datasimple.gms1},
	ov_friends: {description: '[Constant]' + i18n_constant.ov_friends.desc,available: datasimple.gms1},
	ov_gamegroup: {description: '[Constant]' + i18n_constant.ov_gamegroup.desc,available: datasimple.gms1},
	ov_players: {description: '[Constant]' + i18n_constant.ov_players.desc,available: datasimple.gms1},
	ov_settings: {description: '[Constant]' + i18n_constant.ov_settings.desc,available: datasimple.gms1},
	phy_debug_render_aabb: {description: '[Constant]' + i18n_constant.phy_debug_render_aabb.desc,available: datasimple.gms1},
	phy_debug_render_collision_pairs: {description: '[Constant]' + i18n_constant.phy_debug_render_collision_pairs.desc,available: datasimple.gms1},
	phy_debug_render_coms: {description: '[Constant]' + i18n_constant.phy_debug_render_coms.desc,available: datasimple.gms1},
	phy_debug_render_core_shapes: {description: '[Constant]' + i18n_constant.phy_debug_render_core_shapes.desc,available: datasimple.gms1},
	phy_debug_render_joints: {description: '[Constant]' + i18n_constant.phy_debug_render_joints.desc,available: datasimple.gms1},
	phy_debug_render_obb: {description: '[Constant]' + i18n_constant.phy_debug_render_obb.desc,available: datasimple.gms1},
	phy_debug_render_shapes: {description: '[Constant]' + i18n_constant.phy_debug_render_shapes.desc,available: datasimple.gms1},
	phy_joint_anchor_1_x: {description: '[Constant]' + i18n_constant.phy_joint_anchor_1_x.desc,available: datasimple.gms1},
	phy_joint_anchor_1_y: {description: '[Constant]' + i18n_constant.phy_joint_anchor_1_y.desc,available: datasimple.gms1},
	phy_joint_anchor_2_x: {description: '[Constant]' + i18n_constant.phy_joint_anchor_2_x.desc,available: datasimple.gms1},
	phy_joint_anchor_2_y: {description: '[Constant]' + i18n_constant.phy_joint_anchor_2_y.desc,available: datasimple.gms1},
	phy_joint_angle: {description: '[Constant]' + i18n_constant.phy_joint_angle.desc,available: datasimple.gms1},
	phy_joint_angle_limits: {description: '[Constant]' + i18n_constant.phy_joint_angle_limits.desc,available: datasimple.gms1},
	phy_joint_damping_ratio: {description: '[Constant]' + i18n_constant.phy_joint_damping_ratio.desc,available: datasimple.gms1},
	phy_joint_frequency: {description: '[Constant]' + i18n_constant.phy_joint_frequency.desc,available: datasimple.gms1},
	phy_joint_length_1: {description: '[Constant]' + i18n_constant.phy_joint_length_1.desc,available: datasimple.gms1},
	phy_joint_length_2: {description: '[Constant]' + i18n_constant.phy_joint_length_2.desc,available: datasimple.gms1},
	phy_joint_lower_angle_limit: {description: '[Constant]' + i18n_constant.phy_joint_lower_angle_limit.desc,available: datasimple.gms1},
	phy_joint_max_motor_force: {description: '[Constant]' + i18n_constant.phy_joint_max_motor_force.desc,available: datasimple.gms1},
	phy_joint_max_motor_torque: {description: '[Constant]' + i18n_constant.phy_joint_max_motor_torque.desc,available: datasimple.gms1},
	phy_joint_motor_force: {description: '[Constant]' + i18n_constant.phy_joint_motor_force.desc,available: datasimple.gms1},
	phy_joint_motor_speed: {description: '[Constant]' + i18n_constant.phy_joint_motor_speed.desc,available: datasimple.gms1},
	phy_joint_motor_torque: {description: '[Constant]' + i18n_constant.phy_joint_motor_torque.desc,available: datasimple.gms1},
	phy_joint_reaction_force_x: {description: '[Constant]' + i18n_constant.phy_joint_reaction_force_x.desc,available: datasimple.gms1},
	phy_joint_reaction_force_y: {description: '[Constant]' + i18n_constant.phy_joint_reaction_force_y.desc,available: datasimple.gms1},
	phy_joint_reaction_torque: {description: '[Constant]' + i18n_constant.phy_joint_reaction_torque.desc,available: datasimple.gms1},
	phy_joint_speed: {description: '[Constant]' + i18n_constant.phy_joint_speed.desc,available: datasimple.gms1},
	phy_joint_translation: {description: '[Constant]' + i18n_constant.phy_joint_translation.desc,available: datasimple.gms1},
	phy_joint_upper_angle_limit: {description: '[Constant]' + i18n_constant.phy_joint_upper_angle_limit.desc,available: datasimple.gms1},
	pi: {description: '[Constant]' + i18n_constant.pi.desc,available: datasimple.all},
	pr_linelist: {description: '[Constant]' + i18n_constant.pr_linelist.desc,available: datasimple.all},
	pr_linestrip: {description: '[Constant]' + i18n_constant.pr_linestrip.desc,available: datasimple.all},
	pr_pointlist: {description: '[Constant]' + i18n_constant.pr_pointlist.desc,available: datasimple.all},
	pr_trianglefan: {description: '[Constant]' + i18n_constant.pr_trianglefan.desc,available: datasimple.all},
	pr_trianglelist: {description: '[Constant]' + i18n_constant.pr_trianglelist.desc,available: datasimple.all},
	pr_trianglestrip: {description: '[Constant]' + i18n_constant.pr_trianglestrip.desc,available: datasimple.all},
	ps_change_all: {description: '[Constant]' + i18n_constant.ps_change_all.desc,available: datasimple.all},
	ps_change_motion: {description: '[Constant]' + i18n_constant.ps_change_motion.desc,available: datasimple.all},
	ps_change_shape: {description: '[Constant]' + i18n_constant.ps_change_shape.desc,available: datasimple.all},
	ps_deflect_horizontal: {description: '[Constant]' + i18n_constant.ps_deflect_horizontal.desc,available: datasimple.all},
	ps_deflect_vertical: {description: '[Constant]' + i18n_constant.ps_deflect_vertical.desc,available: datasimple.all},
	ps_distr_gaussian: {description: '[Constant]' + i18n_constant.ps_distr_gaussian.desc,available: datasimple.all},
	ps_distr_invgaussian: {description: '[Constant]' + i18n_constant.ps_distr_invgaussian.desc,available: datasimple.all},
	ps_distr_linear: {description: '[Constant]' + i18n_constant.ps_distr_linear.desc,available: datasimple.all},
	ps_force_constant: {description: '[Constant]' + i18n_constant.ps_force_constant.desc,available: datasimple.all},
	ps_force_linear: {description: '[Constant]' + i18n_constant.ps_force_linear.desc,available: datasimple.all},
	ps_force_quadratic: {description: '[Constant]' + i18n_constant.ps_force_quadratic.desc,available: datasimple.all},
	ps_shape_diamond: {description: '[Constant]' + i18n_constant.ps_shape_diamond.desc,available: datasimple.all},
	ps_shape_ellipse: {description: '[Constant]' + i18n_constant.ps_shape_ellipse.desc,available: datasimple.all},
	ps_shape_line: {description: '[Constant]' + i18n_constant.ps_shape_line.desc,available: datasimple.all},
	ps_shape_rectangle: {description: '[Constant]' + i18n_constant.ps_shape_rectangle.desc,available: datasimple.all},
	pt_shape_circle: {description: '[Constant]' + i18n_constant.pt_shape_circle.desc,available: datasimple.all},
	pt_shape_cloud: {description: '[Constant]' + i18n_constant.pt_shape_cloud.desc,available: datasimple.all},
	pt_shape_disk: {description: '[Constant]' + i18n_constant.pt_shape_disk.desc,available: datasimple.all},
	pt_shape_explosion: {description: '[Constant]' + i18n_constant.pt_shape_explosion.desc,available: datasimple.all},
	pt_shape_flare: {description: '[Constant]' + i18n_constant.pt_shape_flare.desc,available: datasimple.all},
	pt_shape_line: {description: '[Constant]' + i18n_constant.pt_shape_line.desc,available: datasimple.all},
	pt_shape_pixel: {description: '[Constant]' + i18n_constant.pt_shape_pixel.desc,available: datasimple.all},
	pt_shape_ring: {description: '[Constant]' + i18n_constant.pt_shape_ring.desc,available: datasimple.all},
	pt_shape_smoke: {description: '[Constant]' + i18n_constant.pt_shape_smoke.desc,available: datasimple.all},
	pt_shape_snow: {description: '[Constant]' + i18n_constant.pt_shape_snow.desc,available: datasimple.all},
	pt_shape_spark: {description: '[Constant]' + i18n_constant.pt_shape_spark.desc,available: datasimple.all},
	pt_shape_sphere: {description: '[Constant]' + i18n_constant.pt_shape_sphere.desc,available: datasimple.all},
	pt_shape_square: {description: '[Constant]' + i18n_constant.pt_shape_square.desc,available: datasimple.all},
	pt_shape_star: {description: '[Constant]' + i18n_constant.pt_shape_star.desc,available: datasimple.all},
	RUSSIAN_CHARSET: {description: '[Constant]' + i18n_constant.RUSSIAN_CHARSET.desc,available: datasimple.all},
	self: {description: '[Constant]' + i18n_constant.self.desc,available: datasimple.all},
	SHIFTJIS_CHARSET: {description: '[Constant]' + i18n_constant.SHIFTJIS_CHARSET.desc,available: datasimple.all},
	SYMBOL_CHARSET: {description: '[Constant]' + i18n_constant.SYMBOL_CHARSET.desc,available: datasimple.all},
	THAI_CHARSET: {description: '[Constant]' + i18n_constant.THAI_CHARSET.desc,available: datasimple.all},
	true: {description: '[Constant]' + i18n_constant.true.desc,available: datasimple.all},
	TURKISH_CHARSET: {description: '[Constant]' + i18n_constant.TURKISH_CHARSET.desc,available: datasimple.all},
	ty_real: {description: '[Constant]' + i18n_constant.ty_real.desc,available: datasimple.all},
	ty_string: {description: '[Constant]' + i18n_constant.ty_string.desc,available: datasimple.all},
	vertex_type_colour: {description: '[Constant]' + i18n_constant.vertex_type_colour.desc,available: datasimple.gms1},
	vertex_type_float1: {description: '[Constant]' + i18n_constant.vertex_type_float1.desc,available: datasimple.gms1},
	vertex_type_float2: {description: '[Constant]' + i18n_constant.vertex_type_float2.desc,available: datasimple.gms1},
	vertex_type_float3: {description: '[Constant]' + i18n_constant.vertex_type_float3.desc,available: datasimple.gms1},
	vertex_type_float4: {description: '[Constant]' + i18n_constant.vertex_type_float4.desc,available: datasimple.gms1},
	vertex_type_ubyte4: {description: '[Constant]' + i18n_constant.vertex_type_ubyte4.desc,available: datasimple.gms1},
	vertex_usage_binormal: {description: '[Constant]' + i18n_constant.vertex_usage_binormal.desc,available: datasimple.gms1},
	vertex_usage_blendindices: {description: '[Constant]' + i18n_constant.vertex_usage_blendindices.desc,available: datasimple.gms1},
	vertex_usage_blendweight: {description: '[Constant]' + i18n_constant.vertex_usage_blendweight.desc,available: datasimple.gms1},
	vertex_usage_colour: {description: '[Constant]' + i18n_constant.vertex_usage_colour.desc,available: datasimple.gms1},
	vertex_usage_depth: {description: '[Constant]' + i18n_constant.vertex_usage_depth.desc,available: datasimple.gms1},
	vertex_usage_fog: {description: '[Constant]' + i18n_constant.vertex_usage_fog.desc,available: datasimple.gms1},
	vertex_usage_normal: {description: '[Constant]' + i18n_constant.vertex_usage_normal.desc,available: datasimple.gms1},
	vertex_usage_position: {description: '[Constant]' + i18n_constant.vertex_usage_position.desc,available: datasimple.gms1},
	vertex_usage_psize: {description: '[Constant]' + i18n_constant.vertex_usage_psize.desc,available: datasimple.gms1},
	vertex_usage_sample: {description: '[Constant]' + i18n_constant.vertex_usage_sample.desc,available: datasimple.gms1},
	vertex_usage_tagnet: {description: '[Constant]' + i18n_constant.vertex_usage_tagnet.desc,available: datasimple.gms1},
	vertex_usage_textcoord: {description: '[Constant]' + i18n_constant.vertex_usage_textcoord.desc,available: datasimple.gms1},
	VIETNAMESE_CHARSET: {description: '[Constant]' + i18n_constant.VIETNAMESE_CHARSET.desc,available: datasimple.all},
	vk_add: {description: '[Constant]' + i18n_constant.vk_add.desc,available: datasimple.all},
	vk_alt: {description: '[Constant]' + i18n_constant.vk_alt.desc,available: datasimple.all},
	vk_anykey: {description: '[Constant]' + i18n_constant.vk_anykey.desc,available: datasimple.all},
	vk_backspace: {description: '[Constant]' + i18n_constant.vk_backspace.desc,available: datasimple.all},
	vk_control: {description: '[Constant]' + i18n_constant.vk_control.desc,available: datasimple.all},
	vk_decimal: {description: '[Constant]' + i18n_constant.vk_decimal.desc,available: datasimple.all},
	vk_delete: {description: '[Constant]' + i18n_constant.vk_delete.desc,available: datasimple.all},
	vk_divide: {description: '[Constant]' + i18n_constant.vk_divide.desc,available: datasimple.all},
	vk_down: {description: '[Constant]' + i18n_constant.vk_down.desc,available: datasimple.all},
	vk_end: {description: '[Constant]' + i18n_constant.vk_end.desc,available: datasimple.all},
	vk_enter: {description: '[Constant]' + i18n_constant.vk_enter.desc,available: datasimple.all},
	vk_escape: {description: '[Constant]' + i18n_constant.vk_escape.desc,available: datasimple.all},
	vk_f1: {description: '[Constant]' + i18n_constant.vk_f1.desc,available: datasimple.all},
	vk_f10: {description: '[Constant]' + i18n_constant.vk_f10.desc,available: datasimple.all},
	vk_f11: {description: '[Constant]' + i18n_constant.vk_f11.desc,available: datasimple.all},
	vk_f12: {description: '[Constant]' + i18n_constant.vk_f12.desc,available: datasimple.all},
	vk_f2: {description: '[Constant]' + i18n_constant.vk_f2.desc,available: datasimple.all},
	vk_f3: {description: '[Constant]' + i18n_constant.vk_f3.desc,available: datasimple.all},
	vk_f4: {description: '[Constant]' + i18n_constant.vk_f4.desc,available: datasimple.all},
	vk_f5: {description: '[Constant]' + i18n_constant.vk_f5.desc,available: datasimple.all},
	vk_f6: {description: '[Constant]' + i18n_constant.vk_f6.desc,available: datasimple.all},
	vk_f7: {description: '[Constant]' + i18n_constant.vk_f7.desc,available: datasimple.all},
	vk_f8: {description: '[Constant]' + i18n_constant.vk_f8.desc,available: datasimple.all},
	vk_f9: {description: '[Constant]' + i18n_constant.vk_f9.desc,available: datasimple.all},
	vk_home: {description: '[Constant]' + i18n_constant.vk_home.desc,available: datasimple.all},
	vk_insert: {description: '[Constant]' + i18n_constant.vk_insert.desc,available: datasimple.all},
	vk_lalt: {description: '[Constant]' + i18n_constant.vk_lalt.desc,available: datasimple.all},
	vk_lcontrol: {description: '[Constant]' + i18n_constant.vk_lcontrol.desc,available: datasimple.all},
	vk_left: {description: '[Constant]' + i18n_constant.vk_left.desc,available: datasimple.all},
	vk_lshift: {description: '[Constant]' + i18n_constant.vk_lshift.desc,available: datasimple.all},
	vk_multiply: {description: '[Constant]' + i18n_constant.vk_multiply.desc,available: datasimple.all},
	vk_nokey: {description: '[Constant]' + i18n_constant.vk_nokey.desc,available: datasimple.all},
	vk_numpad0: {description: '[Constant]' + i18n_constant.vk_numpad0.desc,available: datasimple.all},
	vk_numpad1: {description: '[Constant]' + i18n_constant.vk_numpad1.desc,available: datasimple.all},
	vk_numpad2: {description: '[Constant]' + i18n_constant.vk_numpad2.desc,available: datasimple.all},
	vk_numpad3: {description: '[Constant]' + i18n_constant.vk_numpad3.desc,available: datasimple.all},
	vk_numpad4: {description: '[Constant]' + i18n_constant.vk_numpad4.desc,available: datasimple.all},
	vk_numpad5: {description: '[Constant]' + i18n_constant.vk_numpad5.desc,available: datasimple.all},
	vk_numpad6: {description: '[Constant]' + i18n_constant.vk_numpad6.desc,available: datasimple.all},
	vk_numpad7: {description: '[Constant]' + i18n_constant.vk_numpad7.desc,available: datasimple.all},
	vk_numpad8: {description: '[Constant]' + i18n_constant.vk_numpad8.desc,available: datasimple.all},
	vk_numpad9: {description: '[Constant]' + i18n_constant.vk_numpad9.desc,available: datasimple.all},
	vk_pagedown: {description: '[Constant]' + i18n_constant.vk_pagedown.desc,available: datasimple.all},
	vk_pageup: {description: '[Constant]' + i18n_constant.vk_pageup.desc,available: datasimple.all},
	vk_pause: {description: '[Constant]' + i18n_constant.vk_pause.desc,available: datasimple.all},
	vk_printscreen: {description: '[Constant]' + i18n_constant.vk_printscreen.desc,available: datasimple.all},
	vk_ralt: {description: '[Constant]' + i18n_constant.vk_ralt.desc,available: datasimple.all},
	vk_rcontrol: {description: '[Constant]' + i18n_constant.vk_rcontrol.desc,available: datasimple.all},
	vk_return: {description: '[Constant]' + i18n_constant.vk_return.desc,available: datasimple.all},
	vk_right: {description: '[Constant]' + i18n_constant.vk_right.desc,available: datasimple.all},
	vk_rshift: {description: '[Constant]' + i18n_constant.vk_rshift.desc,available: datasimple.all},
	vk_shift: {description: '[Constant]' + i18n_constant.vk_shift.desc,available: datasimple.all},
	vk_space: {description: '[Constant]' + i18n_constant.vk_space.desc,available: datasimple.all},
	vk_subtract: {description: '[Constant]' + i18n_constant.vk_subtract.desc,available: datasimple.all},
	vk_tab: {description: '[Constant]' + i18n_constant.vk_tab.desc,available: datasimple.all},
    vk_up: {description: '[Constant]' + i18n_constant.vk_up.desc,available: datasimple.all},
    
	//GameMaker 8.1 Only
	input_type: {description: '[Constant] (' + i18n_notice.gm_81_constant + ')' + i18n_constant.input_type.desc,available: datasimple.gm81},
	se_chorus: {description: '[Constant] (' + i18n_notice.gm_81_constant + ')' + i18n_constant.se_chorus.desc,available: datasimple.gm81},
	se_compressor: {description: '[Constant] (' + i18n_notice.gm_81_constant + ')' + i18n_constant.se_compressor.desc,available: datasimple.gm81},
	se_echo: {description: '[Constant] (' + i18n_notice.gm_81_constant + ')' + i18n_constant.se_echo.desc,available: datasimple.gm81},
	se_equalizer: {description: '[Constant] (' + i18n_notice.gm_81_constant + ')' + i18n_constant.se_equalizer.desc,available: datasimple.gm81},
	se_flanger: {description: '[Constant] (' + i18n_notice.gm_81_constant + ')' + i18n_constant.se_flanger.desc,available: datasimple.gm81},
	se_gargle: {description: '[Constant] (' + i18n_notice.gm_81_constant + ')' + i18n_constant.se_gargle.desc,available: datasimple.gm81},
	se_none: {description: '[Constant] (' + i18n_notice.gm_81_constant + ')' + i18n_constant.se_none.desc,available: datasimple.gm81},
	se_reverb: {description: '[Constant] (' + i18n_notice.gm_81_constant + ')' + i18n_constant.se_reverb.desc,available: datasimple.gm81},
	text_type: {description: '[Constant] (' + i18n_notice.gm_81_constant + ')' + i18n_constant.text_type.desc,available: datasimple.gm81},
	
	//New in GameMaker Studio 2
	undefined: {description: '[Constant] (' + i18n_notice.new_2 + ')' + i18n_constant.undefined.desc,available: datasimple.gms2},
	pointer_invalid: {description: '[Constant] (' + i18n_notice.new_2 + ')' + i18n_constant.pointer_invalid.desc,available: datasimple.gms2},
	pointer_null: {description: '[Constant] (' + i18n_notice.new_2 + ')' + i18n_constant.pointer_null.desc,available: datasimple.gms2},
	path_action_stop: {description: '[Constant] (' + i18n_notice.new_2 + ')' + i18n_constant.path_action_stop.desc,available: datasimple.gms2},
	path_action_restart: {description: '[Constant] (' + i18n_notice.new_2 + ')' + i18n_constant.path_action_restart.desc,available: datasimple.gms2},
	path_action_continue: {description: '[Constant] (' + i18n_notice.new_2 + ')' + i18n_constant.path_action_continue.desc,available: datasimple.gms2},
	path_action_reverse: {description: '[Constant] (' + i18n_notice.new_2 + ')' + i18n_constant.path_action_reverse.desc,available: datasimple.gms2},
	gamespeed_fps: {description: '[Constant] (' + i18n_notice.new_2 + ')' + i18n_constant.gamespeed_fps.desc,available: datasimple.gms2},
	gamespeed_microseconds: {description: '[Constant] (' + i18n_notice.new_2 + ')' + i18n_constant.gamespeed_microseconds.desc,available: datasimple.gms2},
	ev_gesture: {description: '[Constant] (' + i18n_notice.new_2 + ')' + i18n_constant.ev_gesture.desc,available: datasimple.gms2},
	ev_gesture_tap: {description: '[Constant] (' + i18n_notice.new_2 + ')' + i18n_constant.ev_gesture_tap.desc,available: datasimple.gms2},
	ev_gesture_double_tap: {description: '[Constant] (' + i18n_notice.new_2 + ')' + i18n_constant.ev_gesture_double_tap.desc,available: datasimple.gms2},
	ev_gesture_drag_start: {description: '[Constant] (' + i18n_notice.new_2 + ')' + i18n_constant.ev_gesture_drag_start.desc,available: datasimple.gms2},
	ev_gesture_dragging: {description: '[Constant] (' + i18n_notice.new_2 + ')' + i18n_constant.ev_gesture_dragging.desc,available: datasimple.gms2},
	ev_gesture_drag_end: {description: '[Constant] (' + i18n_notice.new_2 + ')' + i18n_constant.ev_gesture_drag_end.desc,available: datasimple.gms2},
	ev_gesture_flick: {description: '[Constant] (' + i18n_notice.new_2 + ')' + i18n_constant.ev_gesture_flick.desc,available: datasimple.gms2},
	ev_gesture_pinch_start: {description: '[Constant] (' + i18n_notice.new_2 + ')' + i18n_constant.ev_gesture_pinch_start.desc,available: datasimple.gms2},
	ev_gesture_pinch_in: {description: '[Constant] (' + i18n_notice.new_2 + ')' + i18n_constant.ev_gesture_pinch_in.desc,available: datasimple.gms2},
	ev_gesture_pinch_out: {description: '[Constant] (' + i18n_notice.new_2 + ')' + i18n_constant.ev_gesture_pinch_out.desc,available: datasimple.gms2},
	ev_gesture_pinch_end: {description: '[Constant] (' + i18n_notice.new_2 + ')' + i18n_constant.ev_gesture_pinch_end.desc,available: datasimple.gms2},
	ev_gesture_rotate_start: {description: '[Constant] (' + i18n_notice.new_2 + ')' + i18n_constant.ev_gesture_rotate_start.desc,available: datasimple.gms2},
	ev_gesture_rotating: {description: '[Constant] (' + i18n_notice.new_2 + ')' + i18n_constant.ev_gesture_rotating.desc,available: datasimple.gms2},
	ev_gesture_rotate_end: {description: '[Constant] (' + i18n_notice.new_2 + ')' + i18n_constant.ev_gesture_rotate_end.desc,available: datasimple.gms2},
	ev_global_gesture_tap: {description: '[Constant] (' + i18n_notice.new_2 + ')' + i18n_constant.ev_global_gesture_tap.desc,available: datasimple.gms2},
	ev_global_gesture_double_tap: {description: '[Constant] (' + i18n_notice.new_2 + ')' + i18n_constant.ev_global_gesture_double_tap.desc,available: datasimple.gms2},
	ev_global_gesture_drag_start: {description: '[Constant] (' + i18n_notice.new_2 + ')' + i18n_constant.ev_global_gesture_drag_start.desc,available: datasimple.gms2},
	ev_global_gesture_dragging: {description: '[Constant] (' + i18n_notice.new_2 + ')' + i18n_constant.ev_global_gesture_dragging.desc,available: datasimple.gms2},
	ev_global_gesture_drag_end: {description: '[Constant] (' + i18n_notice.new_2 + ')' + i18n_constant.ev_global_gesture_drag_end.desc,available: datasimple.gms2},
	ev_global_gesture_flick: {description: '[Constant] (' + i18n_notice.new_2 + ')' + i18n_constant.ev_global_gesture_flick.desc,available: datasimple.gms2},
	ev_global_gesture_pinch_start: {description: '[Constant] (' + i18n_notice.new_2 + ')' + i18n_constant.ev_global_gesture_pinch_start.desc,available: datasimple.gms2},
	ev_global_gesture_pinch_in: {description: '[Constant] (' + i18n_notice.new_2 + ')' + i18n_constant.ev_global_gesture_pinch_in.desc,available: datasimple.gms2},
	ev_global_gesture_pinch_out: {description: '[Constant] (' + i18n_notice.new_2 + ')' + i18n_constant.ev_global_gesture_pinch_out.desc,available: datasimple.gms2},
	ev_global_gesture_pinch_end: {description: '[Constant] (' + i18n_notice.new_2 + ')' + i18n_constant.ev_global_gesture_pinch_end.desc,available: datasimple.gms2},
	ev_global_gesture_rotate_start: {description: '[Constant] (' + i18n_notice.new_2 + ')' + i18n_constant.ev_global_gesture_rotate_start.desc,available: datasimple.gms2},
	ev_global_gesture_rotating: {description: '[Constant] (' + i18n_notice.new_2 + ')' + i18n_constant.ev_global_gesture_rotating.desc,available: datasimple.gms2},
	ev_global_gesture_rotate_end: {description: '[Constant] (' + i18n_notice.new_2 + ')' + i18n_constant.ev_global_gesture_rotate_end.desc,available: datasimple.gms2},
	bm_complex: {description: '[Constant] (' + i18n_notice.new_2 + ')' + i18n_constant.bm_complex.desc,available: datasimple.gms2},
	tf_point: {description: '[Constant] (' + i18n_notice.new_2 + ')' + i18n_constant.tf_point.desc,available: datasimple.gms2},
	tf_linear: {description: '[Constant] (' + i18n_notice.new_2 + ')' + i18n_constant.tf_linear.desc,available: datasimple.gms2},
	tf_anisotropic: {description: '[Constant] (' + i18n_notice.new_2 + ')' + i18n_constant.tf_anisotropic.desc,available: datasimple.gms2},
	mip_off: {description: '[Constant] (' + i18n_notice.new_2 + ')' + i18n_constant.mip_off.desc,available: datasimple.gms2},
	mip_on: {description: '[Constant] (' + i18n_notice.new_2 + ')' + i18n_constant.mip_on.desc,available: datasimple.gms2},
	mip_markedonly: {description: '[Constant] (' + i18n_notice.new_2 + ')' + i18n_constant.mip_markedonly.desc,available: datasimple.gms2},
	asset_tiles: {description: '[Constant] (' + i18n_notice.new_2 + ')' + i18n_constant.asset_tiles.desc,available: datasimple.gms2},
	asset_shader: {description: '[Constant] (' + i18n_notice.new_2 + ')' + i18n_constant.asset_shader.desc,available: datasimple.gms2},
	tile_rotate: {description: '[Constant] (' + i18n_notice.new_2 + ')' + i18n_constant.tile_rotate.desc,available: datasimple.gms2},
	tile_flip: {description: '[Constant] (' + i18n_notice.new_2 + ')' + i18n_constant.tile_flip.desc,available: datasimple.gms2},
	tile_mirror: {description: '[Constant] (' + i18n_notice.new_2 + ')' + i18n_constant.tile_mirror.desc,available: datasimple.gms2},
	tile_index_mask: {description: '[Constant] (' + i18n_notice.new_2 + ')' + i18n_constant.tile_index_mask.desc,available: datasimple.gms2},
	layerelementtype_undefined: {description: '[Constant] (' + i18n_notice.new_2 + ')' + i18n_constant.layerelementtype_undefined.desc,available: datasimple.gms2},
	layerelementtype_background: {description: '[Constant] (' + i18n_notice.new_2 + ')' + i18n_constant.layerelementtype_background.desc,available: datasimple.gms2},
	layerelementtype_instance: {description: '[Constant] (' + i18n_notice.new_2 + ')' + i18n_constant.layerelementtype_instance.desc,available: datasimple.gms2},
	layerelementtype_oldtilemap: {description: '[Constant] (' + i18n_notice.new_2 + ')' + i18n_constant.layerelementtype_oldtilemap.desc,available: datasimple.gms2},
	layerelementtype_sprite: {description: '[Constant] (' + i18n_notice.new_2 + ')' + i18n_constant.layerelementtype_sprite.desc,available: datasimple.gms2},
	layerelementtype_tilemap: {description: '[Constant] (' + i18n_notice.new_2 + ')' + i18n_constant.layerelementtype_tilemap.desc,available: datasimple.gms2},
	layerelementtype_particlesystem: {description: '[Constant] (' + i18n_notice.new_2 + ')' + i18n_constant.layerelementtype_particlesystem.desc,available: datasimple.gms2},
	layerelementtype_tile: {description: '[Constant] (' + i18n_notice.new_2 + ')' + i18n_constant.layerelementtype_tile.desc,available: datasimple.gms2},
	cmpfunc_never: {description: '[Constant] (' + i18n_notice.new_2 + ')' + i18n_constant.cmpfunc_never.desc,available: datasimple.gms2},
	cmpfunc_less: {description: '[Constant] (' + i18n_notice.new_2 + ')' + i18n_constant.cmpfunc_less.desc,available: datasimple.gms2},
	cmpfunc_equal: {description: '[Constant] (' + i18n_notice.new_2 + ')' + i18n_constant.cmpfunc_equal.desc,available: datasimple.gms2},
	cmpfunc_lessequal: {description: '[Constant] (' + i18n_notice.new_2 + ')' + i18n_constant.cmpfunc_lessequal.desc,available: datasimple.gms2},
	cmpfunc_greater: {description: '[Constant] (' + i18n_notice.new_2 + ')' + i18n_constant.cmpfunc_greater.desc,available: datasimple.gms2},
	cmpfunc_notequal: {description: '[Constant] (' + i18n_notice.new_2 + ')' + i18n_constant.cmpfunc_notequal.desc,available: datasimple.gms2},
	cmpfunc_greaterequal: {description: '[Constant] (' + i18n_notice.new_2 + ')' + i18n_constant.cmpfunc_greaterequal.desc,available: datasimple.gms2},
	cmpfunc_always: {description: '[Constant] (' + i18n_notice.new_2 + ')' + i18n_constant.cmpfunc_always.desc,available: datasimple.gms2},
	cull_noculling: {description: '[Constant] (' + i18n_notice.new_2 + ')' + i18n_constant.cull_noculling.desc,available: datasimple.gms2},
	cull_clockwise: {description: '[Constant] (' + i18n_notice.new_2 + ')' + i18n_constant.cull_clockwise.desc,available: datasimple.gms2},
	cull_counterclockwise: {description: '[Constant] (' + i18n_notice.new_2 + ')' + i18n_constant.cull_counterclockwise.desc,available: datasimple.gms2},
	lighttype_dir: {description: '[Constant] (' + i18n_notice.new_2 + ')' + i18n_constant.lighttype_dir.desc,available: datasimple.gms2},
	lighttype_point: {description: '[Constant] (' + i18n_notice.new_2 + ')' + i18n_constant.lighttype_point.desc,available: datasimple.gms2},
	spritespeed_framespersecond: {description: '[Constant] (' + i18n_notice.new_2 + ')' + i18n_constant.spritespeed_framespersecond.desc,available: datasimple.gms2},
	spritespeed_framespergameframe: {description: '[Constant] (' + i18n_notice.new_2 + ')' + i18n_constant.spritespeed_framespergameframe.desc,available: datasimple.gms2},
	browser_edge: {description: '[Constant] (' + i18n_notice.new_2 + ')' + i18n_constant.browser_edge.desc,available: datasimple.gms2},
	of_challen: {description: '[Constant] (' + i18n_notice.new_2 + ')' + i18n_constant.of_challen.desc,available: datasimple.gms2},
	ge_lose: {description: '[Constant] (' + i18n_notice.new_2 + ')' + i18n_constant.ge_lose.desc,available: datasimple.gms2},
	buffer_text: {description: '[Constant] (' + i18n_notice.new_2 + ')' + i18n_constant.buffer_text.desc,available: datasimple.gms2}
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