import { mount } from '@vue/test-utils'
import Pagination from '@/components/Pagination'

describe('LoaderComponent', () => {
  const wrapperNoProps = mount(Pagination);

  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  });

  test('should have no default data', function () {
    expect(wrapperNoProps.vm._data).toEqual({});
  });

  test('should have no default props', function () {
    expect(wrapperNoProps.props()).toEqual({});
  });

  /* ---------------- with props ---------------*/
  const wrapper = mount(
    Pagination, {
      propsData: {
        currentPage: '1',
        lastPage: 3
      }
    }
  );

  test('should have received 2 props', function () {
    expect(wrapper.props()).toEqual({"currentPage": "1", "lastPage": 3});
  });

  test('should still have no data', function () {
    expect(wrapper.vm._data).toEqual({});
  });

  test('should have default html', function () {
    expect(wrapper.html()).toBe(
      `<div class="pagination"><button disabled="disabled" class="btn btn-default">
    Previous
  </button> <span>Page 1 of 3</span> <button class="btn btn-default">Next
  </button></div>`
    );
  });

});
