/**
 * @overview Contains unit tests for `./src/constants.js`.
 * @license Unlicense
 * @author Eric Cornelissen <ericornelissen@gmail.com>
 */

import assert from "assert";

import {
  regexpPowerShell,
  shellRequiredError,
  typeError,
  win32,
} from "../src/constants.js";

describe("constants.js", function () {
  describe("::regexpPowerShell", function () {
    const powerShellExe = "powershell.exe";

    it(`matches '${powerShellExe}'`, function () {
      assert.match(powerShellExe, regexpPowerShell);
    });

    it(`matches a string ending in '${powerShellExe}'`, function () {
      assert.match(`C:\\Windows\\${powerShellExe}`, regexpPowerShell);
    });

    it(`doesn't match a string not containing '${powerShellExe}'`, function () {
      assert.doesNotMatch("cmd.exe", regexpPowerShell);
    });

    it(`doesn't match a string containing '${powerShellExe}'`, function () {
      assert.doesNotMatch(`${powerShellExe} is a file`, regexpPowerShell);
    });
  });

  describe("::shellRequiredError", function () {
    it("contains a reference to Shescape", function () {
      const result = shellRequiredError.includes("Shescape");
      assert.ok(result);
    });

    it("contains a reference to `shell`", function () {
      const result = shellRequiredError.includes("shell");
      assert.ok(result);
    });
  });

  describe("::typeError", function () {
    it("contains a reference to Shescape", function () {
      const result = typeError.includes("Shescape");
      assert.ok(result);
    });

    it("contains a reference to `toString`", function () {
      const result = typeError.includes("toString");
      assert.ok(result);
    });
  });

  describe("::win32", function () {
    it("equals 'win32'", function () {
      assert.strictEqual(win32, "win32");
    });
  });
});
