/*
 * SPDX-FileCopyrightText: 2018-2021 Nathaniel Fitzenrider <nathaniel.fitzenrider@gmail.com>
 *
 * SPDX-License-Identifier: MIT
 */

function copytoClipboard(text) {
    tmp = document.createElement('textarea');
    document.body.appendChild(tmp);
    tmp.value = text;

    tmp.select();
    document.execCommand('copy');
    document.body.removeChild(tmp);
}
