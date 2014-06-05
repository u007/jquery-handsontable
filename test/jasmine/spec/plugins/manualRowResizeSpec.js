describe('manualRowResize', function () {
  var id = 'test';
  var defaultRowHeight = 23;

  beforeEach(function () {
    this.$container = $('<div id="' + id + '"></div>').appendTo('body');
  });

  afterEach(function () {
    if (this.$container) {
      destroy();
      this.$container.remove();
    }
  });

  it("should change row heights at init", function () {
    handsontable({
      rowHeaders: true,
      manualRowResize: [50, 40, 100]
    });

    expect(this.$container.find('tbody tr:eq(0) th:eq(0)').height()).toEqual(50);
    expect(this.$container.find('tbody tr:eq(1) th:eq(0)').height()).toEqual(40);
    expect(this.$container.find('tbody tr:eq(2) td:eq(0)').height()).toEqual(100);
  });

  it("should change the default row height with updateSettings", function () {
    handsontable({
      manualRowResize: true
    });

    expect(this.$container.find('tbody tr:eq(0) td:eq(0)').height()).toEqual(defaultRowHeight);
    expect(this.$container.find('tbody tr:eq(1) td:eq(0)').height()).toEqual(defaultRowHeight);
    expect(this.$container.find('tbody tr:eq(2) td:eq(0)').height()).toEqual(defaultRowHeight);

    updateSettings({
      manualRowResize: [60, 50, 80]
    });

    expect(this.$container.find('tbody tr:eq(0) td:eq(0)').height()).toEqual(60);
    expect(this.$container.find('tbody tr:eq(1) td:eq(0)').height()).toEqual(50);
    expect(this.$container.find('tbody tr:eq(2) td:eq(0)').height()).toEqual(80);
  });

  it("should change the row height with updateSettings", function () {
    handsontable({
      manualRowResize: [60, 50, 80]
    });

    expect(this.$container.find('tbody tr:eq(0) td:eq(0)').height()).toEqual(60);
    expect(this.$container.find('tbody tr:eq(1) td:eq(0)').height()).toEqual(50);
    expect(this.$container.find('tbody tr:eq(2) td:eq(0)').height()).toEqual(80);

    updateSettings({
      manualRowResize: [30, 80, 100]
    });

    expect(this.$container.find('tbody tr:eq(0) td:eq(0)').height()).toEqual(30);
    expect(this.$container.find('tbody tr:eq(1) td:eq(0)').height()).toEqual(80);
    expect(this.$container.find('tbody tr:eq(2) td:eq(0)').height()).toEqual(100);
  });

  it("should reset row height", function () {
    handsontable({
      manualRowResize: true
    });

    expect(this.$container.find('tbody tr:eq(0) td:eq(0)').height()).toEqual(defaultRowHeight);
    expect(this.$container.find('tbody tr:eq(1) td:eq(0)').height()).toEqual(defaultRowHeight);
    expect(this.$container.find('tbody tr:eq(2) td:eq(0)').height()).toEqual(defaultRowHeight);

    updateSettings({
      manualRowResize: true
    });

    expect(this.$container.find('tbody tr:eq(0) td:eq(0)').height()).toEqual(defaultRowHeight);
    expect(this.$container.find('tbody tr:eq(1) td:eq(0)').height()).toEqual(defaultRowHeight);
    expect(this.$container.find('tbody tr:eq(2) td:eq(0)').height()).toEqual(defaultRowHeight);
  });
});
